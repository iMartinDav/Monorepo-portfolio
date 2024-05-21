import React, { useRef } from "react";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import BlockViewer from "../../../demo/components/BlockViewer";

const StoreFront = () => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);
    const btnRef10 = useRef(null);
    const btnRef11 = useRef(null);
    const btnRef12 = useRef(null);
    const btnRef13 = useRef(null);
    const btnRef14 = useRef(null);
    const btnRef15 = useRef(null);
    const btnRef16 = useRef(null);
    const btnRef17 = useRef(null);

    const block1 = `
<div className="surface-section">
    <div className="surface-900 px-4 lg:px-8 py-3 lg:py-3 flex flex-column sm:flex-row w-full justify-content-between align-items-center">
        <span className="text-0">Sign Up for 15% off your first order</span>
        <a tabIndex="0" className="cursor-pointer h-full inline-flex align-items-center mt-3 sm:mt-0 md:py-0">
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png" className="mr-2" alt="Flag" />
            <span className="text-0">EUR</span>
        </a>
    </div>
    <div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative">
        <StyleClass nodeRef={btnRef1} selector="#nav-2" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef1} className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3">
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <div id="nav-2" className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
            <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef2} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary
            py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto">
                            <span>Women</span>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                        <div className="grid flex-wrap">
                            <div className="col-12 md:col-6 xl:col-3">
                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                    <a ref={btnRef3} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Clothing</a>
                                </StyleClass>
                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                    <li className="hidden lg:block">
                                        <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                    </li>
                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">Clothing</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Dresses</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Blouses</li>
                                </ul>
                            </div>
                            <div className="col-12 md:col-6 xl:col-3">
                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                    <a ref={btnRef4} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Shoes</a>
                                </StyleClass>
                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                    <li className="hidden lg:block">
                                        <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                    </li>
                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">Shoes</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                                </ul>
                            </div>
                            <div className="col-12 md:col-6 xl:col-3">
                                <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                    <a ref={btnRef5} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Accessories</a>
                                </StyleClass>
                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                    <li className="hidden lg:block">
                                        <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                    </li>
                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">Accessories</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                                </ul>
                            </div>
                            <div className="col-12 md:col-6 xl:col-3">
                                <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                    <a ref={btnRef6} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Beauty</a>
                                </StyleClass>
                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                    <li className="hidden lg:block">
                                        <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                    </li>
                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">Beauty</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Anklets</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Earrings</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Rings</li>
                                    <li className="mb-3 cursor-pointer hover:text-900">Wedding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef7} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                            <span>Men</span>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                    </div>
                </li>
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef8} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                            <span>Kids</span>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex align-items-center justify-content-center py-3">
            <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" />
        </div>
        <div className="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
            <ul className="list-none p-0 m-0 flex w-full" style={{ minHeight: '30px' }}>
                <li className="flex flex-auto lg:flex-initial justify-content-center">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                        <i className="pi pi-search text-xl"></i>
                        <span className="hidden">Search</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex flex-auto lg:flex-initial justify-content-center">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                        <i className="pi pi-heart text-xl"></i>
                        <span className="hidden">Favorites</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex flex-auto lg:flex-initial justify-content-center">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                        <i className="pi pi-user text-xl"></i>
                        <span className="hidden">Sign In</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex flex-auto lg:flex-initial justify-content-center">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 hover:text-primary">
                        <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                        <span className="hidden">Cart</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex w-full lg:w-auto border-y-1 surface-border surface-overlay lg:hidden py-3 lg:py-0">
        <ul className="list-none p-0 m-0 flex w-full" style={{ minHeight: '30px' }}>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                    <i className="pi pi-search text-xl"></i>
                    <span className="hidden">Search</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                    <i className="pi pi-heart text-xl"></i>
                    <span className="hidden">Favorites</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                    <i className="pi pi-user text-xl"></i>
                    <span className="hidden">Sign In</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 hover:text-primary">
                    <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                    <span className="hidden">Cart</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>

    <div className="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-18.png)' }}>
        <div className="px-4 mx-4 lg:px-6 lg:mx-6">
            <span className="block text-3xl text-white mb-4">New Trend</span>
            <span className="block text-5xl font-medium text-white mb-4">Special Collection</span>
            <a tabIndex="0" className="p-ripple py-2 w-13rem text-center block mb-4 text-xl text-white font-medium border-2 cursor-pointer surface-border-0 border-round bg-white-alpha-30">Explore Collection
                <Ripple />
            </a>
        </div>
    </div>

    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-900 text-4xl font-medium mb-4 text-center lg:text-left">Seasonal Collection</div>
        <p className="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">Mata tincidunt dui ut ornare</p>

        <div className="grid -mt-3 -ml-3 -mr-3 flex-wrap">
            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-1.png" className="w-full h-full" alt="product" />
                <p className="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-2.png" className="w-full h-full" alt="product" />
                <p className="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-3.png" className="w-full h-full" alt="product" />
                <p className="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-4.png" className="w-full h-full" alt="product" />
                <p className="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-5.png" className="w-full h-full" alt="product" />
                <p className="text-600 uppercase font-medium my-3">Subtitle</p>
                <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
            </div>
        </div>

    </div>

    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-900 font-medium text-4xl mb-4">Popular Items</div>
        <p className="mt-0 p-0 mb-5 text-600 text-2xl">From Brand</p>

        <div className="grid -mt-3 -ml-3 -mr-3">
            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                    <div className="relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-1.png" className="w-full" alt="product-list-1-1"/>
                        <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                            <i className="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="text-900 text-xl ml-3">$14</span>
                    </div>
                    <span className="text-600">Black</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                    <div className="relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-2.png" className="w-full" alt="product-list-1-2" />
                        <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                            <i className="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="text-900 text-xl ml-3">$24</span>
                    </div>
                    <span className="text-600">Beige</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                    <div className="relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-3.png" className="w-full" alt="product-list-1-3"/>
                        <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                            <i className="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="text-900 text-xl ml-3">$42</span>
                    </div>
                    <span className="text-600">White</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="p-2">
                    <div className="relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-4.png" className="w-full" alt="product-list-1-4" />
                        <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                            <i className="pi pi-heart text-2xl text-500"></i>
                        </button>
                    </div>
                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="text-900 text-xl ml-3">$20</span>
                    </div>
                    <span className="text-600">Black</span>
                </div>
            </div>
        </div>
    </div>

    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="surface-900 text-0 p-4" style={{ borderRadius: '10px' }}>
            <div className="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
                <span className="inline-flex align-items-center mb-3 md:mb-0">
                    <i className="pi pi-shopping-cart text-base xl:text-2xl mr-3"></i>
                    <span className="text-base xl:text-2xl font-medium">Free Shipping</span>
                </span>
                <span className="inline-flex align-items-center mb-3 md:mb-0">
                    <i className="pi pi-refresh text-base xl:text-2xl mr-3"></i>
                    <span className="text-base xl:text-2xl font-medium">120 Days Return Policy</span>
                </span>
                <span className="inline-flex align-items-center">
                    <i className="pi pi-star text-base xl:text-2xl mr-3"></i>
                    <span className="text-base xl:text-2xl font-medium">10 Year Warranty</span>
                </span>
            </div>
        </div>
    </div>

    <div className="flex flex-wrap surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8 surface-900">
            <div className="text-4xl text-0 mb-3 font-medium">Promo Title Placeholder</div>
            <p className="line-height-3 mt-0 mb-7 p-0 text-0 text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
            <a tabIndex="0" className="p-ripple text-xl cursor-pointer surface-card text-900 text-center px-5 py-3 border-1 border-gray-200 hover:text-primary transition-duration-150 select-none block w-12rem">Read Story</a>
        </div>
        <div className="w-full md:w-6 bg-no-repeat bg-cover" style={{ background: "url('/demo/images/blocks/ecommerce/storefront/storefront-1-17.png')", minHeight: '400px' }}></div>
    </div>

    <div className="surface-50 px-4 py-8 md:px-6 lg:px-8">
        <span className="text-900 text-3xl font-medium block text-center lg:text-left">Get 25% Discount Today!</span>
        <span className="text-600 text-2xl block mt-4 text-center lg:text-left">Sign up our email list and know all about new collections of Peak</span>
        <div className="mt-4 mx-auto lg:mx-0" style={{ maxWidth: '38rem' }}>
            <div className="p-inputgroup">
                <InputText placeholder="Enter your email address" />
                <Button type="button" label="Subscribe" className="surface-900 text-0 px-5 border-none" />
            </div>
        </div>
        <Divider layout="horizontal" className="surface-border" />
        <div className="grid grid-nogutter text-center lg:text-left">
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column align-items-center lg:align-items-start">
                <img src="/demo/images/blocks/logos/peak-700.svg" className="w-9rem mx-auto lg:mx-0" alt="Peak logo" />
                <div className="flex align-items-center w-full mt-5 justify-content-center lg:justify-content-start">
                    <a tabIndex="0" className="cursor-pointer mr-3">
                        <i className="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
                    </a>
                    <a tabIndex="0" className="cursor-pointer mr-3">
                        <i className="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
                    </a>
                    <a tabIndex="0" className="cursor-pointer mr-3">
                        <i className="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
                    </a>
                    <a tabIndex="0" className="cursor-pointer">
                        <i className="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
                    </a>
                </div>
                <span className="text-600 block mt-4"><i className="pi pi-phone mr-2"></i>1234 / 12 34 567</span>
                <a tabIndex="0" className="text-600 block mt-4 cursor-pointer hover:text-900 transition-duration-150 select-none w-8rem"><i className="pi pi-map-marker mr-2"></i>Contact Us</a>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                <span className="text-900 text-xl font-medium block">Company</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                <span className="text-900 text-xl font-medium block">Account</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                <span className="text-900 text-xl font-medium block">Legal</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section">
    <section className="surface-50 text-900 font-medium py-2 text-center text-xs sm:text-base"><strong>15%</strong> off on your first order.</section>
    <div className="bg-gray-900 px-3 sm:px-6 py-3 flex align-items-stretch justify-content-center sm:justify-content-end border-bottom-1 surface-border text-sm">
        <a className="p-ripple text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
            <i className="pi pi-sign-in mr-2 sm:mr-3 text-sm"></i>
            <span>Sign In</span>
            <Ripple />
        </a>
        <div className="text-white mx-1 sm:mx-2">|</div>
        <a className="p-ripple text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
            <i className="pi pi-user mr-2 sm:mr-3 text-sm"></i>
            <span>Create Account</span>
            <Ripple />
        </a>
    </div>
    <div className="surface-overlay px-3 sm:px-6 flex align-items-stretch relative" style={{ minHeight: '80px' }}>
        <StyleClass nodeRef={btnRef9} selector="#nav-1" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef9} className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5">
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
            </a>
        </StyleClass>

        <div className="flex align-items-center justify-content-center">
            <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" className="lg:mr-6 h-2rem sm:h-3rem" />
        </div>
        <div id="nav-1" className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
            <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef10} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                            <span>Women</span>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                        <div className="flex flex-column lg:flex-row lg:justify-content-between">
                            <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef11} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Clothing</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Clothing</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Dresses</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Blouses</li>
                            </ul>
                            <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef12} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Shoes</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Shoes</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                            </ul>
                            <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef13} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Accessories</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Accessories</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                            </ul>
                            <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef14} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Jewelry</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Jewelry</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Anklets</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Earrings</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Rings</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Wedding</li>
                            </ul>
                            <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef15} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Brands</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Brands</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Hyper</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Peak</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Alfred</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Bastion</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Charot</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Hodly</li>
                            </ul>
                            <ul className="list-none p-0 m-0 text-700">
                                <li className="mt-5 sm:mt-0 mb-5 flex flex-column align-items-center">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png" alt="Image" style={{ borderRadius: '12px' }} className="w-full lg:w-auto" />
                                    <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">New Products</span>
                                </li>
                                <li className="mb-5 flex flex-column align-items-center">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png" alt="Image" style={{ borderRadius: '12px' }} className="w-full lg:w-auto" />
                                    <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">Discounts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef16} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                            <span>Men</span>
                            <Ripple />
                        </a>
                    </StyleClass>

                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                    </div>
                </li>
                <li className="flex flex-column lg:flex-row">
                    <StyleClass nodeRef={btnRef17} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef17} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                            <span>Kids</span>
                            <Ripple />
                        </a>
                    </StyleClass>

                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex ml-auto">
            <ul className="list-none p-0 m-0 flex">
                <li className="flex">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                        <i className="pi pi-search mr-2 lg:mr-3 text-xl sm:text-base"></i>
                        <span className="hidden lg:inline">Search</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                        <i className="pi pi-heart mr-2 lg:mr-3 text-xl sm:text-base"></i>
                        <span className="hidden lg:inline">Favorites</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex">
                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3hover:text-primary">
                        <i className="pi pi-shopping-cart lg:mr-3 text-xl sm:text-base p-overlay-badge"><Badge /></i>
                        <span className="hidden lg:inline">Cart</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="surface-section grid grid-nogutter">
        <div className="col-12 lg:col-6" style={{ minHeight: '60rem' }}>
            <div className="grid grid-nogutter h-full">
                <div className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end" style={{ background: 'url(/demo/images/blocks/ecommerce/storefront/storefront-1-9.png)' }}>
                    <span className="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabIndex="0" className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1">Explore Category <i className="pi pi-arrow-right ml-2"></i></a>
                </div>
                <div className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column lg:align-items-end justify-content-end" style={{ background: 'url(/demo/images/blocks/ecommerce/storefront/storefront-1-12.png)' }}>
                    <span className="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabIndex="0" className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round">Explore Category <i className="pi pi-arrow-right ml-2"></i></a>
                </div>
                <div className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end" style={{ background: 'url(/demo/images/blocks/ecommerce/storefront/storefront-1-13.png)' }}>
                    <span className="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabIndex="0" className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1">Explore Category <i className="pi pi-arrow-right ml-2"></i></a>
                </div>
                <div className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column lg:align-items-end justify-content-end" style={{ background: 'url(/demo/images/blocks/ecommerce/storefront/storefront-1-10.png)' }}>
                    <span className="text-white block text-2xl font-bold mb-2">Category Title</span>
                    <a tabIndex="0" className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round">Explore Category <i className="pi pi-arrow-right ml-2"></i></a>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end lg:justify-content-start" style={{ background: 'url(/demo/images/blocks/ecommerce/storefront/storefront-1-11.png)', minHeight: '60rem' }}>
            <span className="text-white block text-2xl font-bold mb-2">Category Title</span>
            <a tabIndex="0" className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1">Explore Category <i className="pi pi-arrow-right ml-2"></i></a>
        </div>
    </div>
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid">
            <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                <span className="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
                    <i className="pi pi-arrow-right text-white text-2xl"></i>
                </span>
                <span className="text-900 text-xl font-medium mb-4">Pay Later in 30 Days</span>
                <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
            <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
                    <i className="pi pi-shopping-cart text-white text-2xl"></i>
                </span>
                <span className="text-900 text-xl font-medium mb-4">Free Shipping</span>
                <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
            <div className="col-12 md:col-4 flex flex-column align-items-center">
                <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
                    <i className="pi pi-shield text-white text-2xl"></i>
                </span>
                <span className="text-900 text-xl font-medium mb-4">Secure Payment</span>
                <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
    </div>
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-nogutter -ml-3 -mr-3">
            <div className="col-12 lg:col-6 p-3">
                <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-28.png)', minHeight: '40rem' }}>
                    <div className="p-4 align-self-start">
                        <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                        <span className="text-white text-lg line-height-3">Quis varius quam quisque id diam. A pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.</span>
                    </div>
                    <div className="p-4 align-self-end">
                        <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="grid grid-nogutter lg:flex-column">
                    <div className="col-12 p-3">
                        <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-27.png)' }}>
                            <div className="p-4 align-self-start">
                                <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                                <span className="text-white text-lg line-height-3">Quis varius quam quisque id diam</span>
                            </div>
                            <div className="p-4 align-self-end">
                                <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3">
                        <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-26.png)' }}>
                            <div className="p-4 align-self-start">
                                <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                                <span className="text-white text-lg line-height-3">Vitae purus faucibus ornare</span>
                            </div>
                            <div className="p-4 align-self-end">
                                <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap -mr-3 -ml-3">
            <div className="p-3 w-full xl:w-6">
                <div className="bg-no-repeat bg-cover bg-center p-3 border-round" style={{ background: "url('/demo/images/blocks/ecommerce/storefront/storefront-1-8.png')" }}>
                    <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                        <div className="flex-1 text-center bg-white-alpha-40 font-medium" style={{ backdropFilter: 'blur(15px)' }}>
                            <div className="p-6 flex flex-column align-items-center text-gray-900">
                                <span className="text-xl mb-5">Up To</span>
                                <span className="text-xl mb-5 text-5xl">25 <span className="text-xl">% OFF</span></span>
                                <span className="text-xl">Exclusive JEWELRY</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-no-repeat bg-cover bg-center" style={{ background: "url('/demo/images/blocks/ecommerce/storefront/storefront-1-8.png')", minHeight: '200px' }}></div>
                    </div>
                </div>
            </div>
            <div className="p-3 w-full xl:w-6">
                <div className="bg-no-repeat bg-cover bg-center p-3 border-round" style={{ background: "url('/demo/images/blocks/ecommerce/storefront/storefront-1-7.png')" }}>
                    <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                        <div className="flex-1 text-center bg-white-alpha-40 font-medium" style={{ backdropFilter: 'blur(15px)' }}>
                            <div className="p-6 flex flex-column align-items-center text-gray-900">
                                <span className="text-xl mb-5">Up To</span>
                                <span className="text-xl mb-5 text-5xl">25 <span className="text-xl">% OFF</span></span>
                                <span className="text-xl">Exclusive JEWELRY</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-no-repeat bg-cover bg-center" style={{ background: "url('/demo/images/blocks/ecommerce/storefront/storefront-1-7.png')", minHeight: '200px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8 mx-2">
        <div className="grid border-1 surface-border border-round">
            <div className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-1.png" className="w-full" alt="product-list-6-1" />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 surface-border">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-2.png" className="w-full" alt="product-list-6-2" />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 md:border-right-1 lg:border-right-none border-bottom-1 surface-border">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-3.png" className="w-full" alt="product-list-6-3" />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-4.png" className="w-full" alt="product-list-6-4" />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 surface-border">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-5.png" className="w-full" alt="product-list-6-5" />
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4">
                <div className="p-4">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-6.png" className="w-full" alt="product-list-6-6"/>
                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                    </div>
                    <span className="text-900">Brand</span>
                    <div className="text-900 text-xl font-medium mt-3">$120.00</div>
                </div>
            </div>
        </div>
    </div>
    <div className="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
        <div className="grid grid-nogutter flex-wrap -mr-3 -ml-3 text-center md:text-left">
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
                <span className="text-900 text-xl block">Company</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
                <span className="text-900 text-xl block">Account</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
                <span className="text-900 text-xl block">Legal</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 mb-4 lg:mb-0">
                <span className="text-900 text-xl block">Subscribe</span>
                <span className="text-500 block mt-4 line-height-3">Join our community to receieve the latest updates and special promotions.</span>
                <div className="p-inputgroup mt-3 mx-auto lg:mx-0" style={{ maxWidth: '30rem' }}>
                    <Button type="button" icon="pi pi-envelope" className="text-500 surface-100 surface-border" />
                    <InputText placeholder="Email" className="border-y-1 text-500 border-x-none surface-border" />
                    <Button icon="pi pi-arrow-right" className="text-500 surface-100 surface-border" />
                </div>
            </div>
        </div>
    </div>
    <div className="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
        <div className="col-fixed flex justify-content-center md:justify-content-start flex-wrap flex-order-1 lg:flex-order-0">
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-21.svg" className="w-3rem mb-3 md:mb-0 mr-3" alt="Amex" />
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-22.svg" className="w-3rem mb-3 md:mb-0 mr-3" alt="Apple Pay" />
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-23.svg" className="w-3rem mb-3 md:mb-0 mr-3" alt="Mastercard" />
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-25.svg" className="w-3rem mb-3 md:mb-0 mr-3" alt="Visa" />
            <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-24.svg" className="w-3rem  mb-3 md:mb-0" alt="PayPal" />
        </div>
        <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
            <a tabIndex="0" className="cursor-pointer mr-3">
                <i className="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabIndex="0" className="cursor-pointer mr-3">
                <i className="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabIndex="0" className="cursor-pointer mr-3">
                <i className="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
            <a tabIndex="0" className="cursor-pointer">
                <i className="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
            </a>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Storefront Pages</div>
            <BlockViewer header="Storefront Page #1" code={block1}>
                <div className="surface-section">
                    <div className="surface-900 px-4 lg:px-8 py-3 lg:py-3 flex flex-column sm:flex-row w-full justify-content-between align-items-center">
                        <span className="text-0">
                            Sign Up for 15% off your first order
                        </span>
                        <a
                            tabIndex="0"
                            className="cursor-pointer h-full inline-flex align-items-center mt-3 sm:mt-0 md:py-0"
                        >
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png"
                                className="mr-2"
                                alt="Flag"
                            />
                            <span className="text-0">EUR</span>
                        </a>
                    </div>
                    <div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative">
                        <StyleClass
                            nodeRef={btnRef1}
                            selector="#nav-2"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef1}
                                className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3"
                            >
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <div
                            id="nav-2"
                            className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
                        >
                            <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef2}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef2}
                                            className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary
                            py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Women</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                                        <div className="grid flex-wrap">
                                            <div className="col-12 md:col-6 xl:col-3">
                                                <StyleClass
                                                    nodeRef={btnRef3}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    leaveToClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef3}
                                                        className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                    >
                                                        Clothing
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                    <li className="hidden lg:block">
                                                        <img
                                                            src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png"
                                                            alt="Image"
                                                            height="160"
                                                            style={{
                                                                borderRadius:
                                                                    "12px",
                                                            }}
                                                        />
                                                    </li>
                                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                        Clothing
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Dresses
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Jeans
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Pants
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Skirts
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Sweaters
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Blouses
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 md:col-6 xl:col-3">
                                                <StyleClass
                                                    nodeRef={btnRef4}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    leaveToClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef4}
                                                        className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                    >
                                                        Shoes
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                    <li className="hidden lg:block">
                                                        <img
                                                            src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png"
                                                            alt="Image"
                                                            height="160"
                                                            style={{
                                                                borderRadius:
                                                                    "12px",
                                                            }}
                                                        />
                                                    </li>
                                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                        Shoes
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Athletic
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Boots
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Sneakers
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Flats
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Outdoor
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 md:col-6 xl:col-3">
                                                <StyleClass
                                                    nodeRef={btnRef5}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    leaveToClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef5}
                                                        className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                    >
                                                        Accessories
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                    <li className="hidden lg:block">
                                                        <img
                                                            src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png"
                                                            alt="Image"
                                                            height="160"
                                                            style={{
                                                                borderRadius:
                                                                    "12px",
                                                            }}
                                                        />
                                                    </li>
                                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                        Accessories
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Handbags
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Gloves
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Belts
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Hats
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Earmuffs
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 md:col-6 xl:col-3">
                                                <StyleClass
                                                    nodeRef={btnRef6}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    leaveToClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef6}
                                                        className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                    >
                                                        Beauty
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                    <li className="hidden lg:block">
                                                        <img
                                                            src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png"
                                                            alt="Image"
                                                            height="160"
                                                            style={{
                                                                borderRadius:
                                                                    "12px",
                                                            }}
                                                        />
                                                    </li>
                                                    <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                        Beauty
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Anklets
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Bracelets
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Earrings
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Necklaces
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Rings
                                                    </li>
                                                    <li className="mb-3 cursor-pointer hover:text-900">
                                                        Wedding
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef7}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef7}
                                            className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Men</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                    </div>
                                </li>
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef8}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef8}
                                            className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Kids</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex align-items-center justify-content-center py-3">
                            <img
                                src="/demo/images/blocks/logos/peak-700.svg"
                                alt="Image"
                                height="40"
                            />
                        </div>
                        <div className="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
                            <ul
                                className="list-none p-0 m-0 flex w-full"
                                style={{ minHeight: "30px" }}
                            >
                                <li className="flex flex-auto lg:flex-initial justify-content-center">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                                        <i className="pi pi-search text-xl"></i>
                                        <span className="hidden">Search</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex flex-auto lg:flex-initial justify-content-center">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                                        <i className="pi pi-heart text-xl"></i>
                                        <span className="hidden">
                                            Favorites
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex flex-auto lg:flex-initial justify-content-center">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                                        <i className="pi pi-user text-xl"></i>
                                        <span className="hidden">Sign In</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex flex-auto lg:flex-initial justify-content-center">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 hover:text-primary">
                                        <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                            <Badge />
                                        </i>
                                        <span className="hidden">Cart</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-auto border-y-1 surface-border surface-overlay lg:hidden py-3 lg:py-0">
                        <ul
                            className="list-none p-0 m-0 flex w-full"
                            style={{ minHeight: "30px" }}
                        >
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 hover:text-primary">
                                    <i className="pi pi-search text-xl"></i>
                                    <span className="hidden">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                                    <i className="pi pi-heart text-xl"></i>
                                    <span className="hidden">Favorites</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 hover:text-primary">
                                    <i className="pi pi-user text-xl"></i>
                                    <span className="hidden">Sign In</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 hover:text-primary">
                                    <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                        <Badge />
                                    </i>
                                    <span className="hidden">Cart</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-18.png)",
                        }}
                    >
                        <div className="px-4 mx-4 lg:px-6 lg:mx-6">
                            <span className="block text-3xl text-white mb-4">
                                New Trend
                            </span>
                            <span className="block text-5xl font-medium text-white mb-4">
                                Special Collection
                            </span>
                            <a
                                tabIndex="0"
                                className="p-ripple py-2 w-13rem text-center block mb-4 text-xl text-white font-medium border-2 cursor-pointer surface-border-0 border-round bg-white-alpha-30"
                            >
                                Explore Collection
                                <Ripple />
                            </a>
                        </div>
                    </div>

                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="text-900 text-4xl font-medium mb-4 text-center lg:text-left">
                            Seasonal Collection
                        </div>
                        <p className="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">
                            Mata tincidunt dui ut ornare
                        </p>

                        <div className="grid -mt-3 -ml-3 -mr-3 flex-wrap">
                            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-1.png"
                                    className="w-full h-full"
                                    alt="product"
                                />
                                <p className="text-600 uppercase font-medium my-3">
                                    Subtitle
                                </p>
                                <a
                                    tabIndex="0"
                                    className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                                >
                                    Category Title{" "}
                                    <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                                </a>
                            </div>
                            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-2.png"
                                    className="w-full h-full"
                                    alt="product"
                                />
                                <p className="text-600 uppercase font-medium my-3">
                                    Subtitle
                                </p>
                                <a
                                    tabIndex="0"
                                    className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                                >
                                    Category Title{" "}
                                    <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                                </a>
                            </div>
                            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-3.png"
                                    className="w-full h-full"
                                    alt="product"
                                />
                                <p className="text-600 uppercase font-medium my-3">
                                    Subtitle
                                </p>
                                <a
                                    tabIndex="0"
                                    className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                                >
                                    Category Title{" "}
                                    <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                                </a>
                            </div>
                            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-4.png"
                                    className="w-full h-full"
                                    alt="product"
                                />
                                <p className="text-600 uppercase font-medium my-3">
                                    Subtitle
                                </p>
                                <a
                                    tabIndex="0"
                                    className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                                >
                                    Category Title{" "}
                                    <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                                </a>
                            </div>
                            <div className="col flex px-3 flex-column mt-4 md:mt-0">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-5.png"
                                    className="w-full h-full"
                                    alt="product"
                                />
                                <p className="text-600 uppercase font-medium my-3">
                                    Subtitle
                                </p>
                                <a
                                    tabIndex="0"
                                    className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                                >
                                    Category Title{" "}
                                    <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="text-900 font-medium text-4xl mb-4">
                            Popular Items
                        </div>
                        <p className="mt-0 p-0 mb-5 text-600 text-2xl">
                            From Brand
                        </p>

                        <div className="grid -mt-3 -ml-3 -mr-3">
                            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                                <div className="p-2">
                                    <div className="relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-1-1.png"
                                            className="w-full"
                                            alt="product-list-1-1"
                                        />
                                        <button
                                            type="text"
                                            className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-heart text-2xl text-500"></i>
                                        </button>
                                    </div>
                                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span className="text-900 text-xl ml-3">
                                            $14
                                        </span>
                                    </div>
                                    <span className="text-600">Black</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                                <div className="p-2">
                                    <div className="relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-1-2.png"
                                            className="w-full"
                                            alt="product-list-1-2"
                                        />
                                        <button
                                            type="text"
                                            className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-heart text-2xl text-500"></i>
                                        </button>
                                    </div>
                                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span className="text-900 text-xl ml-3">
                                            $24
                                        </span>
                                    </div>
                                    <span className="text-600">Beige</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                                <div className="p-2">
                                    <div className="relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-1-3.png"
                                            className="w-full"
                                            alt="product-list-1-3"
                                        />
                                        <button
                                            type="text"
                                            className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-heart text-2xl text-500"></i>
                                        </button>
                                    </div>
                                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span className="text-900 text-xl ml-3">
                                            $42
                                        </span>
                                    </div>
                                    <span className="text-600">White</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="p-2">
                                    <div className="relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-1-4.png"
                                            className="w-full"
                                            alt="product-list-1-4"
                                        />
                                        <button
                                            type="text"
                                            className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-heart text-2xl text-500"></i>
                                        </button>
                                    </div>
                                    <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span className="text-900 text-xl ml-3">
                                            $20
                                        </span>
                                    </div>
                                    <span className="text-600">Black</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div
                            className="surface-900 text-0 p-4"
                            style={{ borderRadius: "10px" }}
                        >
                            <div className="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
                                <span className="inline-flex align-items-center mb-3 md:mb-0">
                                    <i className="pi pi-shopping-cart text-base xl:text-2xl mr-3"></i>
                                    <span className="text-base xl:text-2xl font-medium">
                                        Free Shipping
                                    </span>
                                </span>
                                <span className="inline-flex align-items-center mb-3 md:mb-0">
                                    <i className="pi pi-refresh text-base xl:text-2xl mr-3"></i>
                                    <span className="text-base xl:text-2xl font-medium">
                                        120 Days Return Policy
                                    </span>
                                </span>
                                <span className="inline-flex align-items-center">
                                    <i className="pi pi-star text-base xl:text-2xl mr-3"></i>
                                    <span className="text-base xl:text-2xl font-medium">
                                        10 Year Warranty
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8 surface-900">
                            <div className="text-4xl text-0 mb-3 font-medium">
                                Promo Title Placeholder
                            </div>
                            <p className="line-height-3 mt-0 mb-7 p-0 text-0 text-2xl">
                                Malesuada bibendum arcu vitae elementum
                                curabitur vitae nunc. Aliquam nulla facilisi
                                cras fermentum. Et egestas quis ipsum
                                suspendisse ultrices.
                            </p>
                            <a
                                tabIndex="0"
                                className="p-ripple text-xl cursor-pointer surface-card text-900 text-center px-5 py-3 border-1 border-gray-200 hover:text-primary transition-duration-150 select-none block w-12rem"
                            >
                                Read Story
                            </a>
                        </div>
                        <div
                            className="w-full md:w-6 bg-no-repeat bg-cover"
                            style={{
                                background:
                                    "url('/demo/images/blocks/ecommerce/storefront/storefront-1-17.png')",
                                minHeight: "400px",
                            }}
                        ></div>
                    </div>

                    <div className="surface-50 px-4 py-8 md:px-6 lg:px-8">
                        <span className="text-900 text-3xl font-medium block text-center lg:text-left">
                            Get 25% Discount Today!
                        </span>
                        <span className="text-600 text-2xl block mt-4 text-center lg:text-left">
                            Sign up our email list and know all about new
                            collections of Peak
                        </span>
                        <div
                            className="mt-4 mx-auto lg:mx-0"
                            style={{ maxWidth: "38rem" }}
                        >
                            <div className="p-inputgroup">
                                <InputText placeholder="Enter your email address" />
                                <Button
                                    type="button"
                                    label="Subscribe"
                                    className="surface-900 text-0 px-5 border-none"
                                />
                            </div>
                        </div>
                        <Divider
                            layout="horizontal"
                            className="surface-border"
                        />
                        <div className="grid grid-nogutter text-center lg:text-left">
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column align-items-center lg:align-items-start">
                                <img
                                    src="/demo/images/blocks/logos/peak-700.svg"
                                    className="w-9rem mx-auto lg:mx-0"
                                    alt="Peak logo"
                                />
                                <div className="flex align-items-center w-full mt-5 justify-content-center lg:justify-content-start">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer mr-3"
                                    >
                                        <i className="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
                                    </a>
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer mr-3"
                                    >
                                        <i className="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
                                    </a>
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer mr-3"
                                    >
                                        <i className="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
                                    </a>
                                    <a tabIndex="0" className="cursor-pointer">
                                        <i className="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
                                    </a>
                                </div>
                                <span className="text-600 block mt-4">
                                    <i className="pi pi-phone mr-2"></i>1234 /
                                    12 34 567
                                </span>
                                <a
                                    tabIndex="0"
                                    className="text-600 block mt-4 cursor-pointer hover:text-900 transition-duration-150 select-none w-8rem"
                                >
                                    <i className="pi pi-map-marker mr-2"></i>
                                    Contact Us
                                </a>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                                <span className="text-900 text-xl font-medium block">
                                    Company
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            About Peak
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Factories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Environmental Initiatives
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                                <span className="text-900 text-xl font-medium block">
                                    Account
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Manage Account
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Saved Items
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            My Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Wishlist
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Orders & Returns
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 mt-4 flex flex-column">
                                <span className="text-900 text-xl font-medium block">
                                    Legal
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Data Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Legal Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Storefront Page #2" code={block2}>
                <div className="surface-section">
                    <section className="surface-50 text-900 font-medium py-2 text-center text-xs sm:text-base">
                        <strong>15%</strong> off on your first order.
                    </section>
                    <div className="bg-gray-900 px-3 sm:px-6 py-3 flex align-items-stretch justify-content-center sm:justify-content-end border-bottom-1 surface-border text-sm">
                        <a className="p-ripple text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
                            <i className="pi pi-sign-in mr-2 sm:mr-3 text-sm"></i>
                            <span>Sign In</span>
                            <Ripple />
                        </a>
                        <div className="text-white mx-1 sm:mx-2">|</div>
                        <a className="p-ripple text-white font-medium inline-flex align-items-center cursor-pointer px-3 hover:text-gray-200">
                            <i className="pi pi-user mr-2 sm:mr-3 text-sm"></i>
                            <span>Create Account</span>
                            <Ripple />
                        </a>
                    </div>
                    <div
                        className="surface-overlay px-3 sm:px-6 flex align-items-stretch relative"
                        style={{ minHeight: "80px" }}
                    >
                        <StyleClass
                            nodeRef={btnRef9}
                            selector="#nav-1"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef9}
                                className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5"
                            >
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>

                        <div className="flex align-items-center justify-content-center">
                            <img
                                src="/demo/images/blocks/logos/peak-700.svg"
                                alt="Image"
                                className="lg:mr-6 h-2rem sm:h-3rem"
                            />
                        </div>
                        <div
                            id="nav-1"
                            className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
                        >
                            <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef10}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef10}
                                            className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Women</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                                        <div className="flex flex-column lg:flex-row lg:justify-content-between">
                                            <StyleClass
                                                nodeRef={btnRef11}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef11}
                                                    className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none"
                                                >
                                                    Clothing
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                                                    Clothing
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Dresses
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Jeans
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Pants
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Skirts
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Sweaters
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Blouses
                                                </li>
                                            </ul>
                                            <StyleClass
                                                nodeRef={btnRef12}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef12}
                                                    className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none"
                                                >
                                                    Shoes
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                                                    Shoes
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Athletic
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Boots
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Sneakers
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Flats
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Outdoor
                                                </li>
                                            </ul>
                                            <StyleClass
                                                nodeRef={btnRef13}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef13}
                                                    className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none"
                                                >
                                                    Accessories
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                                                    Accessories
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Handbags
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Gloves
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Belts
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Hats
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Earmuffs
                                                </li>
                                            </ul>
                                            <StyleClass
                                                nodeRef={btnRef14}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef14}
                                                    className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none"
                                                >
                                                    Jewelry
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                                                    Jewelry
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Anklets
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Bracelets
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Earrings
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Necklaces
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Rings
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Wedding
                                                </li>
                                            </ul>
                                            <StyleClass
                                                nodeRef={btnRef15}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef15}
                                                    className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none"
                                                >
                                                    Brands
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="font-bold mb-5 text-xl text-900 hidden lg:block">
                                                    Brands
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Hyper
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Peak
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Alfred
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Bastion
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Charot
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Hodly
                                                </li>
                                            </ul>
                                            <ul className="list-none p-0 m-0 text-700">
                                                <li className="mt-5 sm:mt-0 mb-5 flex flex-column align-items-center">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png"
                                                        alt="Image"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                        className="w-full lg:w-auto"
                                                    />
                                                    <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">
                                                        New Products
                                                    </span>
                                                </li>
                                                <li className="mb-5 flex flex-column align-items-center">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png"
                                                        alt="Image"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                        className="w-full lg:w-auto"
                                                    />
                                                    <span className="inline-flex surface-0 text-900 px-3 py-2 border-round -mt-5 font-medium">
                                                        Discounts
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef16}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef16}
                                            className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Men</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>

                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                    </div>
                                </li>
                                <li className="flex flex-column lg:flex-row">
                                    <StyleClass
                                        nodeRef={btnRef17}
                                        selector="@next"
                                        enterClassName="hidden"
                                        leaveToClassName="hidden"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef17}
                                            className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
                            hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                        >
                                            <span>Kids</span>
                                            <Ripple />
                                        </a>
                                    </StyleClass>

                                    <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                        <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex ml-auto">
                            <ul className="list-none p-0 m-0 flex">
                                <li className="flex">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                                        <i className="pi pi-search mr-2 lg:mr-3 text-xl sm:text-base"></i>
                                        <span className="hidden lg:inline">
                                            Search
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                                        <i className="pi pi-heart mr-2 lg:mr-3 text-xl sm:text-base"></i>
                                        <span className="hidden lg:inline">
                                            Favorites
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex">
                                    <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                                        <i className="pi pi-shopping-cart lg:mr-3 text-xl sm:text-base p-overlay-badge">
                                            <Badge />
                                        </i>
                                        <span className="hidden lg:inline">
                                            Cart
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="surface-section grid grid-nogutter">
                        <div
                            className="col-12 lg:col-6"
                            style={{ minHeight: "60rem" }}
                        >
                            <div className="grid grid-nogutter h-full">
                                <div
                                    className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end"
                                    style={{
                                        background:
                                            "url(/demo/images/blocks/ecommerce/storefront/storefront-1-9.png)",
                                    }}
                                >
                                    <span className="text-white block text-2xl font-bold mb-2">
                                        Category Title
                                    </span>
                                    <a
                                        tabIndex="0"
                                        className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1"
                                    >
                                        Explore Category{" "}
                                        <i className="pi pi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                                <div
                                    className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column lg:align-items-end justify-content-end"
                                    style={{
                                        background:
                                            "url(/demo/images/blocks/ecommerce/storefront/storefront-1-12.png)",
                                    }}
                                >
                                    <span className="text-white block text-2xl font-bold mb-2">
                                        Category Title
                                    </span>
                                    <a
                                        tabIndex="0"
                                        className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round"
                                    >
                                        Explore Category{" "}
                                        <i className="pi pi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                                <div
                                    className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end"
                                    style={{
                                        background:
                                            "url(/demo/images/blocks/ecommerce/storefront/storefront-1-13.png)",
                                    }}
                                >
                                    <span className="text-white block text-2xl font-bold mb-2">
                                        Category Title
                                    </span>
                                    <a
                                        tabIndex="0"
                                        className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1"
                                    >
                                        Explore Category{" "}
                                        <i className="pi pi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                                <div
                                    className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column lg:align-items-end justify-content-end"
                                    style={{
                                        background:
                                            "url(/demo/images/blocks/ecommerce/storefront/storefront-1-10.png)",
                                    }}
                                >
                                    <span className="text-white block text-2xl font-bold mb-2">
                                        Category Title
                                    </span>
                                    <a
                                        tabIndex="0"
                                        className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round"
                                    >
                                        Explore Category{" "}
                                        <i className="pi pi-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 lg:col-6 bg-no-repeat bg-center bg-cover p-4 flex flex-column align-items-start justify-content-end lg:justify-content-start"
                            style={{
                                background:
                                    "url(/demo/images/blocks/ecommerce/storefront/storefront-1-11.png)",
                                minHeight: "60rem",
                            }}
                        >
                            <span className="text-white block text-2xl font-bold mb-2">
                                Category Title
                            </span>
                            <a
                                tabIndex="0"
                                className="p-ripple text-white font-medium cursor-pointer p-2 flex align-items-center border-round lg:-ml-1"
                            >
                                Explore Category{" "}
                                <i className="pi pi-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="grid">
                            <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                                <span className="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
                                    <i className="pi pi-arrow-right text-white text-2xl"></i>
                                </span>
                                <span className="text-900 text-xl font-medium mb-4">
                                    Pay Later in 30 Days
                                </span>
                                <p className="text-600 line-height-3 py-0 m-0 px-3">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                            <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                                <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
                                    <i className="pi pi-shopping-cart text-white text-2xl"></i>
                                </span>
                                <span className="text-900 text-xl font-medium mb-4">
                                    Free Shipping
                                </span>
                                <p className="text-600 line-height-3 py-0 m-0 px-3">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                            <div className="col-12 md:col-4 flex flex-column align-items-center">
                                <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
                                    <i className="pi pi-shield text-white text-2xl"></i>
                                </span>
                                <span className="text-900 text-xl font-medium mb-4">
                                    Secure Payment
                                </span>
                                <p className="text-600 line-height-3 py-0 m-0 px-3">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="grid grid-nogutter -ml-3 -mr-3">
                            <div className="col-12 lg:col-6 p-3">
                                <div
                                    className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center"
                                    style={{
                                        background:
                                            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-28.png)",
                                        minHeight: "40rem",
                                    }}
                                >
                                    <div className="p-4 align-self-start">
                                        <div className="text-white text-2xl font-bold mb-2">
                                            Category Title
                                        </div>
                                        <span className="text-white text-lg line-height-3">
                                            Quis varius quam quisque id diam. A
                                            pellentesque sit amet porttitor
                                            eget. Vitae purus faucibus ornare
                                            suspendisse sed nisi lacus.
                                        </span>
                                    </div>
                                    <div className="p-4 align-self-end">
                                        <a
                                            tabIndex="0"
                                            className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                        >
                                            Shop Now
                                            <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="grid grid-nogutter lg:flex-column">
                                    <div className="col-12 p-3">
                                        <div
                                            className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem"
                                            style={{
                                                background:
                                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-27.png)",
                                            }}
                                        >
                                            <div className="p-4 align-self-start">
                                                <div className="text-white text-2xl font-bold mb-2">
                                                    Category Title
                                                </div>
                                                <span className="text-white text-lg line-height-3">
                                                    Quis varius quam quisque id
                                                    diam
                                                </span>
                                            </div>
                                            <div className="p-4 align-self-end">
                                                <a
                                                    tabIndex="0"
                                                    className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                                >
                                                    Shop Now
                                                    <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-3">
                                        <div
                                            className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem"
                                            style={{
                                                background:
                                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/storefront/storefront-1-26.png)",
                                            }}
                                        >
                                            <div className="p-4 align-self-start">
                                                <div className="text-white text-2xl font-bold mb-2">
                                                    Category Title
                                                </div>
                                                <span className="text-white text-lg line-height-3">
                                                    Vitae purus faucibus ornare
                                                </span>
                                            </div>
                                            <div className="p-4 align-self-end">
                                                <a
                                                    tabIndex="0"
                                                    className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                                >
                                                    Shop Now
                                                    <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="flex flex-wrap -mr-3 -ml-3">
                            <div className="p-3 w-full xl:w-6">
                                <div
                                    className="bg-no-repeat bg-cover bg-center p-3 border-round"
                                    style={{
                                        background:
                                            "url('/demo/images/blocks/ecommerce/storefront/storefront-1-8.png')",
                                    }}
                                >
                                    <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                                        <div
                                            className="flex-1 text-center bg-white-alpha-40 font-medium"
                                            style={{
                                                backdropFilter: "blur(15px)",
                                            }}
                                        >
                                            <div className="p-6 flex flex-column align-items-center text-gray-900">
                                                <span className="text-xl mb-5">
                                                    Up To
                                                </span>
                                                <span className="text-xl mb-5 text-5xl">
                                                    25{" "}
                                                    <span className="text-xl">
                                                        % OFF
                                                    </span>
                                                </span>
                                                <span className="text-xl">
                                                    Exclusive JEWELRY
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 bg-no-repeat bg-cover bg-center"
                                            style={{
                                                background:
                                                    "url('/demo/images/blocks/ecommerce/storefront/storefront-1-8.png')",
                                                minHeight: "200px",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-full xl:w-6">
                                <div
                                    className="bg-no-repeat bg-cover bg-center p-3 border-round"
                                    style={{
                                        background:
                                            "url('/demo/images/blocks/ecommerce/storefront/storefront-1-7.png')",
                                    }}
                                >
                                    <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                                        <div
                                            className="flex-1 text-center bg-white-alpha-40 font-medium"
                                            style={{
                                                backdropFilter: "blur(15px)",
                                            }}
                                        >
                                            <div className="p-6 flex flex-column align-items-center text-gray-900">
                                                <span className="text-xl mb-5">
                                                    Up To
                                                </span>
                                                <span className="text-xl mb-5 text-5xl">
                                                    25{" "}
                                                    <span className="text-xl">
                                                        % OFF
                                                    </span>
                                                </span>
                                                <span className="text-xl">
                                                    Exclusive JEWELRY
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 bg-no-repeat bg-cover bg-center"
                                            style={{
                                                background:
                                                    "url('/demo/images/blocks/ecommerce/storefront/storefront-1-7.png')",
                                                minHeight: "200px",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8 mx-2">
                        <div className="grid border-1 surface-border border-round">
                            <div className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-1.png"
                                        className="w-full"
                                        alt="product-list-6-1"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 surface-border">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-2.png"
                                        className="w-full"
                                        alt="product-list-6-2"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4 md:border-right-1 lg:border-right-none border-bottom-1 surface-border">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-3.png"
                                        className="w-full"
                                        alt="product-list-6-3"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-4.png"
                                        className="w-full"
                                        alt="product-list-6-4"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 surface-border">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-5.png"
                                        className="w-full"
                                        alt="product-list-6-5"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4">
                                <div className="p-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-6-6.png"
                                        className="w-full"
                                        alt="product-list-6-6"
                                    />
                                    <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span
                                            className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                            style={{ borderRadius: "1rem" }}
                                        >
                                            NEW
                                        </span>
                                    </div>
                                    <span className="text-900">Brand</span>
                                    <div className="text-900 text-xl font-medium mt-3">
                                        $120.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
                        <div className="grid grid-nogutter flex-wrap -mr-3 -ml-3 text-center md:text-left">
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
                                <span className="text-900 text-xl block">
                                    Company
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            About Peak
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Factories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Environmental Initiatives
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
                                <span className="text-900 text-xl block">
                                    Account
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Manage Account
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Saved Items
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            My Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Wishlist
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Orders & Returns
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
                                <span className="text-900 text-xl block">
                                    Legal
                                </span>
                                <ul className="list-none p-0">
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Data Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            tabIndex="0"
                                            className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                        >
                                            Legal Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-0 py-4 px-4 mb-4 lg:mb-0">
                                <span className="text-900 text-xl block">
                                    Subscribe
                                </span>
                                <span className="text-500 block mt-4 line-height-3">
                                    Join our community to receieve the latest
                                    updates and special promotions.
                                </span>
                                <div
                                    className="p-inputgroup mt-3 mx-auto lg:mx-0"
                                    style={{ maxWidth: "30rem" }}
                                >
                                    <Button
                                        type="button"
                                        icon="pi pi-envelope"
                                        className="text-500 surface-100 surface-border"
                                    />
                                    <InputText
                                        placeholder="Email"
                                        className="border-y-1 text-500 border-x-none surface-border"
                                    />
                                    <Button
                                        icon="pi pi-arrow-right"
                                        className="text-500 surface-100 surface-border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
                        <div className="col-fixed flex justify-content-center md:justify-content-start flex-wrap flex-order-1 lg:flex-order-0">
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-21.svg"
                                className="w-3rem mb-3 md:mb-0 mr-3"
                                alt="Amex"
                            />
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-22.svg"
                                className="w-3rem mb-3 md:mb-0 mr-3"
                                alt="Apple Pay"
                            />
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-23.svg"
                                className="w-3rem mb-3 md:mb-0 mr-3"
                                alt="Mastercard"
                            />
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-25.svg"
                                className="w-3rem mb-3 md:mb-0 mr-3"
                                alt="Visa"
                            />
                            <img
                                src="/demo/images/blocks/ecommerce/storefront/storefront-1-24.svg"
                                className="w-3rem  mb-3 md:mb-0"
                                alt="PayPal"
                            />
                        </div>
                        <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
                            <a tabIndex="0" className="cursor-pointer mr-3">
                                <i className="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"></i>
                            </a>
                            <a tabIndex="0" className="cursor-pointer mr-3">
                                <i className="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"></i>
                            </a>
                            <a tabIndex="0" className="cursor-pointer mr-3">
                                <i className="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"></i>
                            </a>
                            <a tabIndex="0" className="cursor-pointer">
                                <i className="pi pi-google surface-900 p-1 text-sm border-circle text-0"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default StoreFront;
