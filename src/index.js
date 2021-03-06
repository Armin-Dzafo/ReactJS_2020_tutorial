import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// import books array (named export)
import { books } from './books';

// import Book component (default export)
import Book from './Book';

function BookList () {

    return <section className='booklist'>
        {
            books.map((book) => {
                return (
                    <Book 
                        key={book.id}
                        // img={book.img}
                        // title={book.title}
                        // author={book.author}
                        {...book}
                    ></Book>
                );
            })
        }
    </section>;
}

ReactDOM.render(<BookList />, document.getElementById('root'));
