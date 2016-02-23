DROP TABLE IF EXISTS burgers_db;

CREATE TABLE orders (
  burgers_id SERIAL UNIQUE PRIMARY KEY,
  doneness text,
  meat_id FOREIGN KEY REFERENCES meat(meat_id),
  buns_id FOREIGN KEY REFERENCES buns(buns_id)
  -- cheese_id FOREIGN KEY REFERENCES cheese(cheese_id),
  -- toppings_id FOREIGN KEY REFERENCES toppings(toppings_id),
)

CREATE TABLE meat (
  meat_id SERIAL UNIQUE PRIMARY KEY,
  name text,
  type text,
  availibility boolean
)

CREATE TABLE buns (
  buns_id SERIAL UNIQUE PRIMARY KEY,
  name text,
  availibility boolean
)

CREATE TABLE cheese (
  cheese_id SERIAL UNIQUE PRIMARY KEY,
  name text,
  availibility boolean
)

CREATE TABLE toppings (
  toppings_id SERIAL UNIQUE PRIMARY KEY,
  name text,
  availibility boolean
)

CREATE TABLE cheese_join(
  burgers_id FOREIGN KEY REFERENCES burgers, -- PK, FK1 burgers_id Primary key for this table is a combo of PK, FK1
  cheese_id FOREIGN KEY REFERENCES cheese -- PK, FK2 cheese_id
)
--create index on name of table col
CREATE TABLE toppings_join(
  burgers_id FOREIGN KEY REFERENCES burgers,
  toppings_id FOREIGN KEY REFERENCES toppings
)
