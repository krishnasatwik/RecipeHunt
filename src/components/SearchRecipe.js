import React from 'react'
import { useState } from 'react';
import './recipes.css'
import RecipeDetails from './RecipeDetails';


const SearchRecipe = () => {

    const [query, setQuery] = useState('');
    const [SearchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = async () => {
        try {

            if (query.trim() === '') {
                setSearchResults([]);
                setError(null);
                return; // Exit the function early if the search bar is empty
            }
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();

            if (data.meals) {
                setSearchResults(data.meals);
                setError(null);
            } else {
                setSearchResults([]);
                setError('No results found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setQuery([]);
            setError('An error occurred while fetching data.');
        }
    }

    const handleResultClick = (recipe) => {
        setSelectedRecipe(recipe);
        setShowRecipe(true);
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null);
        setShowRecipe(false);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        setQuery(inputValue);

        if (inputValue.trim() === '') {
            setSearchResults([]);
            setError(null);
        }
    }



    return (
        <div>
            <h1 style={{ color: '#6a11cb', fontSize: 40, textAlign: 'center' }}>Search for a Recipe</h1>
            <div className='search-elements' style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <input className='search-bar' placeholder='Search for a recipe' type="text" value={query} onChange={handleInputChange} style={{
                    border: '2px solid black',
                    borderRadius: '20px',
                    width: '90%',
                    padding: '10px',
                    display: 'flex',
                }} />

                <img className='search-icon' src='https://img.icons8.com/?size=100&id=7695&format=png' alt='' onClick={handleSearch} style={{
                    width: '30px',
                    height: '30px',
                    position: 'relative',
                    right: '40px',
                    top: '7px',
                    transition: 'opacity 0.35s'
                }} />

            </div>

            {error && <p style={{
                color: 'black',
                textAlign: 'center',
                padding: 20
            }}>{error}</p>}


            <div className='items-container'>
                {SearchResults.map((meal) => (

                    <>
                        <div className='items' key={meal.idMeal}>
                            <div className='search-results'>
                                <img className='search-image' src={meal.strMealThumb} alt={meal.strMeal} onClick={() => handleResultClick(meal)} />
                                <div className='meal-name-pos'>
                                    <span className='meal-name' style={{
                                        color: 'black',
                                        fontSize: '15px',
                                    }}>{meal.strMeal}</span>
                                </div>

                            </div>
                        </div>
                    </>
                ))}

                {selectedRecipe && (
                    <RecipeDetails show={showRecipe} handleClose={handleCloseModal} recipe={selectedRecipe} />
                )}
            </div>
        </div>
    )
}

export default SearchRecipe;