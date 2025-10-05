// IMPORTS
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { AuthProvider } from "./context/AuthContext.jsx"
import { PokemonsProvider } from "./context/PokemonsContext.jsx"
import { SnackbarProvider } from "notistack"
import "./index.css"
import App from "./App.jsx"

// RENDER
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <ThemeProvider>
        <PokemonsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </PokemonsProvider>
      </ThemeProvider>
    </SnackbarProvider>
  </StrictMode>
)
