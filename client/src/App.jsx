import Layout from './Components/Layout/Layout'
import './App.css'
import { Routes as Switch,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Authcontextprovider } from './context/Authcontext'
import { ToastContextProvider } from './context/Toastcontext'
import Entrance from './pages/Entrance'
import CreateContact from './pages/CreateContact'
import ShowContact from './pages/ShowContact'
import EditContact from './pages/EditContact'


function App() {


  return (
  <ToastContextProvider> 
    <Authcontextprovider>
      
    <Layout/>
    <div className='maindiv'  >
      
       <Switch>
       <Route path='/' Component={Entrance} />
        <Route path='/home' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register}/>
        <Route path='/create' Component={CreateContact}/>
        <Route path='/contacts' Component={ShowContact}/>
        <Route path='/editcontact/:id' Component={EditContact}/>

      </Switch>
    </div>

    </Authcontextprovider>
    </ToastContextProvider>
  )
}

export default App;

  //   <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-black text-white-50">
  //   <div class="container text-center">
  //     <small>Copyright &copy; Contact Manager App</small>
  //   </div>
  // </footer>