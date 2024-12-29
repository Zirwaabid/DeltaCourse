create table user(
age int,
id int ,
name varchar(30) not null,
email varchar(50) unique,
followers int default 0,
following int,
constraint check (age>=13),
primary key (id)
);

create table post(
id int primary key,
content varchar(50),
user_id int,
foreign key (user_id) references user(id)
);