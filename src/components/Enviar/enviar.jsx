import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import PedidoForm from './PedidoForm'
import { Timestamp } from "firebase/firestore"
import { enviarPedidos } from '../../firebase/firebase'


export default function Enviar() {
    //const [cargando, setCargando] = useState(false)
    const [pedidoId, setPedidoId] = useState('')

    const { carrito, eliminarCarrito } = useContext(CartContext)

    const crearPedido = async ({ nombre, email }) => {
        //setCargando(true);

        try {
            const objPedido = {
                comprador: { nombre, email },
                items: carrito,
                fecha: Timestamp.fromDate(new Date())
            };

            const pedidoAdded = await enviarPedidos(objPedido)
            setPedidoId(pedidoAdded.id)
            eliminarCarrito()

            return (
                <div>
                    <h2>Formulario de pedido</h2>
                    <h2>¡Listo! El código de este rencorsito es: {pedidoId}</h2>
                </div>
            );
        } catch (error) {
            console.error(error)
        }
    };


    return (
        <div>
            <h2>Formulario de pedido</h2>
            <PedidoForm onConfirm={crearPedido} />
        </div>
    );
}


