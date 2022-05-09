// promisifying


let promiseObj = new Promise((resolve,reject) => {

    // production code - takes same time....10sec...

    // consumers called
    resolve('HELLO....');   //fullfilled promise state

    // rejected
    reject('ERROR');
})

// promiseObj.then(function(value) {
//     console.log('success response: ', value)
// }, function(error) {
//     console.log(error);
// })


promiseObj.then(
    //success call
    value => {
        console.log('success response: ', value)
        displayMessage();
    }
    
    //error call
    error =>  console.log(error)
)

function displayMessage(value) {
    console.log('arranged the party:', value)
}


