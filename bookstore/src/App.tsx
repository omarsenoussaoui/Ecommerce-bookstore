import './App.css'
import AllBooks from './pages/Books/AllBooks';
import BookHomeSection from './componenets/Books/BookHomeSection'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './componenets/Hero/Hero';
import Offers from './pages/Offres/Offers';

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
          <Route path="/offers" element={<Offers />} />
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
