import Ticket from "./Ticket";
import React from 'react';
import api from "../services/api";

function Main(){

    const [ticketsArray, setTicketsArray] = React.useState([])
    const [sortBySpeed, setSortBySpeed] = React.useState(true);
    const [sortByPrice, setSortByPrice] = React.useState(false);
    const [isLoading, setIsloading] = React.useState(true);
    const [ticketsCount, setTicketsCount] = React.useState(5);

    React.useEffect(() =>{
        api.getSearchId()
        .then(res =>{
          api.getInitialTickets(res.searchId)
          .then(res => {
             setTicketsArray(res.tickets.sort(speedSort))

             setIsloading(false);
          })
        })
      }, [])


    function speedSort(a, b){
        let timeA = a.segments[0].duration + a.segments[1].duration
        let timeB = b.segments[0].duration + b.segments[1].duration

        return timeA - timeB;
    }

    function priceSort(a, b){
        return a.price - b.price
    }

    function setSortSpeed(){
        setSortBySpeed(true);
        setSortByPrice(false);

        setTicketsArray(ticketsArray.sort(speedSort));
    }

    function setSortPrice(){
        setSortBySpeed(false);
        setSortByPrice(true);

        setTicketsArray(ticketsArray.sort(priceSort));
    }

    function showTickets(){
        setTicketsCount(ticketsCount + 5)
    }

    return (
        <div className='main'>
          <div className='main__tabs'>
              <button className={`main__tab ${sortBySpeed ? `main__tab_is-active`:``}`} onClick={setSortSpeed}>Самый быстрый</button>
              <button className={`main__tab ${sortByPrice ? `main__tab_is-active`:``}`} onClick={setSortPrice}>Самый дешевый</button>
          </div>
          {!isLoading && ticketsArray.slice(0, ticketsCount).map((ticket, i) => <Ticket key={i} data={ticket}/>)}
          {/*Вообще, индекс массива не стоит передовать как индентефикатор, но в данной работе на об компонентах билетов не происходит никаких событй, поэтому можно опустить этот момент */}
          <button className='main__button' onClick={showTickets}>Показать еще 5 билетов!</button>
        </div>
    );
}

export default Main;


