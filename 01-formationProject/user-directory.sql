CREATE DATABASE IF NOT EXISTS `employee_directory`;
USE `employee_directory`;

-- Création de la table user_type
CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Suppression de la table user si elle existe
DROP TABLE IF EXISTS `user`;

-- Création de la table user avec une clé étrangère vers user_type
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `user_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Insertion de données dans la table user_type
INSERT INTO `user_type` (type) VALUES
  ('Admin'),
  ('User'),
  ('Guest');

-- Insertion de données dans la table user
INSERT INTO `user` (name, first_name, email, user_type_id) VALUES
  ('Leslie', 'Andrews', 'leslie@luv2code.com', 1),
  ('Emma', 'Baumgarten', 'emma@luv2code.com', 2),
  ('Avani', 'Gupta', 'avani@luv2code.com', 2),
  ('Yuri', 'Petrov', 'yuri@luv2code.com', 3),
  ('Juan', 'Vega', 'juan@luv2code.com', 2);
