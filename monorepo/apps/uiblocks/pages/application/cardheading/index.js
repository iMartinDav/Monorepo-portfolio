import React, { useRef } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { AvatarGroup } from "primereact/avatargroup";
import { Avatar } from "primereact/avatar";

const CardHeading = () => {
    const menu1 = useRef(null);
    const menu2 = useRef(null);

    const items = [
        {
            label: "Options",
            items: [
                { label: "Add User", icon: "pi pi-fw pi-user-plus" },
                { label: "Remove User", icon: "pi pi-fw pi-user-minus" },
            ],
        },
    ];

    const block1 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="text-3xl font-medium text-900 mb-2">Card Title</div>
    <div className="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block2 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex align-items-center justify-content-between">
        <div className="flex align-items-center">
            <span className="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
            <Menu ref={menu1} popup model={items}></Menu>
        </div>
    </div>
    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block3 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex align-items-center justify-content-between">
        <div className="flex align-items-center">
            <i className="pi pi-map-marker text-500 mr-2 text-xl"></i>
            <span className="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
            <Menu ref={menu2} popup model={items}></Menu>
        </div>
    </div>
    <div className="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style={{ height: ' 150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block4 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <div className="flex align-items-start">
            <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height="40" className="mr-3" />
            <div>
                <div className="text-xl font-medium text-900 mb-2">Card Title</div>
                <div className="font-medium text-500 mb-3 text-sm">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
            </div>
        </div>
        <div className="flex gap-3">
            <Button icon="pi pi-heart" className="p-button-rounded p-button-outlined" />
            <Button icon="pi pi-share-alt" className="p-button-rounded p-button-outlined" />
        </div>
    </div>

    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block5 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex align-items-center justify-content-between">
        <span className="text-xl font-medium text-900">Title</span>
        <Button label="New" icon="pi pi-plus" />
    </div>
    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block6 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <span className="text-xl font-medium text-900">Title</span>
        <div className="flex align-items-center justify-content-between mt-3 md:mt-0">
            <div className="mr-3 flex align-items-center">
                <AvatarGroup className="mr-1">
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" />
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" />
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-1.png" shape="circle" />
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-2.png" shape="circle" />
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" shape="circle" />
                </AvatarGroup>
                <span className="text-600">+2</span>
            </div>
            <Button label="View All" icon="pi pi-search" className="p-button-outlined" />
        </div>
    </div>
    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    const block7 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="mb-3 flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between">
        <div className="mb-3 md:mb-0">
            <div className="text-3xl font-medium text-900 mb-3">Card Title</div>
            <div className="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <Button label="New" icon="pi pi-plus" />
    </div>
    <div style={{ height: '150px' }} className="border-2 border-dashed surface-border"></div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Card Heading</div>
            <BlockViewer
                header="Title with Subtitle"
                code={block1}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
                free
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="text-3xl font-medium text-900 mb-2">
                        Card Title
                    </div>
                    <div className="font-medium text-500 mb-3">
                        Vivamus id nisl interdum, blandit augue sit amet,
                        eleifend mi.
                    </div>
                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Dropdown"
                code={block2}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex align-items-center justify-content-between">
                        <div className="flex align-items-center">
                            <span className="text-xl font-medium text-900">
                                Card Title
                            </span>
                        </div>
                        <div>
                            <Button
                                icon="pi pi-ellipsis-v"
                                className="p-button-text p-button-plain p-button-rounded"
                                onClick={(event) => menu1.current.toggle(event)}
                            />
                            <Menu ref={menu1} popup model={items}></Menu>
                        </div>
                    </div>
                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dropdown, Icon and Subtitle"
                code={block3}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex align-items-center justify-content-between">
                        <div className="flex align-items-center">
                            <i className="pi pi-map-marker text-500 mr-2 text-xl"></i>
                            <span className="text-xl font-medium text-900">
                                Card Title
                            </span>
                        </div>
                        <div>
                            <Button
                                icon="pi pi-ellipsis-v"
                                className="p-button-text p-button-plain p-button-rounded"
                                onClick={(event) => menu2.current.toggle(event)}
                            />
                            <Menu ref={menu2} popup model={items}></Menu>
                        </div>
                    </div>
                    <div className="font-medium text-500 mb-3">
                        Vivamus id nisl interdum, blandit augue sit amet,
                        eleifend mi.
                    </div>
                    <div
                        style={{ height: " 150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Image and Buttons"
                code={block4}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div className="flex align-items-start">
                            <img
                                src="/demo/images/blocks/logos/hyper.svg"
                                alt="hyper"
                                height="40"
                                className="mr-3"
                            />
                            <div>
                                <div className="text-xl font-medium text-900 mb-2">
                                    Card Title
                                </div>
                                <div className="font-medium text-500 mb-3 text-sm">
                                    Vivamus id nisl interdum, blandit augue sit
                                    amet, eleifend mi.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                icon="pi pi-heart"
                                className="p-button-rounded p-button-outlined"
                            />
                            <Button
                                icon="pi pi-share-alt"
                                className="p-button-rounded p-button-outlined"
                            />
                        </div>
                    </div>

                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Action"
                code={block5}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex align-items-center justify-content-between">
                        <span className="text-xl font-medium text-900">
                            Title
                        </span>
                        <Button label="New" icon="pi pi-plus" />
                    </div>
                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Avatars"
                code={block6}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <span className="text-xl font-medium text-900">
                            Title
                        </span>
                        <div className="flex align-items-center justify-content-between mt-3 md:mt-0">
                            <div className="mr-3 flex align-items-center">
                                <AvatarGroup className="mr-1">
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
                                <span className="text-600">+2</span>
                            </div>
                            <Button
                                label="View All"
                                icon="pi pi-search"
                                className="p-button-outlined"
                            />
                        </div>
                    </div>
                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Subtitle and Action"
                code={block7}
                containerclassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="mb-3 flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between">
                        <div className="mb-3 md:mb-0">
                            <div className="text-3xl font-medium text-900 mb-3">
                                Card Title
                            </div>
                            <div className="font-medium text-500 mb-3">
                                Vivamus id nisl interdum, blandit augue sit
                                amet, eleifend mi.
                            </div>
                        </div>
                        <Button label="New" icon="pi pi-plus" />
                    </div>
                    <div
                        style={{ height: "150px" }}
                        className="border-2 border-dashed surface-border"
                    ></div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CardHeading;
