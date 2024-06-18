-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

--CREATE DATABASE dvdrental
--    WITH
--    OWNER = alexandremanso
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'C'
--    LC_CTYPE = 'C'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;

--SELECT rating, COUNT(*) AS film_count
--FROM film
--GROUP BY rating;

--SELECT title, length, rental_rate
--FROM film
--WHERE rating IN ('G', 'PG-13')
--AND length <= 120 -- Assuming length is in minutes
--AND rental_rate < 3.00
--ORDER BY title ASC;

--UPDATE customer
--SET first_name = 'Israel',
--    last_name = 'Bar Tzion',
--    email = 'alexandre.manso47@gmail.com',
--    active = 1
--WHERE customer_id = 123;

--SELECT address_id, address, district, city_id, postal_code, phone
--FROM address
--WHERE address_id = (
--    SELECT address_id
--    FROM customer
--    WHERE customer_id = 123 
--);

--SELECT country_id
--FROM country
--WHERE country = 'France'; 

--INSERT INTO city (city, country_id)
--VALUES ('Boé', 34); 

--SELECT *
--FROM city
--WHERE city = 'Boé'; 

--UPDATE address
--SET address = '14 rue Jean Rostand',
--    district = 'Lot-et-Garonne',
--    city_id = (SELECT city_id FROM city WHERE city = 'Boé'), 
--    postal_code = '47550',
--    phone = '+33607781587'
--WHERE address_id = 127; 

