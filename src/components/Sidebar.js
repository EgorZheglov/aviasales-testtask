import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Sidebar(){

    const [isAllStopsChecked, setAllStopsChecked] = React.useState(true);

    const [isZeroStopsChecked, setZeroStopsChecked] = React.useState(false);
    const [isOneStopChecked, setOneStopChecked] = React.useState(false);
    const [isTwoStopsChecked, setTwoStopsChecked] = React.useState(false);
    const [isThreeStopsChecked, setThreeStopsChecked] = React.useState(false);
    
    //const [sortArray, setSortArray] = React.useState([]);
    //Массив для одобренных вариантов количества пересадок

    const dispatch = useDispatch()
    const stopsArray = useSelector(state => state.stopsArray)

    function changeSortArray(evt){
        //Функция, обновляющая массив количества пересадок в зависимости от состояния input'a
        if(evt.target.checked){
            dispatch({type:'CHANGE_ARRAY', payload:[...stopsArray, +evt.target.value]})
        }else{
            dispatch({type:'CHANGE_ARRAY', payload:stopsArray.filter(el => el !== +evt.target.value)})
        }
        return;
    }



    function toggleAllStopsChecked(evt){
        setAllStopsChecked(evt.target.checked);
        dispatch({type:'TOGGLE_STOPS', payload:evt.target.checked})
    }

    function toggleZeroStopsChecked(evt){
        setZeroStopsChecked(!isZeroStopsChecked);
        changeSortArray(evt)
    }

    function toggleOneStopChecked(evt){
        setOneStopChecked(!isOneStopChecked);
        changeSortArray(evt)
    }

    function toggleTwoStopsChecked(evt){
        setTwoStopsChecked(!isTwoStopsChecked);
        changeSortArray(evt)
    }

    function toggleThreeStopsChecked(evt){
        setThreeStopsChecked(!isThreeStopsChecked);
        changeSortArray(evt)
    }

    return (
        <div className='sidebar'>
            <h1 className='sidebar__header'>Количество пересадок</h1>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox'  checked={isAllStopsChecked} type='checkbox' id='all' onChange={toggleAllStopsChecked}/>
                <label className={`sidebar__label ${isAllStopsChecked?'sidebar__label_checked':''}`} htmlFor='all' ></label>
                Все
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' value={0} checked={isZeroStopsChecked} type='checkbox'  id='zerostops' onChange={toggleZeroStopsChecked}/>
                <label className={`sidebar__label ${isZeroStopsChecked?'sidebar__label_checked':''}`} htmlFor='zerostops' ></label>
                Без пересадок
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' value={1} checked={isOneStopChecked} type='checkbox' id='1stop' onChange={toggleOneStopChecked}/>
                <label className={`sidebar__label ${isOneStopChecked?'sidebar__label_checked':''}`} htmlFor='1stop'></label>
                1 пересадка
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' value={2} checked={isTwoStopsChecked} type='checkbox' id='2stops' onChange={toggleTwoStopsChecked}/>
                <label className={`sidebar__label ${isTwoStopsChecked?'sidebar__label_checked':''}`} htmlFor='2stops'></label>
                2 пересадки
            </div>
            <div className='sidebar__item'>
                <input className='sidebar__checkbox' value={3} checked={isThreeStopsChecked} type='checkbox' id='3stops' onChange={toggleThreeStopsChecked}/>
                <label className={`sidebar__label ${isThreeStopsChecked?'sidebar__label_checked':''}`} htmlFor='3stops'></label>
                3 пересадки
            </div>
        </div>
    );
}

export default Sidebar