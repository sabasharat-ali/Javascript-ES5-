// var collection=document.getElementsByTagName("p")

// var get=collection[1].innerHTML;
// console.log(get);

// for(var index=0;index<collection.length;index++)
// {
//     collection[index].style.color="grey";
// }

//TO TARGET SPECIFIC TAGS ONLY

var spec=document.getElementById("division")
var specific=spec.getElementsByTagName("p")
for(var i=0;i<specific.length;i++)
{
    console.log(specific[i].innerHTML);
}