import axios from "axios"
const serverUrl = process.env.REACT_APP_SERVER_URL

export default function BookCard({book, updateBooks}){
    const handleDelete = async () => {
        axios.delete(`${serverUrl}${book?._id}`).then((response)=>{

            if(response.status == 200){
                updateBooks()
            }
        })
    }
    return (
        <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2><a href="/show-book/123id">{book?.title}</a></h2>
            <h3>{book?.author}</h3>
            <p>{book?.description}</p>
            <button onClick={handleDelete}>X</button>
          </div>
        </div>
    )
}