const Express = require("express")
const fs = require("fs")

const app = Express()

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