import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {getProducts} from '../../asyncMock'

export default function ItemListContainer() {
    const navegacion = useNavigate()

    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProducts.then(data => setProducts(data))
    }, [])

    const handleClick = (id) => {
        navegacion(`/regala/${id}`)
    }

    const handleCatCambio = (categoria) => {
        navegacion(`/regala/categoria/${categoria}`)
    }

    const categoriasUnicas = [...new Set(productos.map(producto => producto.categoria))];

    return (
        <>
        <section>
            <div className="sectionBotonCat">
            {categoriasUnicas.map(categoria => (
                <button className="botonCat" key={categoria} onClick={() => handleCatCambio(categoria)}>{categoria}
                </button>
                ))}
            </div>
        </section>

        <section >
            <div className="sectionProds">
            {
            productos.map(producto => (
                    <article key={producto.id} className="prodCards">
                        <h4>{producto.titulo}</h4>
                        <img onClick={()=>handleClick(producto.id)} src={producto.imagen} alt={producto.titulo} className="imagenCard"/>
                        <p>{producto.resumen}</p>
                        <button className="botonVerMas" onClick={()=>handleClick(producto.id)}>VER +</button>
                    </article>
                ) )
            }
            </div>
        </section>
        </>
    )
}
