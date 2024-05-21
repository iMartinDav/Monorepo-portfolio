import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Badge } from "primereact/badge";
import BlockViewer from "../../../demo/components/BlockViewer";

const OrderHistoryPage = () => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);

    const block1 = `
<div className="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
    <span className="text-0">Sign Up for 15% off your first order</span>
    <a tabIndex="0" className="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0">
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png" className="mr-2" alt="Flag" />
        <span className="text-0">EUR</span>
    </a>
</div>
<div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
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
                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
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
                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef5} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Shoes</a>
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
                            <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef6} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Accessories</a>
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
                            <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef7} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Beauty</a>
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
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef8} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto" >
                        <span>Men</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef9} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
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
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                    <i className="pi pi-search text-xl"></i>
                    <span className="hidden">Search</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i className="pi pi-heart text-xl"></i>
                    <span className="hidden">Favorites</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i className="pi pi-user text-xl"></i>
                    <span className="hidden">Sign In</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 text-700 hover:text-primary">
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
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                <i className="pi pi-search text-xl"></i>
                <span className="hidden">Search</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                <i className="pi pi-heart text-xl"></i>
                <span className="hidden">Favorites</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                <i className="pi pi-user text-xl"></i>
                <span className="hidden">Sign In</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 text-700 hover:text-primary">
                <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                <span className="hidden">Cart</span>
                <Ripple />
            </a>
        </li>
    </ul>
</div>

<div className="surface-0 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
        <div className="flex flex-column text-center md:text-left">
            <span className="text-900 text-3xl mb-2">My Orders</span>
            <span className="text-600 text-xl">Dignissim diam quis enim lobortis.</span>
        </div>
        <span className="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
            <i className="pi pi-search text-gray-400"></i>
            <input type="text" className="p-inputtext w-full lg:w-25rem surface-100 surface-border" placeholder="Search" />
        </span>
    </div>
    <div className="surface-card grid grid-nogutter border-round shadow-2">
        <div className="col-12 flex p-2 surface-100 border-round-top">
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Order Number</span>
                <span className="text-900 font-medium block mt-2">45123</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full mx-0 lg:mx-3" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Order Date</span>
                <span className="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full mx-0 lg:mx-3" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Total Amount</span>
                <span className="text-900 font-medium block mt-2">$123.00</span>
            </div>
        </div>
        <div className="col-12">
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-1.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
            <Divider className="w-full block lg:hidden surface-border" />
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-2.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
            <Divider className="w-full block lg:hidden surface-border" />
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-3.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div className="col-12 p-0 flex border-top-1 surface-border">
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomLeftRadius: '6px' }}><i className="pi pi-folder mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-refresh mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-file mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomRightRadius: '6px' }}><i className="pi pi-comment mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
    <div className="surface-card grid grid-nogutter mt-5 border-round shadow-2">
        <div className="col-12 flex p-2 surface-100 border-round-top">
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Order Number</span>
                <span className="text-900 font-medium block mt-2">45123</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full mx-0 lg:mx-3" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Order Date</span>
                <span className="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full mx-0 lg:mx-3" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-600 block">Total Amount</span>
                <span className="text-900 font-medium block mt-2">$123.00</span>
            </div>
        </div>
        <div className="col-12">
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-4.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-5.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                    <img src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-6.png" alt="product" className="w-8rem h-8rem mr-3 flex-shrink-0" />
                    <div className="flex flex-column my-auto text-center md:text-left">
                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                        <span className="text-600 text-sm mb-3">White | Small</span>
                        <a tabIndex="0" className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150">Buy Again <span className="font-light">| $12</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
                <div className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center" style={{ borderRadius: '2.5rem' }}>
                    <span className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2" style={{ minWidth: '2rem', minHeight: '2rem' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-green-500">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div className="col-12 p-0 flex border-top-1 surface-border">
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomLeftRadius: '6px' }}><i className="pi pi-folder  mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-file  mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomRightRadius: '6px' }}><i className="pi pi-comment  mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
</div>

<div className="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
    <div className="grid flex-wrap -mr-3 -ml-3 md:text-left">
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
            <span className="text-900 text-xl block">Company</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
            <span className="text-900 text-xl block">Account</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
            <span className="text-900 text-xl block">Legal</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 mb-4 lg:mb-0">
            <span className="text-900 text-xl block">Subscribe</span>
            <span className="text-500 block mt-4 line-height-3">Join our community to receieve the latest updates and special promotions.</span>
            <div className="p-inputgroup mt-3 mx-auto lg:mx-0" style={{ maxWidth: '30rem' }}>
                <Button icon="pi pi-envelope" className="text-500 surface-100 surface-border" />
                <InputText placeholder="Email" className="border-y-1 text-500 border-x-none surface-border" />
                <Button icon="pi pi-arrow-right" className="text-500 surface-100 surface-border" />
            </div>
        </div>
    </div>
</div>
<div className="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0">
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-21.svg" className="w-3rem mr-3" alt="Amex" />
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-22.svg" className="w-3rem mr-3" alt="Apple Pay" />
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-23.svg" className="w-3rem mr-3" alt="Mastercard" />
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-25.svg" className="w-3rem mr-3" alt="Visa" />
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-24.svg" className="w-3rem" alt="PayPal" />
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
    `;

    return (
        <>
            <div className="block-category-title">Order History Pages</div>
            <BlockViewer header="Simple" code={block1}>
                <div className="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
                    <span className="text-0">
                        Sign Up for 15% off your first order
                    </span>
                    <a
                        tabIndex="0"
                        className="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0"
                    >
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png"
                            className="mr-2"
                            alt="Flag"
                        />
                        <span className="text-0">EUR</span>
                    </a>
                </div>
                <div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
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
                                                    ref={btnRef5}
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
                                                nodeRef={btnRef6}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef6}
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
                                                nodeRef={btnRef7}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef7}
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
                                    nodeRef={btnRef9}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef9}
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
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                                    <i className="pi pi-search text-xl"></i>
                                    <span className="hidden">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                    <i className="pi pi-heart text-xl"></i>
                                    <span className="hidden">Favorites</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                    <i className="pi pi-user text-xl"></i>
                                    <span className="hidden">Sign In</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 text-700 hover:text-primary">
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
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                                <i className="pi pi-search text-xl"></i>
                                <span className="hidden">Search</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                <i className="pi pi-heart text-xl"></i>
                                <span className="hidden">Favorites</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                <i className="pi pi-user text-xl"></i>
                                <span className="hidden">Sign In</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 text-700 hover:text-primary">
                                <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                    <Badge />
                                </i>
                                <span className="hidden">Cart</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="surface-0 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
                        <div className="flex flex-column text-center md:text-left">
                            <span className="text-900 text-3xl mb-2">
                                My Orders
                            </span>
                            <span className="text-600 text-xl">
                                Dignissim diam quis enim lobortis.
                            </span>
                        </div>
                        <span className="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
                            <i className="pi pi-search text-gray-400"></i>
                            <input
                                type="text"
                                className="p-inputtext w-full lg:w-25rem surface-100 surface-border"
                                placeholder="Search"
                            />
                        </span>
                    </div>
                    <div className="surface-card grid grid-nogutter border-round shadow-2">
                        <div className="col-12 flex p-2 surface-100 border-round-top">
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Order Number
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    45123
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full mx-0 lg:mx-3"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Order Date
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    7 February 2023
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full mx-0 lg:mx-3"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Total Amount
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    $123.00
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-1.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <Divider className="w-full block lg:hidden surface-border" />
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-2.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <Divider className="w-full block lg:hidden surface-border" />
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-3.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-0 flex border-top-1 surface-border">
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomLeftRadius: "6px" }}
                            >
                                <i className="pi pi-folder mr-2 mb-2 md:mb-0"></i>
                                Archive Order
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-refresh mr-2 mb-2 md:mb-0"></i>
                                Return
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-file mr-2 mb-2 md:mb-0"></i>
                                View Invoice
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomRightRadius: "6px" }}
                            >
                                <i className="pi pi-comment mr-2 mb-2 md:mb-0"></i>
                                Write a Review
                            </a>
                        </div>
                    </div>
                    <div className="surface-card grid grid-nogutter mt-5 border-round shadow-2">
                        <div className="col-12 flex p-2 surface-100 border-round-top">
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Order Number
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    45123
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full mx-0 lg:mx-3"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Order Date
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    7 February 2023
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full mx-0 lg:mx-3"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-600 block">
                                    Total Amount
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    $123.00
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-4.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-5.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
                            <div className="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center">
                                <div className="flex flex-column lg:flex-row justify-content-center align-items-center px-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/orderhistory/orderhistory-1-6.png"
                                        alt="product"
                                        className="w-8rem h-8rem mr-3 flex-shrink-0"
                                    />
                                    <div className="flex flex-column my-auto text-center md:text-left">
                                        <span className="text-900 font-medium mb-3 mt-3 lg:mt-0">
                                            Product Name Placeholder A Little
                                            Bit Long One
                                        </span>
                                        <span className="text-600 text-sm mb-3">
                                            White | Small
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="p-ripple p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150"
                                        >
                                            Buy Again{" "}
                                            <span className="font-light">
                                                | $12
                                            </span>
                                            <Ripple />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
                                    style={{ borderRadius: "2.5rem" }}
                                >
                                    <span
                                        className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                                        style={{
                                            minWidth: "2rem",
                                            minHeight: "2rem",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-green-500">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-0 flex border-top-1 surface-border">
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomLeftRadius: "6px" }}
                            >
                                <i className="pi pi-folder  mr-2 mb-2 md:mb-0"></i>
                                Archive Order
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>
                                Return
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-file  mr-2 mb-2 md:mb-0"></i>
                                View Invoice
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomRightRadius: "6px" }}
                            >
                                <i className="pi pi-comment  mr-2 mb-2 md:mb-0"></i>
                                Write a Review
                            </a>
                        </div>
                    </div>
                </div>

                <div className="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none">
                    <div className="grid flex-wrap -mr-3 -ml-3 md:text-left">
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
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
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border">
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
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border">
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
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 mb-4 lg:mb-0">
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
                    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0">
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-21.svg"
                            className="w-3rem mr-3"
                            alt="Amex"
                        />
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-22.svg"
                            className="w-3rem mr-3"
                            alt="Apple Pay"
                        />
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-23.svg"
                            className="w-3rem mr-3"
                            alt="Mastercard"
                        />
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-25.svg"
                            className="w-3rem mr-3"
                            alt="Visa"
                        />
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-24.svg"
                            className="w-3rem"
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
            </BlockViewer>
        </>
    );
};

export default OrderHistoryPage;
