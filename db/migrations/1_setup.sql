DROP TABLE users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    password varchar(50) NOT NULL,
    create_date timestamp NOT NULL
);

DROP TABLE habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    user_id int NOT NULL,
    habit_name varcar(255) NOT NULL,
    frequency interval NOT NULL,
    create_date timestamp NOT NULL
);

DROP TABLE habit_instances;

CREATE TABLE habit_instances (
    id serial PRIMARY KEY,
    habit_id int NOT NULL,
    completed boolean NOT NULL,
    create_date timestamp NOT NULL
);

