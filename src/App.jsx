import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
     <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos a Happets!' />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Resultados de la búsqueda' />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting='Detalle del producto' />}/>
            <Route path='/cart' element={ <Cart/> }/> 
          </Routes>
        </BrowserRouter>
     </CartProvider>
    </>
  )
}

export default App
