TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (name, username, email, password,create_date) 
VALUES
    ('Ali', 'Alih','alihamedali@live.com','password','21-02-2003' ),
     ('Gary', 'Gary','gary@live.com','password','22-06-2003' ),

INSERT INTO habits (user_id, habit_name, frequency_interval,create_date) 
VALUES
    (1, "Running", 2,"21-02-2003" ),
    (2, "Walking", 2,"21-02-2003" ),
