import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [log, setLog] = useState(false);

    const handleSetLog = () => {
        setLog(prev => !prev);
    }

    return ( 
        <AuthContext.Provider value={{log, handleSetLog}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }