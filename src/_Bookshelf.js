import React from 'react'
import Book from './_Book.js'

class Bookshelf extends React.Component {
  state = {

  }
  render() {
    console.log('Props', this.props)
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.props.shelves.map((shelf) => (
            <div className="bookshelf" key={shelf}>
              <h2 className="bookshelf-title">{shelf}</h2>
              <div className="bookshelf-books">
              </div>
                <Book shelves={this.props.shelves}
                      books={this.props.books.filter((b) => b.selected === shelf)}
                      onChangeSelection={this.props.onChangeSelection}
                />
            </div>
          ))}
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
