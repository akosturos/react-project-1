import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './_Book.js'
import Search from './_Search.js'

class Bookshelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeSelection: PropTypes.func.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  findShelf (s) {
    switch (s) {
      case this.props.shelvesText[0][0]: {
        return this.props.shelvesText[0][1]
        break
      }
      case this.props.shelvesText[1][0]: {
        return this.props.shelvesText[1][1]
        break
      }
      case this.props.shelvesText[2][0]: {
        return this.props.shelvesText[2][1]
        break
      }
    }
  }

  render() {
    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.props.shelves.map((shelf) => (
              <div className="bookshelf" key={shelf}>
                <h2 className="bookshelf-title">{this.findShelf(shelf)}</h2>
                {console.log("AK", this.findShelf(shelf))}
                <div className="bookshelf-books">
                  <Book shelves={this.props.shelves}
                        books={this.props.books.filter((b) => b.shelf === shelf)}
                        changeSelection={this.props.changeSelection}
                        shelf={shelf}/>
                </div>
              </div>
            ))}
          </div>
          <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
