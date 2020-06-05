import React, { Component } from 'react'
import "./AddTodo.css"
import { InputGroup, Button, FormControl } from 'react-bootstrap'

export class AddTodo extends Component {
   constructor(){
      super(); 

      this.state = {
         val: '', 
      }
   }
   
   handleChange = v => this.setState({val: v})
   clearState = () => this.setState({val: ''})
   handleAdd = v => {
      this.props.addtodo(v); 
      this.clearState(); 
   }
   render() {
      const { val } = this.state; 
      return (
         <div>
            <div className='input-div' >
            <InputGroup>
            <FormControl size="lg"
               placeholder=" Add your todo ..."
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
               value = {val}
               onChange={e => this.handleChange(e.target.value)} />
            <InputGroup.Append>
            <Button variant="outline-primary" className='btn' size="lg" onClick={this.clearState} >Clear</Button>
            <Button variant="outline-success" className='btn' size="lg" onClick={ () => this.handleAdd(val) } >Add </Button>
            </InputGroup.Append>
            </InputGroup>
            <Button variant="outline-success" className='btn' size="lg" onClick={ this.props.clearAll } > Clear All </Button>
            </div>
         </div>
      )
   }
}

export default AddTodo
