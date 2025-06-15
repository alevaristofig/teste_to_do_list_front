import React from 'react';

//components
import Header from './components/Header';

//css
import sytles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
       <main className={sytles.main}>
        <div>Menus</div>
       </main>
    </div>
  );
}

export default App;
