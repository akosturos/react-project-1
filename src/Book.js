import React from 'react'

class Book extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <div className="book" key={book.id}>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf} onChange={event => this.props.changeSelection(event.target.value, book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
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
