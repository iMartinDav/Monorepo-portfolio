import React, { useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { Badge } from "primereact/badge";
import { InputText } from "primereact/inputtext";
import { TabMenu } from "primereact/tabmenu";

const SectionHeading = () => {
    const [activeTabAction, setActiveTabAction] = useState("profile");
    const options = ["Do Not Disturb", "Notify"];
    const [value, setValue] = useState(options[0]);

    const items = [
        { label: "Overview", icon: "pi pi-home" },
        { label: "Members", icon: "pi pi-users" },
        { label: "Sales", icon: "pi pi-shopping-cart" },
        { label: "Profile", icon: "pi pi-user" },
        { label: "Settings", icon: "pi pi-cog" },
    ];

    const block1 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div className="flex align-items-center">
            <i className="pi pi-inbox text-2xl mr-3 text-500"></i>
            <span className="text-3xl font-medium text-900">Messages</span>
        </div>
        <div className="mt-3 md:mt-0">
            <Button label="Settings" className="p-button-outlined mr-3" icon="pi pi-cog" />
            <Button label="Compose" icon="pi pi-plus" />
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div className="mb-3 lg:mb-0">
            <div className="text-3xl font-medium text-900 mb-3">Messages</div>
            <div className="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search"></i>
            <InputText placeholder="Search" className="w-full md:w-auto" />
        </span>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="text-3xl font-medium text-900 mb-4">Application</div>
    <TabMenu model={items} activeitem={items[0]} />
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex lg:align-items-center flex-column lg:flex-row">
        <div className="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
        <TabMenu model={items} activeitem={items[0]} className="flex-grow-1" />
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border">
        <span className="block text-3xl font-medium text-900 mb-4">Messages</span>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border">
        <div className="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span className="text-base font-normal ml-3 text-600">79 Unread</span></div>
    </div>
</div>
    `;

    const block7 = `
<section className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-wrap gap-3 justify-content-between align-items-center">
        <div className="flex flex-column gap-2">
            <h1 className="m-0 text-900 text-3xl font-medium line-height-3">Settings</h1>
            <p className="mt-0 mb-0 text-600 text-lg">Set your preferences</p>
        </div>
        <div className="flex flex-wrap align-items-center gap-3">
            <Button label="Upgrade to Pro" className="p-button-text"></Button>
            <Button label="Save Changes"></Button>
            <Button icon="pi pi-ellipsis-v" className="p-button-outlined"></Button>
        </div>
    </div>
    <div className="mt-5">
        <ul className="flex align-items-center overflow-x-auto gap-3 px-2 py-3 list-none border-bottom-1 surface-border">
            <li>
                <Button icon="pi pi-user" onClick={() => setActiveTabAction('profile')} label="Profile" className={activeTabAction !== 'profile' ? 'p-button-text text-700' : ''} />
            </li>
            <li>
                <Button icon="pi pi-globe" onClick={() => setActiveTabAction('website')} label="Website" className={activeTabAction !== 'website' ? 'p-button-text text-700' : ''} />
            </li>
            <li>
                <Button icon="pi pi-shield" onClick={() => setActiveTabAction('privacy')} label="Privacy" className={activeTabAction !== 'privacy' ? 'p-button-text text-700' : ''} />
            </li>
            <li>
                <Button icon="pi pi-wallet" onClick={() => setActiveTabAction('payment')} label="Payments" className={activeTabAction !== 'payment' ? 'p-button-text text-700' : ''} />
            </li>
            <li>
                <Button icon="pi pi-cog" onClick={() => setActiveTabAction('applications')} label="Applications" className={activeTabAction !== 'applications' ? 'p-button-text text-700' : ''} />
            </li>
        </ul>
    </div>
</section>
    `;

    const block8 = `
<section className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex flex-column lg:flex-row gap-3 justify-content-between lg:align-items-center border-primary py-5" style={{ borderTop: '7px solid' }}>
        <div className="flex flex-column gap-2">
            <div className="flex align-items-center gap-2">
                <h1 className="m-0 font-semibold text-900 text-xl line-height-3">Notifications</h1>
                <Badge value={11} severity="warning"></Badge>
            </div>
            <p className="mb-0 mt-0 text-base text-600">Manage your notifications and permissions.</p>
        </div>
        <div className="flex align-items-center gap-2">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Section Heading</div>
            <BlockViewer header="Icon And Actions" code={block1}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                        <div className="flex align-items-center">
                            <i className="pi pi-inbox text-2xl mr-3 text-500"></i>
                            <span className="text-3xl font-medium text-900">
                                Messages
                            </span>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <Button
                                label="Settings"
                                className="p-button-outlined mr-3"
                                icon="pi pi-cog"
                            />
                            <Button label="Compose" icon="pi pi-plus" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Subtitle and Search" code={block2}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                        <div className="mb-3 lg:mb-0">
                            <div className="text-3xl font-medium text-900 mb-3">
                                Messages
                            </div>
                            <div className="text-500 mr-0 md:mr-3">
                                Vivamus id nisl interdum, blandit augue sit
                                amet, eleifend mi.
                            </div>
                        </div>
                        <span className="p-input-icon-left w-full md:w-auto">
                            <i className="pi pi-search"></i>
                            <InputText
                                placeholder="Search"
                                className="w-full md:w-auto"
                            />
                        </span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Tabs" code={block3}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="text-3xl font-medium text-900 mb-4">
                        Application
                    </div>
                    <TabMenu model={items} activeitem={items[0]} />
                </div>
            </BlockViewer>

            <BlockViewer header="Inline Tabs" code={block4}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex lg:align-items-center flex-column lg:flex-row">
                        <div className="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">
                            Application
                        </div>
                        <TabMenu
                            model={items}
                            activeitem={items[0]}
                            className="flex-grow-1"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple" code={block5}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="border-bottom-1 surface-border">
                        <span className="block text-3xl font-medium text-900 mb-4">
                            Messages
                        </span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Label" code={block6}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="border-bottom-1 surface-border">
                        <div className="text-3xl font-medium text-900 mb-4 flex align-items-center">
                            Messages{" "}
                            <span className="text-base font-normal ml-3 text-600">
                                79 Unread
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Pills and Actions" code={block7} new>
                <section className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-content-between align-items-center">
                        <div className="flex flex-column gap-2">
                            <h1 className="m-0 text-900 text-3xl font-medium line-height-3">
                                Settings
                            </h1>
                            <p className="mt-0 mb-0 text-600 text-lg">
                                Set your preferences
                            </p>
                        </div>
                        <div className="flex flex-wrap align-items-center gap-3">
                            <Button
                                label="Upgrade to Pro"
                                className="p-button-text"
                            ></Button>
                            <Button label="Save Changes"></Button>
                            <Button
                                icon="pi pi-ellipsis-v"
                                className="p-button-outlined"
                            ></Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="flex align-items-center overflow-x-auto gap-3 px-2 py-3 list-none border-bottom-1 surface-border">
                            <li>
                                <Button
                                    icon="pi pi-user"
                                    onClick={() =>
                                        setActiveTabAction("profile")
                                    }
                                    label="Profile"
                                    className={
                                        activeTabAction !== "profile"
                                            ? "p-button-text text-700"
                                            : ""
                                    }
                                />
                            </li>
                            <li>
                                <Button
                                    icon="pi pi-globe"
                                    onClick={() =>
                                        setActiveTabAction("website")
                                    }
                                    label="Website"
                                    className={
                                        activeTabAction !== "website"
                                            ? "p-button-text text-700"
                                            : ""
                                    }
                                />
                            </li>
                            <li>
                                <Button
                                    icon="pi pi-shield"
                                    onClick={() =>
                                        setActiveTabAction("privacy")
                                    }
                                    label="Privacy"
                                    className={
                                        activeTabAction !== "privacy"
                                            ? "p-button-text text-700"
                                            : ""
                                    }
                                />
                            </li>
                            <li>
                                <Button
                                    icon="pi pi-wallet"
                                    onClick={() =>
                                        setActiveTabAction("payment")
                                    }
                                    label="Payments"
                                    className={
                                        activeTabAction !== "payment"
                                            ? "p-button-text text-700"
                                            : ""
                                    }
                                />
                            </li>
                            <li>
                                <Button
                                    icon="pi pi-cog"
                                    onClick={() =>
                                        setActiveTabAction("applications")
                                    }
                                    label="Applications"
                                    className={
                                        activeTabAction !== "applications"
                                            ? "p-button-text text-700"
                                            : ""
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                </section>
            </BlockViewer>

            <BlockViewer header="Border, Badge and Actions" code={block8} new>
                <section className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div
                        className="flex flex-column lg:flex-row gap-3 justify-content-between lg:align-items-center border-primary py-5"
                        style={{ borderTop: "7px solid" }}
                    >
                        <div className="flex flex-column gap-2">
                            <div className="flex align-items-center gap-2">
                                <h1 className="m-0 font-semibold text-900 text-xl line-height-3">
                                    Notifications
                                </h1>
                                <Badge value={11} severity="warning"></Badge>
                            </div>
                            <p className="mb-0 mt-0 text-base text-600">
                                Manage your notifications and permissions.
                            </p>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <SelectButton
                                value={value}
                                onChange={(e) => setValue(e.value)}
                                options={options}
                            />
                        </div>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default SectionHeading;
