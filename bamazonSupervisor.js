var db = require('./db');
var inquirer = require('inquirer');
var Table = require('cli-table');
var babar = require('babar');

var Lowthreshold = 5;
var ruler = "\n --------------------------------------------------------------------------------- \n";

module.exports = {
  
GraphSales: function () {
	var graphData = [];
	var strsql = 	" SELECT d.department_id as dname, " +    
					" COALESCE(( sum(p.product_sales) - d.over_head_costs),0) as total_profit " + 
					" FROM department d left outer join products p on p.department_name = d.department_name " + 
					" group by d.department_name order by d.department_id; ";
	
    db.query(strsql, function(err, res) {
    if (err) throw err;  
   
		if (res.length == 0)
		{
			console.log(ruler + "No data to show for : Product Sales by Department! " + ruler); 	
			process.end;
		}
		else
		{
			console.log(ruler);
			console.log(" Bar Representation of Profit Per Department ");
			
			// expand to have the correct amount or rows
			for( var i=0; i<res.length; i++ ) {
			  graphData.push( [] );
			}

			// expand all rows to have the correct amount of cols
			for (var i = 0; i < res.length; i++)
			{
				//for (var j =  graphData[i].length; j < 2; j++)
				//{					
					graphData[i].push(res[i].dname,res[i].total_profit );
				//}
				console.log (graphData[i]);
			}
			
			/*
			
			for (var i = 0; i < res.length; i++) {
				console.log(res[i].did + " || " + res[i].dname + " || " + res[i].ohc + " || " + res[i].tps + " || " + res[i].total_profit);
			}	*/		
			console.log(babar(graphData, {
					  caption: "Bar Representation",
					  color: 'green',
					  width: 20,
					  height: 15,
					  minY: 0,
					  maxY: 4000,
					 // yFractions: 500
					}));
					console.log(ruler);  
		}  
  });
  
	process.end;
},
  
ProductSales: function () {	

	// instantiate table
	var table = new Table({
    head: ["Department Id", "Department Name", "Overhead Costs","Product Sales","Total Profit"]
    , colWidths: [20, 30,30,20,20]
   });
  	
	var strsql = 	" SELECT d.department_id  as did, d.department_name as dname, d.over_head_costs as ohc, " + 
					" COALESCE(sum(p.product_sales),0) as tps, " +     
					" COALESCE(( sum(p.product_sales) - d.over_head_costs),0) as total_profit " + 
					" FROM department d left outer join products p on p.department_name = d.department_name " + 
					" group by d.department_name order by d.department_id; ";
	
	//console.log("\n " + strsql );
    db.query(strsql, function(err, res) {
    if (err) throw err;  
    
		if (res.length == 0)
		{
			console.log(ruler + "No data to show for : Product Sales by Department! " + ruler); 		
		}
		else
		{
			console.log(ruler);
			//console.log("Department Id || Department Name || Overhead Costs || Product Sales || Total Profit ");
			for (var i = 0; i < res.length; i++) {
				//console.log(res[i].did + " || " + res[i].dname + " || " + res[i].ohc + " || " + res[i].tps + " || " + res[i].total_profit);
				table.push([res[i].did, res[i].dname, "$" + res[i].ohc,  res[i].tps, "$" + res[i].total_profit]);	
			}
			console.log(table.toString());
			console.log(ruler);
		}
    
  });
}, // end of function ProductSales
 

AddDept: function () {	

	// Accept manager inputs to add inventory - item id and quantity
	inquirer.prompt ([{
	name: 'deptname',
	type: 'input',
	message: ruler + 'Please enter Department Name.',
  }, {
	name: 'OHCost',
	type: 'input',
	message: 'Please enter overhead cost. ',
  }]).then((answers) => {
	   var strsql1 = " INSERT INTO department (`department_name`, `over_head_costs`) VALUES ('" + answers.deptname + "' , " + answers.OHCost + " );  " ;
		
		db.query(strsql1, function(err, resp) {		
			if (err) throw err; 
							
			console.log("\n Department added successfully. " ); 
				         
		  });	
  });
} // end of function AddtoInventory - BulkProductOrder
 
 
};  // end of module export 

  
 
