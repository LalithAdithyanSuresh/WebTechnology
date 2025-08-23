SELECT * FROM Employees e WHERE  Salary > (SELECT Salary FORM Employees )

SELECT * FROM Customters c RIGHT JOIN Orders o ON c.ID = o.CustemoterID 