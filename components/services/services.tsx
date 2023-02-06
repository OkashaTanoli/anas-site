import React from 'react';
import Image from 'next/image';
import { HiBadgeCheck } from 'react-icons/hi'
import './services.css'
import Img from '../../public/services.png'

let services = [
    "Web and Mobile App Developemnt",
    "Emmbeded System Design and Developemnt",
    "IoT System Application Developemnt",
    "Smart Home Automation",
    "AI App Development",
    "ML Sys Development",
    "Android App Developemnt",
    "iOS App Developemnt",
    "E-Commerce Development",
    "Portfolio Site Development",
]


function Services() {

    return (
        <div className={`services_main`} id='services'>
            <div className='overlay'></div>
            <h2>Services</h2>
            <div className={`services_div`}>
                <div className='first_div'>
                    <div className='services_item_div'>
                        {
                            services.map((val, index) => {
                                return (
                                    <div className='each_service' key={index}>
                                        <HiBadgeCheck className='check_icon' />
                                        <p className='service_detail'>{val}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='second_div'>
                    <Image src={Img} alt='img' className='services_img' />
                </div>
            </div>
        </div>
    );
}

export default Services;
