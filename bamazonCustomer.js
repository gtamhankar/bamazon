var db = require('./db');
var inquirer = require('inquirer');
var Table = require('cli-table');
var ruler = "\n --------------------------------------------------------------------------------- \n";

module.exports = {
  
ProductsForSale: function (cb) {	
  
  // instantiate table
  var table = new Table({
    head: ["Item", "Product", "Dept", "Price"]
    , colWidths: [20, 30,30,20]
   });
  // only show products with stock quantity > 0 
  db.query("SELECT * FROM products where stock_quantity > 0 ", function(err, res) {
	
    if (err) throw err;
    for (var i = 0; i < res.length; i++) 
	{
		table.push([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price]);	
      //    console.log("Item: " + res[i].item_id + " || Product: " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
	}
	console.log(table.toString());
	 
	cb();
  }); 
  }, // end of function ProductsForSale
  

getProductOrder: function (cb) {	

	// Accept customer inputs to order a product - item id and quantity
	inquirer.prompt ([{
	name: 'itemID',
	type: 'input',
	message: ruler + 'Please enter ItemID of the product to buy.' ,
  }, {
	name: 'itemUnits',
	type: 'input',
	message: 'Please enter number of units. ',
  }]).then((answers) => {   
	cb(answers.itemID, answers.itemUnits);
  }); 

}, // end of getproductorder  
  
  
 PlaceOrder: function (itemid, itemunits, cb) {	

	var strsql = "SELECT * FROM products where item_id = " + itemid + " and stock_quantity >= " + itemunits + " " ;
	var ttlPrice = 0.00;
	
    db.query(strsql, function(err, res) {
    if (err) throw err;  
    
		if (res.length == 0)
		{
			console.log(ruler + "Insufficient quantity! Product out of stock! " + ruler); 			
			process.end;
		}
		else
		{
		  var i = 0 ;	
		  var newstock = res[i].stock_quantity - itemunits ;
		  ttlPrice = itemunits * res[i].price;	      		  	  
		  console.log (ruler + "Total Price for the current order is: $"  + ttlPrice + ruler);		 

		  cb(itemid, newstock,ttlPrice);
		}
    
  });
}, // end of function verifyQuantity


updateSoldQuantity: function (iid,newstock, ttlOrder) {	  
	
	// update quantity
    var strsql1 = "UPDATE bamazon.products SET stock_quantity = " + newstock +  " , product_sales = product_sales + " + ttlOrder + " WHERE item_id = " + iid + " "   ;

	db.query(strsql1, function(err, resp) {		
			if (err) throw err; 
			
				if (resp.length > 0)
				{
					console.log(ruler + "Your order is updated successfully. " + ruler); 
				}          
		  });	
		  db.end();
} // end of function updateSoldQuantity 

  
};  // end of module export 

  
 
