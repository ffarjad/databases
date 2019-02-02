const db = require('./db');
let cityquery = "CREATE TABLE city ( ID INT(11) NOT NULL AUTO_INCREMENT, Name VARCHAR(35) NOT NULL, CountryCode CHAR(3) NOT NULL, District VARCHAR(20) NOT NULL, Population INT(11) NOT NULL, PRIMARY KEY (ID))";
let counrtyquery = "CREATE TABLE country ( Code CHAR(3) NOT NULL, Name VARCHAR(52) NOT NULL, Continent VARCHAR(52) NOT NULL, Population INT(11) NOT NULL, Capital VARCHAR(35) NOT NULL, PRIMARY KEY (Code))";
db.executeQuery("USE world");
db.executeQuery("DROP TABLE IF EXISTS city")
db.executeQuery(cityquery);
db.executeQuery("DROP TABLE IF EXISTS country")
db.executeQuery(counrtyquery);
db.connection.end();
