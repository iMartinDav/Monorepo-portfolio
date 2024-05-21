import React, { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Ripple } from "primereact/ripple";
import BlockViewer from "../../../demo/components/BlockViewer";
import { InputText } from "primereact/inputtext";
const Cta = () => {
    const date = [
        new Date("Mon Mar 31 2021 00:00:00 GMT+0300 (GMT+03:00)"),
        new Date("Mon Apr 1 2021 00:00:00 GMT+0300 (GMT+03:00)"),
    ];
    const [date1, setDate1] = useState(date);
    const [date2, setDate2] = useState(date);

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column lg:flex-row align-items-center justify-content-between">
        <div className="text-center lg:text-left lg:pr-8">
            <div className="text-blue-600 font-medium mb-1 text-xl">TAKE THE NEXT STEP</div>
            <div className="text-900 font-bold text-6xl mb-5">Get Started with PrimeBlocks</div>

            <span className="inline-flex align-items-center bg-blue-50 px-3 py-2 mr-2 mb-2 lg:mb-0 border-1 border-blue-200" style={{ borderRadius: '50px' }}>
                <i className="pi pi-check text-blue-500 mr-2"></i>
                <span className="text-gray-700 font-medium">1 Month Free Trial</span>
            </span>
            <span className="inline-flex align-items-center bg-blue-50 px-3 py-2 border-1 border-blue-200" style={{ borderRadius: '50px' }}>
                <i className="pi pi-check text-blue-500 mr-2"></i>
                <span className="text-gray-700 font-medium">No Credit Card Required</span>
            </span>
        </div>
        <div className="mt-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
            <Button label="Get Started" className="px-5 py-3 mr-0 lg:mr-3 p-button-rounded font-bold mb-3 lg:mb-0 w-full lg:w-auto white-space-nowrap" />
            <Button label="Request a Demo" icon="pi pi-arrow-right" iconPos="right" className="px-5 py-3 p-button-outlined p-button-rounded font-bold w-full lg:w-auto white-space-nowrap" style={{ whiteSpace: 'nowrap' }} />
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-between align-items-center flex-wrap lg:flex-nowrap">
        <div className="pr-0 lg:pr-6 mb-5 lg:mb-0">
            <div className="font-bold text-white text-6xl font-bold mb-3">Enhanced User Experience</div>
            <div className="text-gray-300 line-height-3 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            <div className="flex flex-wrap lg:flex-nowrap">
                <Button className="px-5 py-3 font-bold mr-3 white-space-nowrap mb-3 lg:mb-0 w-full lg:w-auto" label="Learn More" />
                <Button className="px-5 py-3 font-bold mr-3 p-button-text white-space-nowrap w-full lg:w-auto" label="Contact Sales" />
            </div>
        </div>
        <img src="/demo/images/blocks/cta/cta-1.png" alt="Image" className="block mx-auto lg:mx-0" />
    </div>
</div>
    `;

    const block3 = `
<div className="bg-gray-900 p-8 flex justify-content-center md:justify-content-end bg-no-repeat bg-cover md:bg-contain" style={{ backgroundImage: 'url("/demo/images/blocks/cta/cta-2.png")' }}>
    <div className="px-5">
        <div className="text-white font-bold text-6xl">Ready to build beyond</div>
        <div className="text-blue-200 font-bold text-6xl">your expectations?</div>
        <div className="mt-3 mb-5 text-gray-200 font-medium line-height-3">Vestibulum sed arcu non odio euismod lacinia at quis risus. Massa massa ultricies mi quis. </div>
        <Button label="Get Started" className="font-bold px-5 py-3" />
    </div>
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="p-6 shadow-2 flex flex-column md:flex-row align-items-center justify-content-between" style={{ borderRadius: '1rem', background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)' }}>
        <div className="pr-6">
            <div className="text-blue-100 font-medium text-xl mb-3">TAKE THE NEXT STEP</div>
            <div className="text-white font-medium text-5xl">Enpower your customer experience</div>
        </div>
        <div className="mt-4 mr-auto md:mt-0 md:mr-0">
            <Button label="Get Started" className="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised white-space-nowrap" />
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-700 text-center">
        <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <Button label="Travel Update" icon="pi pi-chevron-right" iconPos="right" className="p-button-success p-button-rounded mb-3 font-bold" />
            <div className="text-900 font-bold text-5xl mb-3">Book Flights</div>
            <div className="text-600 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
            <div className="text-600 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
        </div>
        <div className="col-12 md:col-6 flex align-items-center md:justify-content-end">
            <div>
                <div className="text-900 font-medium justify-content-start mb-3">Round Trip Dates</div>
                <Calendar value={date1} onChange={(e) => setDate1(e.value)} dateFormat="dd/mm/yy" showIcon selectionMode="range" style={{ minWidth: '240px' }} inputClassName="bg-transparent text-900 border-400" />
                <Button label="Book Now" icon="pi pi-check" className="block mt-3 font-bold white-space-nowrap p-button-outlined w-full" />
            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <Button label="Travel Resticted" icon="pi pi-chevron-right" iconPos="right" className="p-button-help p-button-rounded mb-3 font-bold" />
            <div className="text-white font-bold text-5xl mb-3">Book Flights</div>
            <div className="text-gray-400 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
            <div className="text-gray-400 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
        </div>
        <div className="col-12 md:col-6 flex align-items-center md:justify-content-end">
            <div>
                <div className="text-gray-400 font-medium justify-content-start mb-3">Round Trip Dates</div>
                <Calendar value={date2} onChange={(e) => setDate2(e.value)} dateFormat="dd/mm/yy" selectionMode="range" showIcon style={{ minWidth: '240px' }} inputClassName="bg-transparent text-900 border-400 text-white" />
                <Button label="Book Now" icon="pi pi-check" className="block mt-3 font-bold white-space-nowrap w-full" />
            </div>
        </div>
    </div>
</div>
    `;

    const block8 = `
<div className="relative lg:p-8 p-6 text-0 overflow-hidden" style={{ background: 'url("/demo/images/blocks/cta/cta-3.jpg") no-repeat', backgroundSize: 'cover' }}>
    <div className="text-center my-6 relative">
        <div className="text-6xl mb-3 text-white flex justify-content-center flex-wrap">
            <div className="font-bold">Discover&nbsp;</div>
            True Power
        </div>
        <div className="text-2xl text-white-alpha-70 line-height-3 text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>Your perfect companion for Angular featuring elegant, high-performance, accessible and fully customizable UI Components.</div>
        <Button label="Learn More" className="font-bold px-5 py-3 mr-4 p-button-warning p-button-rounded p-button-raised white-space-nowrap" />
        <Button label="Live Demo" className="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised p-button-outlined white-space-nowrap" />
    </div>
</div>
    `;

    const block9 = `
<div className="bg-indigo-600 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column lg:flex-row">
        <div className="w-full lg:w-6 p-6 bg-indigo-500 mr-0 lg:mr-3 mb-5 lg:mb-0" style={{ borderRadius: '12px' }}>
            <div className="text-white text-4xl font-medium mb-3">Magna fringilla urna $0 per month</div>
            <p className="line-height-3 text-indigo-100 text-xl mt-0 mb-4">Quisque sagittis purus sit amet volutpat consequat mauris nunc.
                Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
            <Button type="button" label="Try It Free" className="p-button-warning font-medium p-button-rounded" />
        </div>
        <div className="w-full lg:w-6 p-6 bg-indigo-500 ml-0 lg:ml-3" style={{ borderRadius: '12px' }}>
            <div className="mb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="w-3rem mr-5 mb-3" alt="avatar-f-1" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="w-3rem mr-5 mb-3" alt="avatar-m-1" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="w-3rem mr-5 mb-3" alt="avatar-f-2" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" className="w-3rem mr-5 mb-3" alt="avatar-m-2" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="w-3rem mr-5 mb-3" alt="avatar-f-3" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-3.png" className="w-3rem mr-5 mb-3" alt="avatar-m-3" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="w-3rem mr-5 mb-3" alt="avatar-f-4" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-4.png" className="w-3rem mr-5 mb-3" alt="avatar-m-4" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-5.png" className="w-3rem mr-5 mb-3" alt="avatar-f-5" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-5.png" className="w-3rem mr-5 mb-3" alt="avatar-m-5" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" className="w-3rem mr-5 mb-3" alt="avatar-f-6" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-6.png" className="w-3rem mr-5 mb-3" alt="avatar-m-6" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-7.png" className="w-3rem mr-5 mb-3" alt="avatar-f-7" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-7.png" className="w-3rem mr-5 mb-3" alt="avatar-m-7" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-8.png" className="w-3rem mr-5 mb-3" alt="avatar-f-8" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-8.png" className="w-3rem mr-5 mb-3" alt="avatar-m-8" />
            </div>
            <div className="text-white text-4xl font-medium mb-3">Join our community of 100,000 users</div>
            <p className="line-height-3 text-indigo-100 text-xl m-0">Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. At ultrices mi tempus imperdiet nulla malesuada.</p>
        </div>
    </div>
</div>
    `;

    const block10 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap relative overflow-hidden" style={{ borderRadius: '1rem', background: 'radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121' }}>
        <div className="px-6 py-8">
            <span className="uppercase text-cyan-500 font-bold">BE THE FIRST ONE</span>
            <div className="text-white text-medium text-5xl mt-3 mb-5">Join the waitlist Today!</div>
            <button className="p-ripple appearance-none p-3 bg-cyan-500 hover:bg-cyan-300 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150" style={{ borderRadius: '35px' }}>Reserve Your Username<Ripple /></button>
        </div>

        <img src="/demo/images/blocks/cta/cta-browser.png" alt="Image" className="static lg:absolute block mx-auto" style={{ height: '400px', top: '-2rem', right: '-1rem' }} />
    </div>
</div>
    `;
    const block11 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="grid grid-nogutter p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
        <div className="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
            <span className="text-3xl block text-cyan-900 font-bold">Get Deals and Updates from Peak</span>
            <span className="block text-cyan-600 mt-3">We promise for not sending spam emails. It’ll only good emails.</span>
            <div className="p-inputgroup relative mt-4" style={{ borderRadius: '30px', maxWidth: '90%' }}>
                <InputText type="text" placeholder="Email" style={{ borderRadius: '30px', height: '3.5rem' }} className="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100" />
                <Button label="Subscribe" className="bg-cyan-500 border-none absolute text-white z-1" style={{ borderRadius: '30px', right: '8px', top: '8px', height: '2.5rem' }} />
            </div>
        </div>
        <div className="col-12 lg:col-6 p-4">
            <div className="w-full h-full bg-no-repeat bg-center bg-cover p-5" style={{ background: 'url(/demo/images/blocks/ecommerce/categorypage/categorypage-1-1.png)', borderRadius: '30px' }}>
                <span className="text-cyan-500 font-bold block">Exclusive Peak Club</span>
                <span className="text-white text-xl font-bold block mt-3 line-height-3">Join Exlusive Peak Club for free shipping, premium service and deals.</span>
                <Button label="Get Your Card Today" className="bg-cyan-500 border-none w-full mt-3 text-white" style={{ borderRadius: '30px' }}></Button>
            </div>
        </div>
    </div>
</div>
    `;
    const block12 = `
<div className="surface-section flex flex-column lg:flex-row px-4 py-8 md:px-6 lg:px-8 align-items-center">
    <img src="/demo/images/blocks/cta/cta-building.png" className="h-25rem border-round hidden lg:block" alt="cta-building" />
    <div style={{ background: 'url(/demo/images/blocks/cta/row.jpg)' }} className="bg-no-repeat bg-cover lg:border-noround-left border-round-xl px-4 py-7 sm:px-7 md:px-6">
        <img src="/demo/images/blocks/cta/cta-building.png" className="w-full sm:w-15rem border-round block lg:hidden mx-auto mb-5" alt="cta-building" />
        <div className="text-indigo-50 text-4xl font-semibold mb-3">Supercharge your workflow</div>
        <p className="text-indigo-100 mt-0 mb-5 line-height-3">Phasellus vestibulum lorem sed risus ultricies. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Aenean euismod elementum nisi quis eleifend quam.</p>
        <Button type="button" icon="pi pi-wallet" label="Start Free Trial" className="p-button-warning px-5 font-bold white-space-nowrap"></Button>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Call to Action</div>
            <BlockViewer header="Split Content" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column lg:flex-row align-items-center justify-content-between">
                        <div className="text-center lg:text-left lg:pr-8">
                            <div className="text-blue-600 font-medium mb-1 text-xl">
                                TAKE THE NEXT STEP
                            </div>
                            <div className="text-900 font-bold text-6xl mb-5">
                                Get Started with PrimeBlocks
                            </div>

                            <span
                                className="inline-flex align-items-center bg-blue-50 px-3 py-2 mr-2 mb-2 lg:mb-0 border-1 border-blue-200"
                                style={{ borderRadius: "50px" }}
                            >
                                <i className="pi pi-check text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                                    1 Month Free Trial
                                </span>
                            </span>
                            <span
                                className="inline-flex align-items-center bg-blue-50 px-3 py-2 border-1 border-blue-200"
                                style={{ borderRadius: "50px" }}
                            >
                                <i className="pi pi-check text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                                    No Credit Card Required
                                </span>
                            </span>
                        </div>
                        <div className="mt-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
                            <Button
                                label="Get Started"
                                className="px-5 py-3 mr-0 lg:mr-3 p-button-rounded font-bold mb-3 lg:mb-0 w-full lg:w-auto white-space-nowrap"
                            />
                            <Button
                                label="Request a Demo"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                className="px-5 py-3 p-button-outlined p-button-rounded font-bold w-full lg:w-auto white-space-nowrap"
                                style={{ whiteSpace: "nowrap" }}
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Background with Image" code={block2}>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-between align-items-center flex-wrap lg:flex-nowrap">
                        <div className="pr-0 lg:pr-6 mb-5 lg:mb-0">
                            <div className="font-bold text-white text-6xl font-bold mb-3">
                                Enhanced User Experience
                            </div>
                            <div className="text-gray-300 line-height-3 mb-4">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </div>
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <Button
                                    className="px-5 py-3 font-bold mr-3 white-space-nowrap mb-3 lg:mb-0 w-full lg:w-auto"
                                    label="Learn More"
                                />
                                <Button
                                    className="px-5 py-3 font-bold mr-3 p-button-text white-space-nowrap w-full lg:w-auto"
                                    label="Contact Sales"
                                />
                            </div>
                        </div>
                        <img
                            src="/demo/images/blocks/cta/cta-1.png"
                            alt="Image"
                            className="block mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Image Background" code={block3}>
                <div
                    className="bg-gray-900 p-8 flex justify-content-center md:justify-content-end bg-no-repeat bg-cover md:bg-contain"
                    style={{
                        backgroundImage:
                            'url("/demo/images/blocks/cta/cta-2.png")',
                    }}
                >
                    <div className="px-5">
                        <div className="text-white font-bold text-6xl">
                            Ready to build beyond
                        </div>
                        <div className="text-blue-200 font-bold text-6xl">
                            your expectations?
                        </div>
                        <div className="mt-3 mb-5 text-gray-200 font-medium line-height-3">
                            Vestibulum sed arcu non odio euismod lacinia at quis
                            risus. Massa massa ultricies mi quis.{" "}
                        </div>
                        <Button
                            label="Get Started"
                            className="font-bold px-5 py-3"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Gradient Background" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="p-6 shadow-2 flex flex-column md:flex-row align-items-center justify-content-between"
                        style={{
                            borderRadius: "1rem",
                            background:
                                "linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)",
                        }}
                    >
                        <div className="pr-6">
                            <div className="text-blue-100 font-medium text-xl mb-3">
                                TAKE THE NEXT STEP
                            </div>
                            <div className="text-white font-medium text-5xl">
                                Enpower your customer experience
                            </div>
                        </div>
                        <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                            <Button
                                label="Get Started"
                                className="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised white-space-nowrap"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple Centered" code={block5} free>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-700 text-center">
                        <div className="text-blue-600 font-bold mb-3">
                            <i className="pi pi-discord"></i>&nbsp;POWERED BY
                            DISCORD
                        </div>
                        <div className="text-900 font-bold text-5xl mb-3">
                            Join Our Design Community
                        </div>
                        <div className="text-700 text-2xl mb-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Velit numquam eligendi quos.
                        </div>
                        <Button
                            label="Join Now"
                            icon="pi pi-discord"
                            className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple with date selector" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <Button
                                label="Travel Update"
                                icon="pi pi-chevron-right"
                                iconPos="right"
                                className="p-button-success p-button-rounded mb-3 font-bold"
                            />
                            <div className="text-900 font-bold text-5xl mb-3">
                                Book Flights
                            </div>
                            <div className="text-600 text-2xl line-height-3">
                                Find cheap flights and airline tickets.
                            </div>
                            <div className="text-600 text-2xl line-height-3">
                                Prime Flights helps you compare and track
                                airfares.
                            </div>
                        </div>
                        <div className="col-12 md:col-6 flex align-items-center md:justify-content-end">
                            <div>
                                <div className="text-900 font-medium justify-content-start mb-3">
                                    Round Trip Dates
                                </div>
                                <Calendar
                                    value={date1}
                                    onChange={(e) => setDate1(e.value)}
                                    dateFormat="dd/mm/yy"
                                    showIcon
                                    selectionMode="range"
                                    style={{ minWidth: "240px" }}
                                    inputClassName="bg-transparent text-900 border-400"
                                />
                                <Button
                                    label="Book Now"
                                    icon="pi pi-check"
                                    className="block mt-3 font-bold white-space-nowrap p-button-outlined w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark background with date selector"
                code={block7}
            >
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <Button
                                label="Travel Resticted"
                                icon="pi pi-chevron-right"
                                iconPos="right"
                                className="p-button-help p-button-rounded mb-3 font-bold"
                            />
                            <div className="text-white font-bold text-5xl mb-3">
                                Book Flights
                            </div>
                            <div className="text-gray-400 text-2xl line-height-3">
                                Find cheap flights and airline tickets.
                            </div>
                            <div className="text-gray-400 text-2xl line-height-3">
                                Prime Flights helps you compare and track
                                airfares.
                            </div>
                        </div>
                        <div className="col-12 md:col-6 flex align-items-center md:justify-content-end">
                            <div>
                                <div className="text-gray-400 font-medium justify-content-start mb-3">
                                    Round Trip Dates
                                </div>
                                <Calendar
                                    value={date2}
                                    onChange={(e) => setDate2(e.value)}
                                    dateFormat="dd/mm/yy"
                                    selectionMode="range"
                                    showIcon
                                    style={{ minWidth: "240px" }}
                                    inputClassName="bg-transparent text-900 border-400 text-white"
                                />
                                <Button
                                    label="Book Now"
                                    icon="pi pi-check"
                                    className="block mt-3 font-bold white-space-nowrap w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Branded with background image" code={block8}>
                <div
                    className="relative lg:p-8 p-6 text-0 overflow-hidden"
                    style={{
                        background:
                            'url("/demo/images/blocks/cta/cta-3.jpg") no-repeat',
                        backgroundSize: "cover",
                    }}
                >
                    <div className="text-center my-6 relative">
                        <div className="text-6xl mb-3 text-white flex justify-content-center flex-wrap">
                            <div className="font-bold">Discover&nbsp;</div>
                            True Power
                        </div>
                        <div
                            className="text-2xl text-white-alpha-70 line-height-3 text-center mx-auto mb-5"
                            style={{ maxWidth: "500px" }}
                        >
                            Your perfect companion for Angular featuring
                            elegant, high-performance, accessible and fully
                            customizable UI Components.
                        </div>
                        <Button
                            label="Learn More"
                            className="font-bold px-5 py-3 mr-4 p-button-warning p-button-rounded p-button-raised white-space-nowrap"
                        />
                        <Button
                            label="Live Demo"
                            className="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised p-button-outlined white-space-nowrap"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Two Columns with Images" code={block9}>
                <div className="bg-indigo-600 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column lg:flex-row">
                        <div
                            className="w-full lg:w-6 p-6 bg-indigo-500 mr-0 lg:mr-3 mb-5 lg:mb-0"
                            style={{ borderRadius: "12px" }}
                        >
                            <div className="text-white text-4xl font-medium mb-3">
                                Magna fringilla urna $0 per month
                            </div>
                            <p className="line-height-3 text-indigo-100 text-xl mt-0 mb-4">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend
                                donec pretium vulputate sapien nec sagittis
                                aliquam malesuada.
                            </p>
                            <Button
                                type="button"
                                label="Try It Free"
                                className="p-button-warning font-medium p-button-rounded"
                            />
                        </div>
                        <div
                            className="w-full lg:w-6 p-6 bg-indigo-500 ml-0 lg:ml-3"
                            style={{ borderRadius: "12px" }}
                        >
                            <div className="mb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-1"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-1"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-2"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-2"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-3"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-3.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-3"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-4"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-4.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-4"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-5.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-5"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-5.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-5"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-6"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-6.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-6"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-7.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-7"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-7.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-7"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-8.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-f-8"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-8.png"
                                    className="w-3rem mr-5 mb-3"
                                    alt="avatar-m-8"
                                />
                            </div>
                            <div className="text-white text-4xl font-medium mb-3">
                                Join our community of 100,000 users
                            </div>
                            <p className="line-height-3 text-indigo-100 text-xl m-0">
                                Eget nulla facilisi etiam dignissim diam quis
                                enim lobortis scelerisque. At ultrices mi tempus
                                imperdiet nulla malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Browser Mockup" code={block10}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="flex flex-wrap relative overflow-hidden"
                        style={{
                            borderRadius: "1rem",
                            background:
                                "radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121",
                        }}
                    >
                        <div className="px-6 py-8">
                            <span className="uppercase text-cyan-500 font-bold">
                                BE THE FIRST ONE
                            </span>
                            <div className="text-white text-medium text-5xl mt-3 mb-5">
                                Join the waitlist Today!
                            </div>
                            <button
                                className="p-ripple appearance-none p-3 bg-cyan-500 hover:bg-cyan-300 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150"
                                style={{ borderRadius: "35px" }}
                            >
                                Reserve Your Username
                                <Ripple />
                            </button>
                        </div>

                        <img
                            src="/demo/images/blocks/cta/cta-browser.png"
                            alt="Image"
                            className="static lg:absolute block mx-auto"
                            style={{
                                height: "400px",
                                top: "-2rem",
                                right: "-1rem",
                            }}
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Two Columns with CTA" code={block11}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid grid-nogutter p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
                        <div className="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
                            <span className="text-3xl block text-cyan-900 font-bold">
                                Get Deals and Updates from Peak
                            </span>
                            <span className="block text-cyan-600 mt-3">
                                We promise for not sending spam emails. It’ll
                                only good emails.
                            </span>
                            <div
                                className="p-inputgroup relative mt-4"
                                style={{
                                    borderRadius: "30px",
                                    maxWidth: "90%",
                                }}
                            >
                                <InputText
                                    type="text"
                                    placeholder="Email"
                                    style={{
                                        borderRadius: "30px",
                                        height: "3.5rem",
                                    }}
                                    className="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100"
                                />
                                <Button
                                    label="Subscribe"
                                    className="bg-cyan-500 border-none absolute text-white z-1"
                                    style={{
                                        borderRadius: "30px",
                                        right: "8px",
                                        top: "8px",
                                        height: "2.5rem",
                                    }}
                                ></Button>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-4">
                            <div
                                className="w-full h-full bg-no-repeat bg-center bg-cover p-5"
                                style={{
                                    background:
                                        "url(/demo/images/blocks/ecommerce/categorypage/categorypage-1-1.png)",
                                    borderRadius: "30px",
                                }}
                            >
                                <span className="text-cyan-500 font-bold block">
                                    Exclusive Peak Club
                                </span>
                                <span className="text-white text-xl font-bold block mt-3 line-height-3">
                                    Join Exlusive Peak Club for free shipping,
                                    premium service and deals.
                                </span>
                                <Button
                                    label="Get Your Card Today"
                                    className="bg-cyan-500 border-none w-full mt-3 text-white"
                                    style={{ borderRadius: "30px" }}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Overlapping Image" code={block12}>
                <div className="surface-section flex flex-column lg:flex-row px-4 py-8 md:px-6 lg:px-8 align-items-center">
                    <img
                        src="/demo/images/blocks/cta/cta-building.png"
                        className="h-25rem border-round hidden lg:block"
                        alt="cta-building"
                    />
                    <div
                        style={{
                            background: "url(/demo/images/blocks/cta/row.jpg)",
                        }}
                        className="bg-no-repeat bg-cover lg:border-noround-left border-round-xl px-4 py-7 sm:px-7 md:px-6"
                    >
                        <img
                            src="/demo/images/blocks/cta/cta-building.png"
                            className="w-full sm:w-15rem border-round block lg:hidden mx-auto mb-5"
                            alt="cta-building"
                        />
                        <div className="text-indigo-50 text-4xl font-semibold mb-3">
                            Supercharge your workflow
                        </div>
                        <p className="text-indigo-100 mt-0 mb-5 line-height-3">
                            Phasellus vestibulum lorem sed risus ultricies.
                            Nulla pharetra diam sit amet nisl suscipit
                            adipiscing bibendum est. Aenean euismod elementum
                            nisi quis eleifend quam.
                        </p>
                        <Button
                            type="button"
                            icon="pi pi-wallet"
                            label="Start Free Trial"
                            className="p-button-warning px-5 font-bold white-space-nowrap"
                        ></Button>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Cta;
