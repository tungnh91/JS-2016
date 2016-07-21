// function Xbonacci (signature, n){
// 	var result = [];
// 	for (var i = 0; i < signature.length; i++) {
// 		result.push(signature[i]);
// 	}

// 	//while (result.length < n) {doThisShit();}
// 	for (var j = 0; j < n; j++){
// 	var sum = result.reduce(function(a,b){return a+b;}, 0);
// 	result.push(sum);
// 	}
// 	console.log(result);


// }


function Xbonacci (signature, n){
	var len = signature.length;
	var i = len -1;
	while(i++ < n){
		signature[i] = signature.slice(i - len).reduce(sum,0);
		console.log(signature.slice(i-len));
	}
	return signature.slice(0,n);
}
function sum(a,b){return a+b};
console.log(Xbonacci([1,1,1,1], 10));