import React, { useState } from "react";

//interfaces
import { IListas } from "../interfaces/Listas";

//css
import styles from './css/ListasForm.module.css';

interface Props {
    btnText: string
}

const ListasForms = ({btnText}: Props) => {

    const [titulo,setTitulo] = useState<string>('');

    return(
        <>
            <form className={styles.form}>
                <div className={styles.input_container}>
                    <input 
                        type='text' 
                        name='titulo' 
                        placeholder='Título da Lista' 
                        onChange={(e) => setTitulo(e.target.value)} 
                        value={titulo}
                    />
                </div>
                <input type="submit" value={btnText} />
            </form>
        </>
    )
}

export default ListasForms;