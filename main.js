"use strict"
var greet=require("./hello");
var s="jay";
var name="sala"
greet.Hello(s);
greet.sayName(name);
if(typeof(window)=="undefined"){
	console.log("node.js")
}else{
	console.log("browser")
}
