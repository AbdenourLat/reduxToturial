import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartList: [],
            total: 0
        },
        reducers: {
            add(state, actions) {
                const updated = state.cartList.concat(actions.payload);
                const updatedTotal = state.total + actions.payload.price;
                return {
                    ...state, cartList: updated, total: updatedTotal
                };
            },
            remove(state, actions) {
                const updated = state.cartList.filter(
                    product => product.id !== actions.payload.id 
                );
                const updatedTotal = state.total - actions.payload.price;
                return {
                    ...state,
                    cartList: updated,
                    total: updatedTotal 
                }
            }
        }
    }
);

export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;