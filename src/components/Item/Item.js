import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
    return (
        <div className='col-3 m-1'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                    </Card.Text>
                    <Link to={`/item/${item.id}`} className='btn btn-primary'>Ver Más</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item