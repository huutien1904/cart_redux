import React,{Component} from 'react'
import Products from './../components/Products'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ProductItem from './../components/ProductItem'
import {actAddToCart,actChangeMessage} from './../actions/index'

    class ProductContainer extends Component{
    render(){
        var {products} = this.props
        return (
            <Products>
                {this.showProducts(products)}
                
            </Products>
        )
    }
    showProducts = (products) =>{
        var result = null
        var {onAddToCart,onChangeMessage} = this.props
        if(products.length > 0){
            result = products.map((product,index) =>{
                return <ProductItem  
                    product = {product}
                    key = {index} 
                    onAddToCart = {onAddToCart}
                    onChangeMessage = {onChangeMessage}
                    />
            })
        }
        return result
    }

    
    }
    ProductContainer.propTypes  = {
            products : PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                
                    name : PropTypes.string.isRequired,
                    image:  PropTypes.string.isRequired,
                    decription : PropTypes.string.isRequired,
                    price : PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired,

                    inventory :  PropTypes.number.isRequired
                })
            ).isRequired,
            onAddToCart : PropTypes.func.isRequired,
            onChangeMessage : PropTypes.func.isRequired,

    }
    const mapStateToProps = state =>{
        return {
            products : state.products
        }
    }
    const mapDispatchToProps = (dispatch,props) =>{
        return {
            onAddToCart : (product) =>{
                dispatch(actAddToCart(product,1))
            },
            onChangeMessage : (message) =>{
                dispatch(actChangeMessage(message))
            }   
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
