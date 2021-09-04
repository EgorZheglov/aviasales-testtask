import logo from '../images/s7.png'

function Ticket(){
    return (
        <div className='main__ticket'>
            <div className='main__header'>
                <h2 className='main__price'>13 400р</h2>
                <img className='main__logo' src={logo} alt='Лого'/>
            </div>
            <div className='main__info'>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>MOW – HKT</h3>
                    <div className='main__info-value'>10:45 – 08:00</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>В пути</h3>
                    <div className='main__info-value'>21ч 15м</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>2 пересадки</h3>
                    <div className='main__info-value'>HKG, JNB</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>MOW – HKT</h3>
                    <div className='main__info-value'>11:20 – 00:50</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>В пути</h3>
                    <div className='main__info-value'>13ч 30м</div>
                </div>
                <div className='main__info-item'>
                    <h3 className='main__info-header'>1 пересадка</h3>
                    <div className='main__info-value'>HKG</div>
                </div>
            </div>
        </div>
    )
}

export default Ticket