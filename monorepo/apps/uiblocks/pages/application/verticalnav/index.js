import React, { useRef, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const VerticalNav = () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);

    const block1 = `
<div className="surface-card shadow-2 border-round w-full lg:w-auto select-none" style={{ minWidth: "16rem" }}>
    <ul className="list-none p-2 m-0">
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-home mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Dashboard
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-bookmark mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Bookmarks
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem"}}>
                    3
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-users mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Team
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-comments mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Messages
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-calendar mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Calendar
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem"}}>
                    2
                </span>
                <Ripple />
            </a>
        </li>
    </ul>
</div>
`;

    const block2 = `
<div className="surface-card shadow-2 border-round w-full lg:w-auto select-none" style={{ minWidth: "16rem" }} >
    <ul className="list-none p-2 m-0">
        <li>
            <div className="p-3 text-500 font-medium">HOME</div>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-home mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Dashboard
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-bookmark mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Bookmarks
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem"}}>
                    3
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-users mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Team
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-comments mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Messages
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-calendar mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Calendar
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem" }}>
                    2
                </span>
                <Ripple />
            </a>
        </li>
    </ul>
    <ul className="list-none p-2 m-0 border-top-1 surface-border">
        <li>
            <div className="p-3 text-500 font-medium">
                ORGANIZATION
            </div>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-home mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Overview
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-bookmark mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Security
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem" }}>
                    3
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-users mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Domains
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-calendar mr-2 text-700"></i>
                <span className="font-medium text-700">
                    Reports
                </span>
                <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem" }}>
                    2
                </span>
                <Ripple />
            </a>
        </li>
    </ul>
</div>
`;

    const block3 = `
<div className="bg-indigo-500 shadow-2 border-round w-full lg:w-auto select-none" style={{ minWidth: "16rem" }}>
    <ul className="list-none p-2 m-0">
        <li>
            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer">
                    <span className="font-medium">HOME</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">
                            Dashboard
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-bookmark mr-2"></i>
                        <span className="font-medium">
                            Bookmarks
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem" }}>
                            3
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">
                            Team
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-comments mr-2"></i>
                        <span className="font-medium">
                            Messages
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">
                            Calendar
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            2
                        </span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
        <li>
            <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                <div ref={btnRef2} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" >
                    <span className="font-medium">
                        ORGANIZATION
                    </span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">
                            Overview
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-bookmark mr-2"></i>
                        <span className="font-medium">
                            Security
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            3
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">
                            Domains
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">
                            Reports
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            2
                        </span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
`;

    const block4 = `
<div className="bg-gray-900 shadow-2 border-round select-none">
    <ul className="list-none p-2 m-0">
        <li>
            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                <div ref={btnRef3} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer">
                    <span className="font-medium">HOME</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>

            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <Ripple />
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">
                            Dashboard
                        </span>
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-bookmark mr-2"></i>
                        <span className="font-medium">
                            Bookmarks
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            3
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">
                            Team
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-comments mr-2"></i>
                        <span className="font-medium">
                            Messages
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">
                            Calendar
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            2
                        </span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
        <li>
            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer" >
                    <span className="font-medium">
                        ORGANIZATION
                    </span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">
                            Overview
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                        <a ref={btnRef5} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150" >
                            <i className="pi pi-chart-bar mr-2"></i>
                            <span className="font-medium">
                                Reports
                            </span>
                            <i className="pi pi-chevron-down ml-auto text-gray-600"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                <a ref={btnRef6} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150" >
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">
                                        Revenue
                                    </span>
                                    <i className="pi pi-chevron-down ml-auto text-gray-600"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-table mr-2"></i>
                                        <span className="font-medium">
                                            View
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
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
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
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
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-bookmark mr-2"></i>
                        <span className="font-medium">
                            Security
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem" }}>
                            3
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">
                            Domains
                        </span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
    `;

    const block5 = `
<div className="surface-card border-round shadow-2 select-none">
    <ul className="list-none p-2 m-0">
        <li>
            <StyleClass nodeRef={btnRef7} selector="#pb_profile_submenu" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <a ref={btnRef7} className="p-ripple flex p-2 align-items-center cursor-pointer">
                    <span className="mr-3 inline-flex">
                        <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" width="42" height="42" alt="avatar-f-2" />
                    </span>
                    <div>
                        <span className="font-medium text-900 mb-2">
                            Amanda Davis
                        </span>
                        <p className="mt-1 mb-0 text-600">
                            Administrator
                        </p>
                    </div>
                    <i className="pi pi-chevron-down text-700 ml-auto"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <div className="border-top-1 surface-border my-3" style={{ height: "1px" }}></div>
            <ul id="pb_profile_submenu" className="list-none p-0 m-0 overflow-hidden">
                <li className="mb-2">
                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-home text-500 mr-3 text-xl"></i>
                        <span>
                            <span className="block text-700 font-medium">
                                Dashboard
                            </span>
                            <p className="mt-1 mb-0 text-600 text-sm">
                                Control everything with ease
                            </p>
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-users text-500 mr-3 text-xl"></i>
                        <span>
                            <span className="block text-700 font-medium">
                                Users
                            </span>
                            <p className="mt-1 mb-0 text-600 text-sm">
                                Manage permissions
                            </p>
                        </span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: "1.5rem", height: "1.5rem", }} >
                            3
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-sliders-h text-500 mr-3 text-xl"></i>
                        <span>
                            <span className="block text-700 font-medium">
                                Tools
                            </span>
                            <p className="mt-1 mb-0 text-600 text-sm">
                                Import, Export and Site Health
                            </p>
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-th-large text-500 mr-3 text-xl"></i>
                        <span>
                            <span className="block text-700 font-medium">
                                Integrations
                            </span>
                            <p className="mt-1 mb-0 text-600 text-sm">
                                Slack, Discord and Wordpress
                            </p>
                        </span>
                        <Ripple />
                    </a>
                </li>
                <li className="mb-2">
                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-cog text-500 mr-3 text-xl"></i>
                        <span>
                            <span className="block text-700 font-medium">
                                Settings
                            </span>
                            <p className="mt-1 mb-0 text-600 text-sm">
                                Options, Privacy and Permalinks
                            </p>
                        </span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
        <li className="mb-2">
            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                Installed Plugins
                <Ripple />
            </a>
        </li>
        <li className="mb-2">
            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 flex align-items-center justify-content-between border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                <span>Updates</span>
                <i className="bg-blue-500 border-circle" style={{ width: "7px", height: "7px" }} ></i>
                <Ripple />
            </a>
        </li>
        <li className="mb-2">
            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                Reset Server
                <Ripple />
            </a>
        </li>
        <li className="mb-2">
            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                Log Out
                <Ripple />
            </a>
        </li>
    </ul>
</div>
    `;

    const block6 = `
<div className="surface-card select-none p-3">
    <div className="p-3 flex align-items-center text-900">
        <i className="pi pi-book mr-2"></i>
        <span className="font-medium">Organization</span>
    </div>
    <ul className="list-none pl-3 m-0">
        <li className="flex overflow-hidden">
            <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                {activeTab1 == 0 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
            </div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 0 ? 'text-primary' : '')} onClick={() => setActiveTab1(0)}>
                <span className="font-medium">Overview</span>
                <Ripple />
            </a>
        </li>
        <li className="flex overflow-hidden">
            <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                {activeTab1 === 1 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
            </div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 1 ? 'text-primary' : '')} onClick={() => setActiveTab1(1)}>
                <span className="font-medium">Security</span>
                <Ripple />
            </a>
        </li>
        <li className="flex overflow-hidden">
            <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                {activeTab1 === 2 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
            </div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 2 ? 'text-primary' : '')} onClick={() => setActiveTab1(2)}>
                <span className="font-medium">Reports</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-wrap overflow-hidden">
            <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                {activeTab1 === 3 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
            </div>
            <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <a ref={btnRef8} className={'p-ripple flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 3 ? 'text-primary' : '')}>
                    <span className="font-medium">Domains</span>
                    <span className="pi pi-angle-down text-600"></span>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="w-full m-0 p-0 overflow-hidden">
                <li className="flex align-items-stretch">
                    <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                        {activeTab1 === 4 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
                    </div>
                    <a className={'p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 4 ? 'text-primary' : null)} onClick={() => setActiveTab1(4)}>
                        <span className="font-medium">DNS Settings</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex align-items-stretch">
                    <div className="surface-200 flex flex-column align-items-center justify-content-center z-1" style={{ width: '2px' }}>
                        {activeTab1 === 5 ? ( <div className="bg-primary border-2 border-circle border-primary" style={{ width: '.75rem', height: '.75rem' }} /> ) : null}
                    </div>
                    <a className={'p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab1 === 5 ? 'text-primary' : null)} onClick={() => setActiveTab1(5)}>
                        <span className="font-medium">Renewal</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
    `;

    const block7 = `
<div className="surface-card select-none p-3">
    <div className="p-3 flex align-items-center text-900">
        <i className="pi pi-book mr-2"></i>
        <span className="font-medium">Organization</span>
    </div>
    <ul className="list-none pl-3 m-0">
        <li className="flex">
            <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 0 ? 'border-primary' : 'surface-border')}></div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 0 ? 'text-primary' : '')} onClick={() => setActiveTab2(0)}>
                <span className="font-medium">Overview</span>
                <Ripple />
            </a>
        </li>
        <li className="flex">
            <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 1 ? 'border-primary' : 'surface-border')}></div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 1 ? 'text-primary' : '')} onClick={() => setActiveTab2(1)}>
                <span className="font-medium">Security</span>
                <Ripple />
            </a>
        </li>
        <li className="flex">
            <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 2 ? 'border-primary' : 'surface-border')}></div>
            <a className={'p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 2 ? 'text-primary' : '')} onClick={() => setActiveTab2(2)}>
                <span className="font-medium">Reports</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-wrap">
            <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 3 ? 'border-primary' : 'surface-border')}></div>
            <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <a ref={btnRef9} className={'p-ripple flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 3 ? 'text-primary' : '')} onClick={() => setActiveTab2(3)}>
                    <span className="font-medium">Domains</span>
                    <span className="pi pi-angle-down text-600"></span>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="w-full m-0 p-0 overflow-hidden">
                <li className="flex">
                    <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 4 ? 'border-primary' : 'surface-border')}></div>
                    <a className={'p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 4 ? 'text-primary' : null)} onClick={() => setActiveTab2(4)}>
                        <span className="font-medium">DNS Settings</span>
                        <Ripple />
                    </a>
                </li>
                <li className="flex">
                    <div className={'border-left-2 flex flex-column align-items-center justify-content-center z-1 ' + (activeTab2 === 5 ? 'border-primary' : 'surface-border')}></div>
                    <a className={'p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 ' + (activeTab2 === 5 ? 'text-primary' : null)} onClick={() => setActiveTab2(5)}>
                        <span className="font-medium">Renewal</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Vertical Navigation</div>
            <BlockViewer
                header="Icons and Badges"
                code={block1}
                containerClassName="px-3 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <div
                    className="surface-card shadow-2 border-round w-full lg:w-auto select-none"
                    style={{ minWidth: "16rem" }}
                >
                    <ul className="list-none p-2 m-0">
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-home mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Dashboard
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-bookmark mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Bookmarks
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
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
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-users mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Team
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-comments mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Messages
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-calendar mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Calendar
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle"
                                    style={{
                                        minWidth: "1.5rem",
                                        height: "1.5rem",
                                    }}
                                >
                                    2
                                </span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Grouped"
                code={block2}
                containerClassName="px-3 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <div
                    className="surface-card shadow-2 border-round w-full lg:w-auto select-none"
                    style={{ minWidth: "16rem" }}
                >
                    <ul className="list-none p-2 m-0">
                        <li>
                            <div className="p-3 text-500 font-medium">HOME</div>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-home mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Dashboard
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-bookmark mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Bookmarks
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
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
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-users mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Team
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-comments mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Messages
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-calendar mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Calendar
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle"
                                    style={{
                                        minWidth: "1.5rem",
                                        height: "1.5rem",
                                    }}
                                >
                                    2
                                </span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                    <ul className="list-none p-2 m-0 border-top-1 surface-border">
                        <li>
                            <div className="p-3 text-500 font-medium">
                                ORGANIZATION
                            </div>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-home mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Overview
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-bookmark mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Security
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle"
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
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-users mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Domains
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-calendar mr-2 text-700"></i>
                                <span className="font-medium text-700">
                                    Reports
                                </span>
                                <span
                                    className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle"
                                    style={{
                                        minWidth: "1.5rem",
                                        height: "1.5rem",
                                    }}
                                >
                                    2
                                </span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Colored and Toggleable"
                code={block3}
                containerClassName="px-3 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <div
                    className="bg-indigo-500 shadow-2 border-round w-full lg:w-auto select-none"
                    style={{ minWidth: "16rem" }}
                >
                    <ul className="list-none p-2 m-0">
                        <li>
                            <StyleClass
                                nodeRef={btnRef1}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef1}
                                    className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer"
                                >
                                    <span className="font-medium">HOME</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">
                                            Dashboard
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">
                                            Bookmarks
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
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
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            Team
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">
                                            Messages
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">
                                            Calendar
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle"
                                            style={{
                                                minWidth: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            2
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
                        <li>
                            <StyleClass
                                nodeRef={btnRef2}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef2}
                                    className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer"
                                >
                                    <span className="font-medium">
                                        ORGANIZATION
                                    </span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">
                                            Overview
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">
                                            Security
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle"
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
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            Domains
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">
                                            Reports
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle"
                                            style={{
                                                minWidth: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            2
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark"
                code={block4}
                containerClassName="px-3 py-8 md:px-0 md:w-20rem md:mx-auto"
            >
                <div className="bg-gray-900 shadow-2 border-round select-none">
                    <ul className="list-none p-2 m-0">
                        <li>
                            <StyleClass
                                nodeRef={btnRef3}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef3}
                                    className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer"
                                >
                                    <span className="font-medium">HOME</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>

                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <Ripple />
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">
                                            Dashboard
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">
                                            Bookmarks
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
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
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            Team
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">
                                            Messages
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">
                                            Calendar
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle"
                                            style={{
                                                minWidth: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            2
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
                        <li>
                            <StyleClass
                                nodeRef={btnRef4}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef4}
                                    className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer"
                                >
                                    <span className="font-medium">
                                        ORGANIZATION
                                    </span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">
                                            Overview
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <StyleClass
                                        nodeRef={btnRef5}
                                        selector="@next"
                                        enterClassName="hidden"
                                        enterActiveClassName="slidedown"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="slideup"
                                    >
                                        <a
                                            ref={btnRef5}
                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150"
                                        >
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">
                                                Reports
                                            </span>
                                            <i className="pi pi-chevron-down ml-auto text-gray-600"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass
                                                nodeRef={btnRef6}
                                                selector="@next"
                                                enterClassName="hidden"
                                                enterActiveClassName="slidedown"
                                                leaveToClassName="hidden"
                                                leaveActiveClassName="slideup"
                                            >
                                                <a
                                                    ref={btnRef6}
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150"
                                                >
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">
                                                        Revenue
                                                    </span>
                                                    <i className="pi pi-chevron-down ml-auto text-gray-600"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                                        <i className="pi pi-table mr-2"></i>
                                                        <span className="font-medium">
                                                            View
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
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
                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
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
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">
                                            Security
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle"
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
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:text-white hover:bg-gray-800 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            Domains
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Profile"
                code={block5}
                containerClassName="px-3 py-8 md:px-0 md:w-20rem md:mx-auto"
            >
                <div className="surface-card border-round shadow-2 select-none">
                    <ul className="list-none p-2 m-0">
                        <li>
                            <StyleClass
                                nodeRef={btnRef7}
                                selector="#pb_profile_submenu"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <a
                                    ref={btnRef7}
                                    className="p-ripple flex p-2 align-items-center cursor-pointer"
                                >
                                    <span className="mr-3 inline-flex">
                                        <img
                                            src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png"
                                            width="42"
                                            height="42"
                                            alt="avatar-f-2"
                                        />
                                    </span>
                                    <div>
                                        <span className="font-medium text-900 mb-2">
                                            Amanda Davis
                                        </span>
                                        <p className="mt-1 mb-0 text-600">
                                            Administrator
                                        </p>
                                    </div>
                                    <i className="pi pi-chevron-down text-700 ml-auto"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <div
                                className="border-top-1 surface-border my-3"
                                style={{ height: "1px" }}
                            ></div>
                            <ul
                                id="pb_profile_submenu"
                                className="list-none p-0 m-0 overflow-hidden"
                            >
                                <li className="mb-2">
                                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-home text-500 mr-3 text-xl"></i>
                                        <span>
                                            <span className="block text-700 font-medium">
                                                Dashboard
                                            </span>
                                            <p className="mt-1 mb-0 text-600 text-sm">
                                                Control everything with ease
                                            </p>
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-users text-500 mr-3 text-xl"></i>
                                        <span>
                                            <span className="block text-700 font-medium">
                                                Users
                                            </span>
                                            <p className="mt-1 mb-0 text-600 text-sm">
                                                Manage permissions
                                            </p>
                                        </span>
                                        <span
                                            className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
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
                                <li className="mb-2">
                                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-sliders-h text-500 mr-3 text-xl"></i>
                                        <span>
                                            <span className="block text-700 font-medium">
                                                Tools
                                            </span>
                                            <p className="mt-1 mb-0 text-600 text-sm">
                                                Import, Export and Site Health
                                            </p>
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-th-large text-500 mr-3 text-xl"></i>
                                        <span>
                                            <span className="block text-700 font-medium">
                                                Integrations
                                            </span>
                                            <p className="mt-1 mb-0 text-600 text-sm">
                                                Slack, Discord and Wordpress
                                            </p>
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="p-ripple flex p-2 align-items-start hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-cog text-500 mr-3 text-xl"></i>
                                        <span>
                                            <span className="block text-700 font-medium">
                                                Settings
                                            </span>
                                            <p className="mt-1 mb-0 text-600 text-sm">
                                                Options, Privacy and Permalinks
                                            </p>
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                Installed Plugins
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 flex align-items-center justify-content-between border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                <span>Updates</span>
                                <i
                                    className="bg-blue-500 border-circle"
                                    style={{ width: "7px", height: "7px" }}
                                ></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                Reset Server
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="p-ripple block p-2 font-medium text-700 hover:surface-50 border-transparent border-1 hover:border-100 border-round cursor-pointer transition-colors transition-duration-150">
                                Log Out
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Indicator"
                code={block6}
                containerClassName="px-3 py-8 md:px-0 md:w-20rem md:mx-auto"
            >
                <div className="surface-card select-none p-3">
                    <div className="p-3 flex align-items-center text-900">
                        <i className="pi pi-book mr-2"></i>
                        <span className="font-medium">Organization</span>
                    </div>
                    <ul className="list-none pl-3 m-0">
                        <li className="flex overflow-hidden">
                            <div
                                className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                style={{ width: "2px" }}
                            >
                                {activeTab1 == 0 ? (
                                    <div
                                        className="bg-primary border-2 border-circle border-primary"
                                        style={{
                                            width: ".75rem",
                                            height: ".75rem",
                                        }}
                                    ></div>
                                ) : null}
                            </div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab1 === 0 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab1(0)}
                            >
                                <span className="font-medium">Overview</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex overflow-hidden">
                            <div
                                className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                style={{ width: "2px" }}
                            >
                                {activeTab1 === 1 ? (
                                    <div
                                        className="bg-primary border-2 border-circle border-primary"
                                        style={{
                                            width: ".75rem",
                                            height: ".75rem",
                                        }}
                                    ></div>
                                ) : null}
                            </div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab1 === 1 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab1(1)}
                            >
                                <span className="font-medium">Security</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex overflow-hidden">
                            <div
                                className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                style={{ width: "2px" }}
                            >
                                {activeTab1 === 2 ? (
                                    <div
                                        className="bg-primary border-2 border-circle border-primary"
                                        style={{
                                            width: ".75rem",
                                            height: ".75rem",
                                        }}
                                    ></div>
                                ) : null}
                            </div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab1 === 2 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab1(2)}
                            >
                                <span className="font-medium">Reports</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-wrap overflow-hidden">
                            <div
                                className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                style={{ width: "2px" }}
                            >
                                {activeTab1 === 3 ? (
                                    <div
                                        className="bg-primary border-2 border-circle border-primary"
                                        style={{
                                            width: ".75rem",
                                            height: ".75rem",
                                        }}
                                    ></div>
                                ) : null}
                            </div>
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
                                    className={
                                        "p-ripple flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                        (activeTab1 === 3 ? "text-primary" : "")
                                    }
                                >
                                    <span className="font-medium">Domains</span>
                                    <span className="pi pi-angle-down text-600"></span>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="w-full m-0 p-0 overflow-hidden">
                                <li className="flex align-items-stretch">
                                    <div
                                        className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                        style={{ width: "2px" }}
                                    >
                                        {activeTab1 === 4 ? (
                                            <div
                                                className="bg-primary border-2 border-circle border-primary"
                                                style={{
                                                    width: ".75rem",
                                                    height: ".75rem",
                                                }}
                                            ></div>
                                        ) : null}
                                    </div>
                                    <a
                                        className={
                                            "p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                            (activeTab1 === 4
                                                ? "text-primary"
                                                : null)
                                        }
                                        onClick={() => setActiveTab1(4)}
                                    >
                                        <span className="font-medium">
                                            DNS Settings
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex align-items-stretch">
                                    <div
                                        className="surface-200 flex flex-column align-items-center justify-content-center z-1"
                                        style={{ width: "2px" }}
                                    >
                                        {activeTab1 === 5 ? (
                                            <div
                                                className="bg-primary border-2 border-circle border-primary"
                                                style={{
                                                    width: ".75rem",
                                                    height: ".75rem",
                                                }}
                                            ></div>
                                        ) : null}
                                    </div>
                                    <a
                                        className={
                                            "p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                            (activeTab1 === 5
                                                ? "text-primary"
                                                : null)
                                        }
                                        onClick={() => setActiveTab1(5)}
                                    >
                                        <span className="font-medium">
                                            Renewal
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Colored Border"
                code={block7}
                containerClassName="px-3 py-8 md:px-0 md:w-20rem md:mx-auto"
            >
                <div className="surface-card select-none p-3">
                    <div className="p-3 flex align-items-center text-900">
                        <i className="pi pi-book mr-2"></i>
                        <span className="font-medium">Organization</span>
                    </div>
                    <ul className="list-none pl-3 m-0">
                        <li className="flex">
                            <div
                                className={
                                    "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                    (activeTab2 === 0
                                        ? "border-primary"
                                        : "surface-border")
                                }
                            ></div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab2 === 0 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab2(0)}
                            >
                                <span className="font-medium">Overview</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex">
                            <div
                                className={
                                    "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                    (activeTab2 === 1
                                        ? "border-primary"
                                        : "surface-border")
                                }
                            ></div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab2 === 1 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab2(1)}
                            >
                                <span className="font-medium">Security</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex">
                            <div
                                className={
                                    "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                    (activeTab2 === 2
                                        ? "border-primary"
                                        : "surface-border")
                                }
                            ></div>
                            <a
                                className={
                                    "p-ripple flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                    (activeTab2 === 2 ? "text-primary" : "")
                                }
                                onClick={() => setActiveTab2(2)}
                            >
                                <span className="font-medium">Reports</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-wrap">
                            <div
                                className={
                                    "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                    (activeTab2 === 3
                                        ? "border-primary"
                                        : "surface-border")
                                }
                            ></div>
                            <StyleClass
                                nodeRef={btnRef9}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <a
                                    ref={btnRef9}
                                    className={
                                        "p-ripple flex align-items-center justify-content-between flex-1 cursor-pointer py-2 px-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                        (activeTab2 === 3 ? "text-primary" : "")
                                    }
                                    onClick={() => setActiveTab2(3)}
                                >
                                    <span className="font-medium">Domains</span>
                                    <span className="pi pi-angle-down text-600"></span>
                                    <Ripple />
                                </a>
                            </StyleClass>

                            <ul className="w-full m-0 p-0 overflow-hidden">
                                <li className="flex">
                                    <div
                                        className={
                                            "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                            (activeTab2 === 4
                                                ? "border-primary"
                                                : "surface-border")
                                        }
                                    ></div>
                                    <a
                                        className={
                                            "p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                            (activeTab2 === 4
                                                ? "text-primary"
                                                : null)
                                        }
                                        onClick={() => setActiveTab2(4)}
                                    >
                                        <span className="font-medium">
                                            DNS Settings
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="flex">
                                    <div
                                        className={
                                            "border-left-2 flex flex-column align-items-center justify-content-center z-1 " +
                                            (activeTab2 === 5
                                                ? "border-primary"
                                                : "surface-border")
                                        }
                                    ></div>
                                    <a
                                        className={
                                            "p-ripple flex-1 cursor-pointer py-2 pl-5 pr-3 hover:surface-hover transition-colors transition-duration-150 text-700 font-medium line-height-3 " +
                                            (activeTab2 === 5
                                                ? "text-primary"
                                                : null)
                                        }
                                        onClick={() => setActiveTab2(5)}
                                    >
                                        <span className="font-medium">
                                            Renewal
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </BlockViewer>
        </>
    );
};

export default VerticalNav;
