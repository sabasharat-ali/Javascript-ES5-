//OBJECTS ARE USED TO DIRECTLY ACCESS THE VALUES STORED IN THE FORM OF A TABLE
var obj={
    name:"Basharat",
    DOB: "19-01-2000",
    marks: [20,80,90]
};
obj.marks.push(30)
console.log(obj.marks[3]);

//WE CAN PROVIDE AN ARRAY AS A VALUE AS WELL AND THEN CALL ITS VALUES SEPARATELY AS WELL WITHIN THE OBJECT


//TO DELETE A VALUE PAIR IN THE OBJECT
delete obj.name;
console.log(obj);

//TO CHECK IF A VALUE PAIR EXISTS IN THE OBJECT
var property_exists= "marks" in obj;
console.log(property_exists);