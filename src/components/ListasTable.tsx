import React, { useState, useEffect } from "react";
import axios from "axios";


//interfaces
import { IListas } from "../interfaces/Listas"; 

//css
import styles from './css/Listas.module.css';

interface Props {
    listas: IListas[],
    setListas?: React.Dispatch<React.SetStateAction<IListas[]>>,
    mostrarOuEsconderModal(dados: IListas): void
}

const ListasTable = ({listas, setListas, mostrarOuEsconderModal}: Props) => {

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {      
            let form = document.getElementById('divListaTarefas');

            if(form) {
                 form.style.display = 'none';
            }
        } else {
            let form = document.getElementById('divListaTarefas');
            let formLogin = document.getElementById('formLogin');

            if(form && formLogin) {
                 form.style.display = 'flex';
                 formLogin.style.display = 'none';
            }
        }

        axios.get('http://localhost:8000/api/v1/todo/tarefas',{
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`,                
                }
            })                   
            .then((response) => {
                setListas!(response.data);
                return response.data;
            })
            .catch((error) => {                            
                return false;
            });
    },[]);

    const deletarLista = (id: number) => {
            axios.delete(`http://localhost:8000/api/v1/todo/tarefas/${id}`,{
                    headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`,                
                    }
                })                   
                .then((response) => {                  
                    alert("Lista removida com sucesso");
                     window.location.reload();
                })
                .catch((error) => {                            
                    return false;
                });
        }

    return(
        <>
            <div id="divListaTarefas" className={styles.hideDiv}>               
                {
                    listas.length > 0
                    ?
                        (
                            listas.map((l) => (
                                <div key={l.id} className={styles.listas}>
                                    <div className={styles.detalhes}>
                                        <h4>{l.titulo}</h4>                                    
                                    </div>
                                    <div className={styles.acoes}>
                                        <i className='bi bi-pencil' onClick={() => mostrarOuEsconderModal(l)}></i>
                                        <i className='bi bi-trash' onClick={() => deletarLista(l.id)}></i>
                                    </div>
                                </div>
                            ))
                        )
                    :
                     (
                        <p>Não há listas cadastradas</p>
                     )
                }
            </div>
        </>
    )
}

export default ListasTable;