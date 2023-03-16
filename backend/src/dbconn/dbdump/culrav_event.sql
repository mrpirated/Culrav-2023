-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: culrav
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `event_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) DEFAULT NULL,
  `commitee_id` int DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `commitee_id` (`commitee_id`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`commitee_id`) REFERENCES `commitee` (`commitee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Nukkad',1),(2,'Natyamanch',1),(3,'Pratibimb',1),(4,'Hasyamanch',1),(5,'Voice Of Culrav ',6),(6,'Vadya',6),(7,'Harmony',6),(8,'Euphony',6),(9,'Ijaad',6),(10,'Rocktave',6),(11,'Paint the way',2),(12,'Let\'s Face it',2),(13,'Swaddle',2),(14,'Momento Vinci',2),(15,'Digital Art',2),(16,'Blind Art',2),(17,'Doodle Caboodle',2),(18,'Picture tale',5),(19,'Tasveer',5),(20,'Sales pitch',5),(21,'Layers',5),(22,'B roll',5),(23,'Short film',5),(24,'Kavyanjali',7),(25,'Poetry Slam',7),(26,'Spell Bee',7),(27,'Spell Bee',7),(28,'TTYD- Hindi',7),(29,'TTYD- English',7),(30,'Feet On Fire',3),(31,'Desi Sync',3),(32,'Step Up',3),(33,'Dance Battle',3),(34,'Let\'s Celebrate Fashion',4),(35,'Mr & Miss Spandan',4);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-12  2:33:51
