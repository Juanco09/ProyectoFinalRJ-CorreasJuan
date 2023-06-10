import React from 'react'

const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className='my-3'>
            <button 
                onClick={handleRestar}
                className={`btn ${cantidad === 1 ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                disabled={cantidad === 1}
            >
                -
            </button>
            <span className='mx-2'>{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={`btn btn-outline-primary ${cantidad === max ? 'btn-deshabilitado' : ''}`}
                disabled={cantidad === max}
            >
                +
            </button>
            <br/>
            <button onClick={handleAgregar} className='btn btn-success my-2'>
                Agregar al carrito
            </button>
        </div>  
    )
}

export default ItemCount