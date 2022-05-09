//. Calculate the sum of array of numbers : nums  = [10 , 40, 50 , 60] using reduce() method.

let nums = [10,40,50,60];
let sum = nums.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

document.getElementById('hi').innerHTML += sum

/*2.	Create an array of objects as below :
a.     iterate through the object, 
b.	display the name of the people on the UI(index.html),
c.	whose age is less than or equal to 25.*/

let object = [
{
Id: 1,
Name: "John",
Age: 25
},
{
Id: 2,
Name: "Sam",
Age: 28
},
{
Id: 3,
Name: "Sara",
Age: 23
}
]
/*for(let i=0;i<=3;i++){
    document.getElementById('hi3').innerHTML += "<ul>"+ object[i].Name + "</ul>"
    if(object[i].Age <= 25){
        document.getElementById('hi4').innerHTML += "<ul>"+ object[i].Name + "</ul>"
    } 
}*/

//3.	Traverse this array of numbers : nums  = [10 , 40, 50 , 60], transform this array, multiply each element with 3. So output : [30 , 120, 150 , 180],  use arrap.map() method.
nums = [10,40,50,60]
new1 = nums.map(x => x*3)
document.getElementById('pr3').innerHTML += new1

//4.	Traverse this array of numbers : nums  = [10 , 40, 50 , 60, 5, 23, 24], create new array of elements, where each array element when divided by 2, yields remainder 0.
var num = [10 , 40, 50 , 60, 5, 23, 24];
const mod = num.filter(myFunction);

document.getElementById("pr4").innerHTML = mod;

function myFunction(value, index, array) {
    if(value/2==0){
        return value
    }
}

/*5.	Using setTimeout(), Print values from 1 to 5, where each element need to be display after 2 seconds of delay.
Output: 
1 *(after 2 seconds)*
2 *(after 2 seconds)*
3 *(after 2 seconds)*
4 *(after 2 seconds)*
5 *(after 2 seconds)* */ 

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            document.getElementById('pr5').innerHTML += "<ol>" + i + "</ol>"
        }, i*2000)
    }
}
x();
