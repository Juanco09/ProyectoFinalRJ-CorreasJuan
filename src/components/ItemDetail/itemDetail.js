import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import LowStockWarn from './LowStockWarn';

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }

        agregarAlCarrito(newItem)

    }

    if (item.stock === 0) {
        return (
            <div>
                No hay stock!
            </div>
        )
    }

    return (
        <div className="container my-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <h5>{item.description}</h5>
                        <h5>Precio: ${item.price}</h5>
                    </Card.Text>

                    {
                        isInCart(item.id)
                            ? <Link to="/cart" className='btn btn-success my-2'>Terminar mi compra</Link>
                            : < ItemCount
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                    }

                    <br />
                    <Button onClick={handleVolver} variant="primary">Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail