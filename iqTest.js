"use strict";
function iqTest(numbers){
	let array = numbers.split(" ");
	let even = [];
	let odd = [];
	for (let i = 0; i < array.length; i++){
		if (array[i] % 2 != 1) {even.push(array[i]);}
		else {odd.push(array[i]);}
	}
	// console.log(even);
	// console.log(odd);
	if (even.length < odd.length) {return array.indexOf(even[0]) + 1;}
	else {return array.indexOf(odd[0]) +1;}
}

console.log(iqTest("2 4 6 7 8 10"));

// One more time. 

"use strict";
function iqTest(numbers){
	//first of all we are going to convert the string to an array, we split it by the space.
	let array = numbers.split(" ");
	// create 2 empty array for even and odd numbers that we are going to use later
	let even = [];
	let odd = [];
	//loop thru the array that we have just created
	for (let i = 0; i < array.length; i++){
		//if found even numbers, push to even array
		if (array[i] % 2 != 1) {even.push(array[i]);}
		// otherwise push it to the odd array 
		else {odd.push(array[i]);}
	}
	//find the shorter array between even and odd, return the index plus 1 for position IRL.
	if (even.length < odd.length) {return array.indexOf(even[0]) +1;}

	else {return array.indexOf(odd[0]) +1;}

}

console.log(iqTest(" 2 4 6 1 8 10"));