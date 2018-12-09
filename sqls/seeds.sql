use bamazon;

 INSERT INTO `bamazon`.`department` (`department_name`, `over_head_costs`) VALUES ('Pantry',500);
 INSERT INTO `bamazon`.`department` (`department_name`, `over_head_costs`) VALUES ('Electronics',1000);
 INSERT INTO `bamazon`.`department` (`department_name`, `over_head_costs`) VALUES ('household',400);
 INSERT INTO `bamazon`.`department` (`department_name`, `over_head_costs`) VALUES ('Toys',100);
 INSERT INTO `bamazon`.`department` (`department_name`, `over_head_costs`) VALUES ('Sports',600);
 
INSERT INTO `bamazon`.`erights`
(`login_id`,
`login_pwd`,
`userName`,
`userRole`)
VALUES
('mgr','mgr','Rudolf Reindeer', 'Manager');

INSERT INTO `bamazon`.`erights`
(`login_id`,
`login_pwd`,
`userName`,
`userRole`)
VALUES
('spr','spr','Santa Clark', 'Supervisor');
 

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Eggs Organic","Pantry","6.00","50",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Whole Milk Organic","Pantry","7.00","60",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Spring Water 16oz","Pantry","4.00","100",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("iPad","Electronics","600","8",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("mini Pad ","Electronics","80.00","20",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Cooking play set","Toys","25.00","30",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Mickey Mouse","Toys","6.00","50",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("HotWheels Cars","Toys","1.00","1000",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Tricycle","Toys","120.00","10",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Home Gym","Sports","600.00","15",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Skipping Rope","Sports","60.00","300",0);

INSERT INTO `bamazon`.`products`
(`product_name`, `department_name`,`price`, `stock_quantity`,product_sales) VALUES ("Soccer Ball","Sports","120.00","10",0);

  SELECT * FROM products ;
  SELECT * FROM bamazon.department;
  SELECT * FROM bamazon.Erights;
  

