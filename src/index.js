import App from './view/App/App'
import Simulation from './view/sim/simulation'
import About from "./view/about/about"
import Login from "./view/login/login"
<<<<<<< HEAD


=======
import Chemestry from './view/chemestry/chemestry'
import Gravitation from './view/gravitation/gravitation'
>>>>>>> be284ea175f53c9ff44350c1a40d1a1086699fde
import reactDom from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const root =reactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter><Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/simulation" element={<Simulation/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Gravitation" element={<Gravitation/>}/>
        <Route path="/Chemestry" element={<Chemestry/>}/>
    </Routes>
    </BrowserRouter>
)