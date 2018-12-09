var db = require('./db');
var inquirer = require('inquirer');
var processCustomer = require('./bamazonCustomer');
var processManager = require('./bamazonManager');
var processSupervisor = require('./bamazonSupervisor');
var ruler = "\n --------------------------------------------------------------------------------- \n";

module.exports = {
  
getUserRole: function (login,pwd, cb) {	
  
  var strSql = " SELECT userName, upper(userRole) as userRole FROM erights where login_id = '" + login + "' and login_pwd = '" + pwd + "'  ";
  var eRole = "NA";
  
  db.query(strSql, function(err, res) {	
	if (err) throw err;
		//console.log ("\n length" + res.length);
		//console.log ("\n res" + res);
    for (var i = 0; i < res.length ; i++) {
		eRole = res[i].userRole;
        console.log(ruler + "Welcome: " + res[i].userName + ". You are authorized as " + res[i].userRole + "." + ruler);			
	}
	cb(eRole);
  }); 
  }, // end of function getUserRole
  
  
showMenuManager: function () {	

inquirer.prompt ([{
      type: 'list',
      name: 'size',
      message: ruler + 'Functions for Managers:' + ruler,
      choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Quit'],      
    }]).then(answers => {
    //console.log(answers.size);
	switch (answers.size)
	{
		case ("View Products for Sale"):
			console.log( "\n Viewing Products for Sale" );
			processManager.ShowAllProducts(function(){});
			//processCustomer.ProductsForSale(function(){});
			break;
			
		case ("View Low Inventory"): 
			console.log("\n Checking Low Inventory");
			processManager.ViewLowInventory();
			break;
			
		case ("Add to Inventory"): 
			console.log("\n Adding to Inventory");
			processManager.ShowAllProducts(function(){				
				processManager.BulkProductOrder()
				});			
			break;
			
		case ("Add New Product"): 
			console.log("\n Adding New Product");
			processManager.AddProduct();
			break;	
			
		case ("Quit"):
			process.exit();			
	} // end of manager menu
  });
}, 
	
	
showMenuSupervisor: function () {	

inquirer.prompt ([{
      type: 'list',
      name: 'size',
      message: ruler + 'Functions for Supervisors:' + ruler,
      choices: ['View Product Sales by Department', 'Create New Department', 'Graph Sales by Department','Quit'],      
    }]).then(answers => {
    //console.log(answers.size);
	switch (answers.size)
	{
		case ("View Product Sales by Department"):
			console.log("\n Viewing Products for Sale");
			processSupervisor.ProductSales();
			break;
							
		case ("Create New Department"): 
			console.log("\n Adding New Department");
			processSupervisor.AddDept();
			break;	
			
		case ("Graph Sales by Department"):
			processSupervisor.GraphSales();
			break;
				
		case ("Quit"):
			process.exit();			
	} // end of supervisor menu
	
  });
  
}
  
};  // end of module export 

