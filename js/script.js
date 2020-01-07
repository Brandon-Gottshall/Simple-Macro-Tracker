let results = []
let cancel = 0

const fetchresults = async (query) => {
    let myHeaders = new Headers();

    let requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'}


        fetch(`https://api.spoonacular.com/food/products/search?query=${query}&offset=0&number=2&apiKey=95164448654e40088ff85aef9c22286c`, requestOptions)
        .then(response => response.json())
        .then(result => results = result)
        .catch(error => console.log('error', error))
    }

let searchBox = document.querySelector('#searchBox')

let getSearchBoxValue = function(){
    searchBoxValue = document.querySelector('#searchBox').value
    return searchBoxValue
}

let nutrition = ''
let fetchId = function(id) {
    fetch(`https://api.spoonacular.com/food/products/${id}?apiKey=95164448654e40088ff85aef9c22286c`)
    .then(response => response.json())
    .then(result => nutrition = result.nutrition)
    .catch(error => console.log('error', error))
    }

searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('trigger')
    query = getSearchBoxValue()
    console.log(`ran with query: ${query}`)
    fetchresults(query)

    setTimeout(function() {
        console.log(results)
        product = results.products[0].id
        console.log(product);
        fetchId(product)

        setTimeout(function() {
            console.log(nutrition);

            }, 3000);
        }, 1000);
    })
        // products.forEach((element, i) => {
        //     console.log(element.id)

        // nutrition = element.nutrition
        // nutrition.forEach((element, i) => {
            //     console.log(element);
            // })



    // result = document.createElement('div')
    // result.classList.add('result')
    // result.style.display = 'flex'
    // result.style.alignItems = 'flex-start'
    // result.style.borderRadius = '8px'
    // result.style.backgroundColor = 'white'
    // result.style.height = '120px'
    // result.style.width = '506px'
    // result.style.border = '6px gray solid'
    //
    //     item = document.createElement('div')
    //     item.style.display = 'flex'
    //     item.style.flexWrap = 'wrap'
    //     item.style.justifyContent = 'center'
    //     item.style.height = '120px'
    //     item.style.width = '506'
    //
    //         left = document.createElement('div')
    //         left.style.display = 'flex'
    //         left.style.height = '100%'
    //         left.style.width = '20%'
    //         left.style.oveflow = 'none'
    //
    //             leftImg = document.createElement('img')
    //             leftImg.style.display = 'flex'
    //             leftImg.style.borderRadius = '10px'
    //             leftImg.style.padding = '5px 0'
    //             leftImg.style.width = '100px'
    //             leftImg.style.height = '100px'
    //             // leftImg.src = element.thumbnail
    //
    //         left.append(leftImg)
    //
    //     item.append(left)
    //
    //         right = document.createElement('div')
    //         right.style.display = 'flex'
    //         right.style.height = '100%'
    //         right.style.width = '20%'
    //         right.style.oveflow = 'none'
    //
    //             rightH2 = document.createElement('h2')
    //             rightH2.style.margin = '0 auto 20px auto'
    //             rightH2.innerHTML = element.item_name
    //
    //         right.append(rightH2)
    //
    //             rightH4 = document.createElement('h4')
    //             rightH4.style.margin = '0 auto 20px auto'
    //             rightH4.innerHTML = element.brand_name
    //
    //         right.append(rightH4)
    //
    //             rightList = document.createElement('ul')
    //             rightList.style.display = 'flex'
    //             rightList.style.alignItems = 'center'
    //             rightList.style.listStyleType = 'none'
    //
    //                 element.nutrition.forEach((element, i) => {
        //                     rightListItem = document.createElement('li')
        //                     rightListItem.style.width = '50px'
        //                     rightListItem.style.padding = '0 25px'
        //                     rightListItem.style.fontSize = '25px'
        //                     rightListItem.style.color = 'black'
        //                     switch (i) {
            //                         case 0:
            //                             rightListItem.innerHTML = `Calories: ${element.calories}`
            //                             break;
            //                         case 1:
            //                             rightListItem.innerHTML = `Fat: ${element.fat}`
            //                             break;
            //                         case 2:
            //                             rightListItem.innerHTML = `Protein: ${element.protein}`
            //                             break;
            //                         case 3:
            //                             rightListItem.innerHTML = `Carbss: ${element.carbs}`
            //                             break;
            //                     }
            //                     rightList.append(rightListItem)
            //                 })
            //
            //         right.append(rightList)
            //     item.append(right)
            //     item.addEventListener('mouseover', function(event) {
                //             item.style.backgroundColor//finish this!!!!!!
                //         }, 1000)
                //     result.append(item)
                // search = document.querySelector('#search')
                // search.append(result)
                // })
