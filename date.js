var currentDate=new Date();
console.log(currentDate);


console.log(currentDate.getFullYear());

console.log(new Date().getTime());

var todayDay= new Date().getDay();
console.log(todayDay);

//to set a date or time (defined format)
var saleFinishDate=new Date("January 1,2020 12:00:00")
console.log(saleFinishDate.getDay());
console.log(saleFinishDate.getSeconds());

saleFinishDate.setFullYear(2030,0,12); //setting specific date/year/day/seconds
console.log(saleFinishDate)