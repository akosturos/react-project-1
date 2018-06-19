import React from 'react'
import Book from './_Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Search extends React.Component {
  state = {
    query: ''
  }
  componentWillUnmount(){
      this.props.updateQuery('');
  }
  queryFunctions = (query) => {
    this.updateQuery(query)
    this.updateReturnedSearch(query)
  }
  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }
  updateReturnedSearch = (query) => {
    this.setState({
      returnedSearch: BooksAPI.search(query)
    })
  }

  render() {
    console.log("RS", this.state.returnedSearch)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input  type="text" placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.queryFunctions(event.target.value)}/>
          </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <Book books={this.state.returnedSearch} />
            </ol>
          </div>
        </div>
    )
  }
}

export default Search;
