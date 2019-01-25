"use strict"

var s="Hello";

function Hello(name){
	console.log(s+","+name)
}
function sayName(name){
	console.log("My name is "+name+"!")
}
module.exports={
	Hello:Hello,
	sayName:sayName
};
