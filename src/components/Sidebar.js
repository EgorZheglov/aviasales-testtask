import Ticket from "./Ticket";
import React from 'react';

function Sidebar(){
    const [isChecked, setChecked] = React.useState(false)
    
    function toggleChecked(evt){
        console.log(evt.target.id)
        setChecked(!isChecked);
    }

    return (
        <div className='sidebar'>
            <h1 className='sidebar__header'>Количество пересадок</h1>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' type='checkbox' id='all' onInput={toggleChecked}/>
                <label className={`sidebar__label ${isChecked?'sidebar__label_checked':''}`} for='all' ></label>
                Все
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' type='checkbox' id='notransfers'/>
                <label className='sidebar__label' for='notransfers'></label>
                Без пересадок
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' type='checkbox' id='1transfer'/>
                <label className='sidebar__label' for='1transfer'></label>
                1 пересадка
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' type='checkbox' id='1transfer'/>
                <label className='sidebar__label' for='2transfers'></label>
                2 пересадки
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' type='checkbox' id='1transfer'/>
                <label className='sidebar__label' for='3transfers'></label>
                3 пересадки
            </div>
        </div>
    );
}

export default Sidebar