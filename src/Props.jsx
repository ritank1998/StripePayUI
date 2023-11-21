import { useEffect, useState } from "react"
import { handleBuyClick } from "./ApiController";

const Props=(props)=>{

    const [myData,setMydata]=useState(null);

    useEffect(()=>{
        setMydata(props.Products)
    },[props])

    

    const HandlerToBuy=(data)=>{
        const response=handleBuyClick(data)
    }
    return(
        <>
        {myData&&myData.map((data,index)=>{
       return  <li>
        <div className="card" >
        <img src={data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{data.name}</p>
          <p className="card-text">{data.price}</p>
        </div>
        </div>
        <button className="btn btn-primary" onClick={()=>HandlerToBuy(data)} >Buy</button>
      </li>
      })}</>
    )
}
export default Props