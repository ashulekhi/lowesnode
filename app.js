const Express = require("express")
const fs = require("fs")
const Resources = require("./resoiurces")

const app = Express()

app.get("/writefile", function(req,res){
    Resources.utkarsh("demofile.txt")
    .on("SUCCESS", function(data){
        res.send({
            data:data || "File Created"
        })
    })
    .on("ERROR", function(){
    res.status(500).send()

    })
})

app.get("/neahreadfile", function(req,res){
   Resources.neha("notes.txt").then(function(data){
    res.send({
        data:data
    })
   }, function(error){
    res.status(500).send()

   })
})

app.get("/readfile", function(req,res){
    
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




app.get("/", function(request , response){
    console.log("request details will be in first object" )
    response.send({
        message:"SUCCESS"
    })
})
app.listen(5000,function(){
    console.log("Server is running....")
})