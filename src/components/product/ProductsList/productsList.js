import React from 'react'
import './ProductsList.scss'
import { ProductShowcase } from '../productShowcase/ProductShowcase'
import data from '../../../productsDatabase/products.json'

export class ProductsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: this.renderProducts(),
      prevSearch: ''
    }
  }


  componentDidMount() {
    setInterval(() => {
      if (window.$search !== this.state.prevSearch)
      this.setState({
        products: this.renderProducts(),
        prevSearch: window.$search
      })
    }, 200);
  }

  renderProducts() {
    return data.filter(item => item.name.toLocaleLowerCase().includes(window.$search.toLocaleLowerCase())).map(item => <ProductShowcase key={item.productCode} {...item} />)
  }

  render(props) {
    return (
      <div className='Products-list'>
        {this.state.products}
      </div>
    )
  }
}
