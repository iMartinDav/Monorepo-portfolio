import React, { useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { Ripple } from "primereact/ripple";

const Pricing = () => {
    const plans = [
        {
            name: "Sketchers",
            price: 10.99,
            icon: "pi pi-pencil",
            description: [
                { name: "Arcu vitae elementum", icon: "pi pi-check-circle" },
                { name: "Dui faucibus in ornare", icon: "pi pi-check-circle" },
                { name: "Morbi tincidunt augue", icon: "pi pi-check-circle" },
                { name: "Sed euismod nisi", icon: "pi pi-check-circle" },
            ],
        },
        {
            name: "Painter",
            price: 15.99,
            icon: "pi pi-palette",
            description: [
                {
                    name: "includes all the features of sketchers",
                    icon: "pi pi-reply",
                },
                {
                    name: "Sed eget facilisis turpis",
                    icon: "pi pi-check-circle",
                },
                {
                    name: "Duis tincidunt ullamcorper libero",
                    icon: "pi pi-check-circle",
                },
                { name: "Proin purus orci", icon: "pi pi-check-circle" },
            ],
        },
        {
            name: "Artist",
            price: 24.99,
            icon: "pi pi-image",
            description: [
                {
                    name: "includes all the features of painter",
                    icon: "pi pi-reply",
                },
                { name: "Maecenas luctus nisl", icon: "pi pi-check-circle" },
                { name: "Aliquam erat volutpat", icon: "pi pi-check-circle" },
                { name: "Phasellus ante nulla", icon: "pi pi-check-circle" },
            ],
        },
    ];

    const currency = "$";
    const [value, setValue] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(plans[1]);
    const [selectedInterval, setSelectedInterval] = useState("month");
    const [checked, setChecked] = useState(false);

    const block1 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div className="grid">
        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Basic</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$9</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <Button label="Buy Now" className="p-3 w-full mt-auto" />
                </div>
            </div>
        </div>

        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Premium</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$29</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" className="p-3 w-full" />
                </div>
            </div>
        </div>

        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$49</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Duis ultricies lacus sed</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Imperdiet proin</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span className="text-900">Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" className="p-3 w-full p-button-outlined" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-blue-600 text-2xl mb-4 text-center">Save up to 25% today</div>
    <div className="text-900 font-bold text-6xl text-center mb-4">Pricing Plans</div>
    <div className="flex align-items-center justify-content-center text-900">
        <span className="font-semibold mr-3">Monthly</span>
        <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
        <span className="ml-3">Yearly</span>
    </div>

    <div className="flex flex-column md:flex-row mt-6">
        <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
            <div className="bg-bluegray-100 text-center p-3" style={{ borderRadius: '6px 6px 0 0' }}>
                <div className="text-2xl font-bold text-bluegray-900 mb-3">Basic</div>
                <div className="flex align-items-center justify-content-center">
                    <span className="font-bold text-bluegray-900 text-5xl mr-2">10$</span>
                    <span className="text-2xl text-bluegray-400"> / month</span>
                </div>
            </div>
            <div className="bg-bluegray-50 p-4 flex flex-column flex-grow-1" style={{ boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 6px 6px' }}>
                <div className="text-bluegray-500 font-bold line-height-3 mb-4">Ut enim ad minim veniam, quis nostrud exercitation.</div>
                <ul className="list-none p-0 m-0 mb-5 text-bluegray-600">
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li className="flex align-items-center">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                </ul>

                <Button className="p-button-secondary w-full mt-auto" label="Try Free" />
            </div>
        </div>

        <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
            <div className="bg-bluegray-800 text-center p-3 border-3 border-green-500 border-bottom-none" style={{ borderRadius: '6px 6px 0 0' }}>
                <div className="bg-green-500 text-0 font-bold text-sm inline-block p-2 mb-3" style={{ borderRadius: '20px' }}>MOST POPULAR</div>
                <div className="text-2xl font-bold text-white mb-3">Premium</div>
                <div className="flex align-items-center justify-content-center">
                    <span className="font-bold text-white text-5xl mr-2">20$</span>
                    <span className="text-2xl text-bluegray-400"> / month</span>
                </div>
            </div>
            <div className="bg-bluegray-900 p-4 flex flex-column flex-grow-1 border-3 border-green-500 border-top-none" style={{ boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 6px 6px' }}>
                <div className="text-bluegray-400 font-bold line-height-3 mb-4">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <ul className="list-none p-0 m-0 mb-5 text-bluegray-100">
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Morbi tincidunt augue</span>
                    </li>
                    <li className="flex align-items-center">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Duis ultricies lacus sed</span>
                    </li>
                </ul>

                <Button className="p-button-success w-full mt-auto" label="Buy Now" />
            </div>
        </div>

        <div className="mb-6 md:mb-0 flex flex-column flex-grow-1">
            <div className="bg-blue-800 text-center p-3" style={{ borderRadius: '6px 6px 0 0' }} >
                <div className="text-2xl font-bold text-white mb-3">Enterprise</div>
                <div className="flex align-items-center justify-content-center">
                    <span className="font-bold text-white text-5xl mr-2">30$</span>
                    <span className="text-2xl text-blue-400"> / month</span>
                </div>
            </div>
            <div className="bg-blue-900 p-4 flex flex-column flex-grow-1" style={{ boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 6px 6px' }}>
                <div className="text-blue-400 font-bold line-height-3 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                <ul className="list-none p-0 m-0 mb-5 text-blue-100">
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Arcu vitae elementum</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Dui faucibus in ornare</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Morbi tincidunt augue</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Duis ultricies lacus sed</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                        <span>Imperdiet proin</span>
                    </li>
                </ul>

                <Button className="p-button-outlined w-full mt-auto" label="Contact Us" />
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="overflow-x-auto">
        <table className="w-full white-space-nowrap" style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
            <thead>
                <tr>
                    <td className="surface-100 p-3">
                        <div className="text-3xl text-900 mb-2">Pricing</div>
                        <span className="text-600 line-height-3">Fringilla est ullamcorper eget nulla facilisi etiam</span>
                    </td>
                    <td className="surface-100 p-3 text-center">
                        <div className="text-900 text-xl font-medium mb-3">Basic</div>
                        <div className="text-600 mb-3"><span className="text-3xl text-900">$10</span> /month</div>
                        <Button className="p-button-rounded" label="Free Trial" />
                    </td>
                    <td className="surface-100 p-3 text-center">
                        <div className="text-900 text-xl font-medium mb-3">Premium</div>
                        <div className="text-600 mb-3"><span className="text-3xl text-900">$20</span> /month</div>
                        <Button className="p-button-rounded" label="Buy Now" />
                    </td>
                    <td className="surface-100 p-3 text-center">
                        <div className="text-900 text-xl font-medium mb-3">Enterprise</div>
                        <div className="text-600 mb-3"><span className="text-3xl text-900">$30</span> /month</div>
                        <Button className="p-button-rounded p-button-outlined" label="Contact Us" />
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Arcu purus</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Posuere felis</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Curabitur mollis</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Vitae odio</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Orci, mi</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-500 pi pi-times"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Tincidunt vulputate</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-500 pi pi-times"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-500 pi pi-times"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Quis felis</td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-500 pi pi-times"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-500 pi pi-times"></i></td>
                    <td className="text-center p-medium border-bottom-1 border-200"><i className="text-green-500 pi pi-check"></i></td>
                </tr>
                <tr>
                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">Dignissim vivamus</td>
                    <td className="text-center text-600 border-bottom-1 border-200">Up to <span className="text-900">5</span> files</td>
                    <td className="text-center text-600 border-bottom-1 border-200">Up to <span className="text-900">10</span> files</td>
                    <td className="text-center text-900 border-bottom-1 border-200">Unlimited</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover" style={{ background: 'url("/demo/images/blocks/pricing/pricing-4.svg")' }}>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 lg:pr-8">
            <div className="text-900 font-bold text-6xl mb-4">Pricing</div>
            <div className="text-700 text-xl line-height-3 mb-4 lg:mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velitnumquam eligendi quos.</div>
        </div>
        <div className="w-full md:w-6 lg:w-3">
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Arcu vitae elementum</span>
                </li>
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Dui faucibus in ornare</span>
                </li>
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Morbi tincidunt augue</span>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-6 lg:w-3 md:pl-5">
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Duis ultricies lacus sed</span>
                </li>
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Imperdiet proin</span>
                </li>
                <li className="flex align-items-center my-4">
                    <i className="pi pi-check text-green-500 mr-3"></i>
                    <span>Nisi scelerisque</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-wrap mt-5 -mx-3">
        <div className="w-full lg:w-4 p-3">
            <div className="shadow-2 p-3 h-full bg-primary" style={{ borderRadius: '6px' }}>
                <div className="font-medium text-xl mb-5">Free Forever</div>
                <div className="font-bold text-5xl mb-5">Free</div>
                <button type="button" className="p-ripple font-medium appearance-none border-none p-2 surface-0 text-primary hover:surface-100 p-component lg:w-full border-rounded cursor-pointer transition-colors transition-duration-150" style={{ borderRadius: '6px' }}>
                    <span>Create Account</span>
                    <Ripple />
                </button>
                <p className="text-sm line-height-3 mb-0 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className="w-full lg:w-4 p-3">
            <div className="shadow-2 p-3 h-full surface-card" style={{ borderRadius: '6px' }}>
                <div className="font-medium text-xl mb-5 text-900 ">Monthly</div>
                <div className="flex align-items-center mb-5">
                    <span className="text-900 font-bold text-5xl">$29</span>
                    <span className="font-medium text-500 ml-2">per month</span>
                </div>
                <Button label="Proceed Monthly" icon="pi pi-arrow-right" iconPos="right" className="lg:w-full font-medium p-2" style={{ borderRadius: '6px' }} />
                <p className="text-sm line-height-3 mb-0 mt-5">Nec ultrices dui sapien eget. Amet nulla facilisi morbi tempus.</p>
            </div>
        </div>
        <div className="w-full lg:w-4 p-3">
            <div className="shadow-2 p-3 h-full flex flex-column surface-card" style={{ borderRadius: '6px' }}>
                <div className="flex flex-row justify-content-between mb-5 align-items-center">
                    <div className="text-900 text-xl font-medium">Yearly</div>
                    <span className="bg-orange-100 500 text-orange-500 font-semibold px-2 py-1 border-round">🎉 Save 20%</span>
                </div>
                <div className="flex align-items-center mb-5">
                    <span className="text-900 font-bold text-5xl">$275</span>
                    <span className="font-medium text-500 ml-2">per year</span>
                </div>
                <Button label="Proceed Yearly" icon="pi pi-arrow-right" iconPos="right" className="lg:w-full font-medium p-2" style={{ borderRadius: '6px' }} />
                <p className="text-sm line-height-3 mb-0 mt-5">Placerat in egestas erat imperdiet sed euismod nisi porta.</p>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 p-1 mb-3 lg:mb-5">
            <div className="text-900 font-bold text-6xl mb-4">Pricing</div>
            <div className="text-700 text-xl line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                numquam eligendi quos.</div>
        </div>
        <div className="col-12 lg:col-6 md:mb-3">
            <div className="h-full">
                <div className="flex flex-column justify-content-center h-full" style={{ borderRadius: '6px' }}>
                    <div className="flex flex-row p-3 mb-3">
                        <span
                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style={{ minWidth: '2.25rem', height: '2.25rem' }}>
                            <i className="pi pi-users"></i>
                        </span>
                        <div className="ml-3">
                            <div className="text-900 font-medium text-xl mb-2">Unlimited Users</div>
                            <span className="text-600 line-height-3">Auctor augue mauris augue neque gravida in fermentum et
                                sollicitudin. Ornare massa eget egestas purus viverra accumsan.</span>
                        </div>
                    </div>
                    <div className="flex flex-row p-3 mb-3">
                        <span
                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style={{ minWidth: '2.25rem', height: '2.25rem' }}>
                            <i className="pi pi-comments"></i>
                        </span>
                        <div className="ml-3">
                            <div className="text-900 font-medium text-xl mb-2">Unlimited Inbox</div>
                            <span className="text-600 line-height-3">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Quo perspiciatis error possimus ipsam omnis libero dolorum.</span>
                        </div>
                    </div>
                    <div className="flex flex-row p-3">
                        <span
                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                            style={{ minWidth: '2.25rem', height: '2.25rem' }}>
                            <i className="pi pi-moon"></i>
                        </span>
                        <div className="ml-3">
                            <div className="text-900 font-medium text-xl mb-2">Dark Mode</div>
                            <span className="text-600 line-height-3">Quidem delectus ad est illo ipsam fugiat voluptas
                                tempora. At a veritatis obcaecati ipsam id eius aut at error modi.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6">
            <div className="h-full pl-3">
                <div className="surface-card shadow-2 p-5" style={{ borderRadius: '6px' }}>
                    <div className="flex flex-column justify-content-between md:flex-row">
                        <div className="flex-grow-1 lg:w-min">
                            <div className="text-900 font-bold text-2xl mb-2">Single Plan</div>
                            <div className="text-500 text-xl">Id diam vel quam elementum.</div>
                        </div>
                        <div className="flex align-items-center w-auto lg:w-9rem lg:justify-content-end mt-3 lg:mt-0">
                            <span className="font-bold text-4xl text-900">$9</span>
                            <span className="text-700 text-xl ml-2 line-height-3">per month</span>
                        </div>
                    </div>
                    <hr className="my-5 mx-0 border-top-1 border-none surface-border" />
                    <div className="text-900 font-medium text-xl pb-1">Features</div>
                    <div className="flex flex-column justify-space-between md:flex-row">
                        <ul className="list-none p-0 m-0 flex-grow-1">
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Arcu vitae elementum</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Dui faucibus in ornare</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Morbi tincidunt augue</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Duis ultricies lacus sed</span>
                            </li>
                        </ul>
                        <ul className="list-none p-0 md:pl-2 m-0 flex-grow-1">
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Imperdiet proin</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Nisi scelerisque</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Elit eget gravida</span>
                            </li>
                            <li className="flex align-items-center my-3">
                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                <span>Viverra vitae congue eu</span>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <Button className="w-full mt-2" label="Buy Now" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-bold text-5xl mb-4 text-center">Pricing</div>
    <p className="text-700 text-xl mt-0 mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
    <div className="flex align-items-center justify-content-center mb-6">
        <ul className="surface-card p-2 m-0 list-none flex column-gap-2 overflow-x-auto select-none shadow-2 border-1 surface-border" style={{ borderRadius: '35px' }}>
            <li>
                <Button label="Monthly" className={'p-link cursor-pointer px-4 py-3 font-medium flex align-items-center transition-color transition-duration-150 ' + (selectedInterval === 'month' ? 'bg-primary' : 'text-600 hover:surface-hover')} onClick={() => setSelectedInterval('month')} style={{ borderRadius: '30px' }} />
            </li>
            <li>
                <Button label="Yearly" className={'p-link cursor-pointer px-4 py-3 font-medium flex align-items-center transition-colors transition-duration-150 ' + (selectedInterval === 'year' ? 'bg-primary' : 'text-600 hover:surface-hover')} style={{ borderRadius: '30px' }} onClick={() => setSelectedInterval('year')} />
            </li>
        </ul>
    </div>
    <div className="flex flex-column lg:flex-row gap-4 xl:px-8 xl:mx-8">
        <div className="flex flex-column gap-4 flex-1">
            <React.Fragment>
                {plans.map((plan, index) => {
                    return (
                        <div key={index} onClick={() => setSelectedPlan(plan)} className={'shadow-2 surface-card p-4 cursor-pointer border-round-lg border-2 border-transparent text-900 hover:surface-hover transition-colors transition-duration-150 ' + (selectedPlan.name === plan.name ? 'border-primary' : '')}>
                            <div className="flex flex-column lg:flex-row align-items-start">
                                <div className="mr-3">
                                    <span className="inline-flex justify-content-center border-circle align-items-center bg-indigo-100 w-3rem h-3rem bg-primary">
                                        <i className={'text-2xl' + ' ' + plan.icon}></i>
                                    </span>
                                </div>
                                <div>
                                    <div className="text-xl mb-1 font-bold">{plan.name}</div>
                                    <p className="mt-0 mb-4 font-light text-sm">Magna fermentum iaculis</p>

                                    {selectedInterval === 'month' ? (
                                        <p className="m-0 font-light line-height-3">
                                            Nunc consequat interdum varius sit. <span className="font-medium">\${plan.price} | </span>
                                            Save $67 on Annual Plan
                                        </p>
                                    ) : null}
                                    {selectedInterval === 'year' ? (
                                        <p className="m-0 font-light line-height-3">
                                            Nunc consequat interdum varius sit. <span className="font-medium">\${plan.price * 12 - 67} | </span>
                                            Save $67 on Annual Plan
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        </div>
        <div className="flex-1">
            <div className="flex flex-column shadow-2 h-full border-round-lg overflow-hidden">
                <div className="bg-primary p-5">
                    <div className="flex justify-content-between flex-wrap gap-3 mb-4 align-items-center">
                        <div className="text-4xl font-bold">{selectedPlan.name}</div>
                        <div className="surface-0 py-1 border-round-lg flex justify-content-center align-items-center w-11rem bg-primary-reverse">
                            <span className="font-bold text-xl">{selectedInterval == 'year' ? currency + (selectedPlan.price * 12 - 67) : currency + selectedPlan.price}</span>
                            <span className="font-medium ml-2">per {selectedInterval}</span>
                        </div>
                    </div>
                    <p className="m-0 line-height-3">Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.</p>
                </div>
                <div className="flex-1 border-round-lg border-noround-top surface-card p-5 flex flex-column">
                    {selectedPlan.description.map((desc, index) => {
                        return (
                            <div key={index} className="flex-1 mb-3">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center py-3">
                                        <i className={'text-primary mr-3' + ' ' + desc.icon}></i>
                                        <span className="text-700">{desc.name}</span>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                    <Button label="Buy Now"></Button>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<section className="surface-50 relative flex flex-column overflow-hidden justify-content-center align-items-center gap-6 px-4 py-8 md:px-6 lg:px-8">
    <header className="flex align-items-center justify-content-center flex-column gap-2">
        <h1 className="m-0 font-semibold text-lg line-height-3 text-primary-500">PRICING</h1>
        <h2 className="m-0 font-bold text-4xl line-height-3 text-900">Find your perfect plan</h2>
        <p className="text-xl line-height-3 text-700 mt-0 mb-0">Fringilla ut morbi tincidunt augue interdum velit euismod. Non arcu risus quis varius quam.</p>
        <div className="flex gap-2 align-items-center mt-4">
            <InputSwitch className="flex" checked={checked} onChange={(e) => setChecked(e.value)}></InputSwitch>
            <label for="#switchTiers" className="font-medium text-base line-height-3 text-900">
                Switch to Annual Plans
            </label>
        </div>
    </header>
    <div className="flex flex-column lg:flex-row z-1 justify-content-center gap-5">
        <article className="flex flex-column gap-4 p-4 surface-0 border-round-lg shadow-2">
            <div className="flex justify-content-between align-items-center border-bottom-1 surface-border pb-4 gap-5">
                <div className="flex flex-column gap-2">
                    <h3 className="m-0 font-semibold text-xl text-900">Started Plan</h3>
                    <p className="mt-2 mb-0 text-base text-600">Scelerisque viverra mauris.</p>
                </div>
                <div className="flex align-items-center gap-2">
                    <span className="font-semibold text-4xl text-900">
                        <span className="text-xl">$</span>10
                    </span>{' '}
                    <span className="text-base text-600">per month</span>
                </div>
            </div>
            <div className="flex flex-column gap-3 border-bottom-1 surface-border pb-4">
                <h3 className="m-0 mb-2 font-semibold text-base text-900">Started Plan Includes:</h3>
                <div className="flex flex-column sm:flex-row w-full justify-content-between gap-4">
                    <ul className="list-none mt-2 mb-0 p-0">
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Proin fermentum leo
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Ullamcorper morbi tincidunt
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Adipiscing enim eu turpis
                            </p>
                        </li>
                        <li>
                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Velit ut tortor pretium
                            </p>
                        </li>
                    </ul>
                    <ul className="list-none mt-0 mb-0 sm:mt-2 p-0">
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Faucibus vitae aliquet nec
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Tristique senectus et netus
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Elit sed vulputate mi sit
                            </p>
                        </li>
                        <li>
                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Et netus et malesuada
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button label="Get Started" className="w-full"></Button>
            </div>
        </article>
        <article className="flex flex-column gap-4 p-4 surface-0 border-round-lg shadow-2">
            <div className="flex justify-content-between align-items-center border-bottom-1 surface-border pb-4 gap-5">
                <div className="flex flex-column gap-2">
                    <h3 className="m-0 font-semibold text-xl text-900">Professional Plan</h3>
                    <p className="mt-2 mb-0 text-base text-600">Eget mauris pharetra et ultrices.</p>
                </div>
                <div className="flex align-items-center gap-2">
                    <span className="font-semibold text-4xl text-900">
                        <span className="text-xl">$</span>123
                    </span>{' '}
                    <span className="text-base text-600">per month</span>
                </div>
            </div>
            <div className="flex flex-column gap-3 border-bottom-1 surface-border pb-4">
                <h3 className="m-0 mb-2 font-semibold text-base text-900">Professional Plan Includes:</h3>
                <div className="flex flex-column sm:flex-row w-full justify-content-between gap-4">
                    <ul className="list-none mt-2 mb-0 p-0">
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Proin fermentum leo
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Ullamcorper morbi tincidunt
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Adipiscing enim eu turpis
                            </p>
                        </li>
                        <li>
                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Velit ut tortor pretium
                            </p>
                        </li>
                    </ul>
                    <ul className="list-none mt-0 mb-0 sm:mt-2 p-0">
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Faucibus vitae aliquet nec
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Tristique senectus et netus
                            </p>
                        </li>
                        <li>
                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Elit sed vulputate mi sit
                            </p>
                        </li>
                        <li>
                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i> Et netus et malesuada
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button label="Get Started" className="w-full"></Button>
            </div>
        </article>
    </div>
    <div className="absolute top-50 w-screen" style={{ transform: 'rotate(-6deg)' }}>
        <div className="h-4rem bg-primary-500"></div>
        <div className="h-4rem bg-primary-300"></div>
        <div className="h-4rem bg-primary-100"></div>
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Pricing Sections</div>
            <BlockViewer header="3 Tiers" code={block1} free>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-6xl mb-4 text-center">
                        Pricing Plans
                    </div>
                    <div className="text-700 text-xl mb-6 text-center line-height-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Velit numquam eligendi quos.
                    </div>

                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div
                                    className="shadow-2 p-3 h-full flex flex-column surface-card"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <div className="text-900 font-medium text-xl mb-2">
                                        Basic
                                    </div>
                                    <div className="text-600">
                                        Plan description
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">
                                            $9
                                        </span>
                                        <span className="ml-2 font-medium text-600">
                                            per month
                                        </span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Arcu vitae elementum
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Dui faucibus in ornare
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Morbi tincidunt augue
                                            </span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                                    <Button
                                        label="Buy Now"
                                        className="p-3 w-full mt-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div
                                    className="shadow-2 p-3 h-full flex flex-column surface-card"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <div className="text-900 font-medium text-xl mb-2">
                                        Premium
                                    </div>
                                    <div className="text-600">
                                        Plan description
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">
                                            $29
                                        </span>
                                        <span className="ml-2 font-medium text-600">
                                            per month
                                        </span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Arcu vitae elementum
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Dui faucibus in ornare
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Morbi tincidunt augue
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Duis ultricies lacus sed
                                            </span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button
                                        label="Buy Now"
                                        className="p-3 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div
                                    className="shadow-2 p-3 flex flex-column surface-card"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <div className="text-900 font-medium text-xl mb-2">
                                        Enterprise
                                    </div>
                                    <div className="text-600">
                                        Plan description
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">
                                            $49
                                        </span>
                                        <span className="ml-2 font-medium text-600">
                                            per month
                                        </span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Arcu vitae elementum
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Dui faucibus in ornare
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Morbi tincidunt augue
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Duis ultricies lacus sed
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Imperdiet proin
                                            </span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span className="text-900">
                                                Nisi scelerisque
                                            </span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button
                                        label="Buy Now"
                                        className="p-3 w-full p-button-outlined"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Multi Colored" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-blue-600 text-2xl mb-4 text-center">
                        Save up to 25% today
                    </div>
                    <div className="text-900 font-bold text-6xl text-center mb-4">
                        Pricing Plans
                    </div>
                    <div className="flex align-items-center justify-content-center text-900">
                        <span className="font-semibold mr-3">Monthly</span>
                        <InputSwitch
                            checked={value}
                            onChange={(e) => setValue(e.value)}
                        />
                        <span className="ml-3">Yearly</span>
                    </div>

                    <div className="flex flex-column md:flex-row mt-6">
                        <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
                            <div
                                className="bg-bluegray-100 text-center p-3"
                                style={{ borderRadius: "6px 6px 0 0" }}
                            >
                                <div className="text-2xl font-bold text-bluegray-900 mb-3">
                                    Basic
                                </div>
                                <div className="flex align-items-center justify-content-center">
                                    <span className="font-bold text-bluegray-900 text-5xl mr-2">
                                        10$
                                    </span>
                                    <span className="text-2xl text-bluegray-400">
                                        {" "}
                                        / month
                                    </span>
                                </div>
                            </div>
                            <div
                                className="bg-bluegray-50 p-4 flex flex-column flex-grow-1"
                                style={{
                                    boxShadow:
                                        "inset 0px 2px 8px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "0 0 6px 6px",
                                }}
                            >
                                <div className="text-bluegray-500 font-bold line-height-3 mb-4">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </div>
                                <ul className="list-none p-0 m-0 mb-5 text-bluegray-600">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                </ul>

                                <Button
                                    className="p-button-secondary w-full mt-auto"
                                    label="Try Free"
                                />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
                            <div
                                className="bg-bluegray-800 text-center p-3 border-3 border-green-500 border-bottom-none"
                                style={{ borderRadius: "6px 6px 0 0" }}
                            >
                                <div
                                    className="bg-green-500 text-0 font-bold text-sm inline-block p-2 mb-3"
                                    style={{ borderRadius: "20px" }}
                                >
                                    MOST POPULAR
                                </div>
                                <div className="text-2xl font-bold text-white mb-3">
                                    Premium
                                </div>
                                <div className="flex align-items-center justify-content-center">
                                    <span className="font-bold text-white text-5xl mr-2">
                                        20$
                                    </span>
                                    <span className="text-2xl text-bluegray-400">
                                        {" "}
                                        / month
                                    </span>
                                </div>
                            </div>
                            <div
                                className="bg-bluegray-900 p-4 flex flex-column flex-grow-1 border-3 border-green-500 border-top-none"
                                style={{
                                    boxShadow:
                                        "inset 0px 2px 8px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "0 0 6px 6px",
                                }}
                            >
                                <div className="text-bluegray-400 font-bold line-height-3 mb-4">
                                    Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </div>
                                <ul className="list-none p-0 m-0 mb-5 text-bluegray-100">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Morbi tincidunt augue</span>
                                    </li>
                                    <li className="flex align-items-center">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Duis ultricies lacus sed</span>
                                    </li>
                                </ul>

                                <Button
                                    className="p-button-success w-full mt-auto"
                                    label="Buy Now"
                                />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-0 flex flex-column flex-grow-1">
                            <div
                                className="bg-blue-800 text-center p-3"
                                style={{ borderRadius: "6px 6px 0 0" }}
                            >
                                <div className="text-2xl font-bold text-white mb-3">
                                    Enterprise
                                </div>
                                <div className="flex align-items-center justify-content-center">
                                    <span className="font-bold text-white text-5xl mr-2">
                                        30$
                                    </span>
                                    <span className="text-2xl text-blue-400">
                                        {" "}
                                        / month
                                    </span>
                                </div>
                            </div>
                            <div
                                className="bg-blue-900 p-4 flex flex-column flex-grow-1"
                                style={{
                                    boxShadow:
                                        "inset 0px 2px 8px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "0 0 6px 6px",
                                }}
                            >
                                <div className="text-blue-400 font-bold line-height-3 mb-4">
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit.
                                </div>
                                <ul className="list-none p-0 m-0 mb-5 text-blue-100">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Morbi tincidunt augue</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Duis ultricies lacus sed</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-circle-on mr-2 text-sm"></i>
                                        <span>Imperdiet proin</span>
                                    </li>
                                </ul>

                                <Button
                                    className="p-button-outlined w-full mt-auto"
                                    label="Contact Us"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Comparison Table" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table
                            className="w-full white-space-nowrap"
                            style={{
                                borderCollapse: "collapse",
                                borderSpacing: "0",
                            }}
                        >
                            <thead>
                                <tr>
                                    <td className="surface-100 p-3">
                                        <div className="text-3xl text-900 mb-2">
                                            Pricing
                                        </div>
                                        <span className="text-600 line-height-3">
                                            Fringilla est ullamcorper eget nulla
                                            facilisi etiam
                                        </span>
                                    </td>
                                    <td className="surface-100 p-3 text-center">
                                        <div className="text-900 text-xl font-medium mb-3">
                                            Basic
                                        </div>
                                        <div className="text-600 mb-3">
                                            <span className="text-3xl text-900">
                                                $10
                                            </span>{" "}
                                            /month
                                        </div>
                                        <Button
                                            className="p-button-rounded"
                                            label="Free Trial"
                                        />
                                    </td>
                                    <td className="surface-100 p-3 text-center">
                                        <div className="text-900 text-xl font-medium mb-3">
                                            Premium
                                        </div>
                                        <div className="text-600 mb-3">
                                            <span className="text-3xl text-900">
                                                $20
                                            </span>{" "}
                                            /month
                                        </div>
                                        <Button
                                            className="p-button-rounded"
                                            label="Buy Now"
                                        />
                                    </td>
                                    <td className="surface-100 p-3 text-center">
                                        <div className="text-900 text-xl font-medium mb-3">
                                            Enterprise
                                        </div>
                                        <div className="text-600 mb-3">
                                            <span className="text-3xl text-900">
                                                $30
                                            </span>{" "}
                                            /month
                                        </div>
                                        <Button
                                            className="p-button-rounded p-button-outlined"
                                            label="Contact Us"
                                        />
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Arcu purus
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Posuere felis
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Curabitur mollis
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Vitae odio
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Orci, mi
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-500 pi pi-times"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Tincidunt vulputate
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-500 pi pi-times"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-500 pi pi-times"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Quis felis
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-500 pi pi-times"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-500 pi pi-times"></i>
                                    </td>
                                    <td className="text-center p-medium border-bottom-1 border-200">
                                        <i className="text-green-500 pi pi-check"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                                        Dignissim vivamus
                                    </td>
                                    <td className="text-center text-600 border-bottom-1 border-200">
                                        Up to{" "}
                                        <span className="text-900">5</span>{" "}
                                        files
                                    </td>
                                    <td className="text-center text-600 border-bottom-1 border-200">
                                        Up to{" "}
                                        <span className="text-900">10</span>{" "}
                                        files
                                    </td>
                                    <td className="text-center text-900 border-bottom-1 border-200">
                                        Unlimited
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Payment Options" code={block4}>
                <div
                    className="surface-ground px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover"
                    style={{
                        background:
                            'url("/demo/images/blocks/pricing/pricing-4.svg")',
                    }}
                >
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6 lg:pr-8">
                            <div className="text-900 font-bold text-6xl mb-4">
                                Pricing
                            </div>
                            <div className="text-700 text-xl line-height-3 mb-4 lg:mb-0">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Velitnumquam eligendi quos.
                            </div>
                        </div>
                        <div className="w-full md:w-6 lg:w-3">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Arcu vitae elementum</span>
                                </li>
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Dui faucibus in ornare</span>
                                </li>
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Morbi tincidunt augue</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6 lg:w-3 md:pl-5">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Duis ultricies lacus sed</span>
                                </li>
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Imperdiet proin</span>
                                </li>
                                <li className="flex align-items-center my-4">
                                    <i className="pi pi-check text-green-500 mr-3"></i>
                                    <span>Nisi scelerisque</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-5 -mx-3">
                        <div className="w-full lg:w-4 p-3">
                            <div
                                className="shadow-2 p-3 h-full bg-primary"
                                style={{ borderRadius: "6px" }}
                            >
                                <div className="font-medium text-xl mb-5">
                                    Free Forever
                                </div>
                                <div className="font-bold text-5xl mb-5">
                                    Free
                                </div>
                                <button
                                    type="button"
                                    className="p-ripple font-medium appearance-none border-none p-2 surface-0 text-primary hover:surface-100 p-component lg:w-full border-rounded cursor-pointer transition-colors transition-duration-150"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <span>Create Account</span>
                                    <Ripple />
                                </button>
                                <p className="text-sm line-height-3 mb-0 mt-5">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-4 p-3">
                            <div
                                className="shadow-2 p-3 h-full surface-card"
                                style={{ borderRadius: "6px" }}
                            >
                                <div className="font-medium text-xl mb-5 text-900 ">
                                    Monthly
                                </div>
                                <div className="flex align-items-center mb-5">
                                    <span className="text-900 font-bold text-5xl">
                                        $29
                                    </span>
                                    <span className="font-medium text-500 ml-2">
                                        per month
                                    </span>
                                </div>
                                <Button
                                    label="Proceed Monthly"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    className="lg:w-full font-medium p-2"
                                    style={{ borderRadius: "6px" }}
                                />
                                <p className="text-sm line-height-3 mb-0 mt-5">
                                    Nec ultrices dui sapien eget. Amet nulla
                                    facilisi morbi tempus.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-4 p-3">
                            <div
                                className="shadow-2 p-3 h-full flex flex-column surface-card"
                                style={{ borderRadius: "6px" }}
                            >
                                <div className="flex flex-row justify-content-between mb-5 align-items-center">
                                    <div className="text-900 text-xl font-medium">
                                        Yearly
                                    </div>
                                    <span className="bg-orange-100 500 text-orange-500 font-semibold px-2 py-1 border-round">
                                        🎉 Save 20%
                                    </span>
                                </div>
                                <div className="flex align-items-center mb-5">
                                    <span className="text-900 font-bold text-5xl">
                                        $275
                                    </span>
                                    <span className="font-medium text-500 ml-2">
                                        per year
                                    </span>
                                </div>
                                <Button
                                    label="Proceed Yearly"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    className="lg:w-full font-medium p-2"
                                    style={{ borderRadius: "6px" }}
                                />
                                <p className="text-sm line-height-3 mb-0 mt-5">
                                    Placerat in egestas erat imperdiet sed
                                    euismod nisi porta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Single Tier With Features" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 p-1 mb-3 lg:mb-5">
                            <div className="text-900 font-bold text-6xl mb-4">
                                Pricing
                            </div>
                            <div className="text-700 text-xl line-height-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Velit numquam eligendi quos.
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 md:mb-3">
                            <div className="h-full">
                                <div
                                    className="flex flex-column justify-content-center h-full"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <div className="flex flex-row p-3 mb-3">
                                        <span
                                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                                            style={{
                                                minWidth: "2.25rem",
                                                height: "2.25rem",
                                            }}
                                        >
                                            <i className="pi pi-users"></i>
                                        </span>
                                        <div className="ml-3">
                                            <div className="text-900 font-medium text-xl mb-2">
                                                Unlimited Users
                                            </div>
                                            <span className="text-600 line-height-3">
                                                Auctor augue mauris augue neque
                                                gravida in fermentum et
                                                sollicitudin. Ornare massa eget
                                                egestas purus viverra accumsan.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row p-3 mb-3">
                                        <span
                                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                                            style={{
                                                minWidth: "2.25rem",
                                                height: "2.25rem",
                                            }}
                                        >
                                            <i className="pi pi-comments"></i>
                                        </span>
                                        <div className="ml-3">
                                            <div className="text-900 font-medium text-xl mb-2">
                                                Unlimited Inbox
                                            </div>
                                            <span className="text-600 line-height-3">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Quo perspiciatis error possimus
                                                ipsam omnis libero dolorum.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row p-3">
                                        <span
                                            className="inline-flex align-items-center justify-content-center text-blue-900 bg-blue-100 border-circle"
                                            style={{
                                                minWidth: "2.25rem",
                                                height: "2.25rem",
                                            }}
                                        >
                                            <i className="pi pi-moon"></i>
                                        </span>
                                        <div className="ml-3">
                                            <div className="text-900 font-medium text-xl mb-2">
                                                Dark Mode
                                            </div>
                                            <span className="text-600 line-height-3">
                                                Quidem delectus ad est illo
                                                ipsam fugiat voluptas tempora.
                                                At a veritatis obcaecati ipsam
                                                id eius aut at error modi.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6">
                            <div className="h-full pl-3">
                                <div
                                    className="surface-card shadow-2 p-5"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <div className="flex flex-column justify-content-between md:flex-row">
                                        <div className="flex-grow-1 lg:w-min">
                                            <div className="text-900 font-bold text-2xl mb-2">
                                                Single Plan
                                            </div>
                                            <div className="text-500 text-xl">
                                                Id diam vel quam elementum.
                                            </div>
                                        </div>
                                        <div className="flex align-items-center w-auto lg:w-9rem lg:justify-content-end mt-3 lg:mt-0">
                                            <span className="font-bold text-4xl text-900">
                                                $9
                                            </span>
                                            <span className="text-700 text-xl ml-2 line-height-3">
                                                per month
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="my-5 mx-0 border-top-1 border-none surface-border" />
                                    <div className="text-900 font-medium text-xl pb-1">
                                        Features
                                    </div>
                                    <div className="flex flex-column justify-space-between md:flex-row">
                                        <ul className="list-none p-0 m-0 flex-grow-1">
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>
                                                    Arcu vitae elementum
                                                </span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>
                                                    Dui faucibus in ornare
                                                </span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>
                                                    Morbi tincidunt augue
                                                </span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>
                                                    Duis ultricies lacus sed
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="list-none p-0 md:pl-2 m-0 flex-grow-1">
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>Imperdiet proin</span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>Nisi scelerisque</span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>Elit eget gravida</span>
                                            </li>
                                            <li className="flex align-items-center my-3">
                                                <i className="pi pi-check-circle text-green-500 mr-3"></i>
                                                <span>
                                                    Viverra vitae congue eu
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                                    <Button
                                        className="w-full mt-2"
                                        label="Buy Now"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3-Tiers with Selection" code={block6}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-5xl mb-4 text-center">
                        Pricing
                    </div>
                    <p className="text-700 text-xl mt-0 mb-6 text-center line-height-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Velit numquam eligendi quos.
                    </p>
                    <div className="flex align-items-center justify-content-center mb-6">
                        <ul
                            className="surface-card p-2 m-0 list-none flex column-gap-2 overflow-x-auto select-none shadow-2 border-1 surface-border"
                            style={{ borderRadius: "35px" }}
                        >
                            <li>
                                <Button
                                    label="Monthly"
                                    className={
                                        "p-link cursor-pointer px-4 py-3 font-medium flex align-items-center transition-color transition-duration-150 " +
                                        (selectedInterval === "month"
                                            ? "bg-primary"
                                            : "text-600 hover:surface-hover")
                                    }
                                    onClick={() => setSelectedInterval("month")}
                                    style={{ borderRadius: "30px" }}
                                />
                            </li>
                            <li>
                                <Button
                                    label="Yearly"
                                    className={
                                        "p-link cursor-pointer px-4 py-3 font-medium flex align-items-center transition-colors transition-duration-150 " +
                                        (selectedInterval === "year"
                                            ? "bg-primary"
                                            : "text-600 hover:surface-hover")
                                    }
                                    style={{ borderRadius: "30px" }}
                                    onClick={() => setSelectedInterval("year")}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-column lg:flex-row gap-4 xl:px-8 xl:mx-8">
                        <div className="flex flex-column gap-4 flex-1">
                            <React.Fragment>
                                {plans.map((plan, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                setSelectedPlan(plan)
                                            }
                                            className={
                                                "shadow-2 surface-card p-4 cursor-pointer border-round-lg border-2 border-transparent text-900 hover:surface-hover transition-colors transition-duration-150 " +
                                                (selectedPlan.name === plan.name
                                                    ? "border-primary"
                                                    : "")
                                            }
                                        >
                                            <div className="flex flex-column lg:flex-row align-items-start">
                                                <div className="mr-3">
                                                    <span className="inline-flex justify-content-center border-circle align-items-center bg-indigo-100 w-3rem h-3rem bg-primary">
                                                        <i
                                                            className={
                                                                "text-2xl" +
                                                                " " +
                                                                plan.icon
                                                            }
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-xl mb-1 font-bold">
                                                        {plan.name}
                                                    </div>
                                                    <p className="mt-0 mb-4 font-light text-sm">
                                                        Magna fermentum iaculis
                                                    </p>

                                                    {selectedInterval ===
                                                        "month" ? (
                                                        <p className="m-0 font-light line-height-3">
                                                            Nunc consequat
                                                            interdum varius sit.{" "}
                                                            <span className="font-medium">
                                                                ${plan.price} |{" "}
                                                            </span>
                                                            Save $67 on Annual
                                                            Plan
                                                        </p>
                                                    ) : null}
                                                    {selectedInterval ===
                                                        "year" ? (
                                                        <p className="m-0 font-light line-height-3">
                                                            Nunc consequat
                                                            interdum varius sit.{" "}
                                                            <span className="font-medium">
                                                                $
                                                                {plan.price *
                                                                    12 -
                                                                    67}{" "}
                                                                |{" "}
                                                            </span>
                                                            Save $67 on Annual
                                                            Plan
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </React.Fragment>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-column shadow-2 h-full border-round-lg overflow-hidden">
                                <div className="bg-primary p-5">
                                    <div className="flex justify-content-between flex-wrap gap-3 mb-4 align-items-center">
                                        <div className="text-4xl font-bold">
                                            {selectedPlan.name}
                                        </div>
                                        <div className="surface-0 py-1 border-round-lg flex justify-content-center align-items-center w-11rem bg-primary-reverse">
                                            <span className="font-bold text-xl">
                                                {selectedInterval == "year"
                                                    ? currency +
                                                    (selectedPlan.price * 12 -
                                                        67)
                                                    : currency +
                                                    selectedPlan.price}
                                            </span>
                                            <span className="font-medium ml-2">
                                                per {selectedInterval}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0 line-height-3">
                                        Pharetra magna ac placerat vestibulum
                                        lectus mauris ultrices. Nec dui nunc
                                        mattis enim ut tellus elementum sagittis
                                        vitae.
                                    </p>
                                </div>
                                <div className="flex-1 border-round-lg border-noround-top surface-card p-5 flex flex-column">
                                    {selectedPlan.description.map(
                                        (desc, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex-1 mb-3"
                                                >
                                                    <ul className="list-none p-0 m-0">
                                                        <li className="flex align-items-center py-3">
                                                            <i
                                                                className={
                                                                    "text-primary mr-3" +
                                                                    " " +
                                                                    desc.icon
                                                                }
                                                            ></i>
                                                            <span className="text-700">
                                                                {desc.name}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            );
                                        }
                                    )}
                                    <Button label="Buy Now"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2 Tiers" code={block7} new>
                <section className="surface-50 relative flex flex-column overflow-hidden justify-content-center align-items-center gap-6 px-4 py-8 md:px-6 lg:px-8">
                    <header className="flex align-items-center justify-content-center flex-column gap-2">
                        <h1 className="m-0 font-semibold text-lg line-height-3 text-primary-500">
                            PRICING
                        </h1>
                        <h2 className="m-0 font-bold text-4xl line-height-3 text-900">
                            Find your perfect plan
                        </h2>
                        <p className="text-xl line-height-3 text-700 mt-0 mb-0">
                            Fringilla ut morbi tincidunt augue interdum velit
                            euismod. Non arcu risus quis varius quam.
                        </p>
                        <div className="flex gap-2 align-items-center mt-4">
                            <InputSwitch
                                className="flex"
                                checked={checked}
                                onChange={(e) => setChecked(e.value)}
                            ></InputSwitch>
                            <label
                                for="#switchTiers"
                                className="font-medium text-base line-height-3 text-900"
                            >
                                Switch to Annual Plans
                            </label>
                        </div>
                    </header>

                    <div className="flex flex-column lg:flex-row z-1 justify-content-center gap-5">
                        <article className="flex flex-column gap-4 p-4 surface-0 border-round-lg shadow-2">
                            <div className="flex justify-content-between align-items-center border-bottom-1 surface-border pb-4 gap-5">
                                <div className="flex flex-column gap-2">
                                    <h3 className="m-0 font-semibold text-xl text-900">
                                        Started Plan
                                    </h3>
                                    <p className="mt-2 mb-0 text-base text-600">
                                        Scelerisque viverra mauris.
                                    </p>
                                </div>
                                <div className="flex align-items-center gap-2">
                                    <span className="font-semibold text-4xl text-900">
                                        <span className="text-xl">$</span>10
                                    </span>{" "}
                                    <span className="text-base text-600">
                                        per month
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-column gap-3 border-bottom-1 surface-border pb-4">
                                <h3 className="m-0 mb-2 font-semibold text-base text-900">
                                    Started Plan Includes:
                                </h3>
                                <div className="flex flex-column sm:flex-row w-full justify-content-between gap-4">
                                    <ul className="list-none mt-2 mb-0 p-0">
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Proin fermentum leo
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Ullamcorper morbi tincidunt
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Adipiscing enim eu turpis
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Velit ut tortor pretium
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="list-none mt-0 mb-0 sm:mt-2 p-0">
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Faucibus vitae aliquet nec
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Tristique senectus et netus
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Elit sed vulputate mi sit
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Et netus et malesuada
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Button
                                    label="Get Started"
                                    className="w-full"
                                ></Button>
                            </div>
                        </article>
                        <article className="flex flex-column gap-4 p-4 surface-0 border-round-lg shadow-2">
                            <div className="flex justify-content-between align-items-center border-bottom-1 surface-border pb-4 gap-5">
                                <div className="flex flex-column gap-2">
                                    <h3 className="m-0 font-semibold text-xl text-900">
                                        Professional Plan
                                    </h3>
                                    <p className="mt-2 mb-0 text-base text-600">
                                        Eget mauris pharetra et ultrices.
                                    </p>
                                </div>
                                <div className="flex align-items-center gap-2">
                                    <span className="font-semibold text-4xl text-900">
                                        <span className="text-xl">$</span>123
                                    </span>{" "}
                                    <span className="text-base text-600">
                                        per month
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-column gap-3 border-bottom-1 surface-border pb-4">
                                <h3 className="m-0 mb-2 font-semibold text-base text-900">
                                    Professional Plan Includes:
                                </h3>
                                <div className="flex flex-column sm:flex-row w-full justify-content-between gap-4">
                                    <ul className="list-none mt-2 mb-0 p-0">
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Proin fermentum leo
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Ullamcorper morbi tincidunt
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Adipiscing enim eu turpis
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Velit ut tortor pretium
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="list-none mt-0 mb-0 sm:mt-2 p-0">
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Faucibus vitae aliquet nec
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Tristique senectus et netus
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-4 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Elit sed vulputate mi sit
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0 mt-0 text-600 flex align-items-center">
                                                <i className="pi pi-check-circle text-green-500 mr-2"></i>{" "}
                                                Et netus et malesuada
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Button
                                    label="Get Started"
                                    className="w-full"
                                ></Button>
                            </div>
                        </article>
                    </div>
                    <div
                        className="absolute top-50 w-screen"
                        style={{ transform: "rotate(-6deg)" }}
                    >
                        <div className="h-4rem bg-primary-500"></div>
                        <div className="h-4rem bg-primary-300"></div>
                        <div className="h-4rem bg-primary-100"></div>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default Pricing;
