import * as React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert2";
import Layout from './Layout';
import Cookies from 'universal-cookie';



export default function Login() {

    const [formValue, setformValue] = React.useState({
        username: "",
        password: "",
    });
    const [username,setUsername] = React.useState('')

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const baseURL = "http://localhost:8000/api/v1.0/login";

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginFormData = new FormData();
        loginFormData.append("username", formValue.username);
        loginFormData.append("password", formValue.password);
        setUsername( formValue.username )
        axios
            .post(baseURL, loginFormData)
            .then((response) => {
                console.log(response.data);
                window.location.href = 'http://localhost:3000/homepage/'
                const cookie = new Cookies()
                cookie.set('username', username, { path: "/" })
            })
            .catch((error) => {
                console.log(error.response.data);

                new swal({
                    title: "Error",
                    icon: "error",
                    text: JSON.stringify(error.response.data)
                        .replaceAll("[", "")
                        .replaceAll("]", "")
                        .replaceAll("{", "")
                        .replaceAll("}", "")
                        .replaceAll(",", "\n")
                        .replaceAll('"', "")
                        .replaceAll('non_field_errors:Unable to log in with provided credentials.', 'El usuario que ingresaste no existe o la contraseña es incorrecta, prueba de nuevo.'),
                });
            });
    };


    return (
        <Layout>
               <form onSubmit={handleSubmit}>
            <div className='bg-white px-10 py-20 rounded-3xl border-2 border-2 border-gray-100'>
                <h1 className='text-5xl font-semibold'>Bienvenido de vuelta</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Bienvenido de vuelta! Ingrese sus datos.</p>
                <div className='mt-8 '>
                    <div>
                        <label className='text-lg font-medium'>Nombre de usuario</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu usuario'
                            name='username'
                            id='username'
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className='text-lg font-medium'>Contraseña</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu contraseña'
                            type='password'
                            id='password'
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <input
                                type='checkbox'
                                id='Recordar'
                            />
                            <label
                                className='ml-2 font-medium text-base'
                                for="Recordar">Recordearme por 30 días</label>
                        </div>
                        <button className='font-medium text-base text-green-500'>¿Olvido su contraseña?</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.95] active:duration-75 hover:scale-[1.02] easy-in-out transition-all  py-3 rounded-xl bg-green-500 text-white text-lg font-bold' type='submit'>Iniciar sesión</button>

                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>¿No tienes cuenta?</p>
                        <a href='Register'>
                            <button className='text-green-500 text-base font-medium ml-2'>Registrarse</button>
                        </a>
                    </div>
                </div>
            </div>
            </form>
        </Layout>
    )
}