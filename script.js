
// chap_20


let firstNames = ["Lil", "Big"];
let lastNames = ["Zzz", "Boom"];
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}


console.log("Total runs:", 3 * 2);

// Skip if indexes are the same
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    if (i !== j) {
      console.log(firstNames[i] + " " + lastNames[j]);
    }
  }
}


// chap_21


let userInput = prompt("Enter some text:");
console.log(userInput.toLowerCase());

// Normalize city name
let city = prompt("Enter city:");
if (city.toUpperCase() === "KARACHI") {
  console.log("Welcome to Karachi");
} else {
  console.log("Unknown City");
}

// chap_22


console.log("JavaScriptRocks".slice(0, 5));


let text = prompt("Enter text:");
console.log(text.charAt(text.length - 1));

let fullName = prompt("Enter full name:");
console.log("Length of name: " + fullName.length);

// chap_23


console.log("The lazy dog sleeps.".indexOf("dog"));


let msg = prompt("Type a message:");
if (msg.indexOf("hello") !== -1) {
  console.log("Hello found!");
} else {
  console.log("Hello not found.");
}

// indexOf() returns -1 if not found


// chap _24

// Character at position 4
console.log("JavaScript".charAt(4));


let str = prompt("Enter a word:");
let pos = parseInt(prompt("Enter position:"));
console.log(str.charAt(pos));


// chap_25


console.log("This is a bad example.".replace("bad", "good"));


console.log("I like JS. JS is great.".replaceAll("JS", "JavaScript"));


let name = "Ali";
console.log("Hello, NAME".replace("NAME", name));


// chap _26


console.log(Math.round(2.6));  
console.log(Math.floor(2.6));  
console.log(Math.ceil(2.6));   


let num = parseFloat(prompt("Enter a number:"));
console.log(Math.round(num));


console.log(Math.floor(-2.9)); 
console.log(Math.ceil(-2.9));  

// chap_27


console.log(Math.floor(Math.random() * 6) + 1);

console.log(Math.random() < 0.5 ? "Heads" : "Tails");


console.log(Math.floor(Math.random() * 9000) + 1000);

// chap_28


console.log(parseFloat("45.67"));


console.log(parseInt("123px"));  


console.log(parseInt("abc"));    


// chap_29


let num2 = 123;
console.log(typeof num2.toString());  


console.log(Number("2025") + 10);


console.log(parseInt("45px")); 
console.log(Number("45px"));   


// chap_30


console.log(123.45678.toFixed(2));  


console.log(parseFloat("12.999").toFixed(1));  


let decimal = parseFloat(prompt("Enter a decimal:"));
console.log(decimal.toFixed(3));


// chap_31

console.log(new Date());


console.log(new Date().getFullYear());


let h = new Date().getHours();
console.log(h < 12 ? "Good Morning" : "Good Evening");

// chap_32


let today = new Date();
console.log("Day: " + today.getDate());
console.log("Month: " + (today.getMonth() + 1));
console.log("Year: " + today.getFullYear());


let now = new Date();
console.log("Hours: " + now.getHours());
console.log("Minutes: " + now.getMinutes());


let hr = now.getHours();
let min = now.getMinutes();
console.log(hr + ":" + (min < 10 ? "0" + min : min));



