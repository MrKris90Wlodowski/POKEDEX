// IMPORTS
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

// HOOK
const useAuth = () => useContext(AuthContext)

// EXPORT
export default useAuth
