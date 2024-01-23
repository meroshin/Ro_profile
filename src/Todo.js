import React, {useState} from 'react'
import './Todo.css'
import { FaAddressBook } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Todo() {


const [Data, setData] = useState("");
const [todo, setTodo] = useState([]);

const handleSubmit = ()=>
{
    setTodo((prevData)=> [...prevData, {list : Data, id : Date.now()}]);
    setData('');
}

const handleDelete = (id) =>
{
  setTodo( todo.filter((items)=>items.id!==id))
}


  return (
 
    <div className='container'>
        <h1>
            Todo
        </h1>
        <div className='input-field'>
            <input type='text' name='Name' value={Data} onChange={(e)=>setData(e.target.value)}></input>
            <button onClick={handleSubmit}>Add<span><FaAddressBook /></span></button>
        </div>


    
           {
            todo.map((items)=>
            <ul>
            <li className='list-items'> {items.list}  
            
            <span> <MdDelete  className='List-items-ic'  onClick={()=>handleDelete(items.id)}/></span> </li>
             </ul>
            )
           }
    
    </div>
  )
}

export default Todo