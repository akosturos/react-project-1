import React from 'react'
import Bookshelf from './Bookshelf'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

class BooksApp extends React.Component {

  shelves = [
    "currentlyReading",
    "wantToRead",
    "read"
  ]
  shelvesText = [
    [this.shelves[0], "Currently Reading"],
    [this.shelves[1], "Want to Read"],
    [this.shelves[2], "Read"]
  ]

  state = {
    books: [],
    returnedSearch: []
  }

componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

removeBook = (book) => {
    this.setState(() => ({
      books: this.state.books.filter((b) => b.id !== book.id)
    }))
  }

changeSelection = (selection, book) => {
    if (selection == "none") {
      this.removeBook(book)
    } else {
      BooksAPI.update(book, selection).then(() => {
        book.shelf = selection
        this.setState(state => ({
          books: this.state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

updateReturnedSearch = (query) => {
  if(query) {
    BooksAPI.search(query).then((books) => {
      this.setState({
        returnedSearch: books
      })
    })
  }
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf onDeleteBook={this.removeBook} onChangeSelection={this.changeSelection}
            books={this.state.books} shelves={this.shelves} showSearchPage={this.state.showSearchPage}
            shelvesText={this.shelvesText} changeSelection={this.changeSelection}/>
        )}/>
        <Route path='/search' render={() => (
          <Search books={this.state.returnedSearch}
                  changeSelection={this.changeSelection}
                  updateReturnedSearch={this.updateReturnedSearch}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
