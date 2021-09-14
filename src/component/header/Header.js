import React, { useRef } from 'react'
import './style.scss'
import {UpdateSearchContext} from '../../App'

const Header = () => {
    const setSearch = React.useContext(UpdateSearchContext)  
    const searchText = useRef(null);
    function handleSubmit(e){
         e.preventDefault()
         if(searchText.current.value=='') return
         setSearch(searchText.current.value)
         searchText.current.value = ''

    }
    return (
        <>
            <nav>
                <div>
                    <h3>News App</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search News" ref={searchText}  />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header
