-- Database: public

-- DROP DATABASE IF EXISTS public;

--CREATE DATABASE public
--    WITH
--    OWNER = alexandremanso
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'C'
--    LC_CTYPE = 'C'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;

--CREATE TABLE purchases (
--    id SERIAL PRIMARY KEY,
--    customer_id INT REFERENCES customers(id),
--    item_id INT REFERENCES items(id),
--    quantity_purchased INT
--);

--INSERT INTO purchases (customer_id, item_id, quantity_purchased)
--VALUES (
--    (SELECT id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott'),
--    (SELECT id FROM items WHERE name = 'fan'),
--    1
--);

--INSERT INTO purchases (customer_id, item_id, quantity_purchased)
--VALUES (
--    (SELECT id FROM customers WHERE firstname = 'Melanie' AND lastname = 'Johnson'),
--    (SELECT id FROM items WHERE name = 'large desk'),
--    10
--);

--INSERT INTO purchases (customer_id, item_id, quantity_purchased)
--VALUES (
--    (SELECT id FROM customers WHERE firstname = 'Greg' AND lastname = 'Jones'),
--    (SELECT id FROM items WHERE name = 'small desk'),
--    2
--);

--SELECT * FROM purchases;

--SELECT p.id, c.firstname, c.lastname, p.item_id, p.quantity_purchased
--FROM purchases p
--JOIN customers c ON p.customer_id = c.id;

--SELECT * FROM purchases
--WHERE customer_id = 5;

--SELECT * FROM purchases
--WHERE item_id = (SELECT id FROM items WHERE name = 'large desk')
--OR item_id = (SELECT id FROM items WHERE name = 'small desk');

--SELECT c.firstname, c.lastname, i.name
--FROM purchases p
--JOIN customers c ON p.customer_id = c.id
--JOIN items i ON p.item_id = i.id;

--INSERT INTO purchases (customer_id, item_id, quantity_purchased)
--VALUES (1, NULL, 1);
