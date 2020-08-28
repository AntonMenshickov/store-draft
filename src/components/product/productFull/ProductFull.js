import React from 'react'
import './ProductFull.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import data from '../../../productsDatabase/products.json'


export class ProductFull extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    this.setState({
      product: data.find(product => `:${product.productCode}` === this.props.match.params.id)
    })
  }

  addToCart(product) {
    const productsInCart = this.itemsCountIncart(product);
    if (product.inStock <= productsInCart) {
      return;
    }
    const cart = window.$cart;
    cart[product.productCode] = cart[product.productCode] ? cart[product.productCode] += 1 : cart[product.productCode] = 1
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({});
  }

  removeFromCart(product) {
    const cart = window.$cart;
    if (cart[product.productCode] && cart[product.productCode] > 1) {
       cart[product.productCode] -= 1
    } else {
      delete cart[product.productCode]
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({});
  }

  itemsCountIncart(product) {
    const cart = window.$cart;
    return cart[product.productCode] || 0;
  }

  render(props) {
    const product = this.state.product;
    if (product === null) {
      return <div />;
    }
    const itemsInCart = this.itemsCountIncart(product);
    const canAddInCart = product.inStock > itemsInCart;
    return (
      <div className='Product-full' >
        <div className='Product-picture' />
        <div className='Product-info'>
          <div className='product-name'>{product.name}</div>
          <div>{product.price} {product.currency}</div>
          {product.inStock > 0 && (<div>В наличии {product.inStock} {product.unit}</div>)}
          <div className='cart-buttons'>
            {product.inStock > 0 && <div className={`add-to-cart ${!canAddInCart ? 'disabled' : ''}`} onClick={() => this.addToCart(product)}><FontAwesomeIcon icon={faCartPlus} /><div className='add-to-cart-label'>{itemsInCart === 0 ? 'В корзину' : `${itemsInCart} в корзине`}</div></div>}
            {itemsInCart > 0 && <div className='remove-from-cart' title='Убрать' onClick={() => this.removeFromCart(product)}><FontAwesomeIcon icon={faTimes} /><div className='remove-from-cart-label'>Убрать из корзины</div></div>}
          </div>
          {product.inStock < 1 && product.preorder && <button className='add-to-cart'><FontAwesomeIcon icon={faPlusSquare} /><div className='add-to-cart-label'>прездаказ</div></button>}
        </div>
      </div>
    )
  }
}
