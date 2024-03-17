import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) =>{
    const { authState } =  useContext(AuthContext);

    if(!authState.isAuth){
        return <Navigate to={"/login"} />
    }
    return children
}