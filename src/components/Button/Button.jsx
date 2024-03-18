import { useEffect, useRef } from "react"

const Button = () => {

    // const buttonRef = useRef()
    /* useRef es un hook donde almacena un objeto que no cambia su valor al renderizar ni provoca
    un nuevo render cuando cambia su valor 
    Este valor se guarda en la propiedad current, por eso no genera un nuevo render. No es un estado
    de react con su respectivo set 
    Se puede iniciar con algun valor inicial entre () */

    // -------

    /*
    const inputRef = useRef('valor inicial');
    console.log(inputRef);
    inputRef.current = 'valor cambiado';
    console.log(inputRef);
    
    useEffect(() => {
        const input = document.getElementById('input');
        // esto no debe usarse, siempre hay que referir al elemento mediante react
    });

    return (
        <input id='input'/>
    )
    */

    // -------

    /*
    const inputRef = useRef();
    console.log(inputRef);
    // acá está undefined porque todavía no se montó el componente

    useEffect(() => {
        console.log(inputRef);
        // useEffect se ejecuta una vez que se monta el componente y después se define la referencia en current
    }) 

    return (
        <input ref={inputRef} type="text" style={{margin: "100px", background: "lightblue"}} />
        // con ref se guarda el elemento del DOM en la referencia. Se hace luego del montaje
    )
    */

    // -------

    /*
    const buttonRef = useRef();
    
    useEffect(() => {
        console.log(buttonRef)
        const boton = buttonRef.current
        // lo asigno una vez que se montó. 
        // Esto es lo mismo que const boton = document.getElementById('boton')

        const handleClick = () => console.log('hice click')

        boton.addEventListener('click', handleClick)
        // se podría poner una ()=> como 2do parámetro pero después no la puedo borrar, cada vez que se monte
        // el componente se va a agregar otra función igual

        return () => {
            boton.removeEventListener('click', handleClick)
            // esto no es necesario porque lo hace react solo con los eventos sintéticos
        }

    }, [])

    return (
        <button ref={buttonRef}>boton</button>
    )
    */
    
    // -------

    const buttonRef = useRef();
    
    const handleClick = (e) => {
        console.log(e)
       // devuelve el evento sintético de React 
    }

    console.log(buttonRef)
    return (
        <button ref={buttonRef} onClick={handleClick}>boton</button>
        // el onClick se encarga de realizar la limpieza
    )
    
}

export default Button