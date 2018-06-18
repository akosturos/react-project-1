import React from 'react'
import Book from './_Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component {
  state = {
    query: ''
  }

  updateBooks = (query) => {
    this.props.books = BooksAPI.search(query)
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }

  render() {
    console.log('Searchprops', this.props)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input  type="text" placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search;
