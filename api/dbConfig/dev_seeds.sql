INSERT INTO users (name,username,email,password,create_date) 
VALUES 
('Ali','Ali1','Ali1@gmail.com','password','01/06/2022 18:00:00'),
('Chris','Chris2','Chris2@gmail.com','password','02/06/2022 18:00:00'), 
('Nasim','Nasim3','Nasim3@gmail.com','password','03/06/2022 18:00:00'),
('Sam','Sam4','Sam4@gmail.com','password','04/06/2022 18:00:00'); 

INSERT INTO habits (user_id,habit_name,frequency,create_date) 
VALUES
(1,'Weight Lifting','2',NOW()),
(2,'Weight Lifting','2',NOW()),
(3,'Running','2',NOW()),
(3,'Dancing','2',NOW()),
(4,'Boxing','2',NOW());

INSERT INTO habit_instances (habit_id,completed,create_date,due_date) 
VALUES
(1,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(1,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(1,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(1,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(2,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(2,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(2,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(2,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(1,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(3,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(3,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(3,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(4,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(5,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(5,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(5,FALSE,NOW(),NOW()+INTERVAL '2 DAYS'),
(5,FALSE,NOW(),NOW()+INTERVAL '2 DAYS');
