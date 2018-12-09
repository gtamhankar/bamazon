# bamazon - node app
Assignment 12 - bamazon - batch amazon in node.

Amazon-like storefront with the MySQL and node.
The app will take in orders from customers and deplete stock from the store's inventory. 
The program can track product sales across your store's departments and 
then provide a summary of the highest-grossing departments in the store along with a bar graph. 
The program caters to customer, manager and supervisor roles.

Submitted On: 12/9/2018

## Technologies: node.js, javascrpt, mySQL

This is assignment 12: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/12-mysql/Instructions/homework_instructions.md

* Inputs Files: 
bamazon.js
bamazonCustomer.js
bamazonManager.js
bamazonSecurity.js
bamazonSupervisor.js
db.js
sql files.

* Output: console or can be redirected to a text file.


### Application Specific Details:
-----------------------------
** Possible Inputs/outputs: **

Seq No   |User Role        | Functions         | 
-------- | ------------  | -------------- | 
1  |   Customer| Displays all of the items/products available for sale & then accepts customer's order | 
2 |    Manager | View Products for Sale						| 
2 |                                                                                       | View Low Inventory | 
2  |                                                                                       | Add to Inventory | 
2  |                                                                                       | Add New Product |
3 | Supervisor             | View Product Sales by Department | 
3  |                                                                                       | Create New Department | 
3  |                                                                                       | Graph Sales by Department | 
                  

### Outputs:
--------------
Kindly review the video on complete application and testing.

			
### Features:
----------
* Along with the basic CRUD operations, implemented "cli-table" in node to format the data for reporting if need be. 
* Applied "babar" package to create bar graph to show profits by department.
* Object oriented approach to design so that the application is scalable and modularized.
* Use of nested function callbacks to synchronize the api calls to handle asynchronous nature of javascript.


### Notes & Limitations:
--------------------
This is very primary application. Data validation & normalization is out of scope. 
The program does not run in a loop to accept user's inputs recursively. 
  

### Logic:
-------
bamazon.js allows the user to continue as customer or asks for credentials to continue as supervisor or manager.
A series of nested callbacks ensure that the user gets to see all the products and can select the product to buy.
bamazon.js is a main code snippet that controls the flow of the applciation.
Security module authenticates user and controls the display of proper menu per the user role.
bamazonSupervisor, bmazonCustomer, bamazonManager files have the necessary basic functionality bulit in per the type of user.

	
### Run Instructions:
--------------
To run locally:

1) Clone or download this git repository.
2) Update password to database in db.js - update like : password: "xxxx" 
3) Pls execute schema.sql and seeds.sql in mysql to create necessary database and data.
3) Install following packages on your machine. - 
   "babar": "^0.2.0",
   "cli-table": "^0.3.1",
   "inquirer": "^6.2.1",
   "mysql": "^2.16.0"
4) Use node bamazon on command line and run the program.
