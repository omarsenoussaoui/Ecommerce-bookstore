import './App.css'
import AllBooks from './componenets/Books/AllBooks';
import BookHomeSection from './componenets/Books/BookHomeSection'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './componenets/Hero/Hero';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BookHomeSection />
            </>
          } />
          <Route path="/all-books" element={
            <>
              <AllBooks />
            </>
          } />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
