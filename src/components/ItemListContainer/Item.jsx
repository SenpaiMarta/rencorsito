import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getProduct} from '../../asyncMock'

export default function Item() {
    const {prodId} = useParams()

    const [producto, setProduct] = useState({})

    useEffect(() => {
        setProduct(getProduct(prodId))
    }, [prodId])

    return (
        <>
        <section className="itemProd">
            <div>
                <img src={producto.imagen} alt={producto.titulo} className="imagenProd"/>
            </div>

            <div className="textoItemProd">
                <h2 className="tituloProds">{producto.titulo}</h2>
                <p className="textoProds">{producto.descripcion}</p>
                <button className="botonQuiero">LO QUIERO</button>
            </div>
        </section>

        </>
    )
}