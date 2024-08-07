import React from 'react'
import { useState } from 'react';
import './recipes.css'
import FilteredRecipeDetails from './FilteredRecipeDetails';

const FilterRecipes = () => {

    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [area, setArea] = useState('');
    const [showRecipe, setShowRecipe] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const filterByArea = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        const data = await response.json();

        if (data.meals) {
            setFilteredRecipes(data.meals);
        }
    }



    const handleResultClick = async (recipe) => {

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
        const data = await response.json();

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = data.meals[0][`strIngredient${i}`];
            const measure = data.meals[0][`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(`${ingredient} - ${measure}`);
            }
        }

        setSelectedRecipe({
            ...recipe,
            ingredients: ingredients,
            instructions: data.meals[0].strInstructions
        });

        setShowRecipe(true);
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null);
        setShowRecipe(false);
    };

    return (
        <div style={{
            padding: '10px'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <h1 style={{ color: '#6a11cb', fontSize: 40, textAlign: 'left' }}>Cuisines: </h1>
                <div className='filter-area' style={{
                    margin: '10px'
                }}>
                    <label>

                        <select value={area} onChange={(e) => setArea(e.target.value)} style={{
                            border: '1.5px solid black',
                            width: '400px',
                            padding: '9px',
                            borderRadius: '20px'
                        }}>
                            <option value="">Select Area</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Dutch">Dutch</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Filipino">Filipino</option>
                            <option value="French">French</option>
                            <option value="Greek">Greek</option>
                            <option value="Indian">Indian</option>
                            <option value="Irish">Irish</option>
                            <option value="Italian">Italian</option>
                            <option value="Jamaican">Jamaican</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Kenyan">Kenyan</option>
                            <option value="Malaysian">Malaysian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Moroccan">Moroccan</option>
                            <option value="Polish">Polish</option>
                            <option value="Russian">Russian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Thai">Thai</option>
                            <option value="Tunisian">Tunisian</option>'
                            <option value="Turkish">Turkish</option>
                        </select>
                    </label>
                    <img className='search-icon' src='https://img.icons8.com/?size=100&id=7695&format=png' alt='' onClick={filterByArea} style={{
                        width: '30px',
                        position: 'relative',
                        transition: 'opacity 0.35s',
                        bottom: '3px',
                        left: '10px',
                        backgroundColor: 'white',
                        borderRadius: '5px'
                    }} />
                </div>


            </div>


            <div className="filtered-recipes">
                {filteredRecipes.map((meal) => (

                    <div className='filtered-items'>
                        <div className='filtered-results'>
                            <img className='filtered-images' src={meal.strMealThumb} alt={meal.strMeal} onClick={() => handleResultClick(meal)} />
                            <div className='filtered-meal-name-pos' style={{ backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)' }}>
                                <span className='filtered-meal-name' style={{
                                    color: 'white',
                                    fontSize: '15px',
                                }}>{meal.strMeal}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {selectedRecipe && (
                    <FilteredRecipeDetails show={showRecipe} handleClose={handleCloseModal} recipe={selectedRecipe} />
                )}

            </div>
        </div>
    )
}

export default FilterRecipes;