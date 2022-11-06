import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function EffectTutorial() {
    const [comments,setComments] = useState({})
    useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            setComments(response.data)
        })
    },[]);
    // console.log(comments);

  return (
    <div>
        {comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <span>{comment.id}</span>,
                    <h1>{comment.name}</h1>,
                    <h3>{comment.email}</h3>,
                    <p>{comment.body}</p>
                </div> 
            ) 
            })}
    </div>
  )
}


// https://jsonplaceholder.typicode.com/comments