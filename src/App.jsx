import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Regala from './components/Regala/regala.jsx'
import Apoya from './components/Apoya/apoya.jsx'
import Contacta from './components/Contacta/contacta.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Item from './components/ItemListContainer/Item.jsx'
import Categorias from './components/Categorias/categorias.jsx'
import Carrito from './components/Carrito/Carrito.jsx'
import {CartProvider} from './context/CartContext.jsx'
import Enviar from './components/Enviar/enviar.jsx'
import ItemBusq from './components/ItemListContainer/ItemBusq.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route exact path = "/" element={<Home />}></Route>
            <Route exact path = "/regala" element={<ItemListContainer />}></Route>
            <Route exact path = "/regala/:prodId" element={<Item/>}></Route>
            <Route exact path = "regala/categoria/:prodCat" element={<Categorias/>}></Route>
            <Route exact path = "/apoya" element={<Apoya />}></Route>
            <Route exact path = "/carrito" element={<Carrito />}></Route>
            <Route exact path = "/enviar" element={<Enviar />}></Route>
            <Route exact path = "/contacta" element={<Contacta />}></Route>
            <Route exact path = "/resultados" element={<ItemBusq />}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
