import React, { Component } from "react";
import Book from "../book/book";

class BookList extends Component {
  state = { books: [], error: "" };

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:&maxResults=20&key:AIzaSyBzAhdlRZ9hd3aOVRKTUzZW9KX06ncoimM"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ books: data.items }, console.log(this.state.books))
      )
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <section>
        {this.state.books.map((book, index) => {
          return <Book key={index} bookData={book} />;
        })}
      </section>
    );
  }
}

export default BookList;
