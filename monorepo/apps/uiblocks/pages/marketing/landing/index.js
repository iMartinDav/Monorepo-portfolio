import React, { useState, useRef } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputSwitch } from 'primereact/inputswitch';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const Landing = () => {

    const [value, setValue] = useState(false);
    const rootBtnRef = useRef(null);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);


    const block1 = `
<div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div className="font-bold mr-8">🔥 Hot Deals!</div>
    <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a className="flex align-items-center ml-2 mr-8">
        <span className="underline font-bold text-white">Learn More</span>
    </a>
    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
        <i className="pi pi-times"></i>
    </a>
</div>
<div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} />
    <StyleClass nodeRef={rootBtnRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef} className="cursor-pointer block lg:hidden text-700" >
            <i className="pi pi-bars text-4xl"></i>
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <section></section>
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef1} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 w-full">
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick={true}>
                            <a ref={btnRef2} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                <span>Support</span>
                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-cloud mr-2"></i>
                                    <span className="font-medium">Help Center</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-question-circle mr-2"></i>
                                    <span className="font-medium">Faq</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold" />
            <Button label="Register" className="ml-3 p-button-outlined font-bold" />
        </div>
    </div>
</div>
<div className="relative p-6 overflow-hidden">
    <img src="/demo/images/blocks/hero/hero-2.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

    <div className="text-center my-6 relative">
        <div className="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div className="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Button label="Learn More" type="button" />

        <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div className="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" className="text-white mr-3">
                <i className="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" className="text-white mr-3">
                <i className="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-white">
                <i className="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Product, </span>
        <span className="text-blue-600">Many Solutions</span>
    </div>
    <div className="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Built for Developers</div>
            <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
            <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
            <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Trusted Security</div>
            <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>
<div className="surface-section px-4 pb-8 md:px-6 lg:px-8">
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
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div>
        <div className="text-900 font-bold text-4xl line-height-3 mb-3 text-center">Continue Breaking Records</div>
        <p className="text-600 line-height-3 text-lg m-0 mb-6 text-center">Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className="grid surface-card shadow-2" style={{ borderRadius: '10px' }}>
            <div className="col-12 md:col-3 px-5 py-5">
                <i className="pi pi-users text-4xl text-blue-600 mb-3"></i>
                <div className="text-900 font-bold text-4xl mb-3 line-height-3">83M</div>
                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
                <i className="pi pi-chart-line text-4xl text-orange-500 mb-3"></i>
                <div className="text-900 font-bold text-4xl mb-3 line-height-3">$256K</div>
                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
                <i className="pi pi-globe text-4xl text-cyan-600 mb-3"></i>
                <div className="text-900 font-bold text-4xl mb-3 line-height-3">1,453</div>
                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
                <i className="pi pi-map text-4xl text-purple-500 mb-3"></i>
                <div className="text-900 font-bold text-4xl mb-3 line-height-3">45 km</div>
                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
            </div>
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div>
        <div className="text-900 mb-3 font-bold text-4xl text-center">Trusted By</div>
        <div className="text-600 mb-6 line-height-3 text-xl text-center">We provide many of the Planet Earth’s most powerful companies with extraordinary infrastructural capabilities.</div>

        <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/alfred-500.svg" alt="alfred-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/hyper-500.svg" alt="hyper-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/bastion-500.svg" alt="bastion-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/peak-500.svg" alt="peak-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/charot-500.svg" alt="charot-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/shodan-500.svg" alt="shadon-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/hodly-500.svg" alt="hodly-500" />
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="flex align-items-center justify-content-center p-3">
                    <img src="/demo/images/blocks/logos/franki-500.svg" alt="franki-500" />
                </div>
            </div>
        </div>
    </div>
</div>
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-5 text-center">Featured Articles</div>
    <div className="grid nogutter">
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-1.jpg" alt="blog-1" className="block w-full border-round-top" />
                <div className="p-4">
                    <span className="block font-medium text-blue-600 mb-3">Crime</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">Fugitive flamingo spotted in Florida</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" />
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Anna Lane</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 5, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-2.jpg" alt="blog-2" className="block w-full border-round-top" />
                <div className="p-4 flex flex-column">
                    <span className="block font-medium text-pink-600 mb-3">Wildlife</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">Journey to the Ends of the Earth</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" />
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Arlene McCoy</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 6, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-3.jpg" alt="blog-3" className="block w-full border-round-top" />
                <div className="p-4">
                    <span className="block font-medium text-orange-600 mb-3">Marine</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">'Real and imminent' extinction risk</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" shape="circle"></Avatar>
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Diane Miles</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 9, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div>
        <div className="text-blue-600 text-2xl mb-4 text-center">Save up to 25% today</div>
        <div className="text-900 font-bold text-4xl text-center mb-4">Pricing Plans</div>
        <div className="flex align-items-center justify-content-center text-900">
            <span className="font-semibold mr-3">Monthly</span>
            <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
            <span className="ml-3">Yearly</span>
        </div>

        <div className="flex flex-column md:flex-row mt-6">
            <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
                <div className="bg-bluegray-100 text-center p-3" style={{ borderRadius: '6px 6px 0 0' }} >
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
</div>
<div className="surface-ground">
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
                    <InputText id="email" type="text" className="py-3 px-2 text-lg" placeholder="Email" />
                </div>
                <div className="field col-12 mb-4">
                    <InputText id="phone" type="text" className="py-3 px-2 text-lg" placeholder="Phone" />
                </div>
                <div className="field col-12 mb-4">
                    <InputTextarea id="message" rows="3" autoResize className="py-3 px-2 text-lg" placeholder="Message" />
                </div>
                <div className="col-12 text-right">
                    <Button type="button" label="Submit" icon="pi pi-envelope" className="px-5 py-3 w-auto" />
                </div>
            </div>
        </div>
    </div>
</div>
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="bg-gray-900">
        <div className="grid">
            <div className="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
                <img src="/demo/images/blocks/footer/footer-2.png" alt="footer sections" width={50} height={50} className="mr-3" />
                <div className="text-gray-300 font-bold text-5xl">Bastion</div>
            </div>
            <div className="col-12 md:col-3">
                <div className="text-white text-lg mb-4 flex flex-wrap" style={{ maxWidth: ' 290px' }}>Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</div>
                <div className="text-white mb-3"><i className="pi pi-phone border-round p-1 mr-2"></i>(31) 20 779 8986</div>
                <div className="text-white mb-3"><i className="pi pi-inbox border-round p-1 mr-2"></i>hello@bastion.co</div>
            </div>
            <div className="col-12 md:col-3 text-gray-200">
                <div className="text-white font-bold line-height-3 mb-3">Company</div>
                <a className="text-white line-height-3 block cursor-pointer mb-2">About Us</a>
                <a className="text-white line-height-3 block cursor-pointer mb-2">News</a>
                <a className="text-white line-height-3 block cursor-pointer mb-2">Investor Relations</a>
                <a className="text-white line-height-3 block cursor-pointer mb-2">Careers</a>
                <a className="text-white line-height-3 block cursor-pointer">Media Kit</a>
            </div>
            <div className="col-12 md:col-3 text-gray-200">
                <div className="text-white font-bold line-height-3 mb-3">Resourses</div>
                <a className="text-white line-height-3 block cursor-pointer mb-2">Get Started</a>
                <a className="text-white line-height-3 block cursor-pointer mb-2">Learn</a>
                <a className="text-white line-height-3 block cursor-pointer">Case Studies</a>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
    <img src="/demo/images/blocks/logos/hyper-light.svg" alt="Image" height="50" />
    <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef3} className="cursor-pointer block lg:hidden text-gray-400">
            <i className="pi pi-bars text-4xl"></i>
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none z-2">
        <section></section>
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row cursor-pointer">
            <li>
                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef4} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150">
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                    <div className="flex flex-wrap p-6">
                        <div className="w-full lg:w-6 mb-4 lg:mb-0">
                            <span className="block font-normal text-2xl mb-4 text-white">Products</span>
                            <p className="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                        </div>
                        <div className="w-full lg:w-6">
                            <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Shodan</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Bastion</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Hodly</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Peak</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Franki</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold" />
            <Button label="Register" className="ml-3 font-bold" />
        </div>
    </div>
</div>
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-12 lg:w-6 p-4">
            <h1 className="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span className="text-yellow-500 underline">for free</span></h1>
            <p className="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
            <ul className="list-none p-0 m-0">
                <li className="mb-3 flex align-items-center"><i className="pi pi-compass text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-map text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
            </ul>
            <Button type="button" label="Claim Your Account" className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium" />
        </div>
        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img src="/demo/images/blocks/hero/hero-illustration.svg" alt="Image" className="w-full lg:w-auto" />
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-evenly flex-wrap">
        <div className="p-3">
            <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/charot-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/hyper-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/hodly-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/franki-500.svg" alt="Image" height="50" />
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-900 text-3xl mb-3 text-center">Build The Way You Want</div>
    <div className="text-700 text-center mb-3">Risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem.</div>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-1.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Ornare Arcu Odio</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-2.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Sem Nulla Pharetra</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-3.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Facilisi Etiam Dignissim</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-4.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Risus Feugiat In Ante</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
    <div className="font-bold text-900 text-3xl mb-3 text-center">Explore The Features</div>
    <div className="text-700 text-center mb-5 line-height-3">Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque vitae tempus quam pellentesque nec nam.</div>
    <div className="flex lg:justify-content-center mb-5">
        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mr-8" />
        </div>
        <div className="flex flex-column align-items-center w-2rem">
            <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>1</span>
            <div className="h-full bg-blue-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">Ornare Arcu Odio</div>
            <span className="block text-700 line-height-3 mb-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Sed lectus vestibulum</span> mattis ullamcorper velit. Laoreet sit amet cursus sit.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Fames ac turpis</span> egestas sed tempus urna et. Cursus turpis massa.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
    </div>
    <div className="flex justify-content-center mb-5">
        <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
            <div className="text-900 text-xl mb-2 font-medium">A diam maecenas</div>
            <span className="block text-700 line-height-3 mb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Quis hendrerit dolor</span> magna eget est. Pellentesque pulvinar pellentesque.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Lectus urna duis</span> convallis convallis tellus id interdum velit laoreet.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
        <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
            <span className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>2</span>
            <div className="h-full bg-yellow-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mr-8" />
        </div>
    </div>
    <div className="flex justify-content-center">
        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mr-8" />
        </div>
        <div className="flex flex-column align-items-center w-2rem">
            <span className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>3</span>
            <div className="h-full bg-cyan-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">Pharetra et ultrices neque</div>
            <span className="block text-700 line-height-3 mb-3">Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Egestas dui id</span> ornare arcu odio ut. Mi bibendum neque egestas congue.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Sed velit dignissim</span> sodales ut eu. Massa placerat duis ultricies lacus.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
    </div>
</div>
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-orange-500 text-center mb-3">VITAE TEMPUS QUAM</div>
    <div className="font-bold text-5xl text-900 text-center mb-6">Take your vision to the next level</div>
    <div className="grid grid-nogutter">
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-blue-50 text-center p-5 border-round flex flex-column">
                <i className="text-blue-500 pi pi-play text-4xl block mb-4"></i>
                <span className="text-900 text-5xl">52000</span>
                <div className="text-blue-700 mt-3 font-medium">Streams</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-purple-50 text-center p-5 border-round flex flex-column">
                <i className="text-purple-500 pi pi-users text-4xl block mb-4"></i>
                <span className="text-900 text-5xl">21000</span>
                <div className="text-purple-700 mt-3 font-medium">Engagement</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-teal-50 text-center p-5 border-round flex flex-column">
                <i className="text-teal-500 pi pi-camera text-4xl block mb-4"></i>
                <span className="text-900 text-5xl">71.2h</span>
                <div className="text-teal-700 mt-3 font-medium">Watch Time</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-indigo-50 text-center p-5 border-round flex flex-column">
                <i className="text-indigo-500 pi pi-thumbs-up text-4xl block mb-4"></i>
                <span className="text-900 text-5xl">4500</span>
                <div className="text-indigo-700 mt-3 font-medium">Likes</div>
            </div>
        </div>
    </div>
</div>
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap relative overflow-hidden" style={{ borderRadius: '1rem', background: 'radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121' }}>
        <div className="px-6 py-8">
            <span className="uppercase text-cyan-500 font-bold">BE THE FIRST ONE</span>
            <div className="text-white text-medium text-5xl mt-3 mb-5">Join the waitlist Today!</div>
            <button className="p-ripple appearance-none p-3 bg-cyan-500 hover:bg-cyan-300 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150" style={{ borderRadius: '35px' }}>Reserve Your Username
                <Ripple />
            </button>
        </div>

        <img src="/demo/images/blocks/cta/cta-browser.png" alt="Image" className="static lg:absolute block mx-auto" style={{ height: '400px', top: '-2rem', right: '-1rem' }} />
    </div>
</div>
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
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex align-items-start lg:align-items-center lg:justify-content-between pb-5 border-bottom-1 border-300 flex-column lg:flex-row">
        <div className="pr-0 lg:pr-8">
            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="50" />
            <p className="text-600 line-height-3 text-xl mb-0 mt-5">Consequat nisl vel pretium lectus quam. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Integer quis auctor elit sed.</p>
        </div>
        <Button label="Get Started" className="mt-5 lg:mt-0 white-space-nowrap min-w-max" />
    </div>
    <div className="py-5 border-bottom-1 border-300">
        <div className="grid">
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Company</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">About Us</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">News</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Investor Relations</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Careers</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Media Kit</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Resources</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Get Started</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Learn</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Case Studies</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Developer</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Courses</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Documentation</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">API Reference</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Status</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Papers</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Development Blog</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Community</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Discord</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Events</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">FAQ</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Blog</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Connect</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Newsletters</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Press</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Code of Conduct</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Security Guide</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Bug Bounty</a></li>
                </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                <span className="text-900 block font-bold line-height-3 mb-3">Legal</span>
                <ul className="list-none p-0 m-0">
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Brand Policy</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Privacty Policy</a></li>
                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Terms of Service</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="flex justify-content-between align-items-center py-5">
        <span>&copy; 2021 Bastion Tech</span>
        <div className="flex align-items-center justify-content-between">
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                <i className="pi pi-twitter text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                <i className="pi pi-facebook text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                <i className="pi pi-github text-xl"></i>
            </a>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Landing</div>
            <BlockViewer header="Landing Page" code={block1}>
                <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
                    <div className="font-bold mr-8">🔥 Hot Deals!</div>
                    <div className="align-items-center hidden lg:flex">
                        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                    </div>
                    <a className="flex align-items-center ml-2 mr-8">
                        <span className="underline font-bold text-white">Learn More</span>
                    </a>
                    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
                        <i className="pi pi-times"></i>
                    </a>
                </div>
                <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                    <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} />
                    <StyleClass nodeRef={rootBtnRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={rootBtnRef} className="cursor-pointer block lg:hidden text-700" >
                            <i className="pi pi-bars text-4xl"></i>
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                        <section></section>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                            <li className="relative">
                                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef1} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 w-full">
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                            <span>Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                            <span>Solutions</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                            <span>Customers</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick={true}>
                                            <a ref={btnRef2} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                                <span>Support</span>
                                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-cloud mr-2"></i>
                                                    <span className="font-medium">Help Center</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-question-circle mr-2"></i>
                                                    <span className="font-medium">Faq</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Login" className="p-button-text font-bold" />
                            <Button label="Register" className="ml-3 p-button-outlined font-bold" />
                        </div>
                    </div>
                </div>
                <div className="relative p-6 overflow-hidden">
                    <img src="/demo/images/blocks/hero/hero-2.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

                    <div className="text-center my-6 relative">
                        <div className="text-6xl text-white font-bold mb-1">The Platform For</div>
                        <div className="text-6xl text-primary font-bold mb-4">Today&lsquo;s Generation</div>
                        <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button" />

                        <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
                        <div className="flex justify-content-center align-items-center">
                            <a href="https://www.apple.com" className="text-white mr-3">
                                <i className="pi pi-apple text-2xl"></i>
                            </a>
                            <a href="https://play.google.com" className="text-white mr-3">
                                <i className="pi pi-android text-2xl"></i>
                            </a>
                            <a href="https://www.facebook.com" className="text-white">
                                <i className="pi pi-facebook text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div className="mb-3 font-bold text-3xl">
                        <span className="text-900">One Product, </span>
                        <span className="text-blue-600">Many Solutions</span>
                    </div>
                    <div className="text-700 mb-6">
                        Ac turpis egestas maecenas pharetra convallis posuere
                        morbi leo urna.
                    </div>
                    <div className="grid">
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-desktop text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Built for Developers
                            </div>
                            <span className="text-700 line-height-3">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-lock text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                End-to-End Encryption
                            </div>
                            <span className="text-700 line-height-3">
                                Risus nec feugiat in fermentum posuere urna nec.
                                Posuere sollicitudin aliquam ultrices sagittis.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Easy to Use
                            </div>
                            <span className="text-700 line-height-3">
                                Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Neque volutpat ac tincidunt vitae
                                semper.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-globe text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Fast & Global Support
                            </div>
                            <span className="text-700 line-height-3">
                                Fermentum et sollicitudin ac orci phasellus
                                egestas tellus rutrum tellus.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-github text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Open Source
                            </div>
                            <span className="text-700 line-height-3">
                                Nec tincidunt praesent semper feugiat. Sed
                                adipiscing diam donec adipiscing tristique risus
                                nec feugiat.{" "}
                            </span>
                        </div>
                        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-shield text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Trusted Security
                            </div>
                            <span className="text-700 line-height-3">
                                Mattis rhoncus urna neque viverra justo nec
                                ultrices. Id cursus metus aliquam eleifend.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 pb-8 md:px-6 lg:px-8">
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
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div>
                        <div className="text-900 font-bold text-4xl line-height-3 mb-3 text-center">Continue Breaking Records</div>
                        <p className="text-600 line-height-3 text-lg m-0 mb-6 text-center">Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="grid surface-card shadow-2" style={{ borderRadius: '10px' }}>
                            <div className="col-12 md:col-3 px-5 py-5">
                                <i className="pi pi-users text-4xl text-blue-600 mb-3"></i>
                                <div className="text-900 font-bold text-4xl mb-3 line-height-3">83M</div>
                                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
                            </div>
                            <div className="col-12 md:col-3 px-5 py-5">
                                <i className="pi pi-chart-line text-4xl text-orange-500 mb-3"></i>
                                <div className="text-900 font-bold text-4xl mb-3 line-height-3">$256K</div>
                                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
                            </div>
                            <div className="col-12 md:col-3 px-5 py-5">
                                <i className="pi pi-globe text-4xl text-cyan-600 mb-3"></i>
                                <div className="text-900 font-bold text-4xl mb-3 line-height-3">1,453</div>
                                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
                            </div>
                            <div className="col-12 md:col-3 px-5 py-5">
                                <i className="pi pi-map text-4xl text-purple-500 mb-3"></i>
                                <div className="text-900 font-bold text-4xl mb-3 line-height-3">45 km</div>
                                <p className="text-700 m-0">Nostrum laborum accusamus quia iste facere possimus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div>
                        <div className="text-900 mb-3 font-bold text-4xl text-center">Trusted By</div>
                        <div className="text-600 mb-6 line-height-3 text-xl text-center">We provide many of the Planet Earth’s most powerful companies with extraordinary infrastructural capabilities.</div>

                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/alfred-500.svg" alt="alfred-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/hyper-500.svg" alt="hyper-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/bastion-500.svg" alt="bastion-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/peak-500.svg" alt="peak-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/charot-500.svg" alt="charot-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/shodan-500.svg" alt="shadon-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/hodly-500.svg" alt="hodly-500" />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="flex align-items-center justify-content-center p-3">
                                    <img src="/demo/images/blocks/logos/franki-500.svg" alt="franki-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-5 text-center">
                        Featured Articles
                    </div>
                    <div className="grid nogutter">
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-1.jpg"
                                    alt="blog-1"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4">
                                    <span className="block font-medium text-blue-600 mb-3">
                                        Crime
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        Fugitive flamingo spotted in Florida
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            shape="circle"
                                        />
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Anna Lane
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 5, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-2.jpg"
                                    alt="blog-2"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4 flex flex-column">
                                    <span className="block font-medium text-pink-600 mb-3">
                                        Wildlife
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        Journey to the Ends of the Earth
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                            shape="circle"
                                        />
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Arlene McCoy
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 6, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-3.jpg"
                                    alt="blog-3"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4">
                                    <span className="block font-medium text-orange-600 mb-3">
                                        Marine
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        &lsquo;Real and imminent&lsquo; extinction risk
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                            alt="avatar-f-3"
                                            shape="circle"
                                        ></Avatar>
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Diane Miles
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 9, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div>
                        <div className="text-blue-600 text-2xl mb-4 text-center">Save up to 25% today</div>
                        <div className="text-900 font-bold text-4xl text-center mb-4">Pricing Plans</div>
                        <div className="flex align-items-center justify-content-center text-900">
                            <span className="font-semibold mr-3">Monthly</span>
                            <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
                            <span className="ml-3">Yearly</span>
                        </div>

                        <div className="flex flex-column md:flex-row mt-6">
                            <div className="mb-6 md:mb-0 mr-0 md:mr-4 flex flex-column flex-grow-1">
                                <div className="bg-bluegray-100 text-center p-3" style={{ borderRadius: '6px 6px 0 0' }} >
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
                </div>
                <div className="surface-ground">
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
                                    <InputText id="email" type="text" className="py-3 px-2 text-lg" placeholder="Email" />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputText id="phone" type="text" className="py-3 px-2 text-lg" placeholder="Phone" />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputTextarea id="message" rows="3" autoResize className="py-3 px-2 text-lg" placeholder="Message" />
                                </div>
                                <div className="col-12 text-right">
                                    <Button type="button" label="Submit" icon="pi pi-envelope" className="px-5 py-3 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="bg-gray-900">
                        <div className="grid">
                            <div className="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
                                <img src="/demo/images/blocks/footer/footer-2.png" alt="footer sections" width={50} height={50} className="mr-3" />
                                <div className="text-gray-300 font-bold text-5xl">Bastion</div>
                            </div>
                            <div className="col-12 md:col-3">
                                <div className="text-white text-lg mb-4 flex flex-wrap" style={{ maxWidth: ' 290px' }}>Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</div>
                                <div className="text-white mb-3"><i className="pi pi-phone border-round p-1 mr-2"></i>(31) 20 779 8986</div>
                                <div className="text-white mb-3"><i className="pi pi-inbox border-round p-1 mr-2"></i>hello@bastion.co</div>
                            </div>
                            <div className="col-12 md:col-3 text-gray-200">
                                <div className="text-white font-bold line-height-3 mb-3">Company</div>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">About Us</a>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">News</a>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">Investor Relations</a>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">Careers</a>
                                <a className="text-white line-height-3 block cursor-pointer">Media Kit</a>
                            </div>
                            <div className="col-12 md:col-3 text-gray-200">
                                <div className="text-white font-bold line-height-3 mb-3">Resourses</div>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">Get Started</a>
                                <a className="text-white line-height-3 block cursor-pointer mb-2">Learn</a>
                                <a className="text-white line-height-3 block cursor-pointer">Case Studies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Landing Page II" code={block2}>
                <div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
                    <img src="/demo/images/blocks/logos/hyper-light.svg" alt="Image" height="50" />
                    <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef3} className="cursor-pointer block lg:hidden text-gray-400">
                            <i className="pi pi-bars text-4xl"></i>
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none z-2">
                        <section></section>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef4} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                                    <div className="flex flex-wrap p-6">
                                        <div className="w-full lg:w-6 mb-4 lg:mb-0">
                                            <span className="block font-normal text-2xl mb-4 text-white">Products</span>
                                            <p className="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                                        </div>
                                        <div className="w-full lg:w-6">
                                            <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">Shodan</span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">Bastion</span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">Hodly</span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap">
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">Peak</span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">Franki</span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Login" className="p-button-text font-bold" />
                            <Button label="Register" className="ml-3 font-bold" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-12 lg:w-6 p-4">
                            <h1 className="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span className="text-yellow-500 underline">for free</span></h1>
                            <p className="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-3 flex align-items-center"><i className="pi pi-compass text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                                <li className="mb-3 flex align-items-center"><i className="pi pi-map text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                                <li className="mb-3 flex align-items-center"><i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
                            </ul>
                            <Button type="button" label="Claim Your Account" className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium" />
                        </div>
                        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
                            <img src="/demo/images/blocks/hero/hero-illustration.svg" alt="Image" className="w-full lg:w-auto" />
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-evenly flex-wrap">
                        <div className="p-3">
                            <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" height="50" />
                        </div>
                        <div className="p-3">
                            <img src="/demo/images/blocks/logos/charot-500.svg" alt="Image" height="50" />
                        </div>
                        <div className="p-3">
                            <img src="/demo/images/blocks/logos/hyper-500.svg" alt="Image" height="50" />
                        </div>
                        <div className="p-3">
                            <img src="/demo/images/blocks/logos/hodly-500.svg" alt="Image" height="50" />
                        </div>
                        <div className="p-3">
                            <img src="/demo/images/blocks/logos/franki-500.svg" alt="Image" height="50" />
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-900 text-3xl mb-3 text-center">Build The Way You Want</div>
                    <div className="text-700 text-center mb-3">Risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem.</div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img src="/demo/images/blocks/feature/feature-illustration-1.svg" alt="Image" className="w-full" />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">Ornare Arcu Odio</div>
                            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
                            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img src="/demo/images/blocks/feature/feature-illustration-2.svg" alt="Image" className="w-full" />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">Sem Nulla Pharetra</div>
                            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
                            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img src="/demo/images/blocks/feature/feature-illustration-3.svg" alt="Image" className="w-full" />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">Facilisi Etiam Dignissim</div>
                            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
                            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img src="/demo/images/blocks/feature/feature-illustration-4.svg" alt="Image" className="w-full" />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">Risus Feugiat In Ante</div>
                            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
                            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
                    <div className="font-bold text-900 text-3xl mb-3 text-center">Explore The Features</div>
                    <div className="text-700 text-center mb-5 line-height-3">Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque vitae tempus quam pellentesque nec nam.</div>
                    <div className="flex lg:justify-content-center mb-5">
                        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mr-8" />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem">
                            <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>1</span>
                            <div className="h-full bg-blue-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                            <div className="text-900 text-xl mb-2 font-medium">Ornare Arcu Odio</div>
                            <span className="block text-700 line-height-3 mb-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Sed lectus vestibulum</span> mattis ullamcorper velit. Laoreet sit amet cursus sit.</div>
                                <div className="line-height-3"><span className="text-900 font-medium">Fames ac turpis</span> egestas sed tempus urna et. Cursus turpis massa.</div>
                            </div>
                            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mt-3 block lg:hidden" />
                        </div>
                    </div>
                    <div className="flex justify-content-center mb-5">
                        <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
                            <div className="text-900 text-xl mb-2 font-medium">A diam maecenas</div>
                            <span className="block text-700 line-height-3 mb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Quis hendrerit dolor</span> magna eget est. Pellentesque pulvinar pellentesque.</div>
                                <div className="line-height-3"><span className="text-900 font-medium">Lectus urna duis</span> convallis convallis tellus id interdum velit laoreet.</div>
                            </div>
                            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mt-3 block lg:hidden" />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
                            <span className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>2</span>
                            <div className="h-full bg-yellow-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
                            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mr-8" />
                        </div>
                    </div>
                    <div className="flex justify-content-center">
                        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mr-8" />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem">
                            <span className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>3</span>
                            <div className="h-full bg-cyan-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                            <div className="text-900 text-xl mb-2 font-medium">Pharetra et ultrices neque</div>
                            <span className="block text-700 line-height-3 mb-3">Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.</span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Egestas dui id</span> ornare arcu odio ut. Mi bibendum neque egestas congue.</div>
                                <div className="line-height-3"><span className="text-900 font-medium">Sed velit dignissim</span> sodales ut eu. Massa placerat duis ultricies lacus.</div>
                            </div>
                            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mt-3 block lg:hidden" />
                        </div>
                    </div>
                </div>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-orange-500 text-center mb-3">VITAE TEMPUS QUAM</div>
                    <div className="font-bold text-5xl text-900 text-center mb-6">Take your vision to the next level</div>
                    <div className="grid grid-nogutter">
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="bg-blue-50 text-center p-5 border-round flex flex-column">
                                <i className="text-blue-500 pi pi-play text-4xl block mb-4"></i>
                                <span className="text-900 text-5xl">52000</span>
                                <div className="text-blue-700 mt-3 font-medium">Streams</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="bg-purple-50 text-center p-5 border-round flex flex-column">
                                <i className="text-purple-500 pi pi-users text-4xl block mb-4"></i>
                                <span className="text-900 text-5xl">21000</span>
                                <div className="text-purple-700 mt-3 font-medium">Engagement</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="bg-teal-50 text-center p-5 border-round flex flex-column">
                                <i className="text-teal-500 pi pi-camera text-4xl block mb-4"></i>
                                <span className="text-900 text-5xl">71.2h</span>
                                <div className="text-teal-700 mt-3 font-medium">Watch Time</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="bg-indigo-50 text-center p-5 border-round flex flex-column">
                                <i className="text-indigo-500 pi pi-thumbs-up text-4xl block mb-4"></i>
                                <span className="text-900 text-5xl">4500</span>
                                <div className="text-indigo-700 mt-3 font-medium">Likes</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap relative overflow-hidden" style={{ borderRadius: '1rem', background: 'radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121' }}>
                        <div className="px-6 py-8">
                            <span className="uppercase text-cyan-500 font-bold">BE THE FIRST ONE</span>
                            <div className="text-white text-medium text-5xl mt-3 mb-5">Join the waitlist Today!</div>
                            <button className="p-ripple appearance-none p-3 bg-cyan-500 hover:bg-cyan-300 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150" style={{ borderRadius: '35px' }}>Reserve Your Username
                                <Ripple />
                            </button>
                        </div>

                        <img src="/demo/images/blocks/cta/cta-browser.png" alt="Image" className="static lg:absolute block mx-auto" style={{ height: '400px', top: '-2rem', right: '-1rem' }} />
                    </div>
                </div>
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
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex align-items-start lg:align-items-center lg:justify-content-between pb-5 border-bottom-1 border-300 flex-column lg:flex-row">
                        <div className="pr-0 lg:pr-8">
                            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="50" />
                            <p className="text-600 line-height-3 text-xl mb-0 mt-5">Consequat nisl vel pretium lectus quam. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Integer quis auctor elit sed.</p>
                        </div>
                        <Button label="Get Started" className="mt-5 lg:mt-0 white-space-nowrap min-w-max" />
                    </div>
                    <div className="py-5 border-bottom-1 border-300">
                        <div className="grid">
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Company</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">About Us</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">News</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Investor Relations</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Careers</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Media Kit</a></li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Resources</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Get Started</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Learn</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Case Studies</a></li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Developer</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Courses</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Documentation</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">API Reference</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Status</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Papers</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Development Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Community</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Discord</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Events</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">FAQ</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Connect</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Newsletters</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Press</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Code of Conduct</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Security Guide</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Bug Bounty</a></li>
                                </ul>
                            </div>
                            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
                                <span className="text-900 block font-bold line-height-3 mb-3">Legal</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Brand Policy</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Privacty Policy</a></li>
                                    <li className="mb-2"><a className="text-700 cursor-pointer line-height-3">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-content-between align-items-center py-5">
                        <span>&copy; 2021 Bastion Tech</span>
                        <div className="flex align-items-center justify-content-between">
                            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                                <i className="pi pi-twitter text-xl"></i>
                            </a>
                            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                                <i className="pi pi-facebook text-xl"></i>
                            </a>
                            <a className="cursor-pointer text-500 md:ml-3 ml-2">
                                <i className="pi pi-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Landing;
