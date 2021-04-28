import { API_SERVER } from './setting';

export class API {

    static getAll(setCardInfo){
        return fetch(API_SERVER, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          }
        }).then( resp => resp.json())
        .then(resp => setCardInfo(resp)) 
        .catch(error => console.log(error))

      }


    static updateCard(question, answer) {
      return fetch(API_SERVER, {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({ 
            question: question, 
            answer: answer })
        })
        .then(resp => resp.json())
        .catch(error => console.log(error))
      }


      static deleteCard = (cardInfo, index, maxId) => {
        fetch(`${API_SERVER}${maxId}/`, {
            method: 'DELETE',
            headers:{
              'Content-Type':'application/json'
              
            }
          })
          .then(resp => resp.json())
          .catch(error => console.log(error))
        }


}



export default API;