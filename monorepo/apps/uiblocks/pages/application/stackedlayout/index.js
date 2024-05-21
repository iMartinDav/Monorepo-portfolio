import React, { useRef, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer"
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const StackedLayout = () => {
    const [activeTab, setActiveTab] = useState(0);

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

    const block1 = `
<div className="min-h-screen flex flex-column surface-ground">
    <div className="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
        <img src="/demo/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6" />
        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef1} className="p-ripple cursor-pointer block lg:hidden text-700">
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
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
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
    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
        <li className="pr-3">
            <a className="cursor-pointer font-medium">
                <i className="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 3</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 2</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-900 white-space-nowrap font-medium">Level 1</a>
        </li>
    </ul>
    <div className="p-5 flex flex-column flex-auto">
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="min-h-screen flex flex-column surface-ground">
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
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
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
                            <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
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
                            <InputText placeholder="Search" className="bg-gray-800 text-gray-400 border-gray-800 w-full" />
                        </span>
                    </a>
                </li>
                <li className="border-top-1 border-gray-800 lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
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
    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
        <li className="pr-3">
            <a className="cursor-pointer font-medium">
                <i className="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 3</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 2</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-900 white-space-nowrap font-medium">Level 1</a>
        </li>
    </ul>
    <div className="p-5 flex flex-column flex-auto">
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="min-h-screen flex flex-column">
    <div className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height="40" className="mr-0 lg:mr-6" />
        <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef7} className="p-ripple cursor-pointer block lg:hidden text-indigo-50">
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
                    <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
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
                            <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
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
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 border-indigo-400 lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
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
    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border shadow-2 lg:shadow-none">
        <li className="pr-3">
            <a className="cursor-pointer font-medium">
                <i className="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 3</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">Level 2</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-900 white-space-nowrap font-medium">Level 1</a>
        </li>
    </ul>
    <div className="p-5 flex flex-column flex-auto">
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

        </div>
    </div>
</div>
`;

    const block4 = `
<div className="min-h-screen flex flex-column">
    <div className="bg-indigo-500" style={{ height: '250px' }}>
        <div className="py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
            <img src="/demo/images/blocks/logos/hyper-300.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
            <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef10} className="p-ripple cursor-pointer block lg:hidden text-indigo-50" >
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-home mr-2"></i>
                            <span>Home</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef11} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                <i className="pi pi-users mr-2"></i>
                                <span>Customers</span>
                                <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i className="pi pi-user-plus mr-2"></i>
                                    <span className="font-medium">Add New</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef12} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" >
                                        <i className="pi pi-search mr-2"></i>
                                        <span className="font-medium">Search</span>
                                        <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
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
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-calendar mr-2"></i>
                            <span>Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span>Stats</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span className="block lg:hidden font-medium">Inbox</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span className="block lg:hidden font-medium">Notifications</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-top-1 border-indigo-400 lg:border-top-none">
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
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
        <ul className="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-indigo-600">
            <li className="pr-3">
                <a className="cursor-pointer">
                    <i className="pi pi-home text-indigo-200"></i>
                </a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-indigo-200"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-indigo-200 white-space-nowrap">Level 3</a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-indigo-100"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-indigo-200 white-space-nowrap">Level 2</a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-indigo-200"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-indigo-100 white-space-nowrap">Level 1</a>
            </li>
        </ul>
    </div>
    <div className="p-5 flex flex-column flex-auto" style={{ marginTop: '-8rem' }}>
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="min-h-screen flex flex-column">
    <div className="bg-gray-900" style={{ height: '250px' }}>
        <div className="py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
            <img src="/demo/images/blocks/logos/hyper-300.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
            <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                <a ref={btnRef13} className="p-ripple cursor-pointer block lg:hidden text-gray-400" >
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-home mr-2"></i>
                            <span>Home</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef14} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                <i className="pi pi-users mr-2"></i>
                                <span>Customers</span>
                                <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i className="pi pi-user-plus mr-2"></i>
                                    <span className="font-medium">Add New</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef15} className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                        <i className="pi pi-search mr-2"></i>
                                        <span className="font-medium">Search</span>
                                        <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
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
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-calendar mr-2"></i>
                            <span>Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span>Stats</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span className="block lg:hidden font-medium">Inbox</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span className="block lg:hidden font-medium">Notifications</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="border-top-1 border-gray-800 lg:border-top-none">
                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
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
        <ul className="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-gray-800">
            <li className="pr-3">
                <a className="cursor-pointer">
                    <i className="pi pi-home text-gray-400"></i>
                </a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-gray-400"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-gray-400 white-space-nowrap">Level 3</a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-gray-400"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-gray-400 white-space-nowrap">Level 2</a>
            </li>
            <li className="px-2">
                <i className="pi pi-angle-right text-gray-400"></i>
            </li>
            <li className="px-2">
                <a className="cursor-pointer text-indigo-300 white-space-nowrap">Level 1</a>
            </li>
        </ul>
    </div>
    <div className="p-5 flex flex-column flex-auto" style={{ marginTop: '-8rem' }}>
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="min-h-screen flex flex-column surface-ground">
    <div className="surface-section px-6 flex justify-content-between relative lg:static" style={{ minHeight: '70px' }}>
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6 align-self-center" />
        <StyleClass selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick nodeRef={btnRef16}>
            <a ref={btnRef16} className="p-ripple cursor-pointer block lg:hidden align-self-center text-700">
                <i className="p-ripple pi pi-bars text-4xl "></i>
                <Ripple />
            </a>
        </StyleClass>
        <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none surface-overlay">
            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row gap-2">
                <li className="lg:flex lg:align-items-end">
                    <a className={'p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 ' + (activeTab === 0 ? 'surface-ground text-900' : 'hover:surface-hover')} onClick={() => setActiveTab(0)}>
                        <i className="pi pi-home mr-2"></i>
                        <span>Dashboard</span>
                        <Ripple />
                    </a>
                </li>
                <li className="lg:flex lg:align-items-end">
                    <a className={'p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 ' + (activeTab === 1 ? 'surface-ground text-900' : 'hover:surface-hover')} onClick={() => setActiveTab(1)}>
                        <i className="pi pi-chart-line mr-2"></i>
                        <span>Reports</span>
                        <Ripple />
                    </a>
                </li>
                <li className="lg:flex lg:align-items-end">
                    <a className={'p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 ' + (activeTab === 2 ? 'surface-ground text-900' : 'hover:surface-hover')} onClick={() => setActiveTab(2)}>
                        <i className="pi pi-users mr-2"></i>
                        <span className="mr-2">Team</span>
                        <Ripple />
                    </a>
                </li>
                <li className="lg:flex lg:align-items-end">
                    <a className={'p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 ' + (activeTab === 3 ? 'surface-ground text-900' : 'hover:surface-hover')} onClick={() => setActiveTab(3)}>
                        <i className="pi pi-cog mr-2"></i>
                        <span>Settings</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-orange-600 hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-cyan-600 hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                            <Badge severity="danger" />
                        </i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1"/>
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
    <div className="p-5 flex flex-column flex-auto surface-ground">
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
    </div>
</div>`;

    const block7 = `
<div className="min-h-screen flex flex-column surface-ground">
    <div className="surface-overlay px-6 flex justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="40" className="mr-0 lg:mr-6 align-self-center" />
        <StyleClass nodeRef={btnRef17} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef17} className="p-ripple cursor-pointer block lg:hidden text-700 align-self-center">
                <i className="pi pi-bars text-4xl"></i>
            </a>
        </StyleClass>
        <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                <li>
                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-home mr-2"></i>
                        <span>Dashboard</span>
                        <Ripple />
                    </a>
                </li>
                <li className="lg:relative">
                    <StyleClass nodeRef={btnRef18} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <a ref={btnRef18} className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                            <i className="pi pi-users mr-2"></i>
                            <span>Customers</span>
                            <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <ul className="list-none py-0 px-6 m-0 lg:px-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                        <li>
                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Add New</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="relative">
                            <StyleClass nodeRef={btnRef19} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                <a ref={btnRef19} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none py-0 pl-3 m-0 lg:px-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                <li>
                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
                                        <i className="pi pi-shopping-cart mr-2"></i>
                                        <span className="font-medium">Purchases</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
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
                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-comments mr-2"></i>
                        <span>Messages</span>
                        <Badge value="3" className="ml-2" />
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-cog mr-2"></i>
                        <span>Settings</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                            <Badge severity="danger" />
                        </i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px'}} alt="avatar-f-1"/>
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
    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
        <li className="pr-3">
            <a className="cursor-pointer">
                <i className="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-900 white-space-nowrap">Level 1</a>
        </li>
    </ul>
    <div className="p-5 flex flex-column flex-auto">
        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Stacked Layout</div>
            <BlockViewer header="Branded Navigation" code={block1}>
                <div className="min-h-screen flex flex-column surface-ground">
                    <div
                        className="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static"
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
                                className="p-ripple cursor-pointer block lg:hidden text-700"
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
                                            alt="avatar-f-1"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
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
                    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
                        <li className="pr-3">
                            <a className="cursor-pointer font-medium">
                                <i className="pi pi-home text-blue-500"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 3
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 2
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-900 white-space-nowrap font-medium">
                                Level 1
                            </a>
                        </li>
                    </ul>
                    <div className="p-5 flex flex-column flex-auto">
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark TopBar" code={block2}>
                <div className="min-h-screen flex flex-column surface-ground">
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
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
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
                                            <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150 w-full">
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
                                            alt="avatar-f-1"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
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
                    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
                        <li className="pr-3">
                            <a className="cursor-pointer font-medium">
                                <i className="pi pi-home text-blue-500"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 3
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 2
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-900 white-space-nowrap font-medium">
                                Level 1
                            </a>
                        </li>
                    </ul>
                    <div className="p-5 flex flex-column flex-auto">
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored TopBar" code={block3}>
                <div className="min-h-screen flex flex-column">
                    <div
                        className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static"
                        style={{ minHeight: "80px" }}
                    >
                        <img
                            src="/demo/images/blocks/logos/hyper-300.svg"
                            alt="hyper-300"
                            height="40"
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
                                className="p-ripple cursor-pointer block lg:hidden text-indigo-50"
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
                                    <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
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
                                            <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
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
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 border-indigo-400 lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            alt="avatar-f-1"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
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
                    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border shadow-2 lg:shadow-none">
                        <li className="pr-3">
                            <a className="cursor-pointer font-medium">
                                <i className="pi pi-home text-blue-500"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 3
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
                                Level 2
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-900 white-space-nowrap font-medium">
                                Level 1
                            </a>
                        </li>
                    </ul>
                    <div className="p-5 flex flex-column flex-auto">
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored with Overlap" code={block4}>
                <div className="min-h-screen flex flex-column">
                    <div className="bg-indigo-500" style={{ height: "250px" }}>
                        <div
                            className="py-3 px-5 flex align-items-center justify-content-between relative lg:static"
                            style={{ minHeight: "80px" }}
                        >
                            <img
                                src="/demo/images/blocks/logos/hyper-300.svg"
                                alt="Image"
                                height="40"
                                className="mr-0 lg:mr-6"
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
                                    className="p-ripple cursor-pointer block lg:hidden text-indigo-50"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1">
                                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-home mr-2"></i>
                                            <span>Home</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef11}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef11}
                                                className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-users mr-2"></i>
                                                <span>Customers</span>
                                                <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
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
                                                    nodeRef={btnRef12}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="scalein"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="fadeout"
                                                    hideOnOutsideClick
                                                >
                                                    <a
                                                        ref={btnRef12}
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
                                                <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
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
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span>Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span>Stats</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                            <span className="block lg:hidden font-medium">
                                                Inbox
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                            <span className="block lg:hidden font-medium">
                                                Notifications
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-top-1 border-indigo-400 lg:border-top-none">
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
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
                        <ul className="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-indigo-600">
                            <li className="pr-3">
                                <a className="cursor-pointer">
                                    <i className="pi pi-home text-indigo-200"></i>
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-indigo-200"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-indigo-200 white-space-nowrap">
                                    Level 3
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-indigo-100"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-indigo-200 white-space-nowrap">
                                    Level 2
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-indigo-200"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-indigo-100 white-space-nowrap">
                                    Level 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="p-5 flex flex-column flex-auto"
                        style={{ marginTop: "-8rem" }}
                    >
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark with Overlap" code={block5}>
                <div className="min-h-screen flex flex-column">
                    <div className="bg-gray-900" style={{ height: "250px" }}>
                        <div
                            className="py-3 px-5 flex align-items-center justify-content-between relative lg:static"
                            style={{ minHeight: "80px" }}
                        >
                            <img
                                src="/demo/images/blocks/logos/hyper-300.svg"
                                alt="Image"
                                height="40"
                                className="mr-0 lg:mr-6"
                            />
                            <StyleClass
                                nodeRef={btnRef13}
                                selector="@next"
                                enterClassName="hidden"
                                leaveToClassName="hidden"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef13}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-400"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1">
                                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-home mr-2"></i>
                                            <span>Home</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef14}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef14}
                                                className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-users mr-2"></i>
                                                <span>Customers</span>
                                                <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
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
                                                <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
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
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span>Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span>Stats</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                            <span className="block lg:hidden font-medium">
                                                Inbox
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                            <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                            <span className="block lg:hidden font-medium">
                                                Notifications
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="border-top-1 border-gray-800 lg:border-top-none">
                                        <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
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
                        <ul className="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-gray-800">
                            <li className="pr-3">
                                <a className="cursor-pointer">
                                    <i className="pi pi-home text-gray-400"></i>
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-gray-400"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-gray-400 white-space-nowrap">
                                    Level 3
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-gray-400"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-gray-400 white-space-nowrap">
                                    Level 2
                                </a>
                            </li>
                            <li className="px-2">
                                <i className="pi pi-angle-right text-gray-400"></i>
                            </li>
                            <li className="px-2">
                                <a className="cursor-pointer text-indigo-300 white-space-nowrap">
                                    Level 1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="p-5 flex flex-column flex-auto"
                        style={{ marginTop: "-8rem" }}
                    >
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Tabs" code={block6}>
                <div className="min-h-screen flex flex-column surface-ground">
                    <div
                        className="surface-section px-6 flex justify-content-between relative lg:static"
                        style={{ minHeight: "70px" }}
                    >
                        <img
                            src="/demo/images/blocks/logos/hyper-700.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6 align-self-center"
                        />
                        <StyleClass
                            selector="@next"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                            nodeRef={btnRef16}
                        >
                            <a
                                ref={btnRef16}
                                className="p-ripple cursor-pointer block lg:hidden align-self-center text-700"
                            >
                                <i className="p-ripple pi pi-bars text-4xl "></i>
                                <Ripple />
                            </a>
                        </StyleClass>

                        <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none surface-overlay">
                            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row gap-2">
                                <li className="lg:flex lg:align-items-end">
                                    <a
                                        className={
                                            "p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 " +
                                            (activeTab === 0
                                                ? "surface-ground text-900"
                                                : "hover:surface-hover")
                                        }
                                        onClick={() => setActiveTab(0)}
                                    >
                                        <i className="pi pi-home mr-2"></i>
                                        <span>Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="lg:flex lg:align-items-end">
                                    <a
                                        className={
                                            "p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 " +
                                            (activeTab === 1
                                                ? "surface-ground text-900"
                                                : "hover:surface-hover")
                                        }
                                        onClick={() => setActiveTab(1)}
                                    >
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span>Reports</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="lg:flex lg:align-items-end">
                                    <a
                                        className={
                                            "p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 " +
                                            (activeTab === 2
                                                ? "surface-ground text-900"
                                                : "hover:surface-hover")
                                        }
                                        onClick={() => setActiveTab(2)}
                                    >
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="mr-2">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="lg:flex lg:align-items-end">
                                    <a
                                        className={
                                            "p-ripple border-round-top flex align-items-center px-6 py-3 lg:px-3 lg:py-3 font-medium cursor-pointer transition-colors transition-duration-150 " +
                                            (activeTab === 3
                                                ? "surface-ground text-900"
                                                : "hover:surface-hover")
                                        }
                                        onClick={() => setActiveTab(3)}
                                    >
                                        <i className="pi pi-cog mr-2"></i>
                                        <span>Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-orange-600 hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-cyan-600 hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
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
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-hover font-medium border-round cursor-pointer transition-colors transition-duration-150">
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
                    <div className="p-5 flex flex-column flex-auto surface-ground">
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Hover Borders" code={block7}>
                <div className="min-h-screen flex flex-column surface-ground">
                    <div
                        className="surface-overlay px-6 flex justify-content-between relative lg:static"
                        style={{ minHeight: "80px" }}
                    >
                        <img
                            src="/demo/images/blocks/logos/hyper.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6 align-self-center"
                        />
                        <StyleClass
                            nodeRef={btnRef17}
                            selector="@next"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef17}
                                className="p-ripple cursor-pointer block lg:hidden text-700 align-self-center"
                            >
                                <i className="pi pi-bars text-4xl"></i>
                            </a>
                        </StyleClass>

                        <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                                <li>
                                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-home mr-2"></i>
                                        <span>Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="lg:relative">
                                    <StyleClass
                                        nodeRef={btnRef18}
                                        selector="@next"
                                        enterClassName="hidden"
                                        enterActiveClassName="scalein"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeout"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef18}
                                            className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150"
                                        >
                                            <i className="pi pi-users mr-2"></i>
                                            <span>Customers</span>
                                            <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 px-6 m-0 lg:px-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                        <li>
                                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
                                                <i className="pi pi-user-plus mr-2"></i>
                                                <span className="font-medium">
                                                    Add New
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="relative">
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
                                            <ul className="list-none py-0 pl-3 m-0 lg:px-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                                <li>
                                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
                                                        <i className="pi pi-shopping-cart mr-2"></i>
                                                        <span className="font-medium">
                                                            Purchases
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li className="relative">
                                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 border-left-2 border-transparent hover:border-primary transition-colors transition-duration-150">
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
                                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span>Messages</span>
                                        <Badge value="3" className="ml-2" />
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span>Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
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
                                    <a className="p-ripple flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150">
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
                    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
                        <li className="pr-3">
                            <a className="cursor-pointer">
                                <i className="pi pi-home text-blue-500"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap">
                                Level 3
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-blue-500 white-space-nowrap">
                                Level 2
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-900 white-space-nowrap">
                                Level 1
                            </a>
                        </li>
                    </ul>
                    <div className="p-5 flex flex-column flex-auto">
                        <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default StackedLayout;
