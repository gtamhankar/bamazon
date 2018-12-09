var inquirer = require('inquirer');
var processCustomer = require('./bamazonCustomer');
var processSecurity = require('./bamazonSecurity');

var uRole = "";

var ruler = "\n --------------------------------------------------------------------------------- \n";

// checking wheather to continue as customer 
inquirer.prompt ([{
	name: 'userOption',
	type: 'confirm',
	message: ruler +  "\n Please enter 'y' if you would like to go ahead as Customer to order products. \n Please enter 'n' to log in as supervisor or manager. \n" + ruler,
}]).then((ans) => {	
	if (ans.userOption)
	{
		// continue as customer		
		processCustomer.ProductsForSale(function(){
			processCustomer.getProductOrder(function(a,b){
				processCustomer.PlaceOrder(a,b, function(c,d,e){
					processCustomer.updateSoldQuantity(c,d,e)
				})
			})
		});		
	}
	else
	{	
		// login as supervisor/manager		
		userLogin();		
	}
	process.end;
});


// get login information from user - continuing as supervisor or manager
function userLogin()
{
inquirer.prompt ([{
  name: 'login',
  type: 'input',
  message: ruler + '  Please enter login id.',
}, {
  name: 'pwd',
  type: 'password',
  message: 'Please enter password. ' ,
}]).then((answers) => {
	var userid = answers.login;
	var pwd = answers.pwd;	
	
	// call verify login and password and get role.
	//processSecurity.getUserRole(userid,pwd);
	processSecurity.getUserRole(userid, pwd, function(role){
	
		switch (role)
		{
		case "SUPERVISOR":
			//console.log ("You are SUPERVISOR");
			processSecurity.showMenuSupervisor();
			break;
			
		case "MANAGER":
			//console.log ("You are MANAGER");
			processSecurity.showMenuManager();
			break;

		case "NA":
			console.log ("oops! User not authorized.");
			break;
	}
	})
}); 

}
