var db = require('./db');
var inquirer = require('inquirer');
var Table = require('cli-table');
var Lowthreshold = 5;
var ruler = "\n --------------------------------------------------------------------------------- \n";

module.exports = {
  
ViewLowInventory: function () {	
  	
	  // instantiate table
   var table = new Table({
    head: ["Item", "Product", "Dept", "Price", "Stock"]
    , colWidths: [20, 30,30,20,20]
   });
   
	var strsql = "SELECT * FROM products where stock_quantity < " + Lowthreshold + " " ;
	//console.log("\n " + strsql );
    db.query(strsql, function(err, res) {
    if (err) throw err;  
    
		if (res.length == 0)
		{
			console.log(ruler + "Products with Low Inventory not found. " + ruler); 		
			process.end;
		}
		else
		{
			for (var i = 0; i < res.length; i++) {
				table.push([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price,res[i].stock_quantity]);	
				//console.log("Item: " + res[i].item_id + " || Product: " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
			}
			console.log(table.toString());
		}    
  });
}, // end of function ViewLowInventory
 

  
ShowAllProducts: function (cb) {	
  
  // instantiate table
  var table = new Table({
    head: ["Item", "Product", "Dept", "Price", "Stock"]
    , colWidths: [20, 30,30,20,20]
   });
  // only show products with stock quantity > 0 
  db.query("SELECT * FROM products  ", function(err, res) {
	
    if (err) throw err;
    for (var i = 0; i < res.length; i++) 
	{
		table.push([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price,res[i].stock_quantity]);	
      //    console.log("Item: " + res[i].item_id + " || Product: " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
	}
	console.log(table.toString());
	 
	cb();
  }); 
  }, // end of function ShowAllProducts
  
 
 
BulkProductOrder: function (cb) {	

	// Accept manager inputs to add inventory - item id and quantity
	inquirer.prompt ([{
	name: 'itemID',
	type: 'input',
	message: 'Please enter ItemID of the product to update.',
  }, {
	name: 'itemUnits',
	type: 'input',
	message: 'Please enter number of units to update. ',
  }]).then((answers) => {
   
	// update quantity
    var strsql1 = "UPDATE bamazon.products SET stock_quantity = " + answers.itemUnits + " WHERE item_id = " + answers.itemID + " "   ;

	db.query(strsql1, function(err, resp) {		
			if (err) throw err; 
			
				if (resp.length > 0)
				{
					console.log(ruler + "Stock updated successfully. " + ruler); 
				}          
		  });	
		  db.end();
  });   	
}, // end of function AddtoInventory - BulkProductOrder
 

 
AddProduct: function () {	

	// Accept manager inputs to add inventory - item id and quantity
	inquirer.prompt ([{
	name: 'itemname',
	type: 'input',
	message: ruler + 'Please enter Item Name of the product to update.',
  }, {
	name: 'deptname',
	type: 'input',
	message: 'Please enter Department name. ',
  },
   {
	name: 'iPrice',
	type: 'input',
	message: 'Please enter item price. ',
  },
  {
	name: 'itemUnits',
	type: 'input',
	message: 'Please enter stock quantity. ',
  }
  ]).then((answers) => {
		var strsql1 = " INSERT INTO products (`product_name`, `department_name`,`price`, `stock_quantity`) VALUES ('"  +  answers.itemname + "' , '" + answers.deptname + "' , " + answers.iPrice + "," + answers.itemUnits + "); "   ;
	
		db.query(strsql1, function(err, resp) {		
			if (err) throw err; 							
			console.log("\n Your order is updated successfully. " ); 
				         
		  });	
  });   	
} // end of function AddtoInventory - BulkProductOrder
 
 
};  // end of module export 

  
 
