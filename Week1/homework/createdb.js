let db = require('./db.js');

//db.executeQuery('CREATE DATABASE if not exists world;');
db.executeQuery("CREATE DATABASE IF NOT EXSISTS world;");
db.connection.end();
