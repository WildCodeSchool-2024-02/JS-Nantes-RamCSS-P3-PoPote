create table user (
  id int primary key auto_increment not null,
  name varchar(55) not null,
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
INSERT INTO user ( id, name, email, password, url_photo, is_admin, is_superadmin) VALUES
(1, 'Alice Smith', 'alice.smith@example.com', 'password123', 'http://example.com/photos/alice.jpg', TRUE, FALSE),
(2, 'Bob Johnson', 'bob.johnson@example.com', 'securepassword', 'http://example.com/photos/bob.jpg', FALSE, FALSE),
(3, 'Charlie Brown', 'charlie.brown@example.com', 'mypassword', 'http://example.com/photos/charlie.jpg', TRUE, TRUE),
(4, 'Diana Prince', 'diana.prince@example.com', 'dianaPW', 'http://example.com/photos/diana.jpg', FALSE, FALSE),
(5, 'Eva Green', 'eva.green@example.com', 'evaPassword', 'http://example.com/photos/eva.jpg', FALSE, FALSE);

-- table recipe
INSERT INTO recipe (id, title, url_photo, duration, people_number, step_description, user_id) VALUES
(1, 'Tarte aux pommes', 'url_photo', '01:00:00', 4, 'Étaler la pâte, ajouter les pommes et cuire au four.', 1),
(2, 'Soupe de légumes', 'url_photo2', '00:30:00', 2, 'Faire cuire les légumes et mixer.', 2),
(3, 'Spaghetti bolognaise', 'url_photo3', '00:45:00', 4, 'Faire revenir la viande, ajouter la sauce tomate et cuire les spaghettis.', 3),
(4, 'Poulet rôti', 'url_photo4', '01:30:00', 6, 'Assaisonner le poulet et le rôtir au four.', 4),
(5, 'Salade César', 'url_photo5', '00:20:00', 2, 'Mélanger la laitue, le poulet grillé, les croûtons et la sauce César.', 5),
(6, 'Gâteau au chocolat', 'url_photo6', '00:01:00', 8, 'Mélanger les ingrédients, cuire au four et laisser refroidir.', 1);

-- table ingredient
INSERT INTO ingredient (id, name, nutritional_value) VALUES
(1, 'Pommes', 52),
(2, 'Sucre', 387),
(3, 'Farine', 364),
(4, 'Beurre', 717),
(5, 'Carottes', 41),
(6, 'Pommes de terre', 80),
(7, 'Oignons', 40),
(8, 'Spaghetti', 157),
(9, 'Viande hachée', 250),
(10, 'Sauce tomate', 29),
(11, 'Poulet', 239),
(12, 'Laitue', 15),
(13, 'Croûtons', 407),
(14, 'Sauce César', 550),
(15, 'Chocolat', 546),
(16, 'Œufs', 155);

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

-- table tool
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