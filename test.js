"use strict"
var fs=require("fs")

process.nextTick(function(){
	console.log("nextTick callback function!")
})
console.log("nextTick was set!")
process.on("exit",function(code){
	console.log("about to exit with code:"+code)
})
//fs模块：读写文件
/*异步读文件*/
fs.readFile("test.txt","UTF-8",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log("异步读取文件："+data)
	}
})
/*同步读文件*/
try{
	var data=fs.readFileSync("test.txt","UTF-8")
	console.log("同步读取文件："+data)
}catch(err){
	console.log(err)
}
/*异步写文件*/
var txt="我是被写进的数据！"
fs.writeFile("test.txt",txt,function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log("ok")
		fs.readFile("test.txt","UTF-8",function(err,res){
			if(err){
				console.log(err)
			}else{
				console.log("写入完成："+res)
			}
		})
	}
	
})
