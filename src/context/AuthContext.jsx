import { createContext, useState } from "react";
// import { useLogin } from "../services/useLogin";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { userData } = useLogin();
    const [log, setLog] = useState("logout");

    const handleSetLog = () => {
        setLog(prev => prev === "logout" ? "login" : "logout");
    }

    return ( 
        <AuthContext.Provider value={{log, handleSetLog}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }