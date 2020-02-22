//ACCESSING CHILDS USING DOM

//THIS WILL ACCESS THE HEAD OF THE DOCUMENT
// var print=document.childNodes[0].childNodes[0].nodeType
// console.log(print)
//NODETYPE WILL TELL THE TYPE OF THE NODE

var data = document.getElementById("cal")
console.log(data.childNodes[1].childNodes[0]);
console.log(data.lastChild)

var head=document.getElementById("head")
console.log(head.childNodes[0])

//COUNTING THE ELEMENTS
var test=document.getElementsByTagName("li")
console.log(test.length)

//ADDING NODES ON RUNTIME
var a=document.createElement("h1");
var text=document.createTextNode("hello");
a.appendChild(text);
a.setAttribute("class", "big")
document.body.appendChild(a)
