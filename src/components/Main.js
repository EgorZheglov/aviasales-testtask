import Ticket from "./Ticket";
import React from 'react';

function Main(){
    return (
        <div className='main'>
          <div className='main__tabs'>
              <button className='main__tab main__tab_is-active'>Самый быстрый</button>
              <button className='main__tab'>Самый дешевый</button>
          </div>
          <Ticket />
        </div>
    );
}

export default Main;


