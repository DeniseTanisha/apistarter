import React, { Component } from "react";

class Book extends Component {
  state = {};
  render() {
    return (
      <article>
        <h2>{this.props.bookData.volumeInfo.title}</h2>
        <p>{this.props.bookData.volumeInfo.description}</p>
      </article>
    );
  }
}

export default Book;
