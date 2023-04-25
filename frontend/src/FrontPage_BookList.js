import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import BookCard from "./BookCard";

const serverUrl = process.env.REACT_APP_SERVER_URL

function BookList() {
    const [books, setBooks] = useState([]);
    console.log(serverUrl)

    const updateBooks = () => {
      axios
      .get(`${serverUrl}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList');
      });
    }
  
    useEffect(() => {
      axios
      .get(`${serverUrl}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);
  
    const bookList =
      books && books.length === 0
        ? 'there is no book record!'
        : books?.map((book, k) => <BookCard book={book} key={k} updateBooks={updateBooks}/>);

    console.log(bookList)
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
              <h4 >
                <p className="counter">{books.length}</p>
              </h4>
            </div>
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }

  export default BookList;