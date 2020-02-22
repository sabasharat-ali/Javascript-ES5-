function add()
{
    // document.getElementById("para").className +=" big"
    //TO DIRECTLY APPLY STYLING
    document.getElementById("para").style.fontSize="80px"
    document.getElementById("para").style.backgroundColor="grey"
    //IF YOU APPLY IN LINE MARGINS IT WILL NOT APPLY IT ON THE WEB PAGE SO YOU HAVE TPO GIVE IT IN THE GIVEN WAY
    var element=document.getElementById("para");
    var margin=window.getComputedStyle(element).margin;
    console.log(margin);


}