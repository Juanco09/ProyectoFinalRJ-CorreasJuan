import Cart from "../components/Cart/Cart.js";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.js";
import { NavBar } from "../components/NavBar/NavBar.js";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.js";
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from "../components/Checkout/Checkout.js";

const PrivateRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={< ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>
        </>
    )
}

export default PrivateRoutes