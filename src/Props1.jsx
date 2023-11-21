import { useEffect, useState } from "react"
import { handleToBuyItem } from "./ApiController";

const Props=(props)=>{

    const [myData,setMydata]=useState(null);

    useEffect(()=>{
        setMydata(props.Items)
    },[props])

    

    const HandlerToBuy=(data)=>{
        const response=handleToBuyItem(data)
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