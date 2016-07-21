// JavaScript exercise July 10/ 
"use strict";
function array_diff(a,b){
	//var mySetA = new Set(a);
	var mySetB = new Set(b);
	var intersection = new Set(a.filter(x => mySetB.has(x)));
	var result = a.filter(function(el){
		return [...intersection].indexOf(el) < 0;
	});
	return result;
}

console.log(array_diff([1,2,2],[2]));