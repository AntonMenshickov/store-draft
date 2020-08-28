import React from 'react'
import {
  Link
} from 'react-router-dom'
import './ProductInCart.scss'

export class ProductInCart extends React.Component {
  render(props) {
    const cart = window.$cart;
    const amount = cart[this.props.productCode]
    return (
      <Link to={`/product-detail:${this.props.productCode}`} className='Product-in-cart'>
        <div className='background-preview' />
        <div className='product-info'>
          <div>{this.props.name}</div>
          <div>{this.props.price} {this.props.currency}</div>
          <div>{amount} {this.props.unit}</div>
        </div>
      </Link>
    )
  }
}
