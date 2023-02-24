import React from 'react'
import "./Navbar.css"
import { AiFillCloseCircle,AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiFillInstagram } from "react-icons/ai"

export default function Navbar() {
    return (
        <div>
            <div className='header flex'>
                <div className="logoDiv">
                    <h3 className="logo">Wonder</h3>
                </div>
                <div className="menuDiv">
                    <ul className="menuLists">
                        <li className="navItem">
                            <a href="#" className="menuLinks">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">Our Tour</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">Gallery</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">Blog</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">Contact</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="menuLinks">Pages</a>
                        </li>
                    </ul>
                    <div className="closeNavbar">
                        <AiFillCloseCircle className='icons'/>
                    </div>
                </div>
                <div className="socialIcon flex">
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillYoutube/>
                    <AiFillInstagram/>                
                </div>
            </div>
        </div>
    )
}
