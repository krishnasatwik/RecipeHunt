import React from 'react'
import Button from "react-bootstrap/Button"
import { useState, useEffect } from 'react';

const RandomRecipes = () => {


    const randomRecipeAPI = "https://www.themealdb.com/api/json/v1/1/random.php";
    const [recipe, setRecipe] = useState([]);
    const [showDetails, setShowDetails] = useState(true);


    const getRandomRecipe = async () => {
        const response = await fetch(randomRecipeAPI);
        const data = await response.json();
        setRecipe(data.meals[0]);
        setShowDetails(false);
    }
    useEffect(() => {
        getRandomRecipe();

    }, []);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div>
            <h2 className='cnd' style={{ color: 'blue', textAlign: 'center' }}>Can't decide what to search for?</h2>

            <h1 style={{ color: '#6a11cb', fontSize: 60, textAlign: 'center' }}>Random Recipe</h1>

            {
                recipe && (
                    <div>
                        <h2 className='mealTitle' style={{ fontSize: '20px', color: 'blue' }}>{recipe.strMeal}</h2>
                        <img className='randomImg' src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '200px', borderRadius: '3px', border: '2px solid black' }} />


                        {showDetails && (
                            <div>
                                <h3 style={{ color: 'blue' }}>Ingredients</h3>
                                <>
                                    <ul>
                                        {Array.from({ length: 20 }, (_, index) => index + 1)
                                            .filter(index => recipe[`strIngredient${index}`])
                                            .map(index => (

                                                <li key={index} style={{ color: 'black' }}>
                                                    {recipe[`strIngredient${index}`]} - <span className='measure' style={{ color: '#6a11cb' }}>{recipe[`strMeasure${index}`]}</span>
                                                </li>
                                            ))}
                                    </ul>
                                    <h3 style={{ color: 'black' }}>Instructions</h3>
                                    <div className='instructions'>
                                        <p style={{ color: 'black' }}>{recipe.strInstructions}</p>
                                    </div>
                                </>
                            </div>

                        )}
                    </div>

                )
            }
            <div className='buttons'>
                <Button className='huntBtn text-light' onClick={toggleDetails}><strong>{showDetails ? 'Hide Details' : 'Show Details'}</strong></Button>
                <Button className='huntBtn text-light' onClick={getRandomRecipe} ><strong>Get new Recipe</strong></Button>
            </div>

        </div>
    )
}

export default RandomRecipes;