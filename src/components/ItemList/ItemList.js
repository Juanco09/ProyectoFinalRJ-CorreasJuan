import React from 'react'
import Item from '../Item/Item.js'

const ItemList = ( {items} ) => {
  return (
    <div>
        <h2>Nuestros Vinos</h2>
            <hr/>
            
            <div className='row my-5'>

                {items.map((producto) => <Item key={producto.id} item={producto} />
                )}
            </div>
    </div>
  )
}

export default ItemList