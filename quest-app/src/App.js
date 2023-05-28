import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <ol style={{display:"flex",listStyle: 'none',}}>
        <li style={{ textDecoration: 'none'}}>
          <Link to={"/"}>Home</Link>
        </li>
        <li  style={{ textDecoration: 'none'}}> 
          <Link to={"/users"}>Users</Link>
        </li>
        <li  style={{ textDecoration: 'none'}}>
          <Link  to={"/posts"}>Posts</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  )
}

export default Layout