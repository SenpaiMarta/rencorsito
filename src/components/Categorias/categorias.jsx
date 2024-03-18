import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {getProduct} from '../../asyncMock'


export default function Categorias() {
    const {prodCat} = useParams() 
    const [producto, setProduct] = useState({})
    const navegacion = useNavigate()


    useEffect(() => {
        getProduct(prodCat).then(data => {
            setProduct(data)
        }).catch(error => {
            console.error('Error al obtener el producto:', error)
        })
    }, [prodCat])

    const handleClick = (id) => {
        navegacion(`/regala/${id}`)
    }

    return (
        <>
            <section>
                <div>
                                <article key={producto.id}>
                                    <h4>{producto.titulo}</h4>
                                    <p>{producto.resumen}</p>
                                    <button onClick={() => handleClick(producto.id)}>Ver más</button>
                                </article>
                </div>
            </section>
        </>
    );
}