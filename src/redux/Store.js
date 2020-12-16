import { createStore } from 'redux'
import saveItemsReducer from './SaveReducer'

const store = createStore(saveItemsReducer)

export default store