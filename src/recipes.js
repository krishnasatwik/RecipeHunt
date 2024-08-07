import React from 'react';
import SearchRecipe from './components/SearchRecipe';
import Nav2 from './components/Nav2';

const Recipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (

        <div className='container'>
            <Nav2 />
            <SearchRecipe />
        </div >
    )
}
export default Recipes;