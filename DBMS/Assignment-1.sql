CREATE DATABASE Student;

CREATE TABLE Student(
id int PRIMARY KEY,
name varchar(20),
age int DEFAULT 18,
)

ALTER TABLE Student
ADD email varchar(20);

INSERT INTO Student VALUES
(1,'kabir',22,'kabir@vora.com');

INSERT INTO Student VALUES
(2,'Rajesh',18,'Rajesh@rj.com'),
(3,'Rakesh',17,'Rakesh@rj.com');

INSERT INTO Student VALUES
(5,'Karan',20,'karan@rj.com');


SELECT * FROM Student;

SELECT * FROM Student where age>=20;

SELECT * FROM Student where age<20;

SELECT * FROM Student
WHERE age='22' AND name='kabir';

SELECT * FROM Student
WHERE age='22' OR age='19';

SELECT * FROM Student
ORDER BY name;

SELECT * FROM Student
ORDER BY age DESC;

SELECT * FROM Student
WHERE name LIKE 'k%';

SELECT * FROM Student
WHERE email LIKE '%rj.com';

SELECT COUNT(*),age FROM Student GROUP BY age;
