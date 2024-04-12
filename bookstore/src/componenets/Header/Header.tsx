import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <div className="img">
                            <a href="/"><img src={logo} alt="" /></a>
                        </div>
                        <div className="logo-header">
                            <h4><a href="/">EL Mohamadia</a></h4>
                            <small>Book Shop</small>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <div className="logo">
                            <div className="title">
                                <div className="img">
                                    <img src="images/logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/all-books">Catégories</a></li>
                        <li><a href="pages/contact.html">Contact</a></li>
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