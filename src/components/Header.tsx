import React from 'react';
import axios from 'axios';

import styles from './Header.module.css';

const Header = () => {

    const logout = () => {
         axios.get(`http://localhost:8000/api/v1/todo/logout`,{
                    headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`,                
                    }
                })                   
                .then((response) => {    
                    
                    sessionStorage.removeItem('token');

                    let form = document.getElementById('formLogin');
                    let formTarefa = document.getElementById('formTarefa');
                    let divListaTarefa = document.getElementById('divListaTarefas');

                    if(form && formTarefa && divListaTarefa) {
                        form.style.display = 'flex';
                        formTarefa.style.display = 'none';
                        divListaTarefa.style.display = 'none';
                    }                    
                })
                .catch((error) => {                            
                    return false;
                });
    }

    return (
        <header className={styles.header}>
            <h1>Todo Do List</h1>
            <button className={`${styles.button_sair} btn btn-light`} onClick={() => logout()}>Sair</button>
        </header>
    )
}

export default Header;