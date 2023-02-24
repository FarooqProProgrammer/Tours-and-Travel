import React from 'react'
import "./Home.css"
import Input from '../../ReUseable/Input'
import Button from '../../ReUseable/Button'



export const Home = () => {
  return (
    <div className='Home'>
      <Input type="text" borderRadius={10}  placeholder='Search Your Favourite destination' />
      <Button title="Go"/>
    </div>
  )
}
