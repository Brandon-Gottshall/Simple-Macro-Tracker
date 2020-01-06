let results = []
let cancel = 0
const fetchresults = async (query) => {
    let myHeaders = new Headers();
    myHeaders.append("x-app-id", "41b72372");
    myHeaders.append("x-app-key", "2ddc428e1eaa0c9ef7ca5484f8b075d9");

    let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}

    fetch(`https://api.nutritionix.com/v2/search?q=${query}&limit=2&offset=0`, requestOptions)
    .then(response => response.json())
    .then(result => results = result.results)
    .catch(error => console.log('error', error));

    // .then(res => res.json());
}
let searchBox = document.querySelector('#searchBox')
console.log(searchBox)

let getSearchBoxValue = function(){
    searchBoxValue = document.querySelector('#searchBox').value
    return searchBoxValue
}


searchBox.addEventListener('input', function() {
    query = getSearchBoxValue()
    if (query.length > 2 && cancel == 0) {
        setTimeout(function () {
            cancel = 0
        }, 3000);
        cancel = 1
        console.log(`ran with query: ${query}`)
        fetchresults(query)
        console.log(results)
        // results.forEach(element, function(){    })
        setTimeout(function () {
            cancel = 0
        }, 3000);
    }

})


//Powered by Nutritionix
//
//
// (2) [{…}, {…}]
// 0: {item_name: "Popcorn, Butter Toffee Almond Corn", brand_name: "The Popcorn Factory", thumbnail: "https://d1r9wva3zcpswd.cloudfront.net/54fb354cdf90fa361a6787f6.jpeg", nutrient_name: "Calories", nutrient_value: 120, …}
// 1: {item_name: "Popcorn, Butter Toffee with Sea Salt", brand_name: "The Popcorn Factory", thumbnail: "https://d1r9wva3zcpswd.cloudfront.net/5a38ba19bcd851733a2bfe05.jpeg", nutrient_name: "Calories", nutrient_value: 120, …}
// length: 2
// __proto__: Array(0)
