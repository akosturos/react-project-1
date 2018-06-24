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
    "read",
    "none"
  ]
  shelvesText = [
    [this.shelves[0], "Currently Reading"],
    [this.shelves[1], "Want to Read"],
    [this.shelves[2], "Read"],
    [this.shelves[3], "None"]
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
    if (selection === this.shelves[3]) {
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

  render() {
    console.log("App", this.state)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf onDeleteBook={this.removeBook} onChangeSelection={this.changeSelection}
            books={this.state.books} shelves={this.shelves} showSearchPage={this.state.showSearchPage}
            shelvesText={this.shelvesText} changeSelection={this.changeSelection}/>
        )}/>
      <Route path='/search' render={( { history} ) => (
          <Search changeSelection={(selection, book) => {
                  this.changeSelection(selection, book)
                  if(selection !== this.shelves[3])
                    history.push('/')
              }}
                  returnedBooks={this.state.returnedSearch}
                  books={this.state.books}
                  updateReturnedSearch={this.updateReturnedSearch}
                  shelves={this.shelves}
                  />
          )}/>
      </div>
    )
  }
}

export default BooksApp
