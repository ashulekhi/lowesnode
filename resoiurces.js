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