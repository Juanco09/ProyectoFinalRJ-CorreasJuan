import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { Navigate, Link } from 'react-router-dom'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
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

    const handleSubmit = (e) => {
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

        console.log("Submit", orden);

        const productosRef = collection(db, 'vinos')

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay suficiente stock de " + item.name)
                    }
                })
        })

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
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