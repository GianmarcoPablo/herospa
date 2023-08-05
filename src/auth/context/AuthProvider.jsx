import { useReducer } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";


const init = () =>{
    const user = JSON.parse(localStorage.getItem("user")) 
    return {
        logged: !!user,
        user: user,
    }
}
export const AuthProvider = ({children}) => {

    const [ state,dispatch ] =  useReducer(AuthReducer, {},init)   
    
    const onLogin = (name = "") => {
        const user ={id: "aaaaa",name}
        const action  = {
            type: types.login,
            payload: user
        }
        localStorage.setItem("user",JSON.stringify(user)) 
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem("user")
        const action  = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={ {
            ...state,
            login: onLogin,
            logout
        } }>
            {children}
        </AuthContext.Provider>
    )
}
