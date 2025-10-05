// IMPORTS
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

// HOOK
const useTheme = () => useContext(ThemeContext);

// EXPORT
export default useTheme;
