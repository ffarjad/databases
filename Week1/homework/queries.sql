--1. What are the names of countries with population greater than 8 million
--solution:
Select Name
From country
Where Population > 8000000;

--2. What are the names of countries that have “land” in their names ?
--solution:
Select Name
From country
Where Name like "%land%";

--3. What are the names of the cities with population in between 500,000 and 1 million ?
--solution:
Select Name
From city
Where Population between 500000 and 1000000

--4. What's the name of all the countries on the continent ‘Europe’ ?
--solution:
Select Name
From country
Where Continent = 'Europe'


--5. List all the countries in the descending order of their surface areas.
--solution:
Select Name, SurfaceArea
From country
Order By SurfaceArea desc;


--6. What are the names of all the cities in the Netherlands?
--solution:


--7. What is the population of Rotterdam ?
--solution:


--8. What's the top 10 countries by Surface Area ?
--solution:


--9. What's the top 10 most populated cities?
--solution:


--10. What is the population of the world ?
--solution:
