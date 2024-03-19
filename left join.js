Select * FROM Employee, Customers;
Select Employee.*,Customers.* FROM Employee, Customers;
Select emp.*, cust.* FROM Employee emp, Customers cust;
Select emp.FirstName,cust.CustomerName FROM Employee emp, Customers cust;





SELECT * FROM Customers WHERE customer_id = (SELECT customer_id FROM Customers WHERE country="USA")

SELECT customer_id, COUNT(customer_id) as 'NUMBER OF CUSTOMERS' FROM Customers GROUP BY customer_id;


Having Clause: Having clause includes one or more conditions that can be true for group of records. 
The only difference is WHERE clause cannot be used with AGGREGATE functions , but HAVING clause can use aggregate functions.

SELECT customer_id, COUNT(customer_id) as 'NUMBER OF CUSTOMERS' FROM Customers GROUP BY customer_id HAVING COUNT(customer_id)>0;



ORDER BY clause
1.	Order BY clause is used to get the sorted records on one or more columns, it might be in an ascending order or descending order.
2.	The ORDER BY clause, it should be present after WHERE, GROUP BY and HAVING clause.
3.	You can use ASC to sort the records in ascending order or use DESC for descending order.
Sort By Multiple Columns
   When you include multiple columns with the ORDER BY clause it will be sorting the records based on the first column

   
   SELECT * FROM Customers ORDER BY first_name,age;



The Inner Join query is used to retrieve the matching records from two or more tables based on any specific condition.
Syntax: SELECT table1.column_name,table2.column_name FROM table1 INNER JOIN table2 ON table1.column_name =table2.column_name;

SELECT EmpID, Employee.FirstName,Employee.LastName,Department.DepartmentName
FROM Employee INNER JOIN Department ON Employee.DeptID = Department.DeptID;


SQL – Left Join Query
It’s a type of inner join where it returns all the records from the left table and matching records from the right table. 
Syntax
Select column_name FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;

SELECT emp.EmpID, emp.FirstName,dept.DeptID,dept.DepartmentName
FROM Employee emp LEFT JOIN Department dept ON emp.DeptID = dept.DeptID;


