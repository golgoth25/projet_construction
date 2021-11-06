import { AppContextProvider } from "../src/components/AppContext"
import "../styles/globals.css"

const App = ({ Component, pageProps }) => {  
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default App
