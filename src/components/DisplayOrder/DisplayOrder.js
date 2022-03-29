import React from 'react';

const DisplayOrder = (props) => {
    const { idMeal,strMeal, strInstructions, strMealThumb } = props.order;
    const { removeItem } = props;
    return (
        <div>
            <h5>{strMeal}</h5>
            <img style={{ width: '100px', height: "100px" }} src={strMealThumb} alt="" />
            <br />
            <button onClick={ ()=>removeItem(props.order) }>Remove Item</button>
        </div>
    );
};

export default DisplayOrder;