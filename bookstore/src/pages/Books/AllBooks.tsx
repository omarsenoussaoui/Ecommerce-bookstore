import './AllBooks.css'
import { useState } from 'react';

import book from '../../assets/images/book-1.jpg'
import book2 from '../../assets/images/book-2.jpg'
import book3 from '../../assets/images/book-3.jpg'
function AllBooks() {
    const [isActive, setIsActive] = useState(false);

    const toggleFilter = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <div className="breadcrumb-container">
                <ul className="breadcrumb">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="#">Books</a></li>
                </ul>
            </div>
            <section className="filter">
                <div className="book-grid-container">
                    <div className={`filter-option ${isActive ? 'active-div' : ''}`}>
                        <div className="filter-group">
                            <h4>Filter Options</h4>
                            <div className="editor-pick select-box">
                                <div className="opt-title">
                                    <h4>Editor Picks</h4>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <div className="option">
                                    <ul>
                                        <li><a href="">Best Sales</a></li>
                                        <li><a href="">Most Recommended</a></li>
                                        <li><a href="">Newest Books</a></li>
                                        <li><a href="">Featured</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-date dropdown">
                                <div className="opt-title">
                                    <h4>Select Date</h4>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <div className="option">
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className="genre-category select-box">
                                <div className="opt-title">
                                    <h4>Shop By Category</h4>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <div className="option">
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Action</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Fantasy</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Adventure</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>History</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Animation</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Horror</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Biography</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Mystery</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Comedy</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Romance</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Crime</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Sci-fi</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Documentry</small>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" />
                                        <small>Sport</small>
                                    </div>
                                </div>
                            </div>
                            <div className="range-slider dropdown">
                                <div className="opt-title">
                                    <h4>Price Range</h4>
                                </div>
                                <div className="option">
                                    <div className="price-input">
                                        <div className="field">
                                            <span>Min</span>
                                            <input type="number" className="input-min" value="2500" />
                                        </div>
                                        <div className="separator">-</div>
                                        <div className="field">
                                            <span>Max</span>
                                            <input type="number" className="input-max" value="7500" />
                                        </div>
                                    </div>
                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
                                        <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-btn">
                                <button>Refine Search</button>
                                <button>Reset Filter</button>
                            </div>
                        </div>
                        <i className="fa fa-chevron-right rightbtn" onClick={toggleFilter}>

                        </i>
                    </div>
                    <div className="book-collections">
                        <h4>Books</h4>
                        <div className="category">
                            <div className="category-list">
                                <button>Today</button>
                                <button>This Week</button>
                                <button>This Month</button>
                            </div>
                        </div>
                        <div className="books">
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <div className="offer-content">
                                    <div className="offer-bottom">
                                        <button className="cartbtn">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <p>Add to cart</p>
                                        </button>
                                        <div className="price">
                                            <strong style={{ color: '#6c5dd4', fontWeight: '700' }}><span>$</span>18.7</strong>
                                            <span style={{ fontSize: '12px', textDecoration: 'line-through', color: '#a0a1a6', fontWeight: '500' }}>
                                                <>$70.00</>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book3} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book3} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book2} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book2} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="book-card">
                                <div className="img">
                                    <a href="book-detail.html"><img src={book} alt="" /></a>
                                    <button className="like" id="likebtn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <h5>The Giver</h5>
                                <small
                                ><a href="">Adventure,</a><a href="">Thriller,</a
                                ><a href="">Drama</a></small
                                >
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="data-shown">
                                <p>Showing 8 from 50 data</p>
                            </div>
                            <div className="pagination">
                                <button><i className="fa fa-chevron-left"></i>Previous</button>
                                <div className="number">
                                    <a href="">1</a>
                                    <a href="">2</a>
                                    <a href="">3</a>
                                </div>
                                <button>Next<i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBooks