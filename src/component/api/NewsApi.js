import axios from 'axios'
const API_KEY = 'd0a049a664974a58a8c48c67ddf83b7c'
 export const NewsApi = async (search)=>{
           try{
            const {data} = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
              return data
      
     }catch(error){
          console.log(error)
    }
}