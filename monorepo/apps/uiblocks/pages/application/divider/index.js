import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

const Divider = () => {

    const block1 = `
<div className="flex w-full relative align-items-center justify-content-start my-3 px-4">
    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
    <div className="px-2 z-1 surface-0 flex align-items-center">
        <i className="pi pi-search text-900 mr-2"></i>
        <span className="text-900 font-medium">Title Placeholder</span>
    </div>
</div>
    `;

    const block2 = `
<div className="flex w-full relative align-items-center justify-content-center my-3 px-4">
    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
    <div className="px-2 z-1 surface-0 flex align-items-center">
        <i className="pi pi-search text-900 mr-2"></i>
        <span className="text-900 font-medium">Title Placeholder</span>
    </div>
</div>
    `;

    const block3 = `
<div className="flex w-full relative align-items-center justify-content-end my-3 px-4">
    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
    <div className="px-2 z-1 surface-0 flex align-items-center">
        <i className="pi pi-search text-900 mr-2"></i>
        <span className="text-900 font-medium">Title Placeholder</span>
    </div>
</div>
    `;

    const block4 = `
<div className="flex w-full relative align-items-center justify-content-between my-3 px-4">
    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
    <div className="px-2 z-1 surface-0 flex align-items-center">
        <i className="pi pi-list text-900 mr-2"></i>
        <span className="text-900 font-medium">Results</span>
    </div>
    <Button label="Search" icon="pi pi-search" className="p-button-rounded" />
</div>
    `;

    const block5 = `
<div className="flex">
    <div className="w-5 py-8 text-center flex align-items-center justify-content-center">
        <Button label="Login" icon="pi pi-user" className="p-button-rounded p-button-outlined" />
    </div>
    <div className="w-2">
        <div className="flex relative align-items-center justify-content-center mx-3 py-3 min-h-full">
            <div className="border-left-1 surface-border top-0 left-50 absolute h-full"></div>
            <div className="py-2 z-1 surface-0">
                <span className="text-900 font-medium">OR</span>
            </div>
        </div>
    </div>
    <div className="w-5 py-8 flex align-items-center justify-content-center">
        <Button label="Sign Up" icon="pi pi-user-add" className="p-button-rounded p-button-success" />
    </div>
</div>
    `;

    const block6 = `
<div className="flex my-3 px-4 justify-content-center relative">
    <div className="border-top-1 surface-border absolute top-50 w-full"></div>
    <span className="p-buttonset z-1">
        <button className="p-ripple appearance-none border-1 border-round-left surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i className="pi pi-star text-600"></i>
            <Ripple />
        </button>
        <button className="p-ripple appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i className="pi pi-lock text-600"></i>
            <Ripple />
        </button>
        <button className="p-ripple appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i className="pi pi-pencil text-600"></i>
            <Ripple />
        </button>
        <button className="p-ripple appearance-none border-1 border-left-none border-round-right surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i className="pi pi-trash text-600"></i>
            <Ripple />
        </button>
    </span>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Dividers</div>
            <BlockViewer header="Left Aligned" code={block1} containerClassName="surface-0 px-4 py-5 md:px-6 lg:px-8">
                <div className="flex w-full relative align-items-center justify-content-start my-3 px-4">
                    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
                    <div className="px-2 z-1 surface-0 flex align-items-center">
                        <i className="pi pi-search text-900 mr-2"></i>
                        <span className="text-900 font-medium">Title Placeholder</span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered" code={block2} containerClassName="surface-0 px-4 py-5 md:px-6 lg:px-8">
                <div className="flex w-full relative align-items-center justify-content-center my-3 px-4">
                    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
                    <div className="px-2 z-1 surface-0 flex align-items-center">
                        <i className="pi pi-search text-900 mr-2"></i>
                        <span className="text-900 font-medium">Title Placeholder</span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Right Aligned" code={block3} containerClassName="surface-0 px-4 py-5 md:px-6 lg:px-8">
                <div className="flex w-full relative align-items-center justify-content-end my-3 px-4">
                    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
                    <div className="px-2 z-1 surface-0 flex align-items-center">
                        <i className="pi pi-search text-900 mr-2"></i>
                        <span className="text-900 font-medium">Title Placeholder</span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Button" code={block4} containerClassName="surface-0 px-4 py-5 md:px-6 lg:px-8">
                <div className="flex w-full relative align-items-center justify-content-between my-3 px-4">
                    <div className="border-top-1 surface-border top-50 left-0 absolute w-full"></div>
                    <div className="px-2 z-1 surface-0 flex align-items-center">
                        <i className="pi pi-list text-900 mr-2"></i>
                        <span className="text-900 font-medium">Results</span>
                    </div>
                    <Button label="Search" icon="pi pi-search" className="p-button-rounded" />
                </div>
            </BlockViewer>

            <BlockViewer header="Vertical Button" code={block5} containerClassName="surface-0 px-4 py-5 md:px-6 lg:px-8">
                <div className="flex">
                    <div className="w-5 py-8 text-center flex align-items-center justify-content-center">
                        <Button label="Login" icon="pi pi-user" className="p-button-rounded p-button-outlined" />
                    </div>
                    <div className="w-2">
                        <div className="flex relative align-items-center justify-content-center mx-3 py-3 min-h-full">
                            <div className="border-left-1 surface-border top-0 left-50 absolute h-full"></div>
                            <div className="py-2 z-1 surface-0">
                                <span className="text-900 font-medium">OR</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 py-8 flex align-items-center justify-content-center">
                        <Button label="Sign Up" icon="pi pi-user-add" className="p-button-rounded p-button-success" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Toolbar" code={block6} containerClassName="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div className="flex my-3 px-4 justify-content-center relative">
                    <div className="border-top-1 surface-border absolute top-50 w-full"></div>
                    <span className="p-buttonset z-1">
                        <button className="p-ripple appearance-none border-1 border-round-left surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                            <i className="pi pi-star text-600"></i>
                            <Ripple />
                        </button>
                        <button className="p-ripple appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                            <i className="pi pi-lock text-600"></i>
                            <Ripple />
                        </button>
                        <button className="p-ripple appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                            <i className="pi pi-pencil text-600"></i>
                            <Ripple />
                        </button>
                        <button className="p-ripple appearance-none border-1 border-left-none border-round-right surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                            <i className="pi pi-trash text-600"></i>
                            <Ripple />
                        </button>
                    </span>
                </div>
            </BlockViewer>
        </>
    )
}

export default Divider;
