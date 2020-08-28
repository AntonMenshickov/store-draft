import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.scss'

export class Searchbar extends React.Component {

  updateInput(event) {
    window.$search = event.target.value
  }

  render(props) {
    return (
      <div className='Seacrh-bar'>
        <div className='search-box'>
          <input type='text' placeholder='Search for somethinng?' onChange={this.updateInput} />
          <FontAwesomeIcon icon={faSearch} size='1x' />
        </div>
      </div>
    )
  }
}
