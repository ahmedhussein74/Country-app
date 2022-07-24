import React , { useState , useEffect } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState({firstname:'', lastname:''})

  useEffect(() => {
    document.title = name.firstname;
  }, [name.firstname])

  return (
    <div className="App">
      <input onChange={e => setName({...name, firstname: e.target.value})} placeholder="Enter Your First Name" />
      <input onChange={e => setName({...name, lastname: e.target.value})} placeholder="Enter Your Last Name" />
      <h3>First Name : {name.firstname}</h3>
      <h3>Last Name : {name.lastname}</h3>
    </div>
  )
}

export default App