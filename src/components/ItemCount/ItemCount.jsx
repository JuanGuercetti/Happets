import { useState } from "react";

const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
    const [ count, setCount ] = useState(initialValue);

    const decrement = () => {
        count !== 1 && setCount(prev => prev - 1)
    }
    const increment = () => {
        count < stock && setCount(prev => prev + 1)
    }

    const buttonClass = stock === 0 ? "btn btn-outline-light disabled" : "btn btn-outline-light";
    
    return (
        <div>
            { stock !== 0 && <p>Cantidad: { count }</p> }
            <button onClick={ decrement } className={ buttonClass }>-</button>
                {/* onAdd es una función que se pasa por prop en el componente padre y que recibe count como parámetro */}
            <button onClick={() => onAdd(count)} className={buttonClass}>
                { stock === 0 ? "Sin stock" : "Agregar al carrito" }
            </button>                     
            <button onClick={ increment } className={ buttonClass }>+</button>
        </div>
    )
}

export default ItemCount;



