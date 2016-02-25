SELECT
meat.type, COUNT(meat.type)
FROM burgers
LEFT JOIN
meat
ON
burgers.meat_id = meat.meat_id
GROUP BY
meat.type


SELECT
buns.type, COUNT(buns.type)
FROM burgers
LEFT JOIN
buns
ON
burgers.buns_id = buns.buns_id
GROUP BY
buns.type
