-- Database: DailyChallengeWeek7Day2

-- DROP DATABASE IF EXISTS "DailyChallengeWeek7Day2";

--CREATE DATABASE "DailyChallengeWeek7Day2"
--    WITH
--    OWNER = alexandremanso
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'C'
--    LC_CTYPE = 'C'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1
--    IS_TEMPLATE = False;

--CREATE TABLE FirstTab (
--    id integer, 
--    name VARCHAR(10)
--);

--INSERT INTO FirstTab VALUES
--(5,'Pawan'),
--(6,'Sharlee'),
--(7,'Krish'),
--(NULL,'Avtaar');

--SELECT * FROM FirstTab;

--CREATE TABLE SecondTab (
--    id integer 
--);

--INSERT INTO SecondTab VALUES
--(5),
--(NULL);

--SELECT * FROM SecondTab;

--SELECT COUNT(*) 
--FROM FirstTab AS ft 
--WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);
--The output is likely to be 0 since one compares with a subquery including a null. Checked.

--SELECT COUNT(*) 
--FROM FirstTab AS ft 
--WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);
--here it counts the id exluding the the 5, then the outcome is likely to be 2 (the null does not count). Checked.

--SELECT COUNT(*) 
--FROM FirstTab AS ft 
--WHERE ft.id NOT IN (SELECT id FROM SecondTab);
--comparison with a subquery containing a null in the not in, so likely to be 0 like in question 1. Checked.

--SELECT COUNT(*) 
--FROM FirstTab AS ft 
--WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
--the subquery will return 5 (as null is excluded from the second table), then it means the 5 in the first table (not in) is excluded, then the outcome is likely to be 2 (null does not count). Checked.
