// // function multiplicationTable(row, col){

// // 	var array = [];
// // 	var firstArray = [];
// // 	// loop thru the colum
// // 	for (var i=1; i <= col; i++){
// // 		firstArray.push(i);
// // 	}
// // 	//console.log(firstArray);
// // 	array.push(firstArray);
// // 	console.log(array);
// // 	for(	var j = 0; j < firstArray.length; j++	)	{
// // 		//var again = firstArray.map();
// // 		var foo = function(){
// // 		for (var k = 0; k < row; k++)
// // 		var foo = firstArray[j] * k;
// // 		return foo;
// // 		}
// // 		firstArray.map(foo());
// // 		console.log(foo());
// // 	}
// // 	// function recursive(row){
// // 	// 	var recursiveArray = [];
// // 	// 	for (var j=0; j < firstArray.length; j++){
// // 	// 		for (var k=1; k <= row; k++){
// // 	// 		recursiveArray.push(firstArray[j]*k);
// // 	// 		}
// // 	// 	}
// // 	// 	console.log(firstArray);
// // 	// 	//console.log(recursiveArray);
// // 	// 	array.push(recursiveArray);
// // 	// }
// // }

// // console.log(multiplicationTable(10,10));

// /*
// [1,2,3]
// [2,4,6]
// [3,6,9]
// */



// //NEW THINKING

// function multiplicationTable(a,b){
// 	var firstArray = [];
// 	for (var i = 1; i <= a; i++ ){
// 		firstArray.push(i)
// 	}
// 	var afterThat = firstArray.map(function(){
// 					e.firstArray = e.firstArray * 2;
// 					return e;
// 					};

// }

// multiplicationTable(10,10);


//solution from codewars
function multiplicationTable (row, col){
	out = []
	for (var i = 1; i <= row; i++){
		temp = []
		// console.log(temp);
		for( j = 1; j <= col; j++)
		{
			temp.push(i*j)
		};
		out.push(temp)
	}
	return out;
};

console.log(multiplicationTable(10,10));
