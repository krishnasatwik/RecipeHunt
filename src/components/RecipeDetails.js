import React from 'react';
import Modal from 'react-bootstrap/Modal';


const RecipeDetails = ({ show, handleClose, recipe }) => {
    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{recipe.strMeal}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: 'calc(100vh - 30vh)', overflowY: 'auto' }}>
                <h3>Ingredients:</h3>
                <ul>
                    {Array.from({ length: 20 }, (_, index) => index + 1)
                        .filter((index) => recipe[`strIngredient${index}`])
                        .map((index) => (
                            <li key={index}>
                                {recipe[`strIngredient${index}`]} - {recipe[`strMeasure${index}`]}
                            </li>
                        ))}
                </ul>
                <h3>Instructions:</h3>
                <p >{recipe.strInstructions}</p>
            </Modal.Body>
        </Modal>
    );
};

export default RecipeDetails;