CREATE DATABASE Customer;

--CUSTOMER TABLE--
CREATE TABLE Customer(
Custid int PRIMARY KEY,
Cust_name varchar(20) NOT NULL,
Cust_add varchar(200)
)

INSERT INTO Customer VALUES (1,'kabir','Ahmedabad'),(2,'karan','Ahmedabad'),(3,'shrey','rajkot'),(4,'raj','baroda'),(5,'ramesh','Surat');

SELECT * FROM Customer;

ALTER TABLE Customer ADD email varchar(20);

UPDATE Customer SET email = 'kabir@aimdek.com' Where Custid = 1;
UPDATE Customer SET email = 'karan@aimdek.com' WHERE Custid = 2;
UPDATE Customer SET email = 'shrey@aimdek.com' WHERE Custid = 3;
UPDATE Customer SET email = 'raj@aimdek.com' WHERE Custid = 4;
UPDATE Customer SET email = 'ramesh@aimdek.com' WHERE Custid = 5;


--ORDERS TABLE--
CREATE TABLE Orders(
Ordid int PRIMARY KEY,
Ord_date date,
Custid int,
FOREIGN KEY (Custid) REFERENCES Customer(Custid)
);

SELECT * FROM Orders

INSERT INTO Orders VALUES(1,'11-Jan-2022',1)
INSERT INTO Orders VALUES(2,'31-Dec-2021',2)
INSERT INTO Orders VALUES(3,'07-jan-2022',2)
INSERT INTO Orders VALUES(4,'04-jan-2022',5)
INSERT INTO Orders VALUES(5,'05-jan-2022',3)

--PRODUCTS TABLE--
CREATE TABLE Products(
Product_id int PRIMARY KEY,
Product_name varchar(20) NOT NULL,
Product_Price int,
Ordid int
FOREIGN KEY (Ordid) REFERENCES Orders(Ordid)
)

INSERT INTO Products VALUES(101,'Nord-2',24000,1),
(102,'9-T',49000,2),
(103,'IPhone-12',80000,3),
(104,'Pixel-3',70000,4),
(105,'Note-10',56000,5);

SELECT * FROM Products

SELECT Orders.Ordid, Customer.Cust_name, Orders.Ord_date, Products.Product_name FROM Orders INNER JOIN Customer ON Orders.Custid=Customer.Custid 
INNER JOIN Products ON Orders.Ordid=Products.Ordid

SELECT Orders.Ordid, Customer.Cust_name, Orders.Ord_date, Products.Product_name FROM Orders FULL OUTER JOIN Customer ON Orders.Custid=Customer.Custid 
FULL OUTER JOIN Products ON Orders.Ordid=Products.Ordid

SELECT Customer.Cust_name, Orders.Ordid, Products.Product_name FROM Orders RIGHT JOIN Customer ON Orders.Custid = Customer.Custid
RIGHT JOIN	Products ON Orders.Ordid=Products.Ordid

SELECT Customer.Cust_name, Orders.Ordid, Products.Product_id FROM Customer LEFT JOIN Orders ON Customer.Custid = Orders.Custid
LEFT JOIN Products ON Orders.Ordid=Products.Ordid


SELECT * FROM Customer
SELECT * FROM Orders
SELECT * FROM Products

--VIEWS--
CREATE VIEW view1 AS SELECT Cust_name, Cust_add FROM Customer WHERE Cust_add = 'Ahmedabad';

SELECT * FROM view1

CREATE VIEW view2 AS SELECT Ordid, Ord_date FROM Orders WHERE Ord_date BETWEEN '01-jan-2022' AND '30-dec-2022';

SELECT * FROM view2


--PROCEDURE--
Create Procedure uspCustomerList
As
begin
Select * From Customer
END 

EXEC uspCustomerList;

alter Procedure uspCustomerList
@name varchar(20)
As
begin
Select * From Customer where Cust_name=@name;
END 

EXEC uspCustomerList 'kabir';

alter Procedure uspCustomerList
@name varchar(20), @Cust_id int Output
As
begin
Select @Cust_id=Custid From Customer where Cust_name=@name;
END 

Declare @returnvalue int;
EXEC uspCustomerList 'kabir',@returnvalue Output;
SELECT @returnvalue as 'Customer ID is'