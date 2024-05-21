import React, { useRef } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

const Feed = () => {

    const items = [
        {
            label: 'Options',
            items: [
                { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
                { label: 'Search', icon: 'pi pi-fw pi-search' }
            ]
        }];

    const menu1 = useRef(null);
    const menu2 = useRef(null);

    const block1 = `
<div className="px-4 py-8 md:px-6 lg:px-8">
    <div className="mb-5 flex">
        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
            <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i className="pi pi-list text-xl"></i>
            </span>
            <div className="h-full bg-blue-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div className="mb-3">
                <span className="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                <span className="text-500 text-sm">1 minute ago</span>
            </div>
            <div className="line-height-3 text-700 mb-3">
                Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
            </div>
            <div className="text-500 flex align-items-center gap-4">
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-heart"></i>
                    <span className="mr-3">0</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-comment"></i>
                    <span className="mr-3">1</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-eye"></i>
                    <span>24</span>
                </div>
            </div>
        </div>
    </div>
    <div className="mb-5 flex">
        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
            <span className="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i className="pi pi-inbox text-xl"></i>
            </span>
            <div className="h-full bg-orange-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div className="mb-3">
                <span className="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                <span className="text-500 text-sm">2 hours ago</span>
            </div>
            <div className="line-height-3 text-700 mb-3">
                Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
            </div>
            <div className="text-500 flex align-items-center gap-4">
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-heart"></i>
                    <span className="mr-3">26</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-comment"></i>
                    <span className="mr-3">6</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-eye"></i>
                    <span>673</span>
                </div>
            </div>
        </div>
    </div>
    <div className="mb-5 flex">
        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
            <span className="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i className="pi pi-image"></i>
            </span>
            <div className="h-full bg-purple-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div className="mb-3">
                <span className="text-900 font-medium inline-block mr-3">Walter Black</span>
                <span className="text-500 text-sm">4 hours ago</span>
            </div>
            <div className="line-height-3 text-700 mb-3">
                Euismod in pellentesque massa placerat duis ultricies lacus.
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
            </div>
            <div className="text-500 flex align-items-center gap-4">
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-heart mr-1"></i>
                    <span className="mr-3">62</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-comment mr-1"></i>
                    <span className="mr-3">36</span>
                </div>
                <div className="flex align-items-center gap-1">
                    <i className="pi pi-eye mr-1"></i>
                    <span>21</span>
                </div> 
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex align-items-center justify-content-between mb-4">
        <div className="text-900 font-medium text-xl">Notifications</div>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
            <Menu ref={menu1} popup model={items} />
        </div>
    </div >

    <span className="block text-600 font-medium mb-3">TODAY</span>
    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span className="text-900 line-height-3 font-medium">
                Richard Jones<span className="text-700 font-normal"> has purchased a blue t-shirt for <span className="text-primary font-medium">$79</span></span>
            </span>
        </li>
        <li className="flex align-items-center py-2">
            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-download text-xl text-orange-500"></i>
            </div>
            <span className="text-700 line-height-3">Your request for withdrawal of <span className="text-primary font-medium">$2500</span> has been initiated.</span>
        </li>
    </ul>

    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
    <ul className="p-0 m-0 list-none">
        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span className="text-900 line-height-3 font-medium">
                Keyser Wick<span className="text-700 font-normal"> has purchased a black jacket for <span className="text-blue-500 font-medium">$59</span></span>
            </span>
        </li>
        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-question text-xl text-pink-500"></i>
            </div>
            <span className="text-900 line-height-3 font-medium">
                Jane Davis<span className="text-700 font-normal"> has posted a new questions about your product.</span>
            </span>
        </li>
        <li className="flex align-items-center py-2">
            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-arrow-up text-xl text-green-500"></i>
            </div>
            <span className="text-900 line-height-3 font-medium">
                Claire Smith<span className="text-700 font-normal"> has upvoted your store along with a comment.</span>
            </span>
        </li>
    </ul>
</div>
    `;

    const block3 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex align-items-center justify-content-between mb-3">
        <div className="text-900 font-medium text-xl">Team Activity</div>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
            <Menu ref={menu2} popup model={items} />
        </div>
    </div >
    <ul className="list-none p-0 m-0">
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div className="flex align-items-start mr-0 lg:mr-5">
                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-1.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-1" />
                <div>
                    <span className="text-900 font-medium block mb-2">Jane Cooper</span>
                    <div className="text-700 mb-2">responded to an issue.</div>
                    <a className="text-primary cursor-pointer">
                        <i className="pi pi-github text-sm mr-2"></i>
                        <span>Issue #1185</span>
                    </a>
                </div>
            </div>
            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div className="flex align-items-start mr-0 lg:mr-5">
                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" className="mr-3 w-3rem h-3rem" alt="avatar-m-1" />
                <div>
                    <span className="text-900 font-medium block mb-2">Robert Fox</span>
                    <div className="text-700">changed team size from <span className="text-900 font-medium">5</span> to <span className="text-900 font-medium">6</span>.</div>
                </div>
            </div>
            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div className="flex align-items-start mr-0 lg:mr-5">
                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-2" />
                <div>
                    <span className="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                    <div className="text-700 mb-2">created a Q4 presentation to an issue.</div>
                    <a className="text-primary cursor-pointer">
                        <i className="pi pi-file-pdf text-sm mr-2"></i>
                        <span>q4_presentation.pdf</span>
                    </a>
                </div>
            </div>
            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div className="flex align-items-start mr-0 lg:mr-5">
                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-3.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-3" />
                <div>
                    <span className="text-900 font-medium block mb-2">Annette Black</span>
                    <div className="text-700">added <span className="text-900 font-medium">Nico Greenberg</span> to <span className="text-primary">Watchlist Tier-1</span>.</div>
                </div>
            </div>
            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
        </li>
        <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div className="flex align-items-start mr-0 lg:mr-5">
                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-2.png" className="mr-3 w-3rem h-3rem" alt="avatar-m-2" />
                <div>
                    <span className="text-900 font-medium block mb-2">Floyd Miles</span>
                    <div className="text-700">has refunded a blue t-shirt for <span className="text-primary">$79</span>.</div>
                </div>
            </div>
            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
        </li>
    </ul>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Feed</div>
            <BlockViewer header="With Cards" code={block1}>
                <div className="px-4 py-8 md:px-6 lg:px-8">
                    <div className="mb-5 flex">
                        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                            <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                <i className="pi pi-compass text-xl"></i>
                            </span>
                            <div className="h-full bg-blue-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                            <div className="mb-3">
                                <span className="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                                <span className="text-500 text-sm">1 minute ago</span>
                            </div>
                            <div className="line-height-3 text-700 mb-3">
                                Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                            </div>
                            <div className="text-500 flex align-items-center gap-4">
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-heart"></i>
                                    <span className="mr-3">0</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-comment"></i>
                                    <span className="mr-3">1</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-eye"></i>
                                    <span>24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 flex">
                        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                            <span className="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                <i className="pi pi-list text-xl"></i>
                            </span>
                            <div className="h-full bg-orange-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                            <div className="mb-3">
                                <span className="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                                <span className="text-500 text-sm">2 hours ago</span>
                            </div>
                            <div className="line-height-3 text-700 mb-3">
                                Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                            </div>
                            <div className="text-500 flex align-items-center gap-4">
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-heart"></i>
                                    <span className="mr-3">26</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-comment"></i>
                                    <span className="mr-3">6</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-eye"></i>
                                    <span>673</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 flex">
                        <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                            <span className="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                <i className="pi pi-inbox text-xl"></i>
                            </span>
                            <div className="h-full bg-purple-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                        </div>
                        <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                            <div className="mb-3">
                                <span className="text-900 font-medium inline-block mr-3">Walter Black</span>
                                <span className="text-500 text-sm">4 hours ago</span>
                            </div>
                            <div className="line-height-3 text-700 mb-3">
                                Euismod in pellentesque massa placerat duis ultricies lacus.
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                            </div>
                            <div className="text-500 flex align-items-center gap-4">
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-heart mr-1"></i>
                                    <span className="mr-3">62</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-comment mr-1"></i>
                                    <span className="mr-3">36</span>
                                </div>
                                <div className="flex align-items-center gap-1">
                                    <i className="pi pi-eye mr-1"></i>
                                    <span>21</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Single Card" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center" >
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <div className="text-900 font-medium text-xl">Notifications</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                            <Menu ref={menu1} popup model={items} />
                        </div>
                    </div >

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">
                                Richard Jones<span className="text-700 font-normal"> has purchased a blue t-shirt for <span className="text-primary font-medium">$79</span></span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-download text-xl text-orange-500"></i>
                            </div>
                            <span className="text-700 line-height-3">Your request for withdrawal of <span className="text-primary font-medium">$2500</span> has been initiated.</span>
                        </li>
                    </ul>

                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">
                                Keyser Wick<span className="text-700 font-normal"> has purchased a black jacket for <span className="text-blue-500 font-medium">$59</span></span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">
                                Jane Davis<span className="text-700 font-normal"> has posted a new questions about your product.</span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-arrow-up text-xl text-green-500"></i>
                            </div>
                            <span className="text-900 line-height-3 font-medium">
                                Claire Smith<span className="text-700 font-normal"> has upvoted your store along with a comment.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Avatars and Timestamps" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center" >
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium text-xl">Team Activity</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
                            <Menu ref={menu2} popup model={items} />
                        </div>
                    </div >
                    <ul className="list-none p-0 m-0">
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-1.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-1" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Jane Cooper</span>
                                    <div className="text-700 mb-2">responded to an issue.</div>
                                    <a className="text-primary cursor-pointer">
                                        <i className="pi pi-github text-sm mr-2"></i>
                                        <span>Issue #1185</span>
                                    </a>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-1.png" className="mr-3 w-3rem h-3rem" alt="avatar-m-1" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Robert Fox</span>
                                    <div className="text-700">changed team size from <span className="text-900 font-medium">5</span> to <span className="text-900 font-medium">6</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-2" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                    <div className="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                    <a className="text-primary cursor-pointer">
                                        <i className="pi pi-file-pdf text-sm mr-2"></i>
                                        <span>q4_presentation.pdf</span>
                                    </a>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-f-3.png" className="mr-3 w-3rem h-3rem" alt="avatar-f-3" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Annette Black</span>
                                    <div className="text-700">added <span className="text-900 font-medium">Nico Greenberg</span> to <span className="text-primary">Watchlist Tier-1</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                        </li>
                        <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div className="flex align-items-start mr-0 lg:mr-5">
                                <img src="/demo/images/blocks/avatars/circle-big/avatar-m-2.png" className="mr-3 w-3rem h-3rem" alt="avatar-m-2" />
                                <div>
                                    <span className="text-900 font-medium block mb-2">Floyd Miles</span>
                                    <div className="text-700">has refunded a blue t-shirt for <span className="text-primary">$79</span>.</div>
                                </div>
                            </div>
                            <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                        </li>
                    </ul>
                </div>
            </BlockViewer>
        </>
    )
}

export default Feed;
