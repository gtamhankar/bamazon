-- database name: bamazon
-- 3 tables - products , ERights, Department
-- if exists drop bamazon;
create database bamazon;

use bamazon;

create table products (
item_id int not null auto_increment,
product_name varchar (500) null,
department_name varchar (100) null,
price decimal (10,2) null,
stock_quantity  int null,
product_sales  decimal(10,2) default 0,
primary key(item_id)
); 

create table ERights (
login_id varchar (100) not null,
login_pwd varchar (100) not null,
userName varchar (200) not null,
userRole varchar (100) not null,
primary key(login_id)
); 

create table department (
department_id int not null auto_increment,
department_name varchar (200) null,
over_head_costs  decimal (10,2) null,
primary key(department_id)
);  

  SELECT * FROM products;
  SELECT * FROM department;
  SELECT * FROM products;

