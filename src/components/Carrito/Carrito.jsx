import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'
import CartItem from '../Carrito/CartItem'

export default function NuevoCarrito () {
    const {carrito, eliminarCarrito, cantidadTotal} = useContext(CartContext)

    if(cantidadTotal === 0) {
        return (
            <div>
                <h2>No hay nada que mostrar por aquí</h2>
                <Link to = '/'></Link>
            </div>
        )
    }

    return (
        <div>
            {carrito.map(p => <CartItem key={p.id} {...p} />)}
            <button onClick={() => eliminarCarrito()}>¿Eliminar todo?</button>
            <Link to = '/enviar'>Aquí para enviar</Link>
        </div>
    )

}