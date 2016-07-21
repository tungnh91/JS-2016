/*
My solution 

var n = function makeNum(n,f){
	if (f == null){ return n;}
	else {return f(n);}
}

function zero(f) { return n(0,f)}
function one(f) { return n(1,f);}
function two(f) { return n(2,f);}
function three(f) { return n(3,f);}
function four(f) { return n(4,f);}
function five(f) {return n(5,f);}
function six(f) { return n(6,f);}
function seven(f) {return n(7,f);}
function eight(f) { return n(8,f);}
function nine(f) { return n(9,f);}

function plus(v) { return function(u){return v+ u};}
function minus(v) {return function(u){return u-v};}
function times(v) {return function(u){return v*u;};}
function dividedBy(v) {return function(u){return u/v};}


console.log(seven(times(five())));
console.log(two(plus(five())));
console.log(four(dividedBy(two())));
console.log(eight(minus(three())));

*/

// Codewars solution 

var n = function(digit){
	return function (op){
		return op ? op(digit) : digit;
	}
};

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(u) {return function(v){return v+u;};}
function minus(u) {return function(v){return v-u;};}
function times(u) {return function(v){return v*u;};}
function dividedBy(u) {return function(v){return v/u;};}

console.log(two(times(five())));