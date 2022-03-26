
CREATE DATABASE IF NOT EXISTS mauroPortfolio;

-- SHOW DATABASES;

USE mauroPortfolio;

CREATE TABLE IF NOT EXISTS `visits` (

  `id` int(11) NOT NULL auto_increment, -- 1 = normal visit, 2 = blog visit visit, 3 = easter egg.
  `count` BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY  (`id`)

);

INSERT INTO `visits` (`count`) VALUES (
  0
);


INSERT INTO `visits` (`count`) VALUES (
  0
);


INSERT INTO `visits` (`count`) VALUES (
  0
);



