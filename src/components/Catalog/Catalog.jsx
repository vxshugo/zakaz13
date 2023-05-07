import React from 'react'
import "./catalog.css"
import { Link } from 'react-router-dom'
const Catalog = ({link, name, option}) => {
  return (
    <div className='catalog'>
        <img src='https://media.discordapp.net/attachments/1050812814555615282/1103993925527687239/Rectangle_3.png'/>
        {option ? (
          <p>{option}</p>
        ) : <></>}
        <h4><Link style={{color: "inherit"}} to={link}>{name}</Link></h4>
    </div>
  )
}

export default Catalog