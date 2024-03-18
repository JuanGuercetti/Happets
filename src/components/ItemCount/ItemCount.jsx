import { useState } from "react";

const ItemCount = ({ initialValue = 0, stock, onAdd }) => {
    const [ count, setCount ] = useState(initialValue);

    const decrement = () => {
        count !== 0 && setCount(prev => prev - 1)
    }
    const increment = () => {
        count < stock && setCount(prev => prev + 1)
    }

    const buttonClass = stock === 0 ? "btn btn-outline-light disabled" : "btn btn-outline-light";
    
    return (
        <div>
            <p>Cantidad: {count}</p>
            <button onClick={ decrement } className={buttonClass}>-</button>

            { stock === 0 ? (
                <button onClick={() => onAdd(count)} className={buttonClass}>Sin stock</button>
            ) :
            (
                <button onClick={() => onAdd(count)} className={buttonClass}>Finalizar compra</button>
            )}

            {/* onAdd es una función que se pasa por prop en el componente padre y que recibe count como parámetro */}
            <button onClick={ increment } className={buttonClass}>+</button>
        </div>
    )
}

export default ItemCount;