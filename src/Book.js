import React from 'react'

class Book extends React.Component {
  /*
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`}}></div>
      <div className="book-shelf-changer">
        <select defaultValue={this.props.book.shelf} onChange={event => this.props.changeSelection(event.target.value, this.props.book)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">{this.props.book.author}</div>
  </div>
  */
  render() {
    console.log("Book", this.props)
    return (
      "Hi, "
    )
  }
}

export default Book
