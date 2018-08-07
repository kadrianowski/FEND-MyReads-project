import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


import ListBooks from './components/ListBooks'
import Search from './components/Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  handleChange = (event, book) => {
    const shelf = event.target.value

    if (this.state.books) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListBooks
              books={this.state.books}
              handleChange={this.handleChange} />
          )} />

          <Route path="/search" render={() => (
            <Search
              booksShelved={this.state.books}
              handleChange={this.handleChange}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
