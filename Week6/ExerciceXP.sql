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
--CREATE TABLE items (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(50),
--    price INT
--);

--CREATE TABLE customers (
--    id SERIAL PRIMARY KEY,
--    firstname VARCHAR(50),
--    lastname VARCHAR(50)
--);

--INSERT INTO items (name, price) VALUES
--('Small Desk', 100),
--('Large Desk', 300),
--('Fan', 80);

--INSERT INTO customers (firstname, lastname) VALUES
--('Greg', 'Jones'),
--('Sandra', 'Jones'),
--('Scott', 'Scott'),
--('Trevor', 'Green'),
--('Melanie', 'Johnson');

--SELECT * FROM items;

--SELECT * FROM items WHERE price > 80;

--SELECT * FROM items WHERE price <= 300;

--SELECT * FROM customers WHERE lastname = 'Smith';

--SELECT * FROM customers WHERE lastname = 'Jones';

--SELECT * FROM customers WHERE firstname != 'Scott';

