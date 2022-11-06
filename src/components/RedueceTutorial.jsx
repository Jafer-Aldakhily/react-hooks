import React,{useReducer} from 'react'

const Reduece = (state,action) => {
      switch(action.type)
      {
        case "INCREMENTAL":
          return {counter: state.counter + 1,show: state.show}
        case "toggleTextShow" :
          return {counter:state.counter,show: !state.show} 
          default :
          return state 
      }
}
export default function RedueceTutorial() {
  const [state,dispatch] = useReducer(Reduece,{counter:0,show:true});
  return (
    <div>
      counter is {state.counter} <button 
      style={{ marginLeft:"10px" }}
      onClick={() => {
        dispatch({type : "INCREMENTAL"})
        dispatch({type : "toggleTextShow"})
      }}
      >+</button>
      { state.show && <p>This is a text</p>}
    </div>
  )
}
