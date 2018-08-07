import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        const { books, handleChange } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Currently Reading"
                            handleChange={handleChange}
                            books={books.filter(book => book.shelf === 'currentlyReading')} />
                        <BookShelf
                            title="Want To Read"
                            handleChange={handleChange}
                            books={books.filter(book => book.shelf === 'wantToRead')} />
                        <BookShelf
                            title="Read"
                            handleChange={handleChange}
                            books={books.filter(book => book.shelf === 'read')} />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="add-contact"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired
    }
}

export default ListBooks