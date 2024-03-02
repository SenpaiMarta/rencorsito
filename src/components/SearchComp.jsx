import {useEffect, useRef} from 'react'

export default function SearchComp() {

    const refCampo = useRef(null)

    useEffect(()=>{
        console.log("Efecto en acción")
        refCampo.current.focus()

    }, [] )

    return (
        <>
            <section>
                <input className='barraBusqueda' placeholder="¿Qué quieres regalar?" ref={refCampo}/>
                <button className='botonBuscar'><img className='manoBuscar' src="./images/mano-rencorsito.png" alt="" /></button>
            </section>
        </>
    )
}