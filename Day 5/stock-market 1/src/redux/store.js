import { configureStore } from '@reduxjs/toolkit'
import  portfolioSlice  from './portfolioSlice'
import  StockListSlice  from './stock_list'

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
    stock_list: StockListSlice
  },
})