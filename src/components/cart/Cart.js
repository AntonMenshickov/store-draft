import React from 'react'
import {
  Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss'

export class CartComponenet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: []
    }
  }

  localstorageListener = null

  componentDidMount() {
    this.localstorageListener = setInterval(() => {
      const cart = window.$cart;
      const itemsCount = Object.values(cart).reduce((acc, val) => acc += val, 0);
      this.setState({
        itemsInCart: itemsCount
      })
    }, 100)
  }

  componenetWillunmount() {
    if (this.localstorageListener) {
      clearInterval(this.localstorageListener)
    }
  }

  render(props) {
    return (
      <Link to='cart' className={`${'Cart-content'} ${'disabled'}`}>
        <FontAwesomeIcon icon={faShoppingCart} size='1x' />
        <span className='Chart-label'>{this.state.itemsInCart.length === 0 ? 'Корзина пуста' : `В корзине ${this.state.itemsInCart} предметов`}</span>
      </Link>
    )
  }
}