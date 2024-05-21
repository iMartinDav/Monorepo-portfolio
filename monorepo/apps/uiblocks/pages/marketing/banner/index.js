import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Ripple } from 'primereact/ripple';
import Link from 'next/link';

const Banner = () => {
    const block1 = `
<div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div className="font-bold mr-8">🔥 Hot Deals!</div>
    <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <div className="flex align-items-center ml-2 mr-8">
        <a className="text-white" href="/#"><span className="underline font-bold">Learn More</span></a>
    </div>
    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
        <i className="pi pi-times"></i>
    </a>
</div>
    `;

    const block2 = `
<div className="bg-cyan-600 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2" style={{ borderRadius: '8px' }}>
    <div className="font-bold">🔥 Hot Deals!</div>
    <div className="align-items-center flex">
        <span className="line-height-3 hidden lg:block">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        <div className="flex align-items-center ml-2">
            <a className="text-white" href="/#"><span className="underline font-bold">Learn More</span></a>
        </div>
    </div>
    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
        <i className="pi pi-times"></i>
    </a>
</div>
    `;


    const block3 = `
<div className="shadow-2 flex flex-wrap justify-content-between align-content-center px-4 md:px-8" style={{ background: 'linear-gradient(90deg, #263238 0%, #526A76 100%)', borderRadius: '8px' }}>
    <div className="flex align-items-start py-3">
        <div>
            <span className="inline-flex border-circle justify-content-center align-items-center text-white bg-green-500 mr-4" style={{ width: '38px', height: '38px' }}>
                <i className="pi pi-check-circle text-xl"></i>
            </span>
        </div>
        <div>
            <div className="text-white font-bold mb-1">Account Verification</div>
            <span className="text-bluegray-200">Libero voluptatum atque exercitationem praesentium provident odit aperiam.</span>
        </div>
    </div>
    <a className="p-ripple cursor-pointer bg-bluegray-500 text-white px-3 py-2 line-height-3 my-3 hover:bg-bluegray-400 transition-colors transition-duration-150" style={{ borderRadius: '35px' }}>
        <span>Confirm Email</span>
        <i className="ml-2 pi pi-arrow-right"></i>
        <Ripple />
    </a>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Banner</div>
            <BlockViewer header="Dark and Full Width" code={block1} containerClassName="surface-0 py-8" free>
                <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
                    <div className="font-bold mr-8">🔥 Hot Deals!</div>
                    <div className="align-items-center hidden lg:flex">
                        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                    </div>
                    <div className="flex align-items-center ml-2 mr-8">
                        <Link className="text-white" href="/"><span className="underline font-bold">Learn More</span></Link>
                    </div>
                    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
                        <i className="pi pi-times"></i>
                    </a>
                </div>
            </BlockViewer>

            <BlockViewer header="Condensed and Colored" code={block2} containerClassName="surface-0 py-8 px-4 md:px-8">
                <div className="bg-cyan-600 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2" style={{ borderRadius: '8px' }}>
                    <div className="font-bold">🔥 Hot Deals!</div>
                    <div className="align-items-center flex">
                        <span className="line-height-3 hidden lg:block">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                        <div className="flex align-items-center ml-2">
                            <Link className="text-white" href="/"><span className="underline font-bold">Learn More</span></Link>
                        </div>
                    </div>
                    <a className="flex align-items-center no-underline justify-content-center border-circle text-gray hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
                        <i className="pi pi-times"></i>
                    </a>
                </div>
            </BlockViewer>


            <BlockViewer header="Condensed and Gradient" code={block3} containerClassName="surface-section py-8 px-4 md:px-8">
                <div className="shadow-2 flex flex-wrap justify-content-between align-content-center px-4 md:px-8" style={{ background: 'linear-gradient(90deg, #263238 0%, #526A76 100%)', borderRadius: '8px' }}>
                    <div className="flex align-items-start py-3">
                        <div>
                            <span className="inline-flex border-circle justify-content-center align-items-center text-white bg-green-500 mr-4" style={{ width: '38px', height: '38px' }}>
                                <i className="pi pi-check-circle text-xl"></i>
                            </span>
                        </div>
                        <div>
                            <div className="text-white font-bold mb-1">Account Verification</div>
                            <span className="text-bluegray-200">Libero voluptatum atque exercitationem praesentium provident odit aperiam.</span>
                        </div>
                    </div>
                    <a className="p-ripple cursor-pointer bg-bluegray-500 text-white px-3 py-2 line-height-3 my-3 hover:bg-bluegray-400 transition-colors transition-duration-150" style={{ borderRadius: '35px' }}>
                        <span>Confirm Email</span>
                        <i className="ml-2 pi pi-arrow-right"></i>
                        <Ripple />
                    </a>
                </div>
            </BlockViewer>
        </>
    )
}

export default Banner;
