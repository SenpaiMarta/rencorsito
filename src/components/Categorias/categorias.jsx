import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getProdCat} from '../../firebase/firebase'



export default function Categorias() {
    const {prodCat} = useParams() 
    const [prodPorCategorias, setProdPorCategorias] = useState([])
    const navegacion = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProdCat(prodCat)
                setProdPorCategorias(data)
            } catch (error) {
                console.error('No hay nada por aquí, solo un solitario error', error)
            }
        };
        fetchData()
    }, [prodCat])

    const handleClick = (id) => {
        navegacion(`/regala/${id}`)
    }

    return (
        <>
            <h2>Regalos para personas que necesitan {prodCat}</h2>
            <section className="sectionProds">
                {prodPorCategorias.map(producto => (
                    <div key={producto.id}>
                        <article key={producto.id} className="prodCards">
                            <h4>{producto.titulo}</h4>
                            <img onClick={() => handleClick(producto.id)} src={producto.imagen} alt={producto.titulo} className="imagenCard"/>
                            <p>{producto.resumen}</p>
                            <button onClick={() => handleClick(producto.id)} className="botonVerMas">VER +</button>
                        </article>
                    </div>
                ))}
            </section>
        </>
    );
}