import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [showNewsletter, setShowNewsletter] = useState(false);

    // Handler functions to show and hide modals
    const handleShowSignIn = () => setShowSignIn(true);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowNewsletter = () => setShowNewsletter(true);
    const handleCloseNewsletter = () => setShowNewsletter(false);

    return (
        <div className="page-wrapper">

            {/* header-start */}
            <header className="header">
                <div className="header-bottom sticky-header">
                    <div className="container">

                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            {/* <Link to="" className="logo">
                                <img src="assets/images/demos/demo-8/blacklogo.png" alt="Probo Logo" width="100" height="20" />
                            </Link> */}

                            <Link to="" className="logo">
                                <h4 className='d-flex justify-content-center algin-items-center m-0' style={{fontWeight: 'bold '}}>PROBO</h4>
                            </Link>
                        </div>

                        <div className="header-center">
            <nav className="main-nav">
                <ul className="menu sf-arrows">
                    {/* Home Menu Item */}
                    <li className="megamenu-container active" style={{ position: 'relative' }}>
                        <Link to="/" className="">Home</Link>
                    </li>

                    {/* Shop Menu Item */}
                    <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="/Shop" className="sf-with-ul">Shop</Link>
                        <div className="megamenu megamenu-md" 
                             style={{ display: 'none', position: 'absolute', top: '100%', left: '0', zIndex: 1000, background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                             onMouseEnter={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'block';
                             }}
                             onMouseLeave={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'none';
                             }}>
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="menu-col">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="menu-title">Shop with sidebar</div>
                                                <ul>
                                                    <li><Link to="/ShopList">Shop List</Link></li>
                                                    <li><Link to="/ShopGrid2">Shop Grid 2 Columns</Link></li>
                                                    <li><Link to="/Shop">Shop Grid 3 Columns</Link></li>
                                                    <li><Link to="/ShopGrid4">Shop Grid 4 Columns</Link></li>
                                                    {/* <li><Link to="/category-market"><span>Shop Market<span className="tip tip-new">New</span></span></Link></li> */}
                                                </ul>
                                                <div className="menu-title">Shop no sidebar</div>
                                                <ul>
                                                    <li><Link to="/ShopSideBar1"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                                                    <li><Link to="/ShopSideBar2">Shop Fullwidth No Sidebar</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="menu-title">Product Category</div>
                                                {/* <ul>
                                                    <li><Link to="/product-category-boxed">Product Category Boxed</Link></li>
                                                    <li><Link to="/product-category-fullwidth"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                                </ul> */}
                                                <div className="menu-title">Shop Pages</div>
                                                <ul>
                                                    <li><Link to="/Cart">Cart</Link></li>
                                                    <li><Link to="/Checkout">Checkout</Link></li>
                                                    <li><Link to="/Wishlist">Wishlist</Link></li>
                                                    <li><Link to="/Account">My Account</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="banner banner-overlay">
                                        <Link to="/category">
                                            <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                                            <div className="banner-content banner-content-top">
                                                <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                            </div>
                                        </Link>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Product Menu Item */}
                    <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="/products" className="sf-with-ul">Product</Link>
                        <div className="megamenu megamenu-sm" 
                             style={{ display: 'none', position: 'absolute', top: '100%', left: '0', zIndex: 1000 }}
                             onMouseEnter={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'block';
                             }}
                             onMouseLeave={(e) => {
                                const dropdown = e.currentTarget;
                                dropdown.style.display = 'none';
                             }}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="menu-col">
                                        <div className="menu-title">Product Details</div>
                                        <ul>
                                            <li><Link to="/products">Default</Link></li>
                                            <li><Link to="/ProductCenterd">Centered</Link></li>
                                            <li><Link to="/ProductExtend"><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                            <li><Link to="/ProductGalley">Gallery</Link></li>
                                            <li><Link to="/ProductSticky">Sticky Info</Link></li>
                                            <li><Link to="/ProductSidebar">Boxed With Sidebar</Link></li>
                                            <li><Link to="/ProductFW">Full Width</Link></li>
                                            <li><Link to="/ProductMasonry">Masonry Sticky Info</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner banner-overlay">
                                        <Link to="/category">
                                            <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                            <div className="banner-content banner-content-bottom">
                                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Pages Menu Item */}
                    <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="#" className="sf-with-ul">Pages</Link>
                        <ul>
                            <li>
                                <Link to="/About" className="sf-with-ul">About</Link>
                                {/* <ul>
                                    <li><Link to="/about">About 01</Link></li>
                                    <li><Link to="/about-2">About 02</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/Contact" className="sf-with-ul">Contact</Link>
                                {/* <ul>
                                    <li><Link to="/contact">Contact 01</Link></li>
                                    <li><Link to="/contact-2">Contact 02</Link></li>
                                </ul> */}
                            </li>
                            <li><Link to="/login" className="sf-with-ul">Login</Link></li>

                            <li><Link to="/faq">FAQs</Link></li>
                            {/* <li><Link to="/Error">Error 404</Link></li> */}
                            
                            <li><Link to="/Comingsoon">Coming Soon</Link></li>
                        </ul>
                    </li>
                             
                    {/* Blog Menu Item */}
                    <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="/Blog" className="sf-with-ul">Blog</Link>
                        <ul>
                            <li><Link to="/blog">Classic</Link></li>
                            <li><Link to="/Listing">Listing</Link></li>
                            <li>
                                <Link to="#">Grid</Link>
                                <ul>
                                    <li><Link to="/BlogGrid2">Grid 2 columns</Link></li>
                                    <li><Link to="/BlogGrid3">Grid 3 columns</Link></li>
                                    <li><Link to="/BlogGrid4">Grid 4 columns</Link></li>
                                    <li><Link to="/BlogGrid">Grid sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Masonry</Link>
                                <ul>
                                    <li><Link to="/blog-masonry-2cols">Masonry 2 columns</Link></li>
                                    <li><Link to="/blog-masonry-3cols">Masonry 3 columns</Link></li>
                                    <li><Link to="/blog-masonry-4cols">Masonry 4 columns</Link></li>
                                    <li><Link to="/blog-masonry-sidebar">Masonry sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Mask</Link>
                                <ul>
                                    <li><Link to="/BlogMASK">Blog mask grid</Link></li>
                                    <li><Link to="/BlogMaskManory">Blog mask masonry</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Single</Link>
                                <ul>
                                    <li><Link to="/FullWidth">Single post</Link></li>
                                    <li><Link to="/NoWidth">Single post with sidebar</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    {/* Elements Menu Item */}
                    <li className="megamenu-container" style={{ position: 'relative' }}>
                        <Link to="/elements" className="sf-with-ul">Elements</Link>
                        <ul>
                            <li><Link to="/ElementsProducts">Products</Link></li>
                            <li><Link to="/Typography">Typography</Link></li>
                            <li><Link to="/Tiles">Titles</Link></li>
                            <li><Link to="/Banner">Banners</Link></li>
                            <li><Link to="/ProductCategory">ProductCategory</Link></li>
                            <li><Link to="/VideoBanner">VideoBanners</Link></li>
                            <li><Link to="/ButtonsElemens">Buttons</Link></li>
                            <li><Link to="/AccordionsElements">Accordions</Link></li>
                            <li><Link to="/ElementsTabs">Tabs</Link></li>
                            <li><Link to="/Testimonials">Testimonials</Link></li>
                            <li><Link to="/BlogPost">BlogPost</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/Cta">CalltoAction</Link></li>
                            <li><Link to="/IconBoxes">IconBoxes</Link></li>

                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

                        <div className="header-right">
                            {/* Header Search */}
                            <div className="header-search">
                                <a href="#" className="search-toggle" role="button" aria-label="Toggle Search">
                                    <i className="icon-search"></i>
                                </a>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper">
                                        <label htmlFor="q" className="sr-only">Search</label>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                                    </div>
                                </form>
                            </div>
                            {/* End .header-search */}

                            {/* Wishlist Link */}
                            <a href="/Wishlist" className="wishlist-link" aria-label="Wishlist">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">3</span>
                            </a>

                            {/* Cart Dropdown */}
                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="cart-count">2</span>
                                    <span className="cart-txt">$ 164.00</span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        {/* Product 1 */}
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="/Product">Beige knitted elastic runner shoes</a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $84.00
                                                </span>
                                            </div>
                                            {/* End .product-cart-details */}

                                            <figure className="product-image-container">
                                                <a href="/Product" className="product-image">
                                                    <img src="assets/images/products/cart/product-1.jpg" alt="Beige knitted elastic runner shoes" />
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product">
                                                <i className="icon-close"></i>
                                            </a>
                                        </div>
                                        {/* End .product */}

                                        {/* Product 2 */}
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="/Product">Blue utility pinafore denim dress</a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $76.00
                                                </span>
                                            </div>
                                            {/* End .product-cart-details */}

                                            <figure className="product-image-container">
                                                <a href="/Product" className="product-image">
                                                    <img src="assets/images/products/cart/product-2.jpg" alt="Blue utility pinafore denim dress" />
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product">
                                                <i className="icon-close"></i>
                                            </a>
                                        </div>
                                        {/* End .product */}
                                    </div>
                                    {/* End .dropdown-cart-products */}

                                    {/* Dropdown Cart Total */}
                                    <div className="dropdown-cart-total">
                                        <span>Total</span>
                                        <span className="cart-total-price">$160.00</span>
                                    </div>
                                    {/* End .dropdown-cart-total */}

                                    {/* Dropdown Cart Action */}
                                    <div className="dropdown-cart-action">
                                        <Link to="/shopping-cart" className="btn btn-primary">View Cart</Link>


                                        <Link to="/checkout" className="btn btn-primary">

                                            <span style={{ color: "white" }}>Checkout</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                    {/* End .dropdown-cart-action */}
                                </div>
                                {/* End .dropdown-menu */}
                            </div>
                            {/* End .cart-dropdown */}
                        </div>

                    </div>
                </div>
            </header>
            {/* header-container  */}
        </div>
    );
}

export default Header;

