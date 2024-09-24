import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    balance: 10000
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    buystock: (state, action) =>{
        state.balance  -= action.payload.price;
        let flag = 1;
        state.items.map((item)=>{
            if(item.id == action.payload.id){
                item.qty += 1;
                flag = 0; 
            }
        });
        if(flag){
            state.items.push({...action.payload, qty: 1});
        }
    },
    sellstock: (state, action) =>{
        state.balance  += action.payload.price*(action.payload.qty);
        const updatedStocks = state.items.filter((item)=>{return item.id!=action.payload.id});
        state.items = updatedStocks;
    }
  },
})


export const { buystock, sellstock } = portfolioSlice.actions

export default portfolioSlice.reducer