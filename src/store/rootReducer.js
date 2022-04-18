import { combineReducers } from 'redux'
import authReducer from '../modules/auth/auth.slicer'
import studentReducer from '../modules/school/dashboard/dashboard.slicer'

const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
})

export default rootReducer