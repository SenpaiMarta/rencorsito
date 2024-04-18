export default function CartItem({ id, titulo, cantidad }) {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>Cantidad: {cantidad}</p>
        </div>
    );
}