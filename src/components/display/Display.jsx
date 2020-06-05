import React, { useState, useEffect, useRef } from 'react'
import AddTodo from '../addTodo/AddTodo'
import { Button } from 'react-bootstrap'
import "./Display.css"
import nothing from './nothing.jpg'

const Display = () => {
   const didUpdate = useRef(false)
   const [ todos, setTodos ] = useState(["Finish capstone 1 in 4 days", "Have a dinner with family"])
   const [ clicked, setClicks ] = useState([])
   const [ toggle, setToggle ] = useState(true); 
   const [ searchBy, setSearchBy ] = useState('') 
   const [ filteredTodo, setFilteredTodo ] = useState([]) 

   useEffect( () => {
         let temp = todos.filter(todo => todo.includes(searchBy)); 
         setFilteredTodo(temp); 
   }, [])
   const handleChange = val => setSearchBy(val); 
   console.log(filteredTodo)
   const addtodo = v => {
      setTodos([...todos, v])
      setToggle(true)
   }
   const pinToTop = index => {
      const selected = todos[index]; 
      const filtered = todos.filter((v, i) => i !== index); 
      setTodos([selected, ...filtered]); 
   }
   const deleteTodo = index => {
      const filtered = todos.filter((v, i) => i !== index); 
      setTodos(filtered); 
   }
   const completed = index => {
      setClicks([...clicked, index])
   }

   const clearAll = () => {
      setTodos([])
      setToggle(false)
   }

   return (
      <div>
      <div className='search-box' >
         <input className='serach' placeholder="Search your todo" onChange={e => {
            let sliced = todos.slice(); 
            const test = todos.filter(todo => todo.toLowerCase().includes(e.target.value.toLowerCase()))
            setTodos(test)
            console.log(e.target.value)
            if(e.target.value === '') {
               setTodos(sliced)
            }
         }} /> 
      </div>
      <div className={toggle ? "display image" : "no-iamge"}  >
         <AddTodo addtodo={addtodo} clearAll={clearAll} /> 
         { todos.length > 0 ? todos.map((todo, i) => 
            <div key={i} className={clicked.includes(i) ? 'line-through single-todo' : 'single-todo'} >{todo} 
               <span>
                  <Button variant="outline-info" onClick={() => completed(i)} >Completed</Button>{' '}
                  <Button variant="outline-success" onClick={() => deleteTodo(i)} >Delete</Button>{' '}
                  <Button variant="outline-danger" onClick={() => pinToTop(i)}>Pin to top</Button>{' '}
               </span>

            </div>)
         :
         <img src={nothing} style={{width: '40%'}} />
         }
      </div>
      </div>
   )
}

export default Display; 