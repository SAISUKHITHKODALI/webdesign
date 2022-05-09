// NOTE:regular function
// setTimeout(() => {
//     timeOutDisplay();
// }, 3000)



let myPromiseObj = new Promise(function (myResolve, myReject){
    //production code - takes one time 
    setTimeout(() => {
        //calls to the consumer code
        myResolve('I Promised To Return')
    }, 3000)  
})

//must wait until promise is return - consuming code
myPromiseObj.then(
    function(value) {
    //what to do once promise is fullfilled - success goes here
    timeOutDisplay(value);
    },
    function(error){
    console.log(error);
    })



function timeOutDisplay(sameValue){
    document.getElementById('setTimeoutValue').innerHTML = 'sameValue'
}