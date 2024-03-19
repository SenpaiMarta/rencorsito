import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {getProdCat} from '../../asyncMock'



export default function Categorias() {
    const {prodCat} = useParams() 
    const ProdPorCategorias = getProdCat(prodCat)
    const navegacion = useNavigate()

    const handleClick = (id) => {
        navegacion(`/regala/${id}`)
    }

    return (
        <>
            <h2>Regalos para personas que te provocan {prodCat}</h2>

            <section className="sectionProds">
                {ProdPorCategorias.map(producto => (
                <div key={producto.id}>
                    <article key={producto.id} className="prodCards">
                        <h4>{producto.titulo}</h4>
                        <img onClick={()=>handleClick(producto.id)} src={producto.imagen} alt={producto.titulo} className="imagenCard"/>
                        <p>{producto.resumen}</p>
                        <button onClick={() => handleClick(producto.id)} className="botonVerMas">VER +</button>
                    </article>
                </div>
                ))}
            </section>
        </>
    );
}