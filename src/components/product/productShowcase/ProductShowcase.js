import React from 'react'
import {
  Link
} from 'react-router-dom'
import './ProductShowcase.scss'

export class ProductShowcase extends React.Component {
  render(props) {
    return (
      <Link to={`/product-detail:${this.props.productCode}`} className='Product-showcase'>
        <div className='background-preview' />
        <div className='wrapper'>
          <div className='description-adn-title'>
            <div className='product-info'>
              <div className='product-name'>{this.props.name}</div>
              <div>{this.props.price} {this.props.currency}</div>
              {this.props.inStock > 0 && (<div>В наличии {this.props.inStock} {this.props.unit}</div>)}
              {(this.props.inStock < 1 && this.props.preorder) && <div>Нет в наличии<button className='preorder'>Заказать</button></div>}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
