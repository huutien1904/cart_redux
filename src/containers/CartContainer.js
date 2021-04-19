import React,{Component} from 'react'
import {connect} from 'react-redux'
import Carts from './../components/Carts'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Message from '../constants/Message'
import PropTypes from 'prop-types';
import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from './../actions/index'
    class CartContainer extends Component{
        render(){
            var{cart} = this.props
            
            return (
                <Carts>
                    {this.showCart(cart)}
                    {this.showTotalMoney(cart)}
                </Carts>
            )
        }

        showCart = (cart) => {
            var {onDeleteProductInCart,actChangeMessage,onUpdateProductInCart} =this.props
            var result = 
                    <tr>
                        <td>{Message.MSG_CART_EMPTY }</td>
                    </tr>
                if(cart.length > 0){
                    result = cart.map((item,index) => {
                        return (
                            <CartItem 
                            key = {index}
                            item = {item}
                            index = {index}
                            onDeleteProductInCart = {onDeleteProductInCart}
                            actChangeMessage = {actChangeMessage}
                            onUpdateProductInCart = {onUpdateProductInCart}
                            />
                        )
                        
                    })
                }
            return result
        }

        showTotalMoney = (cart) =>{
            var result = null
                if(cart.length > 0) {
                    result = <CartResult 
                        cart = {cart}
                    />
                }
            return result
        }
        
    }
    CartContainer.propTypes  = {
            cart : PropTypes.arrayOf(
                PropTypes.shape({
                    product :PropTypes.shape({
                        id: PropTypes.number.isRequired,
                
                    name : PropTypes.string.isRequired,
                    image:  PropTypes.string.isRequired,
                    decription : PropTypes.string.isRequired,
                    price : PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired,

                    inventory :  PropTypes.number.isRequired
                    }).isRequired,
                    quantyti: PropTypes.number.isRequired
                }),
            ).isRequired,
            onDeleteProductInCart : PropTypes.func.isRequired,
            actChangeMessage : PropTypes.func.isRequired,
            onUpdateProductInCart : PropTypes.func.isRequired,


    }
    const mapStateToProps = state =>{
        return {
            cart : state.cart
        }
    }
    const mapDispatchToProps = (dispatch,props) =>{
        return {
            onDeleteProductInCart : (product) =>{
                dispatch(actDeleteProductInCart(product))
            },
            actChangeMessage : (message) =>{
                dispatch(actChangeMessage(message))
            },
            onUpdateProductInCart : (product,quantyti) =>{
                dispatch(actUpdateProductInCart(product,quantyti))
            }
        }
    }
    

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
