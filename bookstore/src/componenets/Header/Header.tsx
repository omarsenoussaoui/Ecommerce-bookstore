import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <div className="img">
                            <img src={logo} alt="" />
                        </div>
                        <div className="logo-header">
                            <h4><a href="index.html">EL Mohamadia</a></h4>
                            <small>Book Shop</small>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <div className="logo">
                            <div className="title">
                                <div className="img">
                                    <img src="images/logo.png" alt="" />
                                </div>
                                <div className="logo-header">
                                    <h4><a href="index.html">Bookoe</a></h4>
                                    <small>Book Store Website</small>
                                </div>
                            </div>
                            <button className="close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="pages/service.html">Service</a></li>
                        <li><a href="pages/contact.html">Contact</a></li>
                        <li><a href="Pages/book-filter.html">Books</a></li>
                        <button className="login"><a href="pages/login.html">Log In</a></button>
                        <div className="nav-end">
                            <button className="cart">
                                <a href="cart-item.html"><i className="fa-solid fa-cart-shopping"></i> <span>4</span></a>
                            </button>
                        </div>
                    </ul>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header