import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext.js";
import { LoginProvider } from "./context/LoginContext.js";
import AppRouter from "./routes/AppRouter.js";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
          <AppRouter />
      </CartProvider>
    </LoginProvider>
  )
}

export default App;
