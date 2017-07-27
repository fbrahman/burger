
-- for local DB
-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE burgers_db;

-- USE burgers_db;

-- for JAWS_DB
-- USE eenzy7hbeuc1e87o;

CREATE TABLE burgers(
	id int AUTO_INCREMENT NOT NULL
	, burger_name VARCHAR(30) NOT NULL
	, devoured BOOLEAN DEFAULT FALSE
	, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	, PRIMARY KEY (id)
);