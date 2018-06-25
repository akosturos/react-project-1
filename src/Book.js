import React from 'react'

class Book extends React.Component {

  getThumbnail = (book) => {
    let thumbnail = ""
    try {
      thumbnail = book.imageLinks.smallThumbnail
    }
    catch (error) {
      thumbnail = ""
    }
    return thumbnail
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.getThumbnail(this.props.book)}})`}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={this.props.shelf} onChange={event => this.props.changeSelection(event.target.value, this.props.book)}>
              <option value="move_to" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author ? this.props.book.author : "Unknown"}</div>
      </div>
    )
  }
}

export default Book
