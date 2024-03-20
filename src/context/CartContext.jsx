import { createContext, useContext } from "react";

export const CartContext = createContext();
// Este objeto creado, devuelve un provider con el cual debo envolver a todos los componentes que quiero que
// accedan al provider (a sus valores). Se puede inicializar con un valor.

// Dentro del provider está la prop value con la cual puedo definir otro valor inicial.
// Los componentes dentro del context van a acceder a este valor. Los que esten fuera, van a acceder al
// valor con el cual creé el context.
// Para consumirlo se usa el hook useContext(referenciaAConsumir) el cual va a tener el valor que haya
// definido al inicio.

// Context solo comparte un valor. Podría asociarlo a un objeto para modificarlo.
// Se pueden tener varios contexts.

export const CartProvider = ({ children }) => {
                        // children son los hijos que estaría envolviendo
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {
        !isInCart(productToAdd.id) ?
            ( 
            setCart(prev => [...prev, productToAdd]),
            console.log(cart) 
            )
            : console.log("The product is already on the cart")
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
        // some ejecuta la igualdad una vez por cada elemento del array (cart) y devuelve true si al menos
        // se cumple la condición 1 vez. De lo contrario, retorna false
    }

    const removeItem = (productToRemove) => {
        if (isInCart(productToRemove.id)) {
            const filterCart = cart.filter(product => product.id !== productToRemove.id);
            setCart(filterCart);
            console.log(filterCart);
        }
        else console.log("The product is not in the cart")
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach(prod => totalQuantity =+ prod.quantity);
        return totalQuantity;
    }
    const totalQuantity = getTotalQuantity();

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}
