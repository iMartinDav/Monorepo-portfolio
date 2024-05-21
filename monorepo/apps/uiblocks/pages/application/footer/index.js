import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Ripple } from 'primereact/ripple';

const FooterApp = () => {

    const block1 = `
<div className="surface-section px-4 md:px-6 lg:px-8">
    <div className="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
        <div>
            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" />
            <div className="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
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
    `;

    const block2 = `
<div className="surface-section px-4 md:px-6 lg:px-8">
    <div className="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
        <div className="flex flex-nowap font-medium">
            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">HOME<Ripple /></a>
            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">ABOUT<Ripple /></a>
            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">CONTACT<Ripple /></a>
        </div>
        <div className="mt-3 sm:mt-0">
            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" />
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-6 md:px-6 lg:px-8 text-center">
    <img src="/demo/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" />
    <div className="font-medium text-900 mt-4 mb-3">&copy; 2023 Bastion, Inc</div>
    <p className="text-600 line-height-3 mt-0 mb-4">Cursus metus aliquam eleifend mi. Malesuada pellentesque elit eget gravida. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
    <div className="flex align-items-center justify-content-center">
        <a className="cursor-pointer text-700 mr-5">
            <i className="pi pi-twitter"></i>
        </a>
        <a className="cursor-pointer text-700 mr-5">
            <i className="pi pi-facebook"></i>
        </a>
        <a className="cursor-pointer text-700">
            <i className="pi pi-github"></i>
        </a>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Footer</div>
            <BlockViewer header="Social Icons" code={block1} >
                <div className="surface-section px-4 md:px-6 lg:px-8">
                    <div className="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                        <div>
                            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" />
                            <div className="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
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
            </BlockViewer>

            <BlockViewer header="Links" code={block2}>
                <div className="surface-section px-4 md:px-6 lg:px-8">
                    <div className="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
                        <div className="flex flex-nowap font-medium">
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">HOME<Ripple /></a>
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">ABOUT<Ripple /></a>
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">CONTACT<Ripple /></a>
                        </div>
                        <div className="mt-3 sm:mt-0">
                            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="40" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered" code={block3}>
                <div className="surface-section px-4 py-6 md:px-6 lg:px-8 text-center">
                    <img src="/demo/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" />
                    <div className="font-medium text-900 mt-4 mb-3">&copy; 2023 Bastion, Inc</div>
                    <p className="text-600 line-height-3 mt-0 mb-4">Cursus metus aliquam eleifend mi. Malesuada pellentesque elit eget gravida. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
                    <div className="flex align-items-center justify-content-center">
                        <a className="cursor-pointer text-700 mr-5">
                            <i className="pi pi-twitter"></i>
                        </a>
                        <a className="cursor-pointer text-700 mr-5">
                            <i className="pi pi-facebook"></i>
                        </a>
                        <a className="cursor-pointer text-700">
                            <i className="pi pi-github"></i>
                        </a>
                    </div>
                </div>
            </BlockViewer>

        </>
    )
}

export default FooterApp;
