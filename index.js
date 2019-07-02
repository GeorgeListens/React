// Introducing state

import React, { Component } from "react";
import { render } from "react-dom";

let bookList = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  {
    title: "The Diary of Hendrick Groen, 83 1/2",
    author: "Hendrick Groen",
    pages: 332
  },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

// local state possible with ES6 Class vs function component
class Library extends Component {
  state = { open: false };
  // constructor(props) {
  //   super(props); /* super creates an instance of this class */
  //   this.state = {
  //     open: true /* you can have as many keys as you'd like */
  //   };
  //   /*Whenever we're using a constructor method, we need to bind this */
  //   /* Now this is accessible to the custom method toggleOpenClosed() */
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }

  // setState is asynchronous, thus if relying on previous state to set
  // a new value, you can use a callback function inside of setState
  // now setState will work no matter how long it takes
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      // callback fnc prevState returns the state object
      open: !prevState.open
    }));
  };

  render() {
    console.log(this.state); /* check keys in "state" object */

    const { books } = this.props; /* destructured from props object */
    /*  const books  = this.props.books */

    return (
      <div>
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById("root"));

// Previous version before binding using =>
// toggleOpenClosed() {
//   this.setState(prevState => ({
//     // callback fnc prevState returns the state object
//     open: !prevState.open
//   }));
// }

// Previous version before callback function implemented
// toggleOpenClosed() {
//   this.setState({
//     open: !this.state.open //this function sets the state object
//   });
// }
