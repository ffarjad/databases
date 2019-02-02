let db = require('./db.js');

//db.executeQuery('CREATE DATABASE if not exists world;');
db.executeQuery("DROP SCHEMA IF EXISTS world;");
db.executeQuery("CREATE SCHEMA world;");
db.connection.end();
