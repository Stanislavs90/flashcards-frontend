import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card'


function App() {


  const [cardInfo, setCardInfo] = useState([]);
  const [index, setIndex] = useState(1)



  useEffect(()=>{
    fetch(`http://localhost:8000/flashcards/`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json'
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setCardInfo(resp)) 
    .catch(error => console.log(error))
  }, [index])

  
  const nextQuestionHandler = () => setIndex(Number(index) + 1 )
  
  
  // const PreviousQuestionHandler = () => setIndex(
  // if (Number(index) >= 0){
  //   Number(index) - 1}
  // )


  return (
    <div className="App">
        <header className="App-header">
            <h1>My Flashcard App</h1>
        </header>
        <Card cardInfo={cardInfo} index={index}/>
      {/* <div>
        <button onClick={nextQuestionHandler}>Next Question</button>
      </div>

      <div>
        <button onClick={PreviousQuestionHandler}>Previous Question</button>
      </div> */}
      
    </div>
  );


}

export default App;
