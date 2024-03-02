import {useState, useRef} from 'react'


export default function RefBasic() {
    const [cont, setCont] = useState(0) 
    const clicsRef = useRef(0)

    const estilos = {
        margin: '10px',
        gap: '50px',
        display: 'flex',
        justifyContent: 'center'
    }

    const handleInc = () => {
        setCont(cont + 1)
        clicsRef.current++
        console.log("Contador de clics: " + clicsRef.current)
    }

    const handleDec = () => {
        setCont(cont - 1)
        clicsRef.current++
        console.log("Contador de clics: " + clicsRef.current)

    }

    return (
        <section style={estilos}>
            <button onClick={handleInc}>SUMAR</button>
            <p>{cont}</p>
            <button onClick={handleDec}>RESTAR</button>

        </section>
    )
}