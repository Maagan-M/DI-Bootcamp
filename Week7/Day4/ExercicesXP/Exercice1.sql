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

--SELECT * FROM language;

--SELECT
--    film.title AS film_title,
--    film.description,
--    language.name AS language_name
--FROM
--    film
--JOIN
--    language ON film.language_id = language.language_id;

--SELECT
--    film.title AS film_title,
--    film.description,
--    language.name AS language_name
--FROM
--    language
--LEFT JOIN
--    film ON film.language_id = language.language_id;

--CREATE TABLE new_film (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(255) NOT NULL
--);

--INSERT INTO new_film (name) VALUES ('Film A'), ('Film B');

--CREATE TABLE customer_review (
--    review_id SERIAL PRIMARY KEY,
--    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
--    language_id INT REFERENCES language(language_id),
--    title VARCHAR(255) NOT NULL,
--    score INT CHECK (score >= 1 AND score <= 10),
--    review_text TEXT,
--    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--);

--INSERT INTO customer_review (film_id, language_id, title, score, review_text)
--VALUES 
--(1, 1, 'Great Movie', 9, 'This movie was fantastic!'),
--(2, 2, 'Not Bad', 7, 'It was a decent watch.');

--DELETE FROM new_film WHERE id = 1;

--SELECT * FROM customer_review;
