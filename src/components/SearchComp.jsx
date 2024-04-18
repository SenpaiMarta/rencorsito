import { useEffect, useRef, useState } from 'react'
import { getProdName } from '../firebase/firebase'
import ItemBusq from '../components/ItemListContainer/ItemBusq'

export default function SearchComp() {
    const [prodPorBusq, setProdPorBusq] = useState([])
    const refCampo = useRef(null)

    const handleBusq = async () => {
        const inputText = refCampo.current.value.trim()
        console.log("Buscando:", inputText)
        if (inputText) {
            fetchData(inputText)
        } else {
            console.error('Por favor, ingresa un término de búsqueda válido.')
        }
    };

    const fetchData = async (term) => {
        try {
            const data = await getProdName(term)
            setProdPorBusq(data)
            console.log("Productos encontrados:", data)
        } catch (error) {
            console.error('Error al buscar productos:', error)
        }
    };

    useEffect(() => {
        refCampo.current.focus()
    }, []);

    return (
        <>
            <section>
                <input className='barraBusqueda' placeholder="¿Qué quieres regalar?" ref={refCampo} />
                <button onClick={handleBusq} className='botonBuscar'>
                    <img className='manoBuscar' src="./images/mano-rencorsito.png" alt="Buscar" />
                </button>
            </section>
            {prodPorBusq.map((producto) => (
                <ItemBusq key={producto.id} producto={producto} />
            ))}
        </>
    );
}
