import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component {
  state = {
    query: '',
    queriedBooks: [],
    responseTrue: true
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
      queriedBooks: []
    })
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

  mapQuery() {
    if (this.state.query.length !== 0) {
      if (this.state.query) {
        BooksAPI.search(this.state.query).then((queriedBooks) => {
          if (queriedBooks.error) {
            this.setState({ queriedBooks: [] })
            console.log("Error!! in returning from API")
            return <h2>There are no books to display</h2>
          }
          else {
            this.setState({ queriedBooks })
          }
        })
      }
      return this.state.queriedBooks.map((book) => (
         <Book key={book.id}
               book={book}
               shelf={this.inLibrary(book)}
               changeSelection={this.props.changeSelection}/>
           ))
    }
  }

  noQueryResult () {
    if(this.state.queriedBooks.length < 1) {
      return <h3 style={{textAlign: "center"}}>There are no books to display</h3>
    }
    else if(this.state.query.length === 0) {
      return <h3 style={{textAlign: "center"}}>There are no books to display</h3>
    }
  }

  render() {
    console.log(this.state.query.length, this.state.queriedBooks)
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
            {this.mapQuery()}
          </ol>
            {this.noQueryResult(this.state.queriedBooks)}
        </div>
      </div>
    )
  }
}

export default Search;
