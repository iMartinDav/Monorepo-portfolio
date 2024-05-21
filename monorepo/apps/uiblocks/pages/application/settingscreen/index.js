import React, { useState, useRef } from "react";
import { classNames } from "primereact/utils";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputSwitch } from "primereact/inputswitch";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Divider } from "primereact/divider";
import { Checkbox } from "primereact/checkbox";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";

const SettingScreen = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);

    const [value, setValue] = useState(false);
    const [country, setCountry] = useState(null);
    const [checked, setChecked] = useState(false);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);

    const countries = [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
    ];

    const items = [
        {
            label: "Options",
            items: [
                {
                    label: "Update",
                    icon: "pi pi-refresh",
                },
                {
                    label: "Delete",
                    icon: "pi pi-times",
                },
            ],
        },
    ];

    const menuRef = useRef(null);

    const members = [
        {
            image: "avatar-f-13",
            name: "Jenny Wilson",
            username: "@jnnywlsn",
            date: "Oct 30, 2022",
            active: "2 hours ago",
        },
        {
            image: "avatar-f-14",
            name: "Kathryn Murphy",
            username: "@murphyyy",
            date: "Jul 14, 2022",
            active: "5 days ago",
        },
        {
            image: "avatar-f-15",
            name: "Leslie Alexander",
            username: "@leslie98",
            date: "Dec 19, 2022",
            active: "4 days ago",
        },
        {
            image: "avatar-m-13",
            name: "Ralph Edwards",
            username: "@ralphadator",
            date: "Feb 11, 2022",
            active: "9 hours ago",
        },
        {
            image: "avatar-m-14",
            name: "Guy Hawkins",
            username: "@guyman",
            date: "Aug 02, 2022",
            active: "2 hours ago",
        },
        {
            image: "avatar-f-16",
            name: "Wade Warren",
            username: "@wayyyd",
            date: "May 20, 2022",
            active: "6 days ago",
        },
        {
            image: "avatar-f-17",
            name: "Kristin Watson",
            username: "@kristinwtsn",
            date: "Nov 28, 2022",
            active: "5 days ago",
        },
    ];

    const roles = [
        {
            color: "bg-purple-500",
            alias: "Project Manager",
            date: "Oct 30, 2022",
            users: "4 users",
        },
        {
            color: "bg-blue-500",
            alias: "QA Manager",
            date: "Oct 30, 2022",
            users: "2 users",
        },
        {
            color: "bg-green-500",
            alias: "QA Tester",
            date: "Oct 30, 2022",
            users: "1 user",
        },
        {
            color: "bg-red-500",
            alias: "Product Manager",
            date: "Oct 30, 2022",
            users: "7 users",
        },
        {
            color: "bg-indigo-500",
            alias: "UX Designer",
            date: "Oct 30, 2022",
            users: "1 users",
        },
        {
            color: "bg-green-500",
            alias: "UI Designer",
            date: "Oct 30, 2022",
            users: "3 users",
        },
        {
            color: "bg-orange-500",
            alias: "Developer",
            date: "Oct 30, 2022",
            users: "5 users",
        },
    ];

    const AvatarBodyTemplate = (member) => {
        return (
            <div className="flex align-items-center gap-3">
                <Avatar
                    image={`/demo/images/blocks/avatars/circle/${member.image}.png`}
                    className="mr-2"
                    size="large"
                    shape="circle"
                />
                <div>
                    <p className="mt-0 mb-2 font-medium text-lg text-color-primary">
                        {member.name}
                    </p>
                    <p className="mt-0 mb-2 font-normal text-base text-color-secondary">
                        {member.username}
                    </p>
                </div>
            </div>
        );
    };

    const MenuPopup = ({ items, menuRef }) => {
        return (
            <div>
                <Button
                    icon="pi pi-ellipsis-v"
                    className="p-button-text p-button-secondary"
                    onClick={(event) => menuRef?.current?.toggle(event)}
                />
                <Menu ref={menuRef} popup model={items} />
            </div>
        );
    };

    const AliasBodyTemplate = (roles) => {
        return (
            <div className="flex align-items-center">
                <span
                    className={`border-circle ${roles.color} mr-2`}
                    style={{ width: "7px", height: "7px" }}
                ></span>
                <p className="mt-0 mb-0 font-medium text-lg text-color-primary">
                    {roles.alias}
                </p>
            </div>
        );
    };

    const block1 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar" className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div className="flex h-full">
            <div className="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                <div className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style={{ height: '60px' }}>
                    <img src="/demo/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
                </div>
                <div className="overflow-y-auto mt-3">
                    <ul className="list-none py-3 px-2 m-0">
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(0)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 0 })}>
                                <i className="pi pi-home text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(1)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 1 })}>
                                <i className="pi pi-bookmark text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(2)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 2 })}>
                                <i className="pi pi-users text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(3)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 3 })}>
                                <i className="pi pi-comments text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(4)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 4 })}>
                                <i className="pi pi-calendar text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(5)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 5 })}>
                                <i className="pi pi-cog text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto mx-3">
                    <hr className="mb-3 border-top-1 border-bottom-none border-indigo-300" />
                    <a className="p-ripple my-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
            transition-duration-150 transition-colors w-full">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" style={{ width: '24px', height: '24px' }} alt="avatar-f-1"/>
                        <Ripple />
                    </a>
                </div>
            </div>
            <div className="flex flex-column surface-0 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style={{ width: '250px' }}>
                <div className="justify-content-end mb-3 flex lg:hidden">
                    <StyleClass nodeRef={btnRef1} selector="#app-sidebar" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" >
                        <Button ref={btnRef1} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
                    </StyleClass>
                </div>
                <div className="surface-0 flex-auto">
                    <div className={classNames({ 'hidden': activeTab !== 0 })}>
                        <div className="w-full lg:w-auto select-none">
                            <ul className="list-none py-2 px-0 m-0">
                                <li>
                                    <div className="p-3 text-500 font-medium">HOME</div>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2 text-700"></i>
                                        <span className="font-medium text-700">Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                        <span className="font-medium text-700">Bookmarks</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2 text-700"></i>
                                        <span className="font-medium text-700">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-comments mr-2 text-700"></i>
                                        <span className="font-medium text-700">Messages</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                        <span className="font-medium text-700">Calendar</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-user mr-2 text-blue-500"></i>
                                        <span className="font-medium text-blue-500 font-bold">Profile</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none py-2 px-0 m-0 border-top-1 surface-border">
                                <li>
                                    <div className="p-3 text-500 font-medium">ORGANIZATION</div>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2 text-700"></i>
                                        <span className="font-medium text-700">Overview</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                        <span className="font-medium text-700">Security</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2 text-700"></i>
                                        <span className="font-medium text-700">Domains</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                        <span className="font-medium text-700">Reports</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 1 })}>Bookmarks</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 2 })}>Team</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 3 })}>Messages</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 4 })}>Calendar</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 5 })}>Settings</div>
                </div>
            </div >
        </div >
    </div >
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <div className="flex align-items-center">
                <StyleClass nodeRef={btnRef2} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                    <a ref={btnRef2} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3" >
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-InputText-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef3} className="p-ripple cursor-pointer block lg:hidden text-700" >
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0  hidden lg:flex lg:align-items-center select-none lg:flex-row
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
            <div>
                <div className="text-900 font-medium text-xl mb-3">Profile</div>
                <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
                    Egestas integer eget aliquet nibh praesent tristique magna.</p>
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="grid formgrid p-fluid">
                        <div className="field mb-4 col-12">
                            <label htmlFor="nickname" className="font-medium">Nickname</label>
                            <InputText id="nickname" type="text" />
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="bio" className="font-medium">Bio</label>
                            <InputTextarea id="bio" type="text" rows={5} autoResize />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="avatar" className="font-medium">Avatar</label>
                            <div className="flex align-items-center">
                                <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mr-4" />
                                <FileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize={1000000} chooseOptions={{ className: 'p-button-plain p-button-outlined' }} chooseLabel="Upload Image" />
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <InputText id="email" type="text" />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="bio" className="font-medium">Country</label>
                            <Dropdown options={countries} value={country} onChange={(e) => setCountry(e.value) } optionLabel="name" filter filterBy="name" showClear placeholder="Select a Country" itemTemplate={(country) => <div className="flex align-items-center">
                                <img src="/demo/images/blocks/flag/flag_placeholder.png" alt="flag" className={'mr-2 flag flag-' + country.code.toLowerCase()} style={{ width: '18px' }} />
                                <div>{country.name}</div>
                            </div>} />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="city" className="font-medium">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="state" className="font-medium">State</label>
                            <InputText id="state" type="text" />
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12">
                            <label htmlFor="website" className="font-medium">Website</label>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">www</span>
                                <InputText id="website" type="text" />
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12">
                            <label htmlFor="privacy" className="font-medium">Privacy</label>
                            <div className="flex align-items-center">
                                <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
                                <span className="ml-2">Share my data with contacts</span>
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="col-12">
                            <Button label="Save Changes" className="w-auto mt-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<section className="flex flex-column bg-black-alpha-90">
    <nav className="bg-black-alpha-90 px-4 flex justify-content-between relative xl:static" style={{ minHeight: '70px' }}>
        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <img src="/demo/images/blocks/logos/hyper-300.svg" alt="Image" height="40" className="mr-0 xl:mr-6 align-self-center" />
            <a ref={btnRef4} className="p-ripple cursor-pointer block xl:hidden align-self-center text-700">
                <i className="pi pi-bars text-4xl text-300"></i>
                <Ripple />
            </a>
        </StyleClass>
        <div className="bg-black-alpha-90 flex-grow-1 justify-content-between hidden xl:flex absolute xl:static w-full left-0 top-100 z-1 shadow-2 xl:shadow-none surface-900">
            <ul className="list-none p-0 m-0 flex select-none flex-column xl:flex-row xl:gap-2">
                <li className="xl:flex xl:align-items-end">
                    <a
                        className={classNames('p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150', {
                            'surface-50 text-900': activeTab2 === 0,
                            'surface-700 text-50': activeTab2 !== 0
                        })}
                        onClick={() => setActiveTab2(0)}>
                        <i className={classNames('pi pi-bolt mr-2', { 'text-800': activeTab2 === 0 })}></i>
                        <span>Dashboard</span>
                        <Ripple />
                    </a>
                </li>
                <li className="xl:flex xl:align-items-end">
                    <a
                        className={classNames('p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150', {
                            'surface-50 text-900': activeTab2 === 1,
                            'surface-700 text-50': activeTab2 !== 1
                        })}
                        onClick={() => setActiveTab2(1)}>
                        <i className={classNames('pi pi-cog mr-2', { 'text-800': activeTab2 === 1 })}></i>
                        <span>Settings</span>
                        <Ripple />
                    </a>
                </li>
                <li className="xl:flex xl:align-items-end">
                    <a
                        className={classNames('p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150', {
                            'surface-50 text-900': activeTab2 === 2,
                            'surface-700 text-50': activeTab2 !== 2
                        })}
                        onClick={() => setActiveTab2(2)}>
                        <i className={classNames('pi pi-users mr-2', { 'text-800': activeTab2 === 2 })}></i>
                        <span className="mr-2">Team</span>
                        <Ripple />
                    </a>
                </li>
                <li className="xl:flex xl:align-items-end">
                    <a
                        className={classNames('p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150', {
                            'surface-50 text-900': activeTab2 === 3,
                            'surface-700 text-50': activeTab2 !== 3
                        })}
                        onClick={() => setActiveTab2(3)}>
                        <i className={classNames('pi pi-comments mr-2', { 'text-800': activeTab2 === 3 })}></i>
                        <span>Messages</span>
                        <span className="p-tag border-circle bg-cyan-500 text-white ml-2">3</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
            <ul className="list-none p-0 m-0 flex xl:align-items-center select-none flex-column xl:flex-row border-top-1 surface-border xl:border-top-none">
                <li>
                    <a className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 justify-content-start xl:justify-content-center align-items-center text-orange-600 hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150" onClick={() => setActiveTab2(4)}>
                        <i className="pi pi-inbox text-base xl:text-2xl mr-2 xl:mr-0"></i>
                        <span className="block xl:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 justify-content-start xl:justify-content-center align-items-center text-cyan-600 hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150" onClick={() => setActiveTab2(5)}>
                        <i className="pi pi-bell text-base xl:text-2xl mr-2 xl:mr-0" severity="danger"></i>
                        <span className="block xl:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border xl:border-top-none">
                    <a className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 text-50 hover:text-900 justify-content-start xl:justify-content-center align-items-center hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150" onClick={() => setActiveTab2(6)}>
                        <img
                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                            className="mr-3 xl:mr-0"
                            style={{
                                width: '32px',
                                height: '32px'
                            }}
                            alt="avatar-f-1"
                        />
                        <div className="block xl:hidden">
                            <span className="block font-medium">Josephine Lillard</span>
                            <span className="block font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div className="flex flex-column flex-auto bg-black-alpha-90">
        <div className="surface-section px-4 py-4 lg:py-5 lg:px-6 h-full border-round-top-3xl">
            <div className="flex flex-column md:flex-row w-full justify-content-between md:align-items-center">
                <div>
                    <h2 className="mt-0 mb-2 text-900 font-medium text-2xl">Settings</h2>
                    <p className="mt-0 mb-0 text-500">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</p>
                </div>
                <span className="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
                    <i className="pi pi-search"></i>
                    <InputText placeholder="Search" className="w-full md:w-15rem border-round" />
                </span>
            </div>
            <Divider className="my-5"></Divider>
            <div className="p-fluid flex flex-column lg:flex-row">
                <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-between lg:justify-content-start mb-5 lg:mb-0">
                    <li>
                        <a
                            className={classNames('lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', {
                                'surface-200': activeTab3 === 0
                            })}
                            onClick={(e) => setActiveTab3(0)}>
                            <i
                                className={classNames('pi pi-user md:mr-2', {
                                    'text-700': activeTab3 === 0,
                                    'text-600': activeTab3 !== 0
                                })}></i>
                            <span
                                className={classNames('font-medium hidden md:block', {
                                    'text-800': activeTab3 === 0,
                                    'text-700': activeTab3 !== 0
                                })}>
                                Profile
                            </span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a
                            className={classNames('lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', {
                                'surface-200': activeTab3 === 1
                            })}
                            onClick={(e) => setActiveTab3(1)}>
                            <i
                                className={classNames('pi pi-cog md:mr-2', {
                                    'text-700': activeTab3 === 1,
                                    'text-600': activeTab3 !== 1
                                })}></i>
                            <span
                                className={classNames('font-medium hidden md:block', {
                                    'text-800': activeTab3 === 1,
                                    'text-700': activeTab3 !== 1
                                })}>
                                Account
                            </span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a
                            className={classNames('lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', {
                                'surface-200': activeTab3 === 2
                            })}
                            onClick={(e) => setActiveTab3(2)}>
                            <i
                                className={classNames('pi pi-palette md:mr-2', {
                                    'text-700': activeTab3 === 2,
                                    'text-600': activeTab3 !== 2
                                })}></i>
                            <span
                                className={classNames('font-medium hidden md:block', {
                                    'text-800': activeTab3 === 2,
                                    'text-700': activeTab3 !== 2
                                })}>
                                Appearance
                            </span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a
                            className={classNames('lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', {
                                'surface-200': activeTab3 === 3
                            })}
                            onClick={(e) => setActiveTab3(3)}>
                            <i
                                className={classNames('pi pi-sun md:mr-2', {
                                    'text-700': activeTab3 === 3,
                                    'text-600': activeTab3 !== 3
                                })}></i>
                            <span
                                className={classNames('font-medium hidden md:block', {
                                    'text-800': activeTab3 === 3,
                                    'text-700': activeTab3 !== 3
                                })}>
                                Accessibility
                            </span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a
                            className={classNames('lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', {
                                'surface-200': activeTab3 === 4
                            })}
                            onClick={(e) => setActiveTab3(4)}>
                            <i
                                className={classNames('pi pi-bell md:mr-2', {
                                    'text-700': activeTab3 === 4,
                                    'text-600': activeTab3 !== 4
                                })}></i>
                            <span
                                className={classNames('font-medium hidden md:block', {
                                    'text-800': activeTab3 === 4,
                                    'text-700': activeTab3 !== 4
                                })}>
                                Notifications
                            </span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <div className=" surface-section surface-card p-5 shadow-2 border-round flex-auto xl:ml-5">
                    <div className="text-900 font-semibold text-lg mt-3">Profile</div>
                    <Divider></Divider>
                    <div className="flex gap-5 flex-column-reverse md:flex-row">
                        <div className="flex-auto p-fluid">
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-normal text-900 mb-2">
                                    Name
                                </label>
                                <InputText id="email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="bio" className="block font-normal text-900 mb-2">
                                    Bio
                                </label>
                                <InputTextarea id="bio" rows="5" autoResize="true"></InputTextarea>
                                <p className="mt-2 mb-0 font-medium text-base text-600">
                                    You can <span className="font-medium text-900">@mention</span> other users and organizations to link to them.
                                </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="website" className="block font-normal text-900 mb-2">
                                    URL
                                </label>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">https://</span>
                                    <InputText id="website" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company" className="block font-normal text-900 mb-2">
                                    Company
                                </label>
                                <InputText id="company" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="visibility" className="block font-normal text-900 mb-2">
                                    Profile Visibility
                                </label>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="visibility" onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
                                    <span className="ml-2 font-normal text-base text-color-primary">Make profile private and hide all activity</span>
                                </div>
                            </div>
                            <div>
                                <Button label="Update Profile" className="w-auto mt-3"></Button>
                            </div>
                        </div>
                        <div className="flex flex-column align-items-center flex-or">
                            <span className="font-normal text-900 mb-2">Profile Picture</span>
                            <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" className="h-10rem w-10rem" alt="avatar-f-2"/>
                            <Button icon="pi pi-pencil" className="p-button-rounded -mt-4"></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="surface-section px-6 p-3 lg:px-3 mt-5">
                <div className="flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                    <div>
                        <img src="/demo/images/blocks/logos/hyper-900.svg" alt="Image" height="40" />
                        <p className="mt-2 mb-0 line-height-3 font-medium text-base text-700">&copy; 202X Hyper, Inc. All rights reserved.</p>
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <a className="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                            <i className="pi pi-twitter text-xl"></i>
                        </a>
                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                            <i className="pi pi-facebook text-xl"></i>
                        </a>
                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                            <i className="pi pi-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `;

    const block3 = `
<nav className="surface-overlay px-4 lg:px-6 shadow-2 flex justify-content-between relative lg:static" style={{ minHeight: '84px' }}>
    <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6 align-self-center" />
        <a ref={btnRef5} className="cursor-pointer block lg:hidden align-self-center text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-home mr-2"></i>
                    <span>Home</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Inbox</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span className="block lg:hidden font-medium">Notifications</span>
                    <Ripple />
                </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none">
                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img
                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                        className="mr-3 lg:mr-0"
                        style={{
                            width: '28px',
                            height: '28px'
                        }}
                        alt="avatar-f-1"
                    />
                    <div className="block lg:hidden">
                        <div className="text-900 font-medium">Josephine Lillard</div>
                        <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        <Ripple />
                    </div>
                </a>
            </li>
        </ul>
    </div>
</nav>
<nav className="surface-overlay px-4 lg:px-6 py-4 px-4 lg:px-6 border-y-1 surface-border flex flex-column flex-wrap md:flex-row gap-3 w-full md:justify-content-between md:align-items-center">
    <ul className="list-none m-0 p-0 flex flex-row justify-content-between lg:justify-content-start lg:mb-0">
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 0 })} onClick={(e) => setActiveTab3(0)}>
                <i
                    className={classNames('pi pi-chart-line md:hidden', {
                        'text-700': activeTab3 === 0,
                        'text-600': activeTab3 !== 0
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 0,
                        'text-600': activeTab3 !== 0
                    })}>
                    Overview
                </span>
                <Ripple />
            </a>
        </li>
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 1 })} onClick={(e) => setActiveTab3(1)}>
                <i
                    className={classNames('pi pi-user md:hidden', {
                        'text-700': activeTab3 === 1,
                        'text-600': activeTab3 !== 1
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 1,
                        'text-600': activeTab3 !== 1
                    })}>
                    Profile
                </span>
            </a>
        </li>
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 2 })} onClick={(e) => setActiveTab3(2)}>
                <i
                    className={classNames('pi pi-bolt md:hidden', {
                        'text-700': activeTab3 === 2,
                        'text-600': activeTab3 !== 2
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 2,
                        'text-600': activeTab3 !== 2
                    })}>
                    Activity
                </span>
            </a>
        </li>
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 3 })} onClick={(e) => setActiveTab3(3)}>
                <i
                    className={classNames('pi pi-users md:hidden', {
                        'text-700': activeTab3 === 3,
                        'text-600': activeTab3 !== 3
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 3,
                        'text-600': activeTab3 !== 3
                    })}>
                    Members & Roles
                </span>
            </a>
        </li>
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 4 })} onClick={(e) => setActiveTab3(4)}>
                <i
                    className={classNames('pi pi-lock md:hidden', {
                        'text-700': activeTab3 === 4,
                        'text-600': activeTab3 !== 4
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 4,
                        'text-600': activeTab3 !== 4
                    })}>
                    Security
                </span>
            </a>
        </li>
        <li>
            <a className={classNames('flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors', { 'surface-200': activeTab3 === 5 })} onClick={(e) => setActiveTab3(5)}>
                <i
                    className={classNames('pi pi-dollar md:hidden', {
                        'text-700': activeTab3 === 5,
                        'text-600': activeTab3 !== 5
                    })}></i>
                <span
                    className={classNames('font-medium hidden md:block', {
                        'text-900': activeTab3 === 5,
                        'text-600': activeTab3 !== 5
                    })}>
                    Team Plan
                </span>
            </a>
        </li>
    </ul>
    <span className="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
        <i className="pi pi-search"></i>
        <InputText placeholder="Search" className="w-full md:w-15rem border-round" />
    </span>
</nav>
<section className="surface-overlay px-4 lg:px-6 py-4 px-4 lg:px-6 border-top-1 surface-border">
    <div className="border-bottom-1 surface-border">
        <h2 className="mt-0 mb-2 text-900 font-bold text-4xl">Members & Roles</h2>
        <p className="mt-0 mb-5 text-700 font-normal text-base">You can easily manage your team on this page</p>
    </div>
    <section className="flex flex-wrap gap-3 py-6 justify-content-between border-bottom-1 surface-border">
        <div className="flex-shrink-0 w-15rem">
            <h3 className="mb-4 mt-0 text-900 font-medium text-xl">Members</h3>
            <p className="mb-4 mt-0 text-700 font-normal text-base">Manage your member in this project</p>
            <Button label="Invite a member" className="w-auto"></Button>
        </div>
        <div className="overflow-x-scroll">
            <DataTable value={members} rowHover scrollable style={{ minWidth: '60rem' }}>
                <Column headerClassName="font-semibold text-sm text-color-secondary" header="Name" body={AvatarBodyTemplate} style={{ minWidth: '350px' }}></Column>
                <Column headerClassName="font-semibold text-sm text-color-secondary" field="date" header="Joined Date" style={{ minWidth: '150px' }} />
                <Column headerClassName="font-semibold text-sm text-color-secondary" field="active" header="Last Active" style={{ minWidth: '150px' }} />
                <Column body={<MenuPopup items={items} menuRef={menuRef} />} style={{ minWidth: '150px' }} />
            </DataTable>
        </div>
    </section>
    <section className="flex flex-wrap gap-3 py-6 justify-content-between border-bottom-1 surface-border">
        <div className="flex-shrink-0 w-15rem">
            <h3 className="mb-4 mt-0 text-900 font-medium text-xl">Roles</h3>
            <p className="mb-4 mt-0 text-700 font-normal text-base">Edit roles in this project</p>
            <Button label="Add a role" className="w-auto" />
        </div>
        <div className="overflow-x-scroll">
            <DataTable value={roles} rowHover scrollable style={{ minWidth: '60rem' }}>
                <Column style={{ minWidth: '350px' }} header="Alias Name" headerClassName="font-semibold text-sm text-color-secondary" body={AliasBodyTemplate}>
                    {' '}
                </Column>
                <Column style={{ minWidth: '150px' }} header="Last Edit" headerClassName="font-semibold text-sm text-color-secondary" field="date" />
                <Column style={{ minWidth: '150px' }} header="Users" headerClassName="font-semibold text-sm text-color-secondary" field="users" />
                <Column style={{ minWidth: '150px' }} body={<MenuPopup items={items} menuRef={menuRef} />}></Column>
            </DataTable>
        </div>
    </section>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Setting</div>
            <BlockViewer header="Settings" code={block1}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div
                        id="app-sidebar"
                        className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto"
                    >
                        <div className="flex h-full">
                            <div className="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                                <div
                                    className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600"
                                    style={{ height: "60px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/logos/hyper-light.svg"
                                        alt="hyper-light"
                                        height={30}
                                    />
                                </div>
                                <div className="overflow-y-auto mt-3">
                                    <ul className="list-none py-3 px-2 m-0">
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(0)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 0,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-home text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(1)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 1,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-bookmark text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(2)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 2,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-users text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(3)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 3,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-comments text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(4)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 4,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-calendar text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                onClick={() => setActiveTab(5)}
                                                className={classNames(
                                                    "p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors",
                                                    {
                                                        "bg-indigo-700":
                                                            activeTab === 5,
                                                    }
                                                )}
                                            >
                                                <i className="pi pi-cog text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto mx-3">
                                    <hr className="mb-3 border-top-1 border-bottom-none border-indigo-300" />
                                    <a
                                        className="p-ripple my-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
                            transition-duration-150 transition-colors w-full"
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                            }}
                                            alt="avatar-f-1"
                                            />
                                        <Ripple />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="flex flex-column surface-0 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0"
                                style={{ width: "250px" }}
                            >
                                <div className="justify-content-end mb-3 flex lg:hidden">
                                    <StyleClass
                                        nodeRef={btnRef1}
                                        selector="#app-sidebar"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeoutleft"
                                    >
                                        <Button
                                            ref={btnRef1}
                                            icon="pi pi-times"
                                            className="p-button-rounded p-button-text p-button-plain"
                                        />
                                    </StyleClass>
                                </div>
                                <div className="surface-0 flex-auto">
                                    <div
                                        className={classNames({
                                            hidden: activeTab !== 0,
                                        })}
                                    >
                                        <div className="w-full lg:w-auto select-none">
                                            <ul className="list-none py-2 px-0 m-0">
                                                <li>
                                                    <div className="p-3 text-500 font-medium">
                                                        HOME
                                                    </div>
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
                                                                minWidth:
                                                                    "1.5rem",
                                                                height: "1.5rem",
                                                            }}
                                                        >
                                                            2
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-user mr-2 text-blue-500"></i>
                                                        <span className="font-medium text-blue-500 font-bold">
                                                            Profile
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="list-none py-2 px-0 m-0 border-top-1 surface-border">
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
                                                                minWidth:
                                                                    "1.5rem",
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
                                    </div>
                                    <div
                                        className={classNames(
                                            "p-3 font-medium text-xl text-900",
                                            { hidden: activeTab !== 1 }
                                        )}
                                    >
                                        Bookmarks
                                    </div>
                                    <div
                                        className={classNames(
                                            "p-3 font-medium text-xl text-900",
                                            { hidden: activeTab !== 2 }
                                        )}
                                    >
                                        Team
                                    </div>
                                    <div
                                        className={classNames(
                                            "p-3 font-medium text-xl text-900",
                                            { hidden: activeTab !== 3 }
                                        )}
                                    >
                                        Messages
                                    </div>
                                    <div
                                        className={classNames(
                                            "p-3 font-medium text-xl text-900",
                                            { hidden: activeTab !== 4 }
                                        )}
                                    >
                                        Calendar
                                    </div>
                                    <div
                                        className={classNames(
                                            "p-3 font-medium text-xl text-900",
                                            { hidden: activeTab !== 5 }
                                        )}
                                    >
                                        Settings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div
                            className="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static"
                            style={{ height: "60px" }}
                        >
                            <div className="flex align-items-center">
                                <StyleClass
                                    nodeRef={btnRef2}
                                    selector="#app-sidebar"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadeinleft"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeoutleft"
                                >
                                    <a
                                        ref={btnRef2}
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
                                nodeRef={btnRef3}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="fadein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef3}
                                    className="p-ripple cursor-pointer block lg:hidden text-700"
                                >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul
                                className="list-none p-0 m-0  hidden lg:flex lg:align-items-center select-none lg:flex-row
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
                            <div>
                                <div className="text-900 font-medium text-xl mb-3">
                                    Profile
                                </div>
                                <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
                                    Odio euismod lacinia at quis risus sed
                                    vulputate odio. Non nisi est sit amet.
                                    Egestas integer eget aliquet nibh praesent
                                    tristique magna.
                                </p>
                                <div className="surface-card p-4 shadow-2 border-round">
                                    <div className="grid formgrid p-fluid">
                                        <div className="field mb-4 col-12">
                                            <label
                                                htmlFor="nickname"
                                                className="font-medium"
                                            >
                                                Nickname
                                            </label>
                                            <InputText
                                                id="nickname"
                                                type="text"
                                            />
                                        </div>
                                        <div
                                            className="surface-100 mb-3 col-12"
                                            style={{ height: "2px" }}
                                        ></div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="bio"
                                                className="font-medium"
                                            >
                                                Bio
                                            </label>
                                            <InputTextarea
                                                id="bio"
                                                type="text"
                                                rows={5}
                                                autoResize
                                            />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="avatar"
                                                className="font-medium"
                                            >
                                                Avatar
                                            </label>
                                            <div className="flex align-items-center">
                                                <img
                                                    src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                                    alt="avatar-f-4"
                                                    className="mr-4"
                                                />
                                                <FileUpload
                                                    mode="basic"
                                                    name="avatar"
                                                    url="./upload.php"
                                                    accept="image/*"
                                                    maxFileSize={1000000}
                                                    chooseOptions={{
                                                        className:
                                                            "p-button-plain p-button-outlined",
                                                    }}
                                                    chooseLabel="Upload Image"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="surface-100 mb-3 col-12"
                                            style={{ height: "2px" }}
                                        ></div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="email"
                                                className="font-medium"
                                            >
                                                Email
                                            </label>
                                            <InputText id="email" type="text" />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="bio"
                                                className="font-medium"
                                            >
                                                Country
                                            </label>
                                            <Dropdown
                                                options={countries}
                                                value={country}
                                                onChange={(e) =>
                                                    setCountry(e.value)
                                                }
                                                optionLabel="name"
                                                filter
                                                filterBy="name"
                                                showClear
                                                placeholder="Select a Country"
                                                itemTemplate={(country) => (
                                                    <div className="flex align-items-center">
                                                        <img
                                                            src="/demo/images/blocks/flag/flag_placeholder.png"
                                                            alt="flag"
                                                            className={
                                                                "mr-2 flag flag-" +
                                                                country.code.toLowerCase()
                                                            }
                                                            style={{
                                                                width: "18px",
                                                            }}
                                                        />
                                                        <div>
                                                            {country.name}
                                                        </div>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="city"
                                                className="font-medium"
                                            >
                                                City
                                            </label>
                                            <InputText id="city" type="text" />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label
                                                htmlFor="state"
                                                className="font-medium"
                                            >
                                                State
                                            </label>
                                            <InputText id="state" type="text" />
                                        </div>
                                        <div
                                            className="surface-100 mb-3 col-12"
                                            style={{ height: "2px" }}
                                        ></div>
                                        <div className="field mb-4 col-12">
                                            <label
                                                htmlFor="website"
                                                className="font-medium"
                                            >
                                                Website
                                            </label>
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">
                                                    www
                                                </span>
                                                <InputText
                                                    id="website"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="surface-100 mb-3 col-12"
                                            style={{ height: "2px" }}
                                        ></div>
                                        <div className="field mb-4 col-12">
                                            <label
                                                htmlFor="privacy"
                                                className="font-medium"
                                            >
                                                Privacy
                                            </label>
                                            <div className="flex align-items-center">
                                                <InputSwitch
                                                    checked={value}
                                                    onChange={(e) =>
                                                        setValue(e.value)
                                                    }
                                                />
                                                <span className="ml-2">
                                                    Share my data with contacts
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="surface-100 mb-3 col-12"
                                            style={{ height: "2px" }}
                                        ></div>
                                        <div className="col-12">
                                            <Button
                                                label="Save Changes"
                                                className="w-auto mt-3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Profile" code={block2} new>
                <section className="flex flex-column bg-black-alpha-90">
                    <nav
                        className="bg-black-alpha-90 px-4 flex justify-content-between relative xl:static"
                        style={{ minHeight: "70px" }}
                    >
                        <StyleClass
                            nodeRef={btnRef4}
                            selector="@next"
                            enterClassName="hidden"
                            leaveToClassName="hidden"
                            hideOnOutsideClick
                        >
                            <img
                                src="/demo/images/blocks/logos/hyper-300.svg"
                                alt="Image"
                                height="40"
                                className="mr-0 xl:mr-6 align-self-center"
                            />
                            <a
                                ref={btnRef4}
                                className="p-ripple cursor-pointer block xl:hidden align-self-center text-700"
                            >
                                <i className="pi pi-bars text-4xl text-300"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <div className="bg-black-alpha-90 flex-grow-1 justify-content-between hidden xl:flex absolute xl:static w-full left-0 top-100 z-1 shadow-2 xl:shadow-none surface-900">
                            <ul className="list-none p-0 m-0 flex select-none flex-column xl:flex-row xl:gap-2">
                                <li className="xl:flex xl:align-items-end">
                                    <a
                                        className={classNames(
                                            "p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150",
                                            {
                                                "surface-50 text-900":
                                                    activeTab2 === 0,
                                                "surface-700 text-50":
                                                    activeTab2 !== 0,
                                            }
                                        )}
                                        onClick={() => setActiveTab2(0)}
                                    >
                                        <i
                                            className={classNames(
                                                "pi pi-bolt mr-2",
                                                { "text-800": activeTab2 === 0 }
                                            )}
                                        ></i>
                                        <span>Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="xl:flex xl:align-items-end">
                                    <a
                                        className={classNames(
                                            "p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150",
                                            {
                                                "surface-50 text-900":
                                                    activeTab2 === 1,
                                                "surface-700 text-50":
                                                    activeTab2 !== 1,
                                            }
                                        )}
                                        onClick={() => setActiveTab2(1)}
                                    >
                                        <i
                                            className={classNames(
                                                "pi pi-cog mr-2",
                                                { "text-800": activeTab2 === 1 }
                                            )}
                                        ></i>
                                        <span>Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="xl:flex xl:align-items-end">
                                    <a
                                        className={classNames(
                                            "p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150",
                                            {
                                                "surface-50 text-900":
                                                    activeTab2 === 2,
                                                "surface-700 text-50":
                                                    activeTab2 !== 2,
                                            }
                                        )}
                                        onClick={() => setActiveTab2(2)}
                                    >
                                        <i
                                            className={classNames(
                                                "pi pi-users mr-2",
                                                { "text-800": activeTab2 === 2 }
                                            )}
                                        ></i>
                                        <span className="mr-2">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="xl:flex xl:align-items-end">
                                    <a
                                        className={classNames(
                                            "p-ripple xl:border-round-top flex align-items-center h-3rem px-3 font-medium cursor-pointer transition-colors transition-duration-150",
                                            {
                                                "surface-50 text-900":
                                                    activeTab2 === 3,
                                                "surface-700 text-50":
                                                    activeTab2 !== 3,
                                            }
                                        )}
                                        onClick={() => setActiveTab2(3)}
                                    >
                                        <i
                                            className={classNames(
                                                "pi pi-comments mr-2",
                                                { "text-800": activeTab2 === 3 }
                                            )}
                                        ></i>
                                        <span>Messages</span>
                                        <span className="p-tag border-circle bg-cyan-500 text-white ml-2">
                                            3
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none p-0 m-0 flex xl:align-items-center select-none flex-column xl:flex-row border-top-1 surface-border xl:border-top-none">
                                <li>
                                    <a
                                        className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 justify-content-start xl:justify-content-center align-items-center text-orange-600 hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150"
                                        onClick={() => setActiveTab2(4)}
                                    >
                                        <i className="pi pi-inbox text-base xl:text-2xl mr-2 xl:mr-0"></i>
                                        <span className="block xl:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 justify-content-start xl:justify-content-center align-items-center text-cyan-600 hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150"
                                        onClick={() => setActiveTab2(5)}
                                    >
                                        <i
                                            className="pi pi-bell text-base xl:text-2xl mr-2 xl:mr-0"
                                            severity="danger"
                                        ></i>
                                        <span className="block xl:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border xl:border-top-none">
                                    <a
                                        className="p-ripple flex h-3rem w-full xl:w-3rem px-3 xl:px-0 text-50 hover:text-900 justify-content-start xl:justify-content-center align-items-center hover:surface-hover font-medium xl:border-round cursor-pointer transition-colors transition-duration-150"
                                        onClick={() => setActiveTab2(6)}
                                    >
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 xl:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
                                            alt="avatar-f-1"
                                        />
                                        <div
                                            className="block xl:hidden"
                                        >
                                            <span className="block font-medium">
                                                Josephine Lillard
                                            </span>
                                            <span className="block font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="flex flex-column flex-auto bg-black-alpha-90">
                        <div className="surface-section px-4 py-4 lg:py-5 lg:px-6 h-full border-round-top-3xl">
                            <div className="flex flex-column md:flex-row w-full justify-content-between md:align-items-center">
                                <div>
                                    <h2 className="mt-0 mb-2 text-900 font-medium text-2xl">
                                        Settings
                                    </h2>
                                    <p className="mt-0 mb-0 text-500">
                                        Vivamus id nisl interdum, blandit augue
                                        sit amet, eleifend mi.
                                    </p>
                                </div>
                                <span className="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        placeholder="Search"
                                        className="w-full md:w-15rem border-round"
                                    />
                                </span>
                            </div>
                            <Divider className="my-5"></Divider>
                            <div className="p-fluid flex flex-column lg:flex-row">
                                <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-between lg:justify-content-start mb-5 lg:mb-0">
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 0,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(0)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-user md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 0,
                                                        "text-600":
                                                            activeTab3 !== 0,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 0,
                                                        "text-700":
                                                            activeTab3 !== 0,
                                                    }
                                                )}
                                            >
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 1,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(1)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-cog md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 1,
                                                        "text-600":
                                                            activeTab3 !== 1,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 1,
                                                        "text-700":
                                                            activeTab3 !== 1,
                                                    }
                                                )}
                                            >
                                                Account
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 2,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(2)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-palette md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 2,
                                                        "text-600":
                                                            activeTab3 !== 2,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 2,
                                                        "text-700":
                                                            activeTab3 !== 2,
                                                    }
                                                )}
                                            >
                                                Appearance
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 3,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(3)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-sun md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 3,
                                                        "text-600":
                                                            activeTab3 !== 3,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 3,
                                                        "text-700":
                                                            activeTab3 !== 3,
                                                    }
                                                )}
                                            >
                                                Accessibility
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 4,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(4)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-bell md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 4,
                                                        "text-600":
                                                            activeTab3 !== 4,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 4,
                                                        "text-700":
                                                            activeTab3 !== 4,
                                                    }
                                                )}
                                            >
                                                Notifications
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <div className=" surface-section surface-card p-5 shadow-2 border-round flex-auto xl:ml-5">
                                    <div className="text-900 font-semibold text-lg mt-3">
                                        Profile
                                    </div>
                                    <Divider></Divider>
                                    <div className="flex gap-5 flex-column-reverse md:flex-row">
                                        <div className="flex-auto p-fluid">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Name
                                                </label>
                                                <InputText id="email" />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="bio"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Bio
                                                </label>
                                                <InputTextarea
                                                    id="bio"
                                                    rows="5"
                                                    autoResize="true"
                                                ></InputTextarea>
                                                <p className="mt-2 mb-0 font-medium text-base text-600">
                                                    You can{" "}
                                                    <span className="font-medium text-900">
                                                        @mention
                                                    </span>{" "}
                                                    other users and
                                                    organizations to link to
                                                    them.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="website"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    URL
                                                </label>
                                                <div className="p-inputgroup">
                                                    <span className="p-inputgroup-addon">
                                                        https://
                                                    </span>
                                                    <InputText id="website" />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="company"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Company
                                                </label>
                                                <InputText id="company" />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="visibility"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Profile Visibility
                                                </label>
                                                <div className="flex align-items-center">
                                                    <Checkbox
                                                        inputId="visibility"
                                                        onChange={(e) =>
                                                            setChecked(
                                                                e.checked
                                                            )
                                                        }
                                                        checked={checked}
                                                    ></Checkbox>
                                                    <span className="ml-2 font-normal text-base text-color-primary">
                                                        Make profile private and
                                                        hide all activity
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <Button
                                                    label="Update Profile"
                                                    className="w-auto mt-3"
                                                ></Button>
                                            </div>
                                        </div>
                                        <div className="flex flex-column align-items-center flex-or">
                                            <span className="font-normal text-900 mb-2">
                                                Profile Picture
                                            </span>
                                            <img
                                                src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png"
                                                className="h-10rem w-10rem"
                                                alt="avatar-f-2"
                                            />
                                            <Button
                                                icon="pi pi-pencil"
                                                className="p-button-rounded -mt-4"
                                            ></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="surface-section px-6 p-3 lg:px-3 mt-5">
                                <div className="flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                                    <div>
                                        <img
                                            src="/demo/images/blocks/logos/hyper-900.svg"
                                            alt="Image"
                                            height="40"
                                        />
                                        <p className="mt-2 mb-0 line-height-3 font-medium text-base text-700">
                                            &copy; 202X Hyper, Inc. All rights
                                            reserved.
                                        </p>
                                    </div>
                                    <div className="mt-3 sm:mt-0">
                                        <a className="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-twitter text-xl"></i>
                                        </a>
                                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-facebook text-xl"></i>
                                        </a>
                                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-github text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </BlockViewer>

            <BlockViewer header="Group Layout" code={block3} new>
                <nav
                    className="surface-overlay px-4 lg:px-6 shadow-2 flex justify-content-between relative lg:static"
                    style={{ minHeight: "84px" }}
                >
                    <StyleClass
                        nodeRef={btnRef5}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <img
                            src="/demo/images/blocks/logos/bastion-700.svg"
                            alt="Image"
                            height="40"
                            className="mr-0 lg:mr-6 align-self-center"
                        />
                        <a
                            ref={btnRef5}
                            className="p-ripple cursor-pointer block lg:hidden align-self-center text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>

                    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-users mr-2"></i>
                                    <span>Customers</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Inbox
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span className="block lg:hidden font-medium">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none">
                                <a className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
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
                                        <Ripple />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="surface-overlay px-4 lg:px-6 py-4 px-4 lg:px-6 border-y-1 surface-border flex flex-column flex-wrap md:flex-row gap-3 w-full md:justify-content-between md:align-items-center">
                    <ul className="list-none m-0 p-0 flex flex-row justify-content-between lg:justify-content-start lg:mb-0">
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 0 }
                                )}
                                onClick={(e) => setActiveTab3(0)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-chart-line md:hidden",
                                        {
                                            "text-700": activeTab3 === 0,
                                            "text-600": activeTab3 !== 0,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 0,
                                            "text-600": activeTab3 !== 0,
                                        }
                                    )}
                                >
                                    Overview
                                </span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 1 }
                                )}
                                onClick={(e) => setActiveTab3(1)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-user md:hidden",
                                        {
                                            "text-700": activeTab3 === 1,
                                            "text-600": activeTab3 !== 1,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 1,
                                            "text-600": activeTab3 !== 1,
                                        }
                                    )}
                                >
                                    Profile
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 2 }
                                )}
                                onClick={(e) => setActiveTab3(2)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-bolt md:hidden",
                                        {
                                            "text-700": activeTab3 === 2,
                                            "text-600": activeTab3 !== 2,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 2,
                                            "text-600": activeTab3 !== 2,
                                        }
                                    )}
                                >
                                    Activity
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 3 }
                                )}
                                onClick={(e) => setActiveTab3(3)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-users md:hidden",
                                        {
                                            "text-700": activeTab3 === 3,
                                            "text-600": activeTab3 !== 3,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 3,
                                            "text-600": activeTab3 !== 3,
                                        }
                                    )}
                                >
                                    Members & Roles
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 4 }
                                )}
                                onClick={(e) => setActiveTab3(4)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-lock md:hidden",
                                        {
                                            "text-700": activeTab3 === 4,
                                            "text-600": activeTab3 !== 4,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 4,
                                            "text-600": activeTab3 !== 4,
                                        }
                                    )}
                                >
                                    Security
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={classNames(
                                    "flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                    { "surface-200": activeTab3 === 5 }
                                )}
                                onClick={(e) => setActiveTab3(5)}
                            >
                                <i
                                    className={classNames(
                                        "pi pi-dollar md:hidden",
                                        {
                                            "text-700": activeTab3 === 5,
                                            "text-600": activeTab3 !== 5,
                                        }
                                    )}
                                ></i>
                                <span
                                    className={classNames(
                                        "font-medium hidden md:block",
                                        {
                                            "text-900": activeTab3 === 5,
                                            "text-600": activeTab3 !== 5,
                                        }
                                    )}
                                >
                                    Team Plan
                                </span>
                            </a>
                        </li>
                    </ul>
                    <span className="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
                        <i className="pi pi-search"></i>
                        <InputText
                            placeholder="Search"
                            className="w-full md:w-15rem border-round"
                        />
                    </span>
                </nav>
                <section className="surface-overlay px-4 lg:px-6 py-4 px-4 lg:px-6 border-top-1 surface-border">
                    <div className="border-bottom-1 surface-border">
                        <h2 className="mt-0 mb-2 text-900 font-bold text-4xl">
                            Members & Roles
                        </h2>
                        <p className="mt-0 mb-5 text-700 font-normal text-base">
                            You can easily manage your team on this page
                        </p>
                    </div>
                    <section className="flex flex-wrap gap-3 py-6 justify-content-between border-bottom-1 surface-border">
                        <div className="flex-shrink-0 w-15rem">
                            <h3 className="mb-4 mt-0 text-900 font-medium text-xl">
                                Members
                            </h3>
                            <p className="mb-4 mt-0 text-700 font-normal text-base">
                                Manage your member in this project
                            </p>
                            <Button
                                label="Invite a member"
                                className="w-auto"
                            ></Button>
                        </div>

                        <div className="overflow-x-scroll">
                            <DataTable
                                value={members}
                                rowHover
                                scrollable

                                style={{ minWidth: "60rem" }}
                            >
                                <Column
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    header="Name"
                                    body={AvatarBodyTemplate}
                                    style={{ minWidth: "350px" }}
                                ></Column>
                                <Column
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    field="date"
                                    header="Joined Date"
                                    style={{ minWidth: "150px" }}
                                />
                                <Column
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    field="active"
                                    header="Last Active"
                                    style={{ minWidth: "150px" }}
                                />
                                <Column
                                    body={
                                        <MenuPopup
                                            items={items}
                                            menuRef={menuRef}
                                        />
                                    }
                                    style={{ minWidth: "150px" }}
                                />
                            </DataTable>
                        </div>
                    </section>
                    <section className="flex flex-wrap gap-3 py-6 justify-content-between border-bottom-1 surface-border">
                        <div className="flex-shrink-0 w-15rem">
                            <h3 className="mb-4 mt-0 text-900 font-medium text-xl">
                                Roles
                            </h3>
                            <p className="mb-4 mt-0 text-700 font-normal text-base">
                                Edit roles in this project
                            </p>
                            <Button label="Add a role" className="w-auto" />
                        </div>

                        <div className="overflow-x-scroll">
                            <DataTable
                                value={roles}
                                rowHover
                                scrollable
                                style={{ minWidth: "60rem" }}
                            >
                                <Column
                                    style={{ minWidth: "350px" }}
                                    header="Alias Name"
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    body={AliasBodyTemplate}
                                >
                                    {" "}
                                </Column>
                                <Column
                                    style={{ minWidth: "150px" }}
                                    header="Last Edit"
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    field="date"
                                />
                                <Column
                                    style={{ minWidth: "150px" }}
                                    header="Users"
                                    headerClassName="font-semibold text-sm text-color-secondary"
                                    field="users"
                                />
                                <Column
                                    style={{ minWidth: "150px" }}
                                    body={
                                        <MenuPopup
                                            items={items}
                                            menuRef={menuRef}
                                        />
                                    }
                                ></Column>
                            </DataTable>
                        </div>
                    </section>
                </section>
            </BlockViewer>
        </>
    );
};

export default SettingScreen;
