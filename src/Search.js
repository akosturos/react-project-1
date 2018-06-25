import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component {
  state = {
    query: '',
    queriedBooks: []

  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
      queriedBooks: []
    })
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((queriedBooks) => {
        if (queriedBooks.error) {
          this.setState({queriedBooks: []})
        }
        else {
          this.setState({ queriedBooks })
        }
      })
    }
    if (query === '') {
      this.setState({queriedBooks : [] })
    }
  }

  inLibrary = (book) => {
    let shelf = "none"
    this.props.books.map((b) => {
      if (b.id === book.id) {
        shelf = b.shelf
      }
    })
    return shelf
  }

  render() {
    console.log("Search", this.state.query, this.state.queriedBooks)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input  type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.queriedBooks.map((book) => (
              <Book key={book.id}
                    book={book}
                    shelf={this.inLibrary(book)}
                    changeSelection={this.props.changeSelection}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
