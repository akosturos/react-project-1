import React from 'react'
import Book from './_Book'

class Shelf extends React.Component {
  state: [

  ]
  render() {
    console.log("Shelf props", this.props)
    return (
      <div>
      {this.props.shelf.map((shelf) => (
        <Book books={this.props.books} />
      ))}
      </div>
    )
  }
}

export default Shelf
