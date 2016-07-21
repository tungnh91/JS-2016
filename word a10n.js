// function abbreviate(string){
// 	arr = string.split(" ");
// 	// arr = arr.split("-")
// 	//console.log(arr);
// 	var char = [];
// 	for( var i=0; i < arr.length; i++){
// 		char.push(arr[i].split(""))
// 	}
// 	//console.log(char);
// 	result = [];
// 	for( var j=0; j < char.length; j++){
// 		result.push(char[j][0] );
// 		result.push(char[j].length-2);
// 		result.push(char[j][char[j].length-1]);
// 	}
// 	result2 =[];
// 	while(result.length >0)	
// 	result2.push(result.splice(0,3));
// 	return result2.join(" ").replace(/,/gi,"");
	
// 	// result3 = [];
// 	// for( var k = 0; k < result2.length; k++){
// 	// result3.push(result2[k].join(","));
// 	// }
// 	// console.log(result3);}
// }


// CW SOLUTION:
var find = /[a-z]{4,}/gi;

function replace(match){
	return match[0] + (match.length -2 ) + match[match.length -1] ;
}

function abbreviate(string){
	return string.replace(find, replace);
}

console.log(abbreviate("should-test for something"));

