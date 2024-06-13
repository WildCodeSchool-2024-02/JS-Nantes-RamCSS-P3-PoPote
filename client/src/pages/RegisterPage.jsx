import UserForm from "../components/UserForm";

function RegisterPage() {
  return (
    <section className="register-page">
      <svg
        width="375"
        height="812"
        viewBox="0 0 375 812"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_532_1729)">
          <rect width="375" height="812" fill="#F57C00" />
          <path
            d="M250 351.5C250 455.053 159.785 539 48.5 539C-62.7854 539 -153 455.053 -153 351.5C-153 247.947 -62.7854 164 48.5 164C159.785 164 250 247.947 250 351.5Z"
            fill="#C06100"
          />
          <path
            d="M390 315C390 391.768 325.977 454 247 454C168.023 454 104 391.768 104 315C104 238.232 168.023 176 247 176C325.977 176 390 238.232 390 315Z"
            fill="#F57C00"
          />
          <path
            d="M428 760.5C428 908.788 292.118 1029 124.5 1029C-43.1184 1029 -179 908.788 -179 760.5C-179 612.212 -43.1184 492 124.5 492C292.118 492 428 612.212 428 760.5Z"
            fill="#A55400"
          />
        </g>
        <defs>
          <clipPath id="clip0_532_1729">
            <rect width="375" height="812" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h1>Bienvenue chez</h1>
      <h2>Rejoignez la communauté</h2>
      <p>
        Retrouvez vos recettes préférées et les recettes du moment pour rester
        inspiré au quotidien !
      </p>
      <UserForm />
    </section>
  );
}

export default RegisterPage;
