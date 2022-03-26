
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'mauroPortfolio')
BEGIN
  CREATE DATABASE mauroPortfolio;
END;
GO

USE mauroPortfolio;

CREATE TABLE IF NOT EXISTS `visits` (

  `id` int(11) NOT NULL auto_increment,
  `type` SMALLINT(1) NOT NULL DEFAULT 0, -- 0 = normal visit, 1 = easter egg visit, 2 = blog visit.
   PRIMARY KEY  (`id`)

);


