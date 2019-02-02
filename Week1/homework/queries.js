const db = require('./db');

db.executeQuery(`use new_world`);
//1. What are the names of countries with population greater than 8 million
db.executeQuery("Select Name From country Where Population > 8000000;");

//2. What are the names of countries that have “land” in their names ?
db.executeQuery("Select Name From country Where Name like '%land%';");

//3. What are the names of the cities with population in between 500,000 and 1 million ?
db.executeQuery("Select Name From city Where Population between 500000 and 1000000");

//4. What's the name of all the countries on the continent ‘Europe’ ?
db.executeQuery("Select Name From country Where Continent = 'Europe'");

//5. List all the countries in the descending order of their surface areas.
db.executeQuery("Select Name, SurfaceArea From country Order By SurfaceArea desc;");

//6. What are the names of all the cities in the Netherlands?
db.executeQuery("Select name From city Where CountryCode = 'NLD';");

//7. What is the population of Rotterdam ?
db.executeQuery("Select Population From city Where Name = 'Rotterdam';");

//8. What's the top 10 countries by Surface Area ?
db.executeQuery("Select Name, SurfaceArea From country Order By SurfaceArea desc Limit 10;");

//9. What's the top 10 most populated cities?
db.executeQuery("Select Name, Population From city Order By Population desc Limit 10;");

//10. What is the population of the world ?
db.executeQuery("Select Sum(Population) AS WorldPopulation From country;");

db.connection.end();
