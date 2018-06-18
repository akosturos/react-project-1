import React from 'react'
import Bookshelf from './_Bookshelf'
import Search from './_Search'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

class BooksApp extends React.Component {
  shelves = [
    "Currently Reading",
    "Want to Read",
    "Read"
  ]
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

removeBook = (book) => {
    this.setState(() => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

changeSelection = (selection, book) => {
    this.setState(() => ({
      books: book.selection = this.shelves[selection]
    }))
  }

  render() {
    return (

      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf onDeleteBook={this.removeBook} onChangeSelection={this.changeSelection}
            books={this.state.books} shelves={this.shelves} showSearchPage={this.state.showSearchPage}
            />
        )}/>
        <Route path='/search' render={() => (
          <Search books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default App
