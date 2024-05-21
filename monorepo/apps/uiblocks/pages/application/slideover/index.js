import React, { useRef, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TabView } from "primereact/tabview";
import { TabPanel } from "primereact/tabview";
import { Badge } from "primereact/badge";
import { Chips } from "primereact/chips";
import { StyleClass } from "primereact/styleclass";
import { classNames } from "primereact/utils";
import { Ripple } from "primereact/ripple";
import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";

const SlideOver = () => {
    const [user, setUser] = useState(2);
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
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
    const btnRef23 = useRef(null);
    const btnRef24 = useRef(null);

    const users = [
        { picture: "f-1.png", name: "Jane Watson" },
        { picture: "m-1.png", name: "David Wilford" },
        { picture: "f-2.png", name: "Annette Black" },
        { picture: "f-3.png", name: "Leslie Alexander" },
        { picture: "f-4.png", name: "Savannah Nguyen" },
        { picture: "m-2.png", name: "Alberto Flores" },
    ];

    const block1 = `
<StyleClass nodeRef={btnRef1} selector="#slideover-1" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
    <Button ref={btnRef1} label="Display" icon="pi pi-arrow-right" />
</StyleClass>
<div id="slideover-1" className="hidden surface-overlay absolute top-0 left-0 shadow-2 w-18rem h-full">
    <div className="flex flex-column h-full p-4">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Title Placeholder</span>
            <StyleClass nodeRef={btnRef2} selector="#slideover-1" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                <Button ref={btnRef2} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>
    `;

    const block2 = `
<StyleClass nodeRef={btnRef3} selector="#slideover-2" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef3} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-2" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div className="flex flex-column h-full p-4">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Title Placeholder</span>
            <StyleClass nodeRef={btnRef4} selector="#slideover-2" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef4} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>
    `;

    const block3 = `
<StyleClass nodeRef={btnRef5} selector="#slideover-3" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef5} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-3" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-full lg:w-6 h-full">
    <div className="flex flex-column h-full p-4">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Title Placeholder</span>
            <StyleClass nodeRef={btnRef6} selector="#slideover-3" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef6} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>
    `;

    const block4 = `
<StyleClass nodeRef={btnRef7} selector="#slideover-4" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef7} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-4" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div className="flex flex-column h-full">
        <div className="flex align-items-start bg-gray-800 justify-content-between p-3">
            <div>
                <div className="text-white text-xl font-medium mb-1">Title Placeholder</div>
                <p className="m-0 p-0 line-height-3 text-gray-400 text-sm">Vitae turpis massa sed tempus egestas sed sed risus.</p>
            </div>
            <div>
                <StyleClass nodeRef={btnRef8} selector="#slideover-4" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                    <Button ref={btnRef8} icon="pi pi-times" className="p-button-rounded p-button-text p-button-warning p-button-plain" />
                </StyleClass>
            </div>
        </div>
        <div className="m-4 border-2 border-round border-dashed surface-border flex-auto overflow-y-auto"></div>
    </div>
</div>
    `;

    const block5 = `
<StyleClass nodeRef={btnRef9} selector="#slideover-5" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef9} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-5" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div className="flex flex-column p-4 h-full w-18rem">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Title Placeholder</span>
            <StyleClass nodeRef={btnRef10} selector="#slideover-5" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" >
                <Button ref={btnRef10} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
        <div className="pt-3 border-top-1 surface-border mt-3 flex">
            <StyleClass nodeRef={btnRef11} selector="#slideover-5" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef11} icon="pi pi-times" className="p-button-text mr-2 flex-auto" label="Cancel" />
            </StyleClass>
            <StyleClass nodeRef={btnRef12} selector="#slideover-5" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" >
                <Button ref={btnRef12} icon="pi pi-check" className="ml-2 flex-auto" label="Save" />
            </StyleClass>
        </div>
    </div>
</div>
    `;

    const block6 = `
<StyleClass nodeRef={btnRef13} selector="#slideover-6" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick >
    <Button ref={btnRef13} label="Display" icon="pi pi-arrow-left" />
</StyleClass>

<div id="slideover-6" className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-20rem">
    <div className="flex flex-column h-full">
        <div className="flex align-items-center justify-content-between p-4">
            <div>
                <div className="text-900 text-xl font-medium mb-1">Contacts</div>
                <p className="text-600 m-0">9 People</p>
            </div>
            <StyleClass nodeRef={btnRef14} selector="#slideover-6" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef14} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="flex-auto overflow-y-auto">
            <ul className="list-none p-0 m-0">
                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">A</li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-m-1" />
                        <div>
                            <span className="text-900 font-medium mb-2">Aaron Flore</span>
                            <p className="m-0 text-600 text-sm">Prime Coffee</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-f-1"/>
                        <div>
                            <span className="text-900 font-medium mb-2">Annette Black</span>
                            <p className="m-0 text-600 text-sm">Bank of Prime</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-m-2"/>
                        <div>
                            <span className="text-900 font-medium mb-2">Abha Watson</span>
                            <p className="m-0 text-600 text-sm">PrimeCard</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">B</li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} avatar-f-2 />
                        <div>
                            <span className="text-900 font-medium mb-2">Balcaz Cooper</span>
                            <p className="m-0 text-600 text-sm">Prime Coffee</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-f-3"/>
                        <div>
                            <span className="text-900 font-medium mb-2">Beatrix McKinney</span>
                            <p className="m-0 text-600 text-sm">Bank of Prime</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-3.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} />
                        <div>
                            <span className="text-900 font-medium mb-2">Belva Wilson</span>
                            <p className="m-0 text-600 text-sm">Franki Inc</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-4.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-m-4"/>
                        <div>
                            <span className="text-900 font-medium mb-2">Barnes Fox</span>
                            <p className="m-0 text-600 text-sm">Prime Electric</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">C</li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-5.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-m-5"/>
                        <div>
                            <span className="text-900 font-medium mb-2">Canyon Flores</span>
                            <p className="m-0 text-600 text-sm">Ipsum Inc</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                    <Ripple />
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="mr-3 flex-shrink-0" style={{ width: '50px', height: '50px' }} alt="avatar-f-4" />
                        <div>
                            <span className="text-900 font-medium mb-2">Carmen Cooper</span>
                            <p className="m-0 text-600 text-sm">Lorem LLC</p>
                        </div>
                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block7 = `
<StyleClass nodeRef={btnRef15} selector="#slideover-7" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef15} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-7" className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-20rem h-full">
    <div className="flex flex-column p-4 h-full">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Profile</span>
            <StyleClass nodeRef={btnRef16} selector="#slideover-7" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" >
                <Button ref={btnRef16} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="flex-auto overflow-y-auto">
            <div className="text-center mb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" style={{ width: '70px', height: '70px' }} alt="avatar-f-3"/>
                <div className="text-900 mt-3 mb-2 text-xl font-medium">Isabel Rio</div>
                <span className="text-700">Sales Manager</span>
            </div>
            <div className="flex align-items-center mb-5">
                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                        <i className="pi pi-comment text-xl text-600"></i>
                        <Ripple />
                    </div>
                    <span className="text-sm font-medium text-700">Message</span>
                </a>
                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                        <i className="pi pi-phone text-xl text-600"></i>
                        <Ripple />
                    </div>
                    <span className="text-sm font-medium text-700">Call</span>
                </a>
                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                        <i className="pi pi-video text-xl text-600"></i>
                        <Ripple />
                    </div>
                    <span className="text-sm font-medium text-700">Video Call</span>
                </a>
            </div>
            <ul className="list-none p-0 m-0">
                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mb-1">NAME</li>
                <li className="text-900 p-2">Isabel Rio</li>
                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">MEMBER SINCE</li>
                <li className="text-900 p-2">23/10/2021</li>
                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">LOCAL TIME</li>
                <li className="text-900 p-2">16:40</li>
                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">RECENT ORDERS</li>
                <li>
                    <ul className="list-none p-0 m-0">
                        <li className="py-2 border-bottom-1 surface-border">
                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="/demo/images/blocks/products/sport-shoe.png" className="mr-3 flex-shrink-0" style={{ width: '39px', height: '39px' }} alt="sport-shoe"/>
                                <div>
                                    <span className="block text-900 mb-1">Sports Shoes</span>
                                    <p className="m-0 text-600 font-medium text-sm">SRT30321</p>
                                </div>
                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="py-2 border-bottom-1 surface-border">
                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="/demo/images/blocks/products/dslr-camera.png" className="mr-3 flex-shrink-0" style={{ width: '39px', height: '39px' }} alt="dslr-camera" />
                                <div>
                                    <span className="block text-900 mb-1">DSRL Camera</span>
                                    <p className="m-0 text-600 font-medium text-sm">OBS90211</p>
                                </div>
                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="/demo/images/blocks/products/wireless-headphone.png" className="mr-3 flex-shrink-0" style={{ width: '39px', height: '39px' }} alt="wireless-headphone" />
                                <div>
                                    <span className="block text-900 mb-1">Headphone</span>
                                    <p className="m-0 text-600 font-medium text-sm">APE302123</p>
                                </div>
                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block8 = `
<StyleClass nodeRef={btnRef17} selector="#slideover-8" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
    <Button ref={btnRef17} label="Display" icon="pi pi-arrow-right" />
</StyleClass>

<div id="slideover-8" className="hidden surface-overlay h-full absolute top-0 left-0 shadow-2 w-18rem">
    <div className="flex flex-column h-full">
        <div className="flex align-items-center justify-content-between mb-4 p-4">
            <span className="text-900 text-xl font-medium">Purchase Ticket</span>
            <StyleClass nodeRef={btnRef18} selector="#slideover-8" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                <Button ref={btnRef18} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="flex-auto overflow-y-auto">
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center border-top-1 surface-border p-3">
                    <span className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style={{ width: '35px', height: '35px' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-700 font-medium">Personal Information</span>
                </li>
                <li className="flex align-items-center border-top-1 surface-border p-3">
                    <span className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style={{ width: '35px', height: '35px' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-700 font-medium">Destination</span>
                </li>
                <li className="flex align-items-center border-top-1 surface-border p-3">
                    <span className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style={{ width: '35px', height: '35px' }}>
                        <i className="pi pi-check"></i>
                    </span>
                    <span className="text-700 font-medium">Date</span>
                </li>
                <li className="border-top-1 surface-border p-3">
                    <div className="flex align-items-center mb-3">
                        <span className="border-circle surface-900 text-0 text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style={{ width: '35px', height: '35px' }}>
                            <i className="pi pi-table"></i>
                        </span>
                        <span className="text-900 font-medium font-bold">Seat</span>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex align-items-center p-2">
                            <i className="pi pi-check text-green-500"></i>
                            <span className="text-600 ml-3">Choose Tier</span>
                        </li>
                        <li className="flex align-items-center p-2">
                            <span className="text-900 ml-5 font-bold">Select Seat</span>
                            <i className="pi pi-arrow-right text-900 ml-auto"></i>
                        </li>
                    </ul>
                </li>
                <li className="flex align-items-center border-top-1 surface-border p-3">
                    <span className="border-circle text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border" style={{ width: '35px', height: '35px' }}>
                        <i className="pi pi-credit-card text-700"></i>
                    </span>
                    <span className="text-700 font-medium">Payment</span>
                </li>
                <li className="flex align-items-center border-top-1 surface-border p-3">
                    <span className="border-circle text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border" style={{ width: '35px', height: '35px' }}>
                        <i className="pi pi-thumbs-up text-700"></i>
                    </span>
                    <span className="text-700 font-medium">Confirmation</span>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block9 = `
<StyleClass nodeRef={btnRef19} selector="#slideover-9" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef19} label="Display" icon="pi pi-arrow-left" />
</StyleClass>

<div id="slideover-9" className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-30rem">
    <div className="flex flex-column h-full">
        <div className="flex align-items-center justify-content-between p-4">
            <span className="flex align-items-center">
                <img src={\`/demo/images/blocks/avatars/circle/avatar-$\{users[user].picture}\`} className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} />
                <span className="text-900 text-xl font-medium">{users[user].name}</span>
            </span>
            <StyleClass nodeRef={btnRef20} selector="#slideover-9" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                <Button ref={btnRef20} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <div className="flex border-top-1 surface-border flex-auto">
            <div style={{ width: '70px' }} className="flex border-right-1 surface-border flex-shrink-0">
                <ul className="flex flex-column list-none p-0 m-0 w-full">
                    {
                        users.map((usr, i) => {
                            return (
                                <li key={i}>
                                    <a className={classNames('p-ripple cursor-pointer flex align-items-center justify-content-center border-right-2 border-transparent p-2 hover:border-300 transition-colors transition-duration-150', { 'border-blue-500 surface-200': i === user })} onClick={() => setUser(i)}>
                                        <img src={\`/demo/images/blocks/avatars/circle/avatar-$\{users[i].picture}\`} className="flex-shrink-0" style={{ width: '42px', height: '42px' }} />
                                        <Ripple />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="flex flex-auto flex-column overflow-y-auto surface-ground">
                {user === 2 && <ul className="flex-auto list-none p-0 m-0">
                    <li className="flex justify-content-end p-3">
                        <div>
                            <p className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style={{ maxWidth: '275px' }}>Neque vitae tempus quam pellentesque nec nam aliquam sem.
                                Etiam tempor orci eu lobortis elementum.</p>
                            <div className="text-right text-500 text-sm">14:43</div>
                        </div>
                    </li>
                    <li className="flex justify-content-start p-3">
                        <div>
                            <p className="shadow-2 surface-card text-900 p-3 line-height-3 border-round mt-0 mb-2" style={{ maxWidth: '275px' }}>Ultricies mi eget mauris pharetra et ultrices neque. Et odio pellentesque diam volutpat.</p>
                            <div className="text-right text-500 text-sm">14:45</div>
                        </div>
                    </li>
                    <li className="flex justify-content-end p-3">
                        <div>
                            <p className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style={{ maxWidth: '275px' }}>Neque vitae tempus quam pellentesque nec nam aliquam sem.
                                Etiam tempor orci eu lobortis elementum.</p>
                            <p className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style={{ maxWidth: '275px' }}>Imperdiet dui accumsan sit.</p>
                            <div className="text-right text-500 text-sm">14:50</div>
                        </div>
                    </li>
                </ul>}
                {user !== 2 && <ul className="flex-auto list-none p-0 m-0">
                    <li className="flex p-3">
                        <p className="flex align-items-center shadow-2 border-round bg-yellow-100 text-yellow-900 m-0 p-3 w-full">
                            <i className="pi pi-lock mr-3"></i>
                            <span className="line-height-3">Messages are end-to-end encrypted. No one expect you and receiver can read them. None of messages are saved to our servers.</span>
                        </p>
                    </li>
                </ul>}
                <div className="p-4 border-top-1 surface-border p-input-filled">
                    <span className="p-input-icon-right block">
                        <i className="pi pi-send"></i>
                        <InputText className="p-3 w-full" placeholder="Type..." />
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block10 = `
<StyleClass nodeRef={btnRef21} selector="#slideover-10" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick >
    <Button ref={btnRef21} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<div id="slideover-10" className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-24rem">
    <div className="flex flex-column p-4 h-full">
        <div className="flex align-items-center justify-content-between mb-4">
            <span className="text-900 text-xl font-medium">Orders</span>
            <StyleClass nodeRef={btnRef22} selector="#slideover-10" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" >
                <Button ref={btnRef22} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
            </StyleClass>
        </div>
        <TabView>
            <TabPanel header="Processed">
                <ul className="list-none p-0 m-0">
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/speaker.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} />
                            <div>
                                <span className="block text-900 mb-1">Bluetooth Speaker</span>
                                <p className="m-0 text-600 font-medium text-sm">#99812</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/gaming.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }}  alt="gaming" />
                            <div>
                                <span className="block text-900 mb-1">Gaming Device</span>
                                <p className="m-0 text-600 font-medium text-sm">#60210</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/skateboard.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} />
                            <div>
                                <span className="block text-900 mb-1">Skateboard</span>
                                <p className="m-0 text-600 font-medium text-sm">#40197</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/wax.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="wax" />
                            <div>
                                <span className="block text-900 mb-1">Strong Wax</span>
                                <p className="m-0 text-600 font-medium text-sm">#47082</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/juice.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} />
                            <div>
                                <span className="block text-900 mb-1">Berry Juice</span>
                                <p className="m-0 text-600 font-medium text-sm">#59901</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/sport-shoe.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="sport-shoe"/>
                            <div>
                                <span className="block text-900 mb-1">Sports Shoe</span>
                                <p className="m-0 text-600 font-medium text-sm">#47122</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </TabPanel>

            <TabPanel header="Pending">
                <ul className="list-none p-0 m-0">
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/running-shoe.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="running-shoe" />
                            <div>
                                <span className="block text-900 mb-1">Running Shoes</span>
                                <p className="m-0 text-600 font-medium text-sm">#99210</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/instant-camera.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="instant-camera" />
                            <div>
                                <span className="block text-900 mb-1">Instant Camera</span>
                                <p className="m-0 text-600 font-medium text-sm">#55018</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/sunglasses.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="sunglasses"/>
                            <div>
                                <span className="block text-900 mb-1">Sunglasses</span>
                                <p className="m-0 text-600 font-medium text-sm">#18880</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/dslr-camera.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="dslr-camera" />
                            <div>
                                <span className="block text-900 mb-1">DSLR Camera</span>
                                <p className="m-0 text-600 font-medium text-sm">#9402</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </TabPanel>

            <TabPanel header="Completed">
                <ul className="list-none p-0 m-0">
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/cupcake.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="cupcake"/>
                            <div>
                                <span className="block text-900 mb-1">Bluetooth Speaker</span>
                                <p className="m-0 text-600 font-medium text-sm">#49991</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/wireless-headphone.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="wireless-headphone" />
                            <div>
                                <span className="block text-900 mb-1">Gaming Device</span>
                                <p className="m-0 text-600 font-medium text-sm">#9921</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/perfume.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="perfume" />
                            <div>
                                <span className="block text-900 mb-1">Perfume</span>
                                <p className="m-0 text-600 font-medium text-sm">#7502</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/model-car.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="model-car"/>
                            <div>
                                <span className="block text-900 mb-1">Model Car</span>
                                <p className="m-0 text-600 font-medium text-sm">#47082</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-bottom-1 surface-border py-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/products/spoons.png" className="mr-3 flex-shrink-0" style={{ width: '42px', height: '42px' }} alt="spoons" />
                            <div>
                                <span className="block text-900 mb-1">Spoon Set</span>
                                <p className="m-0 text-600 font-medium text-sm">#10002</p>
                            </div>
                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </TabPanel>
        </TabView>
    </div>
</div>
    `;

    const block11 = `
<StyleClass nodeRef={btnRef23} selector="#slideover-11" enterClassName="hidden" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
    <Button ref={btnRef23} label="Display" icon="pi pi-arrow-left" />
</StyleClass>
<section id="slideover-11" className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-24rem">
    <div className="flex flex-column justify-content-between h-full">
        <form>
            <div className="flex align-items-start bg-blue-700 justify-content-between p-3 mb-4">
                <header>
                    <h1 className="text-0 mt-0 text-xl font-medium mb-1 text-white">Title Placeholder</h1>
                    <h2 className="m-0 p-0 line-height-3 font-normal text-primary-200 text-sm">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse.</h2>
                </header>
                <StyleClass nodeRef={btnRef24} selector="#slideover-11" leaveToClassName="hidden" leaveActiveClassName="fadeoutright">
                    <div>
                        <Button ref={btnRef24} icon="pi pi-times" className="p-button p-button-rounded p-button-text text-white-alpha-70 p-button-plain hover:bg-blue-500" />
                    </div>
                </StyleClass>
            </div>
            <div className="px-4">
                <h3 className="text-base font-semibold mt-0 mb-0 text-color">Project Name</h3>
                <div className="p-inputgroup mt-2">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-file"></i>
                    </span>
                    <InputText type={'text'} />
                </div>
            </div>
            <div className="px-4 mt-4">
                <h3 className="text-base font-semibold text-color mt-0 mb-0">Tags</h3>
                <div className="mt-2 p-fluid">
                    <Chips value={value} onChange={(e) => setValue(e.value)} />
                </div>
            </div>
            <div className="px-4 mt-4">
                <h3 className="text-base font-semibold text-color mt-0 mb-0">Team Members</h3>
                <div className="mt-3 flex gap-3">
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" value="4" size="large" className="p-overlay-badge">
                        <Badge value="4" severity="help" />
                    </Avatar>
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" value="8" size="large" className="p-overlay-badge">
                        <Badge value="8" severity="help" />
                    </Avatar>
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" value="9" size="large" className="p-overlay-badge">
                        <Badge value="9" severity="help" />
                    </Avatar>
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-4.png" value="3" size="large" className="p-overlay-badge">
                        <Badge value="3" severity="help" />
                    </Avatar>
                </div>
            </div>
            <div className="px-4 mt-4">
                <h3 className="text-base font-semibold text-color">Newsletter Permissions</h3>
                <div className="mt-3 flex align-items-center gap-3">
                    <InputSwitch className="flex" checked={checked} onChange={(e) => setChecked(e.value)}></InputSwitch>
                    <p className="mt-0 mb-0 text-base text-color">Allow sending Marketing emails</p>
                </div>
                <div className="mt-3 flex align-items-center gap-3">
                    <InputSwitch className="flex" checked={checked2} onChange={(e) => setChecked2(e.value)}></InputSwitch>
                    <p className="mt-0 mb-0 text-base">Allow sending Release emails</p>
                </div>
                <div className="mt-3 flex align-items-center gap-3">
                    <InputSwitch className="flex" checked={checked3} onChange={(e) => setChecked3(e.value)}></InputSwitch>
                    <p className="mt-0 mb-0 text-base">Allow sending Notification emails</p>
                </div>
            </div>
        </form>
        <div className="mx-4 py-4 border-top-1 surface-border flex">
            <Button className="w-full">
                <span className="w-full flex justify-content-center align-items-center gap-3 ">
                    <i className="pi pi-send"></i>
                    <span className="font-bold">Submit Project</span>
                </span>
            </Button>
        </div>
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">SlideOver</div>
            <BlockViewer
                header="Left Side"
                code={block1}
                containerClassName="flex align-items-start justify-content-start px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef1}
                    selector="#slideover-1"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinleft"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutleft"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef1}
                        label="Display"
                        icon="pi pi-arrow-right"
                    />
                </StyleClass>
                <div
                    id="slideover-1"
                    className="hidden surface-overlay absolute top-0 left-0 shadow-2 w-18rem h-full"
                >
                    <div className="flex flex-column h-full p-4">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Title Placeholder
                            </span>
                            <StyleClass
                                nodeRef={btnRef2}
                                selector="#slideover-1"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutleft"
                            >
                                <Button
                                    ref={btnRef2}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Right Side"
                code={block2}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef3}
                    selector="#slideover-2"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef3}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <div
                    id="slideover-2"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full"
                >
                    <div className="flex flex-column h-full p-4">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Title Placeholder
                            </span>
                            <StyleClass
                                nodeRef={btnRef4}
                                selector="#slideover-2"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef4}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Half Width"
                code={block3}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef5}
                    selector="#slideover-3"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef5}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <div
                    id="slideover-3"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-full lg:w-6 h-full"
                >
                    <div className="flex flex-column h-full p-4">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Title Placeholder
                            </span>
                            <StyleClass
                                nodeRef={btnRef6}
                                selector="#slideover-3"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef6}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark Header"
                code={block4}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef7}
                    selector="#slideover-4"
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
                    id="slideover-4"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full"
                >
                    <div className="flex flex-column h-full">
                        <div className="flex align-items-start bg-gray-800 justify-content-between p-3">
                            <div>
                                <div className="text-white text-xl font-medium mb-1">
                                    Title Placeholder
                                </div>
                                <p className="m-0 p-0 line-height-3 text-gray-400 text-sm">
                                    Vitae turpis massa sed tempus egestas sed
                                    sed risus.
                                </p>
                            </div>
                            <div>
                                <StyleClass
                                    nodeRef={btnRef8}
                                    selector="#slideover-4"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutright"
                                >
                                    <Button
                                        ref={btnRef8}
                                        icon="pi pi-times"
                                        className="p-button-rounded p-button-text p-button-warning p-button-plain"
                                    />
                                </StyleClass>
                            </div>
                        </div>
                        <div className="m-4 border-2 border-round border-dashed surface-border flex-auto overflow-y-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Footer"
                code={block5}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef9}
                    selector="#slideover-5"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef9}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <div
                    id="slideover-5"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full"
                >
                    <div className="flex flex-column p-4 h-full w-18rem">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Title Placeholder
                            </span>
                            <StyleClass
                                nodeRef={btnRef10}
                                selector="#slideover-5"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef10}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
                        <div className="pt-3 border-top-1 surface-border mt-3 flex">
                            <StyleClass
                                nodeRef={btnRef11}
                                selector="#slideover-5"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef11}
                                    icon="pi pi-times"
                                    className="p-button-text mr-2 flex-auto"
                                    label="Cancel"
                                />
                            </StyleClass>
                            <StyleClass
                                nodeRef={btnRef12}
                                selector="#slideover-5"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef12}
                                    icon="pi pi-check"
                                    className="ml-2 flex-auto"
                                    label="Save"
                                />
                            </StyleClass>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Contacts"
                code={block6}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef13}
                    selector="#slideover-6"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef13}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>

                <div
                    id="slideover-6"
                    className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-20rem"
                >
                    <div className="flex flex-column h-full">
                        <div className="flex align-items-center justify-content-between p-4">
                            <div>
                                <div className="text-900 text-xl font-medium mb-1">
                                    Contacts
                                </div>
                                <p className="text-600 m-0">9 People</p>
                            </div>
                            <StyleClass
                                nodeRef={btnRef14}
                                selector="#slideover-6"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef14}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="flex-auto overflow-y-auto">
                            <ul className="list-none p-0 m-0">
                                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">
                                    A
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-m-1"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Aaron Flore
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Prime Coffee
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Annette Black
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Bank of Prime
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-m-2"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Abha Watson
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                PrimeCard
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">
                                    B
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-f-2"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Balcaz Cooper
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Prime Coffee
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-f-3"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Beatrix McKinney
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Bank of Prime
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-3.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-m-3"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Belva Wilson
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Franki Inc
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-4.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-m-4"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Barnes Fox
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Prime Electric
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="surface-100 font-medium text-xl px-4 py-1 mb-2">
                                    C
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-5.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-m-5"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Canyon Flores
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Ipsum Inc
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                    <Ripple />
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                            className="mr-3 flex-shrink-0"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            alt="avatar-f-4"
                                        />
                                        <div>
                                            <span className="text-900 font-medium mb-2">
                                                Carmen Cooper
                                            </span>
                                            <p className="m-0 text-600 text-sm">
                                                Lorem LLC
                                            </p>
                                        </div>
                                        <i className="ml-auto pi pi-chevron-right text-700"></i>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Profile"
                code={block7}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef15}
                    selector="#slideover-7"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef15}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <div
                    id="slideover-7"
                    className="hidden surface-overlay absolute top-0 right-0 shadow-2 w-20rem h-full"
                >
                    <div className="flex flex-column p-4 h-full">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Profile
                            </span>
                            <StyleClass
                                nodeRef={btnRef16}
                                selector="#slideover-7"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef16}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="flex-auto overflow-y-auto">
                            <div className="text-center mb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    style={{ width: "70px", height: "70px" }}
                                    alt="avatar-f-3"
                                />
                                <div className="text-900 mt-3 mb-2 text-xl font-medium">
                                    Isabel Rio
                                </div>
                                <span className="text-700">Sales Manager</span>
                            </div>
                            <div className="flex align-items-center mb-5">
                                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                                        <i className="pi pi-comment text-xl text-600"></i>
                                        <Ripple />
                                    </div>
                                    <span className="text-sm font-medium text-700">
                                        Message
                                    </span>
                                </a>
                                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                                        <i className="pi pi-phone text-xl text-600"></i>
                                        <Ripple />
                                    </div>
                                    <span className="text-sm font-medium text-700">
                                        Call
                                    </span>
                                </a>
                                <a className="flex flex-column flex-grow-1 align-items-center gap-2">
                                    <div className="p-ripple cursor-pointer border-round surface-100 hover:surface-200 transition-colors transition-duration-150 p-3 border-round-2xl">
                                        <i className="pi pi-video text-xl text-600"></i>
                                        <Ripple />
                                    </div>
                                    <span className="text-sm font-medium text-700">
                                        Video Call
                                    </span>
                                </a>
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mb-1">
                                    NAME
                                </li>
                                <li className="text-900 p-2">Isabel Rio</li>
                                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">
                                    MEMBER SINCE
                                </li>
                                <li className="text-900 p-2">23/10/2021</li>
                                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">
                                    LOCAL TIME
                                </li>
                                <li className="text-900 p-2">16:40</li>
                                <li className="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">
                                    RECENT ORDERS
                                </li>
                                <li>
                                    <ul className="list-none p-0 m-0">
                                        <li className="py-2 border-bottom-1 surface-border">
                                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                                <img
                                                    src="/demo/images/blocks/products/sport-shoe.png"
                                                    className="mr-3 flex-shrink-0"
                                                    style={{
                                                        width: "39px",
                                                        height: "39px",
                                                    }}
                                                    alt="sport-shoe"
                                                />
                                                <div>
                                                    <span className="block text-900 mb-1">
                                                        Sports Shoes
                                                    </span>
                                                    <p className="m-0 text-600 font-medium text-sm">
                                                        SRT30321
                                                    </p>
                                                </div>
                                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="py-2 border-bottom-1 surface-border">
                                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                                <img
                                                    src="/demo/images/blocks/products/dslr-camera.png"
                                                    className="mr-3 flex-shrink-0"
                                                    style={{
                                                        width: "39px",
                                                        height: "39px",
                                                    }}
                                                    alt="dslr-camera"
                                                />
                                                <div>
                                                    <span className="block text-900 mb-1">
                                                        DSRL Camera
                                                    </span>
                                                    <p className="m-0 text-600 font-medium text-sm">
                                                        OBS90211
                                                    </p>
                                                </div>
                                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a className="p-ripple cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                                <img
                                                    src="/demo/images/blocks/products/wireless-headphone.png"
                                                    className="mr-3 flex-shrink-0"
                                                    style={{
                                                        width: "39px",
                                                        height: "39px",
                                                    }}
                                                    alt="wireless-headphone"
                                                />
                                                <div>
                                                    <span className="block text-900 mb-1">
                                                        Headphone
                                                    </span>
                                                    <p className="m-0 text-600 font-medium text-sm">
                                                        APE302123
                                                    </p>
                                                </div>
                                                <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Steps"
                code={block8}
                containerClassName="flex align-items-start justify-content-start px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef17}
                    selector="#slideover-8"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinleft"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutleft"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef17}
                        label="Display"
                        icon="pi pi-arrow-right"
                    />
                </StyleClass>

                <div
                    id="slideover-8"
                    className="hidden surface-overlay h-full absolute top-0 left-0 shadow-2 w-18rem"
                >
                    <div className="flex flex-column h-full">
                        <div className="flex align-items-center justify-content-between mb-4 p-4">
                            <span className="text-900 text-xl font-medium">
                                Purchase Ticket
                            </span>
                            <StyleClass
                                nodeRef={btnRef18}
                                selector="#slideover-8"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutleft"
                            >
                                <Button
                                    ref={btnRef18}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="flex-auto overflow-y-auto">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center border-top-1 surface-border p-3">
                                    <span
                                        className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-700 font-medium">
                                        Personal Information
                                    </span>
                                </li>
                                <li className="flex align-items-center border-top-1 surface-border p-3">
                                    <span
                                        className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-700 font-medium">
                                        Destination
                                    </span>
                                </li>
                                <li className="flex align-items-center border-top-1 surface-border p-3">
                                    <span
                                        className="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <i className="pi pi-check"></i>
                                    </span>
                                    <span className="text-700 font-medium">
                                        Date
                                    </span>
                                </li>
                                <li className="border-top-1 surface-border p-3">
                                    <div className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle surface-900 text-0 text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent"
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                            }}
                                        >
                                            <i className="pi pi-table"></i>
                                        </span>
                                        <span className="text-900 font-medium font-bold">
                                            Seat
                                        </span>
                                    </div>
                                    <ul className="list-none p-0 m-0">
                                        <li className="flex align-items-center p-2">
                                            <i className="pi pi-check text-green-500"></i>
                                            <span className="text-600 ml-3">
                                                Choose Tier
                                            </span>
                                        </li>
                                        <li className="flex align-items-center p-2">
                                            <span className="text-900 ml-5 font-bold">
                                                Select Seat
                                            </span>
                                            <i className="pi pi-arrow-right text-900 ml-auto"></i>
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex align-items-center border-top-1 surface-border p-3">
                                    <span
                                        className="border-circle text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <i className="pi pi-credit-card text-700"></i>
                                    </span>
                                    <span className="text-700 font-medium">
                                        Payment
                                    </span>
                                </li>
                                <li className="flex align-items-center border-top-1 surface-border p-3">
                                    <span
                                        className="border-circle text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <i className="pi pi-thumbs-up text-700"></i>
                                    </span>
                                    <span className="text-700 font-medium">
                                        Confirmation
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Chat"
                code={block9}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef19}
                    selector="#slideover-9"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef19}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>

                <div
                    id="slideover-9"
                    className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-30rem"
                >
                    <div className="flex flex-column h-full">
                        <div className="flex align-items-center justify-content-between p-4">
                            <span className="flex align-items-center">
                                <img
                                    src={`/demo/images/blocks/avatars/circle/avatar-${users[user].picture}`}
                                    className="mr-3 flex-shrink-0"
                                    style={{ width: "42px", height: "42px" }}
                                    alt="avatar"
                                />
                                <span className="text-900 text-xl font-medium">
                                    {users[user].name}
                                </span>
                            </span>
                            <StyleClass
                                nodeRef={btnRef20}
                                selector="#slideover-9"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef20}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <div className="flex border-top-1 surface-border flex-auto">
                            <div
                                style={{ width: "70px" }}
                                className="flex border-right-1 surface-border flex-shrink-0"
                            >
                                <ul className="flex flex-column list-none p-0 m-0 w-full">
                                    {users.map((usr, i) => {
                                        return (
                                            <li key={i}>
                                                <a
                                                    className={classNames(
                                                        "p-ripple cursor-pointer flex align-items-center justify-content-center border-right-2 border-transparent p-2 hover:border-300 transition-colors transition-duration-150",
                                                        {
                                                            "border-blue-500 surface-200":
                                                                i === user,
                                                        }
                                                    )}
                                                    onClick={() => setUser(i)}
                                                >
                                                    <img
                                                        src={`/demo/images/blocks/avatars/circle/avatar-${users[i].picture}`}
                                                        className="flex-shrink-0"
                                                        style={{
                                                            width: "42px",
                                                            height: "42px",
                                                        }}
                                                        alt="avatar"
                                                    />
                                                    <Ripple />
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="flex flex-auto flex-column overflow-y-auto surface-ground">
                                {user === 2 && (
                                    <ul className="flex-auto list-none p-0 m-0">
                                        <li className="flex justify-content-end p-3">
                                            <div>
                                                <p
                                                    className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2"
                                                    style={{
                                                        maxWidth: "275px",
                                                    }}
                                                >
                                                    Neque vitae tempus quam
                                                    pellentesque nec nam aliquam
                                                    sem. Etiam tempor orci eu
                                                    lobortis elementum.
                                                </p>
                                                <div className="text-right text-500 text-sm">
                                                    14:43
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex justify-content-start p-3">
                                            <div>
                                                <p
                                                    className="shadow-2 surface-card text-900 p-3 line-height-3 border-round mt-0 mb-2"
                                                    style={{
                                                        maxWidth: "275px",
                                                    }}
                                                >
                                                    Ultricies mi eget mauris
                                                    pharetra et ultrices neque.
                                                    Et odio pellentesque diam
                                                    volutpat.
                                                </p>
                                                <div className="text-right text-500 text-sm">
                                                    14:45
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex justify-content-end p-3">
                                            <div>
                                                <p
                                                    className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2"
                                                    style={{
                                                        maxWidth: "275px",
                                                    }}
                                                >
                                                    Neque vitae tempus quam
                                                    pellentesque nec nam aliquam
                                                    sem. Etiam tempor orci eu
                                                    lobortis elementum.
                                                </p>
                                                <p
                                                    className="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2"
                                                    style={{
                                                        maxWidth: "275px",
                                                    }}
                                                >
                                                    Imperdiet dui accumsan sit.
                                                </p>
                                                <div className="text-right text-500 text-sm">
                                                    14:50
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                                {user !== 2 && (
                                    <ul className="flex-auto list-none p-0 m-0">
                                        <li className="flex p-3">
                                            <p className="flex align-items-center shadow-2 border-round bg-yellow-100 text-yellow-900 m-0 p-3 w-full">
                                                <i className="pi pi-lock mr-3"></i>
                                                <span className="line-height-3">
                                                    Messages are end-to-end
                                                    encrypted. No one expect you
                                                    and receiver can read them.
                                                    None of messages are saved
                                                    to our servers.
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                )}
                                <div className="p-4 border-top-1 surface-border p-input-filled">
                                    <span className="p-input-icon-right block">
                                        <i className="pi pi-send"></i>
                                        <InputText
                                            className="p-3 w-full"
                                            placeholder="Type..."
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Tabs"
                code={block10}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
            >
                <StyleClass
                    nodeRef={btnRef21}
                    selector="#slideover-10"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef21}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <div
                    id="slideover-10"
                    className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-24rem"
                >
                    <div className="flex flex-column p-4 h-full">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-900 text-xl font-medium">
                                Orders
                            </span>
                            <StyleClass
                                nodeRef={btnRef22}
                                selector="#slideover-10"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutright"
                            >
                                <Button
                                    ref={btnRef22}
                                    icon="pi pi-times"
                                    className="p-button-rounded p-button-text p-button-plain"
                                />
                            </StyleClass>
                        </div>
                        <TabView>
                            <TabPanel header="Processed">
                                <ul className="list-none p-0 m-0">
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/speaker.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="speaker"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Bluetooth Speaker
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #99812
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/gaming.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="gaming"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Gaming Device
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #60210
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/skateboard.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="avatar"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Skateboard
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #40197
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/wax.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="wax"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Strong Wax
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #47082
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/juice.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="avatar"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Berry Juice
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #59901
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/sport-shoe.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="sport-shoe"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Sports Shoe
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #47122
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </TabPanel>

                            <TabPanel header="Pending">
                                <ul className="list-none p-0 m-0">
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/running-shoe.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="running-shoe"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Running Shoes
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #99210
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/instant-camera.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="instant-camera"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Instant Camera
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #55018
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/sunglasses.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="sunglasses"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Sunglasses
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #18880
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/dslr-camera.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="dslr-camera"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    DSLR Camera
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #9402
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </TabPanel>

                            <TabPanel header="Completed">
                                <ul className="list-none p-0 m-0">
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/cupcake.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="cupcake"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Bluetooth Speaker
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #49991
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/wireless-headphone.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="wireless-headphone"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Gaming Device
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #9921
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/perfume.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="perfume"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Perfume
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #7502
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/model-car.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="model-car"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Model Car
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #47082
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-bottom-1 surface-border py-2">
                                        <a className="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                                            <img
                                                src="/demo/images/blocks/products/spoons.png"
                                                className="mr-3 flex-shrink-0"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                }}
                                                alt="spoons"
                                            />
                                            <div>
                                                <span className="block text-900 mb-1">
                                                    Spoon Set
                                                </span>
                                                <p className="m-0 text-600 font-medium text-sm">
                                                    #10002
                                                </p>
                                            </div>
                                            <i className="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Tabs"
                code={block11}
                containerClassName="flex align-items-start justify-content-end px-4 py-8 md:px-6 lg:px-8 relative overflow-hidden"
                previewStyle={{ height: "100vh" }}
                new
            >
                <StyleClass
                    nodeRef={btnRef23}
                    selector="#slideover-11"
                    enterClassName="hidden"
                    enterActiveClassName="fadeinright"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeoutright"
                    hideOnOutsideClick
                >
                    <Button
                        ref={btnRef23}
                        label="Display"
                        icon="pi pi-arrow-left"
                    />
                </StyleClass>
                <section
                    id="slideover-11"
                    className="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-24rem"
                >
                    <div className="flex flex-column justify-content-between h-full">
                        <form>
                            <div className="flex align-items-start bg-blue-700 justify-content-between p-3 mb-4">
                                <header>
                                    <h1 className="text-0 mt-0 text-xl font-medium mb-1 text-white">
                                        Title Placeholder
                                    </h1>
                                    <h2 className="m-0 p-0 line-height-3 font-normal text-primary-200 text-sm">
                                        Nunc mi ipsum faucibus vitae aliquet
                                        nec. Lacus sed viverra tellus in hac
                                        habitasse.
                                    </h2>
                                </header>
                                <StyleClass
                                    nodeRef={btnRef24}
                                    selector="#slideover-11"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutright"
                                >
                                    <div>
                                        <Button
                                            ref={btnRef24}
                                            icon="pi pi-times"
                                            className="p-button p-button-rounded p-button-text text-white-alpha-70 p-button-plain hover:bg-blue-500"
                                        />
                                    </div>
                                </StyleClass>
                            </div>
                            <div className="px-4">
                                <h3 className="text-base font-semibold mt-0 mb-0 text-color">
                                    Project Name
                                </h3>
                                <div className="p-inputgroup mt-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-file"></i>
                                    </span>
                                    <InputText type={"text"} />
                                </div>
                            </div>
                            <div className="px-4 mt-4">
                                <h3 className="text-base font-semibold text-color mt-0 mb-0">
                                    Tags
                                </h3>
                                <div className="mt-2 p-fluid">
                                    <Chips
                                        value={value}
                                        onChange={(e) => setValue(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 mt-4">
                                <h3 className="text-base font-semibold text-color mt-0 mb-0">
                                    Team Members
                                </h3>
                                <div className="mt-3 flex gap-3">
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        value="4"
                                        size="large"
                                        className="p-overlay-badge"
                                    >
                                        <Badge value="4" severity="help" />
                                    </Avatar>
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                        value="8"
                                        size="large"
                                        className="p-overlay-badge"
                                    >
                                        <Badge value="8" severity="help" />
                                    </Avatar>
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                        value="9"
                                        size="large"
                                        className="p-overlay-badge"
                                    >
                                        <Badge value="9" severity="help" />
                                    </Avatar>
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                        value="3"
                                        size="large"
                                        className="p-overlay-badge"
                                    >
                                        <Badge value="3" severity="help" />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="px-4 mt-4">
                                <h3 className="text-base font-semibold text-color">
                                    Newsletter Permissions
                                </h3>
                                <div className="mt-3 flex align-items-center gap-3">
                                    <InputSwitch
                                        className="flex"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    ></InputSwitch>
                                    <p className="mt-0 mb-0 text-base text-color">
                                        Allow sending Marketing emails
                                    </p>
                                </div>
                                <div className="mt-3 flex align-items-center gap-3">
                                    <InputSwitch
                                        className="flex"
                                        checked={checked2}
                                        onChange={(e) => setChecked2(e.value)}
                                    ></InputSwitch>
                                    <p className="mt-0 mb-0 text-base">
                                        Allow sending Release emails
                                    </p>
                                </div>
                                <div className="mt-3 flex align-items-center gap-3">
                                    <InputSwitch
                                        className="flex"
                                        checked={checked3}
                                        onChange={(e) => setChecked3(e.value)}
                                    ></InputSwitch>
                                    <p className="mt-0 mb-0 text-base">
                                        Allow sending Notification emails
                                    </p>
                                </div>
                            </div>
                        </form>
                        <div className="mx-4 py-4 border-top-1 surface-border flex">
                            <Button className="w-full">
                                <span className="w-full flex justify-content-center align-items-center gap-3 ">
                                    <i className="pi pi-send"></i>
                                    <span className="font-bold">
                                        Submit Project
                                    </span>
                                </span>
                            </Button>
                        </div>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default SlideOver;
