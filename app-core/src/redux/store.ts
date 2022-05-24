import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './combineReducers'

const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
/* store.subscribe(() => {
  console.log('State Updated')
  console.log(store.getState())
}) */
export default store
