import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='container my-5'>
                <h2>Su carrito está vacío</h2>
                <hr />
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className='container my-5'>
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <div style={{
                        display: 'flex'
                    }}>
                            <img src={prod.img} alt={prod.name} />
                            <div>
                                <h4>{prod.name} - {prod.description}</h4>
                                <small>Precio unidad: {prod.price}</small>
                                <small> Cantidad: {prod.cantidad}</small>
                                <p>Precio final: {prod.price * prod.cantidad}</p>
                                <button onClick={() => eliminarDelCarrito(prod.id)} className='btn btn-danger'><BsTrash /></button>
                            </div>
                            
                        </div>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra()}</h3>
            <button onClick={vaciarCarrito} className='btn btn-danger'>Vaciar Carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar mi compra</Link>
        </div>
    )

}

export default Cart

                        // < h4 > { prod.name }</h4 >
                        // <img src={prod.img} alt={prod.name} />
                        // <small>Precio unidad: {prod.price}</small>
                        // <small> Cantidad: {prod.cantidad}</small>
                        // <p>Precio final: {prod.price * prod.cantidad}</p>
                        // <button onClick={() => eliminarDelCarrito(prod.id)} className='btn btn-danger'><BsTrash /></button>
                        // <hr />