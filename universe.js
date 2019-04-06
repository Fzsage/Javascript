/*
	Write a program that calculates the number of atoms that the average person contains
	and the percentage of the universe that they comprise. 
	Use a literal value of 150 for the weight in pounds.
	
	Input:
		Weight in lbs (150), atoms in average person (7e27), atoms in universe (10e80)
	
	Output:
		Atoms in person's body, % of universe comprised
		
	Processing:
		Convert lbs to kg
		Atoms in a person = (weight in kg / 70) * number of atoms in an average person
		Percent of universe = (num atoms / num atoms in the universe) * 100
		
	*Pseudocode*
		- Convert weight in lbs to kgs
		- Use weight in kgs and given formula to calculate number of atoms in a person
		- Use this number to calculate their percentage of the universe
		- Output calculated values
*/

// Convert weight in lbs to kg

var weightLb = 150;
var weightKg = weightLb * .453592;

// Calculate number of atoms in the person weighing 150 lbs

var atoms = (weightKg / 70) * 7e27;

// Calculate the percentage of the universed comprised based on # of atoms in person / by # of atoms in the universe

var placeInU = (atoms / 10e80) * 100;

// Print values

console.log("This program will determine your place in the universe.");

console.log("Your weight in pounds: " + weightLb);

console.log("You contain approximately " + atoms.toExponential(3) + " atoms");

console.log("Therefore, you comprise " + placeInU.toExponential(3) + "% of the universe");