import React, { useState, FormEvent } from "react";
import axios from "axios";

//interfaces
import { IListas } from "../interfaces/Listas";

//css
import styles from './css/ListasForm.module.css';

const ListasForms = () => {

    const [titulo,setTitulo] = useState<string>('');
    const [tempo,setTempo] = useState<string>('');
    const [dificuldade,setDificuldade] = useState<string>('');

    const adicionarLista = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let dados = {
            'titulo': titulo,
            'tempo': tempo,
            'dificuldade': dificuldade
        }

        axios.post('http://localhost:8000/api/v1/todo/tarefas',dados)                   
            .then((response) => {                
                alert('Lista cadastrada com Sucesso');
                window.location.reload();
            })
            .catch((error) => {                            
                return false;
            });

        setTitulo('');
    }

    return(
        <>
            <form onSubmit={adicionarLista} className={styles.form}>
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
                    <input 
                        type='text' 
                        name='tempo' 
                        placeholder='Dificuldade da Tarefa' 
                        onChange={(e) => setDificuldade(e.target.value)} 
                        value={dificuldade}
                    />
                </div>
                <input type="submit" value='Criar Tarefa' />
            </form>
        </>
    )
}

export default ListasForms;