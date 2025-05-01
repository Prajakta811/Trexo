
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {
  return (
    <>
     <Navbar/> 
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/userdata" element={<UserList/>} />
      <Route path="/userdata/:id" element={<UserCard/>} />
     </Routes>
    </>
  )
}

export default App
