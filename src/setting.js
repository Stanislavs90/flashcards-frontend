let API_SERVER_VAL = '';

switch (process.env.NODE_ENV) {
   
    case 'development':
        API_SERVER_VAL = 'http://localhost:8000/flashcards/';
        console.log(process.env.NODE_ENV)
        break;
    case 'production':
        API_SERVER_VAL = process.env.REACT_APP_API_SERVER;
        console.log(process.env.NODE_ENV)
        break;
    default:
        API_SERVER_VAL = 'http://localhost:8000/flashcards/';
        console.log(process.env.NODE_ENV)
        break;
}

export const API_SERVER = API_SERVER_VAL;