// var a = 1_00;
// var b = 2_00;
// var c = 1e2;
// var d = 2.4;

// /* mallest*/
// var smallestNumber = Math.min(a, b, c, d);
// var smallestInteger = Math.min(a, b, c, Math.floor(d));
// console.log("Smallest Number: ", smallestNumber);
// console.log("Smallest Integer: ", smallestInteger);

// /* 4 Method*/
// var result1 = Math.floor(d);
// var result2 = Math.round(d);
// var result3 = Math.trunc(d);
// var result4 = parseInt(d);

// console.log("floor :" + result1, "round :" + result2, "trunc :" + result3, "parseInt :" + result4);


// // b+d == s "66.67" ,num=67//

// var sum = (b + d) / 3;
// var fs = (66.67).toFixed(2);
// var rsum = Math.round(sum);

// console.log("fstring: ", fs);
// console.log("rsum: ", rsum);


// // a+d == 10000//

// var summ = a * d * 41.6666667;
// console.log(Math.floor(summ));



// /*******************/
// /*******************/
// /*******************/



// var a = "hello from javascript";
// console.log(a.slice(6, 10));
// console.log(a.charAt(6) + a.charAt(7) + a.charAt(8) + a.charAt(9));



// // return array [hello] //
// console.log(a.split(" ", 1));

// //ssssss//
// console.log("s".repeat(8));

// console.log(a.substr(0, 5));


// // must be dynamic and string f and l capital //
// console.log(a.charAt(0).toUpperCase() + a.slice(1, length - 1).toLocaleLowerCase() + a.slice(1, length - 1).toLocaleUpperCase());
// session two
// session task
// task 1
let a = 10;
a < 10 ? console.log(10) :
    a >= 10 && a <= 40 ? console.log("10 to 40") :
        a > 40 ? console.log(">40") : console.log("unknown");


let text = "Your JavaScript";
text === "30" ? console.log("30") : null;


text[0] === "J" ? console.log("J") : null;


typeof text === "string" ? console.log("string") : null;


typeof a === "number" ? console.log("number") : null;


text.slice(0, 4).repeat(2) === "YourYour" ? console.log("your your") : null;


var degree = 65;
degree > 70 ? console.log("excellent") :
    degree > 50 && degree <= 70 ? console.log("good") : console.log("fail");
// task2
let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
myFriends.pop();
console.log(myFriends);


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr);


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().reverse().join("").slice(0, 3).toLowerCase();
console.log(allArrs);




let Zero = 0;
let counter = 3;
let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
let result1 = my.slice(Zero + 3, counter + 1).reverse();
console.log(result1);


let result2 = my.slice(counter - 1, Zero + 2);



let result3 = my[2].slice(Zero, counter - 1) + my[1].slice(counter - 2);
console.log(result3);
// task convert if to switch
let job = "Manager";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
}


/*************/
/*************/

let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}

// session 3
var friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';
for (i = 0; i < friends.length; i++) {
    if (friends[i][0] === letter.toUpperCase()) { continue; }
    console.log(i + "=>" + friends[i]);

}


let products = ["Product A", "Product B", "Product C", "Product D"];
let colors = ['red', 'green', 'blue'];
let models = ['2020', '2022'];

let productsSection = document.getElementById('products-section');


for (let i = 0; i < products.length; i++) {
    productsSection.innerHTML += `
      <div class="col-12">
        <div class="product-card">
          <h5>Type : ${products[i]} _</h5>
          <div class="separator"></div>
          <p class="colors">-Colors-</p>
          <p>${colors.join(' ')}</p>
          <p class="model">---model---</p>
          <p>${models.join('')}</p>
        </div>
      </div>
    `;
}




function generateYearOptions(startYear, lastYear) {
    const selectElement = document.createElement('select');

    for (let year = startYear; year <= lastYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        selectElement.appendChild(option);
    }

    return selectElement;
}
document.body.appendChild(generateYearOptions(2003, 2024));


// task 2 // 
let myArray = [1, 2, 3, 4, 5];

function printArrayData(array) {
    console.log('Data in array:', array);
}

printArrayData(myArray);