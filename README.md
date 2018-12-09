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
* Added data validations.
* Object oriented approach to design so that the application is scalable.
* Use of nested function callbacks to synchronize the api calls to bandsintown and geocoder.
* Read file in synchronously (blocking) so that the asynchrnous calls do not conflict between input and output file.


### Notes & Limitations:
--------------------
Limited scope for error handling. A separate class could have been written to handle response from api in case of issues.
  

### Logic:
-------
liri.js accepts the command line inputs/arguments and maps the input command to the corresponding task. 
In case of missing/invaid inputs, it handles the inputs to defaults or sends appropriate messages to the user.
liri.js calls the liriprocess.js by linking them using liridata object.
Liridata object has properties that are defiend as tasks for each command.
Each property calls the api and formats/parses the response object.  
The selected properties of the response object are sent to console and log.txt file. 
	
### Run Instructions:
--------------
To run locally:

1) Clone or download this git repository.
2) set spotify id  and secret key in .env file. 
3) liriporcess.js has the api key for the node-geocoder api. Please supply this key in this file.
3) Install following packages on your machine. - 
    "dotenv": "^6.1.0",
    "geocoder": "^0.2.3",
    "moment": "^2.22.2",
    "node-geocoder": "^3.22.0",
    "node-spotify-api": "^1.0.7",
    "request": "^2.88.0"
4) Use node liri <command> on command line and run the program.
