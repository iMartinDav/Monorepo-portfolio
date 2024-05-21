import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Rating } from 'primereact/rating';
import { Knob } from 'primereact/knob';
import BlockViewer from "../../../demo/components/BlockViewer";

const StackedList = () => {

    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const menu3 = useRef(null);
    const menu4 = useRef(null);
    const menu5 = useRef(null);

    const items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];

    const block1 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Team Members</span>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
            <Menu ref={menu1} popup model={items} />
        </div>
    </div>
    <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="flex">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">Janette Hudson</span>
                    <div className="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="flex">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                    <div className="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="flex">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mr-3" style={{ width: '45px', height: '45px' }} />
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">Arlene McCoy</span>
                    <div className="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="flex">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">Jacob Jones</span>
                    <div className="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="flex">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">James Cooper</span>
                    <div className="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
            </div>
        </li>
    </ul>
</div>
    `;

    const block2 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Best Selling Products</span>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
            <Menu ref={menu2} popup model={items} />
        </div>
    </div>
    <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                <span className="text-600">Clothing</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-orange-500 h-full" style={{ width: '50%' }}></div>
                </div>
                <span className="text-orange-500 ml-3 font-medium">%50</span>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                <span className="text-600">Accessories</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-cyan-500 h-full" style={{ width: '16%' }}></div>
                </div>
                <span className="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                <span className="text-600">Accessories</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-pink-500 h-full" style={{ width: '67%' }}></div>
                </div>
                <span className="text-pink-500 ml-3 font-medium">%67</span>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                <span className="text-600">Office</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-green-500 h-full" style={{ width: '35%' }}></div>
                </div>
                <span className="text-green-500 ml-3 font-medium">%35</span>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                <span className="text-600">Accessories</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-purple-500 h-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-purple-500 ml-3 font-medium">%75</span>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div className="mr-8 md:mr-8">
                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                <span className="text-600">Clothing</span>
            </div>
            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                    <div className="bg-teal-500 h-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-teal-500 ml-3 font-medium">%40</span>
            </div>
        </li>
    </ul>
</div>
    `;

    const block3 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="text-xl text-900 font-medium mb-5">Latest News</div>
    <ul className="list-none p-0 m-0">
        <li className="pb-3 border-bottom-1 surface-border">
            <div className="font-medium text-900 mb-2">Aenean euismod elementum</div>
            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Vitae turpis massa sed elementum tempus egestas sed sed risus.
                In metus vulputate eu scelerisque felis imperdiet proin.</div>
        </li>
        <li className="py-3 border-bottom-1 surface-border">
            <div className="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                Elementum eu facilisis sed odio morbi.</div>
        </li>
        <li className="py-3 border-bottom-1 surface-border">
            <div className="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
        </li>
    </ul>
    <div className="flex justify-content-between pt-3">
        <Button label="Clear All" className="p-button-outlined p-button-secondary w-6 mr-2" />
        <Button label="New Entry" className="p-button-outlined w-6 ml-2" />
    </div>
</div>
    `;

    const block4 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Recent Invoices</span>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu3.current.toggle(event)} />
            <Menu ref={menu3} popup model={items} />
        </div>
    </div>
    <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-yellow-50 border-yellow-500" style={{ borderRadius: '10px' }}>
            <div>
                <div>
                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-yellow-200">
                        <i className="pi pi-file text-yellow-700"></i>
                    </span>
                    <span className="text-yellow-700 font-bold ml-2">Jenny Wilson</span>
                </div>
                <p className="text-yellow-700 mt-2 mb-0">Due <span className="font-medium">10/09/2021</span></p>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PENDING</span>
                <div className="text-right ml-3">
                    <span className="text-yellow-700 font-bold">120.00</span>
                    <p className="mt-1 mb-0 text-yellow-700">EUR</p>
                </div>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500" style={{ borderRadius: '10px' }}>
            <div>
                <div>
                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-200">
                        <i className="pi pi-file text-green-600"></i>
                    </span>
                    <span className="text-green-700 font-bold ml-2">Dianne Russell</span>
                </div>
                <p className="text-green-700 mt-2 mb-0">Due <span className="font-medium">21/10/2021</span></p>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PAID</span>
                <div className="text-right ml-3">
                    <span className="text-green-700 font-bold">82.50</span>
                    <p className="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500" style={{ borderRadius: '10px' }}>
            <div>
                <div>
                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-500">
                        <i className="pi pi-file text-green-600"></i>
                    </span>
                    <span className="text-green-700 font-bold ml-2">Jerome Bell</span>
                </div>
                <p className="text-green-700 mt-2 mb-0">Due <span className="font-medium">20/12/2021</span></p>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PAID</span>
                <div className="text-right ml-3">
                    <span className="text-green-700 font-bold">250.00</span>
                    <p className="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-pink-50 border-pink-500" style={{ borderRadius: '10px' }}>
            <div>
                <div>
                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-pink-200">
                        <i className="pi pi-file text-pink-500"></i>
                    </span>
                    <span className="text-pink-500 font-bold ml-2">Courtney Henry</span>
                </div>
                <p className="text-pink-500 mt-2 mb-0">Due <span className="font-medium">01/05/2021</span></p>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-pink-400 text-pink-50 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>UNPAID</span>
                <div className="text-right ml-3">
                    <span className="text-pink-500 font-bold">60.00</span>
                    <p className="mt-1 mb-0 text-pink-500">EUR</p>
                </div>
            </div>
        </li>
    </ul>
</div>
    `;

    const block5 = `
<div className="surface-card shadow-2 border-round p-4">
    <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Top Downloads</span>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu4.current.toggle(event)} />
            <Menu ref={menu4} popup model={items} />
        </div>

    </div>
    <ul className="list-none p-0 m-0">
        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div className="flex align-items-center">
                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/logos/logo-pwd.png" style={{ width: '30px', height: '30px' }} alt='logo-pwd'/>
                </span>
                <div>
                    <div className="text-900 font-medium text-xl mb-2">1Password</div>
                    <div className="flex align-items-center">
                        <i className="pi pi-apple text-600 mr-2"></i>
                        <span className="text-600">App Store</span>
                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$12.24</span>
                    </div>
                </div>
            </div>
            <div className="sm:text-right mt-3 md:mt-0">
                <Rating value={3} readOnly stars={5} cancel={false} />
                <div className="text-sm text-600 mt-2">10K Reviews</div>
            </div>
        </li>
        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div className="flex align-items-center">
                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/logos/logo-evernote.png" style={{ width: '30px', height: '30px' }} alt='logo-evernote'/>
                </span>
                <div>
                    <div className="text-900 font-medium text-xl mb-2">Evernote</div>
                    <div className="flex align-items-center">
                        <i className="pi pi-apple text-600 mr-2"></i>
                        <span className="text-600">App Store</span>
                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$20.00</span>
                    </div>
                </div>
            </div>
            <div className="sm:text-right mt-3 md:mt-0">
                <Rating value={2} readOnly stars={5} cancel={false} />
                <div className="text-sm text-600 mt-2">2K Reviews</div>
            </div>
        </li>
        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div className="flex align-items-center">
                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/logos/logo-dropbox.png" style={{ width: '30px', height: '30px' }} alt="logo-dropbox"/>
                </span>
                <div>
                    <div className="text-900 font-medium text-xl mb-2">Dropbox</div>
                    <div className="flex align-items-center">
                        <i className="pi pi-microsoft text-600 mr-2"></i>
                        <span className="text-600">Microsoft Store</span>
                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$9.50</span>
                    </div>
                </div>
            </div>
            <div className="sm:text-right mt-3 md:mt-0">
                <Rating value={4} readOnly stars={5} cancel={false} />
                <div className="text-sm text-600 mt-2">3K Reviews</div>
            </div>
        </li>
        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div className="flex align-items-center">
                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/logos/logo-slack.png" style={{ width: '30px', height: '30px' }} alt='logo-slack' />
                </span>
                <div>
                    <div className="text-900 font-medium text-xl mb-2">Slack</div>
                    <div className="flex align-items-center">
                        <i className="pi pi-microsoft text-600 mr-2"></i>
                        <span className="text-600">Microsoft Store</span>
                        <span className="inline-flex p-1 bg-purple-100 text-purple-600 font-medium text-sm border-round ml-3">FREE</span>
                    </div>
                </div>
            </div>
            <div className="sm:text-right mt-3 md:mt-0">
                <Rating value={3} readOnly stars={5} cancel={false} />
                <div className="text-sm text-600 mt-2">5K Reviews</div>
            </div>
        </li>
        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
            <div className="flex align-items-center">
                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                    <img src="/demo/images/blocks/logos/logo-spotify.png" style={{ width: '30px', height: '30px' }} alt='logo-spotify' />
                </span>
                <div>
                    <div className="text-900 font-medium text-xl mb-2">Spotify</div>
                    <div className="flex align-items-center">
                        <i className="pi pi-google text-600 mr-2"></i>
                        <span className="text-600">Play Store</span>
                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$19.90</span>
                    </div>
                </div>
            </div>
            <div className="sm:text-right mt-3 md:mt-0">
                <Rating value={3} readOnly="true" stars={5} cancel={false} />
                <div className="text-sm text-600 mt-2">5K Reviews</div>
            </div>
        </li>
    </ul>
</div>
    `;

    const block6 = `
<div className="surface-card shadow-2 border-round px-4 py-2">
    <div className="flex justify-content-between align-items-center mb-2">
        <span className="text-xl text-900 font-medium">Browsers</span>
        <div>
            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu5.current.toggle(event)} />
            <Menu ref={menu5} popup model={items} />
        </div>
    </div>
    <ul className="list-none p-0 m-0">
        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
            <div className="inline-flex align-items-center flex-1">
                <img src="/demo/images/blocks/logos/chrome.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='chrome' />
                <span className="text-900 font-medium">Google Chrome</span>
            </div>
            <div className="flex align-items-center">
                <span className="text-900 font-medium mr-2 text-base md:text-xl">%70</span>
                <Knob value={70} readOnly size={50} valueColor="orange" showValue={false} />
            </div>
        </li>
        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
            <div className="inline-flex align-items-center flex-1">
                <img src="/demo/images/blocks/logos/firefox.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='firefox' />
                <span className="text-900 font-medium">Firefox</span>
            </div>
            <div className="flex align-items-center">
                <span className="text-900 font-medium mr-2 text-base md:text-xl">%40</span>
                <Knob value={40} readOnly size={50} valueColor="royalblue" showValue={false} />
            </div>
        </li>
        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
            <div className="inline-flex align-items-center flex-1">
                <img src="/demo/images/blocks/logos/safari.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='safari' />
                <span className="text-900 font-medium">Safari</span>
            </div>
            <div className="flex align-items-center">
                <span className="text-900 font-medium mr-2 text-base md:text-xl">%20</span>
                <Knob value={20} readOnly size={50} valueColor="slategray" showValue={false} />
            </div>
        </li>
        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
            <div className="inline-flex align-items-center flex-1">
                <img src="/demo/images/blocks/logos/opera.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='opera' />
                <span className="text-900 font-medium">Opera</span>
            </div>
            <div className="flex align-items-center">
                <span className="text-900 font-medium mr-2 text-base md:text-xl">%10</span>
                <Knob value={70} readOnly size={50} valueColor="darkslateblue" showValue={false} />
            </div>
        </li>
        <li className="py-3 flex flex-row md:align-items-center md:justify-content-between">
            <div className="inline-flex align-items-center flex-1">
                <img src="/demo/images/blocks/logos/edge.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='edge' />
                <span className="text-900 font-medium">Edge</span>
            </div>
            <div className="flex align-items-center">
                <span className="text-900 font-medium mr-2 text-base md:text-xl">%8</span>
                <Knob value={8} readOnly size="50" valueColor="mediumpurple" showValue={false} />
            </div>
        </li>
    </ul>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Stacked List</div>
            <BlockViewer header="Avatars with Links" code={block1} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <span className="text-xl text-900 font-medium">Team Members</span>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                            <Menu ref={menu1} popup model={items} />
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="flex">
                                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                <div className="mr-0 md:mr-8">
                                    <span className="block text-900 font-medium mb-1">Janette Hudson</span>
                                    <div className="text-600">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-nowrap">
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="flex">
                                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                <div className="mr-0 md:mr-8">
                                    <span className="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                                    <div className="text-600">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-nowrap">
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="flex">
                                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                <div className="mr-0 md:mr-8">
                                    <span className="block text-900 font-medium mb-1">Arlene McCoy</span>
                                    <div className="text-600">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-nowrap">
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="flex">
                                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                <div className="mr-0 md:mr-8">
                                    <span className="block text-900 font-medium mb-1">Jacob Jones</span>
                                    <div className="text-600">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-nowrap">
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="flex">
                                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mr-3" style={{ width: '45px', height: '45px' }} />
                                <div className="mr-0 md:mr-8">
                                    <span className="block text-900 font-medium mb-1">James Cooper</span>
                                    <div className="text-600">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-nowrap">
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github" />
                                <Button className="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook" />
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Stats with Progress Bars" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <span className="text-xl text-900 font-medium">Best Selling Products</span>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
                            <Menu ref={menu2} popup model={items} />
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                                <span className="text-600">Clothing</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-orange-500 h-full" style={{ width: '50%' }}></div>
                                </div>
                                <span className="text-orange-500 ml-3 font-medium">%50</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                                <span className="text-600">Accessories</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-cyan-500 h-full" style={{ width: '16%' }}></div>
                                </div>
                                <span className="text-cyan-500 ml-3 font-medium">%16</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                                <span className="text-600">Accessories</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-pink-500 h-full" style={{ width: '67%' }}></div>
                                </div>
                                <span className="text-pink-500 ml-3 font-medium">%67</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                                <span className="text-600">Office</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-green-500 h-full" style={{ width: '35%' }}></div>
                                </div>
                                <span className="text-green-500 ml-3 font-medium">%35</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                                <span className="text-600">Accessories</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-purple-500 h-full" style={{ width: '75%' }}></div>
                                </div>
                                <span className="text-purple-500 ml-3 font-medium">%75</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div className="mr-8 md:mr-8">
                                <span className="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                                <span className="text-600">Clothing</span>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden" style={{ height: '8px', width: '200px' }}>
                                    <div className="bg-teal-500 h-full" style={{ width: '40%' }}></div>
                                </div>
                                <span className="text-teal-500 ml-3 font-medium">%40</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Content Links with Actions" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="text-xl text-900 font-medium mb-5">Latest News</div>
                    <ul className="list-none p-0 m-0">
                        <li className="pb-3 border-bottom-1 surface-border">
                            <div className="font-medium text-900 mb-2">Aenean euismod elementum</div>
                            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Vitae turpis massa sed elementum tempus egestas sed sed risus.
                                In metus vulputate eu scelerisque felis imperdiet proin.</div>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border">
                            <div className="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                                Elementum eu facilisis sed odio morbi.</div>
                        </li>
                        <li className="py-3 border-bottom-1 surface-border">
                            <div className="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                            <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                        </li>
                    </ul>
                    <div className="flex justify-content-between pt-3">
                        <Button label="Clear All" className="p-button-outlined p-button-secondary w-6 mr-2" />
                        <Button label="New Entry" className="p-button-outlined w-6 ml-2" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored Rows" code={block4} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <span className="text-xl text-900 font-medium">Recent Invoices</span>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu3.current.toggle(event)} />
                            <Menu ref={menu3} popup model={items} />
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-yellow-50 border-yellow-500" style={{ borderRadius: '10px' }}>
                            <div>
                                <div>
                                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-yellow-200">
                                        <i className="pi pi-file text-yellow-700"></i>
                                    </span>
                                    <span className="text-yellow-700 font-bold ml-2">Jenny Wilson</span>
                                </div>
                                <p className="text-yellow-700 mt-2 mb-0">Due <span className="font-medium">10/09/2021</span></p>
                            </div>
                            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                                <span className="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PENDING</span>
                                <div className="text-right ml-3">
                                    <span className="text-yellow-700 font-bold">120.00</span>
                                    <p className="mt-1 mb-0 text-yellow-700">EUR</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500" style={{ borderRadius: '10px' }}>
                            <div>
                                <div>
                                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-200">
                                        <i className="pi pi-file text-green-600"></i>
                                    </span>
                                    <span className="text-green-700 font-bold ml-2">Dianne Russell</span>
                                </div>
                                <p className="text-green-700 mt-2 mb-0">Due <span className="font-medium">21/10/2021</span></p>
                            </div>
                            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                                <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PAID</span>
                                <div className="text-right ml-3">
                                    <span className="text-green-700 font-bold">82.50</span>
                                    <p className="mt-1 mb-0 text-green-700">EUR</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500" style={{ borderRadius: '10px' }}>
                            <div>
                                <div>
                                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-200">
                                        <i className="pi pi-file text-green-600"></i>
                                    </span>
                                    <span className="text-green-700 font-bold ml-2">Jerome Bell</span>
                                </div>
                                <p className="text-green-700 mt-2 mb-0">Due <span className="font-medium">20/12/2021</span></p>
                            </div>
                            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                                <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>PAID</span>
                                <div className="text-right ml-3">
                                    <span className="text-green-700 font-bold">250.00</span>
                                    <p className="mt-1 mb-0 text-green-700">EUR</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-pink-50 border-pink-500" style={{ borderRadius: '10px' }}>
                            <div>
                                <div>
                                    <span className="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-pink-200">
                                        <i className="pi pi-file text-pink-500"></i>
                                    </span>
                                    <span className="text-pink-500 font-bold ml-2">Courtney Henry</span>
                                </div>
                                <p className="text-pink-500 mt-2 mb-0">Due <span className="font-medium">01/05/2021</span></p>
                            </div>
                            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                                <span className="bg-pink-400 text-pink-50 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>UNPAID</span>
                                <div className="text-right ml-3">
                                    <span className="text-pink-500 font-bold">60.00</span>
                                    <p className="mt-1 mb-0 text-pink-500">EUR</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Image, Meta and Rating" code={block5} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <span className="text-xl text-900 font-medium">Top Downloads</span>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu4.current.toggle(event)} />
                            <Menu ref={menu4} popup model={items} />
                        </div>

                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                            <div className="flex align-items-center">
                                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                                    <img src="/demo/images/blocks/logos/logo-pwd.png" style={{ width: '30px', height: '30px' }} alt='logo-pwd' />
                                </span>
                                <div>
                                    <div className="text-900 font-medium text-xl mb-2">1Password</div>
                                    <div className="flex align-items-center">
                                        <i className="pi pi-apple text-600 mr-2"></i>
                                        <span className="text-600">App Store</span>
                                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$12.24</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-right mt-3 md:mt-0">
                                <Rating value={3} readOnly stars={5} cancel={false} />
                                <div className="text-sm text-600 mt-2">10K Reviews</div>
                            </div>
                        </li>
                        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                            <div className="flex align-items-center">
                                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                                    <img src="/demo/images/blocks/logos/logo-evernote.png" style={{ width: '30px', height: '30px' }} alt='logo-evernote' />
                                </span>
                                <div>
                                    <div className="text-900 font-medium text-xl mb-2">Evernote</div>
                                    <div className="flex align-items-center">
                                        <i className="pi pi-apple text-600 mr-2"></i>
                                        <span className="text-600">App Store</span>
                                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$20.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-right mt-3 md:mt-0">
                                <Rating value={2} readOnly stars={5} cancel={false} />
                                <div className="text-sm text-600 mt-2">2K Reviews</div>
                            </div>
                        </li>
                        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                            <div className="flex align-items-center">
                                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                                    <img src="/demo/images/blocks/logos/logo-dropbox.png" style={{ width: '30px', height: '30px' }} alt='logo-dropbox' />
                                </span>
                                <div>
                                    <div className="text-900 font-medium text-xl mb-2">Dropbox</div>
                                    <div className="flex align-items-center">
                                        <i className="pi pi-microsoft text-600 mr-2"></i>
                                        <span className="text-600">Microsoft Store</span>
                                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$9.50</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-right mt-3 md:mt-0">
                                <Rating value={4} readOnly stars={5} cancel={false} />
                                <div className="text-sm text-600 mt-2">3K Reviews</div>
                            </div>
                        </li>
                        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                            <div className="flex align-items-center">
                                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                                    <img src="/demo/images/blocks/logos/logo-slack.png" style={{ width: '30px', height: '30px' }} alt='logo-slack' />
                                </span>
                                <div>
                                    <div className="text-900 font-medium text-xl mb-2">Slack</div>
                                    <div className="flex align-items-center">
                                        <i className="pi pi-microsoft text-600 mr-2"></i>
                                        <span className="text-600">Microsoft Store</span>
                                        <span className="inline-flex p-1 bg-purple-100 text-purple-600 font-medium text-sm border-round ml-3">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-right mt-3 md:mt-0">
                                <Rating value={3} readOnly stars={5} cancel={false} />
                                <div className="text-sm text-600 mt-2">5K Reviews</div>
                            </div>
                        </li>
                        <li className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
                            <div className="flex align-items-center">
                                <span className="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style={{ width: '58px', height: '58px', borderRadius: '10px' }}>
                                    <img src="/demo/images/blocks/logos/logo-spotify.png" style={{ width: '30px', height: '30px' }} alt='logo-spotify'/>
                                </span>
                                <div>
                                    <div className="text-900 font-medium text-xl mb-2">Spotify</div>
                                    <div className="flex align-items-center">
                                        <i className="pi pi-google text-600 mr-2"></i>
                                        <span className="text-600">Play Store</span>
                                        <span className="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$19.90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-right mt-3 md:mt-0">
                                <Rating value={3} readOnly="true" stars={5} cancel={false} />
                                <div className="text-sm text-600 mt-2">5K Reviews</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="With Graph" code={block6} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card shadow-2 border-round px-4 py-2">
                    <div className="flex justify-content-between align-items-center mb-2">
                        <span className="text-xl text-900 font-medium">Browsers</span>
                        <div>
                            <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu5.current.toggle(event)} />
                            <Menu ref={menu5} popup model={items} />
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
                            <div className="inline-flex align-items-center flex-1">
                                <img src="/demo/images/blocks/logos/chrome.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='chrome'/>
                                <span className="text-900 font-medium">Google Chrome</span>
                            </div>
                            <div className="flex align-items-center mt-3 md:mt-3">
                                <span className="text-900 font-medium mr-2 text-base md:text-xl">%70</span>
                                <Knob value={70} readOnly size={50} valueColor="orange" showValue={false} />
                            </div>
                        </li>
                        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
                            <div className="inline-flex align-items-center flex-1">
                                <img src="/demo/images/blocks/logos/firefox.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='firefox' />
                                <span className="text-900 font-medium">Firefox</span>
                            </div>
                            <div className="flex align-items-center mt-3 md:mt-3">
                                <span className="text-900 font-medium mr-2 text-base md:text-xl">%40</span>
                                <Knob value={40} readOnly size={50} valueColor="royalblue" showValue={false} />
                            </div>
                        </li>
                        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
                            <div className="inline-flex align-items-center flex-1">
                                <img src="/demo/images/blocks/logos/safari.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='safari' />
                                <span className="text-900 font-medium">Safari</span>
                            </div>
                            <div className="flex align-items-center mt-3 md:mt-3">
                                <span className="text-900 font-medium mr-2 text-base md:text-xl">%20</span>
                                <Knob value={20} readOnly size={50} valueColor="slategray" showValue={false} />
                            </div>
                        </li>
                        <li className="border-bottom-1 surface-border py-3 flex flex-row md:align-items-center md:justify-content-between">
                            <div className="inline-flex align-items-center flex-1">
                                <img src="/demo/images/blocks/logos/opera.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='opera'/>
                                <span className="text-900 font-medium">Opera</span>
                            </div>
                            <div className="flex align-items-center mt-3 md:mt-3">
                                <span className="text-900 font-medium mr-2 text-base md:text-xl">%10</span>
                                <Knob value={70} readOnly size={50} valueColor="darkslateblue" showValue={false} />
                            </div>
                        </li>
                        <li className="py-3 flex flex-row md:align-items-center md:justify-content-between">
                            <div className="inline-flex align-items-center flex-1">
                                <img src="/demo/images/blocks/logos/edge.svg" className="mr-2 md:mr-3" style={{ width: '32px', height: '32px' }} alt='edge' />
                                <span className="text-900 font-medium">Edge</span>
                            </div>
                            <div className="flex align-items-center mt-3 md:mt-3">
                                <span className="text-900 font-medium mr-2 text-base md:text-xl">%8</span>
                                <Knob value={8} readOnly size="50" valueColor="mediumpurple" showValue={false} />
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>
        </>
    )
}

export default StackedList;
