import React from 'react'
import './CartList.scss'
import { ProductInCart } from '../../product/ProductInCart/ProductInCart'
import data from '../../../productsDatabase/products.json'


export class CartList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getItemsFromCart();
    }

    getItemsFromCart() {
        const cart = window.$cart;
        const productIds = Object.keys(cart);
        const products = data.filter(product => productIds.includes(product.productCode))
        this.setState({
            products: products || []
        })
    }

    calculateTotal() {
        const cart = window.$cart;
        const productIds = Object.keys(cart);
        const products = this.state.products
        let price = 0;
        productIds.forEach(id => {
            const product = products.find(p => p.productCode === id)
            if (product) {
                price += cart[id] * product.price;
            }
        })
        return price; // todo сделать подсчет цены
    }

    render(props) {
        return (
            <div className='Cart-list'>
                <h1>Корзина</h1>
                {this.state.products.map(item => <ProductInCart key={item.productCode} {...item} />)}
                <div className='total'>
                    Общая цена: {this.calculateTotal()}
                </div>
            </div>)
    }
}
