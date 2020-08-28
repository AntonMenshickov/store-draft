import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss'
import { CartComponenet }  from './components/cart/Cart'
import { Searchbar } from './components/searcbar/Seacrbar'
import { ProductsList } from './components/product/ProductsList/productsList'
import { ProductFull } from './components/product/productFull/ProductFull'
import { CartList } from './components/cart/cartList/CartList'


export class App extends React.Component {
  componentDidMount() {
    const $ = window;
    const cartData = localStorage.getItem('cart') || {};
    $.cart = cartData;
  }

  render(props) {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <Link to='/'>
              <h1>My store name</h1>
            </Link>
            <Searchbar />
            <CartComponenet />
          </header>
          <Switch>
            <Route exact path='/' component={ProductsList} />
            <Route exact path='/cart' component={CartList} />
            <Route path='/product-detail:id' component={ProductFull} />
            <Route path='/product-detail:id' component={ProductFull} />
          </Switch>
        </div>
      </Router>
    )
  }
}