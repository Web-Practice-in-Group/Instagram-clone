import {createStore} from 'redux';

function reducers() {
    return {
        count: '0'
    };
}

export default () => {
    return {
        ...createStore(reducers),
    };
};