import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { getProduct } from '../../firebase/firebase'
import { CartContext } from '../../context/CartContext'


export default function Item() {
    const [cantidad, setCantidad] = useState(0)
    const { addItem } = useContext(CartContext)
    const [quiere, setQuiere] = useState(false)
    const { prodId } = useParams()
    const [producto, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProduct(prodId)
                setProduct(data)
            } catch (error) {
                console.error('Vaya, eso no está aquí, nos da este error:', error)
            }
        };
        fetchData()
    }, [prodId])

    const handleInc = () => setCantidad(cantidad + 1)
    const handleDec = () => cantidad > 0 && setCantidad(cantidad - 1)
    const addToCart = () => {
        if (cantidad > 0) {
            const item = { ...producto, cantidad }
            addItem(item)
            setQuiere(true)
        }
    }

    return (
        <>
            <section className="itemProd">
                <div>
                    <img src={producto.imagen} alt={producto.titulo} className="imagenProd" />
                </div>
                <div className="textoItemProd">
                    <h2 className="tituloProds">{producto.titulo}</h2>
                    <p className="textoProds">{producto.descripcion}</p>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={handleInc}>+</button>
                        <span>{cantidad}</span>
                        <button onClick={handleDec}>-</button>
                    </div>
                    <button onClick={addToCart} className="botonQuiero">LO QUIERO</button>
                    {quiere && cantidad > 0 && <Link to="/carrito">Ir al envío</Link>}
                </div>
            </section>
        </>
    );
}
