import React, { useRef } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const SidebarNav = () => {

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


    const block1 = `
<div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
    <div className="p-3 flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={40} />
    </div>
    <div className="overflow-y-auto">
        <ul className="list-none p-2 m-0">
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef1} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Reports</span>
                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Revenue</span>
                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-table mr-2"></i>
                                    <span className="font-medium">View</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span className="font-medium">Expenses</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-bar mr-2"></i>
                    <span className="font-medium">Analytics</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-dollar mr-2"></i>
                    <span className="font-medium">Sales</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Customers</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
    <div className="p-3 flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={40} />
    </div>
    <div className="overflow-y-auto">
        <ul className="list-none p-2 m-0">
            <li>
                <div className="p-3 text-500 font-medium">HOME</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">Calendar</span>
                        <div className="ml-auto">
                            <span className="inline-flex align-items-center justify-content-center bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                            <i className="pi pi-chevron-down ml-2"></i>
                        </div>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Work</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Personal</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 surface-border">
            <li>
                <div className="p-3 text-500 font-medium">ORGANIZATION</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Overview</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-lock mr-2"></i>
                    <span className="font-medium">Security</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef4} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-file mr-2"></i>
                        <span className="font-medium">Reports</span>
                        <div className="ml-auto">
                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                            <i className="pi pi-chevron-down ml-2"></i>
                        </div>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef5} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Analytics</span>
                                <i className="pi pi-chevron-down ml-auto"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-refresh mr-2"></i>
                                    <span className="font-medium">Traffic</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-dollar mr-2"></i>
                                    <span className="font-medium">Conversions</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-chart-bar mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 surface-border">
            <li>
                <div className="p-3 text-500 font-medium">CUSTOMERS</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Overview</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Users</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-inbox mr-2"></i>
                    <span className="font-medium">Inbox</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-search mr-2"></i>
                    <span className="font-medium">Search</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
    <div className="p-2 mt-auto border-top-1 surface-border">
        <ul className="list-none p-2 m-0 hidden">
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-user mr-2"></i>
                    <span className="font-medium">Profile</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-sign-out mr-2"></i>
                    <span className="font-medium">Sign Out</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <StyleClass nodeRef={btnRef6} selector="@prev" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout">
            <a ref={btnRef6} className="p-ripple p-3 flex align-items-center cursor-pointer text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
                <span className="font-medium">Amy Elsner</span>
                <i className="pi pi-chevron-up ml-auto"></i>
                <Ripple />
            </a>
        </StyleClass>
    </div>
</div>
    `;

    const block3 = `
<div className="bg-gray-900 h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
    <div className="p-3 flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} />
    </div>
    <div className="overflow-y-auto">
        <ul className="list-none p-2 m-0">
            <li>
                <div className="p-3 text-gray-600 font-medium">HOME</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef7} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">Calendar</span>
                        <i className="pi pi-chevron-down ml-auto"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Work</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Personal</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
            <li>
                <div className="p-3 text-gray-600  font-medium">ORGANIZATION</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Overview</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-lock mr-2"></i>
                    <span className="font-medium">Security</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef8} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-file mr-2"></i>
                        <span className="font-medium">Reports</span>
                        <i className="pi pi-chevron-down ml-auto"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef9} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Analytics</span>
                                <i className="pi pi-chevron-down ml-auto"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-refresh mr-2"></i>
                                    <span className="font-medium">Traffic</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-dollar mr-2"></i>
                                    <span className="font-medium">Conversions</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-chart-bar mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
            <li>
                <div className="p-3 text-gray-600  font-medium">CUSTOMERS</div>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Overview</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Users</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-inbox mr-2"></i>
                    <span className="font-medium">Inbox</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-search mr-2"></i>
                    <span className="font-medium">Search</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
    <div className="p-2 mt-auto border-top-1 border-gray-800">
        <a className="p-3 flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
            <span className="font-medium">Amy Elsner</span>
            <Ripple />
        </a>
    </div>
</div>
`;

    const block4 = `
<div className="bg-indigo-500 h-screen flex flex-column w-18rem select-none">
    <div className="p-3 flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} />
    </div>
    <div className="overflow-y-auto">
        <ul className="list-none p-2 m-0">
            <li>
                <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <div ref={btnRef10} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" >
                        <span className="font-medium">HOME</span>
                        <i className="pi pi-chevron-down"></i>
                        <Ripple />
                    </div>
                </StyleClass>
                <ul className="list-none p-0 m-0 overflow-hidden">
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-comments mr-2"></i>
                            <span className="font-medium">Messages</span>
                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef11} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-calendar mr-2"></i>
                                <span className="font-medium">Calendar</span>
                                <i className="pi pi-chevron-down ml-auto"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Work</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Personal</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
            <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <div ref={btnRef12} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer">
                    <span className="font-medium">ORGANIZATION</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">Overview</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-lock mr-2"></i>
                        <span className="font-medium">Security</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                        <a ref={btnRef13} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                            <i className="pi pi-file mr-2"></i>
                            <span className="font-medium">Reports</span>
                            <i className="pi pi-chevron-down ml-auto"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                            <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <a ref={btnRef14} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">Analytics</span>
                                    <i className="pi pi-chevron-down ml-auto"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-refresh mr-2"></i>
                                        <span className="font-medium">Traffic</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-dollar mr-2"></i>
                                        <span className="font-medium">Conversions</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                <i className="pi pi-chart-bar mr-2"></i>
                                <span className="font-medium">Sales</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>
        <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
            <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <div ref={btnRef15} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" >
                    <span className="font-medium">CUSTOMERS</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">Overview</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">Users</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-inbox mr-2"></i>
                        <span className="font-medium">Inbox</span>
                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-50 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-search mr-2"></i>
                        <span className="font-medium">Search</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </ul>
    </div>
    <div className="p-2 mt-auto border-top-1 border-indigo-400">
        <a className="p-ripple p-3 flex align-items-center cursor-pointer text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
            <span className="font-medium">Amy Elsner</span>
            <Ripple />
        </a>
    </div>
</div>
`;

    const block5 = `
<div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none absolute left-0 top-0">
    <div className="p-3 flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="40" />
    </div>
    <div className="overflow-y-auto">
        <ul className="list-none p-2 m-0">
            <li>
                <a className="p-ripple p-ripple flex align-items-center cursor-pointer p-3 text-blue-500 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                    <a ref={btnRef16} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Reports</span>
                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li className="border-left-2 surface-border">
                        <StyleClass nodeRef={btnRef17} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef17} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Revenue</span>
                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li className="border-left-2 surface-border">
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-table mr-2"></i>
                                    <span className="font-medium">View</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-left-2 surface-border">
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="border-left-2 surface-border">
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                            <i className="pi pi-chart-line mr-2"></i>
                            <span className="font-medium">Expenses</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-chart-bar mr-2"></i>
                    <span className="font-medium">Analytics</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-dollar mr-2"></i>
                    <span className="font-medium">Sales</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Customers</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Sidebar Navigation</div>
            <BlockViewer header="Simple" code={block1} previewStyle={{ 'height': '100vh' }}>
                <div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
                    <div className="p-3 flex align-items-center justify-content-center">
                        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={40} />
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-2 m-0">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef1} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Analytics</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-dollar mr-2"></i>
                                    <span className="font-medium">Sales</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Customers</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Grouped" code={block2} previewStyle={{ 'height': '100vh' }}>
                <div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
                    <div className="p-3 flex align-items-center justify-content-center">
                        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={40} />
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-2 m-0">
                            <li>
                                <div className="p-3 text-500 font-medium">HOME</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">Calendar</span>
                                        <div className="ml-auto">
                                            <span className="inline-flex align-items-center justify-content-center bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                            <i className="pi pi-chevron-down ml-2"></i>
                                        </div>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Work</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Personal</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 surface-border">
                            <li>
                                <div className="p-3 text-500 font-medium">ORGANIZATION</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Overview</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-lock mr-2"></i>
                                    <span className="font-medium">Security</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef4} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-file mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <div className="ml-auto">
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                            <i className="pi pi-chevron-down ml-2"></i>
                                        </div>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef5} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Analytics</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-refresh mr-2"></i>
                                                    <span className="font-medium">Traffic</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-dollar mr-2"></i>
                                                    <span className="font-medium">Conversions</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">Sales</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 surface-border">
                            <li>
                                <div className="p-3 text-500 font-medium">CUSTOMERS</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Overview</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Users</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-inbox mr-2"></i>
                                    <span className="font-medium">Inbox</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-2 mt-auto border-top-1 surface-border">
                        <ul className="list-none p-2 m-0 hidden">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-user mr-2"></i>
                                    <span className="font-medium">Profile</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-sign-out mr-2"></i>
                                    <span className="font-medium">Sign Out</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <StyleClass nodeRef={btnRef6} selector="@prev" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout">
                            <a ref={btnRef6} className="p-ripple p-3 flex align-items-center cursor-pointer text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
                                <span className="font-medium">Amy Elsner</span>
                                <i className="pi pi-chevron-up ml-auto"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark" code={block3} previewStyle={{ 'height': '100vh' }}>
                <div className="bg-gray-900 h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
                    <div className="p-3 flex align-items-center justify-content-center">
                        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} />
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-2 m-0">
                            <li>
                                <div className="p-3 text-gray-600 font-medium">HOME</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef7} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">Calendar</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Work</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Personal</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
                            <li>
                                <div className="p-3 text-gray-600  font-medium">ORGANIZATION</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Overview</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-lock mr-2"></i>
                                    <span className="font-medium">Security</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef8} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-file mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef9} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Analytics</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-refresh mr-2"></i>
                                                    <span className="font-medium">Traffic</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-dollar mr-2"></i>
                                                    <span className="font-medium">Conversions</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">Sales</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 border-gray-800">
                            <li>
                                <div className="p-3 text-gray-600  font-medium">CUSTOMERS</div>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Overview</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Users</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-inbox mr-2"></i>
                                    <span className="font-medium">Inbox</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-2 mt-auto border-top-1 border-gray-800">
                        <a className="p-3 flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-gray-800 border-round transition-colors transition-duration-150 w-full">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
                            <span className="font-medium">Amy Elsner</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored and Toggleable" code={block4} previewStyle={{ 'height': '100vh' }}>
                <div className="bg-indigo-500 h-screen flex flex-column w-18rem select-none">
                    <div className="p-3 flex align-items-center justify-content-center">
                        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} />
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-2 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef10} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" >
                                        <span className="font-medium">HOME</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={btnRef11} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef11} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-calendar mr-2"></i>
                                                <span className="font-medium">Calendar</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">Work</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">Personal</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
                            <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef12} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer">
                                    <span className="font-medium">ORGANIZATION</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Overview</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-lock mr-2"></i>
                                        <span className="font-medium">Security</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <a ref={btnRef13} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-file mr-2"></i>
                                            <span className="font-medium">Reports</span>
                                            <i className="pi pi-chevron-down ml-auto"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <a ref={btnRef14} className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Analytics</span>
                                                    <i className="pi pi-chevron-down ml-auto"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-refresh mr-2"></i>
                                                        <span className="font-medium">Traffic</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-dollar mr-2"></i>
                                                        <span className="font-medium">Conversions</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-chart-bar mr-2"></i>
                                                <span className="font-medium">Sales</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <ul className="list-none p-2 m-0 border-top-1 border-indigo-400">
                            <StyleClass nodeRef={btnRef15} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef15} className="p-ripple p-3 flex align-items-center justify-content-between text-indigo-300 cursor-pointer" >
                                    <span className="font-medium">CUSTOMERS</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Overview</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Users</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-inbox mr-2"></i>
                                        <span className="font-medium">Inbox</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-50 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>8</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-search mr-2"></i>
                                        <span className="font-medium">Search</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="p-2 mt-auto border-top-1 border-indigo-400">
                        <a className="p-ripple p-3 flex align-items-center cursor-pointer text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 border-round transition-colors transition-duration-150 w-full">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} />
                            <span className="font-medium">Amy Elsner</span>
                            <Ripple />
                        </a>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Submenu Border" code={block5} containerClassName="h-screen relative">
                <div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none absolute left-0 top-0">
                    <div className="p-3 flex align-items-center justify-content-center">
                        <img src="/demo/images/blocks/logos/hyper-700.svg" alt="Image" height="40" />
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-2 m-0">
                            <li>
                                <a className="p-ripple p-ripple flex align-items-center cursor-pointer p-3 text-blue-500 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <StyleClass nodeRef={btnRef16} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef16} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li className="border-left-2 surface-border">
                                        <StyleClass nodeRef={btnRef17} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef17} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li className="border-left-2 surface-border">
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                                    <i className="pi pi-table mr-2"></i>
                                                    <span className="font-medium">View</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="border-left-2 surface-border">
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="border-left-2 surface-border">
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="font-medium">Expenses</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Analytics</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-dollar mr-2"></i>
                                    <span className="font-medium">Sales</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Customers</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default SidebarNav;
