import { createStore } from 'redux'
import { SET_LOGIN, SET_USERNAME } from './actionType';

let state = {
    isLogin: false,
    username: ''
}

function reducer(preState = state, action) {

    switch (action.type) {
        case SET_LOGIN:
            return Object.assign({}, preState, {
                isLogin: action.data
            })
        case SET_USERNAME:
            return Object.assign({}, preState, {
                username: action.data
            })
        default:
            return preState
    }
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store