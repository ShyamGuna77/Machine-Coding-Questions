import React, { useContext } from 'react'
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import cartContext from '../store/CartContext';

const MealItem = ({meal}) => {

    const cartCtx = useContext(cartContext)

    function handleAddItem() {
        cartCtx.addItem(meal);
    }
  return (
    <>
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="Menu Pic" />
        <div>
          <h3>{meal.title}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
      </article>
    </li>
    </>
  );
}

export default MealItem