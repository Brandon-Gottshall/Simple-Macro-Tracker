<h1 align='center'>Simple Macro Tracker</h1>
<h2 align='center'>Project Overview</h2>
<p align='center'> Brandon Gottshall </p>
<br>
<p align='center'> <a href="https://pages.git.generalassemb.ly/koden11/Simple-Macro-Tracker/">My site</a> </p>

<h3 align='center'>Project Description</h3>

In this Application, the user will be able to quickly input items they eat during the day. The nutritionix API will pull nutrition facts for the item and create a display to show the user a simmple visual to track their Macros for the day.

<h3 align='center'>API</h3>

I will be utilizing the nutritionix API to grab nutrition results for the item added.

This is an Example of a search for almonds within the API.
<h3 align='center'>API Data Sample</h3>


```
https://api.spoonacular.com/food/products/search?query=steak&offset=0&number=2&apiKey=${myKey}
```	



<h3 align='center'>Wireframes</h3>

<p align="center">
  <img src="https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066513/WireFrame_dsepce.png">
</p>
<p align="center">
  This is the home screen where the user will search for the food and add it to the total consumed.
</p>

<p align="center">
  <img src="https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066513/WireFrame2_thiq9p.png">
</p>
<p align="center">
This is the begining of the calculator. This will include below input fields for the user to put age, gender, and current weight.
</p>


<h3 align='center'>MVP/PostMVP</h3>

#### MVP 

- Search for food item and add it to day.
- Add together all macro nutrients for day and display them in goal bar.
- Add together all calories for day and display them in goal bar.
- Create a calculator to generate goals for user.

#### PostMVP 

- Log multiple days to allow user to store their own statistics over time.
- Show the user a dynamic graph based on their macro intakes.
- Input field for number of servings.
- Add support for instant search from the Nutritionix API
- Drop down to select serving size.
- *Super Bonus* Create Barcode Scanner

<h3 align='center'>Project Schedule</h3>

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Proposal | *Complete*
|Jan 3rd| Functional search and append | *Complete*
|Jan 5th| Macros graph elements | *Complete*
|Jan 6th| Macro Goal Calculator | *Complete*
|Jan 7th| Implement local storage & Styling | *Complete*
|Jan 8th| Post-MVP | Partial
|Jan 9th| Present | Incomplete

### Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes
![Priority](https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066444/Priority_koopf1.png)

### Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Structure | H | 3hrs| 4hrs | 4hrs |
| Search function | H | 3hrs| 10hrs | 10hrs |
| Append Item and details | H | 4hrs| 9hrs | 9hrs |
| Create macro displays | M | 4hrs| 10hrs | 10hrs |
| Create Calculator | M | 5hrs| 4hrs | 4hrs |
| Implement Local Storage | L | 5hrs| <1hrs | <1hrs |
| Add previous days | L | 3hrs| 0hrs | 0hrs |
| Complete styling | L | 8hrs| 2hrs | 2hrs |
| Barcode scanner | L | 8hrs| 0hrs | 0hrs |
| Total | H | 43hrs| 40hrs | 40hrs |


<h3 align='center'>Code Snippet</h3>

This function is used to parse the user inputs into the goal calculator and turn it into macro tracking goodness.

```
const calculate = event => {
    event.preventDefault()

    height = document.querySelector('#height').value
    weight = document.querySelector('#weight').value
    age = document.querySelector('#age').value

    gender = document.querySelectorAll('.gender')
    gender.forEach(element => {(element.checked == true ? gender = element.value : null)})

    weightGoal = document.querySelectorAll('.weightGoal')
    weightGoal.forEach(element => {(element.checked == true ? weightGoal = element.value : null)})

    exerciseLevel = document.querySelectorAll('.exercise')
    exerciseLevel.forEach(element => {(element.checked == true ? exerciseLevel = element.value : null)})

    switch (gender) {
        case 'male':
            weight *= 6.3
            height *= 12.9
            age *= 6.8
            bmr = (66 + weight + height - age + weightGoal) * exerciseLevel
            break
        case 'female':
            weight *= 4.3
            height *= 4.7
            age *= 4.7
            bmr = (655 + weight + height - age + weightGoal) * exerciseLevel
            break
        case 'other':
            weight *= 4.3
            height *= 4.7
            age *= 4.7
            bmr = (655 + weight + height - age + weightGoal) * exerciseLevel
            break
    }
    calGoalHolder = bmr
    carbGoalHolder = bmr * 0.53
    fatGoalHolder = bmr * 0.25
    proGoalHolder = bmr * 0.22
    macroCount()
}
```

<h3 align='center'>Change Log</h3>
**1/6/2020** Due to limitations in Nutrinix API. I am going to use an alternative API called Spoonacular. This API will allow me to call objects in a similar way but will include information I need to make my application achieve MVP.

Here is a sample call and response @ the new API.
```
https://api.spoonacular.com/food/products/search?query=steak&offset=0&number=2&apiKey=${myKey}
```	

```
{
    "type": "product",
    "products": [
        {
            "id": 55684,
            "title": "Steak Umm Steaks",
            "image": "https://spoonacular.com/productImages/55684-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 20411,
            "title": "Steak Umm Sliced Steaks",
            "image": "https://spoonacular.com/productImages/20411-312x231.jpg",
            "imageType": "jpg"
        }
    ],
    "offset": 0,
    "number": 2,
    "totalProducts": 640,
    "processingTimeMs": 8,
    "expires": 1578627168667
}
```

To grab nutrients we will use
```
https://api.spoonacular.com/food/products/55684?apiKey=95164448654e40088ff85aef9c22286c
```

*This will return a title to apend*

```
"title": "Steak Umm Steaks"
```

*and object.nutrition*

```
"nutrition": {
        "calories": 100.0,
        "fat": "9g",
        "protein": "5g",
        "carbs": "0g"
    }
```