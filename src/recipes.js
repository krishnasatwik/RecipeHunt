import React from 'react';
import SearchRecipe from './components/SearchRecipe';

const Recipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (

        <div className='container'>
            <SearchRecipe />
        </div >
    )
}
export default Recipes;