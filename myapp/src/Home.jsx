import React from "react";
import './App2.css';

const Home = () => {
    return (
        <>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/img/slider-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/img/slider-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/img/slider-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <!-- Main Slider Start --> */}
            {/* <div classNameName="home-slider">
            <div classNameName="main-slider">
                <div classNameName="main-slider-item"><img src="/images/images/img/slider-1.jpg" alt="" /></div>
                <div classNameName="main-slider-item"><img src="/images/images/img/slider-2.jpg" alt="" /></div>
                <div classNameName="main-slider-item"><img src="/images/images/img/slider-3.jpg" alt="" /></div>
            </div>
        </div> */}
            {/* <!-- Main Slider End --> */}


            {/* <!-- Feature Start--> */}
            <div className="feature">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shield"></i>
                                <h2>Trusted Shopping</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shopping-bag"></i>
                                <h2>Quality Product</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck"></i>
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-phone"></i>
                                <h2>Telephone Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End--> */}


            {/* <!-- Category Start--> */}
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="images/img/category-1.jpg" />
                                <a className="category-name" href="">
                                    <h2>Women</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="images/img/category-3.jpg" />
                                <a className="category-name" href="">
                                    <h2>Office</h2>
                                </a>
                            </div>
                            <div className="category-img">
                                <img src="images/img/category-4.jpg" />
                                <a className="category-name" href="">
                                    <h2>Mens</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="images/img/category-2.jpg" />
                                <a className="category-name" href="">
                                    <h2>Childrens</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Category End--> */}


            {/* <!-- Featured Product Start --> */}
            <div className="featured-product">
                <div className="container">
                    <div className="section-header">
                        <h3>Featured Product</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-1.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-2.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-3.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-4.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-5.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Featured Product End --> */}


            {/* <!-- Newsletter Start --> */}
            <div className="newsletter">
                <div className="container">
                    <div className="section-header">
                        <h3>Subscribe Our Newsletter</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <div className="form">
                        <input type="email" value="Your email here" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}


            {/* <!-- Recent Product Start --> */}
            <div className="recent-product">
                <div className="container">
                    <div className="section-header">
                        <h3>Recent Product</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-2.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-4.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-6.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-8.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="product-detail.html">
                                        <img src="images/img/product-9.png" alt="Product Image" />
                                    </a>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">Phasellus Gravida</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">$22 <span>$25</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Recent Product End --> */}


            {/* <!-- Brand Start --> */}
            <div className="brand">
                <div className="container">
                    <div className="section-header">
                        <h3>Our Brands</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <marquee behavior="" direction="">

                        <img className="mx-3" src="images/img/brand-1.png" alt="" />
                        <img className="mx-3" src="images/img/brand-2.png" alt="" />
                        <img className="mx-3" src="images/img/brand-3.png" alt="" />
                        <img className="mx-3" src="images/img/brand-4.png" alt="" />
                        <img className="mx-3" src="images/img/brand-5.png" alt="" />
                        <img className="mx-3" src="images/img/brand-6.png" alt="" />

                    </marquee>
                </div>
            </div>
            {/* <!-- Brand End --> */}


        </>
    )
}

export default Home;