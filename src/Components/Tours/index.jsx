import React from 'react'
import CardOne from '../../assets/Card1.jpg'
import CardTwo from '../../assets/Card2.jpg'
import CardThree from '../../assets/Card3.jpg'
import CardFour from '../../assets/Card4.jpg'



export const Tours = () => {
  const Data = [
    {
      img:CardOne,
      Name:'Paris',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante sit amet dui euismod porttitor.'
    },
    {
      img:CardFour,
      Name:'London',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante sit amet dui euismod porttitor.'
    },
    {
      img:CardThree,
      Name:'Switzerland',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante sit amet dui euismod porttitor.'
    },
    
    
  ]
  return (
    <div class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <h2 class="text-4xl  mb-8 text-center text-[#3ab3a7] font-bold">Featured Tours</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          Data.map((item)=>{
            return(
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img class="w-full h-[50%]" src={item.img} alt="Tour"/>
                  <div class="p-6">
                    <h3 class="text-2xl font-bold mb-4">{item.Name}</h3>
                    <p class="text-gray-600 mb-4">{item.text}</p>
                    <div class="flex justify-between items-center">
                      <p class="text-gray-700 font-bold">$500</p>
                      <a href="#" class="bg-[#3ab3a7] hover:text-[#3ab3a7] hover:bg-white hover:border-2 hover:border-[#3ab3a7] text-white font-bold py-2 px-4 rounded">Book Now</a>
                    </div>
                  </div>
                </div>
            )
          })
        }
        
      </div>
    </div>
  </div>
  
  )
}
