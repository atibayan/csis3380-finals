import BookList from "./FrontPage_BookList";
import AddBook from "./AddBook";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/create-book" element={<AddBook />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
