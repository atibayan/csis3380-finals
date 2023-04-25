import axios from "axios"
import { useState } from "react"
import {Link, redirect } from "react-router-dom"

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function AddBook(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        axios.post(`${serverUrl}`, {
            title,
            author,
            description
        }).then((response) =>{
            if(response.status == 200) {
                setTitle("");
                setAuthor("");
                setDescription("");
//                 redirect('/')
            }
        })
    }

    return(
        <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br />
            <Link
                to='/'
                className='btn btn-outline-warning float-right'
              >
                Show BooK List
              </Link>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form novalidate="" onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>setAuthor(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>setDescription(e.target.value)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
