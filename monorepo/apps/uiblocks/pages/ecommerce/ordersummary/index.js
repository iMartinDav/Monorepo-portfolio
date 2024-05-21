import { Button } from "primereact/button";
import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";

const OrderSummary = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <span className="text-700 text-xl">Thanks!</span>
    <div className="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
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
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
        <span className="text-2xl font-medium text-900">Thanks for your order!</span>
        <div className="flex mt-3 sm:mt-0">
            <div className="flex flex-column align-items-center">
                <span className="text-900 font-medium mb-2">Order ID</span>
                <span className="text-700">451234</span>
            </div>
            <div className="flex flex-column align-items-center ml-6 md:ml-8">
                <span className="text-900 font-medium mb-2">Order Date</span>
                <span className="text-700">7 Feb 2023</span>
            </div>
        </div>
    </div>
    <div className="flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5">
        <img src="/demo/images/blocks/ecommerce/ordersummary/order-summary-2-1.png" className="w-15rem flex-shrink-0 md:mr-6" />
        <div className="flex-auto mt-3 md:mt-0">
            <span className="text-xl text-900">Product Name</span>
            <div className="font-medium text-2xl text-900 mt-3 mb-5">Order Processing</div>
            <div className="border-round overflow-hidden surface-300 mb-3" style={{ height: '7px' }}>
                <div className="bg-primary border-round w-4 h-full"></div>
            </div>
            <div className="flex w-full justify-content-between">
                <span className="text-900 text-xs sm:text-base">Ordered</span>
                <span className="text-900 font-medium text-xs sm:text-base">Processing</span>
                <span className="text-500 text-xs sm:text-base">Shipping</span>
                <span className="text-500 text-xs sm:text-base">Delivered</span>
            </div>
        </div>
    </div>
    <div className="py-5 flex justify-content-between flex-wrap">
        <div className="flex sm:mr-5 mb-5">
            <span className="font-medium text-900 text-xl mr-8">Product Name</span>
            <span className="text-900 text-xl">$21.00</span>
        </div>
        <div className="flex flex-column sm:mr-5 mb-5">
            <span className="font-medium text-900 text-xl">Shipping Address</span>
            <div className="flex flex-column text-900 mt-3">
                <span className="mb-1">Celeste Slater</span>
                <span className="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                <span>(786) 713-8616</span>
            </div>
        </div>
        <div className="flex flex-column">
            <span className="font-medium text-900 text-xl">Payment</span>
            <div className="flex align-items-center mt-3">
                <img src="/demo/images/blocks/ecommerce/ordersummary/visa.png" className="w-4rem mr-3" />
                <div className="flex flex-column">
                    <span className="text-900 mb-1">Visa Debit Card</span>
                    <span className="text-900 font-medium">**** **** **** 1234</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="border-round surface-card p-5 shadow-2">
        <div className="flex flex-column lg:flex-row">
            <div className="flex flex-auto flex-column md:flex-row">
                <div className="md:pr-5 lg:pr-8 border-bottom-1 pb-5 md:border-bottom-none md:border-right-1 surface-border flex justify-content-center md:justify-content-start">
                    <ul className="list-none p-0 m-0">
                        <li className="h-6rem flex">
                            <div className="flex flex-column align-items-center">
                                <div className="bg-primary border-primary border-circle flex-shrink-0" style={{ border: '3px solid', height: '1.5rem', width: '1.5rem' }}></div>
                                <div className="bg-primary h-6rem" style={{ width: '3px' }}></div>
                            </div>
                            <div className="flex flex-column ml-3">
                                <span className="font-medium text-900 mb-2">Ordered</span>
                                <span className="text-600">22 Feb</span>
                            </div>
                        </li>
                        <li className="h-6rem flex">
                            <div className="flex flex-column align-items-center">
                                <div className="surface-card border-primary border-circle flex-shrink-0" style={{ border: '3px solid', height: '1.5rem', width: '1.5rem' }}></div>
                                <div className="surface-300 h-6rem" style={{ width: '3px' }}></div>
                            </div>
                            <div className="flex flex-column ml-3">
                                <span className="font-medium text-900 mb-2">Processing</span>
                                <span className="text-600">23 Feb</span>
                            </div>
                        </li>
                        <li className="h-6rem flex">
                            <div className="flex flex-column align-items-center">
                                <div className="surface-300 border-300 border-circle flex-shrink-0" style={{ border: '3px solid', height: '1.5rem', width: '1.5rem' }}></div>
                                <div className="surface-300 h-6rem" style={{ width: '3px' }}></div>
                            </div>
                            <div className="flex flex-column ml-3">
                                <span className="font-medium text-900 mb-2">Shipping</span>
                                <span className="text-600">Est. 24 Feb</span>
                            </div>
                        </li>
                        <li className="h-6rem flex">
                            <div className="flex flex-column align-items-center">
                                <div className="surface-300 border-300 border-circle flex-shrink-0" style={{ border: '3px solid', height: '1.5rem', width: '1.5rem' }}></div>
                                <div className="surface-300 h-6rem" style={{ width: '3px' }}></div>
                            </div>
                            <div className="flex flex-column ml-3">
                                <span className="font-medium text-900 mb-2">Delivered</span>
                                <span className="text-600">Est. 26 Feb</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-auto md:pl-5 lg:pr-5 pt-5 md:pt-0 border-right-none lg:border-right-1 surface-border">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <span className="font-medium text-2xl text-900">Product Title</span>
                        <Button className="p-button-text font-medium">Invoice</Button>
                    </div>
                    <div className="text-xl text-700 mb-5">$120.00</div>
                    <div className="flex flex-column xl:flex-row mb-5">
                        <img src="/demo/images/blocks/ecommerce/ordersummary/order-summary-3-1.png" className="w-12rem xl:mr-5 mb-5 xl:mb-0" />
                        <img src="/demo/images/blocks/ecommerce/ordersummary/order-summary-3-2.png" className="w-12rem" />
                    </div>
                    <div className="flex flex-column">
                        <span className="text-xl font-medium mb-3 text-900">Address</span>
                        <div className="flex flex-column text-700">
                            <span className="mb-1">Celeste Slater</span>
                            <span className="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                            <span>(786) 713-8616</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-column border-top-1 lg:border-top-none surface-border pl-0 pt-5 lg:pt-0 lg:pl-5 mt-5 lg:mt-0">
                <Button icon="pi pi-star" label="Review" className="p-button-outlined mb-3" />
                <Button icon="pi pi-times" label="Cancel" className="p-button-outlined p-button-danger" />
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Order Summary</div>
            <BlockViewer header="Simple" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <span className="text-700 text-xl">Thanks!</span>
                    <div className="text-900 font-bold text-4xl my-2">
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
            </BlockViewer>

            <BlockViewer header="Horizontal Steps" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
                        <span className="text-2xl font-medium text-900">
                            Thanks for your order!
                        </span>
                        <div className="flex mt-3 sm:mt-0">
                            <div className="flex flex-column align-items-center">
                                <span className="text-900 font-medium mb-2">
                                    Order ID
                                </span>
                                <span className="text-700">451234</span>
                            </div>
                            <div className="flex flex-column align-items-center ml-6 md:ml-8">
                                <span className="text-900 font-medium mb-2">
                                    Order Date
                                </span>
                                <span className="text-700">7 Feb 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5">
                        <img
                            src="/demo/images/blocks/ecommerce/ordersummary/order-summary-2-1.png"
                            className="w-15rem flex-shrink-0 md:mr-6"
                            alt="summary-2-1"
                        />
                        <div className="flex-auto mt-3 md:mt-0">
                            <span className="text-xl text-900">
                                Product Name
                            </span>
                            <div className="font-medium text-2xl text-900 mt-3 mb-5">
                                Order Processing
                            </div>
                            <div
                                className="border-round overflow-hidden surface-300 mb-3"
                                style={{ height: "7px" }}
                            >
                                <div className="bg-primary border-round w-4 h-full"></div>
                            </div>
                            <div className="flex w-full justify-content-between">
                                <span className="text-900 text-xs sm:text-base">
                                    Ordered
                                </span>
                                <span className="text-900 font-medium text-xs sm:text-base">
                                    Processing
                                </span>
                                <span className="text-500 text-xs sm:text-base">
                                    Shipping
                                </span>
                                <span className="text-500 text-xs sm:text-base">
                                    Delivered
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 flex justify-content-between flex-wrap">
                        <div className="flex sm:mr-5 mb-5">
                            <span className="font-medium text-900 text-xl mr-8">
                                Product Name
                            </span>
                            <span className="text-900 text-xl">$21.00</span>
                        </div>
                        <div className="flex flex-column sm:mr-5 mb-5">
                            <span className="font-medium text-900 text-xl">
                                Shipping Address
                            </span>
                            <div className="flex flex-column text-900 mt-3">
                                <span className="mb-1">Celeste Slater</span>
                                <span className="mb-1">
                                    606-3727 Ullamcorper. Roseville NH 11523
                                </span>
                                <span>(786) 713-8616</span>
                            </div>
                        </div>
                        <div className="flex flex-column">
                            <span className="font-medium text-900 text-xl">
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
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Vertical Steps" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="border-round surface-card p-5 shadow-2">
                        <div className="flex flex-column lg:flex-row">
                            <div className="flex flex-auto flex-column md:flex-row">
                                <div className="md:pr-5 lg:pr-8 border-bottom-1 pb-5 md:border-bottom-none md:border-right-1 surface-border flex justify-content-center md:justify-content-start">
                                    <ul className="list-none p-0 m-0">
                                        <li className="h-6rem flex">
                                            <div className="flex flex-column align-items-center">
                                                <div
                                                    className="bg-primary border-primary border-circle flex-shrink-0"
                                                    style={{
                                                        border: "3px solid",
                                                        height: "1.5rem",
                                                        width: "1.5rem",
                                                    }}
                                                ></div>
                                                <div
                                                    className="bg-primary h-6rem"
                                                    style={{ width: "3px" }}
                                                ></div>
                                            </div>
                                            <div className="flex flex-column ml-3">
                                                <span className="font-medium text-900 mb-2">
                                                    Ordered
                                                </span>
                                                <span className="text-600">
                                                    22 Feb
                                                </span>
                                            </div>
                                        </li>
                                        <li className="h-6rem flex">
                                            <div className="flex flex-column align-items-center">
                                                <div
                                                    className="surface-card border-primary border-circle flex-shrink-0"
                                                    style={{
                                                        border: "3px solid",
                                                        height: "1.5rem",
                                                        width: "1.5rem",
                                                    }}
                                                ></div>
                                                <div
                                                    className="surface-300 h-6rem"
                                                    style={{ width: "3px" }}
                                                ></div>
                                            </div>
                                            <div className="flex flex-column ml-3">
                                                <span className="font-medium text-900 mb-2">
                                                    Processing
                                                </span>
                                                <span className="text-600">
                                                    23 Feb
                                                </span>
                                            </div>
                                        </li>
                                        <li className="h-6rem flex">
                                            <div className="flex flex-column align-items-center">
                                                <div
                                                    className="surface-300 border-300 border-circle flex-shrink-0"
                                                    style={{
                                                        border: "3px solid",
                                                        height: "1.5rem",
                                                        width: "1.5rem",
                                                    }}
                                                ></div>
                                                <div
                                                    className="surface-300 h-6rem"
                                                    style={{ width: "3px" }}
                                                ></div>
                                            </div>
                                            <div className="flex flex-column ml-3">
                                                <span className="font-medium text-900 mb-2">
                                                    Shipping
                                                </span>
                                                <span className="text-600">
                                                    Est. 24 Feb
                                                </span>
                                            </div>
                                        </li>
                                        <li className="h-6rem flex">
                                            <div className="flex flex-column align-items-center">
                                                <div
                                                    className="surface-300 border-300 border-circle flex-shrink-0"
                                                    style={{
                                                        border: "3px solid",
                                                        height: "1.5rem",
                                                        width: "1.5rem",
                                                    }}
                                                ></div>
                                                <div
                                                    className="surface-300 h-6rem"
                                                    style={{ width: "3px" }}
                                                ></div>
                                            </div>
                                            <div className="flex flex-column ml-3">
                                                <span className="font-medium text-900 mb-2">
                                                    Delivered
                                                </span>
                                                <span className="text-600">
                                                    Est. 26 Feb
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-auto md:pl-5 lg:pr-5 pt-5 md:pt-0 border-right-none lg:border-right-1 surface-border">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <span className="font-medium text-2xl text-900">
                                            Product Title
                                        </span>
                                        <Button className="p-button-text font-medium">
                                            Invoice
                                        </Button>
                                    </div>
                                    <div className="text-xl text-700 mb-5">
                                        $120.00
                                    </div>
                                    <div className="flex flex-column xl:flex-row mb-5">
                                        <img
                                            src="/demo/images/blocks/ecommerce/ordersummary/order-summary-3-1.png"
                                            className="w-12rem xl:mr-5 mb-5 xl:mb-0"
                                            alt="summary-3-1"
                                        />
                                        <img
                                            src="/demo/images/blocks/ecommerce/ordersummary/order-summary-3-2.png"
                                            className="w-12rem"
                                            alt="summary-3-2"
                                        />
                                    </div>
                                    <div className="flex flex-column">
                                        <span className="text-xl font-medium mb-3 text-900">
                                            Address
                                        </span>
                                        <div className="flex flex-column text-700">
                                            <span className="mb-1">
                                                Celeste Slater
                                            </span>
                                            <span className="mb-1">
                                                606-3727 Ullamcorper. Roseville
                                                NH 11523
                                            </span>
                                            <span>(786) 713-8616</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-column border-top-1 lg:border-top-none surface-border pl-0 pt-5 lg:pt-0 lg:pl-5 mt-5 lg:mt-0">
                                <Button
                                    icon="pi pi-star"
                                    label="Review"
                                    className="p-button-outlined mb-3"
                                />
                                <Button
                                    icon="pi pi-times"
                                    label="Cancel"
                                    className="p-button-outlined p-button-danger"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default OrderSummary;
