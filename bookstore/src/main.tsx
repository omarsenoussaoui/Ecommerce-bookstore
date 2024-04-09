import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Footer from './componenets/Footer/Footer'
import Header from './componenets/Header/Header'
import Hero from './componenets/Hero/Hero.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <App />
    <Footer />
  </React.StrictMode>,
)
