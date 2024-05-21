import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const CheckoutForm = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);
    const card1 = "**** **** **** 1234";
    const [selectedCard, setSelectedCard] = useState(card1);
    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];

    const quantities1 = [1, 1, 1];

    const quantities2 = [1, 1];

    const card2 = "**** **** **** 1235";

    const address1 = "Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands";

    const address2 = "Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands";

    const [selectedAddress, setSelectedAddress] = useState(address1);

    const ccRegex = RegExp(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/);

    const cvcRegex = RegExp(/^[0-9]{3,4}$/);

    const expRegex = RegExp(/[0-9]{2}\/[0-9]{2}$/);

    const block1 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mr-3 -ml-3">
        <div className="col-12 lg:col-8 p-4">
            <div className="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div className="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                    <div className="text-900 font-medium text-xl">Contact Information</div>
                    <div className="mt-3 lg:mt-0">
                        <span className="text-600 mr-2">Already hava an account?</span>
                        <a tabIndex="0" className="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                    </div>
                </div>
                <div className="col-12 field">
                    <label htmlFor="email2" className="text-900 font-medium mb-3">Email</label>
                    <input inputid="email2" type="text" className="p-inputtext w-full mb-3" />
                    <div className="flex align-items-center">
                        <Checkbox id="checkbox1" checked={checked1} onChange={(e) => setChecked1(e.checked)} className="text-900"></Checkbox>
                        <label htmlFor="checkbox1" className="text-900 ml-2">Email me with news and offers</label>
                    </div>
                </div>
                <Divider className="w-full px-2 mb-3" />
                <div className="col-12 mt-4 lg:mt-0 mb-4">
                    <div className="text-900 font-medium text-xl">Shipping</div>
                </div>
                <div className="col-12 field mb-0">
                    <label htmlFor="country2" className="text-900 font-medium mb-3">Country</label>
                    <input inputid="country2" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="name2" className="text-900 font-medium mb-3">Name</label>
                    <input inputid="name2" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="surname2" className="text-900 font-medium mb-3">Surname</label>
                    <input inputid="surname2" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 field mb-0">
                    <label htmlFor="address3" className="text-900 font-medium mb-3">Apartment, Suite, etc.</label>
                    <input inputid="address3" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="pc2" className="text-900 font-medium mb-3">Postal Code</label>
                    <input inputid="pc2" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="city2" className="text-900 font-medium mb-3">City</label>
                    <input inputid="city2" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 field mb-0">
                    <label htmlFor="phone" className="text-900 font-medium mb-3">Phone</label>
                    <input inputid="phone" type="text" className="p-inputtext w-full mb-3" />
                </div>
                <Divider className="w-full px-2 mb-3" />
                <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Shipping Method</div>
                <div className="col-12 flex flex-column lg:flex-row field">
                    <div onClick={() => setSelectedValue('UPS')} className={classNames('flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer', { 'border-primary surface-50': selectedValue === 'UPS' })}>
                        <div className="mr-3 lg:mr-0">
                            <div className="text-900 font-bold mb-2">UPS</div>
                            <span className="text-600">Delivery: Tomorrow</span>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <span className="text-primary mr-2 font-medium">$9.00</span>
                            <RadioButton name="ups" value="UPS" onChange={(e) => setSelectedValue(e.value)} checked={selectedValue === 'UPS'} />
                        </div>
                    </div>
                    <div onClick={() => setSelectedValue('FedEx')} className={classNames('flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer', { 'border-primary surface-50': selectedValue === 'FedEx' })}>
                        <div className="mr-3 lg:mr-0">
                            <div className="text-900 font-bold mb-2">FedEx</div>
                            <span className="text-600">Delivery: Next Week</span>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <span className="text-primary mr-2 font-medium">$1.00</span>
                            <RadioButton name="fedex" value="FedEx" onChange={(e) => setSelectedValue(e.value)} checked={selectedValue === 'FedEx'} />
                        </div>
                    </div>
                </div>
                <Divider className="w-full px-2 mb-3" />
                <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Payment</div>
                <div className="col-12 mb-4">
                    <div onClick={() => setSelectedValue2('paypal')} className={classNames('p-3 border-1 border-round-top surface-border', { 'border-primary surface-50': selectedValue2 === 'paypal' })}>
                        <RadioButton name="paypal" value="paypal" onChange={(e) => setSelectedValue2(e.value)} id="paypal" checked={selectedValue2 === 'paypal'} />
                        <label htmlFor="paypal" className="text-900 ml-3">PayPal</label>
                    </div>
                    <div onClick={() => setSelectedValue2('creditcard')} className={classNames('p-3 border-x-1 surface-border', { 'border-primary surface-50': selectedValue2 === 'creditcard' })}>
                        <RadioButton name="creditCard" value="creditcard" onChange={(e) => setSelectedValue2(e.value)} id="creditCard" checked={selectedValue2 === 'creditcard'} />
                        <label htmlFor="creditCard" className="text-900 ml-3">Credit Card</label>
                    </div>
                    <div onClick={() => setSelectedValue2('bank')} className={classNames('p-3 border-1 border-round-bottom surface-border', { 'border-primary surface-50': selectedValue2 === 'bank' })}>
                        <RadioButton name="bank" value="bank" onChange={(e) => setSelectedValue2(e.value)} id="bank" checked={selectedValue2 === 'bank'} />
                        <label htmlFor="bank" className="text-900 ml-3">Online Bank Transfer</label>
                    </div>
                </div>
                <div className="col-12 field mb-4">
                    <form className="relative">
                        <label htmlFor="cc" className="text-900 font-medium mb-3 block">Card Number</label>
                        <InputMask value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} id="cc" name="cc" keyfilter={ccRegex} validateOnly mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" style={{ marginRight: '.5em' }} />
                    </form>
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <form className="relative">
                        <label htmlFor="exp" className="text-900 font-medium mb-3 block">Expiry Date</label>
                        <InputMask value={inputValue2} onChange={(e) => setInputValue2(e.value)} id="exp" name="exp" keyfilter={expRegex} validateOnly mask="99/99" placeholder="99/99" slotChar="MM/YY" style={{ marginRight: '.5em' }} />
                    </form>
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <form className="relative">
                        <label htmlFor="cvc" className="text-900 font-medium mb-3 block">CVC</label>
                        <InputMask value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} id="cvc" name="cvc" keyfilter={cvcRegex} validateOnly mask="999" placeholder="999" style={{ marginRight: '.5em' }} />
                    </form>
                </div>
                <div className="col-12 field mb-0">
                    <label htmlFor="holderName" className="text-900 font-medium mb-3">Cardholder Name</label>
                    <input inputid="holderName" type="text" className="p-inputtext w-full mb-3" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-4">
            <div className="surface-card border-round shadow-2 p-5">
                <div className="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                    <span className="text-900 font-medium text-lg lg:text-xl"><i className="pi pi-shopping-cart text-xl mr-2"></i>Your Order (1)</span>
                    <a tabIndex="0" className="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                </div>
                <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border">
                    <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-1.png" className="w-8rem h-8rem flex-shrink-0 mb-3" alt="checkoutform-1-1"/>
                    <div className="flex-auto lg:ml-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <span className="text-900 font-medium">Product Title</span>
                            <span className="text-900 font-bold">$123.00</span>
                        </div>
                        <div className="text-600 text-sm mb-3">Black | Large</div>
                        <div className="flex flex-auto justify-content-between align-items-center">
                            <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-2rem text-center py-2 px-1 border-transparent" value={quantities1[0]}
                                className="border-1 surface-border border-round" decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            <Button icon="pi pi-trash" className="text-600 p-button-text p-button-rounded" />
                        </div>
                    </div>
                </div>
                <div className="py-2 mt-3 border-bottom-1 surface-border">
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Subtotal</span>
                        <span className="text-900">$12.00</span>
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Shipping</span>
                        <span className="text-900">Free</span>
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Total</span>
                        <span className="text-900 font-bold">$12.00</span>
                    </div>
                </div>
                <div className="py-2 mt-3 border-bottom-1 surface-border">
                    <div className="text-900 font-medium mb-2">Save Your Account</div>
                    <div className="text-600 text-sm line-height-3 mb-2">Create an exclusive account for easy shopping and experience for your upcoming visits.</div>
                    <Password value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask className="w-full mb-2" inputClassName="w-full" />
                </div>
                <Button className="p-button-primary w-full mt-3" label="Place Order" />
            </div>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section">
    <div className="grid grid-nogutter">
        <div className="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
            <ul className="flex list-none flex-wrap p-0 mb-6">
                <li className="flex align-items-center text-primary mr-2">Cart <i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Information<i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Shipping<i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Payment</li>
            </ul>
            <div className="grid formgrid">
                <div className="col-12 field mb-6">
                    <span className="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                    <input id="email" placeholder="Email" type="text" className="p-inputtext w-full mb-4" />
                    <div className="flex align-items-center">
                        <Checkbox id="checkbox2" checked={checked2} onChange={(e) => setChecked2(e.checked)} className="text-900"></Checkbox>
                        <label htmlFor="checkbox2" className="text-900 ml-2">Email me with news and offers</label>
                    </div>
                </div>
                <div className="col-12 field mb-4">
                    <span className="text-900 text-2xl block font-medium mb-5">Shipping</span>
                    <Dropdown options={cities} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} placeholder="Country / Region" optionLabel="name" showClear className="w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="name" placeholder="Name" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="lastname" placeholder="Last Name" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 field mb-4">
                    <input id="address" placeholder="Address" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 field mb-4">
                    <input id="address2" placeholder="Apartment, suite, etc" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="pc" placeholder="PostalCode" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="city" placeholder="City" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <div className="flex align-items-center">
                        <Checkbox id="checkbox3" checked={checked3} onChange={(e) => setChecked3(e.checked)} className="text-900"></Checkbox>
                        <label htmlFor="checkbox3" className="text-900 ml-2">Save for next purchase</label>
                    </div>
                </div>
                <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                    <Button className="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" label="Return to Cart" />
                    <Button className="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
            <div className="border-bottom-1 pb-3 surface-border">
                <span className="text-900 font-medium text-xl">Your Cart</span>
            </div>
            <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" className="w-8rem h-8rem flex-shrink-0 mb-3" alt="checkoutform-1-2" />
                <div className="flex-auto lg:ml-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <span className="text-900 font-medium">Product Name</span>
                        <span className="text-900 font-bold">$123.00</span>
                    </div>
                    <div className="text-600 text-sm mb-3">Black | Large</div>
                    <div className="flex flex-auto justify-content-between align-items-center">
                        <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-2rem text-center py-2 px-1 border-transparent" value={quantities1[0]}
                            className="border-1 surface-border border-round" decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                        <Button icon="pi pi-trash" className="p-button-text p-button-rounded" />
                    </div>
                </div>
            </div>
            <div className="py-2 mt-3 border-bottom-1 surface-border">
                <div className="p-inputgroup mb-3">
                    <InputText value={value4} onChange={(e) => setValue4(e.target.value)} placeholder="Promocode" className="w-full" />
                    <Button label="Apply" disabled={!value4} />
                </div>
            </div>
            <div className="py-2 mt-3">
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-medium">Subtotal</span>
                    <span className="text-900">$123.00</span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-medium">Shipping</span>
                    <span className="text-primary font-bold">Free</span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-bold">Total</span>
                    <span className="text-900 font-medium text-xl">$123.00</span>
                </div>
            </div>
            <div className="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" className="mr-2" alt="Country Flag" /><span className="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-50 px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-3xl mb-5">Your order is almost done</div>
    <div className="grid -mr-3 -ml-3">
        <div className="col-12 lg:col-9 p-3">
            <div className="px-0 py-4 lg:px-4 surface-card border-round shadow-2">
                <div className="flex">
                    <div className="flex flex-column align-items-center ml-3" style={{ width: '2rem' }}>
                        <span className="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '3rem', minHeight: '3rem' }}>
                            <i className="pi pi-directions text-xl"></i>
                        </span>
                        <div className="h-full border-dashed border-1 border-green-500" style={{ minHeight: '12rem' }}></div>
                    </div>
                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                        <div className="mb-3">
                            <span className="text-900 text-xl block ml-2">Address</span>
                        </div>
                        <div className="grid flex-column lg:flex-row">
                            <div className="col p-3">
                                <div onClick={() => setSelectedAddress(address1)} className={classNames('flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150', { 'border-primary': selectedAddress === address1 })}>
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900 text-xl font-medium">Home</span>
                                        <span className="text-600 font-medium"><i className="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span className="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</span>
                                    <span className="inline-block text-600"><i className="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div onClick={() => setSelectedAddress(address2)} className={classNames('flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150', { 'border-primary': selectedAddress === address2 })}>
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900 text-xl font-medium">Office</span>
                                        <span className="text-600 font-medium"><i className="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span className="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1072 KC Amsterdam The Netherlands</span>
                                    <span className="inline-block text-600"><i className="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span className="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i className="pi pi-fw pi-plus"></i></span>
                                    <span className="text-600 mt-3">Add New Address</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-column align-items-center ml-3" style={{ width: '2rem' }}>
                        <span className="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '3rem', minHeight: '3rem' }}>
                            <i className="pi pi-image text-xl"></i>
                        </span>
                        <div className="h-full border-dashed border-1 surface-border" style={{ minHeight: '12rem' }}></div>
                    </div>
                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                        <div className="mb-3">
                            <span className="text-900 text-xl block ml-2">Cart</span>
                        </div>
                        <div className="p-2 flex flex-column lg:flex-row flex-wrap lg:align-items-center">
                            <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-4.png" className="w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0" alt="product" />
                            <div className="flex-auto lg:ml-3">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <span className="text-900 font-medium">Product Name</span>
                                    <span className="text-900 font-medium">$123.00</span>
                                </div>
                                <div className="text-600 text-sm mb-3">White</div>
                                <div className="flex flex-auto justify-content-between align-items-center">
                                    <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-2rem text-center p-0 border-none surface-50" value={quantities1[0]}
                                        className="border-none border-round" decrementButtonClassName="surface-50 p-button-text text-600 hover:text-primary" incrementButtonClassName="p-button-text surface-50 text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                                    <span className="text-600 cursor-pointer"><i className="pi pi-trash mr-2"></i>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-column align-items-center ml-3" style={{ width: '2rem' }}>
                        <span className="bg-gray-200 text-500 flex align-items-center justify-content-center border-circle" style={{ minWidth: '3rem', minHeight: '3rem' }}>
                            <i className="pi pi-credit-card text-xl"></i>
                        </span>
                    </div>
                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                        <div className="mb-3">
                            <span className="text-900 text-xl block ml-2">Payment Method</span>
                        </div>
                        <div className="grid flex-column lg:flex-row">
                            <div className="col p-3">
                                <div onClick={() => setSelectedCard(card1)} className={classNames('flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150', { 'border-primary': selectedCard === card1 })}>
                                    <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" className="w-6rem" alt="Visa" />
                                    <span className="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div className="flex justify-content-between align-items-center mt-3">
                                        <span className="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span className="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div className="flex justify-content-between align-items-center mt-3">
                                        <span className="inline-block text-900 font-bold">John  Warden</span>
                                        <span className="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div onClick={() => setSelectedCard(card2)} className={classNames('flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150', { 'border-primary': selectedCard === card2 })}>
                                    <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" className="w-6rem" alt="Visa" />
                                    <span className="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div className="flex justify-content-between align-items-center mt-3">
                                        <span className="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span className="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div className="flex justify-content-between align-items-center mt-3">
                                        <span className="inline-block text-900 font-bold">John  Warden</span>
                                        <span className="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span className="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i className="pi pi-fw pi-plus"></i></span>
                                    <span className="text-600 mt-3 text-center">Add New Credit Card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-3 p-3">
            <div className="surface-card p-4 border-round shadow-2">
                <div className="border-bottom-1 surface-border pb-4">
                    <span className="text-900 text-xl block">Order Summary</span>
                </div>
                <div className="border-bottom-1 surface-border my-3 py-2">
                    <div className="flex justify-content-between mb-3">
                        <span className="text-900">Price</span>
                        <span className="text-900">$123.00</span>
                    </div>
                    <div className="flex justify-content-between mb-3">
                        <span className="text-900">Delivery</span>
                        <span className="text-green-500">Free</span>
                    </div>
                    <div className="flex justify-content-between mb-3">
                        <span className="text-900">Discount</span>
                        <span className="text-900">$12.00</span>
                    </div>
                </div>
                <div className="border-bottom-1 surface-border my-3 py-2">
                    <div className="flex justify-content-between mb-3">
                        <span className="text-900 font-medium">Total</span>
                        <span className="text-900 font-bold">$111.00</span>
                    </div>
                </div>
                <Button className="surface-400 border-none hover:bg-primary w-full mt-3" disabled={!selectedCard} label="Place Order" />
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Checkout Forms</div>
            <BlockViewer header="2 Columns" code={block1}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mr-3 -ml-3">
                        <div className="col-12 lg:col-8 p-4">
                            <div className="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                                <div className="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                                    <div className="text-900 font-medium text-xl">
                                        Contact Information
                                    </div>
                                    <div className="mt-3 lg:mt-0">
                                        <span className="text-600 mr-2">
                                            Already hava an account?
                                        </span>
                                        <a
                                            tabIndex="0"
                                            className="cursor-pointer text-900 hover:text-primary transition-duration-150"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 field">
                                    <label
                                        htmlFor="email2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Email
                                    </label>
                                    <input
                                        inputid="email2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            id="checkbox1"
                                            checked={checked1}
                                            onChange={(e) =>
                                                setChecked1(e.checked)
                                            }
                                            className="text-900"
                                        ></Checkbox>
                                        <label
                                            htmlFor="checkbox1"
                                            className="text-900 ml-2"
                                        >
                                            Email me with news and offers
                                        </label>
                                    </div>
                                </div>
                                <Divider className="w-full px-2 mb-3" />
                                <div className="col-12 mt-4 lg:mt-0 mb-4">
                                    <div className="text-900 font-medium text-xl">
                                        Shipping
                                    </div>
                                </div>
                                <div className="col-12 field mb-0">
                                    <label
                                        htmlFor="country2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Country
                                    </label>
                                    <input
                                        inputid="country2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-0">
                                    <label
                                        htmlFor="name2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Name
                                    </label>
                                    <input
                                        inputid="name2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-0">
                                    <label
                                        htmlFor="surname2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Surname
                                    </label>
                                    <input
                                        inputid="surname2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 field mb-0">
                                    <label
                                        htmlFor="address3"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Apartment, Suite, etc.
                                    </label>
                                    <input
                                        inputid="address3"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-0">
                                    <label
                                        htmlFor="pc2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Postal Code
                                    </label>
                                    <input
                                        inputid="pc2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-0">
                                    <label
                                        htmlFor="city2"
                                        className="text-900 font-medium mb-3"
                                    >
                                        City
                                    </label>
                                    <input
                                        inputid="city2"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <div className="col-12 field mb-0">
                                    <label
                                        htmlFor="phone"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        inputid="phone"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                                <Divider className="w-full px-2 mb-3" />
                                <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">
                                    Shipping Method
                                </div>
                                <div className="col-12 flex flex-column lg:flex-row field">
                                    <div
                                        onClick={() => setSelectedValue("UPS")}
                                        className={classNames(
                                            "flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer",
                                            {
                                                "border-primary surface-50":
                                                    selectedValue === "UPS",
                                            }
                                        )}
                                    >
                                        <div className="mr-3 lg:mr-0">
                                            <div className="text-900 font-bold mb-2">
                                                UPS
                                            </div>
                                            <span className="text-600">
                                                Delivery: Tomorrow
                                            </span>
                                        </div>
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-primary mr-2 font-medium">
                                                $9.00
                                            </span>
                                            <RadioButton
                                                name="ups"
                                                value="UPS"
                                                onChange={(e) =>
                                                    setSelectedValue(e.value)
                                                }
                                                checked={
                                                    selectedValue === "UPS"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSelectedValue("FedEx")
                                        }
                                        className={classNames(
                                            "flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer",
                                            {
                                                "border-primary surface-50":
                                                    selectedValue === "FedEx",
                                            }
                                        )}
                                    >
                                        <div className="mr-3 lg:mr-0">
                                            <div className="text-900 font-bold mb-2">
                                                FedEx
                                            </div>
                                            <span className="text-600">
                                                Delivery: Next Week
                                            </span>
                                        </div>
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-primary mr-2 font-medium">
                                                $1.00
                                            </span>
                                            <RadioButton
                                                name="fedex"
                                                value="FedEx"
                                                onChange={(e) =>
                                                    setSelectedValue(e.value)
                                                }
                                                checked={
                                                    selectedValue === "FedEx"
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Divider className="w-full px-2 mb-3" />
                                <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">
                                    Payment
                                </div>
                                <div className="col-12 mb-4">
                                    <div
                                        onClick={() =>
                                            setSelectedValue2("paypal")
                                        }
                                        className={classNames(
                                            "p-3 border-1 border-round-top surface-border",
                                            {
                                                "border-primary surface-50":
                                                    selectedValue2 === "paypal",
                                            }
                                        )}
                                    >
                                        <RadioButton
                                            name="paypal"
                                            value="paypal"
                                            onChange={(e) =>
                                                setSelectedValue2(e.value)
                                            }
                                            id="paypal"
                                            checked={
                                                selectedValue2 === "paypal"
                                            }
                                        />
                                        <label
                                            htmlFor="paypal"
                                            className="text-900 ml-3"
                                        >
                                            PayPal
                                        </label>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSelectedValue2("creditcard")
                                        }
                                        className={classNames(
                                            "p-3 border-x-1 surface-border",
                                            {
                                                "border-primary surface-50":
                                                    selectedValue2 ===
                                                    "creditcard",
                                            }
                                        )}
                                    >
                                        <RadioButton
                                            name="creditCard"
                                            value="creditcard"
                                            onChange={(e) =>
                                                setSelectedValue2(e.value)
                                            }
                                            id="creditCard"
                                            checked={
                                                selectedValue2 === "creditcard"
                                            }
                                        />
                                        <label
                                            htmlFor="creditCard"
                                            className="text-900 ml-3"
                                        >
                                            Credit Card
                                        </label>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSelectedValue2("bank")
                                        }
                                        className={classNames(
                                            "p-3 border-1 border-round-bottom surface-border",
                                            {
                                                "border-primary surface-50":
                                                    selectedValue2 === "bank",
                                            }
                                        )}
                                    >
                                        <RadioButton
                                            name="bank"
                                            value="bank"
                                            onChange={(e) =>
                                                setSelectedValue2(e.value)
                                            }
                                            id="bank"
                                            checked={selectedValue2 === "bank"}
                                        />
                                        <label
                                            htmlFor="bank"
                                            className="text-900 ml-3"
                                        >
                                            Online Bank Transfer
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 field mb-4">
                                    <form className="relative">
                                        <label
                                            htmlFor="cc"
                                            className="text-900 font-medium mb-3 block"
                                        >
                                            Card Number
                                        </label>
                                        <InputMask
                                            value={inputValue1}
                                            onChange={(e) =>
                                                setInputValue1(e.target.value)
                                            }
                                            id="cc"
                                            name="cc"
                                            keyfilter={ccRegex}
                                            validateOnly
                                            mask="9999-9999-9999-9999"
                                            placeholder="9999-9999-9999-9999"
                                            style={{ marginRight: ".5em" }}
                                        />
                                    </form>
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <form className="relative">
                                        <label
                                            htmlFor="exp"
                                            className="text-900 font-medium mb-3 block"
                                        >
                                            Expiry Date
                                        </label>
                                        <InputMask
                                            value={inputValue2}
                                            onChange={(e) =>
                                                setInputValue2(e.value)
                                            }
                                            id="exp"
                                            name="exp"
                                            keyfilter={expRegex}
                                            validateOnly
                                            mask="99/99"
                                            placeholder="99/99"
                                            slotChar="MM/YY"
                                            style={{ marginRight: ".5em" }}
                                        />
                                    </form>
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <form className="relative">
                                        <label
                                            htmlFor="cvc"
                                            className="text-900 font-medium mb-3 block"
                                        >
                                            CVC
                                        </label>
                                        <InputMask
                                            value={inputValue3}
                                            onChange={(e) =>
                                                setInputValue3(e.target.value)
                                            }
                                            id="cvc"
                                            name="cvc"
                                            keyfilter={cvcRegex}
                                            validateOnly
                                            mask="999"
                                            placeholder="999"
                                            style={{ marginRight: ".5em" }}
                                        />
                                    </form>
                                </div>
                                <div className="col-12 field mb-0">
                                    <label
                                        htmlFor="holderName"
                                        className="text-900 font-medium mb-3"
                                    >
                                        Cardholder Name
                                    </label>
                                    <input
                                        inputid="holderName"
                                        type="text"
                                        className="p-inputtext w-full mb-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-4">
                            <div className="surface-card border-round shadow-2 p-5">
                                <div className="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                                    <span className="text-900 font-medium text-lg lg:text-xl">
                                        <i className="pi pi-shopping-cart text-xl mr-2"></i>
                                        Your Order (1)
                                    </span>
                                    <a
                                        tabIndex="0"
                                        className="text-600 font-medium cursor-pointer hover:text-primary"
                                    >
                                        Edit Cart
                                    </a>
                                </div>
                                <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border">
                                    <img
                                        src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-1.png"
                                        className="w-8rem h-8rem flex-shrink-0 mb-3"
                                        alt="checkoutform-1-1"
                                    />
                                    <div className="flex-auto lg:ml-3">
                                        <div className="flex align-items-center justify-content-between mb-3">
                                            <span className="text-900 font-medium">
                                                Product Title
                                            </span>
                                            <span className="text-900 font-bold">
                                                $123.00
                                            </span>
                                        </div>
                                        <div className="text-600 text-sm mb-3">
                                            Black | Large
                                        </div>
                                        <div className="flex flex-auto justify-content-between align-items-center">
                                            <InputNumber
                                                showButtons
                                                buttonLayout="horizontal"
                                                min="0"
                                                inputClassName="w-2rem text-center py-2 px-1 border-transparent"
                                                value={quantities1[0]}
                                                className="border-1 surface-border border-round"
                                                decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                                incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                                incrementButtonIcon="pi pi-plus"
                                                decrementButtonIcon="pi pi-minus"
                                            />
                                            <Button
                                                icon="pi pi-trash"
                                                className="text-600 p-button-text p-button-rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2 mt-3 border-bottom-1 surface-border">
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900">
                                            Subtotal
                                        </span>
                                        <span className="text-900">$12.00</span>
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900">
                                            Shipping
                                        </span>
                                        <span className="text-900">Free</span>
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900">Total</span>
                                        <span className="text-900 font-bold">
                                            $12.00
                                        </span>
                                    </div>
                                </div>
                                <div className="py-2 mt-3 border-bottom-1 surface-border">
                                    <div className="text-900 font-medium mb-2">
                                        Save Your Account
                                    </div>
                                    <div className="text-600 text-sm line-height-3 mb-2">
                                        Create an exclusive account for easy
                                        shopping and experience for your
                                        upcoming visits.
                                    </div>
                                    <Password
                                        value={value3}
                                        onChange={(e) =>
                                            setValue3(e.target.value)
                                        }
                                        toggleMask
                                        className="w-full mb-2"
                                        inputClassName="w-full"
                                    />
                                </div>
                                <Button
                                    className="p-button-primary w-full mt-3"
                                    label="Place Order"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Multi-Step" code={block2}>
                <div className="surface-section">
                    <div className="grid grid-nogutter">
                        <div className="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
                            <ul className="flex list-none flex-wrap p-0 mb-6">
                                <li className="flex align-items-center text-primary mr-2">
                                    Cart{" "}
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Information
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Shipping
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Payment
                                </li>
                            </ul>
                            <div className="grid formgrid">
                                <div className="col-12 field mb-6">
                                    <span className="text-900 text-2xl block font-medium mb-5">
                                        Contact Information
                                    </span>
                                    <input
                                        id="email"
                                        placeholder="Email"
                                        type="text"
                                        className="p-inputtext w-full mb-4"
                                    />
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            id="checkbox2"
                                            checked={checked2}
                                            onChange={(e) =>
                                                setChecked2(e.checked)
                                            }
                                            className="text-900"
                                        ></Checkbox>
                                        <label
                                            htmlFor="checkbox2"
                                            className="text-900 ml-2"
                                        >
                                            Email me with news and offers
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 field mb-4">
                                    <span className="text-900 text-2xl block font-medium mb-5">
                                        Shipping
                                    </span>
                                    <Dropdown
                                        options={cities}
                                        value={selectedCity}
                                        onChange={(e) =>
                                            setSelectedCity(e.value)
                                        }
                                        placeholder="Country / Region"
                                        optionLabel="name"
                                        showClear
                                        className="w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="name"
                                        placeholder="Name"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="lastname"
                                        placeholder="Last Name"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 field mb-4">
                                    <input
                                        id="address"
                                        placeholder="Address"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 field mb-4">
                                    <input
                                        id="address2"
                                        placeholder="Apartment, suite, etc"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="pc"
                                        placeholder="PostalCode"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="city"
                                        placeholder="City"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            id="checkbox3"
                                            checked={checked3}
                                            onChange={(e) =>
                                                setChecked3(e.checked)
                                            }
                                            className="text-900"
                                        ></Checkbox>
                                        <label
                                            htmlFor="checkbox3"
                                            className="text-900 ml-2"
                                        >
                                            Save for next purchase
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                                    <Button
                                        className="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4"
                                        label="Return to Cart"
                                    />
                                    <Button
                                        className="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2"
                                        label="Continue to Shipping"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
                            <div className="border-bottom-1 pb-3 surface-border">
                                <span className="text-900 font-medium text-xl">
                                    Your Cart
                                </span>
                            </div>
                            <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                                <img
                                    src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png"
                                    className="w-8rem h-8rem flex-shrink-0 mb-3"
                                    alt="checkoutform-1-2"
                                />
                                <div className="flex-auto lg:ml-3">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <span className="text-900 font-medium">
                                            Product Name
                                        </span>
                                        <span className="text-900 font-bold">
                                            $123.00
                                        </span>
                                    </div>
                                    <div className="text-600 text-sm mb-3">
                                        Black | Large
                                    </div>
                                    <div className="flex flex-auto justify-content-between align-items-center">
                                        <InputNumber
                                            showButtons
                                            buttonLayout="horizontal"
                                            min="0"
                                            inputClassName="w-2rem text-center py-2 px-1 border-transparent"
                                            value={quantities1[0]}
                                            className="border-1 surface-border border-round"
                                            decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                            incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                            incrementButtonIcon="pi pi-plus"
                                            decrementButtonIcon="pi pi-minus"
                                        />
                                        <Button
                                            icon="pi pi-trash"
                                            className="p-button-text p-button-rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 mt-3 border-bottom-1 surface-border">
                                <div className="p-inputgroup mb-3">
                                    <InputText
                                        value={value4}
                                        onChange={(e) =>
                                            setValue4(e.target.value)
                                        }
                                        placeholder="Promocode"
                                        className="w-full"
                                    />
                                    <Button label="Apply" disabled={!value4} />
                                </div>
                            </div>
                            <div className="py-2 mt-3">
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-medium">
                                        Subtotal
                                    </span>
                                    <span className="text-900">$123.00</span>
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-medium">
                                        Shipping
                                    </span>
                                    <span className="text-primary font-bold">
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-bold">
                                        Total
                                    </span>
                                    <span className="text-900 font-medium text-xl">
                                        $123.00
                                    </span>
                                </div>
                            </div>
                            <div className="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                                <img
                                    src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png"
                                    className="mr-2"
                                    alt="Country Flag"
                                />
                                <span className="text-black-alpha-90 font-medium">
                                    No additional duties or taxes.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Formless" code={block3}>
                <div className="surface-50 px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-3xl mb-5">
                        Your order is almost done
                    </div>
                    <div className="grid -mr-3 -ml-3">
                        <div className="col-12 lg:col-9 p-3">
                            <div className="px-0 py-4 lg:px-4 surface-card border-round shadow-2">
                                <div className="flex">
                                    <div
                                        className="flex flex-column align-items-center ml-3"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-green-500 text-0 flex align-items-center justify-content-center border-circle"
                                            style={{
                                                minWidth: "3rem",
                                                minHeight: "3rem",
                                            }}
                                        >
                                            <i className="pi pi-directions text-xl"></i>
                                        </span>
                                        <div
                                            className="h-full border-dashed border-1 border-green-500"
                                            style={{ minHeight: "12rem" }}
                                        ></div>
                                    </div>
                                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                                        <div className="mb-3">
                                            <span className="text-900 text-xl block ml-2">
                                                Address
                                            </span>
                                        </div>
                                        <div className="grid flex-column lg:flex-row">
                                            <div className="col p-3">
                                                <div
                                                    onClick={() =>
                                                        setSelectedAddress(
                                                            address1
                                                        )
                                                    }
                                                    className={classNames(
                                                        "flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150",
                                                        {
                                                            "border-primary":
                                                                selectedAddress ===
                                                                address1,
                                                        }
                                                    )}
                                                >
                                                    <div className="flex justify-content-between mb-3">
                                                        <span className="text-900 text-xl font-medium">
                                                            Home
                                                        </span>
                                                        <span className="text-600 font-medium">
                                                            <i className="pi pi-pencil mr-2"></i>
                                                            Edit
                                                        </span>
                                                    </div>
                                                    <span className="inline-block text-600 mb-3">
                                                        Jacob Obrechtstraat 5,
                                                        1071 KC Amsterdam The
                                                        Netherlands
                                                    </span>
                                                    <span className="inline-block text-600">
                                                        <i className="pi pi-mobile mr-2"></i>
                                                        +123456789
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col p-3">
                                                <div
                                                    onClick={() =>
                                                        setSelectedAddress(
                                                            address2
                                                        )
                                                    }
                                                    className={classNames(
                                                        "flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150",
                                                        {
                                                            "border-primary":
                                                                selectedAddress ===
                                                                address2,
                                                        }
                                                    )}
                                                >
                                                    <div className="flex justify-content-between mb-3">
                                                        <span className="text-900 text-xl font-medium">
                                                            Office
                                                        </span>
                                                        <span className="text-600 font-medium">
                                                            <i className="pi pi-pencil mr-2"></i>
                                                            Edit
                                                        </span>
                                                    </div>
                                                    <span className="inline-block text-600 mb-3">
                                                        Jacob Obrechtstraat 5,
                                                        1072 KC Amsterdam The
                                                        Netherlands
                                                    </span>
                                                    <span className="inline-block text-600">
                                                        <i className="pi pi-mobile mr-2"></i>
                                                        +123456789
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col p-3">
                                                <div className="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                                    <span className="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center">
                                                        <i className="pi pi-fw pi-plus"></i>
                                                    </span>
                                                    <span className="text-600 mt-3">
                                                        Add New Address
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div
                                        className="flex flex-column align-items-center ml-3"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-green-500 text-0 flex align-items-center justify-content-center border-circle"
                                            style={{
                                                minWidth: "3rem",
                                                minHeight: "3rem",
                                            }}
                                        >
                                            <i className="pi pi-image text-xl"></i>
                                        </span>
                                        <div
                                            className="h-full border-dashed border-1 surface-border"
                                            style={{ minHeight: "12rem" }}
                                        ></div>
                                    </div>
                                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                                        <div className="mb-3">
                                            <span className="text-900 text-xl block ml-2">
                                                Cart
                                            </span>
                                        </div>
                                        <div className="p-2 flex flex-column lg:flex-row flex-wrap lg:align-items-center">
                                            <img
                                                src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-4.png"
                                                className="w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0"
                                                alt="product"
                                            />
                                            <div className="flex-auto lg:ml-3">
                                                <div className="flex align-items-center justify-content-between mb-3">
                                                    <span className="text-900 font-medium">
                                                        Product Name
                                                    </span>
                                                    <span className="text-900 font-medium">
                                                        $123.00
                                                    </span>
                                                </div>
                                                <div className="text-600 text-sm mb-3">
                                                    White
                                                </div>
                                                <div className="flex flex-auto justify-content-between align-items-center">
                                                    <InputNumber
                                                        showButtons
                                                        buttonLayout="horizontal"
                                                        min="0"
                                                        inputClassName="w-2rem text-center p-0 border-none surface-50"
                                                        value={quantities1[0]}
                                                        className="border-none border-round"
                                                        decrementButtonClassName="surface-50 p-button-text text-600 hover:text-primary"
                                                        incrementButtonClassName="p-button-text surface-50 text-600 hover:text-primary py-1 px-1"
                                                        incrementButtonIcon="pi pi-plus"
                                                        decrementButtonIcon="pi pi-minus"
                                                    />
                                                    <span className="text-600 cursor-pointer">
                                                        <i className="pi pi-trash mr-2"></i>
                                                        Delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div
                                        className="flex flex-column align-items-center ml-3"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-gray-200 text-500 flex align-items-center justify-content-center border-circle"
                                            style={{
                                                minWidth: "3rem",
                                                minHeight: "3rem",
                                            }}
                                        >
                                            <i className="pi pi-credit-card text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="ml-0 lg:ml-5 p-2 flex-auto">
                                        <div className="mb-3">
                                            <span className="text-900 text-xl block ml-2">
                                                Payment Method
                                            </span>
                                        </div>
                                        <div className="grid flex-column lg:flex-row">
                                            <div className="col p-3">
                                                <div
                                                    onClick={() =>
                                                        setSelectedCard(card1)
                                                    }
                                                    className={classNames(
                                                        "flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150",
                                                        {
                                                            "border-primary":
                                                                selectedCard ===
                                                                card1,
                                                        }
                                                    )}
                                                >
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png"
                                                        className="w-6rem"
                                                        alt="Visa"
                                                    />
                                                    <span className="inline-block text-900 text-lg lg:text-xl mt-3">
                                                        **** **** **** 1234
                                                    </span>
                                                    <div className="flex justify-content-between align-items-center mt-3">
                                                        <span className="inline-block text-600 text-sm">
                                                            Cardholder Name
                                                        </span>
                                                        <span className="inline-block text-600 text-sm text-right">
                                                            Expiry Date
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-content-between align-items-center mt-3">
                                                        <span className="inline-block text-900 font-bold">
                                                            John Warden
                                                        </span>
                                                        <span className="inline-block text-900 font-bold">
                                                            12/25
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col p-3">
                                                <div
                                                    onClick={() =>
                                                        setSelectedCard(card2)
                                                    }
                                                    className={classNames(
                                                        "flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150",
                                                        {
                                                            "border-primary":
                                                                selectedCard ===
                                                                card2,
                                                        }
                                                    )}
                                                >
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png"
                                                        className="w-6rem"
                                                        alt="Visa"
                                                    />
                                                    <span className="inline-block text-900 text-lg lg:text-xl mt-3">
                                                        **** **** **** 1234
                                                    </span>
                                                    <div className="flex justify-content-between align-items-center mt-3">
                                                        <span className="inline-block text-600 text-sm">
                                                            Cardholder Name
                                                        </span>
                                                        <span className="inline-block text-600 text-sm text-right">
                                                            Expiry Date
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-content-between align-items-center mt-3">
                                                        <span className="inline-block text-900 font-bold">
                                                            John Warden
                                                        </span>
                                                        <span className="inline-block text-900 font-bold">
                                                            12/25
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col p-3">
                                                <div className="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                                    <span className="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center">
                                                        <i className="pi pi-fw pi-plus"></i>
                                                    </span>
                                                    <span className="text-600 mt-3 text-center">
                                                        Add New Credit Card
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-3 p-3">
                            <div className="surface-card p-4 border-round shadow-2">
                                <div className="border-bottom-1 surface-border pb-4">
                                    <span className="text-900 text-xl block">
                                        Order Summary
                                    </span>
                                </div>
                                <div className="border-bottom-1 surface-border my-3 py-2">
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900">Price</span>
                                        <span className="text-900">
                                            $123.00
                                        </span>
                                    </div>
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900">
                                            Delivery
                                        </span>
                                        <span className="text-green-500">
                                            Free
                                        </span>
                                    </div>
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900">
                                            Discount
                                        </span>
                                        <span className="text-900">$12.00</span>
                                    </div>
                                </div>
                                <div className="border-bottom-1 surface-border my-3 py-2">
                                    <div className="flex justify-content-between mb-3">
                                        <span className="text-900 font-medium">
                                            Total
                                        </span>
                                        <span className="text-900 font-bold">
                                            $111.00
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    className="surface-400 border-none hover:bg-primary w-full mt-3"
                                    disabled={!selectedCard}
                                    label="Place Order"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CheckoutForm;
