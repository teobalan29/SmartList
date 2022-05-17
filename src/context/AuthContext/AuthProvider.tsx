import React,{useState,useEffect} from "react";

import {AuthContext} from "./AuthContext"

const AuthProvider : React.FC = ({children}) =>{
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(()=>{
        setIsSignedIn(true);
    }, [])

    return(
        <AuthContext.Provider value={{isSignedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;