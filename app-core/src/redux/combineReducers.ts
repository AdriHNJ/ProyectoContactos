import { combineReducers } from 'redux'
import { configReducer } from './reducers/configReducers'
import { expedienteReducer } from '../pages/expedientePage/redux/expedienteReducer'

import {
  userReducer,
  userResetReducer,
} from '../pages/loginPage/redux/authReducer'
import { sharedUtilsReducer } from './reducers/sharedUtilsReducer'

const rootReducer = combineReducers({
  expediente: expedienteReducer,
  user: userReducer,
  config: configReducer,
  resetPasswd: userResetReducer,
  sharedUtils: sharedUtilsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
