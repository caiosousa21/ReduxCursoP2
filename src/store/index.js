import {createStore} from 'redux'

import reducers from './reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type:'ADD_PRODUCT', list:'mes', product:{name:'café'}})

export default store;