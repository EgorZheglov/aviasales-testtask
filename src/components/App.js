import Header from './Header';
import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';


function App() {

  return (
    <div className="page">
      <Header />
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
