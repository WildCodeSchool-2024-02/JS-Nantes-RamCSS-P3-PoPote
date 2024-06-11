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
  ingredient_id int not null,
  foreign key(ingredient_id) references ingredient(id),
  recipe_id int not null,
  foreign key(recipe_id) references recipe(id),
  quantity int not null,
  unit varchar(5) not null
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


INSERT INTO recipe (recipe_id, title, url_photo, duration, people_number, step_description, user_id) VALUES
(1, "Tarte aux pommes", "url_photo", 60, 4, "Étaler la pâte, ajouter les pommes et cuire au four.", 1),
(2, "Soupe de légumes", "url_photo2", 30, 2, "Faire cuire les légumes et mixer.", 2);
(3, "Spaghetti bolognaise", "url_photo3", 45, 4, "Faire revenir la viande, ajouter la sauce tomate et cuire les spaghettis.", 3),
(4, "Poulet rôti", "url_photo4", 90, 6, "Assaisonner le poulet et le rôtir au four.", 4),
(5, "Salade César", "url_photo5", 20, 2, "Mélanger la laitue, le poulet grillé, les croûtons et la sauce César.", 5),
(6, "Gâteau au chocolat", "url_photo6", 60, 8, "Mélanger les ingrédients, cuire au four et laisser refroidir.", 1);


INSERT INTO ingredient (ingredient_id, name, nutritional_value) VALUES
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

INSERT INTO recipe_ingredient ( recipe_id, ingredient_id, quantity, unit) VALUES

-- Tarte aux pommes
(1, 1, 600, 'grammes'),
(1, 2, 100, 'grammes'),
(1, 3, 200, 'grammes'),
(1, 4, 100, 'grammes');

-- Soupe de légumes
(2, 5, 300, 'grammes'),
(2, 6, 300, 'grammes'),
(2, 7, 150, 'grammes');

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