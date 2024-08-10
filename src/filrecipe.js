import React from 'react'
import FilterRecipes from './components/FilterRecipes';

const FilRecipes = () => {
    const body = document.querySelector("body");
    body.style.background = "white";
    return (
        <div className='container'>
            <FilterRecipes />
        </div >
    )
}

export default FilRecipes;