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
             console.log(res)
             setTicketsArray(res.tickets)
             setIsloading(false);
          })
        })
      }, [])

    function setSortSpeed(){
        setSortBySpeed(true)
        setSortByPrice(false)
        ticketsArray.sort((a,b) => {
            let timeA = a.segments[0].duration + a.segments[1].duration
            let timeB = b.segments[0].duration + b.segments[1].duration

            return timeA - timeB;
        })
    }

    function setSortPrice(){
        setSortBySpeed(false);
        setSortByPrice(true);
        ticketsArray.sort((a,b) => a.price - b.price)
    }


    return (
        <div className='main'>
          <div className='main__tabs'>
              <button className={`main__tab ${sortBySpeed ? `main__tab_is-active`:``}`} onClick={setSortSpeed}>Самый быстрый</button>
              <button className={`main__tab ${sortByPrice ? `main__tab_is-active`:``}`} onClick={setSortPrice}>Самый дешевый</button>
          </div>
          {!isLoading && ticketsArray.slice(0, ticketsCount).map((ticket) => <Ticket data={ticket}/>)}
        </div>
    );
}

export default Main;


