import {useState, useRef} from 'react'


export default function Contador() {
    const [cantidad, setCantidad] = useState(0) 
    const clicsCantidad = useRef(0)

    const estilos = {
        margin: '10px',
        gap: '50px',
        display: 'flex',
        justifyContent: 'center'
    }

    const handleInc = () => {
        setCantidad(cantidad + 1)
        clicsCantidad.current++
    }

    const handleDec = () => {
        setCantidad(cantidad - 1)
        clicsCantidad.current++

    }

    return (
        <section style={estilos}>
            <button onClick={handleInc}>+</button>
            <p>{cantidad}</p>
            <button onClick={handleDec}>-</button>

        </section>
    )
}
