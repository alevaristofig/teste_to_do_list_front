import React, { useState, useEffect } from "react";
import axios from "axios";


//interfaces
import { IListas } from "../interfaces/Listas"; 

//css
import styles from './css/Listas.module.css';

interface Props {
    listas: IListas[],
    setListas?: React.Dispatch<React.SetStateAction<IListas[]>>
}

const ListasTable = ({listas, setListas}: Props) => {

    useEffect(() => {

        axios.get('http://localhost:8000/api/v1/todo/listas')                   
            .then((response) => {
                setListas!(response.data);
                return response.data;
            })
            .catch((error) => {                            
                return false;
            });
    },[]);

        const editarLista = (id: number) => {

        }

        const deletarLista = (id: number) => {
            axios.delete(`http://localhost:8000/api/v1/todo/listas/${id}`)                   
                .then((response) => {
                   // setListas!(response.data);
                    //return response.data;
                    alert("Lista removida com sucesso")
                })
                .catch((error) => {                            
                    return false;
                });
        }

    return(
        <>
            <div>               
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
                                        <i className='bi bi-pencil' onClick={() => editarLista(l.id)}></i>
                                        <i className='bi bi-trash' onClick={() => deletarLista(l.id)}></i>
                                    </div>
                                </div>
                            ))
                        )
                    :
                     (
                        <p>Não há listas cadastradas - { listas.length }</p>
                     )
                }
            </div>
        </>
    )
}

export default ListasTable;