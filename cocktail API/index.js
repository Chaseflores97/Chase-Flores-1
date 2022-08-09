let API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const getRandomCocktails = function () {

    fetch(API_URL).then((responseObject) => {

        console.log('Response From Server', responseObject);
        responseObject.json().then((responseObjectAsJson) => {



            displayRandomCocktail(responseObjectAsJson);


        })
    })
}
getRandomCocktails(API_URL);

function displayRandomCocktail(cocktail) {
    const drink = cocktail.drinks[0];

    let ingredientStr = '';
    for (let i = 1; i < 16; i++) {

        if (drink['strIngredient' + i] !== null) {



            ingredientStr += drink['strIngredient' + i] + ', ';
        }

    }

    let measureStr = "";
    for (let j = 1; j < 16; j++) {

        if (drink['strMeasure' + j] !== null) {

            measureStr += drink['strMeasure' + j] + ', ';
        }





    }



    let htmlTable = '';

    htmlTable += `
    <tr>
        <td>${drink.strDrink}</td>
        <td>${ingredientStr}</td>
        <td>${drink.strInstructions}</td>
        <td>${measureStr}</td>
        <td>${drink.strGlass}</td> 

        
        
        
     

        
    </tr>
`;
    document.getElementById("cocktailTbody").innerHTML = htmlTable;




};