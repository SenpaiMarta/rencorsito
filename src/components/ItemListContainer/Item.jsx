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
        <div>
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
            <p>{producto.categoria}</p>

        </div>
        </>
    )
}