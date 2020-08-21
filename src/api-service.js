

export class API {
    static getCardInfo()
    fetch(`http://localhost:8000/flashcards/${questionNumber}/`, {
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
      
    }
  })
  .then(resp => resp.json())
  .then(resp => setCardInfo(resp)) 
  .catch(error => console.log(error))
}

