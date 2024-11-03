import App from './view/App/App'
import reactDom from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const root =reactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter><Routes>
        <Route path="/" element={<App/>}/>
    </Routes>
    </BrowserRouter>
)