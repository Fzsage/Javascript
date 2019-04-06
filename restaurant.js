/* 
	Write a program that calculates a tab based on the use of a gift certificate and the items ordered. 
	Use literal values for inputs, and a calculation of items- not hardcoded print statements
	
	Input:
		Amount of gift certificate, appetizers, entrees, drinks, dessert for two people
		
	Output:
		Total amount for all items, restaurant tax, and amount left on gift certificate
	
	Processing:
		200 - (app1 + app2 + entree1 + entree2 + drink1 + drink2 + dessert 1 + dessert2 + 7%)

	*Pseudocode*
		- Declare variables for gift certificate, items purchased, and tax
		- Calculate sum of all items
		- Calculate sum of all items purchased
		- Calculate resturant tax
		- Subtract sum of items and restaurant tax from amount of gift certificate
		- Output total, tax, and amount remaining on gift certificate
*/

// Declare variables for gift card amount, items purchased, and tax

var giftCard = 200;

var app1 = 5.50, entree1 = 21.50, drink1 = 4.25, dessert1 = 6;

// Concatenate person 1's items to one variable for ease of use in later operations

var tab1 = app1 + entree1 + drink1 + dessert1;

var app2 = 6.25, entree2 = 18.50, drink2 = 6.50, dessert2 = 5.50;

var tab2 = app2 + entree2 + drink2 + dessert2;

// Multiple .07 by total of person 1 and person 2's tabs to get the tax

var tax = (tab1 + tab2) * .08;

var subtotal = tab1 + tab2;

var total = subtotal + tax;

var giftCardLeft = total - giftCard;

// Print statements for tab, subtotal, tax, total, and amount remaining on gift card

console.log("This program will calculate a restaurant tab for a couple with a gift certificate, with a restaurant tax of 8.0%");

console.log("Amount of gift certificate: " + giftCard);
console.log("Ordered items for person 1:")
console.log("Appetizer: " + app1.toFixed(2));
console.log("Entree: " + entree1.toFixed(2));
console.log("Drinks: " + drink1);
console.log("Dessert: " + dessert1.toFixed(2));

console.log("Ordered items for person 2:");
console.log("Appetizer: " + app2);
console.log("Entree: " + entree2.toFixed(2));
console.log("Drinks: " + drink2.toFixed(2));
console.log("Dessert: " + dessert2.toFixed(2));

console.log("Ordered items: " + subtotal.toFixed(2));
console.log("Restaurant tax: " + "$" + tax.toFixed(2));
console.log("Tab: " + "$" + giftCardLeft.toFixed(2));
console.log("(negative amount indicates unused amount of gift certificate)");