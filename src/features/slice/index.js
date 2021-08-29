import { combineReducers } from 'redux'

import productListModelSlice from './productListModelSlice'

const rootReducer = combineReducers({
    productList: productListModelSlice,
})

export default rootReducer
