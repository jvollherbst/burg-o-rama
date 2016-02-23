DROP TABLE IF EXISTS meat;
DROP TABLE IF EXISTS buns;
DROP TABLE IF EXISTS cheese;
DROP TABLE IF EXISTS toppings;
DROP TABLE IF EXISTS burgers;
DROP TABLE IF EXISTS cheese_join;
DROP TABLE IF EXISTS toppings_join;


CREATE TABLE meat (
  meat_id SERIAL PRIMARY KEY,
  type text,
  available boolean
);

CREATE TABLE buns (
  buns_id SERIAL PRIMARY KEY,
  type text,
  available boolean
);

CREATE TABLE cheese (
  cheese_id SERIAL PRIMARY KEY,
  name text,
  available boolean
);

CREATE TABLE toppings (
  toppings_id SERIAL PRIMARY KEY,
  name text,
  available boolean
);

CREATE TABLE burgers (
  burgers_id serial PRIMARY KEY,
  doneness text,
  meat_id integer REFERENCES meat,
  buns_id integer REFERENCES buns
);

CREATE TABLE cheese_join (
  burgers_id integer REFERENCES burgers,
  cheese_id integer REFERENCES cheese,
  PRIMARY KEY (burgers_id, cheese_id)
);

CREATE TABLE toppings_join (
  burgers_id integer REFERENCES burgers,
  toppings_id integer REFERENCES toppings,
  PRIMARY KEY (burgers_id, toppings_id)
);
