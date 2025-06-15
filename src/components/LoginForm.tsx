import React, { useState, FormEvent } from "react";
import axios from "axios";

//css
import styles from './css/TarefasForm.module.css';

const LoginForm = () => {

     const [email, setEmail] = useState<string>('');
     const [password, setPassword] = useState<string>('');

     const logar = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

         let dados = {
            'email': email,
            'password': password
        }

        axios.post('http://localhost:8000/api/v1/todo/login',dados)                   
            .then((response) => {                
                sessionStorage.setItem('token',response.data.token);

                let form = document.getElementById('formLogin');
                let formTarefa = document.getElementById('formTarefa');
                let divListaTarefa = document.getElementById('divListaTarefas');

                if(form && formTarefa && divListaTarefa) {
                    form.style.display = 'none';
                    formTarefa.style.display = 'flex';
                    divListaTarefa.style.display = 'flex';
                }
            })
            .catch((error) => {                       
                return false;
            });
     }

    return(
        <>
            <form id="formLogin" onSubmit={logar} className={styles.form}>
                <div className={styles.input_container}>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                    />
                    <input type="submit" value='Logar' />
                </div>
            </form>
        </>
    )
}

export default LoginForm;