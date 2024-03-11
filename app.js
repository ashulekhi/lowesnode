const Express = require("express")
const fs = require("fs")
const Resources = require("./resoiurces")

const app = Express()

app.get("/neahreadfile", function(req,res){
   Resources.neha("notes.txt").then(function(){}, function(){})
})

app.get("/readfile", function(req,res){
    Resources.shivani()
    res.send()
    Resources.shivani("notes.txt", function(error,data){
        if(error){
            res.status(500).send()
        }
        else{
            res.send({
                data:data
            })
        }
    })
})

// app.methodname()
app.get("/rs", function(req,res){
    fs.readFile("notes.txt", function(error,data){
        if(error){
            res.status(500).send()
        }
        else{
            var notes = data.toString()
            res.send({
                data:notes
            })
        }
    })
})

app.get("/", function(request , response){
    console.log("request details will be in first object" )
    response.send({
        message:"SUCCESS"
    })
})
app.listen(5000,function(){
    console.log("Server is running....")
})