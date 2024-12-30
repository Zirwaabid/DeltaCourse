CREATE TABLE user (
    age INT,
    id INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

INSERT INTO user (age,id, name, email, followers, following)
VALUES
    (15,1, 'zirwa', 'zirwa@gmail.com', 12, 44),
    (16,2, 'anas', 'anas@gmail.com', 15, 43),
    (17,3, 'adam', 'adam@gmail.com', 200, 20),
	(18,4, 'corey', 'corey@yahoo.com', 300, 43);
    -- select age,id,name FROM user; 
    select * from user;
    select distinct age from user;

create table post(
id int primary key,
content varchar(50),
user_id int,
foreign key (user_id) references user(id)
);

INSERT INTO post (id,content,user_id)
values
(10,"hello everyone",1),
(20,"fun day",2);
select * from post