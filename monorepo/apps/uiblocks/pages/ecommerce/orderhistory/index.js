import React from "react";
import { Divider } from "primereact/divider";
import { Ripple } from "primereact/ripple";
import BlockViewer from "../../../demo/components/BlockViewer";

const OrderHistory = () => {
    const block1 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
        <div className="flex flex-column text-center md:text-left">
            <span className="text-900 text-3xl font-medium mb-2">My Orders</span>
            <span className="text-600 text-xl">Dignissim diam quis enim lobortis.</span>
        </div>
        <span className="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
            <i className="pi pi-search text-gray-400"></i>
            <input type="text" className="p-inputtext w-full lg:w-25rem surface-50" placeholder="Search" />
        </span>
    </div>
    <div className="surface-card grid grid-nogutter border-round shadow-2">
        <div className="col-12 flex p-2 surface-100 border-round-top">
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Order Number</span>
                <span className="text-900 font-medium block mt-2">45123</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full  mx-0 lg:mx-3 surface-border" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Order Date</span>
                <span className="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full  mx-0 lg:mx-3 surface-border" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Total Amount</span>
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div className="col-12 p-0 flex border-top-1 surface-border">
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomLeftRadius: '6px' }}><i className="pi pi-folder mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-refresh mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-file mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomRightRadius: '6px' }}><i className="pi pi-comment mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
    <div className="surface-card grid grid-nogutter mt-5 border-round shadow-2">
        <div className="col-12 flex p-2 surface-100 border-round-top">
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Order Number</span>
                <span className="text-900 font-medium block mt-2">45123</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full  mx-0 lg:mx-3 surface-border" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Order Date</span>
                <span className="text-900 font-medium block mt-2">7 February 2023</span>
            </div>
            <Divider align="center" layout="vertical" className="h-full  mx-0 lg:mx-3 surface-border" />
            <div className="p-2 flex-auto text-center md:text-left">
                <span className="text-700 block">Total Amount</span>
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
            <Divider className="w-full block lg:hidden surface-border" />
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
                    <span className="text-green-600">Delivered on 7 February 2023</span>
                </div>
            </div>
        </div>
        <div className="col-12 p-0 flex border-top-1 surface-border">
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomLeftRadius: '6px' }}><i className="pi pi-folder  mr-2 mb-2 md:mb-0"></i>Archive Order</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>Return</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"><i className="pi pi-file  mr-2 mb-2 md:mb-0"></i>View Invoice</a>
            <a tabIndex="0" className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full" style={{ borderBottomRightRadius: '6px' }}><i className="pi pi-comment  mr-2 mb-2 md:mb-0"></i>Write a Review</a>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Order History</div>
            <BlockViewer header="In Card" code={block1}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row justify-content-between align-items-center mb-4">
                        <div className="flex flex-column text-center md:text-left">
                            <span className="text-900 text-3xl font-medium mb-2">
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
                                className="p-inputtext w-full lg:w-25rem surface-50"
                                placeholder="Search"
                            />
                        </span>
                    </div>
                    <div className="surface-card grid grid-nogutter border-round shadow-2">
                        <div className="col-12 flex p-2 surface-100 border-round-top">
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-700 block">
                                    Order Number
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    45123
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full  mx-0 lg:mx-3 surface-border"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-700 block">
                                    Order Date
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    7 February 2023
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full  mx-0 lg:mx-3 surface-border"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-700 block">
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
                                    <span className="text-green-600">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
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
                                    <span className="text-green-600">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <p-divider className="w-full block lg:hidden surface-border"></p-divider>
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
                                    <span className="text-green-600">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-0 flex border-top-1 surface-border">
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomLeftRadius: "6px" }}
                            >
                                <i className="pi pi-folder mr-2 mb-2 md:mb-0"></i>
                                Archive Order
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-refresh mr-2 mb-2 md:mb-0"></i>
                                Return
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-file mr-2 mb-2 md:mb-0"></i>
                                View Invoice
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
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
                                <span className="text-700 block">
                                    Order Number
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    45123
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full  mx-0 lg:mx-3 surface-border"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-700 block">
                                    Order Date
                                </span>
                                <span className="text-900 font-medium block mt-2">
                                    7 February 2023
                                </span>
                            </div>
                            <Divider
                                align="center"
                                layout="vertical"
                                className="h-full  mx-0 lg:mx-3 surface-border"
                            />
                            <div className="p-2 flex-auto text-center md:text-left">
                                <span className="text-700 block">
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
                                    <span className="text-green-600">
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
                                    <span className="text-green-600">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                            <Divider className="w-full block lg:hidden surface-border" />
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
                                    <span className="text-green-600">
                                        Delivered on 7 February 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-0 flex border-top-1 surface-border">
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomLeftRadius: "6px" }}
                            >
                                <i className="pi pi-folder  mr-2 mb-2 md:mb-0"></i>
                                Archive Order
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-refresh  mr-2 mb-2 md:mb-0"></i>
                                Return
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                            >
                                <i className="pi pi-file  mr-2 mb-2 md:mb-0"></i>
                                View Invoice
                            </a>
                            <a
                                tabIndex="0"
                                className="cursor-pointer py-4 flex flex-column md:flex-row text-center justify-content-center align-items-center font-medium text-primary hover:bg-primary hover:text-0 transition-duration-150 w-full"
                                style={{ borderBottomRightRadius: "6px" }}
                            >
                                <i className="pi pi-comment  mr-2 mb-2 md:mb-0"></i>
                                Write a Review
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default OrderHistory;
