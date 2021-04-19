import * as Types from './../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CARTITEM'));
const initialState = data ? data : []


var cart = (state =  initialState, action) =>{
    var {product,quantyti} = action
    var index = -1
        switch(action.type){
            
            case Types.ADD_TO_CART :
                index = findProductInCart(state,product)
            
                if(index !== -1){
                    state[index].quantyti = state[index].quantyti + 1
                }
                else{
                    state.push({
                        product,
                        quantyti 
                    }) 
                }
                localStorage.setItem('CARTITEM',JSON.stringify(state))
                return [...state]

            case Types.DELETE_IN_CART :

                index = findProductInCart(state,product)
                if(index !== -1){
                    state.splice(index,1)
                }
                
                localStorage.setItem('CARTITEM',JSON.stringify(state))
                return [...state]

            case Types.UPDAT_PRODUCT_IN_CART :
                index = findProductInCart(state,product)
                if(index !== -1){
                    state[index].quantyti = quantyti
                }
                localStorage.setItem('CARTITEM',JSON.stringify(state))
                return [...state]

            default : return [...state]

            
        }
} 
var findProductInCart = (cart,product) =>{
    var index = -1;
        if(cart.length > 0){
            for(var i = 0; i< cart.length; i++){
                if(cart[i].product.id === product.id){
                    index = i
                    break
                }
            }
        }
    return index
}
export default cart