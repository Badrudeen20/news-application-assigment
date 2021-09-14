import React, { createContext,useState } from 'react'
import './App.scss'
import Header from './component/header/Header'
import List from './component/list/List'

export const  SearchContext = React.createContext()
export const  UpdateSearchContext = React.createContext()

const App = () => {
  const [search,setSearch] = useState('india')
  console.log(search)
  return (
    <div>
     <SearchContext.Provider value={search}>
      <UpdateSearchContext.Provider value={setSearch}>
          <Header />
          <List />
      </UpdateSearchContext.Provider>  
    </SearchContext.Provider>   
    </div>
  )
}

export default App
