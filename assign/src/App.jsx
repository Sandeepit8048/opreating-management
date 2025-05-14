import { React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import OptInManagement from './component/OptInManagement'
import Welmess from './component/Welmess'
import './App.css'
import WelcomeForm from './component/welcomeform'
import WelcomeMessage from './component/welcomemessage'

function App() {


  return (
    <>
       <OptInManagement />
          <div className="container mt-5">
            <Welmess />
            <WelcomeForm/>
            <WelcomeMessage/>
          </div>
    </>
  )
}

export default App
