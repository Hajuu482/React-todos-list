import React from "react";

import { useState } from "react";

import './App.css';

function App () {

  const [item , setItem] = useState("")

  const [todos , setTodos] = useState([])

  const handleItem = (event)=> {

    event.preventDefault ();

    if(item){

      setTodos ([...todos,item])

      setItem("")
    }
  }


  return <div className="Container">

    <h1 style={{textAlign : "center" , marginTop: "20px"}}> Our list of Todos </h1>

    <div className="form">

      <form> 

        <label> Enter item</label><br/>
 
        <input type="text" value = {item} 

        onChange = {(event)=> {
          
        setItem(event.target.value) }}/> 


       <button onClick={handleItem}>Add</button>

      </form>

    </div>

    {
      todos.map((newItem,index) => (

        <div className="item-parent">

          <div className="items">

           <h3> {newItem} </h3>

          </div>

        </div>

      ))
    }




  </div>
}

export default App;