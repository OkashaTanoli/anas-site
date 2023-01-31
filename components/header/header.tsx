'use client'
import React, { useState } from "react";
import Image from "next/image";
import './header.css'
import { VscClose } from 'react-icons/vsc'
import { BiMenuAltRight } from 'react-icons/bi'
import Img from '../../public/logo.png'



export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={`responsive_menu ${isOpen ? 'responsive_menu_open' : 'responsive_menu_closed'}`}>
                <VscClose className="close_icon" onClick={() => setIsOpen(false)} />
                <div className='responsive_menu_item'>
                    <div><a href="#home">Home</a></div>
                    <div><a href="#services">Services</a></div>
                    <div><a href="#team">Our Team</a></div>
                    <div><a href="#contact">Contact</a></div>
                </div>
            </div>
            <div className={`header`}>
                <Image src={Img} alt='Image' width={200} />
                <BiMenuAltRight onClick={() => setIsOpen(true)} className="menu_icon" />
                <div className='menu_item'>
                    <div><a href="#home">Home</a></div>
                    <div><a href="#services">Services</a></div>
                    <div><a href="#team">Our Team</a></div>
                    <div><a href="#contact">Contact</a></div>
                </div>
            </div>
        </>
    )
}