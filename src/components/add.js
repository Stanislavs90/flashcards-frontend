// import React, { useState }  from 'react'

// function Add() {
    
//     const [question, setQuestion] = useState()
//     const [answer, setAnswer] = useState()

//     fetch(`http://localhost:8000/flashcards/`, {
//       method: 'POST',
//       headers:{
//         'Content-Type':'application/json'
        
//       }
//     })
//     .then(resp => resp.json())
//     .then(resp => setCardInfo(resp)) 
//     .catch(error => console.log(error))
//     }

      
    
//     return (
//         <div>
//             <div>
//                 <label>Question:</label>
//                 <input htmlFor="Question" id="Question" type="text" onChange={e => setQuestion(e.target.value)}/><br/>
//                 <label>Answer:</label>
//                 <input htmlFor="Answer" id="Answer" type="text" onChange={e => setAnswer(e.target.value)}/>
//             </div>  
//             <button>Add flashcard</button><br/>  
//         </div>
//     )

//     }
// export default Add;