
import React, { useState } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';

const Tabs = () => {

    const [active1, setActive1] = useState(0);
    const [active2, setActive2] = useState(0);
    const [active3, setActive3] = useState(0);
    const [active4, setActive4] = useState(0);
    const [active5, setActive5] = useState(0);
    const [active6, setActive6] = useState(0);

    const block1 = `
<ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 0, 'text-700 border-transparent': active1 !== 0 })} onClick={() => setActive1(0)}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 1, 'text-700 border-transparent': active1 !== 1 })} onClick={() => setActive1(1)}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 2, 'text-700 border-transparent': active1 !== 2 })} onClick={() => setActive1(2)}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 3, 'text-700 border-transparent': active1 !== 3 })} onClick={() => setActive1(3)}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 4, 'text-700 border-transparent': active1 !== 4 })} onClick={() => setActive1(4)}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    const block2 = `
<ul className="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 0, 'text-700': active2 !== 0 })} onClick={() => setActive2(0)}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 1, 'text-700': active2 !== 2 })} onClick={() => setActive2(1)}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 2, 'text-700': active2 !== 2 })} onClick={() => setActive2(2)}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 3, 'text-700': active2 !== 3 })} onClick={() => setActive2(3)}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 4, 'text-700': active2 !== 4 })} onClick={() => setActive2(4)}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    const block3 = `
<ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 0, 'text-700 border-transparent': active3 !== 0 })} onClick={() => setActive3(0)}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 1, 'text-700 border-transparent': active3 !== 1 })} onClick={() => setActive3(1)}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 2, 'text-700 border-transparent': active3 !== 2 })} onClick={() => setActive3(2)}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 3, 'text-700 border-transparent': active3 !== 3 })} onClick={() => setActive3(3)}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 4, 'text-700 border-transparent': active3 !== 4 })} onClick={() => setActive3(4)}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    const block4 = `
<ul className="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
    <li className="pr-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 0, 'text-700': active4 !== 0 })} onClick={() => setActive4(0)}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 1, 'text-700': active4 !== 2 })} onClick={() => setActive4(1)}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 2, 'text-700': active4 !== 2 })} onClick={() => setActive4(2)}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 3, 'text-700': active4 !== 3 })} onClick={() => setActive4(3)}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li className="flex align-items-center">
        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
    </li>
    <li className="px-3">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 4, 'text-700': active4 !== 4 })} onClick={() => setActive4(4)}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    const block5 = `
<ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <li className="flex-1">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 0, 'text-700 border-transparent': active5 !== 0 })} onClick={() => setActive5(0)}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li className="flex-1">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 1, 'text-700 border-transparent': active5 !== 1 })} onClick={() => setActive5(1)}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li className="flex-1">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 2, 'text-700 border-transparent': active5 !== 2 })} onClick={() => setActive5(2)}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li className="flex-1">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 3, 'text-700 border-transparent': active5 !== 3 })} onClick={() => setActive5(3)}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li className="flex-1">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 4, 'text-700 border-transparent': active5 !== 4 })} onClick={() => setActive5(4)}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    const block6 = `
<ul className="bg-indigo-500 p-2 m-0 list-none flex overflow-x-auto select-none" style={{ borderRadius: '30px' }}>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 0, 'text-white': active6 !== 0 })} onClick={() => setActive6(0)} style={{ borderRadius: '30px' }}>
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">Overview</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 1, 'text-white': active6 !== 1 })} onClick={() => setActive6(1)} style={{ borderRadius: '30px' }}>
            <i className="pi pi-users mr-2"></i>
            <span className="font-medium">Members</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 2, 'text-white': active6 !== 2 })} onClick={() => setActive6(2)} style={{ borderRadius: '30px' }}>
            <i className="pi pi-shopping-cart mr-2"></i>
            <span className="font-medium">Sales</span>
            <Ripple />
        </a>
    </li>
    <li className="mr-2">
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 3, 'text-white': active6 !== 3 })} onClick={() => setActive6(3)} style={{ borderRadius: '30px' }}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Profile</span>
            <Ripple />
        </a>
    </li>
    <li>
        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 4, 'text-white': active6 !== 4 })} onClick={() => setActive6(4)} style={{ borderRadius: '30px' }}>
            <i className="pi pi-cog mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
        </a>
    </li>
</ul>
    `;

    return (
        <>
            <div className="block-category-title">Tabs</div>
            <BlockViewer header="Underline" code={block1} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 0, 'text-700 border-transparent': active1 !== 0 })} onClick={() => setActive1(0)}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 1, 'text-700 border-transparent': active1 !== 1 })} onClick={() => setActive1(1)}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 2, 'text-700 border-transparent': active1 !== 2 })} onClick={() => setActive1(2)}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 3, 'text-700 border-transparent': active1 !== 3 })} onClick={() => setActive1(3)}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 border-noround', { 'border-blue-500 text-blue-500 hover:border-blue-500': active1 === 4, 'text-700 border-transparent': active1 !== 4 })} onClick={() => setActive1(4)}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Pills" code={block2} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 0, 'text-700': active2 !== 0 })} onClick={() => setActive2(0)}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 1, 'text-700': active2 !== 2 })} onClick={() => setActive2(1)}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 2, 'text-700': active2 !== 2 })} onClick={() => setActive2(2)}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 3, 'text-700': active2 !== 3 })} onClick={() => setActive2(3)}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 border-noround', { 'bg-primary hover:bg-primary': active2 === 4, 'text-700': active2 !== 4 })} onClick={() => setActive2(4)}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Underline with Separators" code={block3} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 0, 'text-700 border-transparent': active3 !== 0 })} onClick={() => setActive3(0)}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 1, 'text-700 border-transparent': active3 !== 1 })} onClick={() => setActive3(1)}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 2, 'text-700 border-transparent': active3 !== 2 })} onClick={() => setActive3(2)}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 3, 'text-700 border-transparent': active3 !== 3 })} onClick={() => setActive3(3)}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active3 === 4, 'text-700 border-transparent': active3 !== 4 })} onClick={() => setActive3(4)}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Pills with Separators" code={block4} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="surface-card p-2 m-0 list-none flex overflow-x-auto select-none">
                    <li className="pr-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 0, 'text-700': active4 !== 0 })} onClick={() => setActive4(0)}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 1, 'text-700': active4 !== 2 })} onClick={() => setActive4(1)}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 2, 'text-700': active4 !== 2 })} onClick={() => setActive4(2)}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 3, 'text-700': active4 !== 3 })} onClick={() => setActive4(3)}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex align-items-center">
                        <div style={{ width: '1px', height: '50%' }} className="border-right-1 surface-border"></div>
                    </li>
                    <li className="px-3">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150', { 'bg-primary hover:bg-primary': active4 === 4, 'text-700': active4 !== 4 })} onClick={() => setActive4(4)}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Full Width Underline" code={block5} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
                    <li className="flex-1">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 0, 'text-700 border-transparent': active5 !== 0 })} onClick={() => setActive5(0)}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 1, 'text-700 border-transparent': active5 !== 1 })} onClick={() => setActive5(1)}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 2, 'text-700 border-transparent': active5 !== 2 })} onClick={() => setActive5(2)}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 3, 'text-700 border-transparent': active5 !== 3 })} onClick={() => setActive5(3)}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center justify-content-center border-bottom-2 hover:border-500 transition-colors transition-duration-150', { 'border-blue-500 text-blue-500 hover:border-blue-500': active5 === 4, 'text-700 border-transparent': active5 !== 4 })} onClick={() => setActive5(4)}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Colored Pills" code={block6} containerClassName="px-3 py-8 md:px-6 lg:px-8">
                <ul className="bg-indigo-500 p-2 m-0 list-none flex overflow-x-auto select-none" style={{ borderRadius: '30px' }}>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 0, 'text-white': active6 !== 0 })} onClick={() => setActive6(0)} style={{ borderRadius: '30px' }}>
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Overview</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 1, 'text-white': active6 !== 1 })} onClick={() => setActive6(1)} style={{ borderRadius: '30px' }}>
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Members</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 2, 'text-white': active6 !== 2 })} onClick={() => setActive6(2)} style={{ borderRadius: '30px' }}>
                            <i className="pi pi-shopping-cart mr-2"></i>
                            <span className="font-medium">Sales</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 3, 'text-white': active6 !== 3 })} onClick={() => setActive6(3)} style={{ borderRadius: '30px' }}>
                            <i className="pi pi-user mr-2"></i>
                            <span className="font-medium">Profile</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className={classNames('p-ripple cursor-pointer px-4 py-3 flex align-items-center hover:bg-indigo-400 transition-colors transition-duration-150', { 'bg-white hover:bg-white text-indigo-900': active6 === 4, 'text-white': active6 !== 4 })} onClick={() => setActive6(4)} style={{ borderRadius: '30px' }}>
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
            </BlockViewer>
        </>
    )
}

export default Tabs;
