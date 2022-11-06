import React, { useRef, useState } from 'react'

export default function RefTutorial() {
        const [name,setName] = useState("")
        const inputValue = useRef("")
        const onClick = () => {
         inputValue.current.focus()
         setName(inputValue.current.value)
         inputValue.current.value = ""
        }
  return (
    <div>
        <h1>{name}</h1>
        <input type="text" ref={inputValue} /><button onClick={onClick}>submit</button>
    </div>
  )
}
