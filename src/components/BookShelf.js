import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class BookShelf extends Component {
    render() {
        const { books, title, handleChange } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <Book
                                    key={book.id}
                                    book={book}
                                    handleChange={handleChange} />
                            )
                        })
                        }
                    </ol>
                </div>
            </div>
        )
    }
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired
    }

}

export default BookShelf