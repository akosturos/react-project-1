import React from 'react'

class Book extends React.Component {

  render() {
    console.log("Book", this.props)
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <div className="book" key={book.id}>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf}>
                  <option value="none" disabled>Move to...</option>
                  <option onClick={() => {this.props.changeSelection(0, book)}} value="currentlyReading">Currently Reading</option>
                  <option onClick={() => {this.props.changeSelection(1, book)}} value="wantToRead">Want to Read</option>
                  <option onClick={() => {this.props.changeSelection(2, book)}} value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        ))}
      </ol>
    )
  }
}

export default Book
