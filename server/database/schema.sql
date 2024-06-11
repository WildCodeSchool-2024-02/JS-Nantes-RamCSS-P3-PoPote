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
