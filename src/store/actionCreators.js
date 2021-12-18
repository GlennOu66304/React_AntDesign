import { SET_LOGIN, SET_USERNAME } from './actionType';

function setLogin(data) {
    return {
        type: SET_LOGIN,
        data
    }
}

function setName(data) {
    return {
        type: SET_USERNAME,
        data
    }
}

export {
    setLogin,
    setName
}