import React from "react"
import { useState } from "react"
import { handleToBuyItem } from "./ApiController"
import Props from "./Props1"
const SingleItems = ()=>{
    const [items , setItems] = useState([
        {id: 1 , name: 'Apple' , price: 200 , img :"images/apple.jpg"},
        {id: 2 , name: 'Bada Apple' , price: 300 , img: "images/kiwi.jpg"},
        {id: 3, name: 'Chota Apple' , price: 400 , img: "images/dragon.jpg"}
      ])
      const handleToBuyItems = (item) =>{
        const response= handleToBuyItem(item)
      }
    return(
       <>
       <div>
       <h1 className='heading'>Items Pricing</h1>
          <ul>
            <li>
            <Props Items={items}/>
            </li>
          </ul>

       </div>
       </> 
    )
}
export default SingleItems