CREATE TABLE `t_collections` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent_id` INT(11),
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `t_collections` (`parent_id`, `name`)
VALUES (null, "Collections");
