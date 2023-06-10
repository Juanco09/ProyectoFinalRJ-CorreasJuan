import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "./CartWidget.css"

const CartWidget = () => {

    const { cart, cantidadTotal } = useContext(CartContext)
    return (
        <Link to='/Cart' className='cart-item'>
            <GrCart className='item-icon' />
            <span className={`item-count ${cart.length > 0 ? 'item-count-show' : '' }`}>{cantidadTotal()}</span>
        </Link>
    )
}
export default CartWidget;
