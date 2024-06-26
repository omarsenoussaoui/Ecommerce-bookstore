
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="logo-description">
                        <div className="logo">
                            <div className="img">
                                <img src="images/logo.png" alt="" />
                            </div>
                            <div className="title">
                                <h4>EL Mohamadia</h4>
                                <small>Book Shop</small>
                            </div>
                        </div>
                        <div className="logo-body">
                            <p>
                            Notre plateforme propose une large gamme de livres, 
                            allant des best-sellers aux classiques, pour satisfaire tous les lecteurs. 
                            Avec une interface conviviale et des recommandations personnalisées, 
                            découvrez et achetez vos livres préférés en toute simplicité, depuis chez vous.
                            </p>
                        </div>
                        <div className="social-links">
                            <h4>Follow Us</h4>
                            <ul className="links">
                                <li>
                                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="categories list">
                        <h4>Book Categories</h4>
                        <ul>
                            <li><a href="Pages/book-filter.html">Action</a></li>
                            <li><a href="Pages/book-filter.html">Adventure</a></li>
                            <li><a href="Pages/book-filter.html">Comedy</a></li>
                            <li><a href="Pages/book-filter.html">Crime</a></li>
                            <li><a href="Pages/book-filter.html">Drama</a></li>
                            <li><a href="Pages/book-filter.html">Fantasy</a></li>
                            <li><a href="Pages/book-filter.html">Horror</a></li>
                        </ul>
                    </div>
                    
                    <div className="our-store list">
                        <h4>Our Store</h4>
                        <div className="map" style={{ marginTop: '1rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.594819201665!2d-122.42768319999999!3d37.73616639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e60a337d5f5%3A0xfa0bb626904e5ab2!2z4KSV4KWJ4KSy4KWH4KScIOCkueCkv-Cksiwg4KS44KS-4KSoIOCkq-CljeCksOCkvuCkguCkuOCkv-CkuOCljeCkleCliywg4KSV4KWI4KSy4KWA4KSr4KWL4KSw4KWN4KSo4KS_4KSv4KS-LCDgpK_gpYLgpKjgpL7gpIfgpJ_gpYfgpKEg4KS44KWN4KSf4KWH4KSf4KWN4oCN4KS4!5e0!3m2!1shi!2sin!4v1686917463994!5m2!1shi!2sin"
                                height="70"
                                style={{ width: '100%', border: 'none', borderRadius: '5px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <ul>
                            <li>
                                <a href=""
                                ><i className="fa-solid fa-location-dot"></i>832 Thompson Drive,San
                                    Fransisco CA 94 107,United States</a
                                >
                            </li>
                            <li>
                                <a href=""><i className="fa-solid fa-phone"></i>+12 1345678991</a>
                            </li>
                            <li>
                                <a href=""
                                ><i className="fa-solid fa-envelope"></i>support@bookoe.id</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer