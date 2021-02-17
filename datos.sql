-- Database export via SQLPro (https://www.sqlprostudio.com/allapps.html)
-- Exported by davidgomezgamarra at 16-02-2021 9:59 PM.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.

use bd_color;

-- Database export via SQLPro (https://www.sqlprostudio.com/allapps.html)
-- Exported by davidgomezgamarra at 16-02-2021 10:14 PM.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.


-- BEGIN TABLE colores
DROP TABLE IF EXISTS colores;
CREATE TABLE `colores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `pantone_value` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Inserting 12 rows into colores
-- Insert batch #1
INSERT INTO colores (id, name, `year`, color, pantone_value) VALUES
(1, 'cerulean', 2000, '#98B2D1', '15-4020'),
(2, 'fuchsia rose', 2001, '#C74375', '17-2031'),
(3, 'true red', 2002, '#BF1932', '19-1664'),
(4, 'aqua sky', 2003, '#7BC4C4', '14-4811'),
(5, 'tigerlily', 2004, '#E2583E', '17-1456'),
(6, 'blue turquoise', 2005, '#53B0AE', '15-5217'),
(7, 'sand dollar', 2006, '#DECDBE', '13-1106'),
(8, 'chili pepper', 2007, '#9B1B30', '19-1557'),
(9, 'blue iris', 2008, '#5A5B9F', '18-3943'),
(10, 'mimosa', 2009, '#F0C05A', '14-0848'),
(11, 'turquoise', 2010, '#45B5AA', '15-5519'),
(12, 'honeysuckle', 2011, '#D94F70', '18-2120');

-- END TABLE colores

DELIMITER $$
DROP PROCEDURE IF EXISTS LISTADO_COLORES $$
CREATE PROCEDURE `LISTADO_COLORES`(idColor int)
BEGIN
	if idColor is null then
	
		SELECT 
		id,
		name,
		color
		FROM
		colores;
	
	end if;
	
	if idColor is not null then
	
		SELECT 
		id,
		name,year,color,pantone_value
		FROM
		colores where id = idColor;
	
	end if;

	
	

END $$
DELIMITER ;