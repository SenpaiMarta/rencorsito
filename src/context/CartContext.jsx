import {createContext, useState} from "react"

export const CartContext = createContext ({
    carrito: [],
    addItem: () => {},
    quitarItem: () => {},
    eliminarCarrito: () => {},
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const addItem = (producto) => {
        if (!enCarrito(producto.id)) {
            setCarrito(prev => [...prev, producto])
            carrito.push(producto)
        } else {
            console.error('Vaya, no tenemos más de esto por aquí')
        }
    }

    const quitarItem = (productoId) => {
        const carritoActualizado = carrito.filter(prod => prod.id !== productoId)
        setCarrito(carritoActualizado)
    }

    const eliminarCarrito = () => {
        setCarrito([])
    }

    const enCarrito = (productoId) => {
        return carrito.some(prod => prod.id === productoId)
    }


    return (
        <CartContext.Provider value = {{carrito, addItem, quitarItem, eliminarCarrito}}>
            { children }
        </CartContext.Provider>

    )
}