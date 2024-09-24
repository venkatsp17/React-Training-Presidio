import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[
        {
            id: 1,
            name: 'Apple',
            price: 145.83,
        },
        {
            id: 2,
            name: 'Microsoft Corporation',
            price: 277.65,
        },
        {
            id: 3,
            name: 'Amazon.com Inc.',
            price: 3372.20,
        }
    ],
}

export const StockListSlice = createSlice({
  name: 'stock_list',
  initialState,
  reducers: {
   
  },
})


export default StockListSlice.reducer;