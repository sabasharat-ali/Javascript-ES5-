function check()
{
//     var data = document.getElementById("text").value ;
//     console.log(data)
//     if (data==="")
//    {

//    console.log("Please enter your name")
//    }
//    else
//    {
//        console.log(data);
//        data="";
//    }
var zip=document.getElementById("zip").value;
var city
switch (zip) {
    case "75300":
        city="karachi";
        break;
    case"87300":
        city="quetta"
        break;
   
}
}
document.getElementById("city").innerHTML=city

