import { useContext } from "react"
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "../context/LoginContext.js";
import PrivateRoutes from "./PrivateRoutes.js";
import PublicRoutes from "./PublicRoutes.js";



const AppRouter = () => {
    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
            {
                user.logged
                    ? <PrivateRoutes />
                    : <PublicRoutes />
            }
        </BrowserRouter>
    )
}

export default AppRouter