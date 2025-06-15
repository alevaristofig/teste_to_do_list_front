import React, { useEffect, useState, FormEvent } from "react";
import axios from "axios";

//interfaces
import { ITarefas } from "../interfaces/Tarefas"; 
//css
import styles from './css/TarefasForm.module.css';

const TarefasForm = () => {

    const [titulo,setTitulo] = useState<string>('');
    const [tempo,setTempo] = useState<string>('');
    const [finalizada,setFinalizada] = useState<string>('');

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {      
            let form = document.getElementById('formTarefa');

            if(form) {
                 form.style.display = 'none';
            }
        } else {
            let form = document.getElementById('formTarefa');
            let formLogin = document.getElementById('formLogin');

            if(form && formLogin) {
                 form.style.display = 'flex';
                 formLogin.style.display = 'none';
            }
        }
    },[])

    const adicionarLista = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let dados = {
            'titulo': titulo,
            'tempo': tempo,
            'finalizada': finalizada
        }

        axios.post('http://localhost:8000/api/v1/todo/tarefas',dados,{
                headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`,                
                }
            })                   
            .then((response) => {                
                alert('Lista cadastrada com Sucesso');
                window.location.reload();
            })
            .catch((error) => {                            
                return false;
            });

        setTitulo('');
        setTempo('');
        setFinalizada('');
    }

    return(
        <>
            <form id="formTarefa" onSubmit={adicionarLista} className={styles.form}>
                <div className={styles.input_container}>
                    <input 
                        type='text' 
                        name='titulo' 
                        placeholder='Título da Lista' 
                        onChange={(e) => setTitulo(e.target.value)} 
                        value={titulo}
                    />
                    <input 
                        type='text' 
                        name='tempo' 
                        placeholder='Tempo da Tarefa' 
                        onChange={(e) => setTempo(e.target.value)} 
                        value={tempo}
                    />
                    <div className="text-start">
                        <label className="me-2">Finalizada</label>
                        <input 
                            type='radio' 
                            name='finalizada'                         
                            onChange={(e) => setFinalizada(e.target.value)} 
                            value="S"
                        /> Sim
                        <input 
                            className="ms-3"
                            type='radio' 
                            name='finalizada'                        
                            onChange={(e) => setFinalizada(e.target.value)} 
                            value="N"
                        /> Não
                    </div>
                </div>
                <input type="submit" value='Criar Tarefa' />
            </form>
        </>
    )
}

export default TarefasForm;