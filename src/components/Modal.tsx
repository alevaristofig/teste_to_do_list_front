import React, { useEffect, useState, FormEvent } from "react";
import axios from "axios";

//interfaces
import { IListas } from "../interfaces/Listas"; 

//css
import styles from './css/Modal.module.css';
import stylesForm from './css/ListasForm.module.css';

interface Props {
    dados?: IListas,
   // titulo?: string,
    //setTitulo?: React.Dispatch<React.SetStateAction<string>>,
}

const Modal = ({dados}: Props) => {

    const [titulo,setTitulo] = useState<string>('');
    const [tempo,setTempo] = useState<string>('');
    const [dificuldade,setDificuldade] = useState<string>('');

    const fecharModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("d-none");
    };

    const editarLista = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       // alert(dados?.id+','+titulo+','+tempo+','+dificuldade)

        let data = {
            'id': dados?.id,
            'titulo': titulo,
            'tempo': tempo,
            'dificuldade': dificuldade
        }

        axios.put(`http://localhost:8000/api/v1/todo/tarefas/${dados?.id}`,data)                   
            .then((response) => {               
                alert('Tarefa editada com Sucesso');
                window.location.reload();
            })
            .catch((error) => {                            
                return false;
            });
    }

    return(
        <>
            <div id="modal" className='d-none'>            
            <div className={styles.modal}>
                <form onSubmit={editarLista} className={stylesForm.form}>
                    <div className={stylesForm.input_container}>
                        <input 
                            type='text' 
                            name='titulo' 
                            placeholder='Título da Lista' 
                            onChange={(e) => setTitulo(e.target.value)} 
                            defaultValue={dados?.titulo}
                        />
                        <input 
                        type='text' 
                        name='tempo' 
                        placeholder='Tempo da Tarefa' 
                        onChange={(e) => setTempo(e.target.value)} 
                        defaultValue={dados?.tempo}
                    />
                    <input 
                        type='text' 
                        name='tempo' 
                        placeholder='Dificuldade da Tarefa' 
                        onChange={(e) => setDificuldade(e.target.value)} 
                        defaultValue={dados?.dificuldade}
                    />
                    </div>
                    <input type="submit" value='Editar Lista' />
                    <div onClick={fecharModal} className="mt-2 text-danger fs-5 pe-auto">X</div>
                </form>
                
            </div>
        </div>
        </>
    )
}

export default Modal;