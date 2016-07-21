// function findSmallestInt(args){
// 	return Math.min.apply(Math, args);
// }

//or
"use strict";
function findSmallestInt(args){
	return Math.min.apply(null,args);
//	console.log(args);
}
var x = findSmallestInt([78,56,232,12,8]);
console.log(x)