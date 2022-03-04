const initialState={
    cartProducts:[]
}

export const cartReducer =(state=initialState, action)=>{

    switch(action.type){

        case 'addToCart' :{
            return{
                ...state,
                cartProducts: [...state.cartProducts, action.payload]   //append the products
            }
        }
        case 'deleteProduct' :{
            return{
                ...state,
                cartProducts: state.cartProducts.filter(object=>object.id !== action.payload.id)   //filters the products id
            }
        }
        case 'emptyCart' :{
            return{
                ...state,
                cartProducts: []   //filters the products id
            }
        }
        default: return state
    }
}