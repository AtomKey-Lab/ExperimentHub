import App from './view/App/App'
import Simulation from './view/sim/simulation'
import About from "./view/about/about"
import Login from "./view/login/login"
import Chemestry from './view/chemestry/chemestry'
import Gravitation from './view/gravitation/gravitation'
import reactDom from "react-dom/client"
import Contact from './view/Contact/Contact'
import Logbook from './view/logbook/logbook'
import SignUp from './view/SignUp/SignUp'
import Forgot from './view/Forgot/Forgot'
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
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/logbook" element={<Logbook/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        
    </Routes>
    </BrowserRouter>
)