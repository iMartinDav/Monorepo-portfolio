import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { StyleClass } from "primereact/styleclass";
import React, { useRef, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";

const ShoppingCart = () => {
    const quantityOptions = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
    ];

    const [value1, setValue1] = useState(quantityOptions[0].value);
    const [value2, setValue2] = useState(quantityOptions[0].value);
    const [visibleDialog, setVisibleDialog] = useState(null);
    const [checked, setChecked] = useState(false);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);

    const quantities1 = [1, 1, 1];
    const quantities2 = [1, 1];

    const block1 = `
<StyleClass nodeRef={btnRef1} selector="#slideover-cart" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef1} label="Display" icon="pi pi-arrow-left"></Button>
</StyleClass>
<div id="slideover-cart" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-full md:w-30rem h-full">
    <div className="flex flex-column h-full">
        <div className="surface-100 p-3 flex">
            <StyleClass nodeRef={btnRef2} selector="#slideover-cart" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef2} icon="pi pi-chevron-right" className="p-button-text p-button-rounded" />
            </StyleClass>
            <div className="border-right-1 border-300 mx-3"></div>
            <span className="text-900 text-xl font-medium inline-flex align-items-center ml-1">Your Cart</span>
        </div>
        <div className="flex-auto overflow-y-auto py-5 px-3 md:px-5">
            <div className="flex align-items-start sm:align-items-center mb-4">
                <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-1.png" className="w-6rem sm:w-8rem flex-shrink-0" alt="shopping-cart-1-1" />
                <div className="flex-auto px-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <span className="text-900 font-medium">Product Name</span>
                        <span className="text-900 font-bold">$50.00</span>
                    </div>
                    <div className="text-600 text-sm mb-3">Green | Small</div>
                    <div className="flex flex-auto justify-content-between align-items-center">
                        <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 px-1 border-transparent" value={quantities1[0]}
                            className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-1" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                        <Button icon="pi pi-trash" className="p-button-danger p-button-text p-button-rounded" />
                    </div>
                </div>
            </div>
            <div className="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-4">
                <i className="pi pi-check mr-2"></i>
                <span>Item has been added to your cart.</span>
            </div>

            <Divider className="text-sm text-500">More items</Divider>

            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-4">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-2.png" className="w-6rem sm:w-8rem flex-shrink-0" alt="shopping-cart-1-2" />
                    <div className="flex-auto px-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <span className="text-900 font-medium">Product Name</span>
                            <span className="text-900 font-bold">$12.00</span>
                        </div>
                        <div className="text-600 text-sm mb-3">Blue | Medium</div>
                        <div className="flex flex-auto justify-content-between align-items-center">
                            <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 px-1 border-transparent" value={quantities1[1]}
                                className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-1" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            <Button icon="pi pi-trash" className="p-button-danger p-button-text p-button-rounded" />
                        </div>
                    </div>
                </li>
                <li className="flex align-items-center">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-3.png" className="w-6rem sm:w-8rem flex-shrink-0" alt="shopping-cart-1-3" />
                    <div className="flex-auto px-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <span className="text-900 font-medium">Product Name</span>
                            <span className="text-900 font-bold">$18.00</span>
                        </div>
                        <div className="text-600 text-sm mb-3">White | Large</div>
                        <div className="flex flex-auto justify-content-between align-items-center">
                            <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 px-1 border-transparent" value={quantities1[2]}
                                className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-1" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            <Button icon="pi pi-trash" className="p-button-danger p-button-text p-button-rounded" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="border-top-1 surface-border p-3">
            <div className="flex align-items-center justify-content-between mb-3">
                <span className="text-900 font-medium">Total Amount <span className="text-600 text-sm">incl. VAT</span></span>
                <span className="text-900 font-bold">$80.00</span>
            </div>
            <Button className="p-button-success mb-3 w-full" label="Check Out" />
            <StyleClass nodeRef={btnRef3} selector="#slideover-cart" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" >
                <Button ref={btnRef3} className="p-button-outlined p-button-secondary w-full" label="Continue Shopping" />
            </StyleClass>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column align-items-center mb-6">
        <div className="text-900 text-4xl mb-4 font-medium">Your cart total is $82.00</div>
        <p className="text-600 font-medium text-xl mt-0 mb-4">FREE SHIPPING AND RETURN</p>
        <Button label="Check Out" />
    </div>
    <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png" className="w-12rem flex-shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-1" />
            <div className="flex-auto py-5 md:pl-5">
                <div className="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div className="w-full sm:w-6 flex flex-column">
                        <span className="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span className="text-600">Medium</span>
                    </div>
                    <div className="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <Dropdown options={quantityOptions} value={value1} onChange={(e) => setValue1(e.value)} />
                        </div>
                        <div className="flex flex-column sm:align-items-end">
                            <span className="text-900 text-2xl font-medium mb-2 sm:mb-3">$20.00</span>
                            <a className="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300" tabIndex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-column">
                    <span className="inline-flex align-items-center mb-3">
                        <i className="pi pi-envelope text-600 mr-2"></i>
                        <span className="text-600 mr-2">Order today.</span>
                    </span>
                    <span className="inline-flex align-items-center mb-3">
                        <i className="pi pi-send text-600 mr-2"></i>
                        <span className="text-600 mr-2">Delivery by <span className="font-bold">Dec 23.</span></span>
                    </span>
                    <span className="flex align-items-center">
                        <i className="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span className="text-600">Only 8 Available.</span>
                    </span>
                </div>
            </div>
        </li>
        <li className="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
            <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" className="w-12rem flex-shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-2" />
            <div className="flex-auto py-5 md:pl-5">
                <div className="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                    <div className="w-full sm:w-6 flex flex-column">
                        <span className="text-900 text-xl font-medium mb-3">Product Name</span>
                        <span className="text-600">Medium</span>
                    </div>
                    <div className="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                        <div>
                            <Dropdown options={quantityOptions} value={value2} onChange={(e) => setValue2(e.value)} />
                        </div>
                        <div className="flex flex-column sm:align-items-end">
                            <span className="text-900 text-2xl font-medium mb-2 sm:mb-3">$62.00</span>
                            <a className="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300" tabIndex="0">Remove</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-column">
                    <span className="inline-flex align-items-center mb-3">
                        <i className="pi pi-envelope text-600 mr-2"></i>
                        <span className="text-600 mr-2">Order today.</span>
                    </span>
                    <span className="inline-flex align-items-center mb-3">
                        <i className="pi pi-send text-600 mr-2"></i>
                        <span className="text-600 mr-2">Delivery by <span className="font-bold">Dec 23.</span></span>
                    </span>
                    <span className="flex align-items-center">
                        <i className="pi pi-exclamation-triangle text-600 mr-2"></i>
                        <span className="text-600">Only 2 Available.</span>
                    </span>
                </div>
            </div>
        </li>
    </ul>
    <div className="flex">
        <div className="w-12rem hidden md:block"></div>
        <ul className="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
            <li className="flex justify-content-between mb-4">
                <span className="text-xl text-900">Subtotal</span>
                <span className="text-xl text-900">$82.00</span>
            </li>
            <li className="flex justify-content-between mb-4">
                <span className="text-xl text-900">Shipping</span>
                <span className="text-xl text-900">Free</span>
            </li>
            <li className="flex justify-content-between mb-4">
                <span className="text-xl text-900">VAT</span>
                <span className="text-xl text-900">$8.00</span>
            </li>
            <li className="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
                <span className="text-xl text-900 font-bold text-3xl">Total</span>
                <span className="text-xl text-900 font-bold text-3xl">$90.00</span>
            </li>
            <li className="flex justify-content-end">
                <Button label="Check Out" />
            </li>
        </ul>
    </div>
</div>
    `;
    const block3 = `
<Button label="Display" onClick={() => setVisibleDialog(true)} />

<Dialog visible={visibleDialog} onHide={() => setVisibleDialog(false)} modal breakpoints={{ '960px': '75vw', '640px': '95vw' }} style={{ width: '40vw' }}
    header={() => <span className="font-medium text-2xl text-900">Your Cart</span>} blockScroll>
    <ul className="list-none m-0 p-0">
        <li className="py-3 surface-border flex align-items-start sm:align-items-center">
            <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png" className="w-6rem sm:w-8rem flex-shrink-0" alt="shopping-cart-3-1" />
            <div className="pl-3 flex-auto">
                <div className="flex align-items-center justify-content-between mb-3">
                    <span className="font-medium text-900">Product Name</span>
                    <span className="font-bold text-900">$40.00</span>
                </div>
                <div className="text-600 text-sm mb-3">Black | Large</div>
                <div className="flex align-items-center justify-content-between">
                    <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 px-1 border-transparent" value={quantities2[0]}
                        className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-1" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    <Button type="button" icon="pi pi-trash" className="p-button-danger p-button-text p-2 p-button-rounded" />
                </div>
            </div>
        </li>
        <li>
            <div className="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-3">
                <i className="pi pi-check mr-2"></i>
                <span>Item has been added to your cart.</span>
            </div>

            <Divider className="text-sm text-500 m-0">More items in your cart</Divider>
        </li>
        <li className="py-3 surface-border border-bottom-1 flex align-items-start sm:align-items-center">
            <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-3-2.png" className="w-6rem sm:w-8rem flex-shrink-0" alt="shopping-cart-3-2" />
            <div className="pl-3 flex-auto">
                <div className="flex align-items-center justify-content-between mb-3">
                    <span className="font-medium text-900">Product Name</span>
                    <span className="font-bold text-900">$20.00</span>
                </div>
                <div className="text-600 text-sm mb-3">Black | Large</div>
                <div className="flex align-items-center justify-content-between">
                    <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 px-1 border-transparent" value={quantities2[1]}
                        className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-1" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    <Button type="button" icon="pi pi-trash" className="p-button-danger p-button-text p-2 p-button-rounded" />
                </div>
            </div>
        </li>
        <li className="py-3">
            <div className="flex align-items-center justify-content-between mb-3">
                <span className="font-medium text-900">Total Amount <span className="text-sm text-600">incl. VAT</span></span>
                <span className="font-bold text-900 ">$60.00</span>
            </div>
            <Button className="p-button-success mb-3 w-full" label="Check Out" onClick={() => setVisibleDialog(false)} />
            <Button className="p-button-outlined p-button-secondary w-full" label="Continue Shopping" onClick={() => setVisibleDialog(false)} />
        </li>
    </ul>
</Dialog>
    `;
    const block4 = `
<div className="surface-overlay shadow-2 py-3 px-6 flex justify-content-between align-items-center">
    <img src="/demo/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" />
    <div className="sm:relative">
        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
            <Button ref={btnRef4} icon="pi pi-shopping-cart text-2xl" className="p-button-rounded p-button-text p-button-plain" />
        </StyleClass>
        <div id="popover-cart" className="hidden absolute left-0 w-full sm:w-auto sm:left-auto sm:top-auto sm:right-0 shadow-2 origin-top surface-overlay border-round p-3 mt-1 sm:w-25rem">
            <div className="text-900 text-xl pb-3 border-bottom-1 surface-border">Your Cart</div>
            <ul className="list-none p-0 m-0">
                <li className="flex py-3 align-items-center">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-4-1.png" className="w-4rem h-4rem flex-shrink-0 shadow-1" alt="shopping-cart-4-1" />
                    <div className="pl-3 mr-8">
                        <span className="text-900 font-medium">Product Name</span>
                        <div className="text-600 mt-2">Subtitle</div>
                    </div>
                    <div className="text-900 font-medium ml-auto">$12.00</div>
                </li>
                <li className="flex py-3 align-items-center border-top-1 border-bottom-1 surface-border">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-4-2.png" className="w-4rem h-4rem flex-shrink-0 shadow-1" alt="shopping-cart-4-2"/>
                    <div className="pl-3">
                        <span className="text-900 font-medium">Product Name</span>
                        <div className="text-600 mt-2">Subtitle</div>
                    </div>
                    <div className="text-900 font-medium ml-auto">$10.00</div>
                </li>
                <li className="py-3 border-bottom-1 surface-border">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <span className="text-900 font-medium">Total <span className="text-600 text-sm font-normal">incl. VAT</span></span>
                        <div className="text-900 font-medium">$22.00</div>
                    </div>
                    <div className="h-2rem w-full surface-200">
                        <div className="w-9 bg-pink-500 h-full text-white font-medium text-sm flex align-items-center p-3">$16 away from free shipping</div>
                    </div>
                </li>
                <li className="py-3 flex align-items-center p-fluid">
                    <StyleClass nodeRef={btnRef5} selector="#popover-cart" leaveToClassName="hidden" leaveActiveClassName="fadeout">
                        <Button ref={btnRef5} className="p-button-outlined mr-2" label="View Cart" />
                    </StyleClass>
                    <StyleClass nodeRef={btnRef6} selector="#popover-cart" leaveToClassName="hidden" leaveActiveClassName="fadeout">
                        <Button ref={btnRef6} className="ml-2" label="Check Out" />
                    </StyleClass>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;
    const block5 = `
<StyleClass nodeRef={btnRef7} selector="#slideover-cart-ext" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef7} label="Display" icon="pi pi-arrow-left" />
</StyleClass>

<div id="slideover-cart-ext" className="hidden surface-overlay absolute top-0 right-0 shadow-2 h-full w-full lg:w-max">
    <div className="flex flex-column h-full">
        <div className="surface-overlay p-4 flex align-items-center justify-content-between">
            <span className="text-900 text-xl font-medium">Your Cart</span>
            <StyleClass nodeRef={btnRef8} selector="#slideover-cart-ext" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef8} icon="pi pi-times" className="p-button-text p-button-plain p-button-rounded" />
            </StyleClass>
        </div>
        <div className="flex flex-auto overflow-y-auto">
            <div className="w-full md:w-6 p-4 flex flex-column">
                <div className="flex align-items-start md:align-items-center border-top-1 surface-border pt-4 mb-4">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-1.png" className="w-4rem h-4rem sm:w-7rem sm:h-7rem flex-shrink-0" alt="shopping-cart-5-1" />
                    <div className="pl-3 flex-auto">
                        <div className="flex align-items-center justify-content-between mb-2">
                            <span className="text-primary font-medium">Product Title</span>
                            <a className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors transition-duration-300"><i className="pi pi-trash"></i></a>
                        </div>
                        <span className="text-500">Medium</span>
                        <div className="flex align-items-center justify-content-between mt-2">
                            <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center py-2 border-transparent" value={quantities1[0]}
                    className="border-1 surface-border border-round" decrementButtonClassName="p-button-text py-1 px-2" incrementButtonClassName="p-button-text py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            <span className="text-900 font-medium">$20.00</span>
                        </div>
                    </div>
                </div>
                <div className="surface-50 p-3 flex align-items-center border-round">
                    <Checkbox checked={checked} onChange={(e) => setChecked(e.checked)} />
                    <span className="ml-2 text-900">Add Warranty</span>
                    <span className="text-900 font-medium ml-auto">$5.00</span>
                </div>
                <div className="border-top-1 border-bottom-1 surface-border mt-4 py-4">
                    <ul className="list-none m-0 p-0 ">
                        <li className="flex justify-content-between mb-3">
                            <span className="text-600">Subtotal</span>
                            <span className="text-900 font-medium">$20.00</span>
                        </li>
                        <li className="flex justify-content-between mb-3">
                            <span className="text-600">Shipping</span>
                            <span className="text-900 font-medium">$5.00</span>
                        </li>
                        <li className="flex justify-content-between">
                            <span className="text-600">Total</span>
                            <span className="text-900 font-medium">$25.00</span>
                        </li>
                    </ul>
                    <Button label="Add Coupon" className="p-button-text block mx-auto mt-4" />
                </div>
                <div className="mt-auto">
                    <div className="flex align-items-center justify-content-between text-xl text-900">
                        <span>Grand Total</span>
                        <span>$25.00</span>
                    </div>
                    <Button label="Place Order" className="w-full mt-4" />
                </div>
            </div>
            <div className="hidden md:block w-6 p-4 surface-50">
                <div className="text-900 font-medium mb-4">Related Products</div>
                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-2.png" className="w-7rem h-7rem flex-shrink-0" alt="shopping-cart-5-2" />
                    <div className="pl-3">
                        <span className="text-primary font-medium">Product Title</span>
                        <p className="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-900 font-medium">$10.00</span>
                            <Button type="button" icon="pi pi-shopping-cart" className="p-button-rounded" />
                        </div>
                    </div>
                </div>
                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-3.png" className="w-7rem h-7rem flex-shrink-0" alt="shopping-cart-5-3"/>
                    <div className="pl-3">
                        <span className="text-primary font-medium">Product Title</span>
                        <p className="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-900 font-medium">$5.00</span>
                            <Button type="button" icon="pi pi-shopping-cart" className="p-button-rounded" />
                        </div>
                    </div>
                </div>
                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                    <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-4.png" className="w-7rem h-7rem flex-shrink-0" alt="shopping-cart-5-4" />
                    <div className="pl-3">
                        <span className="text-primary font-medium">Product Title</span>
                        <p className="text-sm text-600 line-height-3 my-2 p-0">In ante metus dictum at tempor commodo.</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-900 font-medium">$8.00</span>
                            <Button type="button" icon="pi pi-shopping-cart" className="p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Shopping Cart</div>
            <BlockViewer
                header="SlideOver"
                code={block1}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden h-screen"
            >
                <StyleClass
                    nodeRef={btnRef1}
                    selector="#slideover-cart"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef1}
                        label="Display"
                        icon="pi pi-arrow-left"
                    ></Button>
                </StyleClass>
                <div
                    id="slideover-cart"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-full md:w-30rem h-full"
                >
                    <div className="flex flex-column h-full">
                        <div className="surface-100 p-3 flex">
                            <StyleClass
                                nodeRef={btnRef2}
                                selector="#slideover-cart"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef2}
                                    icon="pi pi-chevron-right"
                                    className="p-button-text p-button-rounded"
                                />
                            </StyleClass>
                            <div className="border-right-1 border-300 mx-3"></div>
                            <span className="text-900 text-xl font-medium inline-flex align-items-center ml-1">
                                Your Cart
                            </span>
                        </div>
                        <div className="flex-auto overflow-y-auto py-5 px-3 md:px-5">
                            <div className="flex align-items-start sm:align-items-center mb-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-1.png"
                                    className="w-6rem sm:w-8rem flex-shrink-0"
                                    alt="shopping-cart-1-1"
                                />
                                <div className="flex-auto px-3">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <span className="text-900 font-medium">
                                            Product Name
                                        </span>
                                        <span className="text-900 font-bold">
                                            $50.00
                                        </span>
                                    </div>
                                    <div className="text-600 text-sm mb-3">
                                        Green | Small
                                    </div>
                                    <div className="flex flex-auto justify-content-between align-items-center">
                                        <InputNumber
                                            showButtons
                                            buttonLayout="horizontal"
                                            min="0"
                                            inputClassName="w-3rem text-center py-2 px-1 border-transparent"
                                            value={quantities1[0]}
                                            className="border-1 surface-border border-round"
                                            decrementButtonClassName="p-button-text py-1 px-1"
                                            incrementButtonClassName="p-button-text py-1 px-1"
                                            incrementButtonIcon="pi pi-plus"
                                            decrementButtonIcon="pi pi-minus"
                                        />
                                        <Button
                                            icon="pi pi-trash"
                                            className="p-button-danger p-button-text p-button-rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-4">
                                <i className="pi pi-check mr-2"></i>
                                <span>Item has been added to your cart.</span>
                            </div>

                            <Divider className="text-sm text-500">
                                More items
                            </Divider>

                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center mb-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-2.png"
                                        className="w-6rem sm:w-8rem flex-shrink-0"
                                        alt="shopping-cart-1-2"
                                    />
                                    <div className="flex-auto px-3">
                                        <div className="flex align-items-center justify-content-between mb-3">
                                            <span className="text-900 font-medium">
                                                Product Name
                                            </span>
                                            <span className="text-900 font-bold">
                                                $12.00
                                            </span>
                                        </div>
                                        <div className="text-600 text-sm mb-3">
                                            Blue | Medium
                                        </div>
                                        <div className="flex flex-auto justify-content-between align-items-center">
                                            <InputNumber
                                                showButtons
                                                buttonLayout="horizontal"
                                                min="0"
                                                inputClassName="w-3rem text-center py-2 px-1 border-transparent"
                                                value={quantities1[1]}
                                                className="border-1 surface-border border-round"
                                                decrementButtonClassName="p-button-text py-1 px-1"
                                                incrementButtonClassName="p-button-text py-1 px-1"
                                                incrementButtonIcon="pi pi-plus"
                                                decrementButtonIcon="pi pi-minus"
                                            />
                                            <Button
                                                icon="pi pi-trash"
                                                className="p-button-danger p-button-text p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="flex align-items-center">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-1-3.png"
                                        className="w-6rem sm:w-8rem flex-shrink-0"
                                        alt="shopping-cart-1-3"
                                    />
                                    <div className="flex-auto px-3">
                                        <div className="flex align-items-center justify-content-between mb-3">
                                            <span className="text-900 font-medium">
                                                Product Name
                                            </span>
                                            <span className="text-900 font-bold">
                                                $18.00
                                            </span>
                                        </div>
                                        <div className="text-600 text-sm mb-3">
                                            White | Large
                                        </div>
                                        <div className="flex flex-auto justify-content-between align-items-center">
                                            <InputNumber
                                                showButtons
                                                buttonLayout="horizontal"
                                                min="0"
                                                inputClassName="w-3rem text-center py-2 px-1 border-transparent"
                                                value={quantities1[2]}
                                                className="border-1 surface-border border-round"
                                                decrementButtonClassName="p-button-text py-1 px-1"
                                                incrementButtonClassName="p-button-text py-1 px-1"
                                                incrementButtonIcon="pi pi-plus"
                                                decrementButtonIcon="pi pi-minus"
                                            />
                                            <Button
                                                icon="pi pi-trash"
                                                className="p-button-danger p-button-text p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="border-top-1 surface-border p-3">
                            <div className="flex align-items-center justify-content-between mb-3">
                                <span className="text-900 font-medium">
                                    Total Amount{" "}
                                    <span className="text-600 text-sm">
                                        incl. VAT
                                    </span>
                                </span>
                                <span className="text-900 font-bold">
                                    $80.00
                                </span>
                            </div>
                            <Button
                                className="p-button-success mb-3 w-full"
                                label="Check Out"
                            />
                            <StyleClass
                                nodeRef={btnRef3}
                                selector="#slideover-cart"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef3}
                                    className="p-button-outlined p-button-secondary w-full"
                                    label="Continue Shopping"
                                />
                            </StyleClass>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Full Width" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column align-items-center mb-6">
                        <div className="text-900 text-4xl mb-4 font-medium">
                            Your cart total is $82.00
                        </div>
                        <p className="text-600 font-medium text-xl mt-0 mb-4">
                            FREE SHIPPING AND RETURN
                        </p>
                        <Button label="Check Out" />
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
                            <img
                                src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png"
                                className="w-12rem flex-shrink-0 mx-auto md:mx-0"
                                alt="shopping-cart-2-1"
                            />
                            <div className="flex-auto py-5 md:pl-5">
                                <div className="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                                    <div className="w-full sm:w-6 flex flex-column">
                                        <span className="text-900 text-xl font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-600">Medium</span>
                                    </div>
                                    <div className="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                                        <div>
                                            <Dropdown
                                                options={quantityOptions}
                                                value={value1}
                                                onChange={(e) =>
                                                    setValue1(e.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex flex-column sm:align-items-end">
                                            <span className="text-900 text-2xl font-medium mb-2 sm:mb-3">
                                                $20.00
                                            </span>
                                            <a
                                                className="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300"
                                                tabIndex="0"
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-column">
                                    <span className="inline-flex align-items-center mb-3">
                                        <i className="pi pi-envelope text-600 mr-2"></i>
                                        <span className="text-600 mr-2">
                                            Order today.
                                        </span>
                                    </span>
                                    <span className="inline-flex align-items-center mb-3">
                                        <i className="pi pi-send text-600 mr-2"></i>
                                        <span className="text-600 mr-2">
                                            Delivery by{" "}
                                            <span className="font-bold">
                                                Dec 23.
                                            </span>
                                        </span>
                                    </span>
                                    <span className="flex align-items-center">
                                        <i className="pi pi-exclamation-triangle text-600 mr-2"></i>
                                        <span className="text-600">
                                            Only 8 Available.
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
                            <img
                                src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png"
                                className="w-12rem flex-shrink-0 mx-auto md:mx-0"
                                alt="shopping-cart-2-2"
                            />
                            <div className="flex-auto py-5 md:pl-5">
                                <div className="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                                    <div className="w-full sm:w-6 flex flex-column">
                                        <span className="text-900 text-xl font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-600">Medium</span>
                                    </div>
                                    <div className="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                                        <div>
                                            <Dropdown
                                                options={quantityOptions}
                                                value={value2}
                                                onChange={(e) =>
                                                    setValue2(e.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex flex-column sm:align-items-end">
                                            <span className="text-900 text-2xl font-medium mb-2 sm:mb-3">
                                                $62.00
                                            </span>
                                            <a
                                                className="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors transition-duration-300"
                                                tabIndex="0"
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-column">
                                    <span className="inline-flex align-items-center mb-3">
                                        <i className="pi pi-envelope text-600 mr-2"></i>
                                        <span className="text-600 mr-2">
                                            Order today.
                                        </span>
                                    </span>
                                    <span className="inline-flex align-items-center mb-3">
                                        <i className="pi pi-send text-600 mr-2"></i>
                                        <span className="text-600 mr-2">
                                            Delivery by{" "}
                                            <span className="font-bold">
                                                Dec 23.
                                            </span>
                                        </span>
                                    </span>
                                    <span className="flex align-items-center">
                                        <i className="pi pi-exclamation-triangle text-600 mr-2"></i>
                                        <span className="text-600">
                                            Only 2 Available.
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="flex">
                        <div className="w-12rem hidden md:block"></div>
                        <ul className="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
                            <li className="flex justify-content-between mb-4">
                                <span className="text-xl text-900">
                                    Subtotal
                                </span>
                                <span className="text-xl text-900">$82.00</span>
                            </li>
                            <li className="flex justify-content-between mb-4">
                                <span className="text-xl text-900">
                                    Shipping
                                </span>
                                <span className="text-xl text-900">Free</span>
                            </li>
                            <li className="flex justify-content-between mb-4">
                                <span className="text-xl text-900">VAT</span>
                                <span className="text-xl text-900">$8.00</span>
                            </li>
                            <li className="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
                                <span className="text-xl text-900 font-bold text-3xl">
                                    Total
                                </span>
                                <span className="text-xl text-900 font-bold text-3xl">
                                    $90.00
                                </span>
                            </li>
                            <li className="flex justify-content-end">
                                <Button label="Check Out" />
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Overlay"
                code={block3}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button
                    label="Display"
                    onClick={() => setVisibleDialog(true)}
                />

                <Dialog
                    visible={visibleDialog}
                    onHide={() => setVisibleDialog(false)}
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "95vw" }}
                    style={{ width: "40vw" }}
                    header={() => (
                        <span className="font-medium text-2xl text-900">
                            Your Cart
                        </span>
                    )}
                    blockScroll
                >
                    <ul className="list-none m-0 p-0">
                        <li className="py-3 surface-border flex align-items-start sm:align-items-center">
                            <img
                                src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png"
                                className="w-6rem sm:w-8rem flex-shrink-0"
                                alt="shopping-cart-3-1"
                            />
                            <div className="pl-3 flex-auto">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <span className="font-medium text-900">
                                        Product Name
                                    </span>
                                    <span className="font-bold text-900">
                                        $40.00
                                    </span>
                                </div>
                                <div className="text-600 text-sm mb-3">
                                    Black | Large
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <InputNumber
                                        showButtons
                                        buttonLayout="horizontal"
                                        min="0"
                                        inputClassName="w-3rem text-center py-2 px-1 border-transparent"
                                        value={quantities2[0]}
                                        className="border-1 surface-border border-round"
                                        decrementButtonClassName="p-button-text py-1 px-1"
                                        incrementButtonClassName="p-button-text py-1 px-1"
                                        incrementButtonIcon="pi pi-plus"
                                        decrementButtonIcon="pi pi-minus"
                                    />
                                    <Button
                                        type="button"
                                        icon="pi pi-trash"
                                        className="p-button-danger p-button-text p-2 p-button-rounded"
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex align-items-center bg-green-50 text-green-600 text-sm p-2 border-round mb-3">
                                <i className="pi pi-check mr-2"></i>
                                <span>Item has been added to your cart.</span>
                            </div>

                            <Divider className="text-sm text-500 m-0">
                                More items in your cart
                            </Divider>
                        </li>
                        <li className="py-3 surface-border border-bottom-1 flex align-items-start sm:align-items-center">
                            <img
                                src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-3-2.png"
                                className="w-6rem sm:w-8rem flex-shrink-0"
                                alt="shopping-cart-3-2"
                            />
                            <div className="pl-3 flex-auto">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <span className="font-medium text-900">
                                        Product Name
                                    </span>
                                    <span className="font-bold text-900">
                                        $20.00
                                    </span>
                                </div>
                                <div className="text-600 text-sm mb-3">
                                    Black | Large
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <InputNumber
                                        showButtons
                                        buttonLayout="horizontal"
                                        min="0"
                                        inputClassName="w-3rem text-center py-2 px-1 border-transparent"
                                        value={quantities2[1]}
                                        className="border-1 surface-border border-round"
                                        decrementButtonClassName="p-button-text py-1 px-1"
                                        incrementButtonClassName="p-button-text py-1 px-1"
                                        incrementButtonIcon="pi pi-plus"
                                        decrementButtonIcon="pi pi-minus"
                                    />
                                    <Button
                                        type="button"
                                        icon="pi pi-trash"
                                        className="p-button-danger p-button-text p-2 p-button-rounded"
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="py-3">
                            <div className="flex align-items-center justify-content-between mb-3">
                                <span className="font-medium text-900">
                                    Total Amount{" "}
                                    <span className="text-sm text-600">
                                        incl. VAT
                                    </span>
                                </span>
                                <span className="font-bold text-900 ">
                                    $60.00
                                </span>
                            </div>
                            <Button
                                className="p-button-success mb-3 w-full"
                                label="Check Out"
                                onClick={() => setVisibleDialog(false)}
                            />
                            <Button
                                className="p-button-outlined p-button-secondary w-full"
                                label="Continue Shopping"
                                onClick={() => setVisibleDialog(false)}
                            />
                        </li>
                    </ul>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="Popover"
                code={block4}
                containerClassName="surface-ground relative"
                previewStyle={{ height: "600px" }}
            >
                <div className="surface-overlay shadow-2 py-3 px-6 flex justify-content-between align-items-center">
                    <img
                        src="/demo/images/blocks/logos/bastion-purple.svg"
                        alt="Image"
                        height="50"
                    />
                    <div className="sm:relative">
                        <StyleClass
                            nodeRef={btnRef4}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="fadeout"
                            hideOnOutsideClick
                        >
                            <Button
                                ref={btnRef4}
                                icon="pi pi-shopping-cart text-2xl"
                                className="p-button-rounded p-button-text p-button-plain"
                            />
                        </StyleClass>
                        <div
                            id="popover-cart"
                            className="hidden absolute left-0 w-full sm:w-auto sm:left-auto sm:top-auto sm:right-0 shadow-2 origin-top surface-overlay border-round p-3 mt-1 sm:w-25rem"
                        >
                            <div className="text-900 text-xl pb-3 border-bottom-1 surface-border">
                                Your Cart
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="flex py-3 align-items-center">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-4-1.png"
                                        className="w-4rem h-4rem flex-shrink-0 shadow-1"
                                        alt="shopping-cart-4-1"
                                    />
                                    <div className="pl-3 mr-8">
                                        <span className="text-900 font-medium">
                                            Product Name
                                        </span>
                                        <div className="text-600 mt-2">
                                            Subtitle
                                        </div>
                                    </div>
                                    <div className="text-900 font-medium ml-auto">
                                        $12.00
                                    </div>
                                </li>
                                <li className="flex py-3 align-items-center border-top-1 border-bottom-1 surface-border">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-4-2.png"
                                        className="w-4rem h-4rem flex-shrink-0 shadow-1"
                                        alt="shopping-cart-4-2"
                                    />
                                    <div className="pl-3">
                                        <span className="text-900 font-medium">
                                            Product Name
                                        </span>
                                        <div className="text-600 mt-2">
                                            Subtitle
                                        </div>
                                    </div>
                                    <div className="text-900 font-medium ml-auto">
                                        $10.00
                                    </div>
                                </li>
                                <li className="py-3 border-bottom-1 surface-border">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <span className="text-900 font-medium">
                                            Total{" "}
                                            <span className="text-600 text-sm font-normal">
                                                incl. VAT
                                            </span>
                                        </span>
                                        <div className="text-900 font-medium">
                                            $22.00
                                        </div>
                                    </div>
                                    <div className="h-2rem w-full surface-200">
                                        <div className="w-9 bg-pink-500 h-full text-white font-medium text-sm flex align-items-center p-3">
                                            $16 away from free shipping
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 flex align-items-center p-fluid">
                                    <StyleClass
                                        nodeRef={btnRef5}
                                        selector="#popover-cart"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeout"
                                    >
                                        <Button
                                            ref={btnRef5}
                                            className="p-button-outlined mr-2"
                                            label="View Cart"
                                        />
                                    </StyleClass>
                                    <StyleClass
                                        nodeRef={btnRef6}
                                        selector="#popover-cart"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeout"
                                    >
                                        <Button
                                            ref={btnRef6}
                                            className="ml-2"
                                            label="Check Out"
                                        />
                                    </StyleClass>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Extended SlideOver"
                code={block5}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden h-screen"
            >
                <StyleClass
                    nodeRef={btnRef7}
                    selector="#slideover-cart-ext"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef7}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>

                <div
                    id="slideover-cart-ext"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 h-full w-full lg:w-max"
                >
                    <div className="flex flex-column h-full">
                        <div className="surface-overlay p-4 flex align-items-center justify-content-between">
                            <span className="text-900 text-xl font-medium">
                                Your Cart
                            </span>
                            <StyleClass
                                nodeRef={btnRef8}
                                selector="#slideover-cart-ext"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef8}
                                    icon="pi pi-times"
                                    className="p-button-text p-button-plain p-button-rounded"
                                />
                            </StyleClass>
                        </div>
                        <div className="flex flex-auto overflow-y-auto">
                            <div className="w-full md:w-6 p-4 flex flex-column">
                                <div className="flex align-items-start md:align-items-center border-top-1 surface-border pt-4 mb-4">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-1.png"
                                        className="w-4rem h-4rem sm:w-7rem sm:h-7rem flex-shrink-0"
                                        alt="shopping-cart-5-1"
                                    />
                                    <div className="pl-3 flex-auto">
                                        <div className="flex align-items-center justify-content-between mb-2">
                                            <span className="text-primary font-medium">
                                                Product Title
                                            </span>
                                            <a className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors transition-duration-300">
                                                <i className="pi pi-trash"></i>
                                            </a>
                                        </div>
                                        <span className="text-500">Medium</span>
                                        <div className="flex align-items-center justify-content-between mt-2">
                                            <InputNumber
                                                showButtons
                                                buttonLayout="horizontal"
                                                min="0"
                                                inputClassName="w-3rem text-center py-2 border-transparent"
                                                value={quantities1[0]}
                                                className="border-1 surface-border border-round"
                                                decrementButtonClassName="p-button-text py-1 px-2"
                                                incrementButtonClassName="p-button-text py-1 px-1"
                                                incrementButtonIcon="pi pi-plus"
                                                decrementButtonIcon="pi pi-minus"
                                            />
                                            <span className="text-900 font-medium">
                                                $20.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="surface-50 p-3 flex align-items-center border-round">
                                    <Checkbox
                                        checked={checked}
                                        onChange={(e) => setChecked(e.checked)}
                                    />
                                    <span className="ml-2 text-900">
                                        Add Warranty
                                    </span>
                                    <span className="text-900 font-medium ml-auto">
                                        $5.00
                                    </span>
                                </div>
                                <div className="border-top-1 border-bottom-1 surface-border mt-4 py-4">
                                    <ul className="list-none m-0 p-0 ">
                                        <li className="flex justify-content-between mb-3">
                                            <span className="text-600">
                                                Subtotal
                                            </span>
                                            <span className="text-900 font-medium">
                                                $20.00
                                            </span>
                                        </li>
                                        <li className="flex justify-content-between mb-3">
                                            <span className="text-600">
                                                Shipping
                                            </span>
                                            <span className="text-900 font-medium">
                                                $5.00
                                            </span>
                                        </li>
                                        <li className="flex justify-content-between">
                                            <span className="text-600">
                                                Total
                                            </span>
                                            <span className="text-900 font-medium">
                                                $25.00
                                            </span>
                                        </li>
                                    </ul>
                                    <Button
                                        label="Add Coupon"
                                        className="p-button-text block mx-auto mt-4"
                                    />
                                </div>
                                <div className="mt-auto">
                                    <div className="flex align-items-center justify-content-between text-xl text-900">
                                        <span>Grand Total</span>
                                        <span>$25.00</span>
                                    </div>
                                    <Button
                                        label="Place Order"
                                        className="w-full mt-4"
                                    />
                                </div>
                            </div>
                            <div className="hidden md:block w-6 p-4 surface-50">
                                <div className="text-900 font-medium mb-4">
                                    Related Products
                                </div>
                                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-2.png"
                                        className="w-7rem h-7rem flex-shrink-0"
                                        alt="shopping-cart-5-2"
                                    />
                                    <div className="pl-3">
                                        <span className="text-primary font-medium">
                                            Product Title
                                        </span>
                                        <p className="text-sm text-600 line-height-3 my-2 p-0">
                                            In ante metus dictum at tempor
                                            commodo.
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-900 font-medium">
                                                $10.00
                                            </span>
                                            <Button
                                                type="button"
                                                icon="pi pi-shopping-cart"
                                                className="p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-3.png"
                                        className="w-7rem h-7rem flex-shrink-0"
                                        alt="shopping-cart-5-3"
                                    />
                                    <div className="pl-3">
                                        <span className="text-primary font-medium">
                                            Product Title
                                        </span>
                                        <p className="text-sm text-600 line-height-3 my-2 p-0">
                                            In ante metus dictum at tempor
                                            commodo.
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-900 font-medium">
                                                $5.00
                                            </span>
                                            <Button
                                                type="button"
                                                icon="pi pi-shopping-cart"
                                                className="p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 surface-card border-round shadow-2 flex align-items-start mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-5-4.png"
                                        className="w-7rem h-7rem flex-shrink-0"
                                        alt="shopping-cart-5-4"
                                    />
                                    <div className="pl-3">
                                        <span className="text-primary font-medium">
                                            Product Title
                                        </span>
                                        <p className="text-sm text-600 line-height-3 my-2 p-0">
                                            In ante metus dictum at tempor
                                            commodo.
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-900 font-medium">
                                                $8.00
                                            </span>
                                            <Button
                                                type="button"
                                                icon="pi pi-shopping-cart"
                                                className="p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default ShoppingCart;
