var fs = require("fs")
const EventEmitter  = require("events")


exports.utkarsh = function(filename){
    var emitter  =new EventEmitter()
    fs.writeFile(filename,"Some Random text", function(error){
        if(error){
            emitter.emit("ERROR")
        }
        else{
            emitter.emit("SUCCESS")
        }
})

return emitter
}

exports.shivani = function(filename,callback){
  fs.readFile(filename, function(error,data){
    if(error){
        callback(error,null)
    }
    else{
        callback(null,data.toString())
    }
  })
}

exports.neha = function(filename){
   return new Promise(function(resolve,reject ){
    fs.readFile(filename, function(error,data){
        if(error){
            reject(error)
        }
        else{
            resolve(data.toString())
        }
      })
   })
}