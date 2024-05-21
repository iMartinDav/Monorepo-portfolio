import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Menu } from "primereact/menu";
import BlockViewer from "../../../demo/components/BlockViewer";

const GridList = () => {
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [value, setValue] = useState(null);

    const items = [
        {
            label: "Options",
            items: [
                { label: "Reports", icon: "pi pi-fw pi-chart-line" },
                { label: "Search", icon: "pi pi-fw pi-search" },
            ],
        },
    ];

    const block1 = `
<div className="grid grid-nogutter">
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="1" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">Lindsay Connor</span>
                    <span className="text-600 font-medium mb-2">Test Engineer</span>
                    <span className="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="2" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">James McAvoy</span>
                    <span className="text-600 font-medium mb-2">Project Manager</span>
                    <span className="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="3" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">Aisha Jones</span>
                    <span className="text-600 font-medium mb-2">Designer</span>
                    <span className="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="4" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">Roberto Fox</span>
                    <span className="text-600 font-medium mb-2">QA Engineer</span>
                    <span className="bg-orange-50 text-orange-400 border-round inline-flex py-1 px-2 text-sm">Author</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="5" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">Jenny Wilson</span>
                    <span className="text-600 font-medium mb-2">Scrum Master</span>
                    <span className="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-4 p-3">
        <div className="surface-card shadow-2 border-round p-4">
            <div className="flex border-bottom-1 surface-border pb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-5.png" style={{ width: '70px', height: '70px' }} className="mr-3" alt="6" />
                <div className="flex flex-column align-items-start">
                    <span className="text-lg text-900 font-medium mb-1">Claire Flores</span>
                    <span className="text-600 font-medium mb-2">Developer</span>
                    <span className="bg-teal-50 text-teal-400 border-round inline-flex py-1 px-2 text-sm">Subscriber</span>
                </div>
            </div>
            <div className="flex justify-content-between pt-4">
                <Button label="View" icon="pi pi-search" className="p-button-outlined p-button-secondary w-6 mr-2" />
                <Button label="Follow" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-6 ml-2" />
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="grid grid-nogutter">
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="1" />
                <span className="text-xl text-900 font-medium mb-2">Jane Fox</span>
                <span className="text-600 font-medium mb-2">Project Manager</span>
                <span className="text-600 surface-200 p-2 border-round">Subscriber</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="2" />
                <span className="text-xl text-900 font-medium mb-2">Robert Wilkins</span>
                <span className="text-600 font-medium mb-2">Developer</span>
                <span className="text-600 surface-200 p-2 border-round">Editor</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="3" />
                <span className="text-xl text-900 font-medium mb-2">Jenny Wilson</span>
                <span className="text-600 font-medium mb-2">Marketing</span>
                <span className="text-600 surface-200 p-2 border-round">Subscriber</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="4" />
                <span className="text-xl text-900 font-medium mb-2">Alberto Flores</span>
                <span className="text-600 font-medium mb-2">Accounting</span>
                <span className="text-600 surface-200 p-2 border-round">Moderator</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="5" />
                <span className="text-xl text-900 font-medium mb-2">Regina Miles</span>
                <span className="text-600 font-medium mb-2">Developer</span>
                <span className="text-600 surface-200 p-2 border-round">Contributor</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-3.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="6" />
                <span className="text-xl text-900 font-medium mb-2">Gary Richards</span>
                <span className="text-600 font-medium mb-2">Designer</span>
                <span className="text-600 surface-200 p-2 border-round">Subscriber</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="7" />
                <span className="text-xl text-900 font-medium mb-2">Nelly Cooper</span>
                <span className="text-600 font-medium mb-2">Sales Specialist</span>
                <span className="text-600 surface-200 p-2 border-round">Editor</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 md:col-6 xl:col-3 p-3">
        <div className="surface-card shadow-2 border-round p-3">
            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                <img src="/demo/images/blocks/avatars/circle/avatar-m-4.png" style={{ width: '70px', height: '70px' }} className="mb-3" alt="8" />
                <span className="text-xl text-900 font-medium mb-2">Cody Roberts</span>
                <span className="text-600 font-medium mb-2">Designer</span>
                <span className="text-600 surface-200 p-2 border-round">Author</span>
            </div>
            <div className="flex pt-3">
                <div className="w-6 pr-2">
                    <Button icon="pi pi-user-plus" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
                <div className="w-6 pl-2">
                    <Button icon="pi pi-send" className="p-button-outlined p-button-secondary w-full" style={{ borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-ground">
    <div className="grid">
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/bracelet.jpg" alt="bracelet" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Bamboo Watch</span>
                    <span className="text-600 font-medium mb-3">Duis Aute Irure</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$9.66</span>
                    <Rating value={3} readOnly stars={5} cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/galaxy-earrings.jpg" alt="galaxy-earrings" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Black Watch</span>
                    <span className="text-600 font-medium mb-3">Ullam libero</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$12.45</span>
                    <Rating readOnly stars={5} cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/shoes.jpg" alt="shoes" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Shoes</span>
                    <span className="text-600 font-medium mb-3">Eveniet magnam</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$21.50</span>
                    <Rating value={3} readOnly stars={3} cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/yoga-mat.jpg" alt="yoga-mat" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Yoga-Mat</span>
                    <span className="text-600 font-medium mb-3">Quis minus soluta</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$15.00</span>
                    <Rating value={3} readOnly="true" stars="5" cancel={false}></Rating>
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/headphones.jpg" alt="headphones" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Headphones</span>
                    <span className="text-600 font-medium mb-3">Sunt facere tempora</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$44.50</span>
                    <Rating value={3} readOnly="true" stars="5" cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/pink-purse.jpg" alt="pink-purse" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Lime Band</span>
                    <span className="text-600 font-medium mb-3">Lorem Ipsum Dolor</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$5.90</span>
                    <Rating value={3} readOnly="true" stars="5" cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/purple-gemstone-necklace.jpg" alt="purple-gemstone-necklace" className="mb-3 w-9" />
                    <span className="text-xl text-900 font-medium mb-2">Necklace</span>
                    <span className="text-600 font-medium mb-3">Sit amet consectetur</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$21.90</span>
                    <Rating value={3} readOnly="true" stars="5" cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-4">
                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="/demo/images/blocks/products/purple-t-shirt.jpg" className="mb-3 w-9" alt="purple-t-shirt" />
                    <span className="text-xl text-900 font-medium mb-2">T-Shirt</span>
                    <span className="text-600 font-medium mb-3">Adipisicing elit</span>
                    <span className="text-2xl text-800 block mb-3 font-semibold">$18.50</span>
                    <Rating value={3} readOnly="true" stars="5" cancel={false} />
                </div>
                <div className="flex pt-3 justify-content-between align-items-center">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" className="p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-text p-button-secondary" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground">
    <div className="grid">
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style={{ width: '48px', height: '48px', borderRadius: '10px' }} className="bg-teal-100 inline-flex align-items-center justify-content-center mr-3">
                    <i className="pi pi-shield text-teal-600 text-3xl"></i>
                </div>
                <div>
                    <span className="text-900 text-xl font-medium mb-2">Security</span>
                    <p className="mt-1 mb-0 text-600 font-medium text-sm">Proin libero nunc</p>
                </div>
                <div className="ml-auto">
                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                    <Menu ref={menu1} popup model={items} />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style={{ width: '48px', height: '48px', borderRadius: '10px' }} className="bg-pink-100 inline-flex align-items-center justify-content-center mr-3">
                    <i className="pi pi-users text-pink-600 text-3xl"></i>
                </div>
                <div>
                    <span className="text-900 text-xl font-medium mb-2">Staff</span>
                    <p className="mt-1 mb-0 text-600 font-medium text-sm">Lorem ipsum dolor</p>
                </div>
                <div className="ml-auto">
                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu2.current.toggle(event)} />
                    <Menu ref={menu2} popup model={items} />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style={{ width: '48px', height: '48px', borderRadius: '10px' }} className="bg-orange-100 inline-flex align-items-center justify-content-center mr-3">
                    <i className="pi pi-wallet text-orange-600 text-3xl"></i>
                </div>
                <div>
                    <span className="text-900 text-xl font-medium mb-2">Finance</span>
                    <p className="mt-1 mb-0 text-600 font-medium text-sm">Vestibulum lorem</p>
                </div>
                <div className="ml-auto">
                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
                    <Menu ref={menu1} popup model={items} />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-ground">
    <div className="grid">
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-1.png" alt="nature" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">sed-risus</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 971 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Yesterday 11:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">2732x1690</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-2.png" alt="nature-2" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">morbit-blandit</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 350 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Today 09:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-3.png" alt="nature-3" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">neque-aliquam</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 458 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Yesterday 11:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1280x720</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-4.png" alt="nature-4" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">solestie-ac-final</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 102 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Today 15:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-5.png" alt="nature-5" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">neqeu-viverra</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 432 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Today 14:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">2732x-1690</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-6.png" alt="nature-6" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">enim-nec-dui</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 330 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Today 10:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-7.png" alt="nature-7" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">cursus-sit</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 1001 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Yesterday 20:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1280x720</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                <img src="/demo/images/blocks/nature/nature-8.png"alt="nature-8" className="mb-3 w-full" />
                <div className="flex justify-content-between align-items-start">
                    <div>
                        <div className="text-xl font-medium text-900 mb-2">odio-ut-enim</div>
                        <p className="mt-0 mb-3 text-600">PNG image - 660 KB</p>
                    </div>
                    <Button icon="pi pi-download" className="p-button-rounded p-button-text" />
                </div>
                <ul className="list-none m-0 p-0">
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Created</span>
                        <span className="text-900 font-medium text-sm">Today 11:30</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span className="text-600 font-medium text-sm">Dimensions</span>
                        <span className="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                        <span className="text-600 font-medium text-sm">Resolution</span>
                        <span className="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-ground">
    <div className="grid">
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div className="p-4">
                    <div className="flex align-items-center">
                        <span className="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3" style={{ width: '38px', height: '38px' }}>
                            <i className="pi pi-globe text-xl text-green-600"></i>
                        </span>
                        <span className="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div className="text-900 my-3 text-xl font-medium">Quam adipiscing vitae proin sagittis.</div>
                    <p className="mt-0 mb-3 text-700 line-height-3">Eget sit amet tellus cras adipiscing enim. At quis risus sed vulputate odio. Proin libero nunc consequat interdum varius sit amet.</p>
                </div>
                <div className="px-4 py-3 surface-100 text-right">
                    <Button icon="pi pi-arrow-right" label="More" className="p-button-rounded p-button-success" iconPos="right" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div className="p-4">
                    <div className="flex align-items-center">
                        <span className="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3" style={{ width: '38px', height: '38px' }}>
                            <i className="pi pi-briefcase text-xl text-yellow-600"></i>
                        </span>
                        <span className="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div className="text-900 my-3 text-xl font-medium">Proin libero nunci</div>
                    <p className="mt-0 mb-3 text-700 line-height-3">Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Vulputate odio ut enim blandit volutpat maecenas. Convallis tellus id interdum velit.</p>
                </div>
                <div className="px-4 py-3 surface-100 text-right">
                    <Button icon="pi pi-download" label="Load" className="p-button-rounded p-button-warning" iconPos="right" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div className="p-4">
                    <div className="flex align-items-center">
                        <span className="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3" style={{ width: '38px', height: '38px' }}>
                            <i className="pi pi-image text-xl text-purple-600"></i>
                        </span>
                        <span className="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div className="text-900 my-3 text-xl font-medium"> At obcaecati quos ipsam laboriosam.</div>
                    <p className="mt-0 mb-3 text-700 line-height-3">Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Id neque aliquam vestibulum morbi blandit cursus risus at ipsum.</p>
                </div>
                <div className="px-4 py-3 surface-100 text-right">
                    <Button icon="pi pi-bookmark" label="Save" className="p-button-rounded p-button-help" iconPos="right" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<div className="shadow-2 border-round surface-card p-4">
    <div className="flex align-items-center justify-content-between mb-4">
        <span className="text-xl font-medium text-900">Files</span>
        <Button icon="pi pi-refresh" className="p-button-rounded p-button-outlined" />
    </div>
    <div className="grid">
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/word.svg" alt="word" style={{ width: '48', height: '48' }} />
                </div>
                <span className="text-900 font-medium">resume.docx</span>
                <div className="text-600 text-sm mt-2">520KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/excel.svg" style={{ width: '48', height: '48' }} alt="excel"/>
                </div>
                <span className="text-900 font-medium">customers.xlsx</span>
                <div className="text-600 text-sm mt-2">120KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/excel.svg" style={{ width: '48', height: '48' }} alt="excel"/>
                </div>
                <span className="text-900 font-medium">stats.xlsx</span>
                <div className="text-600 text-sm mt-2">500KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/ps.svg" style={{ width: '48', height: '48' }} alt="ps"/>
                </div>
                <span className="text-900 font-medium">mock.ps</span>
                <div className="text-600 text-sm mt-2">220KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/atom.svg" style={{ width: '48', height: '48' }} alt="atom" />
                </div>
                <span className="text-900 font-medium">template.js</span>
                <div className="text-600 text-sm mt-2">10KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/code.svg" style={{ width: '48', height: '48' }} alt="code"/>
                </div>
                <span className="text-900 font-medium">main.css</span>
                <div className="text-600 text-sm mt-2">10KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/ai.svg" style={{ width: '48', height: '48' }} alt="ai"/>
                </div>
                <span className="text-900 font-medium">poc.ai</span>
                <div className="text-600 text-sm mt-2">4.2MB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/word.svg" alt="word" style={{ width: '48', height: '48' }} />
                </div>
                <span className="text-900 font-medium">sales.docx</span>
                <div className="text-600 text-sm mt-2">420KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/word.svg" alt="word" style={{ width: '48', height: '48' }} />
                </div>
                <span className="text-900 font-medium">mynotes.one</span>
                <div className="text-600 text-sm mt-2">60KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/code.svg" style={{ width: '48', height: '48' }} alt="code"/>
                </div>
                <span className="text-900 font-medium">layout.css</span>
                <div className="text-600 text-sm mt-2">25KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/word.svg" alt="word" style={{ width: '48', height: '48' }} />
                </div>
                <span className="text-900 font-medium">reports.docx</span>
                <div className="text-600 text-sm mt-2">120KB</div>
            </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div className="text-center">
                <div className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style={{ width: '90px', height: '90px' }}>
                    <img src="/demo/images/blocks/file/ps.svg" style={{ width: '48', height: '48' }} alt="ps"/>
                </div>
                <span className="text-900 font-medium">design.psd</span>
                <div className="text-600 text-sm mt-2">1.2MB</div>
            </div>
        </div>
    </div>
</div>
    `;

    const block8 = `    
<div className="grid shadow-2 border-round surface-card">
    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-blue-50 w-3rem h-3rem mb-4">
                <i className="pi pi-image text-xl text-blue-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Velit aliquet sagittis id consectetur purus. Proin libero nunc consequat interdum. Amet nisl purus in mollis nunc sed id semper risus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>
        </div>
    </div>
    <div className="col-12 md:col-6 border-bottom-1 surface-border">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-yellow-50 w-3rem h-3rem mb-4">
                <i className="pi pi-map text-xl text-yellow-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Feugiat nibh sed pulvinar proin gravida hendrerit.</p>
        </div>
    </div>
    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-cyan-50 w-3rem h-3rem mb-4">
                <i className="pi pi-tag text-xl text-cyan-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Integer eget aliquet nibh praesent tristique magna. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Enim nunc faucibus a pellentesque sit amet porttitor.</p>
        </div>
    </div>
    <div className="col-12 md:col-6 border-bottom-1 surface-border">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-green-50 w-3rem h-3rem mb-4">
                <i className="pi pi-send text-xl text-green-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Aliquet porttitor lacus luctus accumsan tortor. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Mauris vitae ultricies leo integer malesuada nunc. Leo duis ut diam quam nulla porttitor massa id.</p>
        </div>
    </div>
    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 md:border-bottom-none surface-border">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-pink-50 w-3rem h-3rem mb-4">
                <i className="pi pi-qrcode text-xl text-pink-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Ultricies mi quis hendrerit dolor magna eget est lorem. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
        </div>
    </div>
    <div className="col-12 md:col-6">
        <div className="m-3">
            <span className="inline-flex border-circle align-items-center justify-content-center bg-orange-50 w-3rem h-3rem mb-4">
                <i className="pi pi-users text-xl text-orange-500"></i>
            </span>
            <div className="text-900 font-medium text-xl mb-3">Card Title</div>
            <p className="mt-0 text-600 line-height-3">Nunc sed id semper risus in hendrerit gravida rutrum. Congue mauris rhoncus aenean vel elit scelerisque. Massa sed elementum tempus egestas sed sed risus. Feugiat vivamus at augue eget arcu dictum.</p>
        </div>
    </div>
</div>
    `;

    const block9 = `    
<section className="grid">
    <div className="col-12 xl:col-6">
        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
            <div className="relative">
                <img src="/demo/images/blocks/hotels/h4.jpeg" alt="Image" className="border-round w-full h-full md:w-14rem md:h-14rem" />
                <p
                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        top: '3%',
                        left: '3%'
                    }}>
                    Superhost
                </p>
            </div>
            <div className="flex flex-column w-full gap-3">
                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                    <p className="font-semibold text-lg mt-0 mb-0">Private room in Amsterdam</p>
                    <Rating value={4} readOnly="true" stars="5" cancel={false} className="flex-shrink-0" />
                </div>
                <p className="font-normal text-lg text-600 mt-0 mb-0">Comfortable single room</p>
                <div className="flex flex-wrap justify-content-between xl:h-2rem mt-auto">
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">2 Guests</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-wifi mr-2"></i>
                        <span className="font-medium">1 GBit</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-check-circle mr-2"></i>
                        <span className="font-medium">Verified</span>
                    </p>
                </div>
                <p className="font-semibold text-4xl text-900 mt-0 mb-2">$1,140</p>
            </div>
        </article>
    </div>
    <div className="col-12 xl:col-6">
        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
            <div className="relative">
                <img src="/demo/images/blocks/hotels/h5.jpeg" alt="Image" className="border-round w-full h-full md:w-14rem md:h-14rem" />
                <p
                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        top: '3%',
                        left: '3%'
                    }}>
                    Superhost
                </p>
            </div>
            <div className="flex flex-column w-full gap-3">
                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                    <p className="font-semibold text-lg mt-0 mb-0">Home in Amsterdam</p>
                    <Rating value={4} readOnly="true" stars="5" cancel={false} className="flex-shrink-0"></Rating>
                </div>
                <p className="font-normal text-lg text-600 mt-0 mb-0">Large comfortable room in Sarphatistraat</p>
                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">2 Guests</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-wifi mr-2"></i>
                        <span className="font-medium">1 GBit</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-check-circle mr-2"></i>
                        <span className="font-medium">Verified</span>
                    </p>
                </div>
                <div className="flex">
                    <p className="font-semibold text-4xl text-900 mt-0 mb-2 mr-2">$510</p>
                    <span className="text-sm text-gray-500">$</span>
                    <p className="font-semibold text-4xl text-900 mt-0 mb-2 line-through text-gray-500">850</p>
                </div>
            </div>
        </article>
    </div>
    <div className="col-12 xl:col-6">
        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
            <div className="relative">
                <img src="/demo/images/blocks/hotels/h6.jpeg" alt="Image" className="border-round w-full h-full md:w-14rem md:h-14rem" />
                <p
                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        top: '3%',
                        left: '3%'
                    }}>
                    On Sale
                </p>
            </div>
            <div className="flex flex-column w-full gap-3">
                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                    <p className="font-semibold text-lg mt-0 mb-0">Luxurious spacious suite Jordan</p>
                    <Rating value={4} readOnly="true" stars="5" cancel={false} className="flex-shrink-0"></Rating>
                </div>
                <p className="font-normal text-lg text-600 mt-0 mb-0">Guest suite</p>
                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">2 Guests</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-wifi mr-2"></i>
                        <span className="font-medium">500 MBit</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-check-circle mr-2"></i>
                        <span className="font-medium">Verified</span>
                    </p>
                </div>
                <p className="font-semibold text-4xl text-900 mt-0 mb-2">$980</p>
            </div>
        </article>
    </div>
    <div className="col-12 xl:col-6">
        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
            <div className="relative">
                <img src="/demo/images/blocks/hotels/h7.jpeg" alt="Image" className="border-round w-full h-full md:w-14rem md:h-14rem" />
                <p
                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        top: '3%',
                        left: '3%'
                    }}>
                    Rare
                </p>
            </div>
            <div className="flex flex-column w-full gap-3">
                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                    <p className="font-semibold text-lg mt-0 mb-0">Beautiful Studio by the Amstel</p>
                    <Rating value={4} readOnly="true" stars="5" cancel={false} className="flex-shrink-0"></Rating>
                </div>
                <p className="font-normal text-lg text-600 mt-0 mb-0">Loft in Stadsdeel Oost</p>
                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">4 Guests</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-wifi mr-2"></i>
                        <span className="font-medium">10 GBit</span>
                    </p>
                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                        <i className="pi pi-check-circle mr-2"></i>
                        <span className="font-medium">Verified</span>
                    </p>
                </div>
                <p className="font-semibold text-4xl text-900 mt-0 mb-2">$1,250</p>
            </div>
        </article>
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Grid List</div>
            <BlockViewer
                header="Cards with Actions"
                code={block1}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 surface-ground"
            >
                <div className="grid grid-nogutter">
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="1"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        Lindsay Connor
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        Test Engineer
                                    </span>
                                    <span className="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">
                                        Editor
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="2"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        James McAvoy
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        Project Manager
                                    </span>
                                    <span className="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">
                                        Contributor
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="3"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        Aisha Jones
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        Designer
                                    </span>
                                    <span className="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">
                                        Editor
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="4"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        Roberto Fox
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        QA Engineer
                                    </span>
                                    <span className="bg-orange-50 text-orange-400 border-round inline-flex py-1 px-2 text-sm">
                                        Author
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="5"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        Jenny Wilson
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        Scrum Master
                                    </span>
                                    <span className="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">
                                        Contributor
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-4 p-3">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex border-bottom-1 surface-border pb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-5.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mr-3"
                                    alt="6"
                                />
                                <div className="flex flex-column align-items-start">
                                    <span className="text-xl text-900 font-medium mb-1">
                                        Claire Flores
                                    </span>
                                    <span className="text-600 font-medium mb-2">
                                        Developer
                                    </span>
                                    <span className="bg-teal-50 text-teal-400 border-round inline-flex py-1 px-2 text-sm">
                                        Subscriber
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-content-between pt-4">
                                <Button
                                    label="View"
                                    icon="pi pi-search"
                                    className="p-button-outlined p-button-secondary w-6 mr-2"
                                />
                                <Button
                                    label="Follow"
                                    icon="pi pi-user-plus"
                                    className="p-button-outlined p-button-secondary w-6 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Condensed Cards with Actions"
                code={block2}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="grid grid-nogutter">
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="1"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Jane Fox
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Project Manager
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Subscriber
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="2"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Robert Wilkins
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Developer
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Editor
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="3"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Jenny Wilson
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Marketing
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Subscriber
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="4"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Alberto Flores
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Accounting
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Moderator
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="5"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Regina Miles
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Developer
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Contributor
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-3.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="6"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Gary Richards
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Designer
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Subscriber
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="7"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Nelly Cooper
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Sales Specialist
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Editor
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 xl:col-3 p-3">
                        <div className="surface-card shadow-2 border-round p-3">
                            <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-4.png"
                                    style={{ width: "70px", height: "70px" }}
                                    className="mb-3"
                                    alt="8"
                                />
                                <span className="text-xl text-900 font-medium mb-2">
                                    Cody Roberts
                                </span>
                                <span className="text-600 font-medium mb-2">
                                    Designer
                                </span>
                                <span className="text-600 surface-200 p-2 border-round">
                                    Author
                                </span>
                            </div>
                            <div className="flex pt-3">
                                <div className="w-6 pr-2">
                                    <Button
                                        icon="pi pi-user-plus"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                                <div className="w-6 pl-2">
                                    <Button
                                        icon="pi pi-send"
                                        className="p-button-outlined p-button-secondary w-full"
                                        style={{ borderRadius: "30px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Centered"
                code={block3}
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-ground">
                    <div className="grid">
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/bracelet.jpg"
                                        alt="bracelet"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Bamboo Watch
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Duis Aute Irure
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $9.66
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly
                                        stars={5}
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/galaxy-earrings.jpg"
                                        alt="galaxy-earrings"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Black Watch
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Ullam libero
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $12.45
                                    </span>
                                    <Rating readOnly stars={5} cancel={false} />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/shoes.jpg"
                                        alt="shoes"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Shoes
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Eveniet magnam
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $21.50
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly
                                        stars={3}
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/yoga-mat.jpg"
                                        alt="yoga-mat"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Yoga-Mat
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Quis minus soluta
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $15.00
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                    ></Rating>
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/headphones.jpg"
                                        alt="headphones"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Headphones
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Sunt facere tempora
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $44.50
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/pink-purse.jpg"
                                        alt="pink-purse"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Lime Band
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Lorem Ipsum Dolor
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $5.90
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/purple-gemstone-necklace.jpg"
                                        alt="purple-gemstone-necklace"
                                        className="mb-3 w-9"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        Necklace
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Sit amet consectetur
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $21.90
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div className="surface-card shadow-2 border-round p-4">
                                <div className="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                                    <img
                                        src="/demo/images/blocks/products/purple-t-shirt.jpg"
                                        className="mb-3 w-9"
                                        alt="purple-t-shirt"
                                    />
                                    <span className="text-xl text-900 font-medium mb-2">
                                        T-Shirt
                                    </span>
                                    <span className="text-600 font-medium mb-3">
                                        Adipisicing elit
                                    </span>
                                    <span className="text-2xl text-800 block mb-3 font-semibold">
                                        $18.50
                                    </span>
                                    <Rating
                                        value={3}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                    />
                                </div>
                                <div className="flex pt-3 justify-content-between align-items-center">
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        className="p-button-text"
                                    />
                                    <Button
                                        icon="pi pi-heart"
                                        className="p-button-text p-button-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Icons"
                code={block4}
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-ground">
                    <div className="grid">
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "10px",
                                    }}
                                    className="bg-teal-100 inline-flex align-items-center justify-content-center mr-3"
                                >
                                    <i className="pi pi-shield text-teal-600 text-3xl"></i>
                                </div>
                                <div>
                                    <span className="text-900 text-xl font-medium mb-2">
                                        Security
                                    </span>
                                    <p className="mt-1 mb-0 text-600 font-medium text-sm">
                                        Proin libero nunc
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <Button
                                        icon="pi pi-ellipsis-v"
                                        className="p-button-text p-button-plain p-button-rounded"
                                        onClick={(event) =>
                                            menu1.current.toggle(event)
                                        }
                                    />
                                    <Menu ref={menu1} popup model={items} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "10px",
                                    }}
                                    className="bg-pink-100 inline-flex align-items-center justify-content-center mr-3"
                                >
                                    <i className="pi pi-users text-pink-600 text-3xl"></i>
                                </div>
                                <div>
                                    <span className="text-900 text-xl font-medium mb-2">
                                        Staff
                                    </span>
                                    <p className="mt-1 mb-0 text-600 font-medium text-sm">
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <Button
                                        icon="pi pi-ellipsis-v"
                                        className="p-button-text p-button-plain p-button-rounded"
                                        onClick={(event) =>
                                            menu2.current.toggle(event)
                                        }
                                    />
                                    <Menu ref={menu2} popup model={items} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 border-round shadow-2 flex align-items-center surface-card">
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "10px",
                                    }}
                                    className="bg-orange-100 inline-flex align-items-center justify-content-center mr-3"
                                >
                                    <i className="pi pi-wallet text-orange-600 text-3xl"></i>
                                </div>
                                <div>
                                    <span className="text-900 text-xl font-medium mb-2">
                                        Finance
                                    </span>
                                    <p className="mt-1 mb-0 text-600 font-medium text-sm">
                                        Vestibulum lorem
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <Button
                                        icon="pi pi-ellipsis-v"
                                        className="p-button-text p-button-plain p-button-rounded"
                                        onClick={(event) =>
                                            menu1.current.toggle(event)
                                        }
                                    />
                                    <Menu ref={menu1} popup model={items} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Images"
                code={block5}
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-ground">
                    <div className="grid">
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-1.png"
                                    alt="nature"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            sed-risus
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 971 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Yesterday 11:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            2732x1690
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-2.png"
                                    alt="nature-2"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            morbit-blandit
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 350 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Today 09:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1920x1080
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-3.png"
                                    alt="nature-3"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            neque-aliquam
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 458 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Yesterday 11:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1280x720
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-4.png"
                                    alt="nature-4"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            solestie-ac-final
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 102 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Today 15:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1920x1080
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-5.png"
                                    alt="nature-5"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            neqeu-viverra
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 432 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Today 14:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            2732x-1690
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-6.png"
                                    alt="nature-6"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            enim-nec-dui
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 330 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Today 10:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1920x1080
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-7.png"
                                    alt="nature-7"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            cursus-sit
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 1001 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Yesterday 20:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1280x720
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 p-3">
                            <div
                                className="surface-card shadow-2 border-round p-3"
                                style={{ borderRadius: "6px" }}
                            >
                                <img
                                    src="/demo/images/blocks/nature/nature-8.png"
                                    alt="nature-8"
                                    className="mb-3 w-full"
                                />
                                <div className="flex justify-content-between align-items-start">
                                    <div>
                                        <div className="text-xl font-medium text-900 mb-2">
                                            odio-ut-enim
                                        </div>
                                        <p className="mt-0 mb-3 text-600">
                                            PNG image - 660 KB
                                        </p>
                                    </div>
                                    <Button
                                        icon="pi pi-download"
                                        className="p-button-rounded p-button-text"
                                    />
                                </div>
                                <ul className="list-none m-0 p-0">
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Created
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            Today 11:30
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                        <span className="text-600 font-medium text-sm">
                                            Dimensions
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            1920x1080
                                        </span>
                                    </li>
                                    <li className="px-0 py-2 flex justify-content-between align-items-center">
                                        <span className="text-600 font-medium text-sm">
                                            Resolution
                                        </span>
                                        <span className="text-900 font-medium text-sm">
                                            144x144
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Cards with Actions"
                code={block6}
                containerclassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="surface-ground">
                    <div className="grid">
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                                <div className="p-4">
                                    <div className="flex align-items-center">
                                        <span
                                            className="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3"
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                            }}
                                        >
                                            <i className="pi pi-globe text-xl text-green-600"></i>
                                        </span>
                                        <span className="text-900 font-medium text-2xl">
                                            Card Title
                                        </span>
                                    </div>
                                    <div className="text-900 my-3 text-xl font-medium">
                                        Quam adipiscing vitae proin sagittis.
                                    </div>
                                    <p className="mt-0 mb-3 text-700 line-height-3">
                                        Eget sit amet tellus cras adipiscing
                                        enim. At quis risus sed vulputate odio.
                                        Proin libero nunc consequat interdum
                                        varius sit amet.
                                    </p>
                                </div>
                                <div className="px-4 py-3 surface-100 text-right">
                                    <Button
                                        icon="pi pi-arrow-right"
                                        label="More"
                                        className="p-button-rounded p-button-success"
                                        iconPos="right"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                                <div className="p-4">
                                    <div className="flex align-items-center">
                                        <span
                                            className="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3"
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                            }}
                                        >
                                            <i className="pi pi-briefcase text-xl text-yellow-600"></i>
                                        </span>
                                        <span className="text-900 font-medium text-2xl">
                                            Card Title
                                        </span>
                                    </div>
                                    <div className="text-900 my-3 text-xl font-medium">
                                        Proin libero nunci
                                    </div>
                                    <p className="mt-0 mb-3 text-700 line-height-3">
                                        Molestie ac feugiat sed lectus
                                        vestibulum mattis ullamcorper. Vulputate
                                        odio ut enim blandit volutpat maecenas.
                                        Convallis tellus id interdum velit.
                                    </p>
                                </div>
                                <div className="px-4 py-3 surface-100 text-right">
                                    <Button
                                        icon="pi pi-download"
                                        label="Load"
                                        className="p-button-rounded p-button-warning"
                                        iconPos="right"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                                <div className="p-4">
                                    <div className="flex align-items-center">
                                        <span
                                            className="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3"
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                            }}
                                        >
                                            <i className="pi pi-image text-xl text-purple-600"></i>
                                        </span>
                                        <span className="text-900 font-medium text-2xl">
                                            Card Title
                                        </span>
                                    </div>
                                    <div className="text-900 my-3 text-xl font-medium">
                                        {" "}
                                        At obcaecati quos ipsam laboriosam.
                                    </div>
                                    <p className="mt-0 mb-3 text-700 line-height-3">
                                        Rhoncus urna neque viverra justo nec
                                        ultrices dui sapien eget. Id neque
                                        aliquam vestibulum morbi blandit cursus
                                        risus at ipsum.
                                    </p>
                                </div>
                                <div className="px-4 py-3 surface-100 text-right">
                                    <Button
                                        icon="pi pi-bookmark"
                                        label="Save"
                                        className="p-button-rounded p-button-help"
                                        iconPos="right"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="In Card"
                code={block7}
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="shadow-2 border-round surface-card p-4">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <span className="text-xl font-medium text-900">
                            Files
                        </span>
                        <Button
                            icon="pi pi-refresh"
                            className="p-button-rounded p-button-outlined"
                        />
                    </div>
                    <div className="grid">
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/word.svg"
                                        alt="word"
                                        style={{ width: "48", height: "48" }}
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    resume.docx
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    520KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/excel.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="excel"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    customers.xlsx
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    120KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/excel.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="excel"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    stats.xlsx
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    500KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/ps.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="ps"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    mock.ps
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    220KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/atom.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="atom"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    template.js
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    10KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/code.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="code"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    main.css
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    10KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/ai.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="ai"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    poc.ai
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    4.2MB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/word.svg"
                                        alt="word"
                                        style={{ width: "48", height: "48" }}
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    sales.docx
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    420KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/word.svg"
                                        alt="word"
                                        style={{ width: "48", height: "48" }}
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    mynotes.one
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    60KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/code.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="code"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    layout.css
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    25KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/word.svg"
                                        alt="word"
                                        style={{ width: "48", height: "48" }}
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    reports.docx
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    120KB
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
                            <div className="text-center">
                                <div
                                    className="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto"
                                    style={{ width: "90px", height: "90px" }}
                                >
                                    <img
                                        src="/demo/images/blocks/file/ps.svg"
                                        style={{ width: "48", height: "48" }}
                                        alt="ps"
                                    />
                                </div>
                                <span className="text-900 font-medium">
                                    design.psd
                                </span>
                                <div className="text-600 text-sm mt-2">
                                    1.2MB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Shared Borders"
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
                code={block8}
            >
                <div className="grid shadow-2 border-round surface-card">
                    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-blue-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-image text-xl text-blue-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Velit aliquet sagittis id consectetur purus.
                                Proin libero nunc consequat interdum. Amet nisl
                                purus in mollis nunc sed id semper risus.
                                Feugiat pretium nibh ipsum consequat nisl vel
                                pretium lectus.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 border-bottom-1 surface-border">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-yellow-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-map text-xl text-yellow-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Ut morbi tincidunt augue interdum velit euismod
                                in pellentesque massa. Facilisi etiam dignissim
                                diam quis enim lobortis scelerisque. Feugiat
                                nibh sed pulvinar proin gravida hendrerit.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-cyan-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-tag text-xl text-cyan-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Integer eget aliquet nibh praesent tristique
                                magna. Aliquet porttitor lacus luctus accumsan
                                tortor posuere ac ut consequat. Enim nunc
                                faucibus a pellentesque sit amet porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 border-bottom-1 surface-border">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-green-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-send text-xl text-green-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Aliquet porttitor lacus luctus accumsan tortor.
                                Lorem mollis aliquam ut porttitor leo a diam
                                sollicitudin tempor. Mauris vitae ultricies leo
                                integer malesuada nunc. Leo duis ut diam quam
                                nulla porttitor massa id.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 md:border-right-1 border-bottom-1 md:border-bottom-none surface-border">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-pink-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-qrcode text-xl text-pink-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Ultricies mi quis hendrerit dolor magna eget est
                                lorem. Porttitor massa id neque aliquam
                                vestibulum morbi blandit cursus risus. Elit
                                pellentesque habitant morbi tristique senectus
                                et netus et malesuada.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="m-3">
                            <span className="inline-flex border-circle align-items-center justify-content-center bg-orange-50 w-3rem h-3rem mb-4">
                                <i className="pi pi-users text-xl text-orange-500"></i>
                            </span>
                            <div className="text-900 font-medium text-xl mb-3">
                                Card Title
                            </div>
                            <p className="mt-0 text-600 line-height-3">
                                Nunc sed id semper risus in hendrerit gravida
                                rutrum. Congue mauris rhoncus aenean vel elit
                                scelerisque. Massa sed elementum tempus egestas
                                sed sed risus. Feugiat vivamus at augue eget
                                arcu dictum.
                            </p>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Listing Cards"
                containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8"
                code={block9}
                new
            >
                <section className="grid">
                    <div className="col-12 xl:col-6">
                        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
                            <div className="relative">
                                <img
                                    src="/demo/images/blocks/hotels/h4.jpeg"
                                    alt="Image"
                                    className="border-round w-full h-full md:w-14rem md:h-14rem"
                                />
                                <p
                                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.3)",
                                        backdropFilter: "blur(10px)",
                                        top: "3%",
                                        left: "3%",
                                    }}
                                >
                                    Superhost
                                </p>
                            </div>
                            <div className="flex flex-column w-full gap-3">
                                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                                    <p className="font-semibold text-lg mt-0 mb-0">
                                        Private room in Amsterdam
                                    </p>
                                    <Rating
                                        value={4}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                        className="flex-shrink-0"
                                    />
                                </div>
                                <p className="font-normal text-lg text-600 mt-0 mb-0">
                                    Comfortable single room
                                </p>
                                <div className="flex flex-wrap justify-content-between xl:h-2rem mt-auto">
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            2 Guests
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-wifi mr-2"></i>
                                        <span className="font-medium">
                                            1 GBit
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-check-circle mr-2"></i>
                                        <span className="font-medium">
                                            Verified
                                        </span>
                                    </p>
                                </div>
                                <p className="font-semibold text-4xl text-900 mt-0 mb-2">
                                    $1,140
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 xl:col-6">
                        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
                            <div className="relative">
                                <img
                                    src="/demo/images/blocks/hotels/h5.jpeg"
                                    alt="Image"
                                    className="border-round w-full h-full md:w-14rem md:h-14rem"
                                />
                                <p
                                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.3)",
                                        backdropFilter: "blur(10px)",
                                        top: "3%",
                                        left: "3%",
                                    }}
                                >
                                    Superhost
                                </p>
                            </div>
                            <div className="flex flex-column w-full gap-3">
                                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                                    <p className="font-semibold text-lg mt-0 mb-0">
                                        Home in Amsterdam
                                    </p>
                                    <Rating
                                        value={4}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                        className="flex-shrink-0"
                                    ></Rating>
                                </div>
                                <p className="font-normal text-lg text-600 mt-0 mb-0">
                                    Large comfortable room in Sarphatistraat
                                </p>
                                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            2 Guests
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-wifi mr-2"></i>
                                        <span className="font-medium">
                                            1 GBit
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-check-circle mr-2"></i>
                                        <span className="font-medium">
                                            Verified
                                        </span>
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="font-semibold text-4xl text-900 mt-0 mb-2 mr-2">
                                        $510
                                    </p>
                                    <span className="text-sm text-gray-500">
                                        $
                                    </span>
                                    <p className="font-semibold text-4xl text-900 mt-0 mb-2 line-through text-gray-500">
                                        850
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 xl:col-6">
                        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
                            <div className="relative">
                                <img
                                    src="/demo/images/blocks/hotels/h6.jpeg"
                                    alt="Image"
                                    className="border-round w-full h-full md:w-14rem md:h-14rem"
                                />
                                <p
                                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.3)",
                                        backdropFilter: "blur(10px)",
                                        top: "3%",
                                        left: "3%",
                                    }}
                                >
                                    On Sale
                                </p>
                            </div>
                            <div className="flex flex-column w-full gap-3">
                                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                                    <p className="font-semibold text-lg mt-0 mb-0">
                                        Luxurious spacious suite Jordan
                                    </p>
                                    <Rating
                                        value={4}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                        className="flex-shrink-0"
                                    ></Rating>
                                </div>
                                <p className="font-normal text-lg text-600 mt-0 mb-0">
                                    Guest suite
                                </p>
                                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            2 Guests
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-wifi mr-2"></i>
                                        <span className="font-medium">
                                            500 MBit
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-check-circle mr-2"></i>
                                        <span className="font-medium">
                                            Verified
                                        </span>
                                    </p>
                                </div>
                                <p className="font-semibold text-4xl text-900 mt-0 mb-2">
                                    $980
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 xl:col-6">
                        <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border surface-card">
                            <div className="relative">
                                <img
                                    src="/demo/images/blocks/hotels/h7.jpeg"
                                    alt="Image"
                                    className="border-round w-full h-full md:w-14rem md:h-14rem"
                                />
                                <p
                                    className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.3)",
                                        backdropFilter: "blur(10px)",
                                        top: "3%",
                                        left: "3%",
                                    }}
                                >
                                    Rare
                                </p>
                            </div>
                            <div className="flex flex-column w-full gap-3">
                                <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                                    <p className="font-semibold text-lg mt-0 mb-0">
                                        Beautiful Studio by the Amstel
                                    </p>
                                    <Rating
                                        value={4}
                                        readOnly="true"
                                        stars="5"
                                        cancel={false}
                                        className="flex-shrink-0"
                                    ></Rating>
                                </div>
                                <p className="font-normal text-lg text-600 mt-0 mb-0">
                                    Loft in Stadsdeel Oost
                                </p>
                                <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">
                                            4 Guests
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-wifi mr-2"></i>
                                        <span className="font-medium">
                                            10 GBit
                                        </span>
                                    </p>
                                    <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                                        <i className="pi pi-check-circle mr-2"></i>
                                        <span className="font-medium">
                                            Verified
                                        </span>
                                    </p>
                                </div>
                                <p className="font-semibold text-4xl text-900 mt-0 mb-2">
                                    $1,250
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default GridList;
