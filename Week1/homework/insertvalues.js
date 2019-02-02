const db = require('./db');
db.executeQuery("use world");
let cities = [
 [1,'Kabul','AFG','Kabol',1780000],
 [2,'Qandahar','AFG','Qandahar',237500],
 [3,'Herat','AFG','Herat',186800],
 [4,'Mazar-e-Sharif','AFG','Balkh',127800],
 [5,'Amsterdam','NLD','Noord-Holland',731200],
 [6,'Rotterdam','NLD','Zuid-Holland',593321],
 [7,'Haag','NLD','Zuid-Holland',440900],
 [8,'Utrecht','NLD','Utrecht',234323],
 [9,'Eindhoven','NLD','Noord-Brabant',201843],
 [10,'Tilburg','NLD','Noord-Brabant',193238],
];

let countries = [
['ABW','Aruba','North America',103000,'Oranjestad'],
['AFG','Afghanistan','Asia',22720000,'Kabul'],
['AGO','Angola','Africa',246700.00,'Luanda'],
['AIA','Anguilla','North America',8000,'The Valley'],
['ALB','Albania','Europe',3401200,'Tirana'],
['AND','Andorra','Europe',78000,'Andorra La Vella'],
['ANT','Netherlands Antilles','North America',217000,'Willemstad'],
['ARE','United Arab Emirates','Asia',2441000,'Abu Dhabi'],
['ARG','Argentina','South America',37032000,'Buenos Aires'],
['ARM','Armenia','Asia',3520000,'Tandil'],
];



db.insertValuesToTable('city', cities);
db.insertValuesToTable('country',countries);
db.connection.end();
