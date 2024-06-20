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

--UPDATE film
--SET language_id = 2
--WHERE film_id IN (1, 2, 3);

--SELECT
--    film_id,
--    title,
--    description,
--    (SELECT name FROM language WHERE language_id = film.language_id) AS language_name
--FROM
--    film
--WHERE
--    film_id IN (1, 2, 3);

--SELECT
--    tc.constraint_name,
--    tc.table_name AS foreign_table_name,
--    kcu.column_name AS foreign_column_name,
--    ccu.table_name AS referencing_table_name,
--    ccu.column_name AS referencing_column_name
--FROM
--    information_schema.table_constraints AS tc
--JOIN
--    information_schema.key_column_usage AS kcu
--    ON tc.constraint_name = kcu.constraint_name
--JOIN
--    information_schema.constraint_column_usage AS ccu
--    ON ccu.constraint_name = tc.constraint_name
--WHERE
--    tc.constraint_type = 'FOREIGN KEY'
--    AND ccu.table_name = 'customer';

--DROP TABLE IF EXISTS customer_review;

--SELECT COUNT(*)
--FROM rental
--WHERE return_date IS NULL;

--SELECT *
--FROM (
--    SELECT DISTINCT ON (f.film_id)
--        f.film_id,
--        f.title,
--        f.rental_rate
--    FROM
--        film f
--    JOIN
--        inventory i ON f.film_id = i.film_id
--    JOIN
--        rental r ON i.inventory_id = r.inventory_id
--    WHERE
--        r.return_date IS NULL
--    ORDER BY
--        f.film_id,
--        f.rental_rate DESC
--) AS subquery
--LIMIT 30;

--SELECT film_id, title
--FROM film
--WHERE description ILIKE '%sumo wrestler%'
--  AND film_id IN (
--      SELECT film_id
--      FROM film_actor
--      WHERE actor_id IN (
--          SELECT actor_id
--          FROM actor
--          WHERE first_name = 'Penelope' AND last_name = 'Monroe'
--      )
--  );

--SELECT title, length, rating
--FROM film
--WHERE length * INTERVAL '1' < INTERVAL '60'
--  AND rating = 'R'
--LIMIT 1;

--SELECT f.film_id, f.title
--FROM film f
--JOIN inventory i ON f.film_id = i.film_id
--JOIN rental r ON i.inventory_id = r.inventory_id
--JOIN customer c ON r.customer_id = c.customer_id
--WHERE c.first_name = 'Matthew'
--  AND c.last_name = 'Mahan'
--  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
--ORDER BY f.replacement_cost DESC
--LIMIT 1;

--SELECT f.film_id, f.title
--FROM film f
--JOIN inventory i ON f.film_id = i.film_id
--JOIN rental r ON i.inventory_id = r.inventory_id
--JOIN customer c ON r.customer_id = c.customer_id
--WHERE c.first_name = 'Matthew'
--  AND c.last_name = 'Mahan'
--  AND f.rental_rate > 4.00
--  AND r.return_date >= '2005-07-28' AND r.return_date <= '2005-08-01'
--LIMIT 1;