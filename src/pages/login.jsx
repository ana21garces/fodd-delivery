import React from 'react'
import '../styles/Login.css'
import logo from '../assets/Delivery.png'
import { ButtonsLogin } from '../components/ButtonsLogin'

export const Login = () => {
    return (
        <div className="container_principal">
            <img className="Delivery" src={logo} alt="logo delivery"/>
            <Line />
            <ButtonsLogin />
            



            
        </div>
    )
}