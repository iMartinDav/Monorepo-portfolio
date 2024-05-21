import React, { useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { Divider } from "primereact/divider";
import { Ripple } from "primereact/ripple";
const FormLayout = () => {
    const [value, setValue] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [country1, setCountry1] = useState(null);
    const [country2, setCountry2] = useState(null);

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

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-2">
            <div className="text-900 font-medium text-xl mb-3">Profile</div>
            <p className="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
        </div>
        <div className="col-12 lg:col-10">
            <div className="grid formgrid p-fluid">
                <div className="field mb-4 col-12">
                    <label htmlFor="nickname1" className="font-medium text-900">Nickname</label>
                    <InputText id="nickname1" type="text" />
                </div>
                <div className="field mb-4 col-12">
                    <label htmlFor="avatar1" className="font-medium text-900">Avatar</label>
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mr-4" />
                        <FileUpload id="avatar1" mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize={1000000} chooseOptions={{ className: 'p-button-plain p-button-outlined' }} chooseLabel="Upload Image" />
                    </div>
                </div>
                <div className="field mb-4 col-12">
                    <label htmlFor="bio1" className="font-medium text-900">Bio</label>
                    <InputTextarea id="bio1" type="text" rows={5} autoResize />
                </div>
                <div className="field mb-4 col-12 md:col-6">
                    <label htmlFor="email1" className="font-medium text-900">Email</label>
                    <InputText id="email1" type="text" />
                </div>
                <div className="field mb-4 col-12 md:col-6">
                    <label htmlFor="country1" className="font-medium text-900">Country</label>
                    <Dropdown inputId="country1" options={countries} value={country1} onChange={(e) => setCountry1(e.value) } optionLabel="name" filter filterBy="name" showClear placeholder="Select a Country" itemTemplate={(country) => <div className="flex align-items-center">
                        <img src="/demo/images/blocks/flag/flag_placeholder.png" className={\`mr-2 flag flag-$\{country.code.toLowerCase()}\`} style={{ width: '18px' }} alt={country.name} />
                        <div>{country.name}</div>
                    </div>} />
                </div>
                <div className="field mb-4 col-12 md:col-6">
                    <label htmlFor="city1" className="font-medium text-900">City</label>
                    <InputText id="city1" type="text" />
                </div>
                <div className="field mb-4 col-12 md:col-6">
                    <label htmlFor="state1" className="font-medium text-900">State</label>
                    <InputText id="state1" type="text" />
                </div>
                <div className="field mb-4 col-12">
                    <label htmlFor="website1" className="font-medium text-900">Website</label>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">www</span>
                        <InputText id="website1" type="text" />
                    </div>
                </div>
                <div className="field mb-4 col-12">
                    <label htmlFor="privacy1" className="font-medium text-900">Privacy</label>
                    <div className="flex align-items-center">
                        <Checkbox inputId="privacy1" checked={check1} onChange={(e) => setCheck1(e.checked)} />
                        <span className="ml-2 text-900">Share my data with contacts</span>
                    </div>
                </div>
                <div className="col-12">
                    <Button label="Save Changes" className="w-auto mt-3" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-900 text-xl mb-3">Profile</div>
    <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
        Egestas integer eget aliquet nibh praesent tristique magna.</p>
    <div className="surface-card p-4 shadow-2 border-round">
        <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-12">
                <label htmlFor="nickname2" className="font-medium text-900">Nickname</label>
                <InputText id="nickname2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="bio2" className="font-medium text-900">Bio</label>
                <InputTextarea id="bio2" type="text" rows={5} autoResize />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="avatar2" className="font-medium text-900">Avatar</label>
                <div className="flex align-items-center">
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mr-4" />
                    <FileUpload id="avatar2" mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize={1000000} chooseOptions={{ className: 'p-button-plain p-button-outlined' }} chooseLabel="Upload Image" />
                </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="email2" className="font-medium text-900">Email</label>
                <InputText id="email2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="country2" className="font-medium text-900">Country</label>
                <Dropdown inputId="country2" options={countries} value={country2} onChange={(e) => setCountry2(e.value)} optionLabel="name" filter filterBy="name" showClear placeholder="Select a Country" itemTemplate={(country) => <div className="flex align-items-center">
                    <img src="/demo/images/blocks/flag/flag_placeholder.png" className={\`mr-2 flag flag-$\{country.code.toLowerCase()}\`} style={{ width: '18px' }} alt={country.name} />
                    <div>{country.name}</div>
                </div>} />

            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="city2" className="font-medium text-900">City</label>
                <InputText id="city2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="state2" className="font-medium text-900">State</label>
                <InputText id="state2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
                <label htmlFor="website2" className="font-medium text-900">Website</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">www</span>
                    <InputText id="website2" type="text" />
                </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
                <label htmlFor="privacy2" className="font-medium text-900">Privacy</label>
                <div className="flex align-items-center">
                    <InputSwitch inputId="privacy2" checked={value} onChange={(e) => setValue(e.value)} />
                    <span className="ml-2">Share my data with contacts</span>
                </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="col-12">
                <Button label="Save Changes" className="w-auto mt-3" />
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-900 text-xl mb-3">Create Invoice</div>
    <div className="surface-card p-4 shadow-2 border-round p-fluid">
        <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="company_name" className="font-medium text-900">Company Name</label>
                <InputText id="company_name" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="invoice_id" className="font-medium text-900">Invoice Id</label>
                <InputText id="invoice_id" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="customer_name" className="font-medium text-900">Customer Name</label>
                <InputText id="customer_name" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="customer_email" className="font-medium text-900">Customer Email</label>
                <InputText id="customer_email" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="invoice_date" className="font-medium text-900">Invoice Date</label>
                <Calendar id="invoice_date" showIcon />
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="due_date" className="font-medium text-900">Due Date</label>
                <Calendar id="due_date" showIcon />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
                <label htmlFor="item" className="font-medium text-900">Item</label>
                <InputText id="item1" type="text" />
            </div>
            <div className="field mb-4 col-6 md:col-3">
                <label htmlFor="item" className="font-medium text-900">Quantity</label>
                <InputText id="item2" type="text" />
            </div>
            <div className="field mb-4 col-6 md:col-3">
                <label htmlFor="item" className="font-medium text-900">Price</label>
                <div className="flex align-content-center">
                    <InputNumber mode="currency" currency="USD" id="item3" type="text" className="flex-1" />
                    <Button icon="pi pi-trash" className="p-button-danger p-button-text ml-2" />
                </div>
            </div>
            <div className="field mb-4 col-12 md:col-6">
                <Button icon="pi pi-plus" label="Add Item" className="p-button-secondary p-button-outlined w-auto" />
            </div>
            <div className="field mb-4 col-12 md:col-6 text-right">
                <span className="text-xl text-600 font-medium text-900 mr-2">Total</span>
                <span className="text-xl text-900 font-medium text-900">$59</span>
            </div>
            <div className="field mb-4 col-12 flex align-items-center">
                <Checkbox checked={check2} onChange={(e) => setCheck2(e.checked)} />
                <span className="ml-2 text-900">Taxable (VAT 18%)</span>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div className="field mb-4 col-12">
                <label htmlFor="notes" className="font-medium text-900">Notes</label>
                <InputTextarea id="notes" autoResize rows={5} />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
        </div>
        <Button label="Create Invoice" icon="pi pi-file" className="w-auto" />
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="p-fluid flex flex-column lg:flex-row">
        <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                    <i className="pi pi-user md:mr-2"></i>
                    <span className="font-medium hidden md:block">Profile</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                    <i className="pi pi-cog md:mr-2"></i>
                    <span className="font-medium hidden md:block">Account</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                    <i className="pi pi-palette md:mr-2"></i>
                    <span className="font-medium hidden md:block">Appearance</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                    <i className="pi pi-sun md:mr-2"></i>
                    <span className="font-medium hidden md:block">Accessibility</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                    <i className="pi pi-bell md:mr-2"></i>
                    <span className="font-medium hidden md:block">Notifications</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="surface-card p-5 shadow-2 border-round flex-auto">
            <div className="text-900 font-semibold text-lg mt-3">Profile</div>
            <Divider></Divider>
            <div className="flex gap-5 flex-column-reverse md:flex-row">
                <div className="flex-auto p-fluid">
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-900 mb-2">
                            Name
                        </label>
                        <InputText id="email" type="text" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bio" className="block font-medium text-900 mb-2">
                            Bio
                        </label>
                        <InputTextarea id="bio" type="text" pInputTextarea rows="5" autoResize></InputTextarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block font-medium text-900 mb-2">
                            URL
                        </label>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">https://</span>
                            <InputText id="website" type="text" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block font-medium text-900 mb-2">
                            Company
                        </label>
                        <InputText id="state" type="text" />
                    </div>
                    <div>
                        <Button label="Update Profile" className="p-ripple w-auto"></Button>
                    </div>
                </div>
                <div className="flex flex-column align-items-center flex-or">
                    <span className="font-medium text-900 mb-2">Profile Picture</span>
                    <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" className="h-10rem w-10rem" />
                    <Button type="button" icon="pi pi-pencil" className="p-button-rounded -mt-4"></Button>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Form Layout</div>
            <BlockViewer header="Two Columns and Stacked" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-2">
                            <div className="text-900 font-medium text-xl mb-3">
                                Profile
                            </div>
                            <p className="m-0 p-0 text-600 line-height-3 mr-3">
                                Odio euismod lacinia at quis risus sed vulputate
                                odio.
                            </p>
                        </div>
                        <div className="col-12 lg:col-10">
                            <div className="grid formgrid p-fluid">
                                <div className="field mb-4 col-12">
                                    <label
                                        htmlFor="nickname1"
                                        className="font-medium text-900"
                                    >
                                        Nickname
                                    </label>
                                    <InputText id="nickname1" type="text" />
                                </div>
                                <div className="field mb-4 col-12">
                                    <label
                                        htmlFor="avatar1"
                                        className="font-medium text-900"
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
                                            id="avatar1"
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
                                <div className="field mb-4 col-12">
                                    <label
                                        htmlFor="bio1"
                                        className="font-medium text-900"
                                    >
                                        Bio
                                    </label>
                                    <InputTextarea
                                        id="bio1"
                                        type="text"
                                        rows={5}
                                        autoResize
                                    />
                                </div>
                                <div className="field mb-4 col-12 md:col-6">
                                    <label
                                        htmlFor="email1"
                                        className="font-medium text-900"
                                    >
                                        Email
                                    </label>
                                    <InputText id="email1" type="text" />
                                </div>
                                <div className="field mb-4 col-12 md:col-6">
                                    <label
                                        htmlFor="country1"
                                        className="font-medium text-900"
                                    >
                                        Country
                                    </label>
                                    <Dropdown
                                        inputId="country1"
                                        options={countries}
                                        value={country1}
                                        onChange={(e) => setCountry1(e.value)}
                                        optionLabel="name"
                                        filter
                                        filterBy="name"
                                        showClear
                                        placeholder="Select a Country"
                                        itemTemplate={(country) => (
                                            <div className="flex align-items-center">
                                                <img
                                                    src="/demo/images/blocks/flag/flag_placeholder.png"
                                                    className={`mr-2 flag flag-${country.code.toLowerCase()}`}
                                                    style={{ width: "18px" }}
                                                    alt={country.name}
                                                />
                                                <div>{country.name}</div>
                                            </div>
                                        )}
                                    />
                                </div>
                                <div className="field mb-4 col-12 md:col-6">
                                    <label
                                        htmlFor="city1"
                                        className="font-medium text-900"
                                    >
                                        City
                                    </label>
                                    <InputText id="city1" type="text" />
                                </div>
                                <div className="field mb-4 col-12 md:col-6">
                                    <label
                                        htmlFor="state1"
                                        className="font-medium text-900"
                                    >
                                        State
                                    </label>
                                    <InputText id="state1" type="text" />
                                </div>
                                <div className="field mb-4 col-12">
                                    <label
                                        htmlFor="website1"
                                        className="font-medium text-900"
                                    >
                                        Website
                                    </label>
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            www
                                        </span>
                                        <InputText id="website1" type="text" />
                                    </div>
                                </div>
                                <div className="field mb-4 col-12">
                                    <label
                                        htmlFor="privacy1"
                                        className="font-medium text-900"
                                    >
                                        Privacy
                                    </label>
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            inputId="privacy1"
                                            checked={check1}
                                            onChange={(e) =>
                                                setCheck1(e.checked)
                                            }
                                        />
                                        <span className="ml-2 text-900">
                                            Share my data with contacts
                                        </span>
                                    </div>
                                </div>
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
            </BlockViewer>

            <BlockViewer header="Full-Width Card" code={block2}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-900 text-xl mb-3">
                        Profile
                    </div>
                    <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
                        Odio euismod lacinia at quis risus sed vulputate odio.
                        Non nisi est sit amet. Egestas integer eget aliquet nibh
                        praesent tristique magna.
                    </p>
                    <div className="surface-card p-4 shadow-2 border-round">
                        <div className="grid formgrid p-fluid">
                            <div className="field mb-4 col-12">
                                <label
                                    htmlFor="nickname2"
                                    className="font-medium text-900"
                                >
                                    Nickname
                                </label>
                                <InputText id="nickname2" type="text" />
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="bio2"
                                    className="font-medium text-900"
                                >
                                    Bio
                                </label>
                                <InputTextarea
                                    id="bio2"
                                    type="text"
                                    rows={5}
                                    autoResize
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="avatar2"
                                    className="font-medium text-900"
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
                                        id="avatar2"
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
                            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="email2"
                                    className="font-medium text-900"
                                >
                                    Email
                                </label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="country2"
                                    className="font-medium text-900"
                                >
                                    Country
                                </label>
                                <Dropdown
                                    inputId="country2"
                                    options={countries}
                                    value={country2}
                                    onChange={(e) => setCountry2(e.value)}
                                    optionLabel="name"
                                    filter
                                    filterBy="name"
                                    showClear
                                    placeholder="Select a Country"
                                    itemTemplate={(country) => (
                                        <div className="flex align-items-center">
                                            <img
                                                src="/demo/images/blocks/flag/flag_placeholder.png"
                                                className={`mr-2 flag flag-${country.code.toLowerCase()}`}
                                                style={{ width: "18px" }}
                                                alt={country.name}
                                            />
                                            <div>{country.name}</div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="city2"
                                    className="font-medium text-900"
                                >
                                    City
                                </label>
                                <InputText id="city2" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="state2"
                                    className="font-medium text-900"
                                >
                                    State
                                </label>
                                <InputText id="state2" type="text" />
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                            <div className="field mb-4 col-12">
                                <label
                                    htmlFor="website2"
                                    className="font-medium text-900"
                                >
                                    Website
                                </label>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        www
                                    </span>
                                    <InputText id="website2" type="text" />
                                </div>
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                            <div className="field mb-4 col-12">
                                <label
                                    htmlFor="privacy2"
                                    className="font-medium text-900"
                                >
                                    Privacy
                                </label>
                                <div className="flex align-items-center">
                                    <InputSwitch
                                        inputId="privacy2"
                                        checked={value}
                                        onChange={(e) => setValue(e.value)}
                                    />
                                    <span className="ml-2">
                                        Share my data with contacts
                                    </span>
                                </div>
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                            <div className="col-12">
                                <Button
                                    label="Save Changes"
                                    className="w-auto mt-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Invoice Sample" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-900 text-xl mb-3">
                        Create Invoice
                    </div>
                    <div className="surface-card p-4 shadow-2 border-round p-fluid">
                        <div className="grid formgrid p-fluid">
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="company_name"
                                    className="font-medium text-900"
                                >
                                    Company Name
                                </label>
                                <InputText id="company_name" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="invoice_id"
                                    className="font-medium text-900"
                                >
                                    Invoice Id
                                </label>
                                <InputText id="invoice_id" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="customer_name"
                                    className="font-medium text-900"
                                >
                                    Customer Name
                                </label>
                                <InputText id="customer_name" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="customer_email"
                                    className="font-medium text-900"
                                >
                                    Customer Email
                                </label>
                                <InputText id="customer_email" type="text" />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="invoice_date"
                                    className="font-medium text-900"
                                >
                                    Invoice Date
                                </label>
                                <Calendar id="invoice_date" showIcon />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="due_date"
                                    className="font-medium text-900"
                                >
                                    Due Date
                                </label>
                                <Calendar id="due_date" showIcon />
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="item"
                                    className="font-medium text-900"
                                >
                                    Item
                                </label>
                                <InputText id="item1" type="text" />
                            </div>
                            <div className="field mb-4 col-6 md:col-3">
                                <label
                                    htmlFor="item"
                                    className="font-medium text-900"
                                >
                                    Quantity
                                </label>
                                <InputText id="item2" type="text" />
                            </div>
                            <div className="field mb-4 col-6 md:col-3">
                                <label
                                    htmlFor="item"
                                    className="font-medium text-900"
                                >
                                    Price
                                </label>
                                <div className="flex align-content-center">
                                    <InputNumber
                                        mode="currency"
                                        currency="USD"
                                        id="item3"
                                        type="text"
                                        className="flex-1"
                                    />
                                    <Button
                                        icon="pi pi-trash"
                                        className="p-button-danger p-button-text ml-2"
                                    />
                                </div>
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <Button
                                    icon="pi pi-plus"
                                    label="Add Item"
                                    className="p-button-secondary p-button-outlined w-auto"
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6 text-right">
                                <span className="text-xl text-600 font-medium text-900 mr-2">
                                    Total
                                </span>
                                <span className="text-xl text-900 font-medium text-900">
                                    $59
                                </span>
                            </div>
                            <div className="field mb-4 col-12 flex align-items-center">
                                <Checkbox
                                    checked={check2}
                                    onChange={(e) => setCheck2(e.checked)}
                                />
                                <span className="ml-2 text-900">
                                    Taxable (VAT 18%)
                                </span>
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                            <div className="field mb-4 col-12">
                                <label
                                    htmlFor="notes"
                                    className="font-medium text-900"
                                >
                                    Notes
                                </label>
                                <InputTextarea id="notes" autoResize rows={5} />
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                        </div>
                        <Button
                            label="Create Invoice"
                            icon="pi pi-file"
                            className="w-auto"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card with Side Navigation" code={block4}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="p-fluid flex flex-column lg:flex-row">
                        <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                                    <i className="pi pi-user md:mr-2"></i>
                                    <span className="font-medium hidden md:block">
                                        Profile
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                                    <i className="pi pi-cog md:mr-2"></i>
                                    <span className="font-medium hidden md:block">
                                        Account
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                                    <i className="pi pi-palette md:mr-2"></i>
                                    <span className="font-medium hidden md:block">
                                        Appearance
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                                    <i className="pi pi-sun md:mr-2"></i>
                                    <span className="font-medium hidden md:block">
                                        Accessibility
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors">
                                    <i className="pi pi-bell md:mr-2"></i>
                                    <span className="font-medium hidden md:block">
                                        Notifications
                                    </span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="surface-card p-5 shadow-2 border-round flex-auto">
                            <div className="text-900 font-semibold text-lg mt-3">
                                Profile
                            </div>
                            <Divider></Divider>
                            <div className="flex gap-5 flex-column-reverse md:flex-row">
                                <div className="flex-auto p-fluid">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block font-medium text-900 mb-2"
                                        >
                                            Name
                                        </label>
                                        <InputText id="email" type="text" />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="bio"
                                            className="block font-medium text-900 mb-2"
                                        >
                                            Bio
                                        </label>
                                        <InputTextarea
                                            id="bio"
                                            type="text"
                                            rows="5"
                                            autoResize
                                        ></InputTextarea>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="website"
                                            className="block font-medium text-900 mb-2"
                                        >
                                            URL
                                        </label>
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                https://
                                            </span>
                                            <InputText
                                                id="website"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="state"
                                            className="block font-medium text-900 mb-2"
                                        >
                                            Company
                                        </label>
                                        <InputText id="state" type="text" />
                                    </div>
                                    <div>
                                        <Button
                                            label="Update Profile"
                                            className="p-ripple w-auto"
                                        ></Button>
                                    </div>
                                </div>
                                <div className="flex flex-column align-items-center flex-or">
                                    <span className="font-medium text-900 mb-2">
                                        Profile Picture
                                    </span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png"
                                        alt="avatar-f-2"
                                        className="h-10rem w-10rem"
                                    />
                                    <Button
                                        type="button"
                                        icon="pi pi-pencil"
                                        className="p-button-rounded -mt-4"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default FormLayout;
