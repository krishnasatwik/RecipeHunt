import React from 'react'
import RandomRecipes from './components/RandomRecipes';

const RandRecipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (
        <div className='container'>
            <RandomRecipes />
        </div >
    )
}

export default RandRecipes;