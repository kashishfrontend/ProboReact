import React, { useState } from 'react';

const ShopGrid2= () => {
        const [sortBy, setSortBy] = useState('popularity');
        const [layout, setLayout] = useState('2cols');
      
        const handleSortChange = (event) => {
          setSortBy(event.target.value);
        };
      
        const handleLayoutChange = (layoutType) => {
          setLayout(layoutType);
        };
      
    
  return (
    <div>
      <main className="main">

        <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
          <div className="container">
            <h1 className="page-title">Grid 2 Columns<span>Shop</span></h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="row">

            <div className="col-lg-9">

    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing <span>9 of 56</span> Products
        </div>
      </div>

      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select
              name="sortby"
              id="sortby"
              className="form-control"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Most Rated</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="toolbox-layout">
          <button
            onClick={() => handleLayoutChange('Gridt')}
            className={`btn-layout ${layout === 'list' ? 'active' : ''}`}
          >
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="10" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="10" height="4" />
            </svg>
          </button>

          <button
            onClick={() => handleLayoutChange('2cols')}
            className={`btn-layout ${layout === '2cols' ? 'active' : ''}`}
          >
            <svg width="10" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
            </svg>
          </button>

          <button
            onClick={() => handleLayoutChange('3cols')}
            className={`btn-layout ${layout === '3cols' ? 'active' : ''}`}
          >
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
            </svg>
          </button>

          <button
            onClick={() => handleLayoutChange('4cols')}
            className={`btn-layout ${layout === '4cols' ? 'active' : ''}`}
          >
            <svg width="22" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="18" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
              <rect x="18" y="6" width="4" height="4" />
            </svg>
          </button>
        </div>
      </div>
    </div>

        <div className="products mb-3">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-new">New</span>
                            <a href="product.html">
                                <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Women</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3>
                            <div className="product-price">$60.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '20%' }}></div>
                                </div>
                                <span className="ratings-text">( 2 Reviews )</span>
                            </div>
                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img src="assets/images/products/product-4-thumb.jpg" alt="product desc" />
                                </a>
                                <a href="#">
                                    <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc" />
                                </a>
                                <a href="#">
                                    <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="product.html">
                                <img src="assets/images/products/product-5.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Dresses</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Dark yellow lace cut out swing dress</a></h3>
                            <div className="product-price">$84.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '0%' }}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>
                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img src="assets/images/products/product-5-thumb.jpg" alt="product desc" />
                                </a>
                                <a href="#">
                                    <img src="assets/images/products/product-5-2-thumb.jpg" alt="product desc" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-out">Out of Stock</span>
                            <a href="product.html">
                                <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jackets</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                            <div className="product-price"><span className="out-price">$120.00</span></div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '80%' }}></div>
                                </div>
                                <span className="ratings-text">( 6 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="product.html">
                                <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jeans</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>
                            <div className="product-price">$76.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '20%' }}></div>
                                </div>
                                <span className="ratings-text">( 2 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-new">New</span>
                            <a href="product.html">
                                <img src="assets/images/products/product-8.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Shoes</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">White crochet flatform sandals</a></h3>
                            <div className="product-price">$40.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '80%' }}></div>
                                </div>
                                <span className="ratings-text">( 3 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-out">Out of Stock</span>
                            <a href="product.html">
                                <img src="assets/images/products/product-9.jpg" alt="Product image" className="product-image" />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            </div>
                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Accessories</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Black belted nylon backpack</a></h3>
                            <div className="product-price"><span className="out-price">$70.00</span></div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{ width: '60%' }}></div>
                                </div>
                                <span className="ratings-text">( 3 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
           


              <aside className="col-lg-3 order-lg-first">
                    <div className="sidebar sidebar-shop">
                      <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="#" className="sidebar-filter-clear">Clean All</a>
                      </div>

                    </div>

                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                          Category
                        </a>
                      </h3>

                      <div className="collapse show" id="widget-1">
                        <div className="widget-body">
                          <div className="filter-items filter-items-count">
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-1" />
                                <label className="custom-control-label" for="cat-1">Dresses</label>
                              </div>
                              <span className="item-count">3</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-2" />
                                <label className="custom-control-label" for="cat-2">T-shirts</label>
                              </div>
                              <span className="item-count">0</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-3" />
                                <label className="custom-control-label" for="cat-3">Bags</label>
                              </div>
                              <span className="item-count">4</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-4" />
                                <label className="custom-control-label" for="cat-4">Jackets</label>
                              </div>
                              <span className="item-count">2</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-5" />
                                <label className="custom-control-label" for="cat-5">Shoes</label>
                              </div>
                              <span className="item-count">2</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-6" />
                                <label className="custom-control-label" for="cat-6">Jumpers</label>
                              </div>
                              <span className="item-count">1</span>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-7" />
                                <label className="custom-control-label" for="cat-7">Jeans</label>
                              </div>
                              <span className="item-count">1</span>
                            </div>
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cat-8" />
                                <label className="custom-control-label" for="cat-8">Sportwear</label>
                              </div>
                              <span className="item-count">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                          Size
                        </a>
                      </h3>
                      <div className="collapse show" id="widget-2">
                        <div className="widget-body">
                          <div className="filter-items">
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked id="size-3" />
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked id="size-4" />
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                              </div>
                            </div>

                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="size-6" />
                                <label className="custom-control-label" htmlFor="size-6">XXL</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                            Colour
                          </a>
                        </h3>

                        <div className="collapse show" id="widget-3">
                          <div className="widget-body">
                            <div className="filter-colors">
                              <a href="#" style={{ background: '#b87145' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#f0c04a' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" className="selected" style={{ background: '#cc3333' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#3399cc' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#669933' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#f2719c' }}><span className="sr-only">Color Name</span></a>
                              <a href="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color Name</span></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                            Brand
                          </a>
                        </h3>

                        <div className="collapse show" id="widget-4">
                          <div className="widget-body">
                            <div className="filter-items">
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-1" />
                                  <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-2" />
                                  <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-3" />
                                  <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-4" />
                                  <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-5" />
                                  <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-6" />
                                  <label className="custom-control-label" htmlFor="brand-6">F&F</label>
                                </div>
                              </div>

                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="brand-7" />
                                  <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                            Price
                          </a>
                        </h3>

                        <div className="collapse show" id="widget-5">
                          <div className="widget-body">
                            <div className="filter-price">
                              <div className="filter-price-text">
                                Price Range:
                                <span id="filter-price-range"></span>
                              </div>

                              <div id="price-slider"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
            </div>
          </div>

        </div>
      </main>

    </div>
  );}

export default ShopGrid2;