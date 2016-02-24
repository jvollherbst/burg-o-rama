INSERT INTO burgers (doneness, meat_id, buns_id) VALUES ('medium', 1, 3);


INSERT INTO cheese_join (burgers_id, cheese_id) VALUES (1, 2);
INSERT INTO cheese_join (burgers_id, cheese_id) VALUES (2, 2);

INSERT INTO toppings_join (burgers_id, toppings_id) VALUES (1, 5);
INSERT INTO toppings_join (burgers_id, toppings_id) VALUES (2, 2);
