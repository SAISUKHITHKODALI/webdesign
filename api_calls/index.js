
//promises 
// .then()
// async await..

//axios /fetch

const url = "https://restcountries.com/v2/all";
async function getALLCountriesFromApi() {
    const response = await fetch(url);

    const data = await response.json();

    //console.log(response);
    //console.log(data);
}

getALLCountriesFromApi();

const array = [0,1,2,3,4,5,6,7,8,9,10]

array.map((value) => {
console.log(value);
});


const data = [fetch(url)];

data.map((country_name) => {
console.log(country_name);
});