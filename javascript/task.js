var a = 1_00;
var b = 2_00;
var c = 1e2;
var d = 2.4;

/* mallest*/
var smallestNumber = Math.min(a, b, c, d);
var smallestInteger = Math.min(a, b, c, Math.floor(d));
console.log("Smallest Number: ", smallestNumber);
console.log("Smallest Integer: ", smallestInteger);

/* 4 Method*/
var result1 = Math.floor(d);
var result2 = Math.round(d);
var result3 = Math.trunc(d);
var result4 = parseInt(d);

console.log("floor :" + result1, "round :" + result2, "trunc :" + result3, "parseInt :" + result4);


// b+d == s "66.67" ,num=67//

var sum = (b + d) / 3;
var fs = (66.67).toFixed(2);
var rsum = Math.round(sum);

console.log("fstring: ", fs);
console.log("rsum: ", rsum);


// a+d == 10000//

var summ = a * d * 41.6666667;
console.log(Math.floor(summ));



/*******************/
/*******************/
/*******************/



var a = "hello from javascript";
console.log(a.slice(6, 10));
console.log(a.charAt(6) + a.charAt(7) + a.charAt(8) + a.charAt(9));



// return array [hello] //
console.log(a.split(" ", 1));

//ssssss//
console.log("s".repeat(8));

console.log(a.substr(0, 5));


// must be dynamic and string f and l capital //
console.log(a.charAt(0).toUpperCase() + a.slice(1, length - 1).toLocaleLowerCase() + a.slice(1, length - 1).toLocaleUpperCase());