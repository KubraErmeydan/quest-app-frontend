import React from 'react'
import {BrowserRouter, Route,Outlet, Routes} from "react-router-dom";
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import User from '../components/User'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>          
        </Routes>
      </BrowserRouter>
      
      <Outlet />
    </div >
  )
}

export default App

/* <ol style={{display:"flex",listStyle: 'none',}}>
        <li style={{ textDecoration: 'none'}}>
          <Link to={"/"}>Home</Link>
        </li>
        <li  style={{ textDecoration: 'none'}}> 
          <Link to={"/users"}>Users</Link>
        </li>
        <li  style={{ textDecoration: 'none'}}>
          <Link  to={"/posts"}>Posts</Link>
        </li>
      </ol> */