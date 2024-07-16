const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;
      next();
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};

const verifyPassword = async (password, hashedPassword) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (err) {
    console.error(err);
    return false;
  }
};

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);

    if (!user) {
      res.sendStatus(401);
      return;
    }

    const isPasswordVerified = await verifyPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordVerified) {
      res.sendStatus(401);
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        is_admin: user.is_admin,
        is_superadmin: user.is_superadmin,
      },
      process.env.APP_SECRET,
      { expiresIn: "24h" }
    );

    delete user.password;

    if (token)
      res.status(200).send({
        token,
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          is_admin: user.is_admin,
          is_superadmin: user.is_superadmin,
        },
      });
  } catch (err) {
    next(err);
  }
};

const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.sendStatus(401);
    return;
  }

  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer") {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, process.env.APP_SECRET, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      next();
    }
  });
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.is_admin === true) {
    return res.sendStatus(403); // Forbidden
  }
  return next();
};

module.exports = {
  login,
  hashPassword,
  authorize,
  authorizeAdmin,
};
