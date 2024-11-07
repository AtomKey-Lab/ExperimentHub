import App from './view/App/App'
import Simulation from './view/simulation/simulation'
import About from "./view/about/about"
import Login from "./view/login/login"


import reactDom from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const root =reactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter><Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Simulation" element={<Simulation/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
)