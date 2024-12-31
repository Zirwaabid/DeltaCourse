INSERT INTO user (age,id, name, email, followers, following)
VALUES
    (15,1, 'zirwa', 'zirwa@gmail.com', 12, 44),
    (16,2, 'anas', 'anas@gmail.com', 15, 43),
    (17,3, 'adam', 'adam@gmail.com', 200, 20),
	(18,4, 'corey', 'corey@yahoo.com', 300, 43);
    select name,followers,email from user
    where email in ('adam@gmail.com','corey@yahoo.com','abc@gmail.com');
    
INSERT INTO user (age,id, name, email, followers, following)
VALUES 
 (14,5, 'eve', 'eve@gmail.com', 1000, 44),
    (16,6, 'farah', 'farah@gmail.com', 24500, 23);

-- update table row or tuple
   update user
   set followers=200
   where age = 14;
   select * from user;
   
   set sql_safe_updates=0;

   --delete specific row
   delete from user
   where age=14;
   select * from user;

--  alter to change schema 
-- 1- add coloumn 
alter table user
   add column city varchar(30) default('lahore');
   select * from user;
--    2-drop column 
alter table user
 drop column age;
   select * from user;
--    3-rename table name 
alter table user
 rename to instaUser;
   select * from instaUser;
-- 4-rename column name 
alter table user
change column followers subs INT DEFAULT 0;
   select * from user;
--  5-modify coloumn datatype and contraint
   alter table user
modify subs int default(200);
select * from user;
-- 6-delete table data 
truncate table user;