import React from "react";
import { Button } from "primereact/button";
import BlockViewer from "../../../demo/components/BlockViewer";

const PageNotFound = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div style={{ background: 'radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)' }} className="text-center">
        <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
    </div>
    <div className="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
    <p className="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
    <div className="text-center">
        <Button className="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left" />
        <Button label="Go to Dashboard" icon="pi pi-home" />
    </div>
</div>
    `;
    const block2 = `
<div className="flex surface-section">
    <div className="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
        <div className="border-left-2 border-pink-500">
            <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <div className="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
        <p className="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
        <div>
            <Button className="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left" />
            <Button label="Go to Dashboard" icon="pi pi-home" />
        </div>
    </div>
    <div className="w-6 hidden sm:block" style={{ background: 'url("/demo/images/blocks/feedback/404.png") no-repeat', backgroundSize: 'cover' }}>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="shadow-2 border-round surface-card px-4 md:px-6 py-6">
        <div className="border-left-2 border-pink-500">
            <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <div className="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
        <p className="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>

        <ul className="list-none px-0 pb-0 pt-4 m-0 border-top-1 surface-border">
            <li className="py-2">
                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span className="inline-flex align-items-center justify-content-center bg-indigo-500 border-round flex-shrink-0" style={{ height: '52px', width: '52px' }}>
                        <i className="pi pi-envelope text-white text-3xl"></i>
                    </span>
                    <div className="ml-3">
                        <span className="text-900 font-medium text-2xl inline-block mb-1">Messages</span>
                        <p className="text-600 m-0 line-height-3">Sed egestas egestas fringilla</p>
                    </div>
                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
            <li className="py-2">
                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-round flex-shrink-0" style={{ height: '52px', width: '52px' }}>
                        <i className="pi pi-chart-bar text-white text-3xl"></i>
                    </span>
                    <div className="ml-3">
                        <span className="text-900 font-medium text-2xl inline-block mb-1">Dashboard</span>
                        <p className="text-600 m-0 line-height-3">Eu Ornare quam viverra orci sagittis odio</p>
                    </div>
                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
            <li className="pt-2">
                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-round flex-shrink-0" style={{ height: '52px', width: '52px' }}>
                        <i className="pi pi-cog text-white text-3xl"></i>
                    </span>
                    <div className="ml-3">
                        <span className="text-900 font-medium text-2xl inline-block mb-1">Settings</span>
                        <p className="text-600 m-0 line-height-3">Tincidunt nunc pulvinar sapien et</p>
                    </div>
                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
        <div className="text-center lg:text-right">
            <div className="mt-6 mb-3 font-bold text-6xl text-900">Are you lost?</div>
            <p className="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
            <Button type="button" label="Go back to home page" className="p-button-outlined"></Button>
        </div>
        <div>
            <img src="/demo/images/blocks/feedback/404-rocket.png" alt="Image" className="w-full md:w-28rem" />
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Page Not Found</div>
            <BlockViewer header="Centered" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        style={{
                            background:
                                "radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)",
                        }}
                        className="text-center"
                    >
                        <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
                            404
                        </span>
                    </div>
                    <div className="mt-6 mb-5 font-bold text-6xl text-900 text-center">
                        Page Not Found
                    </div>
                    <p className="text-700 text-3xl mt-0 mb-6 text-center">
                        Sorry, we could not find the page.
                    </p>
                    <div className="text-center">
                        <Button
                            className="p-button-text mr-2"
                            label="Go Back"
                            icon="pi pi-arrow-left"
                        />
                        <Button label="Go to Dashboard" icon="pi pi-home" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Split with Image" code={block2}>
                <div className="flex surface-section">
                    <div className="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
                        <div className="border-left-2 border-pink-500">
                            <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
                                404
                            </span>
                        </div>
                        <div className="mt-6 mb-5 font-bold text-6xl text-900">
                            Page Not Found
                        </div>
                        <p className="text-700 text-3xl mt-0 mb-6">
                            Sorry, we could not find the page.
                        </p>
                        <div>
                            <Button
                                className="p-button-text mr-2"
                                label="Go Back"
                                icon="pi pi-arrow-left"
                            />
                            <Button label="Go to Dashboard" icon="pi pi-home" />
                        </div>
                    </div>
                    <div
                        className="w-6 hidden sm:block"
                        style={{
                            background:
                                'url("/demo/images/blocks/feedback/404.png") no-repeat',
                            backgroundSize: "cover",
                        }}
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="shadow-2 border-round surface-card px-4 md:px-6 py-6">
                        <div className="border-left-2 border-pink-500">
                            <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
                                404
                            </span>
                        </div>
                        <div className="mt-6 mb-5 font-bold text-6xl text-900">
                            Page Not Found
                        </div>
                        <p className="text-700 text-3xl mt-0 mb-6">
                            Sorry, we could not find the page.
                        </p>

                        <ul className="list-none px-0 pb-0 pt-4 m-0 border-top-1 surface-border">
                            <li className="py-2">
                                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                    <span
                                        className="inline-flex align-items-center justify-content-center bg-indigo-500 border-round flex-shrink-0"
                                        style={{
                                            height: "52px",
                                            width: "52px",
                                        }}
                                    >
                                        <i className="pi pi-envelope text-white text-3xl"></i>
                                    </span>
                                    <div className="ml-3">
                                        <span className="text-900 font-medium text-2xl inline-block mb-1">
                                            Messages
                                        </span>
                                        <p className="text-600 m-0 line-height-3">
                                            Sed egestas egestas fringilla
                                        </p>
                                    </div>
                                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                                </a>
                            </li>
                            <li className="py-2">
                                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                    <span
                                        className="inline-flex align-items-center justify-content-center bg-orange-500 border-round flex-shrink-0"
                                        style={{
                                            height: "52px",
                                            width: "52px",
                                        }}
                                    >
                                        <i className="pi pi-chart-bar text-white text-3xl"></i>
                                    </span>
                                    <div className="ml-3">
                                        <span className="text-900 font-medium text-2xl inline-block mb-1">
                                            Dashboard
                                        </span>
                                        <p className="text-600 m-0 line-height-3">
                                            Eu Ornare quam viverra orci sagittis
                                            odio
                                        </p>
                                    </div>
                                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                                </a>
                            </li>
                            <li className="pt-2">
                                <a className="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                    <span
                                        className="inline-flex align-items-center justify-content-center bg-cyan-500 border-round flex-shrink-0"
                                        style={{
                                            height: "52px",
                                            width: "52px",
                                        }}
                                    >
                                        <i className="pi pi-cog text-white text-3xl"></i>
                                    </span>
                                    <div className="ml-3">
                                        <span className="text-900 font-medium text-2xl inline-block mb-1">
                                            Settings
                                        </span>
                                        <p className="text-600 m-0 line-height-3">
                                            Tincidunt nunc pulvinar sapien et
                                        </p>
                                    </div>
                                    <i className="text-600 pi pi-chevron-right ml-auto"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Illustration" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
                        <div className="text-center lg:text-right">
                            <div className="mt-6 mb-3 font-bold text-6xl text-900">
                                Are you lost?
                            </div>
                            <p className="text-700 text-3xl mt-0 mb-6">
                                Sorry, we could not find the page.
                            </p>
                            <Button
                                type="button"
                                label="Go back to home page"
                                className="p-button-outlined"
                            ></Button>
                        </div>
                        <div>
                            <img
                                src="/demo/images/blocks/feedback/404-rocket.png"
                                alt="Image"
                                className="w-full md:w-28rem"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default PageNotFound;
