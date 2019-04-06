/* Write a program called calendar.js that displays a calendar month for May 2012 as the month and year. You must use a loop.

Create date
Store the days of week in an array
Create variable for number of days in month used in for loop
Print month, year, and days of week
Create for loop, initialize at 1 and run for number of days in the month
Nest loop
Create columns, print blanks up until first day
Print days 1-31, incrementing dates for each run
*/


var may2012 = new Date(2012,4,1); // Initialize date
var daysOfWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Array to store days of the week

var year = may2012.getFullYear();	// Variable for year to display on calendar header    
//var month = may2012.getMonth();    
//var today = may2012.getDate();    
//var weekday = may2012.getDay();

var daysInWeek = 7; // Variable for days of week. Used to end for loops
var daysInMonth = 31;

var nextColumn = "\t"; // Store tab for easy use of formatting columns within following strings; 

var output = ""; 
for(i=0; i < daysInWeek; i++){ // Concatenate days of the week to print as one string
	output += daysOfWeek[i] + nextColumn;
}
console.log("May" + " " + year + "\n") // Print month and year
console.log(output + "\n"); // Print days of the week



for (date = 1; date < daysInMonth;){ // Run as long as the date is less than max days in the month
	var day = " ";
	for (var column = 1; column <=7; column++){ // Create columns for numbers of days in week
		
		if (date == 1 && column < 3){
			
			day += nextColumn;  // Fill in blanks
			
			
		}
		else {
			
			day += date + nextColumn; // Fill in date value 1-31 and a tab to the next column, which is day of week
			date++;
		}
		if (date > 31){ // Break when the date is over 31, otherwise the parent loop will complete and fill in dates
			break;      // until the week ends and the intitial for loop has a chance to check
		}
		}
	console.log(day);  // Print values
	
}
