import React from 'react'
const News = ({news}) => {
   
    return (
        <>
            {news?.filter((data)=>data.urlToImage !=null).map((data,i)=>(
                <li key={i}>
                 
                    <div className="img">
                        <img src={data.urlToImage} />
                    </div>
                    <h4 className="content">{data.content}</h4>
                </li>
            ))}
        </>
    )
}

export default News
