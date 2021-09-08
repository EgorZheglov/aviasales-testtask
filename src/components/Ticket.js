import logo from '../images/s7.png'

function Ticket(props){

    const data = props.data;
     

    console.log(data)

    const dateOrigin = new Date(data.segments[0].date)

    const originArrivalHours = (dateOrigin.getHours() + Math.floor(data.segments[0].duration/60)) % 24;
    const originArrivalMinutes = (dateOrigin.getMinutes() + (data.segments[0].duration % 60)) % 60;
    

    const dateDestination = new Date(data.segments[0].date);

    const destinationArrivalHours = (dateDestination.getHours() + Math.floor(data.segments[1].duration/60)) % 24;
    const destinationArrivalMinutes = (dateDestination.getMinutes() + (data.segments[1].duration % 60)) % 60;


    return (
        <div className='main__ticket'>
            <div className='main__header'>
                <h2 className='main__price'>{data.price}р</h2>
                <img className='main__logo' src={`https://pics.avs.io/99/36/${data.carrier}.png`} alt='Лого'/>
            </div>
            <div className='main__info'>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>{data.segments[0].origin} – {data.segments[0].destination}</h3>
                    <div className='main__info-value'>{dateOrigin.getHours() < 10 ? `0${dateOrigin.getHours()}`:`${dateOrigin.getHours()}`}:{dateOrigin.getMinutes() < 10 ? `0${dateOrigin.getMinutes()}`:`${dateOrigin.getMinutes()}`} – {originArrivalHours < 10 ? `0${originArrivalHours}`:`${originArrivalHours}`}:{originArrivalMinutes < 10 ? `0${originArrivalMinutes}`:`${originArrivalMinutes}`}</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>В пути</h3>
                    <div className='main__info-value'>{Math.floor(data.segments[0].duration/60)}ч {data.segments[0].duration % 60}м</div>
                    {/*В документации к api не указано, в каком формате приходит время*/}
                </div>
                <div className='main__info-item'>
                    {data.segments[0].stops.length !== 0 ? (<>
                    <h3 className='main__info-header'>{data.segments[0].stops.length === 1 ? '1 пересадка' : `${data.segments[0].stops.length} пересадки`}</h3>
                    <div className='main__info-value'>{data.segments[0].stops.reduce((prevVal, el) => prevVal + ', ' + el)}</div> </>):(<h3 className='main__info-header'>0 пересадок</h3>)}
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>{data.segments[1].origin} – {data.segments[1].destination}</h3>
                    <div className='main__info-value'>{dateDestination.getHours() < 10 ? `0${dateDestination.getHours()}`:`${dateDestination.getHours()}`}:{dateDestination.getMinutes() < 10 ? `0${dateDestination.getMinutes()}`:`${dateDestination.getMinutes()}`} – {destinationArrivalHours < 10 ? `0${destinationArrivalHours}`:`${destinationArrivalHours}`}:{destinationArrivalMinutes < 10 ? `0${destinationArrivalMinutes}`:`${destinationArrivalMinutes}`}</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>В пути</h3>
                    <div className='main__info-value'>{Math.floor(data.segments[1].duration/60)}ч {data.segments[1].duration % 60}м</div>
                </div>
                <div className='main__info-item'>
                    {data.segments[1].stops.length !== 0 ? (<>
                    <h3 className='main__info-header'>{data.segments[1].stops.length === 1 ? '1 пересадка' : `${data.segments[1].stops.length} пересадки`}</h3>
                    <div className='main__info-value'>{data.segments[1].stops.reduce((prevVal, el) => prevVal + ', ' + el)}</div> 
                    </>):(<h3 className='main__info-header'>0 пересадок</h3>)}
                </div>
            </div>
        </div>
    )
}

export default Ticket