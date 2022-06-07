DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(50) NOT NULL,
    create_date timestamp NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    user_id int NOT NULL,
    habit_name varchar(255) NOT NULL,
    frequency interval NOT NULL,
    create_date timestamp NOT NULL
);

DROP TABLE IF EXISTS habit_instances;

CREATE TABLE habit_instances (
    id serial PRIMARY KEY,
    habit_id int NOT NULL,
    completed boolean NOT NULL,
    create_date timestamp NOT NULL
);

