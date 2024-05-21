import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";

const Breadcrumb = () => {

    const block1 = `
<ul className="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
    <li className="pr-3">
        <a className="cursor-pointer">
            <i className="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li className="px-2">
        <i className="pi pi-angle-right text-500"></i>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
    </li>
    <li className="px-2">
        <i className="pi pi-angle-right text-500"></i>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
    </li>
    <li className="px-2">
        <i className="pi pi-angle-right text-500"></i>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-900 white-space-nowrap">Level 1</a>
    </li>
</ul>
    `;

    const block2 = `
<ul className="list-none p-0 m-0 surface-card flex font-medium overflow-y-hidden overflow-x-auto">
    <li className="relative p-3">
        <a className="cursor-pointer">
            <i className="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li className="relative p-3">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 3</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
    <li className="relative p-3">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 2</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
    <li className="relative p-3">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-900 pl-4 white-space-nowrap">Level 1</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
</ul>
    `;

    const block3 = `
<ul className="list-none p-0 m-0 flex font-medium overflow-y-hidden overflow-x-auto border-round shadow-2">
    <li className="relative p-3 bg-indigo-500">
        <a className="cursor-pointer">
            <i className="pi pi-home text-white"></i>
        </a>
    </li>
    <li className="relative p-3 bg-indigo-500">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-white pl-4 white-space-nowrap">Level 3</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
    <li className="relative p-3 bg-indigo-500">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-white pl-4 white-space-nowrap">Level 2</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
    <li className="relative p-3 bg-indigo-700">
        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
        <a className="cursor-pointer text-indigo-100 font-bold pl-4 white-space-nowrap">Level 1</a>
        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
    </li>
</ul>
    `;

    const block4 = `
<ul className="list-none p-0 m-0 flex font-medium overflow-x-auto" style={{ borderRadius: '30px' }}>
    <li className="bg-cyan-500 z-5">
        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            <i className="pi pi-home text-white"></i>
        </a>
    </li>
    <li className="bg-cyan-500 z-4">
        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            Level 3
        </a>
    </li>
    <li className="surface-card z-3">
        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            Level 2
        </a>
    </li>
    <li>
        <a className="cursor-pointer text-cyan-700 flex align-items-center justify-content-center px-5 py-3 surface-card white-space-nowrap h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            Level 1
        </a>
    </li>
</ul>
    `;

    const block5 = `
<ul className="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
    <li className="pr-3">
        <a className="cursor-pointer">
            <i className="pi pi-home text-blue-500"></i>
        </a>
    </li>
    <li className="px-2">
        <span className="text-400">/</span>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
    </li>
    <li className="px-2">
        <span className="text-400">/</span>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
    </li>
    <li className="px-2">
        <span className="text-400">/</span>
    </li>
    <li className="px-2">
        <a className="cursor-pointer text-900 white-space-nowrap">Level 1</a>
    </li>
</ul>
    `;

    return (
        <>
            <div className="block-category-title">Breadcrumb</div>
            <BlockViewer header="Simple with Angle Icon" code={block1} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <ul className="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
                    <li className="pr-3">
                        <a className="cursor-pointer">
                            <i className="pi pi-home text-blue-500"></i>
                        </a>
                    </li>
                    <li className="px-2">
                        <i className="pi pi-angle-right text-500"></i>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
                    </li>
                    <li className="px-2">
                        <i className="pi pi-angle-right text-500"></i>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
                    </li>
                    <li className="px-2">
                        <i className="pi pi-angle-right text-500"></i>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-900 white-space-nowrap">Level 1</a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Full Height Icon" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <ul className="list-none p-0 m-0 surface-card flex font-medium overflow-y-hidden overflow-x-auto">
                    <li className="relative p-3">
                        <a className="cursor-pointer">
                            <i className="pi pi-home text-blue-500"></i>
                        </a>
                    </li>
                    <li className="relative p-3">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 3</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                    <li className="relative p-3">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 2</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                    <li className="relative p-3">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-900 pl-4 white-space-nowrap">Level 1</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                </ul>
            </BlockViewer >

            <BlockViewer header="Colored" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center">
                <ul className="list-none p-0 m-0 flex font-medium overflow-y-hidden overflow-x-auto border-round shadow-2">
                    <li className="relative p-3 bg-indigo-500">
                        <a className="cursor-pointer">
                            <i className="pi pi-home text-white"></i>
                        </a>
                    </li>
                    <li className="relative p-3 bg-indigo-500">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-white pl-4 white-space-nowrap">Level 3</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                    <li className="relative p-3 bg-indigo-500">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-white pl-4 white-space-nowrap">Level 2</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                    <li className="relative p-3 bg-indigo-700">
                        <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--indigo-500)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                        <a className="cursor-pointer text-indigo-100 font-bold pl-4 white-space-nowrap">Level 1</a>
                        <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--indigo-100)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Rounded" code={block4} containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center">
                <ul className="list-none p-0 m-0 flex font-medium overflow-x-auto" style={{ borderRadius: '30px' }}>
                    <li className="bg-cyan-500 z-5">
                        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
                            <i className="pi pi-home text-white"></i>
                        </a>
                    </li>
                    <li className="bg-cyan-500 z-4">
                        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
                            Level 3
                        </a>
                    </li>
                    <li className="surface-card z-3">
                        <a className="cursor-pointer bg-cyan-500 flex align-items-center justify-content-center px-5 py-3 text-white white-space-nowrap shadow-2 h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
                            Level 2
                        </a>
                    </li>
                    <li>
                        <a className="cursor-pointer text-cyan-700 flex align-items-center justify-content-center px-5 py-3 surface-card white-space-nowrap h-full" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
                            Level 1
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Simple with Slash" code={block5} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <ul className="list-none p-3 m-0 surface-card flex align-items-center font-medium overflow-x-auto">
                    <li className="pr-3">
                        <a className="cursor-pointer">
                            <i className="pi pi-home text-blue-500"></i>
                        </a>
                    </li>
                    <li className="px-2">
                        <span className="text-400">/</span>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
                    </li>
                    <li className="px-2">
                        <span className="text-400">/</span>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
                    </li>
                    <li className="px-2">
                        <span className="text-400">/</span>
                    </li>
                    <li className="px-2">
                        <a className="cursor-pointer text-900 white-space-nowrap">Level 1</a>
                    </li>
                </ul>
            </BlockViewer>
        </>
    )
}

export default Breadcrumb;
