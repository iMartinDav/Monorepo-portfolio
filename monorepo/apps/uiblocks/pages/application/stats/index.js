import React, { useRef, useEffect, useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { localeOption } from "primereact/api";
const StatsApp = () => {
    const [date, setDate] = useState(new Date());
    const menu = useRef(null);
    const items = [
        {
            label: "Options",
            items: [
                { label: "Add New", icon: "pi pi-fw pi-plus" },
                { label: "Search", icon: "pi pi-fw pi-search" },
            ],
        },
    ];

    var monthNames = [];
    monthNames = localeOption("monthNames");
    const nextDate = () => {
        date.setDate(date.getDate() + 1);
        const nextDate = new Date(date);
        setDate(nextDate);
    };
    const prevDate = () => {
        date.setDate(date.getDate() - 1);
        const nextDate = new Date(date);
        setDate(nextDate);
    };

    const block1 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
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
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
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
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
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
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
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
    </div>
</div>
    `;

    const block2 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
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
    `;

    const block3 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 border-round">
                <div className="p-3 flex align-items-start">
                    <img src="/demo/images/blocks/crypto/btc.png" alt="btc" style={{ width: '32px', height: '32px' }} className="mr-2" />
                    <div>
                        <span className="text-700">Bitcoin</span>
                        <div className="text-green-500 text-xl mt-2">+0.53%</div>
                    </div>
                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">0.0045 BTC</div>
                </div>
                <img src="/demo/images/blocks/graphs/graph-1.svg" alt="graph-1" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 border-round">
                <div className="p-3 flex align-items-start">
                    <img src="/demo/images/blocks/crypto/eth.png" alt="eth" style={{ width: '32px', height: '32px' }} className="mr-2" />
                    <div>
                        <span className="text-700">Ethereum</span>
                        <div className="text-green-500 text-xl mt-2">+3.52%</div>
                    </div>
                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">25.0985 ETH</div>
                </div>
                <img src="/demo/images/blocks/graphs/graph-2.svg" alt="graph-2" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 border-round">
                <div className="p-3 flex align-items-start">
                    <img src="/demo/images/blocks/crypto/btc.png" alt="btc" style={{ width: '32px', height: '32px' }} className="mr-2" />
                    <div>
                        <span className="text-700">Dogecoin</span>
                        <div className="text-pink-500 text-xl mt-2">-0.32%</div>
                    </div>
                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">59000 DOGE</div>
                </div>
                <img src="/demo/images/blocks/graphs/graph-3.svg" alt="graph-3" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 border-round">
                <div className="p-3 flex align-items-start">
                    <img src="/demo/images/blocks/crypto/xlm.png" alt="xlm" style={{ width: '32px', height: '32px' }} className="mr-2" />
                    <div>
                        <span className="text-700">Stellar</span>
                        <div className="text-green-500 text-xl mt-2">+0.99%</div>
                    </div>
                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">1400 XLM</div>
                </div>
                <img src="/demo/images/blocks/graphs/graph-4.svg" alt="graph-4" className="w-full" />
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-4 p-2">
            <div className="shadow-2 surface-card border-round p-4 h-full">
                <div className="flex align-items-start">
                    <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: '52px', height: '52px' }}>
                        <img src="/demo/images/blocks/illustration/stats-illustration-1.svg" width="38" height="38" alt="stats-illustration-1" />
                    </div>
                    <div className="ml-3 flex-1">
                        <span className="block text-900 mb-1 text-xl font-medium">Revenue</span>
                        <p className="text-600 mt-0 mb-5 text-sm">Sales Goal</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-700">Achieved</span>
                            <span className="font-bold text-700">12/12</span>
                        </div>
                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-2">
            <div className="shadow-2 surface-card border-round p-4 h-full">
                <div className="flex align-items-start">
                    <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: '52px', height: '52px' }}>
                        <img src="/demo/images/blocks/illustration/stats-illustration-2.svg" width="38" height="38"  alt="stats-illustration-2"/>
                    </div>
                    <div className="ml-3 flex-1">
                        <span className="block text-900 mb-1 text-xl font-medium">Reviews</span>
                        <p className="text-600 mt-0 mb-5 text-sm">Client Messages</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-700">In Progress</span>
                            <span className="font-bold text-700">4/12</span>
                        </div>
                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-orange-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-orange-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-gray-300"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-gray-300"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-gray-300"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-2">
            <div className="shadow-2 surface-card border-round p-4 h-full">
                <div className="flex align-items-start">
                    <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: '52px', height: '52px' }}>
                        <img src="/demo/images/blocks/illustration/stats-illustration-3.svg" width="38" height="38" alt="stats-illustration-3" />
                    </div>
                    <div className="ml-3 flex-1">
                        <span className="block text-900 mb-1 text-xl font-medium">Tasks</span>
                        <p className="text-600 mt-0 mb-5 text-sm">Completed Tasks</p>
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-700">In Progress</span>
                            <span className="font-bold text-700">8/12</span>
                        </div>
                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-purple-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-purple-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-purple-500"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-gray-300"></li>
                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-gray-300"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-4 p-2">
            <div className="shadow-2 surface-card border-round p-4 h-full">
                <div className="flex align-items-start mb-5">
                    <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" width="56" height="56" alt="avatar-m-1"/>
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
                    <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" width="56" height="56" alt="avatar-f-2" />
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
                    <img src="/demo/images/blocks/avatars/circle-big/avatar-m-3.png" width="56" height="56" alt="avatar-m-3"/>
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
    `;

    const block6 = `
<div className="shadow-2 surface-card border-round p-3">
    <div className="flex align-items-center justify-content-between">
        <span className="text-xl font-medium text-900">Traffic Distribution</span>
        <div className="ml-8">
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu.current.toggle(event)} />
            <Menu ref={menu} popup model={items} />
        </div>
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
    `;

    const block7 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="p-3 text-center bg-blue-500" style={{ borderRadius: '12px' }}>
                <span className="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3 p-3">
                    <i className="pi pi-inbox text-xl text-white"></i>
                </span>
                <div className="text-2xl font-medium text-white mb-2">123K</div>
                <span className="text-blue-100 font-medium">Messages</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="p-3 text-center bg-purple-500" style={{ borderRadius: '12px' }}>
                <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3">
                    <i className="pi pi-map-marker text-xl text-white"></i>
                </span>
                <div className="text-2xl font-medium text-white mb-2">23K</div>
                <span className="text-purple-100 font-medium">Check-ins</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="p-3 text-center bg-indigo-500" style={{ borderRadius: '12px' }}>
                <span className="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3">
                    <i className="pi pi-file text-xl text-white"></i>
                </span>
                <div className="text-2xl font-medium text-white mb-2">23K</div>
                <span className="text-indigo-100 font-medium">Files</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="p-3 text-center bg-orange-500" style={{ borderRadius: '12px' }}>
                <span className="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3 p-3">
                    <i className="pi pi-users text-xl text-white"></i>
                </span>
                <div className="text-2xl font-medium text-white mb-2">40K</div>
                <span className="text-orange-100 font-medium">Users</span>
            </div>
        </div>
    </div>
</div>
    `;

    const block8 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 surface-card p-3" style={{ borderRadius: '12px' }}>
                <div className="flex align-items-center justify-content-between">
                    <div>
                        <span className="text-3xl text-900 font-bold">40K</span>
                        <p className="mt-1 mb-0 text-600 text-xl">Users Online</p>
                    </div>
                    <div>
                        <img src="/demo/images/blocks/illustration/stats-illustration-4.svg" alt="stats-illustration-4" />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 surface-card p-3" style={{ borderRadius: '12px' }}>
                <div className="flex align-items-center justify-content-between">
                    <div>
                        <span className="text-3xl text-900 font-bold">24K</span>
                        <p className="mt-1 mb-0 text-600 text-xl">Payments Processed</p>
                    </div>
                    <div>
                        <img src="/demo/images/blocks/illustration/stats-illustration-5.svg" alt="stats-illustration-5" />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 surface-card p-3" style={{ borderRadius: '12px' }}>
                <div className="flex align-items-center justify-content-between">
                    <div>
                        <span className="text-3xl text-900 font-bold">15K</span>
                        <p className="mt-1 mb-0 text-600 text-xl">Daily Revenue</p>
                    </div>
                    <div>
                        <img src="/demo/images/blocks/illustration/stats-illustration-6.svg" alt="stats-illustration-6" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block9 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex align-items-center justify-content-between mb-4">
        <span className="text-xl font-medium text-900">Quarter Goals</span>
        <div className="ml-auto">
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu.current.toggle(event)} />
            <Menu ref={menu} popup model={items} />
        </div>
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
    `;

    const block10 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row gap-4 md:align-items-center xl:px-6 pt-6">
        <div className="shadow-2 surface-card border-round p-4 flex-1 text-center mb-6 md:mb-0">
            <div className="mb-4">
                <img src="/demo/images/blocks/stats/shoes.png" width="100" height="100" className="-mt-8" alt="shoes"/>
                <span className="block text-900 mb-1 text-xl font-bold">Shoes</span>
                <p className="text-600 m-0 font-medium">500 per Month</p>
            </div>
            <div className="flex justify-content-between align-items-center">
                <span className="text-600">Monthly Goal</span>
                <span className="text-900 font-medium">50%</span>
            </div>
            <div className="surface-300 mt-2 mb-3 border-round" style={{ height: '7px' }}>
                <div className="bg-blue-500 h-full border-round w-6"></div>
            </div>
            <div className="flex justify-content-between align-items-center">
                <span className="text-900">250/500</span>
                <span className="text-primary font-medium">2 weeks left</span>
            </div>
        </div>
        <div className="shadow-2 surface-card border-round p-4 flex-1 text-center">
            <div className="mb-4">
                <img src="/demo/images/blocks/stats/hats.png" width="100" height="100" className="-mt-8" alt="hats" />
                <span className="block text-900 mb-1 text-xl font-bold">Hats</span>
                <p className="text-600 m-0 font-medium">500 per Month</p>
            </div>
            <div className="flex justify-content-between align-items-center">
                <span className="text-600">Monthly Goal</span>
                <span className="text-900 font-medium">40%</span>
            </div>
            <div className="surface-300 mt-2 mb-3 border-round" style={{ height: '7px' }}>
                <div className="bg-yellow-500 h-full border-round w-4"></div>
            </div>
            <div className="flex justify-content-between align-items-center">
                <span className="text-900">200/500</span>
                <span className="text-primary font-medium">2 weeks left</span>
            </div>
        </div>
    </div>
</div>
    `;

    const block11 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row gap-3 md:align-items-center bg-primary border-round-xl p-3">
        <div className="flex flex-column align-items-center md:w-8rem">
            <button className="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary" onClick={nextDate}>
                <span className="p-button-icon pi pi-chevron-up"></span>
            </button>
            <div className="flex flex-column align-items-center">
                <span className="block mb-1 text-3xl font-semibold">{date.getDate()}</span>
                <span className="mt-0">{monthNames[date.getMonth()]}</span>
            </div>
            <button className="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary" onClick={prevDate}>
                <span className="p-button-icon pi pi-chevron-down"></span>
            </button>
        </div>
        <div className="flex-1 gap-3 flex flex-column sm:flex-row">
            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                <div className="text-center">
                    <i className="pi pi-eye text-4xl mb-2"></i>
                    <div className="text-sm font-semibold mb-2">VIEWS</div>
                    <span className="font-semibold">{date.getDay() * 1000 + 1000}</span>
                </div>
            </div>
            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                <div className="text-center">
                    <i className="pi pi-users text-4xl mb-2"></i>
                    <div className="text-sm font-semibold mb-2">FOLLOWS</div>
                    <span className="font-semibold">{date.getDay() * 10 + 10}</span>
                </div>
            </div>
            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                <div className="text-center">
                    <i className="pi pi-heart text-4xl mb-2"></i>
                    <div className="text-sm font-semibold mb-2">LIKES</div>
                    <span className="font-semibold">{date.getDay() * 100 + 100}</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Stats</div>
            <BlockViewer header="Icons and Footnotes" code={block1} free>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">
                                            Orders
                                        </span>
                                        <div className="text-900 font-medium text-xl">
                                            152
                                        </div>
                                    </div>
                                    <div
                                        className="flex align-items-center justify-content-center bg-blue-100 border-round"
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">
                                    24 new{" "}
                                </span>
                                <span className="text-500">
                                    since last visit
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">
                                            Revenue
                                        </span>
                                        <div className="text-900 font-medium text-xl">
                                            $2.100
                                        </div>
                                    </div>
                                    <div
                                        className="flex align-items-center justify-content-center bg-orange-100 border-round"
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">
                                    %52+{" "}
                                </span>
                                <span className="text-500">
                                    since last week
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">
                                            Customers
                                        </span>
                                        <div className="text-900 font-medium text-xl">
                                            28441
                                        </div>
                                    </div>
                                    <div
                                        className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">
                                    520{" "}
                                </span>
                                <span className="text-500">
                                    newly registered
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">
                                            Comments
                                        </span>
                                        <div className="text-900 font-medium text-xl">
                                            152 Unread
                                        </div>
                                    </div>
                                    <div
                                        className="flex align-items-center justify-content-center bg-purple-100 border-round"
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        <i className="pi pi-comment text-purple-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">
                                    85{" "}
                                </span>
                                <span className="text-500">responded</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Divider" code={block2}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                        <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                            <div className="flex align-items-center mb-3">
                                <i className="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                                <span className="text-500 font-medium">
                                    Orders
                                </span>
                            </div>
                            <span className="block text-900 font-medium mb-4 text-xl">
                                152 New
                            </span>
                            <div className="flex align-items-center">
                                <i className="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                                <span className="text-pink-500 font-medium ">
                                    -25
                                </span>
                            </div>
                        </div>
                        <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                            <div className="flex align-items-center mb-3">
                                <i className="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                                <span className="text-500 font-medium">
                                    Revenue
                                </span>
                            </div>
                            <span className="block text-900 font-medium mb-4 text-xl">
                                $1500
                            </span>
                            <div className="flex align-items-center">
                                <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                <span className="text-green-500 font-medium ">
                                    +15
                                </span>
                            </div>
                        </div>
                        <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                            <div className="flex align-items-center mb-3">
                                <i className="pi pi-users text-cyan-500 text-xl mr-2"></i>
                                <span className="text-500 font-medium">
                                    Customers
                                </span>
                            </div>
                            <span className="block text-900 font-medium mb-4 text-xl">
                                25100
                            </span>
                            <div className="flex align-items-center">
                                <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                <span className="text-green-500 font-medium ">
                                    +%12
                                </span>
                            </div>
                        </div>
                        <div className="flex-auto p-3">
                            <div className="flex align-items-center mb-3">
                                <i className="pi pi-users text-purple-500 text-xl mr-2"></i>
                                <span className="text-500 font-medium">
                                    Comments
                                </span>
                            </div>
                            <span className="block text-900 font-medium mb-4 text-xl">
                                72
                            </span>
                            <div className="flex align-items-center">
                                <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                <span className="text-green-500 font-medium ">
                                    +20
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Graph" code={block3}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 border-round">
                                <div className="p-3 flex align-items-start">
                                    <img
                                        src="/demo/images/blocks/crypto/btc.png"
                                        alt="btc"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        className="mr-2"
                                    />
                                    <div>
                                        <span className="text-700">
                                            Bitcoin
                                        </span>
                                        <div className="text-green-500 text-xl mt-2">
                                            +0.53%
                                        </div>
                                    </div>
                                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">
                                        0.0045 BTC
                                    </div>
                                </div>
                                <img
                                    src="/demo/images/blocks/graphs/graph-1.svg"
                                    alt="graph-1"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 border-round">
                                <div className="p-3 flex align-items-start">
                                    <img
                                        src="/demo/images/blocks/crypto/eth.png"
                                        alt="eth"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        className="mr-2"
                                    />
                                    <div>
                                        <span className="text-700">
                                            Ethereum
                                        </span>
                                        <div className="text-green-500 text-xl mt-2">
                                            +3.52%
                                        </div>
                                    </div>
                                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">
                                        25.0985 ETH
                                    </div>
                                </div>
                                <img
                                    src="/demo/images/blocks/graphs/graph-2.svg"
                                    alt="graph-2"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 border-round">
                                <div className="p-3 flex align-items-start">
                                    <img
                                        src="/demo/images/blocks/crypto/btc.png"
                                        alt="btc"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        className="mr-2"
                                    />
                                    <div>
                                        <span className="text-700">
                                            Dogecoin
                                        </span>
                                        <div className="text-pink-500 text-xl mt-2">
                                            -0.32%
                                        </div>
                                    </div>
                                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">
                                        59000 DOGE
                                    </div>
                                </div>
                                <img
                                    src="/demo/images/blocks/graphs/graph-3.svg"
                                    alt="graph-3"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 border-round">
                                <div className="p-3 flex align-items-start">
                                    <img
                                        src="/demo/images/blocks/crypto/xlm.png"
                                        alt="xlm"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                        className="mr-2"
                                    />
                                    <div>
                                        <span className="text-700">
                                            Stellar
                                        </span>
                                        <div className="text-green-500 text-xl mt-2">
                                            +0.99%
                                        </div>
                                    </div>
                                    <div className="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">
                                        1400 XLM
                                    </div>
                                </div>
                                <img
                                    src="/demo/images/blocks/graphs/graph-4.svg"
                                    alt="graph-4"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Illustrations and Status Bar" code={block4}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start">
                                    <div
                                        className="bg-blue-100 border-round inline-flex align-items-center justify-content-center"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                        }}
                                    >
                                        <img
                                            src="/demo/images/blocks/illustration/stats-illustration-1.svg"
                                            width="38"
                                            height="38"
                                            alt="stats-illustration-1"
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Revenue
                                        </span>
                                        <p className="text-600 mt-0 mb-5 text-sm">
                                            Sales Goal
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-700">
                                                Achieved
                                            </span>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        </div>
                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-blue-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-blue-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-blue-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-blue-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-blue-500"
                                            ></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start">
                                    <div
                                        className="bg-blue-100 border-round inline-flex align-items-center justify-content-center"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                        }}
                                    >
                                        <img
                                            src="/demo/images/blocks/illustration/stats-illustration-2.svg"
                                            width="38"
                                            height="38"
                                            alt="stats-illustration-2"
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Reviews
                                        </span>
                                        <p className="text-600 mt-0 mb-5 text-sm">
                                            Client Messages
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-700">
                                                In Progress
                                            </span>
                                            <span className="font-bold text-700">
                                                4/12
                                            </span>
                                        </div>
                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-orange-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-orange-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-gray-300"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-gray-300"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-gray-300"
                                            ></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start">
                                    <div
                                        className="bg-blue-100 border-round inline-flex align-items-center justify-content-center"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                        }}
                                    >
                                        <img
                                            src="/demo/images/blocks/illustration/stats-illustration-3.svg"
                                            width="38"
                                            height="38"
                                            alt="stats-illustration-3"
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Tasks
                                        </span>
                                        <p className="text-600 mt-0 mb-5 text-sm">
                                            Completed Tasks
                                        </p>
                                        <div className="flex align-items-center justify-content-between">
                                            <span className="text-700">
                                                In Progress
                                            </span>
                                            <span className="font-bold text-700">
                                                8/12
                                            </span>
                                        </div>
                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-purple-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-purple-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-purple-500"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-gray-300"
                                            ></li>
                                            <li
                                                style={{
                                                    height: "7px",
                                                    borderRadius: "3px",
                                                }}
                                                className="flex-1 bg-gray-300"
                                            ></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Progress Bars" code={block5}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start mb-5">
                                    <img
                                        src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png"
                                        width="56"
                                        height="56"
                                        alt="avatar-m-1"
                                    />
                                    <div className="ml-3">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Cameron Williamson
                                        </span>
                                        <p className="text-600 mt-0 mb-0">
                                            Marketing Coordinator
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-twitter mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Twitter
                                                </span>
                                            </span>
                                            <span className="text-cyan-500 font-medium">
                                                34.00%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-cyan-500 h-full"
                                                style={{
                                                    width: "34%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-facebook mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Facebook
                                                </span>
                                            </span>
                                            <span className="text-indigo-500 font-medium">
                                                45.86%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-indigo-500 h-full"
                                                style={{
                                                    width: "45%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-google mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Google
                                                </span>
                                            </span>
                                            <span className="text-orange-500 font-medium">
                                                79.00%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-orange-500 h-full"
                                                style={{
                                                    width: "79%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start mb-5">
                                    <img
                                        src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png"
                                        width="56"
                                        height="56"
                                        alt="avatar-f-2"
                                    />
                                    <div className="ml-3">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Kathryn Murphy
                                        </span>
                                        <p className="text-600 mt-0 mb-0">
                                            Sales Manager
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-twitter mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Twitter
                                                </span>
                                            </span>
                                            <span className="text-cyan-500 font-medium">
                                                64.47%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-cyan-500 h-full"
                                                style={{
                                                    width: "64%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-facebook mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Facebook
                                                </span>
                                            </span>
                                            <span className="text-indigo-500 font-medium">
                                                75.67%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-indigo-500 h-full"
                                                style={{
                                                    width: "75%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-google mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Google
                                                </span>
                                            </span>
                                            <span className="text-orange-500 font-medium">
                                                45.00%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-orange-500 h-full"
                                                style={{
                                                    width: "45%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-2">
                            <div className="shadow-2 surface-card border-round p-4 h-full">
                                <div className="flex align-items-start mb-5">
                                    <img
                                        src="/demo/images/blocks/avatars/circle-big/avatar-m-3.png"
                                        width="56"
                                        height="56"
                                        alt="avatar-m-3"
                                    />
                                    <div className="ml-3">
                                        <span className="block text-900 mb-1 text-xl font-medium">
                                            Darrell Steward
                                        </span>
                                        <p className="text-600 mt-0 mb-0">
                                            Web Designer
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-twitter mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Twitter
                                                </span>
                                            </span>
                                            <span className="text-cyan-500 font-medium">
                                                23.55%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-cyan-500 h-full"
                                                style={{
                                                    width: "34%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className="mb-5">
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-facebook mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Facebook
                                                </span>
                                            </span>
                                            <span className="text-indigo-500 font-medium">
                                                78.65%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-indigo-500 h-full"
                                                style={{
                                                    width: "45%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-content-between align-items-center">
                                            <span className="text-900 inline-flex justify-content-between align-items-center">
                                                <i className="pi pi-google mr-2"></i>
                                                <span className="font-medium text-900">
                                                    Google
                                                </span>
                                            </span>
                                            <span className="text-orange-500 font-medium">
                                                86.54%
                                            </span>
                                        </div>
                                        <div
                                            className="surface-300 w-full mt-2"
                                            style={{
                                                height: "7px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            <div
                                                className="bg-orange-500 h-full"
                                                style={{
                                                    width: "79%",
                                                    borderRadius: "4px",
                                                }}
                                            ></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="2x3 Grid"
                code={block6}
                containerClassName="surface-ground px-4 py-5 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <div className="shadow-2 surface-card border-round p-3">
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-xl font-medium text-900">
                            Traffic Distribution
                        </span>
                        <div className="ml-8">
                            <Button
                                icon="pi pi-ellipsis-v"
                                className="p-button-text p-button-plain p-button-rounded"
                                onClick={(event) => menu.current.toggle(event)}
                            />
                            <Menu ref={menu} popup model={items} />
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-twitter text-5xl text-blue-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        12.40K
                                    </div>
                                    <span className="font-medium text-600">
                                        Twitter
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 text-center">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-vimeo text-5xl text-blue-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        10.20K
                                    </div>
                                    <span className="font-medium text-600">
                                        Vimeo
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 text-center">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-facebook text-5xl text-blue-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        5.60K
                                    </div>
                                    <span className="font-medium text-600">
                                        Facebook
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 text-center">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-discord text-5xl text-indigo-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        23.53K
                                    </div>
                                    <span className="font-medium text-600">
                                        Discord
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 text-center">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-github text-5xl text-purple-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        16.70K
                                    </div>
                                    <span className="font-medium text-600">
                                        GitHub
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 text-center">
                                <div className="text-center border-1 surface-border border-round p-4">
                                    <i className="pi pi-google text-5xl text-pink-500"></i>
                                    <div className="text-900 text-2xl font-700 my-3 font-bold">
                                        16.50K
                                    </div>
                                    <span className="font-medium text-600">
                                        Google
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored and Centered" code={block7}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="p-3 text-center bg-blue-500"
                                style={{ borderRadius: "12px" }}
                            >
                                <span className="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3 p-3">
                                    <i className="pi pi-inbox text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">
                                    123K
                                </div>
                                <span className="text-blue-100 font-medium">
                                    Messages
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="p-3 text-center bg-purple-500"
                                style={{ borderRadius: "12px" }}
                            >
                                <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3">
                                    <i className="pi pi-map-marker text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">
                                    23K
                                </div>
                                <span className="text-purple-100 font-medium">
                                    Check-ins
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="p-3 text-center bg-indigo-500"
                                style={{ borderRadius: "12px" }}
                            >
                                <span className="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3">
                                    <i className="pi pi-file text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">
                                    23K
                                </div>
                                <span className="text-indigo-100 font-medium">
                                    Files
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="p-3 text-center bg-orange-500"
                                style={{ borderRadius: "12px" }}
                            >
                                <span className="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3 p-3">
                                    <i className="pi pi-users text-xl text-white"></i>
                                </span>
                                <div className="text-2xl font-medium text-white mb-2">
                                    40K
                                </div>
                                <span className="text-orange-100 font-medium">
                                    Users
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Illustration" code={block8}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-4 p-3">
                            <div
                                className="shadow-2 surface-card p-3"
                                style={{ borderRadius: "12px" }}
                            >
                                <div className="flex align-items-center justify-content-between">
                                    <div>
                                        <span className="text-3xl text-900 font-bold">
                                            40K
                                        </span>
                                        <p className="mt-1 mb-0 text-600 text-xl">
                                            Users Online
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/demo/images/blocks/illustration/stats-illustration-4.svg" alt="stats-illustration-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div
                                className="shadow-2 surface-card p-3"
                                style={{ borderRadius: "12px" }}
                            >
                                <div className="flex align-items-center justify-content-between">
                                    <div>
                                        <span className="text-3xl text-900 font-bold">
                                            24K
                                        </span>
                                        <p className="mt-1 mb-0 text-600 text-xl">
                                            Payments Processed
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/demo/images/blocks/illustration/stats-illustration-5.svg" alt="stats-illustration-5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div
                                className="shadow-2 surface-card p-3"
                                style={{ borderRadius: "12px" }}
                            >
                                <div className="flex align-items-center justify-content-between">
                                    <div>
                                        <span className="text-3xl text-900 font-bold">
                                            15K
                                        </span>
                                        <p className="mt-1 mb-0 text-600 text-xl">
                                            Daily Revenue
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/demo/images/blocks/illustration/stats-illustration-6.svg" alt="stats-illustration-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Single Progress Bar"
                code={block9}
                containerClassName="px-4 py-5 md:px-6 lg:px-8 lg:w-6 md:mx-auto"
            >
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <span className="text-xl font-medium text-900">
                            Quarter Goals
                        </span>
                        <div className="ml-auto">
                            <Button
                                icon="pi pi-ellipsis-v"
                                className="p-button-text p-button-plain p-button-rounded"
                                onClick={(event) => menu.current.toggle(event)}
                            />
                            <Menu ref={menu} popup model={items} />
                        </div>
                    </div>
                    <div className="surface-border border-1 border-round p-3 mb-4">
                        <span className="text-900 font-medium text-3xl">
                            85% <span className="text-600">(2125/2500)</span>
                        </span>
                        <ul className="mt-3 list-none p-0 mx-0 flex">
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-indigo-500 border-round-left"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-blue-500"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-orange-500"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-purple-500"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-yellow-500"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 bg-cyan-500"
                            ></li>
                            <li
                                style={{ height: "1rem" }}
                                className="flex-1 surface-500 border-round-right"
                            ></li>
                        </ul>
                    </div>
                    <ul className="mt-4 list-none p-0 mx-0">
                        <li className="flex align-items-center pb-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-indigo-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                Watch
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                152
                            </span>
                        </li>
                        <li className="flex align-items-center py-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-blue-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                Blue Band
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                63
                            </span>
                        </li>
                        <li className="flex align-items-center py-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-orange-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                Controller
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                23
                            </span>
                        </li>
                        <li className="flex align-items-center py-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-purple-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                Lime Band
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                42
                            </span>
                        </li>
                        <li className="flex align-items-center py-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-yellow-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                Phone Case
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                134
                            </span>
                        </li>
                        <li className="flex align-items-center py-3">
                            <span
                                style={{ width: "1rem", height: "1rem" }}
                                className="border-round bg-cyan-500 mr-3 flex-shrink-0"
                            ></span>
                            <span className="text-xl font-medium text-90">
                                T-Shirt
                            </span>
                            <span className="text-600 text-xl font-medium ml-auto">
                                89
                            </span>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Cards with Progress Bar" code={block10}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row gap-4 md:align-items-center xl:px-6 pt-6">
                        <div className="shadow-2 surface-card border-round p-4 flex-1 text-center mb-6 md:mb-0">
                            <div className="mb-4">
                                <img
                                    src="/demo/images/blocks/stats/shoes.png"
                                    width="100"
                                    height="100"
                                    className="-mt-8"
                                    alt="shoes"
                                />
                                <span className="block text-900 mb-1 text-xl font-bold">
                                    Shoes
                                </span>
                                <p className="text-600 m-0 font-medium">
                                    500 per Month
                                </p>
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-600">Monthly Goal</span>
                                <span className="text-900 font-medium">
                                    50%
                                </span>
                            </div>
                            <div
                                className="surface-300 mt-2 mb-3 border-round"
                                style={{ height: "7px" }}
                            >
                                <div className="bg-blue-500 h-full border-round w-6"></div>
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900">250/500</span>
                                <span className="text-primary font-medium">
                                    2 weeks left
                                </span>
                            </div>
                        </div>
                        <div className="shadow-2 surface-card border-round p-4 flex-1 text-center">
                            <div className="mb-4">
                                <img
                                    src="/demo/images/blocks/stats/hats.png"
                                    width="100"
                                    height="100"
                                    className="-mt-8"
                                    alt="hats"
                                />
                                <span className="block text-900 mb-1 text-xl font-bold">
                                    Hats
                                </span>
                                <p className="text-600 m-0 font-medium">
                                    500 per Month
                                </p>
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-600">Monthly Goal</span>
                                <span className="text-900 font-medium">
                                    40%
                                </span>
                            </div>
                            <div
                                className="surface-300 mt-2 mb-3 border-round"
                                style={{ height: "7px" }}
                            >
                                <div className="bg-yellow-500 h-full border-round w-4"></div>
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900">200/500</span>
                                <span className="text-primary font-medium">
                                    2 weeks left
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Date Picker" code={block11}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row gap-3 md:align-items-center bg-primary border-round-xl p-3">
                        <div className="flex flex-column align-items-center md:w-8rem">
                            <button
                                className="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary"
                                onClick={nextDate}
                            >
                                <span className="p-button-icon pi pi-chevron-up"></span>
                            </button>
                            <div className="flex flex-column align-items-center">
                                <span className="block mb-1 text-3xl font-semibold">
                                    {date.getDate()}
                                </span>
                                <span className="mt-0">
                                    {monthNames[date.getMonth()]}
                                </span>
                            </div>
                            <button
                                className="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary"
                                onClick={prevDate}
                            >
                                <span className="p-button-icon pi pi-chevron-down"></span>
                            </button>
                        </div>
                        <div className="flex-1 gap-3 flex flex-column sm:flex-row">
                            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                                <div className="text-center">
                                    <i className="pi pi-eye text-4xl mb-2"></i>
                                    <div className="text-sm font-semibold mb-2">
                                        VIEWS
                                    </div>
                                    <span className="font-semibold">
                                        {date.getDay() * 1000 + 1000}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                                <div className="text-center">
                                    <i className="pi pi-users text-4xl mb-2"></i>
                                    <div className="text-sm font-semibold mb-2">
                                        FOLLOWS
                                    </div>
                                    <span className="font-semibold">
                                        {date.getDay() * 10 + 10}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
                                <div className="text-center">
                                    <i className="pi pi-heart text-4xl mb-2"></i>
                                    <div className="text-sm font-semibold mb-2">
                                        LIKES
                                    </div>
                                    <span className="font-semibold">
                                        {date.getDay() * 100 + 100}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default StatsApp;
