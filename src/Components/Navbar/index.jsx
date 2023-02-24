import React from 'react'
import "./Navbar.css"
import { FaBars } from "react-icons/fa"


export default function Navbar() {
    return (
        <div className='header'>
            <h3>Travel Partner</h3>
            <ul className="menuLinks">
                <li>Home</li>
                <li>Travel</li>
                <li>Contact</li>
                <li>FeedBack</li>
            </ul>
            <div className="icons">
                <FaBars className='icon' style={{color:'white',fontWeight:900,cursor:'pointer'}}/>
            </div>
        </div>
    )
}
