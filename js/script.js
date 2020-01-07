let results = []
let cancel = 0
const fetchresults = async (query) => {
    let myHeaders = new Headers();
    myHeaders.append("x-app-id", "41b72372");
    myHeaders.append("x-app-key", "2ddc428e1eaa0c9ef7ca5484f8b075d9");


    let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}


        fetch(`https://api.nutritionix.com/v2/search?q=${query}*&limit=1&offset=0`, requestOptions)
        .then(response => response.json())
        .then(result => results = result.results)
        .catch(error => console.log('error', error))
    }
//     const fetchFat = async (query) => {
//         let myHeaders = new Headers();
//         myHeaders.append("x-app-id", "41b72372");
//         myHeaders.append("x-app-key", "2ddc428e1eaa0c9ef7ca5484f8b075d9");
//
//
//         let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}
//
//         console.log(nutrient);
//         nutrients.forEach((element, {
//
//             fetch(`https://api.nutritionix.com/v2/search?q=${query}*&limit=2&offset=0&search_nutrient=${nutrient}`, requestOptions)
//             .then(response => response.json())
//             .then(result => results = result.results})
//             .catch(error => console.log('error', error))
//         }
//     }
//     const fetchCarb = async (query) => {
//         let myHeaders = new Headers();
//         myHeaders.append("x-app-id", "41b72372");
//         myHeaders.append("x-app-key", "2ddc428e1eaa0c9ef7ca5484f8b075d9");
//
//
//         let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}
//
//         console.log(nutrient);
//         nutrients.forEach((element, {
//
//             fetch(`https://api.nutritionix.com/v2/search?q=${query}*&limit=2&offset=0&search_nutrient=${nutrient}`, requestOptions)
//             .then(response => response.json())
//             .then(result => results = result.results})
//             .catch(error => console.log('error', error))
//         }
//     }
//     const fetchProtein = async (query) => {
//         let myHeaders = new Headers();
//         myHeaders.append("x-app-id", "41b72372");
//         myHeaders.append("x-app-key", "2ddc428e1eaa0c9ef7ca5484f8b075d9");
//
//
//         let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}
//
//         console.log(nutrient);
//         nutrients.forEach((element, {
//
//             fetch(`https://api.nutritionix.com/v2/search?q=${query}*&limit=2&offset=0&search_nutrient=${nutrient}`, requestOptions)
//             .then(response => response.json())
//             .then(result => results = result.results})
//             .catch(error => console.log('error', error))
//         }
//     }
// let getMacros = query => {
//
// }
let searchBox = document.querySelector('#searchBox')

let getSearchBoxValue = function(){
    searchBoxValue = document.querySelector('#searchBox').value
    return searchBoxValue
}

searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('trigger')
    query = getSearchBoxValue()
    console.log(`ran with query: ${query}`)
    let fat = 'fat'
    let protein = 'protein'
    let carb = 'carb'
    fetchresults(query, fat)
    fetchresults(query, carb)
    fetchresults(query, protein)

    // let carb = fetchresults(query, 'carb')
    // let protein = fetchresults(query, 'protein')
    setTimeout(function() {
        console.log(results)

        // Creating Function to attach results as elements using DOM manipulation //
        results.forEach((element, i) => {
            result = document.createElement('div')
            result.classList.add('result')
            result.style.display = 'flex'
            result.style.alignItems = 'flex-start'
            result.style.borderRadius = '8px'
            result.style.backgroundColor = 'white'
            result.style.height = '120px'
            result.style.width = '506px'
            result.style.border = '6px gray solid'

                item = document.createElement('div')
                item.style.display = 'flex'
                item.style.flexWrap = 'wrap'
                item.style.justifyContent = 'center'
                item.style.height = '120px'
                item.style.width = '506'

                    left = document.createElement('div')
                    left.style.display = 'flex'
                    left.style.height = '100%'
                    left.style.width = '20%'
                    left.style.oveflow = 'none'

                        leftImg = document.createElement('img')
                        leftImg.style.display = 'flex'
                        leftImg.style.borderRadius = '10px'
                        leftImg.style.padding = '5px 0'
                        leftImg.style.width = '100px'
                        leftImg.style.height = '100px'
                        leftImg.src = element.thumbnail

                    left.append(leftImg)

                item.append(left)

                    right = document.createElement('div')
                    right.style.display = 'flex'
                    right.style.height = '100%'
                    right.style.width = '20%'
                    right.style.oveflow = 'none'

                        rightH2 = document.createElement('h2')
                        rightH2.style.margin = '0 auto 20px auto'
                        rightH2.innerHTML = element.item_name

                    right.append(rightH2)

                        rightH4 = document.createElement('h4')
                        rightH4.style.margin = '0 auto 20px auto'
                        rightH4.innerHTML = element.brand_name

                    right.append(rightH4)

                        rightList = document.createElement('ul')
                        rightList.style.display = 'flex'
                        rightList.style.alignItems = 'center'
                        rightList.style.listStyleType = 'none'

                            rightListItem = document.createElement('li')
                            rightListItem.style.width = '50px'
                            rightListItem.style.padding = '0 25px'
                            rightListItem.style.fontSize = '25px'
                            rightListItem.style.color = 'black'
                            rightListItem.innerHTML = `${element.nutrient_name}: ${element.nutrient_value}`
                            rightList.append(rightListItem)

                    right.append(rightList)
                item.append(right)
                item.addEventListener('mouseover', function(event) {
                    item.style.backgroundColor//finish this!!!!!!
                }, 1000)
            result.append(item)
        search = document.querySelector('#search')
        search.append(result)







        })
    }, 800)
})




//Powered by Nutritionix
//
//
// (2) [{…}, {…}]
// 0: {item_name: "Popcorn, Butter Toffee Almond Corn", brand_name: "The Popcorn Factory", thumbnail: "https://d1r9wva3zcpswd.cloudfront.net/54fb354cdf90fa361a6787f6.jpeg", nutrient_name: "Calories", nutrient_value: 120, …}
// 1: {item_name: "Popcorn, Butter Toffee with Sea Salt", brand_name: "The Popcorn Factory", thumbnail: "https://d1r9wva3zcpswd.cloudfront.net/5a38ba19bcd851733a2bfe05.jpeg", nutrient_name: "Calories", nutrient_value: 120, …}
// length: 2
// __proto__: Array(0)
