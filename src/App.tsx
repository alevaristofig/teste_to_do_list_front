import React, { useState } from 'react';

//interfaces
import { IListas } from './interfaces/Listas'; 

//components
import Header from './components/Header';

//css
import sytles from './App.module.css';
import Footer from './components/Footer';

//paginas
import ListasForms from './components/ListasForms';
import ListasTable from './components/ListasTable';

function App() {

  const [listas,setListas] = useState<IListas[]>([]);

  return (
    <div>
      <Header />
       <main className={sytles.main}>
          <div>
            <nav className={sytles.menu}>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Listas</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tarefas</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Listas de Tarefas</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <ListasForms btnText='Criar Listas'/>
                <ListasTable listas={listas} setListas={setListas} />
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                Tarefas
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">ListaAAA de Tarefas</div>
            </div>
          </div>
       </main>
       <Footer />
    </div>
  );
}

export default App;
