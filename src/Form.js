import React, {useState} from 'react'
import './App.css'

function Form() {


    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [List, setList] = useState([]);


    const handleSubmit = (e)=>
    {
        e.preventDefault();
        console.log(name, email);
        setList((prevData)=> [...prevData, {name,email}])
        setEmail('');
        setName('');
    }

 
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Name' name='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type='email' placeholder='Enter Email' name='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <button>Add</button>
        </form>

{
    List.map((ae)=>
    <div>
    <li>Name : {ae.name}</li>
    <li>Email : {ae.email}</li>


</div>
    
    )
    
}



    </div>






  )
}

export default Form