/*
Design and implement a program that will allow us to determine the length of time needed
to pay off a credit card balance, as well as the total interest paid.

displayWelcome function - display welcome message explaining what program does
calculateMinimumPayment function- calculates minimum payment. Takes balance and interest rate as arguments, return minimum payment
displayPayments function- displays payment schedule. 

*/

var balance = 1500; //starting balance used for calculating min payment and interest
var interest = (.18/12); //monthly interest at 18% apr
var minPayRate = .02; // 2% used to calculate minimum payment
var tab = "\t";
var paymentNum = 1; //payment number intializer
var interestPaid = 0; //interest paid intializer
var balanceRemaining = 1500; //balance figure used for subtracting payments. keep separate from balance to keep min payment and interest consistent
var year = 1; // year initializer


//Function used to calculate the mininum payment required
function calculateMinimumPayment(balance,minPay){
	var minimumPayment = (balance * minPay); //1500 * 2%
	return minimumPayment;
}

//Function to display the welcome message. 
function displayWelcome(balance, interest,minPay){
	console.log("This program will determine the time to pay off a  credit card and the interest paid based on the current balance, the interest rate, and the monthly payments made.");
	console.log("Balance on your credit card: " + balance);
	console.log("Interest rate: " + interest);
	console.log("Assuming a minimum payment of 2% of the balance");
	console.log("Your minimum payment would be $" + minPay + "\n");
}

//Function to display the year, balance remaining, payment number, and total interest paid
function displayPayments(balance, monthlyInterest, minPay){
		
		var interestPay = (balanceRemaining * monthlyInterest); //calculate how much interest will be paid for THIS payment
		balanceRemaining -= (30 - interestPay);	 //set balance remaining to: minimum payment minus the interest paid	
		interestPaid += interestPay; //Adds interest for this payment to the total interest paid
		if(balanceRemaining > 0){
			console.log("  " + year + tab + balanceRemaining.toFixed(2) + tab + "    " + paymentNum + tab + tab + "    " + interestPaid.toFixed(2));
		}
		else{ // to prevent the last payment from showing a negative balance
			console.log("  " + year + tab + "0" + tab + "    " + paymentNum + tab + tab + "    " + interestPaid.toFixed(2));
		}
		paymentNum++; //increment payment number
		if(paymentNum % 12 === 0){ //increment the year if # of payments is strictly divisible by 12 
			year++
		}
		return balanceRemaining, paymentNum, interestPaid;
	
	
	
}

displayWelcome(balance, 18, calculateMinimumPayment(balance,minPayRate));

console.log("PAYOFF SCHEDULE");
console.log("________________" + "\n");
console.log("Year" + tab + "Balance" + tab + "Payment Num" + tab + "Interest Paid" + "\n");

//as long as the balance is more than 0, the displayPayments function will run
while (balanceRemaining > 0){
	
	displayPayments(balance,interest,minPayRate);
	
}




