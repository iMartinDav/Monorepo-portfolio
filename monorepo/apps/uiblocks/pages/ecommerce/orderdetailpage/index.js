import React, { useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Divider } from "primereact/divider";
import { Badge } from "primereact/badge";
import BlockViewer from "../../../demo/components/BlockViewer";

const OrderDetailPage = () => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);

    const block1 = `
<div className="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
    <span className="text-0">Sign Up for 15% off your first order</span>
    <a tabIndex="0" className="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0">
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png" className="mr-2" alt="Flag" />
        <span className="text-0">EUR</span>
    </a>
</div>

<div className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style={{ minHeight: '80px' }}>
    <div className="flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" className="hidden lg:inline mr-3 lg:mr-6" />
        <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" className="inline lg:hidden mr-3 lg:mr-6" />
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
                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef1} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none">
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
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none">
                        <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                        <span className="hidden">My Cart</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                    <span className="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                    <div className="flex align-items-center border-bottom-1 surface-border pb-3">
                        <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" className="w-4rem flex-shrink-0 shadow-1" />
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
                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef3} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
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
                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef4} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Men</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li className="flex">
                <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef5} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
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

<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <span className="text-700 text-xl">Thanks!</span>
    <div className="font-bold text-4xl my-2">Successful Order 🚀</div>
    <p className="text-700 text-xl mt-0 mb-4 p-0">Your order is on the way. It'll be shipped today. We'll inform you.</p>
    <div style={{ height: '3px', background: 'linear-gradient(90deg, #2196F3 0%, rgba(33, 150, 243, 0) 50%)' }}></div>

    <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
        <div className="mb-3 sm:mb-0">
            <span className="font-medium text-xl text-900 mr-2">Order number:</span>
            <span className="font-medium text-xl text-blue-500">451234</span>
        </div>
        <div>
            <Button label="Details" icon="pi pi-list" className="p-button-outlined p-button-secondary mr-2" />
            <Button label="Print" icon="pi pi-print" className="p-button-outlined p-button-secondary" />
        </div>
    </div>
    <div className="border-round surface-border border-1">
        <ul className="list-none p-0 m-0">
            <li className="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                <img src="/demo/images/blocks/ecommerce/ordersummary/order-summary-1-1.png" className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div className="flex flex-column">
                    <span className="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span className="text-600 mb-3">Blue | Medium</span>
                    <span className="text-900 font-medium">Quantity 1</span>
                </div>
                <span className="text-900 font-medium text-lg ml-auto">$12.00</span>
            </li>
            <li className="p-3 flex align-items-center">
                <img src="/demo/images/blocks/ecommerce/ordersummary/order-summary-1-2.png" className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div className="flex flex-column">
                    <span className="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span className="text-600 mb-3">Yellow | Large</span>
                    <span className="text-900 font-medium">Quantity 1</span>
                </div>
                <span className="text-900 font-medium text-lg ml-auto">$24.00</span>
            </li>
        </ul>
    </div>
    <div className="flex flex-wrap mt-5 pb-3">
        <div className="w-full lg:w-6 pl-3">
            <span className="font-medium text-900">Shipping Address</span>
            <div className="flex flex-column text-900 mt-3 mb-5">
                <span className="mb-1">Celeste Slater</span>
                <span className="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                <span>(786) 713-8616</span>
            </div>

            <span className="font-medium text-900">Payment</span>
            <div className="flex align-items-center mt-3">
                <img src="/demo/images/blocks/ecommerce/ordersummary/visa.png" className="w-4rem mr-3" />
                <div className="flex flex-column">
                    <span className="text-900 mb-1">Visa Debit Card</span>
                    <span className="text-900 font-medium">**** **** **** 1234</span>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
            <ul className="list-none p-0 m-0 w-full">
                <li className="mb-3"><span className="font-medium text-900">Summary</span></li>
                <li className="flex justify-content-between mb-3">
                    <span className="text-900">Subtotal</span>
                    <span className="text-900 font-medium text-lg">$36.00</span>
                </li>
                <li className="flex justify-content-between mb-3">
                    <span className="text-900">Shipping</span>
                    <span className="text-900 font-medium text-lg">$5.00</span>
                </li>
                <li className="flex justify-content-between mb-3">
                    <span className="text-900">Tax</span>
                    <span className="text-900 font-medium text-lg">$4.00</span>
                </li>
                <li className="flex justify-content-between border-top-1 surface-border py-3">
                    <span className="text-900 font-medium">Total</span>
                    <span className="text-900 font-bold text-lg">$41.00</span>
                </li>
            </ul>
        </div>
    </div>
</div>

<Divider className="w-full m-0" />
<div className="surface-section px-4 py-6 md:px-6 lg:px-8">
    <div className="grid grid-nogutter text-center sm:text-left flex-wrap">
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Company</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Account</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Legal</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Connect</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
            </ul>
        </div>
    </div>
</div>

<div className="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
        <span className="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
        <i className="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Order Detail Pages</div>

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

                <div
                    className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border"
                    style={{ minHeight: "80px" }}
                >
                    <div className="flex align-items-center justify-content-center">
                        <img
                            src="/demo/images/blocks/logos/peak-700.svg"
                            alt="Image"
                            height="40"
                            className="hidden lg:inline mr-3 lg:mr-6"
                        />
                        <img
                            src="/demo/images/blocks/logos/peak-700.svg"
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
                                    nodeRef={btnRef1}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef1}
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
                                    nodeRef={btnRef2}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef2}
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
                                            alt="shopping-2-2"
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
                                    nodeRef={btnRef3}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef3}
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
                                    nodeRef={btnRef4}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef4}
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
                                    nodeRef={btnRef5}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef5}
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

                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <span className="text-700 text-xl">Thanks!</span>
                    <div className="font-bold text-4xl my-2">
                        Successful Order 🚀
                    </div>
                    <p className="text-700 text-xl mt-0 mb-4 p-0">
                        Your order is on the way. It&lsquo;ll be shipped today. We&lsquo;ll
                        inform you.
                    </p>
                    <div
                        style={{
                            height: "3px",
                            background:
                                "linear-gradient(90deg, #2196F3 0%, rgba(33, 150, 243, 0) 50%)",
                        }}
                    ></div>

                    <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
                        <div className="mb-3 sm:mb-0">
                            <span className="font-medium text-xl text-900 mr-2">
                                Order number:
                            </span>
                            <span className="font-medium text-xl text-blue-500">
                                451234
                            </span>
                        </div>
                        <div>
                            <Button
                                label="Details"
                                icon="pi pi-list"
                                className="p-button-outlined p-button-secondary mr-2"
                            />
                            <Button
                                label="Print"
                                icon="pi pi-print"
                                className="p-button-outlined p-button-secondary"
                            />
                        </div>
                    </div>
                    <div className="border-round surface-border border-1">
                        <ul className="list-none p-0 m-0">
                            <li className="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                                <img
                                    src="/demo/images/blocks/ecommerce/ordersummary/order-summary-1-1.png"
                                    className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2"
                                    alt="summary-1-1"
                                />
                                <div className="flex flex-column">
                                    <span className="text-900 font-medium text-xl mb-2">
                                        Product Name
                                    </span>
                                    <span className="text-600 mb-3">
                                        Blue | Medium
                                    </span>
                                    <span className="text-900 font-medium">
                                        Quantity 1
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-lg ml-auto">
                                    $12.00
                                </span>
                            </li>
                            <li className="p-3 flex align-items-center">
                                <img
                                    src="/demo/images/blocks/ecommerce/ordersummary/order-summary-1-2.png"
                                    className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2"
                                    alt="summary-1-2"
                                />
                                <div className="flex flex-column">
                                    <span className="text-900 font-medium text-xl mb-2">
                                        Product Name
                                    </span>
                                    <span className="text-600 mb-3">
                                        Yellow | Large
                                    </span>
                                    <span className="text-900 font-medium">
                                        Quantity 1
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-lg ml-auto">
                                    $24.00
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap mt-5 pb-3">
                        <div className="w-full lg:w-6 pl-3">
                            <span className="font-medium text-900">
                                Shipping Address
                            </span>
                            <div className="flex flex-column text-900 mt-3 mb-5">
                                <span className="mb-1">Celeste Slater</span>
                                <span className="mb-1">
                                    606-3727 Ullamcorper. Roseville NH 11523
                                </span>
                                <span>(786) 713-8616</span>
                            </div>

                            <span className="font-medium text-900">
                                Payment
                            </span>
                            <div className="flex align-items-center mt-3">
                                <img
                                    src="/demo/images/blocks/ecommerce/ordersummary/visa.png"
                                    className="w-4rem mr-3"
                                    alt="visa"
                                />
                                <div className="flex flex-column">
                                    <span className="text-900 mb-1">
                                        Visa Debit Card
                                    </span>
                                    <span className="text-900 font-medium">
                                        **** **** **** 1234
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
                            <ul className="list-none p-0 m-0 w-full">
                                <li className="mb-3">
                                    <span className="font-medium text-900">
                                        Summary
                                    </span>
                                </li>
                                <li className="flex justify-content-between mb-3">
                                    <span className="text-900">Subtotal</span>
                                    <span className="text-900 font-medium text-lg">
                                        $36.00
                                    </span>
                                </li>
                                <li className="flex justify-content-between mb-3">
                                    <span className="text-900">Shipping</span>
                                    <span className="text-900 font-medium text-lg">
                                        $5.00
                                    </span>
                                </li>
                                <li className="flex justify-content-between mb-3">
                                    <span className="text-900">Tax</span>
                                    <span className="text-900 font-medium text-lg">
                                        $4.00
                                    </span>
                                </li>
                                <li className="flex justify-content-between border-top-1 surface-border py-3">
                                    <span className="text-900 font-medium">
                                        Total
                                    </span>
                                    <span className="text-900 font-bold text-lg">
                                        $41.00
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Divider className="w-full m-0" />
                <div className="surface-section px-4 py-6 md:px-6 lg:px-8">
                    <div className="grid grid-nogutter text-center sm:text-left flex-wrap">
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
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

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
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

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
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

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                            <span className="text-900 text-xl block">
                                Connect
                            </span>
                            <ul className="list-none p-0">
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Pinterest
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
                    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
                        <span className="text-500">
                            © 2022, Peak. Powered by PrimeBlocks.
                        </span>
                    </div>
                    <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
                        <i className="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default OrderDetailPage;
