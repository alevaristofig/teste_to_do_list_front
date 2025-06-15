import React, { useState, FormEvent } from "react";
import axios from "axios";

//interfaces
import { IListas } from "../interfaces/Listas";

//css
import styles from './css/ListasForm.module.css';

/*interface Props {
    btnText: string
}*/

const ListasForms = () => {

    const [titulo,setTitulo] = useState<string>('');

    const adicionarLista = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let dados = {
            'titulo': titulo
        }

        axios.post('http://localhost:8000/api/v1/todo/listas',dados)                   
            .then((response) => {
                //return response.data;
                alert('Lista cadastrada com Sucesso');
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
                </div>
                <input type="submit" value='Criar Listas' />
            </form>
        </>
    )
}

export default ListasForms;