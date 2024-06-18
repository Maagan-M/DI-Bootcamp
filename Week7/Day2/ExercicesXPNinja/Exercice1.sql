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

--SELECT firstname, lastname
--FROM customers
--ORDER BY lastname, firstname
--LIMIT 2;

--SELECT id 
--FROM customers 
--WHERE firstname = 'Scott' AND lastname = 'Scott';

--DELETE FROM purchases 
--WHERE customer_id = (SELECT id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott');

--SELECT * 
--FROM customers 
--WHERE firstname = 'Scott' AND lastname = 'Scott';

--SELECT p.id, COALESCE(c.firstname, '') AS firstname, COALESCE(c.lastname, '') AS lastname, p.item_id, p.quantity_purchased
--FROM purchases p
--LEFT JOIN customers c ON p.customer_id = c.id;

--SELECT p.id, c.firstname, c.lastname, p.item_id, p.quantity_purchased
--FROM purchases p
--JOIN customers c ON p.customer_id = c.id;


