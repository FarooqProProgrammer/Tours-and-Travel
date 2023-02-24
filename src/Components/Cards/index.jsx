import React from 'react'
import "./Card.css"
import CardOne from "../../assets/Card1.jpg"
import { data } from './CardData'


export const Cards = () => {
  return (
    <div className='Card grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-10'>
      {
        data.map((item)=>{
          return(
            <div className="cardContent flex flex-col">
            <img src={item.img} alt="" />
            <div className="Content">
              <h4>{item.h4}</h4>
              <button>View</button>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}
