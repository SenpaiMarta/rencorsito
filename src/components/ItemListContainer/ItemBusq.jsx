import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getProdName} from '../../firebase/firebase'



export default function Busqueda() {
    const {prodName} = useParams() 
    const [prodPorBusq, setProdPorBusq] = useState([])
    const navegacion = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProdName(prodName)
                setProdPorBusq(data)
            } catch (error) {
                console.error('No hay nada por aquí, solo un solitario error', error)
            }
        };
        fetchData()
    }, [prodName])

    const handleClick = (id) => {
        navegacion(`/regala/${id}`)
    }

    return (
        <>
            <h2>¿Estabas buscando algo de {prodName}?</h2>
            <section className="sectionProds">
                {prodPorBusq.map(producto => (
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