use DB;

CREATE TABLE SALARY(
id int Primary key,
EmpName varchar(20),
Designation varchar(20),
EmpSalary int
)

Select * from SALARY

INSERT INTO SALARY VALUES(101,'kabir','Developer',40000),(102,'shrey','jr-dev',45000),(103,'jay','sr-dev',46000),(104,'dhairya','HR',50000);

SELECT * FROM SALARY;	

BEGIN TRANSACTION;
	update SALARY set EmpSalary=43500 where id=101


Rollback;

SELECT * FROM SALARY;

BEGIN TRANSACTION;
	update SALARY set EmpSalary=40000 where id=101

Commit;

BEGIN TRANSACTION;
	insert into SALARY values(5,'rushabh','HR',38000)

Commit;

