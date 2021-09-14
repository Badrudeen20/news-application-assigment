import axios from 'axios'
const API_KEY = 'd0a049a664974a58a8c48c67ddf83b7c'
 export const HeadlinesApi = async (country,category)=>{
           try{
            const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
              return data
      
     }catch(error){
          console.log(error)
    }
}