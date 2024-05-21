import React, { useRef } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Tag } from "primereact/tag";
import { Ripple } from "primereact/ripple";

const PageHeading = () => {
    const menu8_1 = useRef(null);
    const menu8_2 = useRef(null);
    const menu8_3 = useRef(null);
    const menu9_1 = useRef(null);
    const menu9_2 = useRef(null);
    const menu9_3 = useRef(null);
    const menu11_1 = useRef(null);
    const menu12_1 = useRef(null);

    const items1 = [
        { label: "Javascript" },
        { label: "CSS" },
        { label: "Testing" },
    ];

    const items2 = [
        { label: "Los Angeles" },
        { label: "New York" },
        { label: "San Francisco" },
    ];

    const items3 = [{ label: "Permanent" }, { label: "Contractor" }];

    const block1 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span className="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div className="font-medium text-3xl text-900">Customers</div>
            <div className="flex align-items-center text-700 flex-wrap">
                <div className="mr-5 flex align-items-center mt-3">
                    <i className="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div className="mr-5 flex align-items-center mt-3">
                    <i className="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div className="flex align-items-center mt-3">
                    <i className="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div className="mt-3 lg:mt-0">
            <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
            <Button label="Save" icon="pi pi-check" />
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div className="flex align-items-start flex-column md:flex-row">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-1@2x.png" className="mr-5 mb-3 lg:mb-0" style={{ width: '90px', height: '90px' }} alt="avatar-f-1@2x" />
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
    `;

    const block3 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div className="font-medium text-3xl text-900">Customers</div>
        <div className="mt-3 md:mt-0">
            <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
            <Button label="Save" icon="pi pi-check" />
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
        <div className="font-medium text-3xl text-white">Customers</div>
        <div className="mt-3 md:mt-0">
            <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
            <Button label="Save" icon="pi pi-check" />
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Customers</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span className="text-900 line-height-3">VIP Leads</span>
        </li>
    </ul>
    <div className="flex flex-column md:flex-row md:justify-content-between">
        <span className="text-3xl font-medium text-900">VIP LEADS</span>
        <div className="flex align-items-center mt-3 md:mt-0">
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText placeholder="Search" className="mr-3" />
            </span>
            <Button icon="pi pi-user-plus" className="p-button-outlined p-button-rounded" />
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">Customers</a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span className="text-white line-height-3">VIP Leads</span>
        </li>
    </ul>
    <div className="flex flex-column md:flex-row md:justify-content-between">
        <span className="text-3xl font-medium text-white">VIP LEADS</span>
        <div className="flex align-items-center mt-3 md:mt-0">
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText placeholder="Search" className="mr-3 bg-gray-800 border-gray-800" />
            </span>
            <Button icon="pi pi-user-plus" className="p-button-rounded" />
        </div>
    </div>
</div>
    `;

    const block7 = `
<div>
    <div style={{ height: '200px', background: 'url("/demo/images/blocks/pageheading/cover.png") no-repeat', backgroundSize: 'cover' }}></div>
    <div className="px-4 py-5 md:px-6 lg:px-8 surface-section">
        <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style={{ marginTop: '-2rem', top: '-70px', marginBottom: '-70px' }}>
            <div>
                <div style={{ width: '140px', height: '140px', borderRadius: '10px' }} className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center">
                    <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" width="70" height="70" />
                </div>
                <div className="text-900 text-3xl font-medium mb-3">Company Name</div>
                <p className="mt-0 mb-3 text-700 text-xl">Vitae tortor condimentum lacinia quis vel eros.</p>
                <div className="text-600 font-medium">
                    <span>Software | USA | 15523 Followers</span>
                </div>
            </div>
            <div className="mt-3 lg:mt-0">
                <Button label="Follow" icon="pi pi-plus-circle" className="p-button-outlined mr-2" />
                <Button label="Website" icon="pi pi-link" className="mr-2" />
                <Button icon="pi pi-ellipsis-v" className="p-button-outlined p-button-rounded" />
            </div>
        </div>
    </div>
</div>
    `;

    const block8 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="text-900 text-3xl font-medium mb-3 flex align-items-center">Applications <span className="text-700 ml-3 text-base font-normal">7 Active</span></div>
    <div className="flex flex-column lg:flex-row lg:align-items-center">
        <span className="p-input-icon-left mr-3">
            <i className="pi pi-search"></i>
            <InputText placeholder="Search" style={{ borderRadius: '20px' }} />
        </span>
        <div className="mt-3 lg:mt-0 flex align-items-start flex-column md:flex-row">
            <span className="p-ripple inline-flex cursor-pointer py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                style={{ borderRadius: '20px' }} onClick={(event) => menu8_1.current.toggle(event)}>
                Specialties <i className="ml-2 pi pi-angle-down text-700"></i>
                <Ripple />
            </span>
            <Menu ref={menu8_1} popup model={items1} />
            <span className="p-ripple inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                style={{ borderRadius: '20px' }} onClick={(event) => menu8_2.current.toggle(event)}>
                Locations <i className="ml-2 pi pi-angle-down text-700"></i>
                <Ripple />
            </span>
            <Menu ref={menu8_2} popup model={items2} />
            <span className="p-ripple inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                style={{ borderRadius: '20px' }} onClick={(event) => menu8_3.current.toggle(event)}>
                Contract <i className="ml-2 pi pi-angle-down text-700"></i>
                <Ripple />
            </span>
            <Menu ref={menu8_3} popup model={items3} />
        </div>
    </div>
</div>
    `;

    const block9 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="text-900 text-3xl font-medium mb-3">Latest Projects</div>
    <div className="px-4 py-2 surface-border border-1 border-round-top surface-section">
        <div className="flex flex-wrap align-items-center">
            <span className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style={{ borderRadius: '20px' }}>CSS <i className="ml-2 pi pi-times-circle"></i></span>
            <span className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style={{ borderRadius: '20px' }}>Javascript <i className="ml-2 pi pi-times-circle"></i></span>
            <span className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap" style={{ borderRadius: '20px' }}>New York <i className="ml-2 pi pi-times-circle"></i></span>
            <span className="inline-flex p-2 surface-100 font-medium text-sm align-items-center my-1 white-space-nowrap" style={{ borderRadius: '20px' }}>Permanent <i className="ml-2 pi pi-times-circle"></i></span>
        </div>
    </div>
    <div className="px-4 py-2 surface-border border-1 border-top-none border-round-bottom surface-section">
        <div className="flex flex-wrap align-items-center">
            <span className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabIndex="0" onClick={(event) => menu9_1.current.toggle(event)}>Technologies <i className="ml-2 pi pi-angle-down"></i></span>
            <Menu ref={menu9_1} popup model={items1}></Menu>
            <span className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabIndex="0" onClick={(event) => menu9_2.current.toggle(event)}>Locations <i className="ml-2 pi pi-angle-down"></i></span>
            <Menu ref={menu9_2} popup model={items2}></Menu>
            <span className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none" tabIndex="0" onClick={(event) => menu9_3.current.toggle(event)}>Contract <i className="ml-2 pi pi-angle-down"></i></span>
            <Menu ref={menu9_3} popup model={items3}></Menu>
        </div>
    </div>
</div>
    `;

    const block10 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-3xl mb-3">Information Security Analyst</div>
    <div className="flex align-items-center text-700 mb-3">
        <span className="inline-flex align-items-center mr-5"><i className="pi pi-eye mr-2"></i>3232 Views</span>
        <span className="inline-flex align-items-center"><i className="pi pi-comments mr-2"></i>209 Comments</span>
    </div>
    <ul className="list-none p-0 m-0 surface-100 flex overflow-y-hidden overflow-x-auto border-round">
        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div className="text-xl font-medium text-900 mb-1">240</div>
            <span className="text-600 white-space-nowrap">New Applied</span>
        </li>
        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-100)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
            <div className="text-xl font-medium text-900 mb-1">159</div>
            <span className="text-600 white-space-nowrap">Screening</span>
            <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-300)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
        </li>
        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-100)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
            <div className="text-xl font-medium text-900 mb-1">79</div>
            <span className="text-600 white-space-nowrap">Interview</span>
            <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-300)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
        </li>
        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-100)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
            <div className="text-xl font-medium text-900 mb-1">19</div>
            <span className="text-600 white-space-nowrap">Offer</span>
            <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-300)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
        </li>
        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
            <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-100)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
            <div className="text-xl font-medium text-900 mb-1">5</div>
            <span className="text-600 white-space-nowrap">Hired</span>
            <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-300)', borderTop: '45px solid transparent', borderBottom: '45px solid transparent', width: '0', height: '0' }}></div>
        </li>
    </ul>
</div>
    `;

    const block11 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between">
    <div className="flex align-items-center">
        <div className="text-900 text-3xl font-medium mr-3">Mercury Mission</div>
        <Tag className="mr-2" value="Journey" rounded severity="warning" />
        <Tag className="mr-2" value="Space" rounded severity="help" />
    </div>
    <div className="flex align-items-center mt-3 lg:mt-0">
        <AvatarGroup className="mr-3">
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-1.png" shape="circle" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-2.png" shape="circle" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" shape="circle" />
        </AvatarGroup>
        <Button type="button" label="Invite" icon="pi pi-user-plus" className="mr-3 p-button-rounded" />
        <Button type="button" icon="pi pi-ellipsis-v" className="p-button-text p-button-rounded" onClick={(event) => menu11_1.current.toggle(event)} />
        <Menu ref={menu11_1} popup model={items1} />
    </div>
</div>
    `;

    const block12 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-wrap">
    <div className="w-full md:w-6">
        <span className="inline-flex align-items-center text-900 text-3xl font-medium mb-3 cursor-pointer" onClick={(event) => menu12_1.current.toggle(event)}>Venus Mission <span className="ml-2 pi pi-angle-down"></span></span>
        <Menu ref={menu12_1} popup model={items1} />
        <div className="flex align-items-center text-600">
            <span className="mr-5"><i className="pi pi-check-circle mr-2"></i>Verified</span>
            <span><i className="pi pi-book mr-2"></i>60 Cases</span>
        </div>
    </div>
    <div className="w-full md:w-6 flex flex-column md:flex-row md:align-items-center md:justify-content-end mt-4 md:mt-0">
        <div className="flex align-items-center mr-0 md:mr-5">
            <span className="block border-circle flex align-items-center justify-content-center bg-cyan-300 text-cyan-900 mr-3" style={{ width: '56px', height: '56px' }}>
                <i className="pi pi-users text-4xl"></i>
            </span>
            <div>
                <span className="font-medium text-600">Members</span>
                <p className="mt-1 mb-0 text-900 text-2xl font-medium">123</p>
            </div>
        </div>
        <div className="flex align-items-center mt-3 md:mt-0">
            <span className="block border-circle flex align-items-center justify-content-center bg-yellow-300 text-yellow-900 mr-3" style={{ width: '56px', height: '56px' }}>
                <i className="pi pi-wallet text-4xl"></i>
            </span>
            <div>
                <span className="font-medium text-600">Balance</span>
                <p className="mt-1 mb-0 text-900 text-2xl font-medium">$250</p>
            </div>
        </div>
    </div>
</div>
    `;

    const block13 = `
<div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div className="surface-card shadow-2 border-round-xl p-5">
        <div className="flex flex-wrap row-gap-3 align-items-center justify-content-between mb-5">
            <div className="flex align-items-center">
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4"/>
                </span>
                <div className="ml-3">
                    <div className="text-900 text-xl font-medium mb-1">Eleanor Pena</div>
                    <div className="text-600">Marketing</div>
                </div>
            </div>
            <Button label="Settings" className="p-ripple p-button-outlined p-button-plain"></Button>
        </div>
        <ul className="list-none m-0 p-3 surface-100 flex flex-column lg:flex-row border-round">
            <li className="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                <div className="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="/demo/images/blocks/pageheading/stat-1.svg" className="w-4rem" alt="stat-1"/>
                    </span>
                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div className="text-lg font-medium text-800 mb-2">Followers </div>
                        <span className="text-600 white-space-nowrap">Tuesday, 432</span>
                    </div>
                </div>
            </li>
            <li className="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                <div className="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="/demo/images/blocks/pageheading/stat-2.svg" className="w-4rem" alt="stat-2"/>
                    </span>
                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div className="text-lg font-medium text-800 mb-2">Favorites</div>
                        <span className="text-600 white-space-nowrap">Thursday, 970</span>
                    </div>
                </div>
            </li>
            <li className="flex-auto p-3">
                <div className="flex flex-column align-items-center md:flex-row">
                    <span>
                        <img src="/demo/images/blocks/pageheading/stat-3.svg" className="w-4rem" alt="stat-3"/>
                    </span>
                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                        <div className="text-lg font-medium text-800 mb-2">Unfollows</div>
                        <span className="text-600 white-space-nowrap">Monday, 91</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>`;

    const block14 = `
<section className="surface-section">
    <div
        className="h-16rem bg-cover"
        style={{
            background: "url('/demo/images/blocks/pageheading/cover-2.jpg')"
        }}></div>
    <div className="flex flex-column gap-3 md:flex-row justify-content-between px-4 py-4 md:px-6 lg:px-8">
        <nav>
            <ul className="flex list-none align-items-center gap-2 text-600 text-base line-height-3 p-0 m-0">
                <li>
                    <a className="cursor-pointer">
                        <i className="pi pi-home"></i>
                    </a>
                </li>
                <li>
                    <i className="pi pi-angle-right text-xs"></i>
                </li>
                <li>
                    <a className="cursor-pointer">Dashboard</a>
                </li>
                <li>
                    <i className="pi pi-angle-right text-xs"></i>
                </li>
                <li>
                    <a className="cursor-pointer">Profile</a>
                </li>
            </ul>
        </nav>
        <div className="flex flex-column align-items-center gap-4 md:-mt-8">
            <img src="/demo/images/blocks/avatars/circle-big/avatar-f-4@2x.png" alt="Image" className="w-10rem border-3 border-circle border-0" />
            <div className="flex flex-column align-items-center justify-content-center">
                <h1 className="m-0 font-semibold text-900 text-2xl line-height-3">
                    Sumitra Doe <i className="pi pi-verified text-xl text-primary-500"></i>
                </h1>
                <span className="text-700 text-base">@smtrdoe</span>
            </div>
            <div className="flex align-items-center gap-2">
                <Button label="Follow" className="p-button-rounded"></Button>
                <Button label="Message" className="p-button-outlined p-button-rounded"></Button>
                <Button icon="pi pi-ellipsis-h" className="p-button-outlined p-button-rounded"></Button>
            </div>
        </div>
        <div>
            <span className="p-input-icon-right w-full">
                <i className="pi pi-search"></i>
                <InputText placeholder="Search..." className="w-full" />
            </span>
        </div>
    </div>
</section>
`;

    return (
        <>
            <div className="block-category-title">Page Heading</div>
            <BlockViewer
                header="With Breadcrumb, Meta and Actions"
                code={block1}
                free
            >
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">
                                Application
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <span className="text-900 line-height-3">
                                Analytics
                            </span>
                        </li>
                    </ul>
                    <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                        <div>
                            <div className="font-medium text-3xl text-900">
                                Customers
                            </div>
                            <div className="flex align-items-center text-700 flex-wrap">
                                <div className="mr-5 flex align-items-center mt-3">
                                    <i className="pi pi-users mr-2"></i>
                                    <span>332 Active Users</span>
                                </div>
                                <div className="mr-5 flex align-items-center mt-3">
                                    <i className="pi pi-globe mr-2"></i>
                                    <span>9402 Sessions</span>
                                </div>
                                <div className="flex align-items-center mt-3">
                                    <i className="pi pi-clock mr-2"></i>
                                    <span>2.32m Avg. Duration</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-0">
                            <Button
                                label="Add"
                                className="p-button-outlined mr-2"
                                icon="pi pi-user-plus"
                            />
                            <Button label="Save" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Avatar, Meta and Actions" code={block2}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                        <div className="flex align-items-start flex-column md:flex-row">
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-1@2x.png"
                                className="mr-5 mb-3 lg:mb-0"
                                style={{ width: "90px", height: "90px" }}
                                alt="avatar-f-1@2x"
                            />
                            <div>
                                <span className="text-900 font-medium text-3xl">
                                    Kathryn Murphy
                                </span>
                                <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                                <div className="flex align-items-center flex-wrap text-sm">
                                    <div className="mr-5 mt-3">
                                        <span className="font-medium text-500">
                                            FOLLOWERS
                                        </span>
                                        <div className="text-700 mt-2">333</div>
                                    </div>
                                    <div className="mr-5 mt-3">
                                        <span className="font-medium text-500">
                                            PROJECTS
                                        </span>
                                        <div className="text-700 mt-2">26</div>
                                    </div>
                                    <div className="mr-5 mt-3">
                                        <span className="font-medium text-500">
                                            COLLECTIONS
                                        </span>
                                        <div className="text-700 mt-2">17</div>
                                    </div>
                                    <div className="mt-3">
                                        <span className="font-medium text-500">
                                            SHOTS
                                        </span>
                                        <div className="text-700 mt-2">130</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-0">
                            <Button
                                icon="pi pi-bookmark"
                                className="p-button-rounded mr-2"
                            />
                            <Button
                                icon="pi pi-heart"
                                className="p-button-rounded p-button-success mr-2"
                            />
                            <Button
                                icon="pi pi-list"
                                className="p-button-rounded p-button-help"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Actions" code={block3}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
                        <div className="font-medium text-3xl text-900">
                            Customers
                        </div>
                        <div className="mt-3 md:mt-0">
                            <Button
                                label="Add"
                                className="p-button-outlined mr-2"
                                icon="pi pi-user-plus"
                            />
                            <Button label="Save" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Background" code={block4}>
                <div className="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex flex-column md:align-items-center md:justify-content-between md:flex-row">
                        <div className="font-medium text-3xl text-white">
                            Customers
                        </div>
                        <div className="mt-3 md:mt-0">
                            <Button
                                label="Add"
                                className="p-button-outlined mr-2"
                                icon="pi pi-user-plus"
                            />
                            <Button label="Save" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Breadcrumb with Search" code={block5}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">
                                Application
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">
                                Customers
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <span className="text-900 line-height-3">
                                VIP Leads
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-column md:flex-row md:justify-content-between">
                        <span className="text-3xl font-medium text-900">
                            VIP LEADS
                        </span>
                        <div className="flex align-items-center mt-3 md:mt-0">
                            <span className="p-input-icon-left">
                                <i className="pi pi-search"></i>
                                <InputText
                                    placeholder="Search"
                                    className="mr-3"
                                />
                            </span>
                            <Button
                                icon="pi pi-user-plus"
                                className="p-button-outlined p-button-rounded"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Breadcrumb with Search" code={block6}>
                <div className="bg-gray-900 px-4 py-5 md:px-6 lg:px-8">
                    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">
                                Application
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">
                                Customers
                            </a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <span className="text-white line-height-3">
                                VIP Leads
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-column md:flex-row md:justify-content-between">
                        <span className="text-3xl font-medium text-white">
                            VIP LEADS
                        </span>
                        <div className="flex align-items-center mt-3 md:mt-0">
                            <span className="p-input-icon-left">
                                <i className="pi pi-search"></i>
                                <InputText
                                    placeholder="Search"
                                    className="mr-3 bg-gray-800 border-gray-800"
                                />
                            </span>
                            <Button
                                icon="pi pi-user-plus"
                                className="p-button-rounded"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Cover Image" code={block7}>
                <div>
                    <div
                        style={{
                            height: "200px",
                            background:
                                'url("/demo/images/blocks/pageheading/cover.png") no-repeat',
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <div className="px-4 py-5 md:px-6 lg:px-8 surface-section">
                        <div
                            className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative"
                            style={{
                                marginTop: "-2rem",
                                top: "-70px",
                                marginBottom: "-70px",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "10px",
                                    }}
                                    className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center"
                                >
                                    <img
                                        src="/demo/images/blocks/logos/hyper.svg"
                                        alt="Image"
                                        width="70"
                                        height="70"
                                    />
                                </div>
                                <div className="text-900 text-3xl font-medium mb-3">
                                    Company Name
                                </div>
                                <p className="mt-0 mb-3 text-700 text-xl">
                                    Vitae tortor condimentum lacinia quis vel
                                    eros.
                                </p>
                                <div className="text-600 font-medium">
                                    <span>
                                        Software | USA | 15523 Followers
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 lg:mt-0">
                                <Button
                                    label="Follow"
                                    icon="pi pi-plus-circle"
                                    className="p-button-outlined mr-2"
                                />
                                <Button
                                    label="Website"
                                    icon="pi pi-link"
                                    className="mr-2"
                                />
                                <Button
                                    icon="pi pi-ellipsis-v"
                                    className="p-button-outlined p-button-rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Search and filter" code={block8}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="text-900 text-3xl font-medium mb-3 flex align-items-center">
                        Applications{" "}
                        <span className="text-700 ml-3 text-base font-normal">
                            7 Active
                        </span>
                    </div>
                    <div className="flex flex-column lg:flex-row lg:align-items-center">
                        <span className="p-input-icon-left mr-3">
                            <i className="pi pi-search"></i>
                            <InputText
                                placeholder="Search"
                                style={{ borderRadius: "20px" }}
                            />
                        </span>
                        <div className="mt-3 lg:mt-0 flex align-items-start flex-column md:flex-row">
                            <span
                                className="p-ripple inline-flex cursor-pointer py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                                style={{ borderRadius: "20px" }}
                                onClick={(event) =>
                                    menu8_1.current.toggle(event)
                                }
                            >
                                Specialties{" "}
                                <i className="ml-2 pi pi-angle-down text-700"></i>
                                <Ripple />
                            </span>
                            <Menu ref={menu8_1} popup model={items1} />
                            <span
                                className="p-ripple inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                                style={{ borderRadius: "20px" }}
                                onClick={(event) =>
                                    menu8_2.current.toggle(event)
                                }
                            >
                                Locations{" "}
                                <i className="ml-2 pi pi-angle-down text-700"></i>
                                <Ripple />
                            </span>
                            <Menu ref={menu8_2} popup model={items2} />
                            <span
                                className="p-ripple inline-flex cursor-pointer  py-2 px-3 align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 mb-3 md:mb-0 mr-0 md:mr-3 select-none"
                                style={{ borderRadius: "20px" }}
                                onClick={(event) =>
                                    menu8_3.current.toggle(event)
                                }
                            >
                                Contract{" "}
                                <i className="ml-2 pi pi-angle-down text-700"></i>
                                <Ripple />
                            </span>
                            <Menu ref={menu8_3} popup model={items3} />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Advanced Filter" code={block9}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="text-900 text-3xl font-medium mb-3">
                        Latest Projects
                    </div>
                    <div className="px-4 py-2 surface-border border-1 border-round-top surface-section">
                        <div className="flex flex-wrap align-items-center">
                            <span
                                className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap"
                                style={{ borderRadius: "20px" }}
                            >
                                CSS <i className="ml-2 pi pi-times-circle"></i>
                            </span>
                            <span
                                className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap"
                                style={{ borderRadius: "20px" }}
                            >
                                Javascript{" "}
                                <i className="ml-2 pi pi-times-circle"></i>
                            </span>
                            <span
                                className="inline-flex p-2 surface-100 font-medium text-sm align-items-center mr-3 my-1 white-space-nowrap"
                                style={{ borderRadius: "20px" }}
                            >
                                New York{" "}
                                <i className="ml-2 pi pi-times-circle"></i>
                            </span>
                            <span
                                className="inline-flex p-2 surface-100 font-medium text-sm align-items-center my-1 white-space-nowrap"
                                style={{ borderRadius: "20px" }}
                            >
                                Permanent{" "}
                                <i className="ml-2 pi pi-times-circle"></i>
                            </span>
                        </div>
                    </div>
                    <div className="px-4 py-2 surface-border border-1 border-top-none border-round-bottom surface-section">
                        <div className="flex flex-wrap align-items-center">
                            <span
                                className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none"
                                tabIndex="0"
                                onClick={(event) =>
                                    menu9_1.current.toggle(event)
                                }
                            >
                                Technologies{" "}
                                <i className="ml-2 pi pi-angle-down"></i>
                            </span>
                            <Menu ref={menu9_1} popup model={items1}></Menu>
                            <span
                                className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none"
                                tabIndex="0"
                                onClick={(event) =>
                                    menu9_2.current.toggle(event)
                                }
                            >
                                Locations{" "}
                                <i className="ml-2 pi pi-angle-down"></i>
                            </span>
                            <Menu ref={menu9_2} popup model={items2}></Menu>
                            <span
                                className="inline-flex p-2 text-bluegray-500 hover:text-bluegray-600 align-items-center mr-3 my-1 cursor-pointer select-none"
                                tabIndex="0"
                                onClick={(event) =>
                                    menu9_3.current.toggle(event)
                                }
                            >
                                Contract{" "}
                                <i className="ml-2 pi pi-angle-down"></i>
                            </span>
                            <Menu ref={menu9_3} popup model={items3}></Menu>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Meta and Steps" code={block10}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-3xl mb-3">
                        Information Security Analyst
                    </div>
                    <div className="flex align-items-center text-700 mb-3">
                        <span className="inline-flex align-items-center mr-5">
                            <i className="pi pi-eye mr-2"></i>3232 Views
                        </span>
                        <span className="inline-flex align-items-center">
                            <i className="pi pi-comments mr-2"></i>209 Comments
                        </span>
                    </div>
                    <ul className="list-none p-0 m-0 surface-100 flex overflow-y-hidden overflow-x-auto border-round">
                        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
                            <div className="text-xl font-medium text-900 mb-1">
                                240
                            </div>
                            <span className="text-600 white-space-nowrap">
                                New Applied
                            </span>
                        </li>
                        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
                            <div
                                className="absolute left-0 top-0 z-1"
                                style={{
                                    borderLeft: "20px solid var(--surface-100)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                            <div className="text-xl font-medium text-900 mb-1">
                                159
                            </div>
                            <span className="text-600 white-space-nowrap">
                                Screening
                            </span>
                            <div
                                className="absolute top-0"
                                style={{
                                    left: "1px",
                                    borderLeft: "20px solid var(--surface-300)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                        </li>
                        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
                            <div
                                className="absolute left-0 top-0 z-1"
                                style={{
                                    borderLeft: "20px solid var(--surface-100)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                            <div className="text-xl font-medium text-900 mb-1">
                                79
                            </div>
                            <span className="text-600 white-space-nowrap">
                                Interview
                            </span>
                            <div
                                className="absolute top-0"
                                style={{
                                    left: "1px",
                                    borderLeft: "20px solid var(--surface-300)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                        </li>
                        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
                            <div
                                className="absolute left-0 top-0 z-1"
                                style={{
                                    borderLeft: "20px solid var(--surface-100)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                            <div className="text-xl font-medium text-900 mb-1">
                                19
                            </div>
                            <span className="text-600 white-space-nowrap">
                                Offer
                            </span>
                            <div
                                className="absolute top-0"
                                style={{
                                    left: "1px",
                                    borderLeft: "20px solid var(--surface-300)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                        </li>
                        <li className="relative py-3 pl-6 pr-3 flex flex-column justify-content-center">
                            <div
                                className="absolute left-0 top-0 z-1"
                                style={{
                                    borderLeft: "20px solid var(--surface-100)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                            <div className="text-xl font-medium text-900 mb-1">
                                5
                            </div>
                            <span className="text-600 white-space-nowrap">
                                Hired
                            </span>
                            <div
                                className="absolute top-0"
                                style={{
                                    left: "1px",
                                    borderLeft: "20px solid var(--surface-300)",
                                    borderTop: "45px solid transparent",
                                    borderBottom: "45px solid transparent",
                                    width: "0",
                                    height: "0",
                                }}
                            ></div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Tags and Avatars" code={block11}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between">
                    <div className="flex align-items-center">
                        <div className="text-900 text-3xl font-medium mr-3">
                            Mercury Mission
                        </div>
                        <Tag
                            className="mr-2"
                            value="Journey"
                            rounded
                            severity="warning"
                        />
                        <Tag
                            className="mr-2"
                            value="Space"
                            rounded
                            severity="help"
                        />
                    </div>
                    <div className="flex align-items-center mt-3 lg:mt-0">
                        <AvatarGroup className="mr-3">
                            <Avatar
                                image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                shape="circle"
                            />
                            <Avatar
                                image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                shape="circle"
                            />
                            <Avatar
                                image="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                shape="circle"
                            />
                            <Avatar
                                image="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                shape="circle"
                            />
                            <Avatar
                                image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                shape="circle"
                            />
                        </AvatarGroup>
                        <Button
                            type="button"
                            label="Invite"
                            icon="pi pi-user-plus"
                            className="mr-3 p-button-rounded"
                        />
                        <Button
                            type="button"
                            icon="pi pi-ellipsis-v"
                            className="p-button-text p-button-rounded"
                            onClick={(event) => menu11_1.current.toggle(event)}
                        />
                        <Menu ref={menu11_1} popup model={items1} />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Stats" code={block12}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8 flex flex-wrap">
                    <div className="w-full md:w-6">
                        <span
                            className="inline-flex align-items-center text-900 text-3xl font-medium mb-3 cursor-pointer"
                            onClick={(event) => menu12_1.current.toggle(event)}
                        >
                            Venus Mission{" "}
                            <span className="ml-2 pi pi-angle-down"></span>
                        </span>
                        <Menu ref={menu12_1} popup model={items1} />
                        <div className="flex align-items-center text-600">
                            <span className="mr-5">
                                <i className="pi pi-check-circle mr-2"></i>
                                Verified
                            </span>
                            <span>
                                <i className="pi pi-book mr-2"></i>60 Cases
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-6 flex flex-column md:flex-row md:align-items-center md:justify-content-end mt-4 md:mt-0">
                        <div className="flex align-items-center mr-0 md:mr-5">
                            <span
                                className="block border-circle flex align-items-center justify-content-center bg-cyan-300 text-cyan-900 mr-3"
                                style={{ width: "56px", height: "56px" }}
                            >
                                <i className="pi pi-users text-4xl"></i>
                            </span>
                            <div>
                                <span className="font-medium text-600">
                                    Members
                                </span>
                                <p className="mt-1 mb-0 text-900 text-2xl font-medium">
                                    123
                                </p>
                            </div>
                        </div>
                        <div className="flex align-items-center mt-3 md:mt-0">
                            <span
                                className="block border-circle flex align-items-center justify-content-center bg-yellow-300 text-yellow-900 mr-3"
                                style={{ width: "56px", height: "56px" }}
                            >
                                <i className="pi pi-wallet text-4xl"></i>
                            </span>
                            <div>
                                <span className="font-medium text-600">
                                    Balance
                                </span>
                                <p className="mt-1 mb-0 text-900 text-2xl font-medium">
                                    $250
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card with Avatar and Stats" code={block13}>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="surface-card shadow-2 border-round-xl p-5">
                        <div className="flex flex-wrap row-gap-3 align-items-center justify-content-between mb-5">
                            <div className="flex align-items-center">
                                <span>
                                    <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4"/>
                                </span>
                                <div className="ml-3">
                                    <div className="text-900 text-xl font-medium mb-1">
                                        Eleanor Pena
                                    </div>
                                    <div className="text-600">Marketing</div>
                                </div>
                            </div>
                            <Button
                                label="Settings"
                                className="p-ripple p-button-outlined p-button-plain"
                            ></Button>
                        </div>
                        <ul className="list-none m-0 p-3 surface-100 flex flex-column lg:flex-row border-round">
                            <li className="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                                <div className="flex flex-column align-items-center md:flex-row">
                                    <span>
                                        <img
                                            src="/demo/images/blocks/pageheading/stat-1.svg"
                                            className="w-4rem"
                                            alt="stat-1"
                                        />
                                    </span>
                                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                                        <div className="text-lg font-medium text-800 mb-2">
                                            Followers{" "}
                                        </div>
                                        <span className="text-600 white-space-nowrap">
                                            Tuesday, 432
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex-auto border-bottom-1 lg:border-bottom-none lg:border-right-1 p-3 surface-border">
                                <div className="flex flex-column align-items-center md:flex-row">
                                    <span>
                                        <img
                                            src="/demo/images/blocks/pageheading/stat-2.svg"
                                            className="w-4rem"
                                            alt="stat-2"
                                        />
                                    </span>
                                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                                        <div className="text-lg font-medium text-800 mb-2">
                                            Favorites
                                        </div>
                                        <span className="text-600 white-space-nowrap">
                                            Thursday, 970
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex-auto p-3">
                                <div className="flex flex-column align-items-center md:flex-row">
                                    <span>
                                        <img
                                            src="/demo/images/blocks/pageheading/stat-3.svg"
                                            className="w-4rem"
                                            alt="stat-3"
                                        />
                                    </span>
                                    <div className="mt-3 md:mt-0 ml-0 md:ml-3 text-center md:text-left">
                                        <div className="text-lg font-medium text-800 mb-2">
                                            Unfollows
                                        </div>
                                        <span className="text-600 white-space-nowrap">
                                            Monday, 91
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Cover Image" code={block14} new>
                <section className="surface-section">
                    <div
                        className="h-16rem bg-cover"
                        style={{
                            background:
                                "url('/demo/images/blocks/pageheading/cover-2.jpg')",
                        }}
                    ></div>
                    <div className="flex flex-column gap-3 md:flex-row justify-content-between px-4 py-4 md:px-6 lg:px-8">
                        <nav>
                            <ul className="flex list-none align-items-center gap-2 text-600 text-base line-height-3 p-0 m-0">
                                <li>
                                    <a className="cursor-pointer">
                                        <i className="pi pi-home"></i>
                                    </a>
                                </li>
                                <li>
                                    <i className="pi pi-angle-right text-xs"></i>
                                </li>
                                <li>
                                    <a className="cursor-pointer">Dashboard</a>
                                </li>
                                <li>
                                    <i className="pi pi-angle-right text-xs"></i>
                                </li>
                                <li>
                                    <a className="cursor-pointer">Profile</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex flex-column align-items-center gap-4 md:-mt-8">
                            <img
                                src="/demo/images/blocks/avatars/circle-big/avatar-f-4@2x.png"
                                alt="Image"
                                className="w-10rem border-3 border-circle border-0"
                            />
                            <div className="flex flex-column align-items-center justify-content-center">
                                <h1 className="m-0 font-semibold text-900 text-2xl line-height-3">
                                    Sumitra Doe{" "}
                                    <i className="pi pi-verified text-xl text-primary-500"></i>
                                </h1>
                                <span className="text-700 text-base">
                                    @smtrdoe
                                </span>
                            </div>
                            <div className="flex align-items-center gap-2">
                                <Button
                                    label="Follow"
                                    className="p-button-rounded"
                                ></Button>
                                <Button
                                    label="Message"
                                    className="p-button-outlined p-button-rounded"
                                ></Button>
                                <Button
                                    icon="pi pi-ellipsis-h"
                                    className="p-button-outlined p-button-rounded"
                                ></Button>
                            </div>
                        </div>
                        <div>
                            <span className="p-input-icon-right w-full">
                                <i className="pi pi-search"></i>
                                <InputText
                                    placeholder="Search..."
                                    className="w-full"
                                />
                            </span>
                        </div>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default PageHeading;
