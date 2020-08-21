import React  from 'react'

export default function add() {
    


    useEffect(()=>{
        fetch(`http://localhost:8000/flashcards/`, {
          method: 'GET',
          headers:{
            'Content-Type':'application/json'
            
          }
        })
        .then(resp => resp.json())
    
        .catch(error => console.log(error))
      }, [index])
    
    return (
        <div>
            <button>Add flashcard</button> 
        </div>
    )
}
