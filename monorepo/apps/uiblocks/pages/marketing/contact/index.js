import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import BlockViewer from "../../../demo/components/BlockViewer";

const Contact = () => {

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <div className="p-fluid pr-0 md:pr-6">
                <div className="field">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <InputText id="name" className="py-3 px-2 text-lg" />
                </div>
                <div className="field">
                    <label htmlFor="email1" className="font-medium">Email</label>
                    <InputText id="email1" className="py-3 px-2 text-lg" />
                </div>
                <div className="field">
                    <label htmlFor="company" className="font-medium">Company</label>
                    <InputText id="company" className="py-3 px-2 text-lg" />
                </div>
                <div className="field">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <InputTextarea id="message" rows={6} autoResize className="py-3 px-2 text-lg" />
                </div>
                <Button label="Send Message" icon="pi pi-send" className="w-auto" />
            </div>
        </div>
        <div className="col-12 md:col-6 bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('/demo/images/blocks/contact/contact-1.png')" }}>
            <div className="text-900 text-2xl font-medium mb-6">Contact Us</div>
            <div className="text-700 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <a className="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer">
                <span className="mr-3">View Address on Google Maps</span>
                <i className="pi pi-arrow-right"></i>
            </a>
            <ul className="list-none p-0 m-0 mt-6 text-700">
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-phone mr-2"></i>
                    <span>+123456789</span>
                </li>
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-twitter mr-2"></i>
                    <span>@prime_react</span>
                </li>
                <li className="flex align-items-center">
                    <i className="pi pi-inbox mr-2"></i>
                    <span>contact@primetek.com.tr</span>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section">
    <div className="grid grid-nogutter">
        <div className="col-12 md:col-6 bg-no-repeat bg-cover p-8" style={{ backgroundImage: "url('/demo/images/blocks/contact/contact-2.jpg')" }}>
            <div className="text-white text-2xl font-medium mb-6">Contact Us</div>
            <div className="text-gray-300 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <a className="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                <span className="mr-3">View Address on Google Maps</span>
                <i className="pi pi-arrow-right"></i>
            </a>
            <ul className="list-none p-0 m-0 mt-6 text-white">
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-phone mr-2"></i>
                    <span>+123456789</span>
                </li>
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-twitter mr-2"></i>
                    <span>@prime_react</span>
                </li>
                <li className="flex align-items-center">
                    <i className="pi pi-inbox mr-2"></i>
                    <span>contact@primetek.com.tr</span>
                </li>
            </ul>
        </div>
        <div className="col-12 md:col-6">
            <div className="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                <div className="field col-12 lg:col-6 mb-4">
                    <InputText id="firstname" type="text" className="py-3 px-2 text-lg" placeholder="First Name" />
                </div>
                <div className="field col-12 lg:col-6 mb-4">
                    <InputText id="lastname" type="text" className="py-3 px-2 text-lg" placeholder="Last Name" />
                </div>
                <div className="field col-12 mb-4">
                    <InputText id="email2" type="text" className="py-3 px-2 text-lg" placeholder="Email" />
                </div>
                <div className="field col-12 mb-4">
                    <InputText id="phone" type="text" className="py-3 px-2 text-lg" placeholder="Phone" />
                </div>
                <div className="field col-12 mb-4">
                    <InputTextarea id="message" rows={3} autoResize className="py-3 px-2 text-lg" placeholder="Message" />
                </div>
                <div className="col-12 text-right">
                    <Button type="button" label="Submit" icon="pi pi-envelope" className="px-5 py-3 w-auto" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div>
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid">
            <div className="col-12 lg:col-6">
                <div className="text-900 font-medium mb-4">Contact Us</div>
                <div className="text-900 text-2xl font-bold mb-4">GET IN TOUCH</div>
                <p className="text-700 line-height-3 pr-0 lg:pr-5">Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.</p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-start">
                    <div>
                        <span className="flex align-items-center justify-content-center surface-100 border-round mr-3" style={{ height: '3rem', width: '3rem' }}>
                            <i className="pi pi-map-marker text-900 text-4xl"></i>
                        </span>
                    </div>
                    <div>
                        <span className="text-xl text-900 mb-2 font-medium">Address</span>
                        <p className="text-700 line-height-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</p>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-start">
                    <div>
                        <span className="flex align-items-center justify-content-center surface-100 border-round mr-3" style={{ height: '3rem', width: '3rem' }}>
                            <i className="pi pi-inbox text-900 text-4xl"></i>
                        </span>
                    </div>
                    <div>
                        <span className="text-xl text-900 mb-2 font-medium">Email</span>
                        <p className="text-700 line-height-3">info@company.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img alt="Image" src="/demo/images/blocks/contact/map.png" className="w-full" />
</div>
    `;

    return (
        <>
            <div className="block-category-title">Contact Sections</div>
            <BlockViewer header="2 Columns" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="p-fluid pr-0 md:pr-6">
                                <div className="field">
                                    <label htmlFor="name" className="font-medium">Name</label>
                                    <InputText id="name" className="py-3 px-2 text-lg" />
                                </div>
                                <div className="field">
                                    <label htmlFor="email1" className="font-medium">Email</label>
                                    <InputText id="email1" className="py-3 px-2 text-lg" />
                                </div>
                                <div className="field">
                                    <label htmlFor="company" className="font-medium">Company</label>
                                    <InputText id="company" className="py-3 px-2 text-lg" />
                                </div>
                                <div className="field">
                                    <label htmlFor="message" className="font-medium">Message</label>
                                    <InputTextarea id="message" rows={6} autoResize className="py-3 px-2 text-lg" />
                                </div>
                                <Button label="Send Message" icon="pi pi-send" className="w-auto" />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('/demo/images/blocks/contact/contact-1.png')" }}>
                            <div className="text-900 text-2xl font-medium mb-6">Contact Us</div>
                            <div className="text-700 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            <a className="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer">
                                <span className="mr-3">View Address on Google Maps</span>
                                <i className="pi pi-arrow-right"></i>
                            </a>
                            <ul className="list-none p-0 m-0 mt-6 text-700">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-phone mr-2"></i>
                                    <span>+123456789</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-twitter mr-2"></i>
                                    <span>@prime_react</span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-inbox mr-2"></i>
                                    <span>contact@primetek.com.tr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Map" code={block2}>
                <div className="surface-section">
                    <div className="grid grid-nogutter">
                        <div className="col-12 md:col-6 bg-no-repeat bg-cover p-8" style={{ backgroundImage: "url('/demo/images/blocks/contact/contact-2.jpg')" }}>
                            <div className="text-white text-2xl font-medium mb-6">Contact Us</div>
                            <div className="text-gray-300 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            <a className="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                                <span className="mr-3">View Address on Google Maps</span>
                                <i className="pi pi-arrow-right"></i>
                            </a>
                            <ul className="list-none p-0 m-0 mt-6 text-white">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-phone mr-2"></i>
                                    <span>+123456789</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-twitter mr-2"></i>
                                    <span>@prime_react</span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-inbox mr-2"></i>
                                    <span>contact@primetek.com.tr</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                                <div className="field col-12 lg:col-6 mb-4">
                                    <InputText id="firstname" type="text" className="py-3 px-2 text-lg" placeholder="First Name" />
                                </div>
                                <div className="field col-12 lg:col-6 mb-4">
                                    <InputText id="lastname" type="text" className="py-3 px-2 text-lg" placeholder="Last Name" />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputText id="email2" type="text" className="py-3 px-2 text-lg" placeholder="Email" />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputText id="phone" type="text" className="py-3 px-2 text-lg" placeholder="Phone" />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputTextarea id="message" rows={3} autoResize className="py-3 px-2 text-lg" placeholder="Message" />
                                </div>
                                <div className="col-12 text-right">
                                    <Button type="button" label="Submit" icon="pi pi-envelope" className="px-5 py-3 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>


            <BlockViewer header="2 Rows with Map" code={block3}>
                <div>
                    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                        <div className="grid">
                            <div className="col-12 lg:col-6">
                                <div className="text-900 font-medium mb-4">Contact Us</div>
                                <div className="text-900 text-2xl font-bold mb-4">GET IN TOUCH</div>
                                <p className="text-700 line-height-3 pr-0 lg:pr-5">Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.</p>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-start">
                                    <div>
                                        <span className="flex align-items-center justify-content-center surface-100 border-round mr-3" style={{ height: '3rem', width: '3rem' }}>
                                            <i className="pi pi-map-marker text-900 text-4xl"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-xl text-900 mb-2 font-medium">Address</span>
                                        <p className="text-700 line-height-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-start">
                                    <div>
                                        <span className="flex align-items-center justify-content-center surface-100 border-round mr-3" style={{ height: '3rem', width: '3rem' }}>
                                            <i className="pi pi-inbox text-900 text-4xl"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-xl text-900 mb-2 font-medium">Email</span>
                                        <p className="text-700 line-height-3">info@company.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img alt="Image" src="/demo/images/blocks/contact/map.png" className="w-full" />
                </div>
            </BlockViewer>
        </>
    )
}

export default Contact;
