// var currentDay=new Date(currentDay.getDay.toDateString());

// var year=currentDay.getFullYear();
// var day=currentDay.getDay().toDateString();
// var month=currentDay.getMonth();

// console.log(currentDay)

// console.log(new Date(currentDay.setFullYear(2006)).toDateString());


//TASK 8
/*function pop(value)
{
    var array=value.pop();
    
    console.log(value)

}

pop([2,4,5,6,76,7])*/

// TASK 9
function check(value)
{
    var print = typeof(value)
    if(print==="string")
    {
        console.log("Welcome " +value)
    }
    else if(print==="number")
    {
        var multiply=(value^2);
        console.log(multiply)
    }

}
check(3);

//  var userInput=prompt("Write the value");
// var randomNumber=999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
// if(userInput<randomNumber)
// {
//     var newValue=parseInt(userInput)
//     check(newValue);
// }
// else
// {
//     var newValue=userInput.toString();
//     check(newValue)
// }

// TASK 5

function name(value)
{
    console.log("Mr "+ value)
}
name("Basharat")

// TASK 10

/*function multiply(value)
{
    for(var i=0;i<array.length;i++)
    {
         array[i]=array[i]*2;
    }
    console.log(array);

    
}

var array=[2,4,6,8];
multiply(array);

// TASK 11

function generateId()
{
    var random=Math.random();
    random=random*1000;
    console.log(random);
}

var id=generateId();

// TASK 12

function count(value)
{
    var noOfChar=value.length;
    console.log(noOfChar);
}

count("we lack brotherhood");

// TASK 13

function upperCase(value)
{
   value= value.toUpperCase();
    console.log(value);
}

upperCase("beautiful")

// TASK 14

function ascendingOrder(value)
{
   
    for (var i = 0; i < arr.length; i++)
       
    {
        var min = i;
        for (var j = i + 1; j < arr.length; j++)
        {
            if (arr[min] > arr[j])
            {
                min = j;
            }
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    for (var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}

var arr=[4,9,45,23,12,5]
ascendingOrder(arr)

// var d= new Date();
// var d=d.toString();
// d=d.slice(0,16)
// console.log(d)*/

var input="whoisyourdaddy@gmail.com";
var check=false;
for(var i=0;i<input.length;i++)
{
    if(input.slice(i,i+10)==="@gmail.com")
    {
       check=true;
        break;
    }
   
}
if(check===true)
{
    console.log("Email is valid");
}
else
{
    console.log("Email isnt valid")
}
function showMessage(m, string, num)
{
 console.log(m + string + num);
 }
 var month = "March";
 showMessage(23,month, "'s winner number is ");
