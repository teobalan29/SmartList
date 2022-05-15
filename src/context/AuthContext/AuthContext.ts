import React, { useContext } from "react";

export type AuthContextType = {
    isSignedIn: boolean
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used withing AuthProvider")
    }

    return context;
}
