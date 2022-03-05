
import React, { Component } from 'react';
import Book from './components/Book';




class App extends Component {

  state = {
    books: [
      { BookName: "1984", writer: "Adward Orell" },
      { BookName: "Liberation War", writer: "Adward Smith" },
      { BookName: "Nature", writer: " William Gorge" },
      { BookName: "The Universe", writer: " Einstein" }

    ]




  }
  changeState = newBook => {
    this.setState({
      books: [

        {
          BookName: newBook, writer: "Adward Orell"
        },
        { BookName: "Civilization", writer: "Andree Buses" },
        { BookName: " The Nature", writer: " William Gorge" },
        { BookName: "The Universe", writer: " Einstein" }
      ]

    });

  }
  changeWith = event => {

    this.setState({
      books: [

        {
          BookName: event.target.value, writer: "Adward Orell"
        },
        { BookName: "Civilization", writer: "Andree Buses" },
        { BookName: " The Nature", writer: " William Gorge" },
        { BookName: "The Universe", writer: " Einstein" }
      ]

    });




  }

  render() {
    return (
      <div className="App">
        <h2>Booklist</h2>
        <button onClick={() => this.changeState("National war")}>ChangeState</button>
        <input type="text" onChange={this.changeWith} />
        <Book BookName={this.state.books[0].BookName}
          Writer={this.state.books[0].writer} />

        <Book BookName={this.state.books[1].BookName}
          Writer={this.state.books[1].writer} />

        <Book BookName={this.state.books[2].BookName}
          Writer={this.state.books[2].writer} />

        <Book BookName={this.state.books[3].BookName}
          Writer={this.state.books[3].writer}
          change={this.changeState.bind(this, "Allah")} />

      </div>


    );

  }
}


export default App;
