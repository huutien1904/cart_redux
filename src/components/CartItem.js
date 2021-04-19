import React,{Component} from 'react'
import * as Message from './../constants/Message'
class CartItem extends Component{

    // constructor (props){
    //     super(props)
    //     this.state = ({
    //         quantyti: 1
    //     })
    // }

  render(){
    var {item} = this.props
    
    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt={item.product.image} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantyti}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                            className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                            onClick = {() => { this.onUpdateQuantyti(item.product, item.quantyti - 1 )}}
                        >
                        <a href = "/#">—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                            onClick = {() => { this.onUpdateQuantyti(item.product, item.quantyti + 1 )}}
                        >
                        <a href = "/#">+</a>
                    </label>
                </div>
            </td>
            <td>{this.totalMoney(item.quantyti,item.product.price)}$</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick = { () => {this.onDelete(item.product)}}
                    >
                    X
                </button>
            </td>
        </tr>
    )
  }
  onUpdateQuantyti = (product,quantyti) =>{
      if(quantyti > 0){
          this.props.onUpdateProductInCart(product,quantyti)
          this.props.actChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)

      }
  }
  totalMoney = (a,b) =>{
      return a*b
  }
  onDelete = (product) =>{
     this.props.onDeleteProductInCart(product)
     this.props.actChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }
}

export default CartItem;
