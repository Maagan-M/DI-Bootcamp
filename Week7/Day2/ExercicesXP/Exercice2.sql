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

--SELECT * FROM customer;

--SELECT first_name || ' ' || last_name AS full_name FROM customer;

--SELECT DISTINCT create_date FROM customer;

--SELECT * FROM customer ORDER BY first_name DESC;

--SELECT film_id, title, description, release_year, rental_rate
--FROM film
--ORDER BY rental_rate ASC;

--SELECT address.address, address.phone
--FROM address
--JOIN city ON address.city_id = city.city_id
--JOIN country ON city.country_id = country.country_id
--WHERE country.country = 'United States' AND city.city ILIKE '%Texas%';

--SELECT *
--FROM film
--WHERE film_id IN (15, 150);

--SELECT film_id, title, description, length, rental_rate
--FROM film
--WHERE title ILIKE 'YourFavoriteMovie%';

--SELECT film_id, title, description, length, rental_rate
--FROM film
--WHERE title ILIKE 'Yo%'
--ORDER BY rental_rate ASC;

--SELECT film_id, title, description, rental_rate
--FROM film
--ORDER BY rental_rate ASC
--FETCH FIRST 10 ROWS ONLY;

--SELECT film_id, title, description, rental_rate
--FROM film
--WHERE film_id NOT IN (
--    SELECT film_id
--    FROM film
--    ORDER BY rental_rate ASC
--    FETCH FIRST 10 ROWS ONLY
--)
--ORDER BY rental_rate ASC
--FETCH FIRST 10 ROWS ONLY;

--SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
--FROM customer c
--JOIN payment p ON c.customer_id = p.customer_id
--ORDER BY p.staff_id;

--SELECT *
--FROM film
--WHERE film_id NOT IN (
--    SELECT DISTINCT inventory.film_id
--    FROM inventory
--);

--SELECT city.city, country.country
--FROM city
--JOIN country ON city.country_id = country.country_id;

--SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
--FROM customer c
--JOIN payment p ON c.customer_id = p.customer_id
--ORDER BY p.staff_id;
