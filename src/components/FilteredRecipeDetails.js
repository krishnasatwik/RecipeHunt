import React from 'react'
import Modal from 'react-bootstrap/Modal';

const FilteredRecipeDetails = ({ show, handleClose, recipe }) => {
    return (
        <div>
            return (
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{recipe.strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: 'calc(100vh - 30vh)', overflowY: 'auto' }}>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p style={{ padding: '10px' }}>{recipe.instructions}</p>
                </Modal.Body>
            </Modal>
            );
        </div>
    )
}

export default FilteredRecipeDetails;