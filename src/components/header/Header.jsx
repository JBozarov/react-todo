import React from 'react'
import './Header.css'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const Header = () => {
   return (
      <div className="header" >
         This is your todo list
         <input className='serach' placeholder="Search your todo" /> 
      </div>
   )
}
export default Header; 