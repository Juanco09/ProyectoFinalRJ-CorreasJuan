import React from 'react'
import Item from '../Item/Item.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Nuestros Vinos</h2>
      <hr />
      <Container>
        <Row>
          {items.map((producto) => <Item key={producto.id} item={producto} />)}
        </Row>
      </Container>

    </div>
  )
}

export default ItemList