import React, {createContext,useReducer} from 'react';
import axios from 'axios'

const INIT_STATE={
    products: [],
    currentProduct:{},
    
}
const reducer=(state=INIT_STATE, action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
            default:
                return state;
    }
}
const ProductsContextProvider = ({children})=>{
    const[state,dispatch]=useReducer(reducer,INIT_STATE);
    const getProducts=async(params="")=>{
        const{data}=await axios(`http://localhost:8000/products`);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data,
        })
    }
}


const ProductsContext = () => {
    return (
        <div>
            <productsContextProvider
            value={{
                products: state.products,
                dispatch,
                getProducts,
            }}
            >
                {children}
                </productsContextProvider>
            
        </div>
    );
};

export default ProductsContext;