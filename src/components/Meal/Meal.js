import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const { handleOrder } = props;
    
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={()=>handleOrder(props.meal)} >Add this Food</button>
        </div>
    );
};

export default Meal;