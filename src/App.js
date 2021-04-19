import './App.css';
import React,{Component} from 'react'
import Header from './components/Header'
import MessageContainer from './containers/MessageContainer'
import Footer from './components/Footer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer'

class App extends Component{
  render(){

    return (
      <div className="App">
  
        <div className = "hidden-sn animated deep-purple-skin">
          <Header></Header>
          <main id="mainContainer">
              <div className="container">
                  <ProductContainer>

                  </ProductContainer>
                  
                  
                  <MessageContainer></MessageContainer>
                  
                  <CartContainer></CartContainer>
              </div>
          </main>
          
          <Footer></Footer>
      </div>
      </div>
    )
  }
}

export default App;
