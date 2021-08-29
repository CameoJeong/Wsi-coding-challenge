import { createSlice } from '@reduxjs/toolkit'

import {
  getProductList,
} from '@/api'

export const initialState = {
  productList: [],
  loading: false,
}

const productListModelSlice = createSlice({
  name: 'productListModelSlice',
  initialState,
  reducers: {
    getProductListStart: (state, action) => {
      state.loading = true
    },
    getProductListSuccess: (state, action) => {
      state.loading = false
      if (action.payload.data) {
        state.productList = action.payload.data
      }
    },
    getProductListFailure: (state, action) => {
      state.loading = false
    },
  },
})

const productList = (key) => {
  return async dispatch => {
    dispatch(productListModelSlice.actions.getProductListStart())
    const result = await getProductList(key)
    if (result.status === 200) {
      dispatch(productListModelSlice.actions.getProductListSuccess({ data: result.data }))
    }
    else {
      dispatch(productListModelSlice.actions.getProductListFailure())
    }
  }
}

const productListModelSelector = state => state.productList

export {
  productListModelSelector,
  productList,
}

export default productListModelSlice.reducer
