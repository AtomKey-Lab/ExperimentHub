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
import AcidBase from './view/Experiments/AcidBase/AcidBase'


import { BrowserRouter,Route,Routes } from "react-router-dom"
import Balloonelectricity from './view/Experiments/Balloonelectricity/Balloonelectricity'
import Molarity from './view/Experiments/Molarity/Molarity'
import WaveString from './view/Experiments/WaveString/WaveString'
import Density from './view/Experiments/Density/Density'
import Waves from './view/Experiments/Wave/Wave'
import Springs from './view/Experiments/Springs/Springs'
import StatesMatter from './view/Experiments/StatesMatter/StatesMatter'
import HookesJaw from './view/Experiments/HookesLaw/HookesLaw'
import Profile from '../src/components/Profile/Profile'


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
        <Route path="/acidbase" element={<AcidBase/>}/>
        <Route path="/molarity" element={<Molarity/>}/>
        <Route path="/balloanelectricity" element={<Balloonelectricity/>}/>
        <Route path="/wavestring" element={<WaveString/>}/>
        <Route path="/density" element={<Density/>}/>
        <Route path="/wave" element={<Waves/>}/>
        <Route path="/springs" element={<Springs/>}/>
        <Route path="/statematter" element={<StatesMatter/>}/>
        <Route path="/hookslaw" element={<HookesJaw/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
        
    </Routes>
    </BrowserRouter>
)