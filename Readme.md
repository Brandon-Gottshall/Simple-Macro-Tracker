# Project Overview

## Simple Macro Tracker
###### Brandon Gottshall

## Project Description

In this Application, the user will be able to quickly input items they eat during the day. The nutritionix API will pull nutrition facts for the item and create a display to show the user a simmple visual to track their Macros for the day.

## API

I will be utilizing the nutritionix API to grab nutrition results for the item added.

This is an Example of a search for almonds within the API.
## API Data Sample

```
https://api.nutritionix.com/v2/search?q=almonds&limit=10&offset=0

Returns

{
    "exact": false,
    "total": 6914,
    "status": 200,
    "results": [
        {
            "item_name": "Almonds",
            "brand_name": "Blue Diamond Almonds",
            "thumbnail": "https://d1r9wva3zcpswd.cloudfront.net/55be65a5314e839c2e85c489.jpeg",
            "nutrient_name": "Calories",
            "nutrient_value": 160,
            "nutrient_uom": "kcal",
            "serving_qty": 24,
            "serving_uom": "nuts",
            "resource_id": "8ONGs6KeK",
            "nutrients": null
        },
        {
            "item_name": "Almonds",
            "brand_name": "Blue Diamond Almonds",
            "thumbnail": "https://d1r9wva3zcpswd.cloudfront.net/58fda38095fcd6154b0a7a8c.jpeg",
            "nutrient_name": "Calories",
            "nutrient_value": 170,[]()
            "nutrient_uom": "kcal",
            "serving_qty": 28,
            "serving_uom": "nuts",
            "resource_id": "zrWgsbDBJ",
            "nutrients": null
        },
    ]
}
```


## Wireframes

![Wireframe](https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066513/WireFrame_dsepce.png)

This is the home screen where the user will search for the food and add it to the taily consumed.

![Wireframe](https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066513/WireFrame2_thiq9p.png)

This is the begining of the calculator. This will include below input fields for the user to put age, gender, and current weight.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Search for food item and add it to day.
- Input field for number of servings.
- Add together all macro nutrients for day and display them in goal bar.
- Add together all calories for day and display them in goal bar.
- Create a calculator to generate goals for user.

#### PostMVP 

- Log multiple days to allow user to store their own statistics over time.
- Show the user a dynamic graph based on their macro intakes.
- Add support for instant search from the Nutritionix API
- Drop down to select serving size.
- *Super Bonus* Create Barcode Scanner

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Proposal | *Complete*
|Jan 3rd| Functional search and append | Incomplete
|Jan 5th| Macros graph elements | Incomplete
|Jan 6th| Macro Goal Calculator | Incomplete
|Jan 7th| Create previous days and implement local storage | Incomplete
|Jan 8th| Styling | Incomplete
|Jan 9th| Present | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes
![Priority](https://res.cloudinary.com/dwtzncgxe/image/upload/v1578066444/Priority_koopf1.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Structure | H | 3hrs| 2hrs | 2hrs |
| Search function | H | 3hrs| 1hrs | 1hrs |
| Append Item and details | H | 4hrs| 9hrs | 9hrs |
| Create macro displays | M | 4hrs| 2hrs | 2hrs |
| Create Calculator | M | 5hrs| 0hrs | 0hrs |
| Implement Local Storage | L | 5hrs| <1hrs | <1hrs |
| Add previous days | L | 3hrs| 0hrs | 0hrs |
| Complete styling | L | 8hrs| 0hrs | 0hrs |
| Barcode scanner | L | 8hrs| 0hrs | 0hrs |
| Total | H | 43hrs| 0hrs | 0hrs |


## Code Snippet

```

```

## Change Log
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