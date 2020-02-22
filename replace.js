var capital="Islamabad is the capital of Pakistan"
var replace=capital.replace("capital","CAP")
console.log(replace)
//to make a global replace
var name="My name is Khan"
var replace1=name.replace(/name/g, "NAAM")
console.log(replace1);
//without global it will only replace the first instance of the word
