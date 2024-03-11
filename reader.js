var fs = require("fs")

fs.readFile("abc.js", function(){})
setTimeout(function(){},5000)

 fs.readFile("notes1.txt", function(error,data){
    if(error){
        console.log("Error in file reading" , error)
    }
    else{
        console.log("File Reading done.........." ,data.toString())

    }
})


console.log("file read done")