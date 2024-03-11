var name 
class Userdetails{
    constructor(){
        console.log("An object is created into memory")
    }
   name  = "Ashu lekhi"
   id
   role
   phone
   email
}
var u1 = new Userdetails()
var u2 = u1 

var u3 = {}
u3 = u1.name
u3 = u1.id
u3 = u1.role
u3 = u1.phone
u3 = u1.email
var user4 = {...u1}

var user5 = new Userdetails()
var user6 = new Userdetails()

var user7  = {...user5 , ...user6}

var experience = ["java  ",".net"]

var newexpereince = ["react","node"]

var totalexp = [...experience , ...newexpereince]


