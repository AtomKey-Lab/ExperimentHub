import App from './view/App/App'
import Simulation from './view/sim/simulation'
import About from "./view/about/about"
import Login from "./view/login/login"
import Chemistry from './view/chemistry/chemistry'
import Gravitation from './view/gravitation/gravitation'
import reactDom from "react-dom/client"
import Contact from './view/Contact/Contact'
import Logbook from './view/logbook/logbook'
import SignUp from './view/SignUp/SignUp'
import Forgot from './view/Forgot/Forgot'
import Chemisty from './components/Instrument/Chemistry/Chemistry'
import Physics from './components/Instrument/Physics/Physics'
import Instrument from './components/Instrument/Chemistry/Chemistry'
import GravityExperiment from './components/experiment/gravitation'

import { BrowserRouter,Route,Routes } from "react-router-dom"

const root =reactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter><Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/simulation" element={<Simulation/>}/>
        <Route path="/GravityExperiment" element={<GravityExperiment/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Gravitation" element={<Gravitation/>}/>
        <Route path="/Chemistry" element={<Chemistry/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/logbook" element={<Logbook/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/chemistry" element={<Chemisty/>}/>
        <Route path="/physics" element={<Physics/>}/>
        <Route path="/Instrument" element={<Instrument/>}/>
    </Routes>
    </BrowserRouter>
)