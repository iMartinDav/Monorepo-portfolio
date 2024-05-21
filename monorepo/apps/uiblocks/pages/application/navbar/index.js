import React, { useRef } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const NavBarApp = () => {
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
    const btnRef25 = useRef(null);
    const btnRef26 = useRef(null);
    const btnRef27 = useRef(null);
    const btnRef28 = useRef(null);
    const btnRef29 = useRef(null);
    const btnRef30 = useRef(null);
    const btnRef31 = useRef(null);
    const btnRef32 = useRef(null);

    const block1 = `
<div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
    <img src="/demo/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6" />
    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef1} className="cursor-pointer block lg:hidden text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li className="lg:relative">
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Add New</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef3} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">Search</span>
                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-shopping-cart mr-2"></i>
                                    <span className="font-medium">Purchases</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none">
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                    <div className="block lg:hidden">
                        <div className="text-900 font-medium">Josephine Lillard</div>
                        <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block2 = `
<div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800" style={{ minHeight: '84px' }}>
    <img src="/demo/images/blocks/logos/bastion-300.svg" alt="bastion-300" height={40} className="mr-0 lg:mr-6" />
    <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef4} className="p-ripple cursor-pointer block lg:hidden text-gray-400">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef5} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full w">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Add New</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef6} className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">Search</span>
                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-shopping-cart mr-2"></i>
                                    <span className="font-medium">Purchases</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />

                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li className="flex-order-2 lg:flex-order-0">
                <a className="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search text-gray-400"></i>
                        <InputText type="text" placeholder="Search" className="bg-gray-800 text-gray-400 border-gray-800 w-full" />
                    </span>
                </a>
            </li>
            <li className="border-top-1 border-gray-800 lg:border-top-none">
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                    <div className="block lg:hidden">
                        <div className="text-white font-medium">Josephine Lillard</div>
                        <span className="text-gray-400 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block3 = `
<div className="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style={{ minHheight: '84px' }}>
    <img src="/demo/images/blocks/logos/bastion-300.svg" alt="bastion-300" height={40} className="mr-0 lg:mr-6" />
    <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef7} className="p-ripple cursor-pointer block lg:hidden text-indigo-100">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef8} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Add New</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef9} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">Search</span>
                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-shopping-cart mr-2"></i>
                                    <span className="font-medium">Purchases</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li className="flex-order-2 lg:flex-order-0">
                <a className="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search text-indigo-100"></i>
                        <InputText type="text" className="bg-indigo-400 text-indigo-100 border-indigo-400 w-full" />
                    </span>
                </a>
            </li>
            <li className="border-top-1 border-indigo-400 lg:border-top-none">
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                    <div className="block lg:hidden">
                        <div className="text-white font-medium">Josephine Lillard</div>
                        <span className="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-overlay px-6 shadow-2 flex justify-content-between relative lg:static" style={{ minHeight: '84px' }}>
    <img src="/demo/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6 align-self-center" />
    <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef10} className="p-ripple cursor-pointer block lg:hidden align-self-center text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none">
                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                    <div className="block lg:hidden">
                        <div className="text-900 font-medium">Josephine Lillard</div>
                        <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block5 = `
<div className="bg-indigo-600 shadow-2 flex relative lg:static" style={{ minHeight: '84px' }}>
    <div className="flex align-items-center justify-content-center px-5 bg-indigo-500">
        <img src="/demo/images/blocks/logos/bastion.svg" alt="Image" height="40" />
    </div>
    <div className="flex flex-1 px-3">
        <span className="flex align-items-center">
            <i className="pi pi-search text-indigo-100"></i>
        </span>
        <input type="text" className="appearance-none border-none flex-auto bg-transparent outline-none p-component text-indigo-300 pl-3" />
    </div>
    <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef11} className="p-ripple cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-indigo-600">
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-indigo-500 lg:border-top-none">
            <li>
                <a className="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="p-ripple pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="p-ripple pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 border-indigo-500 lg:border-top-none">
                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} alt="avatar-f-4" />
                    <div className="block lg:hidden">
                        <div className="text-indigo-50 font-medium">Josephine Lillard</div>
                        <span className="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block6 = `
<div className="bg-gray-900 shadow-2 flex relative lg:static" style={{ minHeight: '84px' }}>
    <div className="flex align-items-center justify-content-center px-5 bg-gray-800">
        <img src="/demo/images/blocks/logos/bastion.svg" alt="Image" height="40" />
    </div>
    <div className="flex flex-1 px-3">
        <span className="flex align-items-center">
            <i className="pi pi-search text-gray-500"></i>
        </span>
        <input type="text" className="appearance-none border-none flex-auto bg-transparent outline-none p-component text-gray-500 pl-3" placeholder="Search for anything" />
    </div>
    <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef12} className="p-ripple cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5" >
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-gray-900">
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
            <li>
                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 border-gray-800 lg:border-top-none">
                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="/demo/images/blocks/avatars/circle/avatar-m-3.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} alt="avatar-m-3"/>
                    <div className="block lg:hidden">
                        <div className="text-gray-500 font-medium">Josephine Lillard</div>
                        <span className="text-gray-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block7 = `
<div className="px-6 surface-overlay relative">
    <div className="py-3 lg:py-3 flex align-items-center justify-content-between lg:static">
        <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
        <div className="flex align-items-center">
            <StyleClass nodeRef={btnRef13} selector="#navbar-sub-7" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef13} className="p-ripple cursor-pointer block lg:hidden text-700 mr-5" >
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <StyleClass nodeRef={btnRef14} selector="#navbar-7" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef14} className="p-ripple cursor-pointer block lg:hidden text-700" >
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
        </div>
        <div id="navbar-sub-7" className="hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} alt="avatar-f-1" />
                        <div className="block lg:hidden">
                            <div className="text-900 font-medium">Josephine Lillard</div>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="navbar-7" className="py-3 hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 border-top-1 surface-border">
        <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
            <li>
                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li className="lg:relative">
                <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef15} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Add New</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef16} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" >
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">Search</span>
                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i className="pi pi-shopping-cart mr-2"></i>
                                    <span className="font-medium">Purchases</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block8 = `
<div className="bg-gray-900 relative px-6">
    <div className="py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none lg:border-bottom-1 border-gray-800" style={{ minHeight: '81px' }}>
        <img src="/demo/images/blocks/logos/bastion-300.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
        <div className="flex align-items-center">
            <StyleClass nodeRef={btnRef17} selector="#navbar-sub-8" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef17} className="p-ripple cursor-pointer block lg:hidden text-gray-400 mr-5" >
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <StyleClass nodeRef={btnRef18} selector="#navbar-8" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef18} className="p-ripple cursor-pointer block lg:hidden text-gray-400">
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
        </div>
        <div id="navbar-sub-8" className="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 border-gray-800 lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} />
                        <div className="block lg:hidden">
                            <div className="text-gray-400 font-medium">Josephine Lillard</div>
                            <span className="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="navbar-8" className="py-2 px-6 lg:px-0 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2">
        <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
            <li>
                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li className="lg:relative">
                <StyleClass nodeRef={btnRef19} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef19} className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Add New</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef20} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef20} className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">Search</span>
                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i className="pi pi-shopping-cart mr-2"></i>
                                    <span className="font-medium">Purchases</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block9 = `
<div className="relative">
    <div className="bg-gray-900 px-6 py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none" style={{ minHeight: '81px' }}>
        <img src="/demo/images/blocks/logos/bastion-300.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
        <StyleClass nodeRef={btnRef21} selector="#navbar-sub-9" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef21} className="p-ripple cursor-pointer block lg:hidden text-gray-400" >
                <i className="pi pi-ellipsis-v text-2xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <div id="navbar-sub-9" className="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 border-gray-800 lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} />
                        <div className="block lg:hidden">
                            <div className="text-gray-400 font-medium">Josephine Lillard</div>
                            <span className="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex" style={{ minHeight: '66px' }}>
        <StyleClass nodeRef={btnRef22} selector="#dashboards" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
            <div ref={btnRef22} className="cursor-pointer flex bg-indigo-700 px-6 py-2 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative">
                <span className="border-round bg-orange-400 text-gray-900 inline-flex align-items-center justify-content-center flex-shrink-0 mr-3" style={{ width: '40px', height: '40px' }}>AD</span>
                <div className="hidden lg:block select-none">
                    <span className="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">Analytics Dashboard</span>
                    <p className="m-0 text-indigo-200">5 New Actions</p>
                </div>
                <i className="pi pi-chevron-down text-indigo-200 ml-3 lg:ml-5"></i>
                <div id="dashboards" className="hidden absolute left-0 top-100 shadow-2 bg-indigo-700 border-round-bottom w-full origin-top">
                    <ul className="list-none m-0 px-0 lg:px-6 py-3">
                        <li>
                            <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                                <i className="pi pi-shopping-cart mr-2"></i>
                                <span className="font-medium">Sales</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                                <i className="pi pi-users mr-2"></i>
                                <span className="font-medium">Users</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </StyleClass>
        <div className="bg-indigo-500 flex-1 flex align-items-center">
            <StyleClass nodeRef={btnRef23} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef23} className="p-ripple cursor-pointer block xl:hidden text-indigo-100 ml-auto mr-6">
                    <i className="pi pi-bars text-4xl"></i>
                </a>
            </StyleClass>
            <div className="xl:block hidden absolute xl:static bg-indigo-500 w-full left-0 top-100 z-1 shadow-2">
                <ul className="list-none py-2 px-6 m-0 flex xl:align-items-center flex-column xl:flex-row select-none">
                    <li>
                        <a className="p-ripple flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-home mr-2"></i>
                            <span>Home</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="xl:relative">
                        <StyleClass nodeRef={btnRef24} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef24} className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                <i className="pi pi-users mr-2"></i>
                                <span>Customers</span>
                                <i className="pi pi-angle-down ml-auto xl:ml-3"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-user-plus mr-2"></i>
                                    <span className="font-medium">Add New</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <StyleClass nodeRef={btnRef25} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef25} className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" >
                                        <i className="pi pi-search mr-2"></i>
                                        <span className="font-medium">Search</span>
                                        <i className="pi pi-angle-down ml-auto xl:-rotate-90"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer left-100 top-0">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                            <i className="pi pi-shopping-cart mr-2"></i>
                                            <span className="font-medium">Purchases</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-calendar mr-2"></i>
                            <span>Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span>Stats</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-top-1 xl:border-left-1 my-3 xl:my-0 xl:border-top-none border-indigo-400 xl:ml-auto pl-3">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search text-indigo-200"></i>
                            <input type="text" className="bg-transparent appearance-none border-none py-3 pr-3 pl-5 p-component text-indigo-200 outline-none w-full" />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;

    const block10 = `
<div className="bg-indigo-500 px-6 shadow-2 flex relative lg:static" style={{ minHeight: '75px' }}>
    <StyleClass nodeRef={btnRef26} selector="#profile-10" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
        <div ref={btnRef26} className="cursor-pointer flex p-3 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative select-none">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" className="lg:mr-3" style={{ width: '40px', height: '40px' }} alt="avatar-f-6"/>
            <div className="hidden lg:block">
                <span className="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">Kristin Watson</span>
                <p className="m-0 text-indigo-200">Manager</p>
            </div>
            <i className="pi pi-chevron-down text-indigo-200 ml-3 hidden lg:block"></i>
            <div id="profile-10" className="hidden absolute left-0 top-100 shadow-2 bg-indigo-600 border-round-bottom w-15rem lg:w-full origin-top">
                <ul className="list-none m-0 p-3">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                            <i className="pi pi-sign-out mr-2"></i>
                            <span className="font-medium">Sign Out</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </StyleClass>
    <div className="flex-auto flex pl-5 overflow-auto">
        <ul className="flex list-none p-0 m-0">
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i className="pi pi-home text-2xl"></i>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i className="pi pi-users text-2xl"></i>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i className="pi pi-calendar text-2xl"></i>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i className="pi pi-folder text-2xl"></i>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i className="pi pi-chart-line text-2xl"></i>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
    <div className="flex ml-5">
        <StyleClass nodeRef={btnRef27} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef27} className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-white">
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <div className="lg:block hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto bg-indigo-500">
            <ul className="h-full list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                <li>
                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-search lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Search</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-inbox lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block11 = `
<div className="surface-overlay shadow-2 flex relative lg:static justify-content-between" style={{ minHeight: '42px' }}>
    <StyleClass nodeRef={btnRef28} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef28} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700">
            <i className="pi pi-bars text-2xl"></i>
        </a>
    </StyleClass>
    <div className="hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-blue-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-home mr-2"></span>
                    <span className="font-medium">Home</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-users mr-2"></span>
                    <span className="font-medium">Customers</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-calendar mr-2"></span>
                    <span className="font-medium">Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-home mr-2"></span>
                    <span className="font-medium">Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
    <StyleClass nodeRef={btnRef29} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef29} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700">
            <i className="pi pi-ellipsis-v text-xl"></i>
        </a>
    </StyleClass>
    <div className="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span className="pi pi-book mr-2 lg:mr-0"></span>
                    <span className="font-medium inline lg:hidden">Documentation</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span className="pi pi-inbox mr-2 lg:mr-0"></span>
                    <span className="font-medium inline lg:hidden">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full">
                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span className="pi pi-bell mr-2 lg:mr-0"></span>
                    <span className="font-medium inline lg:hidden">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="h-full relative">
                <StyleClass nodeRef={btnRef30} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef30} className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="lg:mr-0" style={{ width: '28px', height: '28px' }} />
                        <span className="mx-2 font-medium text-900">Jane Sanders</span>
                        <i className="pi pi-angle-down"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-1 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                    <ul className="list-none p-0 m-0">
                        <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-user mr-2"></span>
                                <span className="font-medium">Profile</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-cog mr-2"></span>
                                <span className="font-medium">Settings</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-sign-out mr-2"></span>
                                <span className="font-medium">Sign Out</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>
    `;

    const block12 = `
<nav className="surface-section py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 surface-border" style={{ minHeight: '84px' }}>
    <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
    <StyleClass nodeRef={btnRef31} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef31} className="p-ripple cursor-pointer block lg:hidden text-600">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none surface-border">
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-home mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Home</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef32} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef32} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-comments mr-2 lg:mr-0"></i>
                        <span className="font-medium lg:hidden">Comments</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 hidden border-round shadow-0 lg:shadow-2 lg:absolute surface-section origin-top w-full lg:w-15rem cursor-pointer lg:border-1 surface-border z-2">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:surface-hover hover:text-blue-500 lg:border-round transition-colors transition-duration-150">
                            <i className="pi pi-comment mr-2"></i>
                            <span className="font-medium">View all</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:surface-hover hover:text-blue-500 lg:border-round transition-colors transition-duration-150">
                            <i className="pi pi-search mr-2"></i>
                            <span className="font-medium">Search</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-heart mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Favorites</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-calendar mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-bolt mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Likes</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row flex-grow-1">
            <li className="flex-order-2 lg:flex-order-0 flex-grow-1">
                <div className="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search text-600"></i>
                        <InputText type="text" placeholder="Search" className="surface-section text-600 surface-border w-full" />
                    </span>
                </div>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150 mr-2">
                    <i className="pi pi-bell mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150 mr-2">
                    <i className="pi pi-cog mr-2 lg:mr-0"></i>
                    <span className="font-medium lg:hidden">Settings</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="hidden lg:flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-green-600 bg-green-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 mr-2">Available</a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none flex-grow-0">
                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center font-medium border-round cursor-pointer">
                    <img
                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                        className="mr-3 lg:mr-0"
                        style={{
                            width: '28px',
                            height: '28px'
                        }}
                    />
                    <div className="flex align-items-center lg:hidden">
                        <div className="mr-3">
                            <p className="text-900 font-medium mb-0 mt-0">Josephine Lillard</p>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <a className="flex px-3 py-2 align-items-center text-green-600 bg-green-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">Available</a>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</nav>
    `;

    return (
        <>
            <div className="block-category-title">Navigation Bar</div>
            <BlockViewer header="With Branding" code={block1}>
                <div
                    className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"
                    style={{ minHeight: "80px" }}
                >
                    <img
                        src="/demo/images/blocks/logos/bastion-700.svg"
                        alt="bastion-700"
                        height={40}
                        className="mr-0 lg:mr-6"
                    />
                    <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef1}
                            className="cursor-pointer block lg:hidden text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="lg:relative">
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
                                        className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span>Customers</span>
                                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-user-plus mr-2"></i>
                                            <span className="font-medium">
                                                Add New
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef3}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef3}
                                                className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full"
                                            >
                                                <i className="pi pi-search mr-2"></i>
                                                <span className="font-medium">
                                                    Search
                                                </span>
                                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-shopping-cart mr-2"></i>
                                                    <span className="font-medium">
                                                        Purchases
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" />
                                    </i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none">
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-900 font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-600 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Background" code={block2}>
                <div
                    className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800"
                    style={{ minHeight: "84px" }}
                >
                    <img
                        src="/demo/images/blocks/logos/bastion-300.svg"
                        alt="bastion-300"
                        height={40}
                        className="mr-0 lg:mr-6"
                    />
                    <StyleClass
                        nodeRef={btnRef4}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef4}
                            className="p-ripple cursor-pointer block lg:hidden text-gray-400"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass
                                    nodeRef={btnRef5}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef5}
                                        className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span>Customers</span>
                                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full w">
                                            <i className="pi pi-user-plus mr-2"></i>
                                            <span className="font-medium">
                                                Add New
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef6}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef6}
                                                className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full"
                                            >
                                                <i className="pi pi-search mr-2"></i>
                                                <span className="font-medium">
                                                    Search
                                                </span>
                                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-shopping-cart mr-2"></i>
                                                    <span className="font-medium">
                                                        Purchases
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li className="flex-order-2 lg:flex-order-0">
                                <a className="flex px-6 p-3 lg:px-3 lg:py-2">
                                    <span className="p-input-icon-left w-full">
                                        <i className="pi pi-search text-gray-400"></i>
                                        <InputText
                                            type="text"
                                            placeholder="Search"
                                            className="bg-gray-800 text-gray-400 border-gray-800 w-full"
                                        />
                                    </span>
                                </a>
                            </li>
                            <li className="border-top-1 border-gray-800 lg:border-top-none">
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-white font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-gray-400 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored Background" code={block3}>
                <div
                    className="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"
                    style={{ minHheight: "84px" }}
                >
                    <img
                        src="/demo/images/blocks/logos/bastion-300.svg"
                        alt="bastion-300"
                        height={40}
                        className="mr-0 lg:mr-6"
                    />
                    <StyleClass
                        nodeRef={btnRef7}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef7}
                            className="p-ripple cursor-pointer block lg:hidden text-indigo-100"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass
                                    nodeRef={btnRef8}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef8}
                                        className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span>Customers</span>
                                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-user-plus mr-2"></i>
                                            <span className="font-medium">
                                                Add New
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef9}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef9}
                                                className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full"
                                            >
                                                <i className="pi pi-search mr-2"></i>
                                                <span className="font-medium">
                                                    Search
                                                </span>
                                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-shopping-cart mr-2"></i>
                                                    <span className="font-medium">
                                                        Purchases
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li className="flex-order-2 lg:flex-order-0">
                                <a className="flex px-6 p-3 lg:px-3 lg:py-2">
                                    <span className="p-input-icon-left w-full">
                                        <i className="pi pi-search text-indigo-100"></i>
                                        <InputText
                                            type="text"
                                            className="bg-indigo-400 text-indigo-100 border-indigo-400 w-full"
                                        />
                                    </span>
                                </a>
                            </li>
                            <li className="border-top-1 border-indigo-400 lg:border-top-none">
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-white font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-indigo-100 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Hover Borders" code={block4}>
                <div
                    className="surface-overlay px-6 shadow-2 flex justify-content-between relative lg:static"
                    style={{ minHeight: "84px" }}
                >
                    <img
                        src="/demo/images/blocks/logos/bastion-700.svg"
                        alt="bastion-700"
                        height={40}
                        className="mr-0 lg:mr-6 align-self-center"
                    />
                    <StyleClass
                        nodeRef={btnRef10}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef10}
                            className="p-ripple cursor-pointer block lg:hidden align-self-center text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span>Customers</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" />
                                    </i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none">
                                <a className="p-ripple flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150 w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-900 font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-600 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Icon and Full Height on Color"
                code={block5}
                previewStyle={{ height: "400px" }}
            >
                <div
                    className="bg-indigo-600 shadow-2 flex relative lg:static"
                    style={{ minHeight: "84px" }}
                >
                    <div className="flex align-items-center justify-content-center px-5 bg-indigo-500">
                        <img
                            src="/demo/images/blocks/logos/bastion.svg"
                            alt="Image"
                            height="40"
                        />
                    </div>
                    <div className="flex flex-1 px-3">
                        <span className="flex align-items-center">
                            <i className="pi pi-search text-indigo-100"></i>
                        </span>
                        <input
                            type="text"
                            className="appearance-none border-none flex-auto bg-transparent outline-none p-component text-indigo-300 pl-3"
                        />
                    </div>
                    <StyleClass
                        nodeRef={btnRef11}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef11}
                            className="p-ripple cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-indigo-600">
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-indigo-500 lg:border-top-none">
                            <li>
                                <a className="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="p-ripple pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="p-ripple pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" />
                                    </i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 border-indigo-500 lg:border-top-none">
                                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-4"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-indigo-50 font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-indigo-100 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Icon and Full Height on Dark"
                code={block6}
                previewStyle={{ height: "400px" }}
            >
                <div
                    className="bg-gray-900 shadow-2 flex relative lg:static"
                    style={{ minHeight: "84px" }}
                >
                    <div className="flex align-items-center justify-content-center px-5 bg-gray-800">
                        <img
                            src="/demo/images/blocks/logos/bastion.svg"
                            alt="Image"
                            height="40"
                        />
                    </div>
                    <div className="flex flex-1 px-3">
                        <span className="flex align-items-center">
                            <i className="pi pi-search text-gray-500"></i>
                        </span>
                        <input
                            type="text"
                            className="appearance-none border-none flex-auto bg-transparent outline-none p-component text-gray-500 pl-3"
                            placeholder="Search for anything"
                        />
                    </div>
                    <StyleClass
                        nodeRef={btnRef12}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef12}
                            className="p-ripple cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-gray-900">
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
                            <li>
                                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" />
                                    </i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 border-gray-800 lg:border-top-none">
                                <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-m-3.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-m-3"
                                    />
                                    <div className="block lg:hidden">
                                        <div className="text-gray-500 font-medium">
                                            Josephine Lillard
                                        </div>
                                        <span className="text-gray-600 font-medium text-sm">
                                            Marketing Specialist
                                        </span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="2 Levels"
                code={block7}
                previewStyle={{ height: "400px" }}
            >
                <div className="px-6 surface-overlay relative">
                    <div className="py-3 lg:py-3 flex align-items-center justify-content-between lg:static">
                        <img
                            src="/demo/images/blocks/logos/bastion-700.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6"
                        />
                        <div className="flex align-items-center">
                            <StyleClass
                                nodeRef={btnRef13}
                                selector="#navbar-sub-7"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef13}
                                    className="p-ripple cursor-pointer block lg:hidden text-700 mr-5"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <StyleClass
                                nodeRef={btnRef14}
                                selector="#navbar-7"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef14}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                        </div>
                        <div
                            id="navbar-sub-7"
                            className="hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
                        >
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <div className="block lg:hidden">
                                            <div className="text-900 font-medium">
                                                Josephine Lillard
                                            </div>
                                            <span className="text-600 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="navbar-7"
                        className="py-3 hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 border-top-1 surface-border"
                    >
                        <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="lg:relative">
                                <StyleClass
                                    nodeRef={btnRef15}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef15}
                                        className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span>Customers</span>
                                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                            <i className="pi pi-user-plus mr-2"></i>
                                            <span className="font-medium">
                                                Add New
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef16}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef16}
                                                className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-search mr-2"></i>
                                                <span className="font-medium">
                                                    Search
                                                </span>
                                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                                    <i className="pi pi-shopping-cart mr-2"></i>
                                                    <span className="font-medium">
                                                        Purchases
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="2 Levels on Dark"
                code={block8}
                previewStyle={{ height: "400px" }}
            >
                <div className="bg-gray-900 relative px-6">
                    <div
                        className="py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none lg:border-bottom-1 border-gray-800"
                        style={{ minHeight: "81px" }}
                    >
                        <img
                            src="/demo/images/blocks/logos/bastion-300.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6"
                        />
                        <div className="flex align-items-center">
                            <StyleClass
                                nodeRef={btnRef17}
                                selector="#navbar-sub-8"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef17}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-400 mr-5"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <StyleClass
                                nodeRef={btnRef18}
                                selector="#navbar-8"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef18}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-400"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                        </div>
                        <div
                            id="navbar-sub-8"
                            className="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none"
                        >
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 border-gray-800 lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <div className="block lg:hidden">
                                            <div className="text-gray-400 font-medium">
                                                Josephine Lillard
                                            </div>
                                            <span className="text-gray-500 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="navbar-8"
                        className="py-2 px-6 lg:px-0 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2"
                    >
                        <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="lg:relative">
                                <StyleClass
                                    nodeRef={btnRef19}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef19}
                                        className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span>Customers</span>
                                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                            <i className="pi pi-user-plus mr-2"></i>
                                            <span className="font-medium">
                                                Add New
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef20}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef20}
                                                className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-search mr-2"></i>
                                                <span className="font-medium">
                                                    Search
                                                </span>
                                                <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                                    <i className="pi pi-shopping-cart mr-2"></i>
                                                    <span className="font-medium">
                                                        Purchases
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="MultiColored Levels with Dropdown"
                code={block9}
                previewStyle={{ height: "400px" }}
            >
                <div className="relative">
                    <div
                        className="bg-gray-900 px-6 py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none"
                        style={{ minHeight: "81px" }}
                    >
                        <img
                            src="/demo/images/blocks/logos/bastion-300.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6"
                        />
                        <StyleClass
                            nodeRef={btnRef21}
                            selector="#navbar-sub-9"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef21}
                                className="p-ripple cursor-pointer block lg:hidden text-gray-400"
                            >
                                <i className="pi pi-ellipsis-v text-2xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <div
                            id="navbar-sub-9"
                            className="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none"
                        >
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 border-gray-800 lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "28px",
                                                height: "28px"
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <div className="block lg:hidden">
                                            <div className="text-gray-400 font-medium">
                                                Josephine Lillard
                                            </div>
                                            <span className="text-gray-500 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex" style={{ minHeight: "66px" }}>
                        <StyleClass
                            nodeRef={btnRef22}
                            selector="#dashboards"
                            enterClassName="hidden"
                            enterActiveClassName="scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="fadeout"
                            hideOnOutsideClick
                        >
                            <div
                                ref={btnRef22}
                                className="cursor-pointer flex bg-indigo-700 px-6 py-2 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative"
                            >
                                <span
                                    className="border-round bg-orange-400 text-gray-900 inline-flex align-items-center justify-content-center flex-shrink-0 mr-3"
                                    style={{ width: "40px", height: "40px" }}
                                >
                                    AD
                                </span>
                                <div className="hidden lg:block select-none">
                                    <span className="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">
                                        Analytics Dashboard
                                    </span>
                                    <p className="m-0 text-indigo-200">
                                        5 New Actions
                                    </p>
                                </div>
                                <i className="pi pi-chevron-down text-indigo-200 ml-3 lg:ml-5"></i>
                                <div
                                    id="dashboards"
                                    className="hidden absolute left-0 top-100 shadow-2 bg-indigo-700 border-round-bottom w-full origin-top"
                                >
                                    <ul className="list-none m-0 px-0 lg:px-6 py-3">
                                        <li>
                                            <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                                                <i className="pi pi-shopping-cart mr-2"></i>
                                                <span className="font-medium">
                                                    Sales
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                                                <i className="pi pi-users mr-2"></i>
                                                <span className="font-medium">
                                                    Users
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </StyleClass>
                        <div className="bg-indigo-500 flex-1 flex align-items-center">
                            <StyleClass
                                nodeRef={btnRef23}
                                selector="@next"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef23}
                                    className="p-ripple cursor-pointer block xl:hidden text-indigo-100 ml-auto mr-6"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                </a>
                            </StyleClass>
                            <div className="xl:block hidden absolute xl:static bg-indigo-500 w-full left-0 top-100 z-1 shadow-2">
                                <ul className="list-none py-2 px-6 m-0 flex xl:align-items-center flex-column xl:flex-row select-none">
                                    <li>
                                        <a className="p-ripple flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-home mr-2"></i>
                                            <span>Home</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="xl:relative">
                                        <StyleClass
                                            nodeRef={btnRef24}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef24}
                                                className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-users mr-2"></i>
                                                <span>Customers</span>
                                                <i className="pi pi-angle-down ml-auto xl:ml-3"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                                    <i className="pi pi-user-plus mr-2"></i>
                                                    <span className="font-medium">
                                                        Add New
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <StyleClass
                                                    nodeRef={btnRef25}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="scalein"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="fadeout"
                                                    hideOnOutsideClick
                                                >
                                                    <a
                                                        ref={btnRef25}
                                                        className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150"
                                                    >
                                                        <i className="pi pi-search mr-2"></i>
                                                        <span className="font-medium">
                                                            Search
                                                        </span>
                                                        <i className="pi pi-angle-down ml-auto xl:-rotate-90"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer left-100 top-0">
                                                    <li>
                                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                                            <i className="pi pi-shopping-cart mr-2"></i>
                                                            <span className="font-medium">
                                                                Purchases
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li className="relative">
                                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                                            <i className="pi pi-comments mr-2"></i>
                                                            <span className="font-medium">
                                                                Messages
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span>Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span>Stats</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-top-1 xl:border-left-1 my-3 xl:my-0 xl:border-top-none border-indigo-400 xl:ml-auto pl-3">
                                        <span className="p-input-icon-left">
                                            <i className="pi pi-search text-indigo-200"></i>
                                            <input
                                                type="text"
                                                className="bg-transparent appearance-none border-none py-3 pr-3 pl-5 p-component text-indigo-200 outline-none w-full"
                                            />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Toolbar with Profile"
                code={block10}
                previewStyle={{ height: "400px" }}
            >
                <div
                    className="bg-indigo-500 px-6 shadow-2 flex relative lg:static"
                    style={{ minHeight: "75px" }}
                >
                    <StyleClass
                        nodeRef={btnRef26}
                        selector="#profile-10"
                        enterClassName="hidden"
                        enterActiveClassName="scalein"
                        leaveToClassName="hidden"
                        leaveActiveClassName="fadeout"
                        hideOnOutsideClick
                    >
                        <div
                            ref={btnRef26}
                            className="cursor-pointer flex p-3 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative select-none"
                        >
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                className="lg:mr-3"
                                style={{ width: "40px", height: "40px" }}
                                alt="avatar-f-6"
                            />
                            <div className="hidden lg:block">
                                <span className="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">
                                    Kristin Watson
                                </span>
                                <p className="m-0 text-indigo-200">Manager</p>
                            </div>
                            <i className="pi pi-chevron-down text-indigo-200 ml-3 hidden lg:block"></i>
                            <div
                                id="profile-10"
                                className="hidden absolute left-0 top-100 shadow-2 bg-indigo-600 border-round-bottom w-15rem lg:w-full origin-top"
                            >
                                <ul className="list-none m-0 p-3">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                                            <i className="pi pi-user mr-2"></i>
                                            <span className="font-medium">
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                                            <i className="pi pi-sign-out mr-2"></i>
                                            <span className="font-medium">
                                                Sign Out
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </StyleClass>
                    <div className="flex-auto flex pl-5 overflow-auto">
                        <ul className="flex list-none p-0 m-0">
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-home text-2xl"></i>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-users text-2xl"></i>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-calendar text-2xl"></i>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-folder text-2xl"></i>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i className="pi pi-chart-line text-2xl"></i>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex ml-5">
                        <StyleClass
                            nodeRef={btnRef27}
                            selector="@next"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef27}
                                className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-white"
                            >
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <div className="lg:block hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto bg-indigo-500">
                            <ul className="h-full list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                                <li>
                                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-search lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Search
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-inbox lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-bell lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Condensed"
                code={block11}
                previewStyle={{ height: "400px" }}
            >
                <div
                    className="surface-overlay shadow-2 flex relative lg:static justify-content-between"
                    style={{ minHeight: "42px" }}
                >
                    <StyleClass
                        nodeRef={btnRef28}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef28}
                            className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700"
                        >
                            <i className="pi pi-bars text-2xl"></i>
                        </a>
                    </StyleClass>
                    <div className="hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-blue-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-home mr-2"></span>
                                    <span className="font-medium">Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-users mr-2"></span>
                                    <span className="font-medium">
                                        Customers
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-calendar mr-2"></span>
                                    <span className="font-medium">
                                        Calendar
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-home mr-2"></span>
                                    <span className="font-medium">Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <StyleClass
                        nodeRef={btnRef29}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef29}
                            className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700"
                        >
                            <i className="pi pi-ellipsis-v text-xl"></i>
                        </a>
                    </StyleClass>
                    <div className="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                    <span className="pi pi-book mr-2 lg:mr-0"></span>
                                    <span className="font-medium inline lg:hidden">
                                        Documentation
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                    <span className="pi pi-inbox mr-2 lg:mr-0"></span>
                                    <span className="font-medium inline lg:hidden">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                    <span className="pi pi-bell mr-2 lg:mr-0"></span>
                                    <span className="font-medium inline lg:hidden">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full relative">
                                <StyleClass
                                    nodeRef={btnRef30}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef30}
                                        className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150"
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="lg:mr-0"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <span className="mx-2 font-medium text-900">
                                            Jane Sanders
                                        </span>
                                        <i className="pi pi-angle-down"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-1 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-user mr-2"></span>
                                                <span className="font-medium">
                                                    Profile
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-cog mr-2"></span>
                                                <span className="font-medium">
                                                    Settings
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-sign-out mr-2"></span>
                                                <span className="font-medium">
                                                    Sign Out
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>
            <BlockViewer
                header="Full Width Search"
                code={block12}
                previewStyle={{ height: "400px" }}
                new
            >
                <nav
                    className="surface-section py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 surface-border"
                    style={{ minHeight: "84px" }}
                >
                    <img
                        src="/demo/images/blocks/logos/bastion-700.svg"
                        alt="Image"
                        height="40"
                        className="mr-0 lg:mr-6"
                    />

                    <StyleClass
                        nodeRef={btnRef31}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef31}
                            className="p-ripple cursor-pointer block lg:hidden text-600"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-section left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none surface-border">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-home mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Home
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass
                                    nodeRef={btnRef32}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef32}
                                        className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150"
                                    >
                                        <i className="pi pi-comments mr-2 lg:mr-0"></i>
                                        <span className="font-medium lg:hidden">
                                            Comments
                                        </span>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 hidden border-round shadow-0 lg:shadow-2 lg:absolute surface-section origin-top w-full lg:w-15rem cursor-pointer lg:border-1 surface-border z-2">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center text-600 hover:surface-hover hover:text-blue-500 lg:border-round transition-colors transition-duration-150">
                                            <i className="pi pi-comment mr-2"></i>
                                            <span className="font-medium">
                                                View all
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a className="p-ripple flex p-3 align-items-center text-600 hover:surface-hover hover:text-blue-500 lg:border-round transition-colors transition-duration-150">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">
                                                Search
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-heart mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Favorites
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-calendar mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Calendar
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-bolt mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Likes
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row flex-grow-1">
                            <li className="flex-order-2 lg:flex-order-0 flex-grow-1">
                                <div className="flex px-6 p-3 lg:px-3 lg:py-2">
                                    <span className="p-input-icon-left w-full">
                                        <i className="pi pi-search text-600"></i>
                                        <InputText
                                            type="text"
                                            placeholder="Search"
                                            className="surface-section text-600 surface-border w-full"
                                        />
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150 mr-2">
                                    <i className="pi pi-bell mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:surface-hover hover:text-blue-500 font-medium lg:border-round cursor-pointer transition-colors transition-duration-150 mr-2">
                                    <i className="pi pi-cog mr-2 lg:mr-0"></i>
                                    <span className="font-medium lg:hidden">
                                        Settings
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <span className="hidden lg:flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-green-600 bg-green-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 mr-2">
                                    Available
                                </span>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none flex-grow-0">
                                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center font-medium border-round cursor-pointer">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <div className="flex align-items-center lg:hidden">
                                        <div className="mr-3">
                                            <p className="text-900 font-medium mb-0 mt-0">
                                                Josephine Lillard
                                            </p>
                                            <span className="text-600 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>

                                        <span className="flex px-3 py-2 align-items-center text-green-600 bg-green-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            Available
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </BlockViewer>
        </>
    );
};

export default NavBarApp;
