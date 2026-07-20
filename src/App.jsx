import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import Add_users from './Pages/Add_users'
import Tables from './Pages/Tables'
import Forms from './Pages/Forms'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* body showing */}
    <div class="admin-shell">
    <div class="sidebar-backdrop" data-sidebar-close></div>
    
    <div className="admin-main">
      <Header/>
      <Sidebar/>
   
    <Routes>

       <Route path="/" element={<Dashboard/>}/> 
       <Route path="/users" element={<Users/>}/>
       <Route path="/addusers" element={<Add_users/>}/>
       <Route path="/tables" element={<Tables/>}/>
       <Route path="/forms" element={<Forms/>}/>

    </Routes>
    </div>
    </div>

    </BrowserRouter> 
    </>
  )
}

export default App
