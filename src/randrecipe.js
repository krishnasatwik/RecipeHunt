import React from 'react'
import RandomRecipes from './components/RandomRecipes';
import Nav2 from './components/Nav2';

const RandRecipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (
        <div className='container'>
            <Nav2 />
            <RandomRecipes />
        </div >
    )
}

export default RandRecipes;