import { createStore } from 'redux'

const initialState = {
    name: "",
    tiempo_transcurrido: 0,
    intentos_fallidos: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type)
    {
        case "INGRESO_USUARIO":
            return {
                ...action.payload
            }
        case "RESET_GAME":
            return initialState
        default:
            return state;
    }
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
