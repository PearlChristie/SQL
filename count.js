Select * FROM Employee, Customers;
Select Employee.*,Customers.* FROM Employee, Customers;
Select emp.*, cust.* FROM Employee emp, Customers cust;
Select emp.FirstName,cust.CustomerName FROM Employee emp, Customers cust;





SELECT * FROM Customers WHERE customer_id = (SELECT customer_id FROM Customers WHERE country="USA")

SELECT customer_id, COUNT(customer_id) as 'NUMBER OF CUSTOMERS' FROM Customers GROUP BY customer_id;