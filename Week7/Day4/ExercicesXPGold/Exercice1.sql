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

--CREATE VIEW out_rentals AS
--SELECT r.rental_id, r.rental_date, r.return_date, i.film_id, r.customer_id
--FROM rental r
--JOIN inventory i ON r.inventory_id = i.inventory_id
--WHERE r.return_date IS NULL;

--SELECT * FROM out_rentals;

--CREATE VIEW customers_not_returned AS
--SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS num_rentals_not_returned
--FROM customer c
--JOIN rental r ON c.customer_id = r.customer_id
--JOIN inventory i ON r.inventory_id = i.inventory_id
--WHERE r.return_date IS NULL
--GROUP BY c.customer_id, c.first_name, c.last_name;

--SELECT * FROM customers_not_returned;

--CREATE VIEW action_films_with_js AS
--SELECT f.film_id, f.title, f.release_year, a.actor_id, a.first_name, a.last_name
--FROM film f
--JOIN film_actor fa ON f.film_id = fa.film_id
--JOIN actor a ON fa.actor_id = a.actor_id
--JOIN film_category fc ON f.film_id = fc.film_id
--JOIN category c ON fc.category_id = c.category_id
--WHERE c.name = 'Action'
--AND a.first_name = 'Joe'
--AND a.last_name = 'Swank';

-- SELECT * FROM action_films_with_js;