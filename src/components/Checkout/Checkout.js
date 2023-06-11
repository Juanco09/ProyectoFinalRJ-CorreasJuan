import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { Navigate, Link } from 'react-router-dom'
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
        tarjeta: '',
        cvv: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.tarjeta.length != 16) {
            alert("Reingresar número de tarjeta")
            return
        }
        if (values.cvv.length != 3) {
            alert("Código de seguridad incorrecto")
            return
        }
        if (!values.email.includes('@')) {
            alert("La dirección de correo electrónico no existe")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, price: prod.price, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'vinos')

        const outOfStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            alert("No hay stock suficiente de alguno de los productos seleccionados")
        }
    }

    if (orderId) {
        return (
            <div className='container my-5'>
                <h2>Tu orden se registró con éxito!</h2>
                <h3>Recibirás un correo en tu casilla con los detalles del envío</h3>
                <hr />
                <p>Tu número de orden: {orderId}</p>
                <Link className="btn btn-primary my-2" to="/">Volver al Inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    type={values.nombre}
                    placeholder='Nombre completo'
                    className="form-control my-2"
                    name='nombre'
                />
                <input
                    onChange={handleInputChange}
                    type={values.direccion}
                    placeholder='Dirección'
                    className="form-control my-2"
                    name='direccion'
                />
                <input
                    onChange={handleInputChange}
                    type={values.email}
                    placeholder='Correo eletrónico'
                    className="form-control my-2"
                    name='email'
                />
                <input
                    onChange={handleInputChange}
                    type={values.tarjeta}
                    placeholder='Número de tarjeta'
                    className="form-control my-2"
                    name='tarjeta'
                />
                <input
                    onChange={handleInputChange}
                    type={values.cvv}
                    placeholder='Código de seguridad'
                    className="form-control my-2"
                    name='cvv'
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout