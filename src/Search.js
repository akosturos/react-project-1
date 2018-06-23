import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component {
  state = {
    query: '',
    queriedBooksNoShelf: [],
    queriedBooksShelf: [],
    queriedBooks: []

  }
  componentWillUnmount(){
      this.props.updateQuery('');
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
  }

  testBook = (b) => {
    let test = false
    for (var book in this.props.books) {
      if (book.id === b.id) {
        this.state.queriedBooksShelf.concat(book)
      }
    }
    if (test === false) {
      this.state.queriedBooksNoShelf.concat(book)
    }
  }

  render() {
    console.log("Search this.props", this.props)
    console.log("Search this.state", this.state)

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
            {this.state.queriedBooks.map((book) => {
              this.testBook(book)
            }
            )}
            {this.state.queriedBooksShelf.map((book) => (
              <Book book={book}
                    shelf={book.shelf}
                    changeSelection={this.props.changeSelection}/>
            ))}
            {this.state.queriedBooksNoShelf.map((book) => (
              <Book book={book}
                    shelf={this.props.shelves[3]}/>
            ))}
            {this.state.queriedBooks.map((book) => (
              <Book key={book.id}
                    book={book}
                    shelf={"none"}
                    changeSelection={this.props.changeSelection}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
