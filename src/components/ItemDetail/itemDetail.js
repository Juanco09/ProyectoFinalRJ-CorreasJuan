import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react'
import PresentPicker from '../PresentPicker/PresentPicker';
import { CartContext } from '../../context/CartContext';
import LowStockWarn from './LowStockWarn';

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [present, setPresent] = useState("estiba")

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            present
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
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                    </Card.Text>

                    {/* <PresentPicker setPresent={setPresent} options={item.presentations} />
                    {item.stock <= 5 && <LowStockWarn stock={item.stock}/>} */}

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