import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import Delivery from '../assets/Delivery.png'
import axios from 'axios'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [names, setNames] = useState("");
    const [lastnames, setLastNames] = useState("");
    const [email, setEmail] = useState("");

    const registerService = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password,
            names: names,
            lastnames: lastnames, 
            email: email
        }
        await axios.post("https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar", data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == 201) { 
                    Swal.fire({
                        title: '¡Bienvenido!',
                        text: 'Registro exitoso',
                        icon: 'success',
                        confirmButtonText: 'Entendido'
                    }).then(() => {
                        navigate("/iniciarSesion");
                    });
                }
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    title: 'Error',
                    text:'Hay un problema, intentalo mas tarde',
                    icon:'error',
                    confirmButtonText:'Entendido'
                })
            })
    }

    return (
        <div className="container_principal">
            <img className="delivery" src={Delivery} alt="delivery" />
           
            <div className='w-full h-20 mt-44 flex flex-col justify-center items-center'>
                <h5 className='font-bold text-2xl text-gray-950 pt-9 font-serif'>Register</h5>
                <input type='email' placeholder='Username' className='mt-7 border-2 rounded-lg w-[250px] ml-3' onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' className='mt-7 border-2 rounded-lg w-[250px]  ml-3' onChange={(e) => setPassword(e.target.value)} />
                <input type='text' placeholder='Nombre' className='mt-7 border-2 rounded-lg w-[250px]  ml-3' onChange={(e) => setNames(e.target.value)} />
                <input type='text' placeholder='Apellido' className='mt-7 border-2 rounded-lg w-[250px]  ml-3' onChange={(e) => setLastNames(e.target.value)} />
                <input type='email' placeholder='Email' className='mt-7 border-2 rounded-lg w-[250px]  ml-3' onChange={(e) => setEmail(e.target.value)} />
                <button className='mt-5 bg-[#121534] w-20 text-white rounded-lg' onClick={registerService}>Register</button>
            </div>
        </div>
    )
}
