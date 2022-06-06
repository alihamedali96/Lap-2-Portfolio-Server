INSERT INTO users (id,name,password,create_date) 
VALUES 
(1,'Ali','password','01/06/2022 18:00:00'),
(2,'Chris','password','02/06/2022 18:00:00'),
(3,'Nasim','password','03/06/2022 18:00:00'),
(4,'Sam','password','04/06/2022 18:00:00');

INSERT INTO habits (id,user_id,habit_name,frequency,create_date) 
VALUES
(1,1,'Weight Lifting','2 days','now'),
(2,2,'Weight Lifting','2 days','now'),
(3,3,'Running','2 days','now'),
(4,3,'Dancing','1 week','now'),
(5,4,'Boxing','3 days','now');

INSERT INTO habit_instances (id,habit_id,completed,create_date) 
VALUES
(1,1,FALSE,'03/06/2022 18:00:00'),
(2,1,FALSE,'05/06/2022 18:00:00'),
(3,1,FALSE,'07/06/2022 18:00:00'),
(4,1,FALSE,'09/06/2022 18:00:00'),
(5,2,FALSE,'03/06/2022 18:00:00'),
(6,2,FALSE,'05/06/2022 18:00:00'),
(7,2,FALSE,'07/06/2022 18:00:00'),
(8,2,FALSE,'09/06/2022 18:00:00'),
(9,1,FALSE,'01/06/2022 18:00:00'),
(10,3,FALSE,'03/06/2022 18:00:00'),
(11,3,FALSE,'05/06/2022 18:00:00'),
(12,3,FALSE,'07/06/2022 18:00:00'),
(13,4,FALSE,'02/06/2022 18:00:00'),
(14,5,FALSE,'03/06/2022 18:00:00'),
(15,5,FALSE,'06/06/2022 18:00:00'),
(16,5,FALSE,'09/06/2022 18:00:00'),
(17,5,FALSE,'12/06/2022 18:00:00');
