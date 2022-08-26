import { HashRouter } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { NavRoutes } from "./routes"
import "./styles/global.scss"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header prodAmount={0} totalValue={0} />
        <NavRoutes />
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
