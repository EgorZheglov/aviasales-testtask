class Api{
    constructor(url){
        this._url = url;
    }


    _checkResponse(res) {
        //проверка ответа на запрос
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(res.status)
    }

    getSearchId(){
        return fetch(`${this._url}/search`)
        .then(this._checkResponse)
    }
    
    getInitialTickets(searhcID){
        //получаем билеты
        return fetch(`${this._url}/tickets?searchId=${searhcID}`)
        .then(this._checkResponse)
    }
}

const api = new Api('https://front-test.beta.aviasales.ru');

export default api;