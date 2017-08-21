### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	myDate TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sequelized_burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured tinyint(1) DEFAULT '0',
  myDate varchar(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (`id`)
);