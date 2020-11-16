// All JS goes here...

'use strict'

console.log("javaJavaJava");

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;