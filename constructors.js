//AN ARRAY OF OBJECTS

// var user1=[
// {
//     firstName: "Basharat",
//     lastName:"Ali",
//     age:19,
//     profession:["sleeping","eating","playing"]
// },
// {
//     firstName: "Bat",
//     lastName:"man",
//     age:19,
//     profession:["sleeping","eating","playing"]
// },
// ]

//console.log(user1[1].firstName);

//CONSTRUCTORS

function User(Name,age)
{
    this.Name=Name;
    this.age=age;

}
    
var newUser= new User("Basharat",19);
console.table(newUser);

//USE CONSOLE.TABLE TO PRINT IT LIKE A TABLE ACCORDING TO THE VALUES    
