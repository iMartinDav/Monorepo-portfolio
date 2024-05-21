import React, { useRef, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";

const SidebarLayout = () => {
    const menuOptions = [
        { name: "Favorites", value: 0 },
        { name: "Apps", value: 1 },
    ];

    const [selectedMenuOption, setSelectedMenuOption] = useState(0);

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
    const btnRef33 = useRef(null);
    const btnRef34 = useRef(null);
    const btnRef35 = useRef(null);
    const btnRef36 = useRef(null);
    const btnRef37 = useRef(null);
    const btnRef38 = useRef(null);
    const btnRef39 = useRef(null);
    const btnRef40 = useRef(null);
    const btnRef41 = useRef(null);
    const btnRef42 = useRef(null);
    const btnRef43 = useRef(null);
    const btnRef44 = useRef(null);
    const btnRef45 = useRef(null);
    const btnRef46 = useRef(null);
    const btnRef47 = useRef(null);
    const btnRef48 = useRef(null);
    const btnRef49 = useRef(null);
    const btnRef50 = useRef(null);
    const btnRef51 = useRef(null);
    const btnRef52 = useRef(null);
    const btnRef53 = useRef(null);
    const btnRef54 = useRef(null);
    const btnRef55 = useRef(null);
    const btnRef56 = useRef(null);
    const btnRef57 = useRef(null);
    const btnRef58 = useRef(null);
    const btnRef59 = useRef(null);

    const block1 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-1" className="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={30} />
            </div>
            <div className="overflow-y-auto mt-3">
                <ul className="list-none p-3 m-0">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-bookmark mr-2"></i>
                            <span className="font-medium">Bookmarks</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef1} className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Reports</span>
                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Revenue</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="font-medium">View</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Expenses</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Team</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-comments mr-2"></i>
                            <span className="font-medium">Messages</span>
                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mx-3">
                <hr className="mb-3 border-top-1 border-bluegray-600" />
                <ul className="list-none p-2 m-0 hidden">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full">
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full">
                            <i className="pi pi-sign-out mr-2"></i>
                            <span className="font-medium">Sign Out</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <StyleClass nodeRef={btnRef3} selector="@prev" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout">
                    <a ref={btnRef3} className="p-ripple my-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
        transition-duration-150 transition-colors w-full">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                        <span className="font-medium">Amy Elsner</span>
                        <i className="pi pi-chevron-up ml-auto"></i>
                        <Ripple />
                    </a>
                </StyleClass>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef4} selector="#app-sidebar-1" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef4} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef5} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={30} />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef6} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                <span className="font-medium">FAVORITES</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-bookmark mr-2"></i>
                                    <span className="font-medium">Bookmarks</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef7} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef8} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef9} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                <span className="font-medium">APPLICATION</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-folder mr-2"></i>
                                    <span className="font-medium">Projects</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Performance</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mx-3">
                <hr className="mb-3 border-top-1 surface-border" />
                <a className="p-ripple my-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                    <span className="font-medium">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef10} selector="#app-sidebar-2" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef10} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef11} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-3" className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={30} />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <span className="block p-3 text-gray-600">FAVORITES</span>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-bookmark mr-2"></i>
                            <span className="font-medium">Bookmarks</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef12} className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Reports</span>
                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef13} className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Revenue</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="font-medium">View</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Expenses</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Team</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-comments mr-2"></i>
                            <span className="font-medium">Messages</span>
                            <Ripple />
                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <span className="block p-3 text-600">APPLICATION</span>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-folder mr-2"></i>
                            <span className="font-medium">Projects</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-chart-bar mr-2"></i>
                            <span className="font-medium">Reports</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mx-3">
                <hr className="mb-3 border-top-1 border-gray-800" />
                <a className="p-ripple my-3 flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                    <span className="font-medium">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef14} selector="#app-sidebar-3" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef14} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef15} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-4" className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-5rem select-none">
        <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-500" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
            </div>
            <div className="mt-3 select-none">
                <ul className="list-none p-3 lg:py-3 lg:px-2 m-0">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span className="font-medium inline lg:hidden">Dashboard</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-bookmark mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span className="font-medium inline lg:hidden">Bookmarks</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span className="font-medium inline lg:hidden">Team</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="lg:relative">
                        <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <a ref={btnRef16} className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-xl p-overlay-badge"><Badge /></i>
                                <span className="font-medium inline lg:hidden">Reports</span>
                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <StyleClass nodeRef={btnRef17} selector="@next" toggleClassName="hidden">
                                    <a ref={btnRef17} className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Revenue</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="font-medium">View</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Expenses</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span className="font-medium inline lg:hidden">Calendar</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span className="font-medium inline lg:hidden">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mx-2">
                <hr className="mb-3 border-top-1 border-gray-800" />
                <a className="p-ripple my-3 flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-300 hover:text-0
        transition-duration-150 transition-colors w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2 lg:mr-0" style={{ width: '32px', height: '32' }} alt="avatar-f-1"/>
                    <span className="font-medium inline lg:hidden">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef18} selector="#app-sidebar-4" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef18} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3" >
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef19} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef19} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-5" className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none">
        <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-center flex-shrink-0 bg-orange-500" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
            </div>
            <div className="mt-3">
                <ul className="list-none p-3 m-0">
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Home</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Search</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Team</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef20} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <a ref={btnRef20} className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg p-overlay-badge"><Badge severity="danger" /></i>
                                <span className="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <StyleClass nodeRef={btnRef21} selector="@next" toggleClassName="hidden">
                                    <a ref={btnRef21} className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Revenue</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="font-medium">View</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Expenses</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Events</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Options</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mx-3">
                <hr className="mb-3  border-top-1 border-gray-800" />
                <a className="p-ripple my-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                    <span className="font-medium inline lg:hidden">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef22} selector="#app-sidebar-5" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef22} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef23} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef23} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-6" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none w-12rem bg-indigo-800 animation-duration-300 animation-ease-in-out">
        <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-center flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/bastion.svg" alt="Image" height="30" />
            </div>
            <div className="my-3 p-3">
                <span className="p-input-icon-left">
                    <i className="pi pi-search text-indigo-50"></i>
                    <InputText className="appearance-none border-none bg-indigo-700 text-indigo-50 w-full" />
                </span>
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0 flex flex-wrap">
                    <li className="w-6 text-center">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-home text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Home</div>
                    </li>
                    <li className="w-6 text-center">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-star-fill text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Favorites</div>
                    </li>
                    <li className="w-6 text-center mt-3">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-users text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Users</div>
                    </li>
                    <li className="w-6 text-center mt-3">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-comments text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Chart</div>
                    </li>
                    <li className="w-6 text-center mt-3">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-calendar text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Calendar</div>
                    </li>
                    <li className="w-6 text-center mt-3">
                        <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '60px', height: '60px', borderRadius: '10px' }}>
                            <i className="pi pi-cog text-2xl"></i>
                            <Ripple />
                        </a>
                        <div className="mt-2 text-indigo-200 font-medium text-sm">Settings</div>
                    </li>
                </ul>
            </div>
            <div className="mt-auto border-top-1 border-indigo-700 p-3 flex justify-content-between">
                <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" style={{ width: '24px', height: '24px' }} alt="avatar-f-6"/>
                    <Ripple />
                </a>
                <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                    <i className="pi pi-slack text-xl"></i>
                    <Ripple />
                </a>
                <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                    <i className="pi pi-github text-xl"></i>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef24} selector="#app-sidebar-6" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef24} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>

            </div>
            <StyleClass nodeRef={btnRef25} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef25} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-6"/>
                        <div className="block lg:hidden">
                            <div className="text-900 font-medium">Josephine Lillard</div>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<div className="min-h-screen flex relative lg:static" style={{ backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
    <div id="app-sidebar-7" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30" style={{ width: '280px', backdropFilter: 'blur(10px)' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef26} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef26} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer">
                                <span className="font-medium">FAVORITES</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-bookmark mr-2"></i>
                                    <span className="font-medium">Bookmarks</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef27} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                    <a ref={btnRef27} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef28} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                            <a ref={btnRef28} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <Ripple />
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef29} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef29} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-700 cursor-pointer">
                                <span className="font-medium">APPLICATION</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-folder mr-2"></i>
                                    <span className="font-medium">Projects</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Performance</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="mt-auto border-top-1 border-white-alpha-40">
                <ul className="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-sign-out mr-2"></i>
                            <span className="font-medium">Sign Out</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <StyleClass nodeRef={btnRef30} selector="@prev" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef30} className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-purple-50 text-gray-800 cursor-pointer text-gray-800
        transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                        <span className="font-medium">Amy Elsner</span>
                        <i className="pi pi-chevron-up ml-auto"></i>
                        <Ripple />
                    </a>
                </StyleClass>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef31} selector="#app-sidebar-7" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef31} className="p-ripple cursor-pointer block lg:hidden text-gray-800 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
            </div>
            <StyleClass nodeRef={btnRef32} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef32} className="p-ripple cursor-pointer block lg:hidden text-gray-800">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0" style={{ backdropFilter: 'blur(10px)' }}>
                <li className="mr-0 lg:mr-3">
                    <a className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li className="mr-0 lg:mr-3">
                    <a className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-40">
                    <a className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                        <div className="block lg:hidden">
                            <div className="text-gray-900 font-medium">Josephine Lillard</div>
                            <span className="text-gray-700 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40">

            </div>
        </div>
    </div>
</div>
    `;

    const block8 = `
<div className="min-h-screen flex relative lg:static" style={{ backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)' }}>
    <div id="app-sidebar-8" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out border-white-alpha-10" style={{ width: '280px', backgroundImage: 'linear-gradient(60deg, #29323c 0%, #2f3844 100%)' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-300.svg" alt="Image" height="30" />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef33} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef33} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer">
                                <span className="font-medium">FAVORITES</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-bookmark mr-2"></i>
                                    <span className="font-medium">Bookmarks</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef34} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef34} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                        style={{ borderRadius: '30px' }}>
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef35} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef35} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef36} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef36} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer">
                                <span className="font-medium">APPLICATION</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-folder mr-2"></i>
                                    <span className="font-medium">Projects</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Performance</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="mt-auto border-top-1 border-white-alpha-10">
                <ul className="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                            <i className="pi pi-sign-out mr-2"></i>
                            <span className="font-medium">Sign Out</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <StyleClass nodeRef={btnRef37} selector="@prev" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef37} className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-700 text-gray-300 cursor-pointer text-gray-300
        transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                        <span className="font-medium">Amy Elsner</span>
                        <i className="pi pi-chevron-up ml-auto"></i>
                        <Ripple />
                    </a>
                </StyleClass>

            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static border-white-alpha-10" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef38} selector="#app-sidebar-8" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef38} className="p-ripple cursor-pointer block lg:hidden text-gray-300 mr-3" >
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
            </div>
            <StyleClass nodeRef={btnRef39} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef39} className="p-ripple cursor-pointer block lg:hidden text-gray-300">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>

            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0" style={{ backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)', borderRadius: '30px' }}>
                <li className="mr-0 lg:mr-3">
                    <a className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li className="mr-0 lg:mr-3">
                    <a className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" severity="danger"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-10">
                    <a className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-bluegray-700 font-medium cursor-pointer
            transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1"/>
                        <div className="block lg:hidden">
                            <div className="text-gray-300 font-medium">Josephine Lillard</div>
                            <span className="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed border-round flex-auto border-white-alpha-10">

            </div>
        </div>
    </div>
</div>
    `;

    const block9 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-9" className="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-center flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-cyan.svg" alt="Image" height="30" />
            </div>
            <div className="mt-3">
                <ul className="list-none p-0 m-0">
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors">
                            <i className="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Home</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i className="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Search</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i className="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Team</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef40} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <a ref={btnRef40} className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors" >
                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge"><Badge severity="danger">3</Badge></i>
                                <span className="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <StyleClass nodeRef={btnRef41} selector="@next" toggleClassName="hidden">
                                    <a ref={btnRef41} className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Revenue</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="font-medium">View</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Expenses</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i className="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Events</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                            <i className="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span className="font-medium inline text-base lg:text-xs lg:block">Options</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-auto">
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a className="p-ripple m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1"/>
                    <span className="font-medium inline lg:hidden">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef42} selector="#app-sidebar-9" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef42} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef43} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef43} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger"></Badge></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1"/>
                        <div className="block lg:hidden">
                            <div className="text-900 font-medium">Amy Elsner</div>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block10 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-10" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none surface-ground border-right-1 lg:border-right-none surface-border" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
            </div>
            <div className="overflow-y-auto">
                <div className="p-3">
                    <div className="p-input-icon-left w-full">
                        <i className="pi pi-search"></i>
                        <InputText className="border-1 surface-border w-full" placeholder="Search" style={{ borderRadius: '30px' }} />
                    </div>
                </div>
                <ul className="list-none p-3 m-0">
                    <li>
                        <div className="p-3 flex align-items-center justify-content-between text-600r">
                            <span className="font-bold text-800">FAVORITES</span>
                            <Ripple />
                        </div>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-blue-500 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-bookmark mr-2"></i>
                                    <span className="font-medium">Bookmarks</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef44} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef44} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef45} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef45} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <div className="p-3 flex align-items-center justify-content-between text-600">
                            <span className="font-bold text-800">APPLICATION</span>
                            <Ripple />
                        </div>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-folder mr-2"></i>
                                    <span className="font-medium">Projects</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Performance</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="mt-auto">
                <a className="p-ripple m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                    <span className="font-medium">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex align-items-center justify-content-between lg:justify-content-start px-5 relative lg:static" style={{ height: '60px' }}>
            <StyleClass nodeRef={btnRef46} selector="#app-sidebar-10" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                <a ref={btnRef46} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <StyleClass nodeRef={btnRef47} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef47} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 mt-0 mb-0 ml-0 mr-3 lg:mr-0 hidden lg:flex lg:align-items-center select-none lg:flex-row border-round
    border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static surface-ground lg:w-full">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge" severity="danger"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Settings</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Profile</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none ml-auto">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1"/>
                        <div className="block lg:hidden">
                            <div className="text-900 font-medium">Amy Elsner</div>
                            <span className="text-600 font-medium text-sm">Developer</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block11 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-11" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef48} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef48} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer border-2 border-transparent border-rounded">
                                <span className="font-medium">FAVORITES</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors text-indigo-500" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-bookmark mr-2 text-blue-500"></i>
                                    <span className="font-medium">Bookmarks</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef49} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef49} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                        <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef50} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef50} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                                <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                                    <i className="pi pi-table text-purple-500 mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                                    <i className="pi pi-search mr-2 text-purple-500"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                            <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-users mr-2 text-green-500"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-comments mr-2 text-cyan-500 "></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-indigo-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-calendar mr-2 text-teal-500 "></i>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-cog mr-2 text-pink-500 "></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef51} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef51} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                <span className="font-medium">APPLICATIONS</span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                            </div>
                        </StyleClass>
                        <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-discord mr-2 text-cyan-500"></i>
                                    <span className="font-medium">Discord</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-slack mr-2 text-purple-500"></i>
                                    <span className="font-medium">Slack</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                    <i className="pi pi-github mr-2 text-blue-500"></i>
                                    <span className="font-medium">GitHub</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="mt-auto">
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a className="p-ripple m-3 flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-2" style={{ width: '28px', height: '28px' }} alt="avatar-f-1"/>
                    <span className="font-medium">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <StyleClass nodeRef={btnRef52} selector="#app-sidebar-11" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                <a ref={btnRef52} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <StyleClass nodeRef={btnRef53} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef53} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row w-auto lg:w-full
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Settings</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Profile</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Favorites</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
                        <i className="pi pi-pencil text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Edit</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none ml-auto">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors">
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
        <div className="p-5 flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>
    `;

    const block12 = `
<div className="min-h-screen flex flex-column surface-ground">
    <div className="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static">
        <StyleClass nodeRef={btnRef54} selector="#app-sidebar-12" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
            <a ref={btnRef54} className="p-ripple cursor-pointer block lg:hidden text-700">
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
        <StyleClass nodeRef={btnRef55} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef55} className="p-ripple cursor-pointer block lg:hidden text-700" >
                <i className="pi pi-ellipsis-v text-2xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <ul className="list-none p-3 lg:p-0 m-0 lg:align-items-center select-none flex-column lg:flex-row absolute hidden lg:flex lg:static surface-overlay right-0 top-100 z-1 shadow-2 lg:shadow-none">
            <li className="lg:mr-1">
                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li className="lg:mr-1">
                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2">
                <a className="p-ripple flex p-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '25px', height: '25px' }} alt="avatar-f-1"/>
                    <div className="block lg:hidden">
                        <div className="text-900 font-medium">Josephine Lillard</div>
                        <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
        <li className="pr-3">
            <a className="cursor-pointer">
                <i className="pi pi-home text-600"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-600"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-600 white-space-nowrap">Favorites</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-600"></i>
        </li>
        <li className="px-2">
            <a className="cursor-pointer text-purple-500 white-space-nowrap">Dashboard</a>
        </li>
    </ul>
    <div className="flex relative lg:static p-5 flex-auto">
        <div id="app-sidebar-12" className="surface-card hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none shadow-2" style={{ width: '280px', borderRadius: '12px' }}>
            <div className="flex flex-column h-full">
                <div className="overflow-y-auto">
                    <div className="p-3">
                        <div className="p-input-icon-left w-full">
                            <i className="pi pi-search"></i>
                            <InputText className="border-1 surface-border w-full" placeholder="Search" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                    <ul className="list-none px-3 pb-3 pt-0 m-0">
                        <li>
                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                <span className="font-medium text-sm text-900">FAVORITES</span>
                                <Ripple />
                            </div>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 bg-purple-50 transition-duration-150 transition-colors text-purple-500 border-purple-500 border-right-2">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">Bookmarks</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <StyleClass nodeRef={btnRef56} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRef56} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Reports</span>
                                            <i className="pi pi-chevron-down ml-auto"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass nodeRef={btnRef57} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <a ref={btnRef57} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Revenue</span>
                                                    <i className="pi pi-chevron-down ml-auto"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-table mr-2"></i>
                                                        <span className="font-medium">View</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-search mr-2"></i>
                                                        <span className="font-medium">Search</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Expenses</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">Messages</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <li>
                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                <span className="font-medium text-sm text-900">APPLICATION</span>
                                <Ripple />
                            </div>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="font-medium">Projects</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-chart-bar mr-2"></i>
                                        <span className="font-medium">Performance</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto border-top-1 surface-border p-3 flex justify-content-between">
                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                        <i className="pi pi-file text-xl"></i>
                        <Ripple />
                    </a>
                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                        <i className="pi pi-star text-xl"></i>
                        <Ripple />
                    </a>
                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                        <i className="pi pi-cog text-xl"></i>
                        <Ripple />
                    </a>
                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center bg-pink-500 text-white border-2 border-pink-600 hover:bg-pink-600 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                        <i className="pi pi-sign-out text-xl"></i>
                        <Ripple />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex flex-column flex-auto">
            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto lg:ml-5">

            </div>
        </div>
    </div>
</div>
    `;

    const block13 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-13" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-center px-3 py-5 border-bottom-1 surface-border" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
            </div>
            <div className="flex justify-content-center py-5">
                <SelectButton optionValue="value" optionLabel="name" options={menuOptions} value={selectedMenuOption} unselectable={false} onChange={(e) => setSelectedMenuOption(e.value)} />
            </div>
            <div className="overflow-y-auto px-5 flex-1">
                {selectedMenuOption === 0 ? (
                    <ul className="list-none p-0 m-0">
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors text-primary" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-home mr-2"></i>
                                <span className="font-medium">Dashboard</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-bookmark mr-2 "></i>
                                <span className="font-medium">Bookmarks</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-users mr-2 "></i>
                                <span className="font-medium">Team</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-comments mr-2"></i>
                                <span className="font-medium">Messages</span>
                                <Badge value="5" className="ml-auto"></Badge>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-calendar mr-2"></i>
                                <span className="font-medium">Calendar</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                ) : (
                    <ul className="list-none p-0 m-0">
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-discord mr-2"></i>
                                <span className="font-medium">Discord</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-slack mr-2"></i>
                                <span className="font-medium">Slack</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors" style={{ borderRadius: '12px' }}>
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">GitHub</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                )}
            </div>
            <div className="border-top-1 surface-border p-3 flex justify-content-center column-gap-5">
                <a className="p-ripple cursor-pointer text-purple-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                    <i className="pi pi-chart-pie text-3xl"></i>
                    <Ripple />
                </a>
                <a className="p-ripple cursor-pointer text-orange-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                    <i className="pi pi-bolt text-3xl"></i>
                    <Ripple />
                </a>
                <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" style={{ width: '42px', height: '42px' }} alt="avatar-f-1"/>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column flex-auto surface-ground p-5">
        <div className="surface-card flex flex-column flex-auto border-round-xl p-5">
            <div className="flex justify-content-between align-items-center relative lg:static mb-5 column-gap-5">
                <div className="flex align-items-center">
                    <StyleClass nodeRef={btnRef58} enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" selector="#app-sidebar-13" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                        <Button ref={btnRef58} className="p-button-link p-link cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-700 mr-3">
                            <i className="pi pi-bars text-4xl"></i>
                        </Button>
                    </StyleClass>
                    <div className="font-medium">
                        Welcome back, <span className="font-bold">Christina!</span> 👋
                    </div>
                </div>
                <div>
                    <StyleClass nodeRef={btnRef59} enterClassName="hidden" selector="@next" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <a ref={btnRef59} className="p-ripple cursor-pointer block lg:hidden text-700">
                            <i className="pi pi-ellipsis-v text-2xl"></i>

                            <Ripple />
                        </a>
                    </StyleClass>
                    <ul className="list-none p-3 lg:p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:border-round-none border-round-xl surface-overlay border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                        <li>
                            <span className="p-input-icon-left lg:mr-3 mb-3 lg:mb-0">
                                <i className="pi pi-search"></i>
                                <InputText type="text" className="border-round-3xl w-8rem sm:w-full" placeholder="Search" />
                            </span>
                        </li>
                        <li>
                            <Button className="border-round-3xl white-space-nowrap w-full lg:w-auto" iconPos="right" icon="pi pi-plus" label="Add Task" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-2 border-dashed surface-border surface-50 flex-auto border-round-xl"></div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Sidebar Layouts</div>
            <BlockViewer
                header="Dim Sidebar with Topbar"
                code={block1}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-1"
                        className="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-300.svg"
                                    alt="hyper-300"
                                    height={30}
                                />
                            </div>
                            <div className="overflow-y-auto mt-3">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">
                                                Dashboard
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">
                                                Bookmarks
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef1}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <a
                                                ref={btnRef1}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                            >
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">
                                                    Reports
                                                </span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef2}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef2}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                    transition-duration-150 transition-colors w-full"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Revenue
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                            transition-duration-150 transition-colors w-full"
                                                        >
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">
                                                                View
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                            transition-duration-150 transition-colors w-full"
                                                        >
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">
                                                                Search
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                    transition-duration-150 transition-colors w-full"
                                                >
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Expenses
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">
                                                Team
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">
                                                Messages
                                            </span>
                                            <span
                                                className="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle"
                                                style={{
                                                    minWidth: "1.5rem",
                                                    height: "1.5rem",
                                                }}
                                            >
                                                3
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">
                                                Calendar
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto mx-3">
                                <hr className="mb-3 border-top-1 border-bluegray-600" />
                                <ul className="list-none p-2 m-0 hidden">
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-user mr-2"></i>
                                            <span className="font-medium">
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors w-full"
                                        >
                                            <i className="pi pi-sign-out mr-2"></i>
                                            <span className="font-medium">
                                                Sign Out
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <StyleClass
                                    nodeRef={btnRef3}
                                    selector="@prev"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                >
                                    <a
                                        ref={btnRef3}
                                        className="p-ripple my-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors w-full"
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-2"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <span className="font-medium">
                                            Amy Elsner
                                        </span>
                                        <i className="pi pi-chevron-up ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef4}
                                    selector="#app-sidebar-1"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef4}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        className="border-none"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef5}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef5}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Grouped Menu"
                code={block2}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-2"
                        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-700.svg"
                                    alt="hyper-700"
                                    height={30}
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef6}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef6}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    FAVORITES
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">
                                                        Dashboard
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-bookmark mr-2"></i>
                                                    <span className="font-medium">
                                                        Bookmarks
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef7}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef7}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef8}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef8}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                                            >
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-table mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-search mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-users mr-2"></i>
                                                    <span className="font-medium">
                                                        Team
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef9}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef9}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    APPLICATION
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-folder mr-2"></i>
                                                    <span className="font-medium">
                                                        Projects
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-bar mr-2"></i>
                                                    <span className="font-medium">
                                                        Performance
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto mx-3">
                                <hr className="mb-3 border-top-1 surface-border" />
                                <a className="p-ripple my-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef10}
                                    selector="#app-sidebar-2"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef10}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        type="search"
                                        className="border-none"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef11}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef11}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark Sidebar with Grouped Menu"
                code={block3}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-3"
                        className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-300.svg"
                                    alt="hyper-300"
                                    height={30}
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <span className="block p-3 text-gray-600">
                                            FAVORITES
                                        </span>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">
                                                Dashboard
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">
                                                Bookmarks
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef12}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <a
                                                ref={btnRef12}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                            >
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">
                                                    Reports
                                                </span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef13}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef13}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Revenue
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">
                                                                View
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">
                                                                Search
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Expenses
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">
                                                Team
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">
                                                Messages
                                            </span>
                                            <Ripple />
                                            <span
                                                className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                style={{
                                                    minWidth: "1.5rem",
                                                    height: "1.5rem",
                                                }}
                                            >
                                                3
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">
                                                Calendar
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <span className="block p-3 text-600">
                                            APPLICATION
                                        </span>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-folder mr-2"></i>
                                            <span className="font-medium">
                                                Projects
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">
                                                Reports
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto mx-3">
                                <hr className="mb-3 border-top-1 border-gray-800" />
                                <a className="p-ripple my-3 flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef14}
                                    selector="#app-sidebar-3"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef14}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        className="border-none"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef15}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef15}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Narrow Sidebar"
                code={block4}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-4"
                        className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-5rem select-none"
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-500"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-light.svg"
                                    alt="hyper-light"
                                    height={30}
                                />
                            </div>
                            <div className="mt-3 select-none">
                                <ul className="list-none p-3 lg:py-3 lg:px-2 m-0">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                            <span className="font-medium inline lg:hidden">
                                                Dashboard
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-bookmark mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                            <span className="font-medium inline lg:hidden">
                                                Bookmarks
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-users mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                            <span className="font-medium inline lg:hidden">
                                                Team
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="lg:relative">
                                        <StyleClass
                                            nodeRef={btnRef16}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef16}
                                                className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                            >
                                                <i className="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-xl p-overlay-badge">
                                                    <Badge />
                                                </i>
                                                <span className="font-medium inline lg:hidden">
                                                    Reports
                                                </span>
                                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem">
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef17}
                                                    selector="@next"
                                                    toggleClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef17}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Revenue
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">
                                                                View
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">
                                                                Search
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Expenses
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                            <span className="font-medium inline lg:hidden">
                                                Calendar
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                            <span className="font-medium inline lg:hidden">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto mx-2">
                                <hr className="mb-3 border-top-1 border-gray-800" />
                                <a
                                    className="p-ripple my-3 flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-300 hover:text-0
                        transition-duration-150 transition-colors w-full"
                                >
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2 lg:mr-0"
                                        style={{ width: "32px", height: "32" }}
                                        alt="avatar-f-1"
                                        />
                                    <span className="font-medium inline lg:hidden">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef18}
                                    selector="#app-sidebar-4"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef18}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        className="border-none"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef19}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef19}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Narrow Sidebar with Titles"
                code={block5}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-5"
                        className="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none"
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center justify-content-center flex-shrink-0 bg-orange-500"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-light.svg"
                                    alt="hyper-light"
                                    height={30}
                                />
                            </div>
                            <div className="mt-3">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Home
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Search
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Team
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef20}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef20}
                                                className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                            >
                                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg p-overlay-badge">
                                                    <Badge severity="danger" />
                                                </i>
                                                <span className="font-medium inline text-base lg:text-xs lg:block">
                                                    Reports
                                                </span>
                                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem">
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef21}
                                                    selector="@next"
                                                    toggleClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef21}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Revenue
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">
                                                                View
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">
                                                                Search
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Expenses
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Events
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Options
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto mx-3">
                                <hr className="mb-3  border-top-1 border-gray-800" />
                                <a className="p-ripple my-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium inline lg:hidden">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef22}
                                    selector="#app-sidebar-5"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef22}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        type="search"
                                        className="border-none"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef23}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef23}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="2 Column with Titles"
                code={block6}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-6"
                        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none w-12rem bg-indigo-800 animation-duration-300 animation-ease-in-out"
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center justify-content-center flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/bastion.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="my-3 p-3">
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search text-indigo-50"></i>
                                    <InputText className="appearance-none border-none bg-indigo-700 text-indigo-50 w-full" />
                                </span>
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0 flex flex-wrap">
                                    <li className="w-6 text-center">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-home text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Home
                                        </div>
                                    </li>
                                    <li className="w-6 text-center">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-star-fill text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Favorites
                                        </div>
                                    </li>
                                    <li className="w-6 text-center mt-3">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-users text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Users
                                        </div>
                                    </li>
                                    <li className="w-6 text-center mt-3">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-comments text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Chart
                                        </div>
                                    </li>
                                    <li className="w-6 text-center mt-3">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-calendar text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Calendar
                                        </div>
                                    </li>
                                    <li className="w-6 text-center mt-3">
                                        <a
                                            className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <i className="pi pi-cog text-2xl"></i>
                                            <Ripple />
                                        </a>
                                        <div className="mt-2 text-indigo-200 font-medium text-sm">
                                            Settings
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto border-top-1 border-indigo-700 p-3 flex justify-content-between">
                                <a
                                    className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                        alt="avatar-f-6"
                                    />
                                    <Ripple />
                                </a>
                                <a
                                    className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <i className="pi pi-slack text-xl"></i>
                                    <Ripple />
                                </a>
                                <a
                                    className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <i className="pi pi-github text-xl"></i>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef24}
                                    selector="#app-sidebar-6"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef24}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                            <StyleClass
                                nodeRef={btnRef25}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef25}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
                                            alt="avatar-f-6"
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Glassmorphic Light"
                code={block7}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div
                    className="min-h-screen flex relative lg:static"
                    style={{
                        backgroundImage:
                            "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
                    }}
                >
                    <div
                        id="app-sidebar-7"
                        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30"
                        style={{ width: "280px", backdropFilter: "blur(10px)" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-700.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef26}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef26}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    FAVORITES
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">
                                                        Dashboard
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-bookmark mr-2"></i>
                                                    <span className="font-medium">
                                                        Bookmarks
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef27}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef27}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                        style={{
                                                            borderRadius:
                                                                "30px",
                                                        }}
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef28}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef28}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                                style={{
                                                                    borderRadius:
                                                                        "30px",
                                                                }}
                                                            >
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-table mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-search mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                            style={{
                                                                borderRadius:
                                                                    "30px",
                                                            }}
                                                        >
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-users mr-2"></i>
                                                    <span className="font-medium">
                                                        Team
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <Ripple />
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef29}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef29}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-gray-700 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    APPLICATION
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-folder mr-2"></i>
                                                    <span className="font-medium">
                                                        Projects
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-chart-bar mr-2"></i>
                                                    <span className="font-medium">
                                                        Performance
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto border-top-1 border-white-alpha-40">
                                <ul className="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-user mr-2"></i>
                                            <span className="font-medium">
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-sign-out mr-2"></i>
                                            <span className="font-medium">
                                                Sign Out
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <StyleClass
                                    nodeRef={btnRef30}
                                    selector="@prev"
                                    enterClassName="hidden"
                                    enterActiveClassName="slidedown"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="slideup"
                                >
                                    <a
                                        ref={btnRef30}
                                        className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-purple-50 text-gray-800 cursor-pointer text-gray-800
                        transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-2"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <span className="font-medium">
                                            Amy Elsner
                                        </span>
                                        <i className="pi pi-chevron-up ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef31}
                                    selector="#app-sidebar-7"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef31}
                                        className="p-ripple cursor-pointer block lg:hidden text-gray-800 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                            <StyleClass
                                nodeRef={btnRef32}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef32}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-800"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0"
                                style={{ backdropFilter: "blur(10px)" }}
                            >
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-40">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-purple-50 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
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
                                            <div className="text-gray-900 font-medium">
                                                Josephine Lillard
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark Gradient"
                code={block8}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div
                    className="min-h-screen flex relative lg:static"
                    style={{
                        backgroundImage:
                            "linear-gradient(60deg, #29323c 0%, #485563 100%)",
                    }}
                >
                    <div
                        id="app-sidebar-8"
                        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out border-white-alpha-10"
                        style={{
                            width: "280px",
                            backgroundImage:
                                "linear-gradient(60deg, #29323c 0%, #2f3844 100%)",
                        }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-300.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef33}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef33}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    FAVORITES
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">
                                                        Dashboard
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-bookmark mr-2"></i>
                                                    <span className="font-medium">
                                                        Bookmarks
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef34}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef34}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                        style={{
                                                            borderRadius:
                                                                "30px",
                                                        }}
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef35}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef35}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                style={{
                                                                    borderRadius:
                                                                        "30px",
                                                                }}
                                                            >
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-table mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-search mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                            style={{
                                                                borderRadius:
                                                                    "30px",
                                                            }}
                                                        >
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-users mr-2"></i>
                                                    <span className="font-medium">
                                                        Team
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef36}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef36}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    APPLICATION
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-folder mr-2"></i>
                                                    <span className="font-medium">
                                                        Projects
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-chart-bar mr-2"></i>
                                                    <span className="font-medium">
                                                        Performance
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto border-top-1 border-white-alpha-10">
                                <ul className="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-user mr-2"></i>
                                            <span className="font-medium">
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">
                                                Settings
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            <i className="pi pi-sign-out mr-2"></i>
                                            <span className="font-medium">
                                                Sign Out
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <StyleClass
                                    nodeRef={btnRef37}
                                    selector="@prev"
                                    enterClassName="hidden"
                                    enterActiveClassName="slidedown"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="slideup"
                                >
                                    <a
                                        ref={btnRef37}
                                        className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-700 text-gray-300 cursor-pointer text-gray-300
                        transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-2"
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <span className="font-medium">
                                            Amy Elsner
                                        </span>
                                        <i className="pi pi-chevron-up ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static border-white-alpha-10"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef38}
                                    selector="#app-sidebar-8"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef38}
                                        className="p-ripple cursor-pointer block lg:hidden text-gray-300 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </div>
                            <StyleClass
                                nodeRef={btnRef39}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef39}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-300"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>

                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(60deg, #29323c 0%, #485563 100%)",
                                    borderRadius: "30px",
                                }}
                            >
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i
                                            className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"
                                            severity="danger"
                                        >
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-10">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
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
                                            <div className="text-gray-300 font-medium">
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed border-round flex-auto border-white-alpha-10"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Narrow Sidebar with Borders"
                code={block9}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-9"
                        className="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none"
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center justify-content-center flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-cyan.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="mt-3">
                                <ul className="list-none p-0 m-0">
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors">
                                            <i className="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Home
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                                            <i className="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Search
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                                            <i className="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Team
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef40}
                                            selector="@next"
                                            enterClassName="hidden"
                                            leaveToClassName="hidden"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef40}
                                                className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                            >
                                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge">
                                                    <Badge severity="danger">
                                                        3
                                                    </Badge>
                                                </i>
                                                <span className="font-medium inline text-base lg:text-xs lg:block">
                                                    Reports
                                                </span>
                                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef41}
                                                    selector="@next"
                                                    toggleClassName="hidden"
                                                >
                                                    <a
                                                        ref={btnRef41}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Revenue
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">
                                                                View
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">
                                                                Search
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Expenses
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                                            <i className="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Events
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                                            <i className="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                            <span className="font-medium inline text-base lg:text-xs lg:block">
                                                Options
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                <a className="p-ripple m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2 lg:mr-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium inline lg:hidden">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border"
                            style={{ height: "60px" }}
                        >
                            <div className="flex">
                                <StyleClass
                                    nodeRef={btnRef42}
                                    selector="#app-sidebar-9"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef42}
                                        className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                    >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        className="border-none w-10rem sm:w-20rem"
                                        placeholder="Search"
                                    />
                                </span>
                            </div>
                            <StyleClass
                                nodeRef={btnRef43}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef43}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger"></Badge>
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none">
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                                                Amy Elsner
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Ghost Menu"
                code={block10}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-10"
                        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none surface-ground border-right-1 lg:border-right-none surface-border"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-700.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <div className="p-3">
                                    <div className="p-input-icon-left w-full">
                                        <i className="pi pi-search"></i>
                                        <InputText
                                            className="border-1 surface-border w-full"
                                            placeholder="Search"
                                            style={{ borderRadius: "30px" }}
                                        />
                                    </div>
                                </div>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <div className="p-3 flex align-items-center justify-content-between text-600r">
                                            <span className="font-bold text-800">
                                                FAVORITES
                                            </span>
                                            <Ripple />
                                        </div>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-blue-500 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">
                                                        Dashboard
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-bookmark mr-2"></i>
                                                    <span className="font-medium">
                                                        Bookmarks
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef44}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef44}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors"
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef45}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef45}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors"
                                                            >
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                                    <i className="pi pi-table mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                                    <i className="pi pi-search mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-users mr-2"></i>
                                                    <span className="font-medium">
                                                        Team
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <div className="p-3 flex align-items-center justify-content-between text-600">
                                            <span className="font-bold text-800">
                                                APPLICATION
                                            </span>
                                            <Ripple />
                                        </div>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-folder mr-2"></i>
                                                    <span className="font-medium">
                                                        Projects
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-chart-bar mr-2"></i>
                                                    <span className="font-medium">
                                                        Performance
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <a className="p-ripple m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex align-items-center justify-content-between lg:justify-content-start px-5 relative lg:static"
                            style={{ height: "60px" }}
                        >
                            <StyleClass
                                nodeRef={btnRef46}
                                selector="#app-sidebar-10"
                                enterClassName="hidden"
                                enterActiveClassName="fadeinleft"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutleft"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef46}
                                    className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <StyleClass
                                nodeRef={btnRef47}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef47}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 mt-0 mb-0 ml-0 mr-3 lg:mr-0 hidden lg:flex lg:align-items-center select-none lg:flex-row border-round
                    border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static surface-ground lg:w-full"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i
                                            className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
                                            severity="danger"
                                        >
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Settings
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Profile
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none ml-auto">
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                                                Amy Elsner
                                            </div>
                                            <span className="text-600 font-medium text-sm">
                                                Developer
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Colored Icons with Outline"
                code={block11}
                previewStyle={{ height: "100vh", overflow: "hidden" }}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-11"
                        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center px-5 flex-shrink-0"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-700.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef48}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef48}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer border-2 border-transparent border-rounded"
                                            >
                                                <span className="font-medium">
                                                    FAVORITES
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors text-indigo-500"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">
                                                        Dashboard
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-bookmark mr-2 text-blue-500"></i>
                                                    <span className="font-medium">
                                                        Bookmarks
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <StyleClass
                                                    nodeRef={btnRef49}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef49}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                    >
                                                        <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef50}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef50}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                                style={{
                                                                    borderRadius:
                                                                        "12px",
                                                                }}
                                                            >
                                                                <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-table text-purple-500 mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-search mr-2 text-purple-500"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                            style={{
                                                                borderRadius:
                                                                    "12px",
                                                            }}
                                                        >
                                                            <i className="pi pi-chart-line mr-2 text-purple-500"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-users mr-2 text-green-500"></i>
                                                    <span className="font-medium">
                                                        Team
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-comments mr-2 text-cyan-500 "></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-indigo-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-calendar mr-2 text-teal-500 "></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2 text-pink-500 "></i>
                                                    <span className="font-medium">
                                                        Settings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass
                                            nodeRef={btnRef51}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="slidedown"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="slideup"
                                        >
                                            <div
                                                ref={btnRef51}
                                                className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                                            >
                                                <span className="font-medium">
                                                    APPLICATIONS
                                                </span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-discord mr-2 text-cyan-500"></i>
                                                    <span className="font-medium">
                                                        Discord
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-slack mr-2 text-purple-500"></i>
                                                    <span className="font-medium">
                                                        Slack
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                >
                                                    <i className="pi pi-github mr-2 text-blue-500"></i>
                                                    <span className="font-medium">
                                                        GitHub
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                <a
                                    className="p-ripple m-3 flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors"
                                    style={{ borderRadius: "12px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <span className="font-medium">
                                        Amy Elsner
                                    </span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
                            style={{ height: "60px" }}
                        >
                            <StyleClass
                                nodeRef={btnRef52}
                                selector="#app-sidebar-11"
                                enterClassName="hidden"
                                enterActiveClassName="fadeinleft"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutleft"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef52}
                                    className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <StyleClass
                                nodeRef={btnRef53}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef53}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row w-auto lg:w-full
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                            >
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Settings
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Profile
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Favorites
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
                                        <i className="pi pi-pencil text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Edit
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none ml-auto">
                                    <a
                                        className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors"
                                    >
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Floating Menu"
                code={block12}
                previewStyle={{ height: "100vh", overflow: "auto" }}
            >
                <div className="min-h-screen flex flex-column surface-ground">
                    <div className="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static">
                        <StyleClass
                            nodeRef={btnRef54}
                            selector="#app-sidebar-12"
                            enterClassName="hidden"
                            enterActiveClassName="fadeinleft"
                            leaveToClassName="hidden"
                            leaveActiveClassName="fadeoutleft"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef54}
                                className="p-ripple cursor-pointer block lg:hidden text-700"
                            >
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <img
                            src="/demo/images/blocks/logos/hyper-700.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6"
                        />
                        <StyleClass
                            nodeRef={btnRef55}
                            selector="@next"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef55}
                                className="p-ripple cursor-pointer block lg:hidden text-700"
                            >
                                <i className="pi pi-ellipsis-v text-2xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none p-3 lg:p-0 m-0 lg:align-items-center select-none flex-column lg:flex-row absolute hidden lg:flex lg:static surface-overlay right-0 top-100 z-1 shadow-2 lg:shadow-none">
                            <li className="lg:mr-1">
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="lg:mr-1">
                                <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" />
                                    </i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 lg:mr-0"
                                        style={{
                                            width: "25px",
                                            height: "25px",
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
                    <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
                        <li className="pr-3">
                            <a className="cursor-pointer">
                                <i className="pi pi-home text-600"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-600"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-600 white-space-nowrap">
                                Favorites
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-600"></i>
                        </li>
                        <li className="px-2">
                            <a className="cursor-pointer text-purple-500 white-space-nowrap">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <div className="flex relative lg:static p-5 flex-auto">
                        <div
                            id="app-sidebar-12"
                            className="surface-card hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none shadow-2"
                            style={{ width: "280px", borderRadius: "12px" }}
                        >
                            <div className="flex flex-column h-full">
                                <div className="overflow-y-auto">
                                    <div className="p-3">
                                        <div className="p-input-icon-left w-full">
                                            <i className="pi pi-search"></i>
                                            <InputText
                                                className="border-1 surface-border w-full"
                                                placeholder="Search"
                                                style={{ borderRadius: "30px" }}
                                            />
                                        </div>
                                    </div>
                                    <ul className="list-none px-3 pb-3 pt-0 m-0">
                                        <li>
                                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                                <span className="font-medium text-sm text-900">
                                                    FAVORITES
                                                </span>
                                                <Ripple />
                                            </div>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 bg-purple-50 transition-duration-150 transition-colors text-purple-500 border-purple-500 border-right-2">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">
                                                            Dashboard
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">
                                                            Bookmarks
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass
                                                        nodeRef={btnRef56}
                                                        selector="@next"
                                                        enterClassName="hidden"
                                                        enterActiveClassName="slidedown"
                                                        leaveToClassName="hidden"
                                                        leaveActiveClassName="slideup"
                                                    >
                                                        <a
                                                            ref={btnRef56}
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent"
                                                        >
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Reports
                                                            </span>
                                                            <i className="pi pi-chevron-down ml-auto"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass
                                                                nodeRef={
                                                                    btnRef57
                                                                }
                                                                selector="@next"
                                                                enterClassName="hidden"
                                                                enterActiveClassName="slidedown"
                                                                leaveToClassName="hidden"
                                                                leaveActiveClassName="slideup"
                                                            >
                                                                <a
                                                                    ref={
                                                                        btnRef57
                                                                    }
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent"
                                                                >
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Revenue
                                                                    </span>
                                                                    <i className="pi pi-chevron-down ml-auto"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">
                                                                            View
                                                                        </span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">
                                                                            Search
                                                                        </span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Expenses
                                                                </span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">
                                                            Team
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">
                                                            Messages
                                                        </span>

                                                        <span
                                                            className="inline-flex align-items-center justify-content-center ml-auto bg-purple-500 text-0 border-circle"
                                                            style={{
                                                                minWidth:
                                                                    "1.5rem",
                                                                height: "1.5rem",
                                                            }}
                                                        >
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                                <span className="font-medium text-sm text-900">
                                                    APPLICATION
                                                </span>
                                                <Ripple />
                                            </div>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">
                                                            Projects
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">
                                                            Performance
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">
                                                            Settings
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto border-top-1 surface-border p-3 flex justify-content-between">
                                    <a
                                        className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    >
                                        <i className="pi pi-file text-xl"></i>
                                        <Ripple />
                                    </a>
                                    <a
                                        className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    >
                                        <i className="pi pi-star text-xl"></i>
                                        <Ripple />
                                    </a>
                                    <a
                                        className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    >
                                        <i className="pi pi-cog text-xl"></i>
                                        <Ripple />
                                    </a>
                                    <a
                                        className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center bg-pink-500 text-white border-2 border-pink-600 hover:bg-pink-600 text-600 transition-colors transition-duration-150 border-circle"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    >
                                        <i className="pi pi-sign-out text-xl"></i>
                                        <Ripple />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-column flex-auto">
                            <div className="border-2 border-dashed surface-border border-round surface-section flex-auto lg:ml-5"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="SelectButton Menu"
                style={{ height: "100vh", overflow: "hidden" }}
                code={block13}
            >
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar-13"
                        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                        style={{ width: "280px" }}
                    >
                        <div className="flex flex-column h-full">
                            <div
                                className="flex align-items-center justify-content-center px-3 py-5 border-bottom-1 surface-border"
                                style={{ height: "60px" }}
                            >
                                <img
                                    src="/demo/images/blocks/logos/hyper-700.svg"
                                    alt="Image"
                                    height="30"
                                />
                            </div>

                            <div className="flex justify-content-center py-5">
                                <SelectButton
                                    optionValue="value"
                                    optionLabel="name"
                                    options={menuOptions}
                                    value={selectedMenuOption}
                                    unselectable={false}
                                    onChange={(e) =>
                                        setSelectedMenuOption(e.value)
                                    }
                                />
                            </div>

                            <div className="overflow-y-auto px-5 flex-1">
                                {selectedMenuOption === 0 ? (
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors text-primary"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-home mr-2"></i>
                                                <span className="font-medium">
                                                    Dashboard
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-bookmark mr-2 "></i>
                                                <span className="font-medium">
                                                    Bookmarks
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-users mr-2 "></i>
                                                <span className="font-medium">
                                                    Team
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-comments mr-2"></i>
                                                <span className="font-medium">
                                                    Messages
                                                </span>
                                                <Badge
                                                    value="5"
                                                    className="ml-auto"
                                                ></Badge>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-calendar mr-2"></i>
                                                <span className="font-medium">
                                                    Calendar
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-discord mr-2"></i>
                                                <span className="font-medium">
                                                    Discord
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-slack mr-2"></i>
                                                <span className="font-medium">
                                                    Slack
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors"
                                                style={{ borderRadius: "12px" }}
                                            >
                                                <i className="pi pi-github mr-2"></i>
                                                <span className="font-medium">
                                                    GitHub
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="border-top-1 surface-border p-3 flex justify-content-center column-gap-5">
                                <a className="p-ripple cursor-pointer text-purple-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                                    <i className="pi pi-chart-pie text-3xl"></i>
                                    <Ripple />
                                </a>
                                <a className="p-ripple cursor-pointer text-orange-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                                    <i className="pi pi-bolt text-3xl"></i>
                                    <Ripple />
                                </a>
                                <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle">
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        style={{
                                            width: "42px",
                                            height: "42px",
                                        }}
                                        alt="avatar-f-1"
                                    />
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column flex-auto surface-ground p-5">
                        <div className="surface-card flex flex-column flex-auto border-round-xl p-5">
                            <div className="flex justify-content-between align-items-center relative lg:static mb-5 column-gap-5">
                                <div className="flex align-items-center">
                                    <StyleClass
                                        nodeRef={btnRef58}
                                        enterClassName="hidden"
                                        enterActiveClassName="fadeinleft"
                                        leaveToClassName="hidden"
                                        selector="#app-sidebar-13"
                                        leaveActiveClassName="fadeoutleft"
                                        hideOnOutsideClick
                                    >
                                        <Button
                                            ref={btnRef58}
                                            className="p-button-link p-link cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-700 mr-3"
                                        >
                                            <i className="pi pi-bars text-4xl"></i>
                                        </Button>
                                    </StyleClass>

                                    <div className="font-medium">
                                        Welcome back,{" "}
                                        <span className="font-bold">
                                            Christina!
                                        </span>{" "}
                                        👋
                                    </div>
                                </div>
                                <div>
                                    <StyleClass
                                        nodeRef={btnRef59}
                                        enterClassName="hidden"
                                        selector="@next"
                                        enterActiveClassName="fadein"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeout"
                                        hideOnOutsideClick
                                    >
                                        <a
                                            ref={btnRef59}
                                            className="p-ripple cursor-pointer block lg:hidden text-700"
                                        >
                                            <i className="pi pi-ellipsis-v text-2xl"></i>

                                            <Ripple />
                                        </a>
                                    </StyleClass>

                                    <ul
                                        className="list-none p-3 lg:p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:border-round-none border-round-xl
                                    surface-overlay border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                                    >
                                        <li>
                                            <span className="p-input-icon-left lg:mr-3 mb-3 lg:mb-0">
                                                <i className="pi pi-search"></i>
                                                <InputText
                                                    type="text"
                                                    className="border-round-3xl w-8rem sm:w-full"
                                                    placeholder="Search"
                                                />
                                            </span>
                                        </li>
                                        <li>
                                            <Button
                                                className="border-round-3xl white-space-nowrap w-full lg:w-auto"
                                                iconPos="right"
                                                icon="pi pi-plus"
                                                label="Add Task"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-2 border-dashed surface-border surface-50 flex-auto border-round-xl"></div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default SidebarLayout;
