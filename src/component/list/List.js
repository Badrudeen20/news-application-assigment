import React, { useEffect,useState } from 'react'
import { NewsApi } from '../api/NewsApi'
import { HeadlinesApi } from '../api/Headlines'
import News from '../news/News'
import { SearchContext } from '../../App'
import './style.scss'
import Headlines from '../headlines/Headlines'
const List = () => {
   const [news, setNews] = useState([])
   const [headlines,setHeadlines] = useState([])
   const [loading,setLoading] = useState(false)
   const [headlineLoading,setHeadlineLoading] = useState(false)
   const [category,setCategory] = useState('business')
   const [country,setCountry] = useState('at')
   const search = React.useContext(SearchContext)  
  
    useEffect(() => {
         setLoading(true)
         NewsApi(search).then(data=>{
             setNews(data.articles)
             setLoading(false)
         })
       
    },[search])


    useEffect(() => {
        setHeadlineLoading(true)
        HeadlinesApi(country,category).then(data=>{
            setHeadlines(data.articles)
            setHeadlineLoading(false)
        })
      
    },[country,category])
  

    //country
    function handleCountry(e){
        e.preventDefault()
        setCountry(e.target.value)
      
    }

    //category
    function handleCategory(e){
        e.preventDefault()
        setCategory(e.target.value)
    }

    
    
    return (
        <>
        <div className="center">
          <div className="container">
            <div className="grid-item">
            <h2 className="heading">News</h2>
                <ul>
                    {loading ? 'loading...' : <News news={news} /> }
                </ul>  
            </div>
            <div className="grid-item" >
            <h2 className="heading">Headlines</h2>
                <form>
                    <div className="form-control">
                        <label><strong>Category</strong></label>
                        <select name="cars" id="cars" onChange={handleCategory}>
                            <option value="business">Buisness</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>
                    </div>
                   
                    <div className="form-control">
                        <label><strong>Country</strong></label>
                        <select name="cars" id="cars" onChange={handleCountry}>
                            <option value="at">AT</option>
                            <option value="ar">AR</option>
                            <option value="ae">AE</option>
                            <option value="bg">BG</option>
                            <option value="hk">HK</option>
                            <option value="jp">JP</option>
                            <option value="au">AU</option>
                            <option value="cn">CN</option>
                            <option value="co">CO</option>
                            <option value="fr">FR</option>
                            <option value="in">IN</option>
                            <option value="ma">MA</option>
                            <option value="cz">CZ</option>
                            <option value="ph">PH</option>
                            <option value="ng">NG</option>
                            <option value="mx">MX</option>
                            <option value="nl">NL</option>
                            <option value="ro">RO</option>
                            <option value="sg">SG</option>
                        </select>
                    </div>

                </form>
                <ul>
                 
                  {headlineLoading ? 'loading...' : <Headlines headlines={headlines} /> }
                </ul>
            </div>
          </div>
        </div>  
        </>
    )
}

export default List
