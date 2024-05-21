import React, { useRef } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const Dashboard = () => {

    const cag = useRef(null);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const menu3 = useRef(null);
    const menu4 = useRef(null);
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

    const items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];

    const block1 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar" className="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full">
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={30} />
            </div>
            <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                    <li>
                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
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
                                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
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
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
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
                        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
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
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: ' 28px' }} />
                    <span className="font-medium">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef5} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef5} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef6} className="p-ripple cursor-pointer block lg:hidden text-700">
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
        <div className="flex flex-column flex-auto">
            <div className="surface-section p-5">
                <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                    <div className="flex align-items-start flex-column md:flex-row">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1@2x.png" alt="avatar-f-1@2x" className="mr-5 mb-3 lg:mb-0" style={{ width: '90px', height: '90px' }} />
                        <div>
                            <span className="text-900 font-medium text-3xl">Kathryn Murphy</span>
                            <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                            <div className="flex align-items-center flex-wrap text-sm">
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">FOLLOWERS</span>
                                    <div className="text-700 mt-2">333</div>
                                </div>
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">PROJECTS</span>
                                    <div className="text-700 mt-2">26</div>
                                </div>
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">COLLECTIONS</span>
                                    <div className="text-700 mt-2">17</div>
                                </div>
                                <div className="mt-3">
                                    <span className="font-medium text-500">SHOTS</span>
                                    <div className="text-700 mt-2">130</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <Button icon="pi pi-bookmark" className="p-button-rounded mr-2" />
                        <Button icon="pi pi-heart" className="p-button-rounded p-button-success mr-2" />
                        <Button icon="pi pi-list" className="p-button-rounded p-button-help" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="grid">
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                    <div className="text-900 font-medium text-xl">152</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">since last visit</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Revenue</span>
                                    <div className="text-900 font-medium text-xl">$2.100</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">%52+ </span>
                            <span className="text-500">since last week</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Customers</span>
                                    <div className="text-900 font-medium text-xl">28441</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">520  </span>
                            <span className="text-500">newly registered</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Comments</span>
                                    <div className="text-900 font-medium text-xl">152 Unread</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">85 </span>
                            <span className="text-500">responded</span>
                        </div>
                    </div>
                    <div className="col-12 xl:col-6">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="text-xl text-900 font-medium mb-5">Latest News</div>
                            <ul className="list-none p-0 m-0">
                                <li className="pb-3 border-bottom-1 surface-border">
                                    <div className="font-medium text-900 mb-2">Aenean euismod elementum</div>
                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Vitae turpis massa sed elementum tempus egestas sed sed risus.
                                        In metus vulputate eu scelerisque felis imperdiet proin.</div>
                                </li>
                                <li className="py-3 border-bottom-1 surface-border">
                                    <div className="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                                        Elementum eu facilisis sed odio morbi.</div>
                                </li>
                                <li className="py-3 border-bottom-1 surface-border">
                                    <div className="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                                </li>
                            </ul>
                            <div className="flex justify-content-between pt-3">
                                <Button label="Clear All" className="p-button-outlined p-button-secondary w-6 mr-2" />
                                <Button label="New Entry" className="p-button-outlined w-6 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 xl:col-6">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex justify-content-between align-items-center mb-5">
                                <span className="text-xl text-900 font-medium">Team Members</span>
                                <div>
                                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => cag.current.toggle(event)} />
                                    <Menu ref={cag} popup model={items} />
                                </div>
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                        <div>
                                            <span className="block text-900 font-medium mb-1">Janette Hudson</span>
                                            <div className="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                        <div>
                                            <span className="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                                            <div className="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                        <div>
                                            <span className="block text-900 font-medium mb-1">Arlene McCoy</span>
                                            <div className="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                        <div>
                                            <span className="block text-900 font-medium mb-1">Jacob Jones</span>
                                            <div className="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                        <div>
                                            <span className="block text-900 font-medium mb-1">James Cooper</span>
                                            <div className="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="border-round p-4">
                            <div className="text-xl text-900 font-medium mb-5">Timeline</div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i className="pi pi-compass text-xl"></i>
                                    </span>
                                    <div className="h-full bg-blue-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                                        <span className="text-500 text-sm">1 minute ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                        Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                                    </div>
                                    <div className="text-500 flex align-items-center gap-4">
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-heart"></i>
                                            <span>0</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-comment"></i>
                                            <span>1</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-eye"></i>
                                            <span>24</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i className="pi pi-list text-xl"></i>
                                    </span>
                                    <div className="h-full bg-orange-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                                        <span className="text-500 text-sm">2 hours ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                    </div>
                                    <div className="text-500 flex align-items-center gap-4">
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-heart"></i>
                                            <span>26</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-comment"></i>
                                            <span>6</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-eye"></i>
                                            <span>673</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i className="pi pi-inbox text-xl"></i>
                                    </span>
                                    <div className="h-full bg-purple-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Walter Black</span>
                                        <span className="text-500 text-sm">4 hours ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Euismod in pellentesque massa placerat duis ultricies lacus.
                                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                                    </div>
                                    <div className="text-500 flex align-items-center gap-4">
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-heart"></i>
                                            <span>62</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-comment"></i>
                                            <span>36</span>
                                        </div>
                                        <div className="flex align-items-center gap-1">
                                            <i className="pi pi-eye"></i>
                                            <span>21</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="min-h-screen flex flex-column">
    <div className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} className="mr-0 lg:mr-6" />
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
            <a className="cursor-pointer">
                <i className="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 font-medium"></i>
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
        <div className="grid">
            <div className="col-12">
                <div className="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div className="flex align-items-center mb-3">
                            <i className="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                            <span className="text-500 font-medium">Orders</span>
                        </div>
                        <span className="block text-900 font-medium mb-4 text-xl">152 New</span>
                        <div className="flex align-items-center">
                            <i className="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                            <span className="text-pink-500 font-medium ">-25</span>
                        </div>
                    </div>
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div className="flex align-items-center mb-3">
                            <i className="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                            <span className="text-500 font-medium">Revenue</span>
                        </div>
                        <span className="block text-900 font-medium mb-4 text-xl">$1500</span>
                        <div className="flex align-items-center">
                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span className="text-green-500 font-medium ">+15</span>
                        </div>
                    </div>
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div className="flex align-items-center mb-3">
                            <i className="pi pi-users text-cyan-500 text-xl mr-2"></i>
                            <span className="text-500 font-medium">Customers</span>
                        </div>
                        <span className="block text-900 font-medium mb-4 text-xl">25100</span>
                        <div className="flex align-items-center">
                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span className="text-green-500 font-medium ">+%12</span>
                        </div>
                    </div>
                    <div className="flex-auto p-3">
                        <div className="flex align-items-center mb-3">
                            <i className="pi pi-users text-purple-500 text-xl mr-2"></i>
                            <span className="text-500 font-medium">Comments</span>
                        </div>
                        <span className="block text-900 font-medium mb-4 text-xl">72</span>
                        <div className="flex align-items-center">
                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span className="text-green-500 font-medium ">+20</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="surface-card shadow-2 border-round p-4 h-full">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-xl">Team Activity</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                            <Menu ref={menu1} popup model={items} />
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-1.png" alt="avatar-f-1" className="mr-3 w-3rem h-3rem" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Jane Cooper</span>
                                    <div className="text-700 mb-2">responded to an issue.</div>
                                    <a className="text-primary cursor-pointer">
                                        <i className="pi pi-github text-sm mr-2"></i>
                                        <span>Issue #1185</span>
                                    </a>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" className="mr-3 w-3rem h-3rem" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Robert Fox</span>
                                    <div className="text-700">changed team size from <span className="text-900">5</span> to <span className="text-900">6</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" className="mr-3 w-3rem h-3rem" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                    <div className="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                    <a className="text-primary cursor-pointer">
                                        <i className="pi pi-file-pdf text-sm mr-2"></i>
                                        <span>q4_presentation.pdf</span>
                                    </a>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-3.png" alt="avatar-f-3" className="mr-3 w-3rem h-3rem" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Annette Black</span>
                                    <div className="text-700">added <span className="text-900 font-medium">Nico Greenberg</span> to <span className="text-primary">Watchlist Tier-1</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                        </li>
                        <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-2.png" alt="avatar-m-2" className="mr-3 w-3rem h-3rem" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Floyd Miles</span>
                                    <div className="text-700">has refunded a blue t-shirt for <span className="text-primary">$79</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="surface-card shadow-2 border-round p-4 h-full">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <div className="text-900 font-medium text-xl">Notifications</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
                            <Menu ref={menu2} popup model={items} />
                        </div>
                    </div>

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">Richard Jones
                                <span className="text-700 font-normal"> has purchased a blue t-shirt for <span className="text-primary font-medium">$79</span></span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-download text-xl text-orange-500"></i>
                            </div>
                            <span className="text-700 line-height-3">Your request for withdrawal of <span className="text-primary font-medium">$2500</span> has been initiated.</span>
                        </li>
                    </ul>

                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">Keyser Wick
                                <span className="text-700 font-normal"> has purchased a black jacket for <span className="text-primary font-medium">$59</span></span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">Jane Davis
                                <span className="text-700 font-normal"> has posted a new questions about your product.</span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-arrow-up text-xl text-green-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">Claire Smith
                                <span className="text-700 font-normal"> has upvoted your store along with a comment.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 lg:col-4">
                <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img src="/demo/images/blocks/illustration/windows.svg" alt="windows" className="mx-auto block mb-4" />
                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                </div>
            </div>
            <div className="col-12 lg:col-4">
                <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img src="/demo/images/blocks/illustration/security.svg" alt="security" className="mx-auto block mb-4" />
                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                </div>
            </div>
            <div className="col-12 lg:col-4">
                <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img src="/demo/images/blocks/illustration/live-collaboration.svg" alt="live-collaboration" className="mx-auto block mb-4" />
                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-xl">Sales</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu3.current.toggle(event)} />
                            <Menu ref={menu3} popup model={items} />
                        </div>
                    </div>
                    <img src="/demo/images/blocks/chart/chart-line.svg" alt="chart-line" className="w-full" />
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-xl">Customers</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu4.current.toggle(event)} />
                            <Menu ref={menu4} popup model={items} />
                        </div>
                    </div>
                    <img src="/demo/images/blocks/chart/chart-bar.svg" alt="chart-bar" className="w-full" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-9" className="h-full lg:h-auto surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
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
                        <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <a ref={btnRef10} className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors" >
                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge"><Badge severity="danger">3</Badge></i>
                                <span className="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <StyleClass nodeRef={btnRef11} selector="@next" toggleClassName="hidden">
                                    <a ref={btnRef11} className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
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
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2 lg:mr-0" style={{ width: '32px', height: '32px' }} />
                    <span className="font-medium inline lg:hidden">Amy Elsner</span>
                    <Ripple />
                </a>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef12} selector="#app-sidebar-9" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    <a ref={btnRef12} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef13} className="p-ripple cursor-pointer block lg:hidden text-700">
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
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
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
            <div className="grid">
                <div className="col-12">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="p-3 text-center bg-blue-500 border-round>
                                <span className="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                    <i className="pi pi-inbox text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">123K</div>
                                <span className="text-blue-100 font-medium">Messages</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="p-3 text-center bg-purple-500 border-round">
                                <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                    <i className="pi pi-map-marker text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">23K</div>
                                <span className="text-purple-100 font-medium">Check-ins</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="p-3 text-center bg-indigo-500 border-round">
                                <span className="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                    <i className="pi pi-file text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">23K</div>
                                <span className="text-indigo-100 font-medium">Files</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="p-3 text-center bg-orange-500 border-round">
                                <span className="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                    <i className="pi pi-users text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">40K</div>
                                <span className="text-orange-100 font-medium">Users</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6">
                    <div className="shadow-2 surface-card border-round p-3">
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-xl font-medium text-900">Traffic Distribution</span>
                        </div>
                        <div className="mt-3">
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-twitter text-5xl text-blue-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">12.40K</div>
                                        <span className="font-medium text-600">Twitter</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 text-center">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-vimeo text-5xl text-blue-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">10.20K</div>
                                        <span className="font-medium text-600">Vimeo</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 text-center">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-facebook text-5xl text-blue-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">5.60K</div>
                                        <span className="font-medium text-600">Facebook</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 text-center">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-discord text-5xl text-indigo-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">23.53K</div>
                                        <span className="font-medium text-600">Discord</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 text-center">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-github text-5xl text-purple-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">16.70K</div>
                                        <span className="font-medium text-600">GitHub</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 text-center">
                                    <div className="text-center border-1 surface-border border-round p-4">
                                        <i className="pi pi-google text-5xl text-pink-500"></i>
                                        <div className="text-900 text-2xl font-700 my-3 font-bold">16.50K</div>
                                        <span className="font-medium text-600">Google</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6">
                    <div className="surface-card shadow-2 border-round p-4">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <span className="text-xl font-medium text-900">Quarter Goals</span>
                        </div>
                        <div className="surface-border border-1 border-round p-3 mb-4">
                            <span className="text-900 font-medium text-3xl">85% <span className="text-600">(2125/2500)</span></span>
                            <ul className="mt-3 list-none p-0 mx-0 flex">
                                <li style={{ height: '1rem' }} className="flex-1 bg-indigo-500 border-round-left"></li>
                                <li style={{ height: '1rem' }} className="flex-1 bg-blue-500"></li>
                                <li style={{ height: '1rem' }} className="flex-1 bg-orange-500"></li>
                                <li style={{ height: '1rem' }} className="flex-1 bg-purple-500"></li>
                                <li style={{ height: '1rem' }} className="flex-1 bg-yellow-500"></li>
                                <li style={{ height: '1rem' }} className="flex-1 bg-cyan-500"></li>
                                <li style={{ height: '1rem' }} className="flex-1 surface-500 border-round-right"></li>
                            </ul>
                        </div>
                        <ul className="mt-4 list-none p-0 mx-0">
                            <li className="flex align-items-center pb-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">Watch</span>
                                <span className="text-600 text-xl font-medium ml-auto">152</span>
                            </li>
                            <li className="flex align-items-center py-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">Blue Band</span>
                                <span className="text-600 text-xl font-medium ml-auto">63</span>
                            </li>
                            <li className="flex align-items-center py-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-orange-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">Controller</span>
                                <span className="text-600 text-xl font-medium ml-auto">23</span>
                            </li>
                            <li className="flex align-items-center py-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-purple-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">Lime Band</span>
                                <span className="text-600 text-xl font-medium ml-auto">42</span>
                            </li>
                            <li className="flex align-items-center py-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-yellow-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">Phone Case</span>
                                <span className="text-600 text-xl font-medium ml-auto">134</span>
                            </li>
                            <li className="flex align-items-center py-3">
                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-cyan-500 mr-3 flex-shrink-0"></span>
                                <span className="text-xl font-medium text-90">T-Shirt</span>
                                <span className="text-600 text-xl font-medium ml-auto">89</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="surface-ground">
                        <div className="grid">
                            <div className="col-12 lg:col-4 p-2">
                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                    <div className="flex align-items-start mb-5">
                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" width="56" height="56" />
                                        <div className="ml-3">
                                            <span className="block text-900 mb-1 text-xl font-medium">Cameron Williamson</span>
                                            <p className="text-600 mt-0 mb-0">Marketing Coordinator</p>
                                        </div>
                                    </div>
                                    <ul className="list-none p-0 m-0">
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-twitter mr-2"></i>
                                                    <span className="font-medium text-900">Twitter</span>
                                                </span>
                                                <span className="text-cyan-500 font-medium">34.00%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-cyan-500 h-full" style={{ width: '34%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-facebook mr-2"></i>
                                                    <span className="font-medium text-900">Facebook</span>
                                                </span>
                                                <span className="text-indigo-500 font-medium">45.86%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-indigo-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-google mr-2"></i>
                                                    <span className="font-medium text-900">Google</span>
                                                </span>
                                                <span className="text-orange-500 font-medium">79.00%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-orange-500 h-full" style={{ width: '79%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4 p-2">
                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                    <div className="flex align-items-start mb-5">
                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" width="56" height="56" />
                                        <div className="ml-3">
                                            <span className="block text-900 mb-1 text-xl font-medium">Kathryn Murphy</span>
                                            <p className="text-600 mt-0 mb-0">Sales Manager</p>
                                        </div>
                                    </div>
                                    <ul className="list-none p-0 m-0">
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-twitter mr-2"></i>
                                                    <span className="font-medium text-900">Twitter</span>
                                                </span>
                                                <span className="text-cyan-500 font-medium">64.47%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-cyan-500 h-full" style={{ width: '64%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-facebook mr-2"></i>
                                                    <span className="font-medium text-900">Facebook</span>
                                                </span>
                                                <span className="text-indigo-500 font-medium">75.67%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-indigo-500 h-full" style={{ width: '75%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-google mr-2"></i>
                                                    <span className="font-medium text-900">Google</span>
                                                </span>
                                                <span className="text-orange-500 font-medium">45.00%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-orange-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4 p-2">
                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                    <div className="flex align-items-start mb-5">
                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-m-3.png" alt="avatar-m-3" width="56" height="56" />
                                        <div className="ml-3">
                                            <span className="block text-900 mb-1 text-xl font-medium">Darrell Steward</span>
                                            <p className="text-600 mt-0 mb-0">Web Designer</p>
                                        </div>
                                    </div>
                                    <ul className="list-none p-0 m-0">
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-twitter mr-2"></i>
                                                    <span className="font-medium text-900">Twitter</span>
                                                </span>
                                                <span className="text-cyan-500 font-medium">23.55%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-cyan-500 h-full" style={{ width: '34%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li className="mb-5">
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-facebook mr-2"></i>
                                                    <span className="font-medium text-900">Facebook</span>
                                                </span>
                                                <span className="text-indigo-500 font-medium">78.65%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-indigo-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-content-between align-items-center">
                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                    <i className="pi pi-google mr-2"></i>
                                                    <span className="font-medium text-900">Google</span>
                                                </span>
                                                <span className="text-orange-500 font-medium">86.54%</span>
                                            </div>
                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                <div className="bg-orange-500 h-full" style={{ width: '79%', borderRadius: '4px' }}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <BlockViewer header="Sidebar" code={block1}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div id="app-sidebar" className="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                        <div className="flex flex-column h-full">
                            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '60px' }}>
                                <img src="/demo/images/blocks/logos/hyper-700.svg" alt="hyper-700" height={30} />
                            </div>
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
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
                                                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">Reports</span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                            <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
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
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
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
                                        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
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
                                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: ' 28px' }} />
                                    <span className="font-medium">Amy Elsner</span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div className="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
                            <div className="flex">
                                <StyleClass nodeRef={btnRef5} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                                    <a ref={btnRef5} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText className="border-none" placeholder="Search" />
                                </span>
                            </div>
                            <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                <a ref={btnRef6} className="p-ripple cursor-pointer block lg:hidden text-700">
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
                        <div className="flex flex-column flex-auto">
                            <div className="surface-section p-5">
                                <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                                    <div className="flex align-items-start flex-column md:flex-row">
                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1@2x.png" alt="avatar-f-1@2x" className="mr-5 mb-3 lg:mb-0" style={{ width: '90px', height: '90px' }} />
                                        <div>
                                            <span className="text-900 font-medium text-3xl">Kathryn Murphy</span>
                                            <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                                            <div className="flex align-items-center flex-wrap text-sm">
                                                <div className="mr-5 mt-3">
                                                    <span className="font-medium text-500">FOLLOWERS</span>
                                                    <div className="text-700 mt-2">333</div>
                                                </div>
                                                <div className="mr-5 mt-3">
                                                    <span className="font-medium text-500">PROJECTS</span>
                                                    <div className="text-700 mt-2">26</div>
                                                </div>
                                                <div className="mr-5 mt-3">
                                                    <span className="font-medium text-500">COLLECTIONS</span>
                                                    <div className="text-700 mt-2">17</div>
                                                </div>
                                                <div className="mt-3">
                                                    <span className="font-medium text-500">SHOTS</span>
                                                    <div className="text-700 mt-2">130</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 lg:mt-0">
                                        <Button icon="pi pi-bookmark" className="p-button-rounded mr-2" />
                                        <Button icon="pi pi-heart" className="p-button-rounded p-button-success mr-2" />
                                        <Button icon="pi pi-list" className="p-button-rounded p-button-help" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="grid">
                                    <div className="col-12 lg:col-6 xl:col-3">
                                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                            <div className="flex justify-content-between mb-3">
                                                <div>
                                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                                    <div className="text-900 font-medium text-xl">152</div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                                </div>
                                            </div>
                                            <span className="text-green-500 font-medium">24 new </span>
                                            <span className="text-500">since last visit</span>
                                        </div>
                                    </div>
                                    <div className="col-12 lg:col-6 xl:col-3">
                                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                            <div className="flex justify-content-between mb-3">
                                                <div>
                                                    <span className="block text-500 font-medium mb-3">Revenue</span>
                                                    <div className="text-900 font-medium text-xl">$2.100</div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                                </div>
                                            </div>
                                            <span className="text-green-500 font-medium">%52+ </span>
                                            <span className="text-500">since last week</span>
                                        </div>
                                    </div>
                                    <div className="col-12 lg:col-6 xl:col-3">
                                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                            <div className="flex justify-content-between mb-3">
                                                <div>
                                                    <span className="block text-500 font-medium mb-3">Customers</span>
                                                    <div className="text-900 font-medium text-xl">28441</div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                                </div>
                                            </div>
                                            <span className="text-green-500 font-medium">520  </span>
                                            <span className="text-500">newly registered</span>
                                        </div>
                                    </div>
                                    <div className="col-12 lg:col-6 xl:col-3">
                                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                            <div className="flex justify-content-between mb-3">
                                                <div>
                                                    <span className="block text-500 font-medium mb-3">Comments</span>
                                                    <div className="text-900 font-medium text-xl">152 Unread</div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                                                </div>
                                            </div>
                                            <span className="text-green-500 font-medium">85 </span>
                                            <span className="text-500">responded</span>
                                        </div>
                                    </div>
                                    <div className="col-12 xl:col-6">
                                        <div className="surface-card shadow-2 border-round p-4">
                                            <div className="text-xl text-900 font-medium mb-5">Latest News</div>
                                            <ul className="list-none p-0 m-0">
                                                <li className="pb-3 border-bottom-1 surface-border">
                                                    <div className="font-medium text-900 mb-2">Aenean euismod elementum</div>
                                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Vitae turpis massa sed elementum tempus egestas sed sed risus.
                                                        In metus vulputate eu scelerisque felis imperdiet proin.</div>
                                                </li>
                                                <li className="py-3 border-bottom-1 surface-border">
                                                    <div className="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                                                        Elementum eu facilisis sed odio morbi.</div>
                                                </li>
                                                <li className="py-3 border-bottom-1 surface-border">
                                                    <div className="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                                                </li>
                                            </ul>
                                            <div className="flex justify-content-between pt-3">
                                                <Button label="Clear All" className="p-button-outlined p-button-secondary w-6 mr-2" />
                                                <Button label="New Entry" className="p-button-outlined w-6 ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 xl:col-6">
                                        <div className="surface-card shadow-2 border-round p-4">
                                            <div className="flex justify-content-between align-items-center mb-5">
                                                <span className="text-xl text-900 font-medium">Team Members</span>
                                                <div>
                                                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => cag.current.toggle(event)} />
                                                    <Menu ref={cag} popup model={items} />
                                                </div>
                                            </div>
                                            <ul className="list-none p-0 m-0">
                                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                                    <div className="flex">
                                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                                        <div>
                                                            <span className="block text-900 font-medium mb-1">Janette Hudson</span>
                                                            <div className="text-600">UI/UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                                    </div>
                                                </li>
                                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                                    <div className="flex">
                                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                                        <div>
                                                            <span className="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                                                            <div className="text-600">UI/UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                                    </div>
                                                </li>
                                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                                    <div className="flex">
                                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                                        <div>
                                                            <span className="block text-900 font-medium mb-1">Arlene McCoy</span>
                                                            <div className="text-600">UI/UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                                    </div>
                                                </li>
                                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                                    <div className="flex">
                                                        <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                                        <div>
                                                            <span className="block text-900 font-medium mb-1">Jacob Jones</span>
                                                            <div className="text-600">UI/UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                                    </div>
                                                </li>
                                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                                    <div className="flex">
                                                        <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                                        <div>
                                                            <span className="block text-900 font-medium mb-1">James Cooper</span>
                                                            <div className="text-600">UI/UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0 flex flex-nowrap">
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                                        <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="border-round p-4">
                                            <div className="text-xl text-900 font-medium mb-5">Timeline</div>
                                            <div className="mb-5 flex">
                                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                                    <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                                        <i className="pi pi-compass text-xl"></i>
                                                    </span>
                                                    <div className="h-full bg-blue-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                                </div>
                                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                    <div className="mb-3">
                                                        <span className="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                                                        <span className="text-500 text-sm">1 minute ago</span>
                                                    </div>
                                                    <div className="line-height-3 text-700 mb-3">
                                                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                                        Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                                                    </div>
                                                    <div className="text-500 flex align-items-center gap-4">
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-heart"></i>
                                                            <span>0</span>
                                                        </div>

                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-comment"></i>
                                                            <span>1</span>
                                                        </div>
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-eye"></i>
                                                            <span>24</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-5 flex">
                                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                                    <span className="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                                        <i className="pi pi-list text-xl"></i>
                                                    </span>
                                                    <div className="h-full bg-orange-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                                </div>
                                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                    <div className="mb-3">
                                                        <span className="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                                                        <span className="text-500 text-sm">2 hours ago</span>
                                                    </div>
                                                    <div className="line-height-3 text-700 mb-3">
                                                        Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                                                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                                    </div>
                                                    <div className="text-500 flex align-items-center gap-4">
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-heart"></i>
                                                            <span>26</span>
                                                        </div>
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-comment"></i>
                                                            <span>6</span>
                                                        </div>
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-eye"></i>
                                                            <span>673</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-5 flex">
                                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                                    <span className="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                                        <i className="pi pi-inbox text-xl"></i>
                                                    </span>
                                                    <div className="h-full bg-purple-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                                </div>
                                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                    <div className="mb-3">
                                                        <span className="text-900 font-medium inline-block mr-3">Walter Black</span>
                                                        <span className="text-500 text-sm">4 hours ago</span>
                                                    </div>
                                                    <div className="line-height-3 text-700 mb-3">
                                                        Euismod in pellentesque massa placerat duis ultricies lacus.
                                                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                                                    </div>
                                                    <div className="text-500 flex align-items-center gap-4">
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-heart"></i>
                                                            <span>62</span>
                                                        </div>
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-comment"></i>
                                                            <span>36</span>
                                                        </div>
                                                        <div className="flex align-items-center gap-1">
                                                            <i className="pi pi-eye"></i>
                                                            <span>21</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Navbar" code={block2}>
                <div className="min-h-screen flex flex-column">
                    <div className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
                        <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={40} className="mr-0 lg:mr-6" />
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
                            <a className="cursor-pointer">
                                <i className="pi pi-home text-blue-500"></i>
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 font-medium"></i>
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
                        <div className="grid">
                            <div className="col-12">
                                <div className="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                                        <div className="flex align-items-center mb-3">
                                            <i className="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                                            <span className="text-500 font-medium">Orders</span>
                                        </div>
                                        <span className="block text-900 font-medium mb-4 text-xl">152 New</span>
                                        <div className="flex align-items-center">
                                            <i className="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                                            <span className="text-pink-500 font-medium ">-25</span>
                                        </div>
                                    </div>
                                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                                        <div className="flex align-items-center mb-3">
                                            <i className="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                                            <span className="text-500 font-medium">Revenue</span>
                                        </div>
                                        <span className="block text-900 font-medium mb-4 text-xl">$1500</span>
                                        <div className="flex align-items-center">
                                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                            <span className="text-green-500 font-medium ">+15</span>
                                        </div>
                                    </div>
                                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                                        <div className="flex align-items-center mb-3">
                                            <i className="pi pi-users text-cyan-500 text-xl mr-2"></i>
                                            <span className="text-500 font-medium">Customers</span>
                                        </div>
                                        <span className="block text-900 font-medium mb-4 text-xl">25100</span>
                                        <div className="flex align-items-center">
                                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                            <span className="text-green-500 font-medium ">+%12</span>
                                        </div>
                                    </div>
                                    <div className="flex-auto p-3">
                                        <div className="flex align-items-center mb-3">
                                            <i className="pi pi-users text-purple-500 text-xl mr-2"></i>
                                            <span className="text-500 font-medium">Comments</span>
                                        </div>
                                        <span className="block text-900 font-medium mb-4 text-xl">72</span>
                                        <div className="flex align-items-center">
                                            <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                            <span className="text-green-500 font-medium ">+20</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="surface-card shadow-2 border-round p-4 h-full">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <div className="text-900 font-medium text-xl">Team Activity</div>
                                        <div>
                                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                                            <Menu ref={menu1} popup model={items} />
                                        </div>
                                    </div>
                                    <ul className="list-none p-0 m-0">
                                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                                            <div className="flex align-items-start mr-0 lg:mr-5">
                                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-1.png" alt="avatar-f-1" className="mr-3 w-3rem h-3rem" />
                                                <div>
                                                    <span className="text-900 font-medium block mb-2">Jane Cooper</span>
                                                    <div className="text-700 mb-2">responded to an issue.</div>
                                                    <a className="text-primary cursor-pointer">
                                                        <i className="pi pi-github text-sm mr-2"></i>
                                                        <span>Issue #1185</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                                        </li>
                                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                                            <div className="flex align-items-start mr-0 lg:mr-5">
                                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" className="mr-3 w-3rem h-3rem" />
                                                <div>
                                                    <span className="text-900 font-medium block mb-2">Robert Fox</span>
                                                    <div className="text-700">changed team size from <span className="text-900 font-medium">5</span> to <span className="text-900 font-medium">6</span>.</div>
                                                </div>
                                            </div>
                                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                                        </li>
                                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                                            <div className="flex align-items-start mr-0 lg:mr-5">
                                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" className="mr-3 w-3rem h-3rem" />
                                                <div>
                                                    <span className="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                                    <div className="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                                    <a className="text-primary cursor-pointer">
                                                        <i className="pi pi-file-pdf text-sm mr-2"></i>
                                                        <span>q4_presentation.pdf</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                                        </li>
                                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                                            <div className="flex align-items-start mr-0 lg:mr-5">
                                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-3.png" alt="avatar-f-3" className="mr-3 w-3rem h-3rem" />
                                                <div>
                                                    <span className="text-900 font-medium block mb-2">Annette Black</span>
                                                    <div className="text-700">added <span className="text-900 font-medium">Nico Greenberg</span> to <span className="text-primary">Watchlist Tier-1</span>.</div>
                                                </div>
                                            </div>
                                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                                        </li>
                                        <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                                            <div className="flex align-items-start mr-0 lg:mr-5">
                                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-2.png" alt="avatar-m-2" className="mr-3 w-3rem h-3rem" />
                                                <div>
                                                    <span className="text-900 font-medium block mb-2">Floyd Miles</span>
                                                    <div className="text-700">has refunded a blue t-shirt for <span className="text-primary">$79</span>.</div>
                                                </div>
                                            </div>
                                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="surface-card shadow-2 border-round p-4 h-full">
                                    <div className="flex align-items-center justify-content-between mb-4">
                                        <div className="text-900 font-medium text-xl">Notifications</div>
                                        <div>
                                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
                                            <Menu ref={menu2} popup model={items} />
                                        </div>
                                    </div>

                                    <span className="block text-600 font-medium mb-3">TODAY</span>
                                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                                            </div>
                                            <span className="text-900 line-height-3 font-medium">Richard Jones
                                                <span className="text-700 font-normal"> has purchased a blue t-shirt for <span className="text-primary font-medium">$79</span></span>
                                            </span>
                                        </li>
                                        <li className="flex align-items-center py-2">
                                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                                <i className="pi pi-download text-xl text-orange-500"></i>
                                            </div>
                                            <span className="text-700 line-height-3">Your request for withdrawal of <span className="text-primary font-medium">$2500</span> has been initiated.</span>
                                        </li>
                                    </ul>

                                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                                    <ul className="p-0 m-0 list-none">
                                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                                            </div>
                                            <span className="text-900 line-height-3 font-medium">Keyser Wick
                                                <span className="text-700 font-normal"> has purchased a black jacket for <span className="text-primary font-medium">$59</span></span>
                                            </span>
                                        </li>
                                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                                <i className="pi pi-question text-xl text-pink-500"></i>
                                            </div>
                                            <span className="text-900 line-height-3 font-medium">Jane Davis
                                                <span className="text-700 font-normal"> has posted a new questions about your product.</span>
                                            </span>
                                        </li>
                                        <li className="flex align-items-center py-2">
                                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                                                <i className="pi pi-arrow-up text-xl text-green-500"></i>
                                            </div>
                                            <span className="text-900 line-height-3 font-medium">Claire Smith
                                                <span className="text-700 font-normal"> has upvoted your store along with a comment.</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div className="surface-card border-round shadow-2 p-4 text-center">
                                    <img src="/demo/images/blocks/illustration/windows.svg" alt="windows" className="mx-auto block mb-4" />
                                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div className="surface-card border-round shadow-2 p-4 text-center">
                                    <img src="/demo/images/blocks/illustration/security.svg" alt="security" className="mx-auto block mb-4" />
                                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div className="surface-card border-round shadow-2 p-4 text-center">
                                    <img src="/demo/images/blocks/illustration/live-collaboration.svg" alt="live-collaboration" className="mx-auto block mb-4" />
                                    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded" />
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="surface-card shadow-2 border-round p-4">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <div className="text-900 font-medium text-xl">Sales</div>
                                        <div>
                                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu3.current.toggle(event)} />
                                            <Menu ref={menu3} popup model={items} />
                                        </div>
                                    </div>
                                    <img src="/demo/images/blocks/chart/chart-line.svg" alt="chart-line" className="w-full" />
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="surface-card shadow-2 border-round p-4">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <div className="text-900 font-medium text-xl">Customers</div>
                                        <div>
                                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu4.current.toggle(event)} />
                                            <Menu ref={menu4} popup model={items} />
                                        </div>
                                    </div>
                                    <img src="/demo/images/blocks/chart/chart-bar.svg" alt="chart-bar" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer >

            <BlockViewer header="Narrow Sidebar" code={block3}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div id="app-sidebar-9" className="h-full lg:h-auto surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
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
                                        <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                                            <a ref={btnRef10} className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors" >
                                                <i className="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge"><Badge severity="danger">3</Badge></i>
                                                <span className="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                                <i className="pi pi-chevron-down ml-auto lg:hidden"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                                            <li>
                                                <StyleClass nodeRef={btnRef11} selector="@next" toggleClassName="hidden">
                                                    <a ref={btnRef11} className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors">
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
                                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2 lg:mr-0" style={{ width: '32px', height: '32px' }} />
                                    <span className="font-medium inline lg:hidden">Amy Elsner</span>
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div className="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style={{ height: '60px' }}>
                            <div className="flex">
                                <StyleClass nodeRef={btnRef12} selector="#app-sidebar-9" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                                    <a ref={btnRef12} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText className="border-none w-10rem sm:w-20rem" placeholder="Search" />
                                </span>
                            </div>
                            <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                <a ref={btnRef13} className="p-ripple cursor-pointer block lg:hidden text-700">
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
                                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
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
                            <div className="grid">
                                <div className="col-12">
                                    <div className="grid">
                                        <div className="col-12 md:col-6 lg:col-3 p-3">
                                            <div className="p-3 text-center bg-blue-500 border-round">
                                                <span className="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-inbox text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">123K</div>
                                                <span className="text-blue-100 font-medium">Messages</span>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-3 p-3">
                                            <div className="p-3 text-center bg-purple-500 border-round">
                                                <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-map-marker text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">23K</div>
                                                <span className="text-purple-100 font-medium">Check-ins</span>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-3 p-3">
                                            <div className="p-3 text-center bg-indigo-500 border-round">
                                                <span className="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-file text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">23K</div>
                                                <span className="text-indigo-100 font-medium">Files</span>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-3 p-3">
                                            <div className="p-3 text-center bg-orange-500 border-round">
                                                <span className="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-users text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">40K</div>
                                                <span className="text-orange-100 font-medium">Users</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 lg:col-6">
                                    <div className="shadow-2 surface-card border-round p-3">
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-xl font-medium text-900">Traffic Distribution</span>
                                        </div>
                                        <div className="mt-3">
                                            <div className="grid">
                                                <div className="col-12 md:col-6">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-twitter text-5xl text-blue-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">12.40K</div>
                                                        <span className="font-medium text-600">Twitter</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 md:col-6 text-center">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-vimeo text-5xl text-blue-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">10.20K</div>
                                                        <span className="font-medium text-600">Vimeo</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 md:col-6 text-center">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-facebook text-5xl text-blue-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">5.60K</div>
                                                        <span className="font-medium text-600">Facebook</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 md:col-6 text-center">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-discord text-5xl text-indigo-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">23.53K</div>
                                                        <span className="font-medium text-600">Discord</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 md:col-6 text-center">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-github text-5xl text-purple-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">16.70K</div>
                                                        <span className="font-medium text-600">GitHub</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 md:col-6 text-center">
                                                    <div className="text-center border-1 surface-border border-round p-4">
                                                        <i className="pi pi-google text-5xl text-pink-500"></i>
                                                        <div className="text-900 text-2xl font-700 my-3 font-bold">16.50K</div>
                                                        <span className="font-medium text-600">Google</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 lg:col-6">
                                    <div className="surface-card shadow-2 border-round p-4">
                                        <div className="flex align-items-center justify-content-between mb-4">
                                            <span className="text-xl font-medium text-900">Quarter Goals</span>
                                        </div>
                                        <div className="surface-border border-1 border-round p-3 mb-4">
                                            <span className="text-900 font-medium text-3xl">85% <span className="text-600">(2125/2500)</span></span>
                                            <ul className="mt-3 list-none p-0 mx-0 flex">
                                                <li style={{ height: '1rem' }} className="flex-1 bg-indigo-500 border-round-left"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 bg-blue-500"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 bg-orange-500"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 bg-purple-500"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 bg-yellow-500"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 bg-cyan-500"></li>
                                                <li style={{ height: '1rem' }} className="flex-1 surface-500 border-round-right"></li>
                                            </ul>
                                        </div>
                                        <ul className="mt-4 list-none p-0 mx-0">
                                            <li className="flex align-items-center pb-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">Watch</span>
                                                <span className="text-600 text-xl font-medium ml-auto">152</span>
                                            </li>
                                            <li className="flex align-items-center py-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">Blue Band</span>
                                                <span className="text-600 text-xl font-medium ml-auto">63</span>
                                            </li>
                                            <li className="flex align-items-center py-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-orange-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">Controller</span>
                                                <span className="text-600 text-xl font-medium ml-auto">23</span>
                                            </li>
                                            <li className="flex align-items-center py-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-purple-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">Lime Band</span>
                                                <span className="text-600 text-xl font-medium ml-auto">42</span>
                                            </li>
                                            <li className="flex align-items-center py-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-yellow-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">Phone Case</span>
                                                <span className="text-600 text-xl font-medium ml-auto">134</span>
                                            </li>
                                            <li className="flex align-items-center py-3">
                                                <span style={{ width: '1rem', height: '1rem' }} className="border-round bg-cyan-500 mr-3 flex-shrink-0"></span>
                                                <span className="text-xl font-medium text-90">T-Shirt</span>
                                                <span className="text-600 text-xl font-medium ml-auto">89</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="surface-ground">
                                        <div className="grid">
                                            <div className="col-12 lg:col-4 p-2">
                                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                                    <div className="flex align-items-start mb-5">
                                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" width="56" height="56" />
                                                        <div className="ml-3">
                                                            <span className="block text-900 mb-1 text-xl font-medium">Cameron Williamson</span>
                                                            <p className="text-600 mt-0 mb-0">Marketing Coordinator</p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-none p-0 m-0">
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-twitter mr-2"></i>
                                                                    <span className="font-medium text-900">Twitter</span>
                                                                </span>
                                                                <span className="text-cyan-500 font-medium">34.00%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-cyan-500 h-full" style={{ width: '34%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-facebook mr-2"></i>
                                                                    <span className="font-medium text-900">Facebook</span>
                                                                </span>
                                                                <span className="text-indigo-500 font-medium">45.86%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-indigo-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-google mr-2"></i>
                                                                    <span className="font-medium text-900">Google</span>
                                                                </span>
                                                                <span className="text-orange-500 font-medium">79.00%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-orange-500 h-full" style={{ width: '79%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 lg:col-4 p-2">
                                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                                    <div className="flex align-items-start mb-5">
                                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" width="56" height="56" />
                                                        <div className="ml-3">
                                                            <span className="block text-900 mb-1 text-xl font-medium">Kathryn Murphy</span>
                                                            <p className="text-600 mt-0 mb-0">Sales Manager</p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-none p-0 m-0">
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-twitter mr-2"></i>
                                                                    <span className="font-medium text-900">Twitter</span>
                                                                </span>
                                                                <span className="text-cyan-500 font-medium">64.47%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-cyan-500 h-full" style={{ width: '64%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-facebook mr-2"></i>
                                                                    <span className="font-medium text-900">Facebook</span>
                                                                </span>
                                                                <span className="text-indigo-500 font-medium">75.67%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-indigo-500 h-full" style={{ width: '75%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-google mr-2"></i>
                                                                    <span className="font-medium text-900">Google</span>
                                                                </span>
                                                                <span className="text-orange-500 font-medium">45.00%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-orange-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 lg:col-4 p-2">
                                                <div className="shadow-2 surface-card border-round p-4 h-full">
                                                    <div className="flex align-items-start mb-5">
                                                        <img src="/demo/images/blocks/avatars/circle-big/avatar-m-3.png" alt="avatar-m-3" width="56" height="56" />
                                                        <div className="ml-3">
                                                            <span className="block text-900 mb-1 text-xl font-medium">Darrell Steward</span>
                                                            <p className="text-600 mt-0 mb-0">Web Designer</p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-none p-0 m-0">
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-twitter mr-2"></i>
                                                                    <span className="font-medium text-900">Twitter</span>
                                                                </span>
                                                                <span className="text-cyan-500 font-medium">23.55%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-cyan-500 h-full" style={{ width: '34%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-5">
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-facebook mr-2"></i>
                                                                    <span className="font-medium text-900">Facebook</span>
                                                                </span>
                                                                <span className="text-indigo-500 font-medium">78.65%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-indigo-500 h-full" style={{ width: '45%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="flex justify-content-between align-items-center">
                                                                <span className="text-900 inline-flex justify-content-between align-items-center">
                                                                    <i className="pi pi-google mr-2"></i>
                                                                    <span className="font-medium text-900">Google</span>
                                                                </span>
                                                                <span className="text-orange-500 font-medium">86.54%</span>
                                                            </div>
                                                            <div className="surface-300 w-full mt-2" style={{ height: '7px', borderRadius: '4px' }}>
                                                                <div className="bg-orange-500 h-full" style={{ width: '79%', borderRadius: '4px' }}></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Dashboard;
