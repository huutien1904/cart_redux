import * as types from './../constants/ActionType'


export const actAddToCart = (product,quantyti) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantyti
    }
}
export const actChangeMessage = (message) =>{
    return {
        type : types.CHANGE_MESSAGE,
        message 
    }
}

export const actDeleteProductInCart = (product) =>{
    return{
        type : types.DELETE_IN_CART,
        product,
    
    }
}

export const  actUpdateProductInCart = (product, quantyti) =>{
    return {
        type :types.UPDAT_PRODUCT_IN_CART,
        product,
        quantyti

    }
}