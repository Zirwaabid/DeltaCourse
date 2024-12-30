INSERT INTO user (age,id, name, email, followers, following)
VALUES
    (15,1, 'zirwa', 'zirwa@gmail.com', 12, 44),
    (16,2, 'anas', 'anas@gmail.com', 15, 43),
    (17,3, 'adam', 'adam@gmail.com', 200, 20),
	(18,4, 'corey', 'corey@yahoo.com', 300, 43);
    select age,name from user
--    where clause ex 
    where age >= 17;
    -- frequently used operators 
     where age > 15 and followers > 200; -- both true 
      where age > 15 or followers > 200; -- only one true
       where age between 15 and 17;  -- give range
     
     --in matches any value in the list
       select name,followers,email from user
    where email in ('adam@gmail.com','corey@yahoo.com','abc@gmail.com');  
    where age in (14,16); 
      
      where age not in (14,16); -- negate the value