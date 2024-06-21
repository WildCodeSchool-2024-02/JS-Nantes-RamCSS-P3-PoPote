create table user (
  id int primary key auto_increment not null,
  firstname varchar(55) not null,
  lastname varchar(55) not null,
  email varchar(80) not null unique,
  password varchar(50) not null,
  url_photo varchar(80) null,
  is_admin bool not null default 0,
  is_superadmin bool not null default 0
);

create table recipe (
  id int primary key auto_increment not null,
  title varchar(55) not null,
  url_photo varchar(80) null,
  duration time null,
  people_number int not null,
  step_description text not null,
  user_id int not null,
  foreign key(user_id) references user(id)
);

create table ingredient (
  id int primary key auto_increment not null,
  name varchar(55) not null,
  nutritional_value int not null
);

create table category (
  id int primary key auto_increment not null,
  name varchar(50) not null
);

create table tool (
  id int primary key auto_increment not null,
  name varchar(50) not null
);

create table add_favorite(
  user_id int not null,
  foreign key(user_id) references user(id),
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id)
);

create table add_ingredient(
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id),
  ingredient_id int not null,
  foreign key(ingredient_id) references ingredient(id),
  quantity int not null,
  unit varchar(10) not null
);

create table add_category(
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id),
  category_id int not null,
  foreign key(category_id) references category(id)
);

create table add_comment(
  id int primary key auto_increment not null,
  title varchar(80) not null,
  description text not null,
  rate int(5) not null,
  user_id int not null,
  foreign key(user_id) references user(id),
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id)
);

create table add_tool(
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id),
  tool_id int not null,
  foreign key(tool_id) references tool(id),
  quantity int not null
);

-- table user
INSERT INTO user (firstname, lastname, email, password, url_photo, is_admin, is_superadmin) VALUES
( 'Alice', 'Smith', 'alice.smith@example.com', 'password123', 'http://example.com/photos/alice.jpg', TRUE, FALSE),
( 'Bob', 'Johnson', 'bob.johnson@example.com', 'securepassword', 'http://example.com/photos/bob.jpg', FALSE, FALSE),
( 'Charlie', 'Brown', 'charlie.brown@example.com', 'mypassword', 'http://example.com/photos/charlie.jpg', TRUE, TRUE),
( 'Diana', 'Prince', 'diana.prince@example.com', 'dianaPW', 'http://example.com/photos/diana.jpg', FALSE, FALSE),
( 'Eva', 'Green', 'eva.green@example.com', 'evaPassword', 'http://example.com/photos/eva.jpg', FALSE, FALSE);

-- table recipe
INSERT INTO recipe ( title, url_photo, duration, people_number, step_description, user_id) VALUES
( 'Tarte aux pommes', '/assets/images/recipe_image/tarte-au-pommes.jpg', '01:00:00', 4, 'Étaler la pâte, ajouter les pommes et cuire au four.', 1),
( 'Soupe de légumes', '/assets/images/recipe_image/soupe-legume.jpg', '00:30:00', 2, 'Faire cuire les légumes et mixer.', 2),
( 'Spaghetti bolognaise', '/assets/images/recipe_image/pate-bolognaise.jpg', '00:45:00', 4, 'Faire revenir la viande, ajouter la sauce tomate et cuire les spaghettis.', 3),
( 'Poulet rôti', '/assets/images/recipe_image/poulet-roti.jpg', '01:30:00', 6, 'Assaisonner le poulet et le rôtir au four.', 4),
( 'Salade César', '/assets/images/recipe_image/salade-cesar.jpg', '00:20:00', 2, 'Mélanger la laitue, le poulet grillé, les croûtons et la sauce César.', 5),
( 'Gâteau au chocolat', '/assets/images/recipe_image/gateau-chocolat.jpg', '00:01:00', 8, 'Mélanger les ingrédients, cuire au four et laisser refroidir.', 1);

-- table ingredient
INSERT INTO ingredient (name, nutritional_value) VALUES
( 'Pommes', 52),
( 'Sucre', 387),
( 'Farine', 364),
( 'Beurre', 717),
( 'Carottes', 41),
( 'Pommes de terre', 80),
( 'Oignons', 40),
( 'Spaghetti', 157),
( 'Viande hachée', 250),
( 'Sauce tomate', 29),
( 'Poulet', 239),
( 'Laitue', 15),
( 'Croûtons', 407),
( 'Sauce César', 550),
( 'Chocolat', 546),
( 'Œufs', 155);

-- table add_ingredient
INSERT INTO add_ingredient ( recipe_id, ingredient_id, quantity, unit) VALUES
-- Tarte aux pommes
(1, 1, 600, 'grammes'),
(1, 2, 100, 'grammes'),
(1, 3, 200, 'grammes'),
(1, 4, 100, 'grammes'),

-- Soupe de légumes
(2, 5, 300, 'grammes'),
(2, 6, 300, 'grammes'),
(2, 7, 150, 'grammes'),

-- Spaghetti bolognaise
(3, 8, 400, 'grammes'),
(3, 9, 300, 'grammes'),
(3, 10, 200, 'grammes'),
(3, 2, 50, 'grammes'),

-- Poulet rôti
(4, 11, 1200, 'grammes'),
(4, 7, 100, 'grammes'),
(4, 6, 300, 'grammes'),

-- Salade César
(5, 12, 200, 'grammes'),
(5, 11, 200, 'grammes'),
(5, 13, 50, 'grammes'),
(5, 14, 100, 'grammes'),

-- Gâteau au chocolat
(6, 3, 200, 'grammes'),
(6, 15, 200, 'grammes'),
(6, 2, 100, 'grammes'),
(6, 16, 3, 'pièces');

-- table category
INSERT INTO category ( id, name) VALUES
(1, 'salade'),
(2, 'soupe'),
(3, 'sandwich'),
(4, 'pizzas'),
(5, 'pâtes'),
(6, 'plats mijotés'),
(7, 'grillade'),
(8, 'fruits de mer'),
(9, 'poissons'),
(10, 'burgers'),
(11, 'végétarien'),
(12, 'indien'),
(13, 'mexicain'),
(14, 'italien'),
(15, 'français'),
(16, 'marocain'),
(17, 'chinois'),
(18, 'japonais'),
(19, 'thaïlandais'),
(20, 'espagnol'),
(21, 'grec'),
(22, 'turc'),
(23, 'quiches'),
(24, 'dessert'),
(25, 'entrée'),
(26, 'plat principal'),
(27, 'collation'),
(28, 'cocktail'),
(29, 'amuse-bouche'),
(30, 'sauce');

INSERT INTO tool (id, name) VALUES
(1, 'Couteau'),
(2, 'Planche à découper'),
(3, 'Fouet'),
(4, 'Casserole'),
(5, 'Poêle'),
(6, 'Mixeur'),
(7, 'Batteur électrique'),
(8, 'Épluche-légumes'),
(9, 'Cuillère en bois'),
(10, 'Pinceau de cuisine'),
(11, 'Passoire'),
(12, 'Ustensiles de barbecue'),
(13, 'Rouleau à pâtisserie'),
(14, 'Presse-agrumes'),
(15, 'Écumoire'),
(16, 'Spatule'),
(17, 'Ciseaux de cuisine'),
(18, 'Thermomètre de cuisine'),
(19, 'Égouttoir'),
(20, 'Entonnoir'),
(21, 'Brosse de nettoyage'),
(22, 'Pilon'),
(23, 'Fouet à main'),
(24, 'Louche'),
(25, 'Râpe'),
(26, 'Pelle à tarte'),
(27, 'Pince alimentaire'),
(28, 'Piques à brochettes'),
(29, 'Éplucheur à julienne'),
(30, 'Presse-purée'),
(31, 'Siphon à crème chantilly'),
(32, 'Pichet doseur'),
(33, 'Égouttoir à vaisselle'),
(34, 'Tire-bouchon'),
(35, 'Découpe-pizza'),
(36, 'Essoreuse à salade'),
(37, 'Zesteur'),
(38, 'Mandoline'),
(39, 'Ouvre-boîte'),
(40, 'Tapis de cuisson'),
(41, 'Plateau de service'),
(42, 'Moule à muffins'),
(43, 'Cuiseur à riz'),
(44, 'Moulin à épices'),
(45, 'Plateau à fromage'),
(46, 'Sorbetière'),
(47, 'Cuiseur vapeur'),
(48, 'Cocotte-minute'),
(49, 'Fouet électrique'),
(50, 'Pince à glaçons');

INSERT INTO add_favorite ( user_id, recipe_id) VALUES
(1, 1),
(2, 4),
(3, 6),
(4, 2),
(5, 5);

INSERT INTO add_category (recipe_id, category_id) VALUES
(1, 24),
(2, 2),
(3, 14),
(4, 26),
(5, 1),
(6, 24);

INSERT INTO add_comment (id, title, description, rate, user_id, recipe_id) VALUES
(1, 'Délicieuse tarte', 'La tarte aux pommes était vraiment délicieuse et bien croustillante.', 5, 1, 1),
(2, 'Soupe réconfortante', 'Cette soupe de légumes est parfaite pour les soirées froides.', 4, 2, 2),
(3, 'Spaghetti authentiques', 'Les spaghetti bolognaise avaient une sauce très savoureuse.', 5, 3, 3),
(4, 'Poulet bien rôti', 'Le poulet rôti était juteux et parfaitement cuit.', 4, 4, 4),
(5, 'Salade fraîche', 'La salade César était fraîche et bien assaisonnée.', 5, 5, 5),
(6, 'Excellent gâteau', 'Le gâteau au chocolat était moelleux et fondant.', 5, 1, 6),
(7, 'Un régal', 'Je me suis régalé avec la tarte aux pommes.', 4, 2, 1),
(8, 'Parfait pour l’hiver', 'La soupe de légumes était bien épicée et réconfortante.', 5, 3, 2),
(9, 'Délicieux spaghetti', 'Les spaghetti bolognaise étaient vraiment délicieux, comme en Italie.', 5, 4, 3);

INSERT INTO add_tool (recipe_id, tool_id, quantity) VALUES
(1, 1, 1),   -- Tarte aux pommes - Couteau
(1, 2, 1),   -- Tarte aux pommes - Planche à découper
(1, 13, 1),  -- Tarte aux pommes - Rouleau à pâtisserie
(1, 9, 1),   -- Tarte aux pommes - Cuillère en bois
(1, 42, 1),  -- Tarte aux pommes - Moule à muffins

(2, 1, 1),   -- Soupe de légumes - Couteau
(2, 2, 1),   -- Soupe de légumes - Planche à découper
(2, 4, 1),   -- Soupe de légumes - Casserole
(2, 16, 1),  -- Soupe de légumes - Spatule
(2, 8, 1),   -- Soupe de légumes - Épluche-légumes

(3, 1, 1),   -- Spaghetti bolognaise - Couteau
(3, 2, 1),   -- Spaghetti bolognaise - Planche à découper
(3, 4, 1),   -- Spaghetti bolognaise - Casserole
(3, 5, 1),   -- Spaghetti bolognaise - Poêle
(3, 11, 1),  -- Spaghetti bolognaise - Passoire

(4, 1, 1),   -- Poulet rôti - Couteau
(4, 2, 1),   -- Poulet rôti - Planche à découper
(4, 12, 1),  -- Poulet rôti - Ustensiles de barbecue
(4, 16, 1),  -- Poulet rôti - Spatule
(4, 17, 1),  -- Poulet rôti - Ciseaux de cuisine

(5, 1, 1),   -- Salade César - Couteau
(5, 2, 1),   -- Salade César - Planche à découper
(5, 9, 1),   -- Salade César - Cuillère en bois
(5, 36, 1),  -- Salade César - Essoreuse à salade
(5, 45, 1),  -- Salade César - Plateau à fromage

(6, 1, 1),   -- Gâteau au chocolat - Couteau
(6, 3, 1),   -- Gâteau au chocolat - Fouet
(6, 42, 1),  -- Gâteau au chocolat - Moule à muffins
(6, 49, 1),  -- Gâteau au chocolat - Fouet électrique
(6, 9, 1);   -- Gâteau au chocolat - Cuillère en bois
