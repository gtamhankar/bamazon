# bamazon - node app
Assignment 12 - bamazon - batch amazon in node 
Amazon-like storefront with the MySQL and node
The app will take in orders from customers and deplete stock from the store's inventory. 
The program can track product sales across your store's departments and 
then provide a summary of the highest-grossing departments in the store along with a bar graph. 

Submitted On: 12/9/2018

## Technologies: node.js, javascrpt, mySQL

This is assignment 12: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/12-mysql/Instructions/homework_instructions.md

* Inputs Files: 
* Output: console or ca be redirected to a text file.


### Application Specific Details:
-----------------------------
** Possible Inputs/outputs: **

Seq No   | Input        | Output         | 
-------- | ------------  | -------------- | 
1  |   liri  concert-this <artist/band name here> | Name of the venue  | 
1  |   | Venue location 	 | 
1  |   | Date of the Event (use moment to format this as "MM/DD/YYYY") 	|  
1  |   | Formatted address | 
2 |    liri spotify-this-song <song name here> else defaults to "The Sign" by Ace of Base. | Artist(s) 						| 
2 |                                                                                       | The song's name | 
2  |                                                                                       | A preview link of the song from Spotify | 
2  |                                                                                       | The album that the song is from |
3 | liri movie-this <movie name here> else defaults to movie 'Mr. Nobody.'              | Title of the movie. | 
3  |                                                                                       | Year the movie came out. | 
3  |                                                                                       | IMDB Rating of the movie. | 
3 |                                                                                       | Rotten Tomatoes Rating of the movie. | 
3  |                                                                                       | Country where the movie was produced. | 
3  |                                                                                       | Language of the movie. | 
3  |                                                                                       | Plot of the movie. | 
3  |                                                                                       | Actors in the movie. | 
4 | liri do-what-it-says (in random.txt file, one of the above commands) | Content like 1/2/3 | 
                  

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
