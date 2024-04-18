import { useEffect, useRef, useState } from 'react';
import { getProdName } from '../firebase/firebase';
import ItemBusq from '../components/ItemListContainer/ItemBusq'; // Asegúrate de que el componente está correctamente importado

export default function SearchComp() {
    const [prodPorBusq, setProdPorBusq] = useState([]);
    const refCampo = useRef(null);

    const handleBusq = async () => {
        const inputText = refCampo.current.value.trim();
        console.log("Buscando:", inputText); // Mensaje de consola para confirmar la acción del botón
        if (inputText) {
            fetchData(inputText);
        } else {
            console.error('Por favor, ingresa un término de búsqueda válido.');
        }
    };

    const fetchData = async (term) => {
        try {
            const data = await getProdName(term);
            setProdPorBusq(data);
            console.log("Productos encontrados:", data); // Verificar los datos recibidos
        } catch (error) {
            console.error('Error al buscar productos:', error);
        }
    };

    useEffect(() => {
        // Inicialmente enfocar el campo de búsqueda
        refCampo.current.focus();
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
