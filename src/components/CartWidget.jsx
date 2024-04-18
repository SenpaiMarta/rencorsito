import { Link } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'


export default function CartWidget () {
    const {carrito} = useContext(CartContext);
    const n_productos = carrito.length;

    return (
        <>
            <div className="contadorCarrito">
                {n_productos > 0 && (
                    <Link to='/carrito'>
                        <img className="carrito" src="./images/carrito-rencorsito.png" alt="Carrito" />
                        <p className="numeroCarrito">{n_productos}</p>
                    </Link>
                )}
            </div>
        </>
    );
}