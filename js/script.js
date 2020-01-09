let results = []
let cancel = 0

// var rates = document.getElementById('rates').value;

// if (document.getElementById('r1').checked) {
//   rate_value = document.getElementById('r1').value;
// }
let bmr = 0
let height = 0
let weight = 0
let age = 0
let gender = 0
let exerciseLevel = 0
let weightGoal= 0
let calGoalHolder = 0
let carbGoalHolder = 0
let fatGoalHolder = 0
let proGoalHolder = 0

const setGoals = () => {
    let submit = document.querySelector('.submit')
    submit.addEventListener('click', calculate)
}

const calculate = function(event) {
    event.preventDefault()
    height = document.querySelector('#height').value
    console.log(height);
    weight = document.querySelector('#weight').value
    console.log(weight);
    age = document.querySelector('#age').value
    console.log(age);
    gender = document.querySelectorAll('.gender')
    gender.forEach(element => {(element.checked == true ? gender = element.value : null)})
    console.log(gender);
    let weightGoal = document.querySelectorAll('.weightGoal')
    weightGoal.forEach(element => {(element.checked == true ? weightGoal = element.value : null)})
    exerciseLevel = document.querySelectorAll('.exercise')
    exerciseLevel.forEach(element => {(element.checked == true ? exerciseLevel = element.value : null)})
    // exerciseLevel = parseInt(exerciseLevel)
    console.log(exerciseLevel);
    switch (gender) {
        case 'male':
            weight *= 6.3
            console.log(weight);
            height *= 12.9
            console.log(height);
            age *= 6.8
            console.log(age);
            bmr = 66 + weight + height - age + weightGoal
            console.log(bmr);
            bmr = bmr * exerciseLevel
            console.log(bmr);
            calGoalHolder = bmr
            carbGoalHolder = bmr * 0.53
            fatGoalHolder = bmr * 0.25
            proGoalHolder = bmr * 0.22
            break;
        case 'female':
            weight *= 4.3
            console.log(weight);
            height *= 4.7
            console.log(height);
            age *= 4.7
            console.log(age);
            bmr = 655 + weight + height - age + weightGoal
            console.log(bmr);
            bmr = bmr * exerciseLevel
            console.log(bmr);
            calGoalHolder = bmr
            carbGoalHolder = bmr * 0.53
            fatGoalHolder = bmr * 0.25
            proGoalHolder = bmr * 0.22
            break;
        case 'other':
            weight *= 4.3
            console.log(weight);
            height *= 4.7
            console.log(height);
            age *= 4.7
            console.log(age);
            bmr = 655 + weight + height - age + weightGoal
            console.log(bmr);
            bmr = bmr * exerciseLevel
            console.log(bmr);
            calGoalHolder = bmr
            carbGoalHolder = bmr * 0.53
            fatGoalHolder = bmr * 0.25
            proGoalHolder = bmr * 0.22
            break;
    }
    console.log(bmr)
    macroCount()
}
setGoals()

const macroCount = function() {
    let calories = 0
    let carbs = 0
    let fat = 0
    let protein = 0
    document.querySelectorAll('.calories').forEach(element => calories += parseInt(element.innerHTML))
    document.querySelectorAll('.fat').forEach(element => fat += parseInt(element.innerHTML))
    document.querySelectorAll('.carbs').forEach(element => carbs += parseInt(element.innerHTML))
    document.querySelectorAll('.protein').forEach(element => protein += parseInt(element.innerHTML))

    calProgress = document.querySelector('#calPercent')
    calGoal = document.querySelector('#calGoal')
    calGoal.innerHTML = Math.round(calGoalHolder)
    calPr = (calories / calGoal.innerHTML) * 100
    calProgress.style.width = `${calPr}%`
    calProgress.innerHTML = calories

    fatProgress = document.querySelector('#fatPercent')
    fatGoal = document.querySelector('#fatGoal')
    fatGoal.innerHTML = Math.round(fatGoalHolder)
    fatPr = (fat / fatGoal.innerHTML) * 100
    fatProgress.style.width = `${fatPr}%`
    fatProgress.innerHTML = fat

    carbProgress = document.querySelector('#carbPercent')
    carbGoal = document.querySelector('#carbGoal')
    carbGoal.innerHTML = Math.round(carbGoalHolder)
    carbPr = (carbs / carbGoal.innerHTML) * 100
    carbProgress.style.width = `${carbPr}%`
    carbProgress.innerHTML = carbs

    proProgress = document.querySelector('#proPercent')
    proGoal = document.querySelector('#proGoal')
    proGoal.innerHTML = Math.round(proGoalHolder)
    proPr = (protein / proGoal.innerHTML) * 100
    proProgress.style.width = `${proPr}%`
    proProgress.innerHTML = protein

    console.log(calories);
    console.log(carbs);
    console.log(fat);
    console.log(protein);
}

const local = () => {
    if (localStorage.getItem('today') != null) {
        today = document.querySelector('#today')
        today.innerHTML = localStorage.getItem('today')
        macroCount()
    }
    if (localStorage.getItem('goals') != null) {
        
    }
}
local()



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
    .then(result => {
        nutrition = result.nutrition
        console.log(result);
        })
    .catch(error => console.log('error', error))
    }

let clearResults = () => {
    searchItems = document.querySelector('#search')
    searchItems.innerHTML = ''
}


searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    clearResults()
    console.log('trigger')
    query = getSearchBoxValue()
    console.log(`ran with query: ${query}`)
    fetchresults(query)
    let nutritionHolder = []
    let todayTotals = []

    setTimeout(function() {
        console.log(results)
        results.products.forEach((element, i) => {
            console.log(element);
            fetchId(element.id)

            setTimeout(function() {
                nutritionHolder[i] = nutrition


                result = document.createElement('div')
                result.classList.add('result')
                result.style.display = 'flex'
                result.style.alignItems = 'center'
                result.style.borderRadius = '8px'
                result.style.backgroundColor = 'white'
                result.style.height = '120px'
                result.style.width = '95%'
                result.style.border = '6px gray solid'

                item = document.createElement('div')
                item.style.display = 'flex'
                item.style.flexWrap = 'wrap'
                item.style.justifyContent = 'flex-start'
                item.style.height = '120px'
                item.style.width = '100%'

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
                leftImg.src = element.image

                left.append(leftImg)

                item.append(left)

                right = document.createElement('div')
                right.style.display = 'flex'
                right.style.height = '100%'
                right.style.width = '20%'
                right.style.oveflow = 'none'

                title = document.createElement('p')
                title.style.margin = '0 auto 20px auto'
                length = 20
                trimmedTitle = element.title.substring(0, length);
                title.innerHTML = trimmedTitle


                right.append(title)

                rightList = document.createElement('ul')
                rightList.style.display = 'flex'
                rightList.style.alignItems = 'center'
                rightList.style.listStyleType = 'none'
                
                servingSize = document.createElement('p')
                servingSize.display.style = 'flex'
                servingSize.classList.add = 'servingSize'
                
                
                servingInput = document.createElement('input')
                
                
*/ for remove item
                rightQuit = document.createElement('div')
                    // !!!    !!!    !!!    !!!  //
                    // Create global decleration //
                rightQuit.style.height = '10px'
                rightQuit.style.width = '10px'
                rightQuit.style.borderRadius = '5px'
                    // May work better at 10px //
                rightQuit.
*/
                

                Object.entries(nutrition).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`)
                    rightListItem = document.createElement('li')
                    rightListItem.style.width = '25px'
                    rightListItem.style.padding = '0 25px'
                    rightListItem.style.fontSize = '25px'
                    rightListItem.style.color = 'black'
                    rightListItem.innerHTML = `<p>${key}</p> <p class=${key}>${value}`
                    rightList.append(rightListItem)
                })

                right.append(rightList)
                item.append(right)
                // item.addEventListener('mouseover', function(event) {
                //     item.style.backgroundColor = 'gray'
                // })
                result.append(item)
                result.addEventListener('click', function(event) {
                    today = document.querySelector('#today')
                    search = document.querySelector('#search')
                    search.innerHTML = ''
                    this.classList.add('todayItems')
                    today = document.querySelector('#today')
                    todayTotals.push(nutritionHolder[i])
                    today.append(this)
                    localStorage.setItem('today', today.innerHTML)
                    macroCount()
                })
                search = document.querySelector('#search')
                search.append(result)


                Object.entries(nutrition).forEach(([key, value]) => {
                    console.log(`${key}: ${value}`)
                })
                i++
            }, 1000);
            })
    }, 1000);
})
