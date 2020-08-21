

export class API {

    static getMovies(){
        return fetch("http://localhost:8000/flashcards/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          }
        }).then( resp => resp.json())
        //   .then(resp => setCardInfo(resp)) 
        //   .catch(error => console.log(error))
      }


    // static updateMovie() {
    // return fetch(`http://localhost:8000/flashcards/`, {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type':'application/json'
        
    //   }
    // })
    // .then(resp => resp.json())
    // .then(resp => setCardInfo(resp)) 
    // .catch(error => console.log(error))
    // }
}

export default API;