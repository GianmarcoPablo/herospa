import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"


const PublicRouter = ({children}) => {
    const {logged} = useContext(AuthContext)
    return (
        (logged) ? <Navigate to="/marvel" /> : children
    )
}

export default PublicRouter