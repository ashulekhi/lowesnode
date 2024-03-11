var user1 = {
    name:"Ashu Lekhi",
    exp:{
        years :7
    }
}

var user2 = {...user1}

user2.name = "lekhi sahab"

user2.exp.years = 10

console.log("user1" , user1)
console.log("user2" , user2)

var userdetails = JSON.stringify(user1)
var user5 =  JSON.parse(userdetails);

user5.exp.years = 11
console.log("user2" , user5)
