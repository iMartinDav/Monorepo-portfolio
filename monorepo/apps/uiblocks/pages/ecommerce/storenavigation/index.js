import React, { useRef } from "react";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import { InputText } from "primereact/inputtext";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";

const Storenavigation = () => {
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
    const btnRef18 = useRef(null);
    const btnRef19 = useRef(null);
    const btnRef20 = useRef(null);
    const btnRef21 = useRef(null);
    const btnRef22 = useRef(null);

    const block1 = `
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
    <StyleClass nodeRef={btnRef1} selector="#nav-1" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef1} className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" className="lg:mr-6 h-2rem sm:h-3rem" />
    </div>
    <div id="nav-1" className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                        <span>Women</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div className="flex flex-column lg:flex-row lg:justify-content-between">
                        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                            <a ref={btnRef3} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Clothing</a>
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
                        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                            <a ref={btnRef4} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Shoes</a>
                        </StyleClass>
                        <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Shoes</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                            <a ref={btnRef5} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Accessories</a>
                        </StyleClass>
                        <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                            <li className="font-bold mb-5 text-xl text-900 hidden lg:block">Accessories</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                            <a ref={btnRef6} className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Jewelry</a>
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
                        <StyleClass nodeRef={btnRef7} enterClassName="hidden" leaveToClassName="hidden">
                            <a ref={btnRef7} selector="@next" className="font-medium text-700 text-lg cursor-pointer block lg:hidden mb-3 select-none">Brands</a>
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
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef8} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
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
                <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef9} className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent
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
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
                    <i className="pi pi-shopping-cart lg:mr-3 text-xl sm:text-base p-overlay-badge"><Badge /></i>
                    <span className="hidden lg:inline">Cart</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;
    const block2 = `
<section className="bg-primary text-primary font-medium py-2 text-center text-xs sm:text-base"><strong>15%</strong> off on your first order.</section>
<div className="surface-overlay px-3 sm:px-6 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
    <StyleClass nodeRef={btnRef10} selector="#nav-2" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef10} className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>

    <div id="nav-2" className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef11} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary
        py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto">
                        <span>Women</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div className="grid flex-wrap">
                        <div className="col-12 md:col-6 xl:col-3">
                            <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef12} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Clothing</a>
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
                            <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef13} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Shoes</a>
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
                            <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef14} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Accessories</a>
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
                            <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef15} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Beauty</a>
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
                <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef16} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
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
                    <a ref={btnRef17} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
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
        <img src="/demo/images/blocks/logos/hyper-text-indigo.svg" alt="Image" height="40" />
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
    `;
    const block3 = `
<div className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style={{ minHeight: '80px' }}>
    <div className="flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="40" className="hidden lg:inline mr-3 lg:mr-6" />
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="40" className="inline lg:hidden mr-3 lg:mr-6" />
    </div>
    <div className="flex align-items-center flex-auto">
        <div className="p-input-icon-left w-full p-input-filled">
            <i className="pi pi-search"></i>
            <InputText type="text" className="w-full" placeholder="Product search" />
        </div>
    </div>
    <div className="flex ml-3 lg:ml-6">
        <ul className="list-none p-0 m-0 flex">
            <li className="inline-flex relative">
                <StyleClass nodeRef={btnRef18} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef18} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none">
                        <i className="pi pi-user text-xl"></i>
                        <span className="hidden">My Account</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                    <ul className="list-none p-0 m-0">
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-box text-lg mr-2"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-heart text-lg mr-2"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-star text-lg mr-2"></i>
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="inline-flex relative">
                <StyleClass nodeRef={btnRef19} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef19} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none">
                        <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                        <span className="hidden">My Cart</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                    <span className="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                    <div className="flex align-items-center border-bottom-1 surface-border pb-3">
                        <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" className="w-4rem flex-shrink-0 shadow-1" alt="shopping-cart-2-2" />
                        <div className="flex flex-column pl-3">
                            <span className="text-900 font-medium mb-2">Prime Watch</span>
                            <span className="text-600 mb-2">Standard Size</span>
                            <span className="text-primary font-bold">$50.00</span>
                        </div>
                    </div>
                    <div className="flex pt-3">
                        <Button className="p-button-outlined mr-2">View Cart</Button>
                        <Button className="ml-2">Purchase</Button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div className="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border" style={{ minHeight: '80px' }}>
    <div className="flex">
        <ul className="list-none p-0 m-0 flex">
            <li className="flex">
                <StyleClass nodeRef={btnRef20} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef20} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Women</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                    <div className="flex flex-wrap justify-content-between p-4 lg:p-6">
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Clothing</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Shoes</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Accessories</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <ul className="list-none flex p-0 m-0">
                            <li className="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-1.png" alt="Image" style={{ borderRadius: '12px' }} className="mb-5 w-full lg:w-20rem" />
                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">New Arrivals</span>
                                <a className="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                            <li className="flex flex-column align-items-center pl-3 lg:pl-0">
                                <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-2.png" alt="Image" style={{ borderRadius: '12px' }} className="mb-5 w-full lg:w-20rem" />
                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">Seasonal</span>
                                <a className="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="flex">
                <StyleClass nodeRef={btnRef21} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef21} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Men</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li className="flex">
                <StyleClass nodeRef={btnRef22} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef22} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Kids</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Store Navigation</div>
            <BlockViewer
                header="Aligned Left"
                code={block1}
                previewStyle={{ height: "600px" }}
            >
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
                        nodeRef={btnRef1}
                        selector="#nav-1"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef1}
                            className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="flex align-items-center justify-content-center">
                        <img
                            src="/demo/images/blocks/logos/hyper.svg"
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
                                    nodeRef={btnRef2}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef2}
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
                                            nodeRef={btnRef3}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                        >
                                            <a
                                                ref={btnRef3}
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
                                            nodeRef={btnRef4}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                        >
                                            <a
                                                ref={btnRef4}
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
                                            nodeRef={btnRef5}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                        >
                                            <a
                                                ref={btnRef5}
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
                                            nodeRef={btnRef6}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                        >
                                            <a
                                                ref={btnRef6}
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
                                            nodeRef={btnRef7}
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                        >
                                            <a
                                                ref={btnRef7}
                                                selector="@next"
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
                                                        borderRadius: "12px",
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
                                                        borderRadius: "12px",
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
                                    nodeRef={btnRef8}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef8}
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
                                    nodeRef={btnRef9}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef9}
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
            </BlockViewer>

            <BlockViewer
                header="Centered with Category Images"
                code={block2}
                previewStyle={{ height: "600px" }}
            >
                <section className="bg-primary text-primary font-medium py-2 text-center text-xs sm:text-base">
                    <strong>15%</strong> off on your first order.
                </section>
                <div className="surface-overlay px-3 sm:px-6 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
                    <StyleClass
                        nodeRef={btnRef10}
                        selector="#nav-2"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef10}
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
                                    nodeRef={btnRef11}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef11}
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
                                                nodeRef={btnRef12}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef12}
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
                                                nodeRef={btnRef13}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef13}
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
                                                nodeRef={btnRef14}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef14}
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
                                                nodeRef={btnRef15}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef15}
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
                                    nodeRef={btnRef16}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef16}
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
                                    nodeRef={btnRef17}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef17}
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
                            src="/demo/images/blocks/logos/hyper-text-indigo.svg"
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
            </BlockViewer>

            <BlockViewer
                header="Search Bar and Dropdowns"
                code={block3}
                previewStyle={{ height: "800px" }}
            >
                <div
                    className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border"
                    style={{ minHeight: "80px" }}
                >
                    <div className="flex align-items-center justify-content-center">
                        <img
                            src="/demo/images/blocks/logos/hyper-700.svg"
                            alt="Image"
                            height="40"
                            className="hidden lg:inline mr-3 lg:mr-6"
                        />
                        <img
                            src="/demo/images/blocks/logos/hyper.svg"
                            alt="Image"
                            height="40"
                            className="inline lg:hidden mr-3 lg:mr-6"
                        />
                    </div>
                    <div className="flex align-items-center flex-auto">
                        <div className="p-input-icon-left w-full p-input-filled">
                            <i className="pi pi-search"></i>
                            <InputText
                                type="text"
                                className="w-full"
                                placeholder="Product search"
                            />
                        </div>
                    </div>
                    <div className="flex ml-3 lg:ml-6">
                        <ul className="list-none p-0 m-0 flex">
                            <li className="inline-flex relative">
                                <StyleClass
                                    nodeRef={btnRef18}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef18}
                                        className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none"
                                    >
                                        <i className="pi pi-user text-xl"></i>
                                        <span className="hidden">
                                            My Account
                                        </span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-box text-lg mr-2"></i>
                                                <span>Orders</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-heart text-lg mr-2"></i>
                                                <span>Favorites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-star text-lg mr-2"></i>
                                                <span>Reviews</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                                <span>Sign Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="inline-flex relative">
                                <StyleClass
                                    nodeRef={btnRef19}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef19}
                                        className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none"
                                    >
                                        <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                            <Badge />
                                        </i>
                                        <span className="hidden">My Cart</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                                    <span className="text-900 font-medium mb-3 block">
                                        My Cart (1 Item)
                                    </span>
                                    <div className="flex align-items-center border-bottom-1 surface-border pb-3">
                                        <img
                                            src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png"
                                            className="w-4rem flex-shrink-0 shadow-1"
                                            alt="shopping-cart-2-2"
                                        />
                                        <div className="flex flex-column pl-3">
                                            <span className="text-900 font-medium mb-2">
                                                Prime Watch
                                            </span>
                                            <span className="text-600 mb-2">
                                                Standard Size
                                            </span>
                                            <span className="text-primary font-bold">
                                                $50.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex pt-3">
                                        <Button className="p-button-outlined mr-2">
                                            View Cart
                                        </Button>
                                        <Button className="ml-2">
                                            Purchase
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border"
                    style={{ minHeight: "80px" }}
                >
                    <div className="flex">
                        <ul className="list-none p-0 m-0 flex">
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef20}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef20}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Women</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                                    <div className="flex flex-wrap justify-content-between p-4 lg:p-6">
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
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
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
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
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
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
                                        <ul className="list-none flex p-0 m-0">
                                            <li className="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                                <img
                                                    src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-1.png"
                                                    alt="Image"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                    className="mb-5 w-full lg:w-20rem"
                                                />
                                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">
                                                    New Arrivals
                                                </span>
                                                <a className="cursor-pointer text-700 font-medium hover:text-900">
                                                    View All
                                                </a>
                                            </li>
                                            <li className="flex flex-column align-items-center pl-3 lg:pl-0">
                                                <img
                                                    src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-2.png"
                                                    alt="Image"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                    className="mb-5 w-full lg:w-20rem"
                                                />
                                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">
                                                    Seasonal
                                                </span>
                                                <a className="cursor-pointer text-700 font-medium hover:text-900">
                                                    View All
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef21}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef21}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Men</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef22}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef22}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Kids</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Storenavigation;
