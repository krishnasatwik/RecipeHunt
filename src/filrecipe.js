import React from 'react'
import FilterRecipes from './components/FilterRecipes';
import Nav2 from './components/Nav2';

const FilRecipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (
        <div className='container'>
            <Nav2 />
            <FilterRecipes />
        </div >
    )
}

export default FilRecipes;