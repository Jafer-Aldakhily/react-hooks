import React,{useState} from 'react'

export default function StateTutorial() {
    const [counter,setCounter] = useState(0)
    const [name,setName] = useState("Jafer")

    const changeCounter = () => {
      setCounter(counter + 1)
    }

    const changeName = (e) => {
      setName(e.target.value)
    }
  return (
    <div>
      The Counter is : {counter}
      <button onClick={changeCounter} style={{ marginLeft:"10px" }}> Increase +</button>
      <div>
        <input 
        type="text"
        onChange={changeName}
        placeholder="Enter a name"
        style={{ marginRight:"10px",marginTop:"10px" }}
        />
        {name}
      </div>
    </div>
  )
}
