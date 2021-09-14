import React from 'react'
const Headlines = ({ headlines}) => {
   
    return (
        <>
            { headlines?.filter((data)=>data.urlToImage !=null).map((data,i)=>(
                <li key={i}>
                   <h4 className="headlines"><strong>{i+1} :</strong> {data.title}</h4>
                </li>
            ))}
        </>
    )
}

export default  Headlines
