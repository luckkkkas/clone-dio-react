import axios from  'axios' ;

const api = axios.create({
    
    baseURl: 'http://localhost:8001'

})
    export {api};