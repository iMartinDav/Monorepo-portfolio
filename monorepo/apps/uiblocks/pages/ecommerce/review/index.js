import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import BlockViewer from "../../../demo/components/BlockViewer";

const Review = () => {
    const [reviewOrder, setReviewOrder] = useState(0);

    const reviewOrderOptions = [
        { label: "Most recent", value: 0 },
        { label: "Most popular", value: 1 },
        { label: "Most viewed", value: 2 },
    ];

    const block1 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-2xl mb-5">Your Voice</div>
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 xl:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card" style={{ borderRadius: '1rem' }}>
                    <div className="flex">
                        <div className="flex flex-column w-9 pr-4">
                            <span className="mb-4 text-900 font-medium">Jenny Wilson</span>
                            <span className="mb-3">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                            <p className="text-700 m-0 p-0 line-height-3">Maecenas sed enim ut sem viverra aliquet eget sit amet. Faucibus nisl tincidunt eget nullam non nisi est.</p>
                        </div>
                        <div className="w-3 flex align-items-start justify-content-end">
                            <img src="/demo/images/blocks/ecommerce/review/review-1-1.png" className="w-full" alt="review-1-1"/>
                        </div>
                    </div>
                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="/demo/images/blocks/ecommerce/review/review-1-2.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="review-1-2" />
                        <div>
                            <span className="block mb-2 text-900 font-medium">Product Title</span>
                            <p className="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 xl:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card" style={{ borderRadius: '1rem' }}>
                    <div className="flex">
                        <div className="flex flex-column w-9 pr-4">
                            <span className="mb-4 text-900 font-medium">Wade Warren</span>
                            <span className="mb-3">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                            <p className="text-700 m-0 p-0 line-height-3">Pellentesque eu tincidunt tortor aliquam nulla facilisi. Nunc consequat interdum varius sit amet mattis. 🔥</p>
                        </div>
                        <div className="w-3 flex align-items-start justify-content-end">
                            <img src="/demo/images/blocks/ecommerce/review/review-1-3.png" className="w-full" alt="review-1-3"/>
                        </div>
                    </div>
                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="/demo/images/blocks/ecommerce/review/review-1-4.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="review-1-4" />
                        <div>
                            <span className="block mb-2 text-900 font-medium">Product Title</span>
                            <p className="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 xl:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card" style={{ borderRadius: '1rem' }}>
                    <div className="flex">
                        <div className="flex flex-column w-9 pr-4">
                            <span className="mb-4 text-900 font-medium">Jenny Wilson</span>
                            <span className="mb-3">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                            <p className="text-700 m-0 p-0 line-height-3">Cursus sit amet dictum sit amet justo donec enim diam. Eget gravida cum sociis natoque penatibus et magnis. 👏</p>
                        </div>
                        <div className="w-3 flex align-items-start justify-content-end">
                            <img src="/demo/images/blocks/ecommerce/review/review-1-5.png" className="w-full" alt="review-1-5"/>
                        </div>
                    </div>
                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                        <img src="/demo/images/blocks/ecommerce/review/review-1-6.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="review-1-6"/>
                        <div>
                            <span className="block mb-2 text-900 font-medium">Product Title</span>
                            <p className="text-600 m-0 p-0 text-sm">Type of Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-6">
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-2 w-1rem">5</span>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-9 border-round"></div>
                    </div>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-2 w-1rem">4</span>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-6 border-round"></div>
                    </div>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-2 w-1rem">3</span>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-2 border-round"></div>
                    </div>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-2 w-1rem">2</span>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-4 border-round"></div>
                    </div>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-2 w-1rem">1</span>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-3 border-round"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-6 flex flex-column align-items-center justify-content-center mt-4 md:mt-0">
            <span className="text-5xl font-medium text-900 mb-3">3.0</span>
            <span className="mb-2">
                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                <i className="pi pi-star-fill text-300 text-2xl"></i>
            </span>
            <a tabIndex="0" className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">85 Reviews</a>
        </div>
    </div>
    <div className="border-top-1 surface-border mt-5 py-5">
        <div className="flex align-items-center justify-content-between mb-5">
            <Button label="Write a review" />
            <Dropdown value={reviewOrder} onChange={(e) => setReviewOrder(e.value)} options={reviewOrderOptions} />
        </div>
        <div className="grid -mt-3 -ml-3 -mr-3">
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-f-1"/>
                            <span className="text-900 font-medium mr-3">Code Fisher</span>
                            <span className="text-sm font-medium text-500">1d ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Etiam tempor orci eu lobortis elementum nibh tellus. Auctor eu augue ut lectus arcu bibendum at varius vel.
                            Id aliquet lectus proin nibh nisl. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-f-2"/>
                            <span className="text-900 font-medium mr-3">Eleanor Pena</span>
                            <span className="text-sm font-medium text-500">3d ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Scelerisque varius morbi enim nunc. Arcu bibendum at varius vel pharetra vel turpis nunc eget.
                            Elit ut aliquam purus sit amet luctus. Aliquam etiam erat velit scelerisque in.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-f-3"/>
                            <span className="text-900 font-medium mr-3">Claire Jones</span>
                            <span className="text-sm font-medium text-500">4d ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Laoreet id donec ultrices tincidunt arcu non sodales neque. A pellentesque sit amet porttitor eget.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-m-1" />
                            <span className="text-900 font-medium mr-3">Robert Fox</span>
                            <span className="text-sm font-medium text-500">1w ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-f-4" />
                            <span className="text-900 font-medium mr-3">Katie Murphy</span>
                            <span className="text-sm font-medium text-500">1w ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
                            Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6">
                <div className="p-2">
                    <div className="border-1 surface-border border-round p-3">
                        <div className="flex align-items-center mb-3">
                            <img src="/demo/images/blocks/avatars/circle/avatar-f-5.png" className="w-2rem h-2rem flex-shrink-0 mr-2" alt="avatar-f-5" />
                            <span className="text-900 font-medium mr-3">Arlene McCoy</span>
                            <span className="text-sm font-medium text-500">2d ago</span>
                            <span className="ml-auto">
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                <i className="pi pi-star-fill text-300"></i>
                            </span>
                        </div>
                        <p className="m-0 p-0 line-height-3 text-600">
                            Cursus eget nunc scelerisque viverra mauris in aliquam. Sed ullamcorper morbi tincidunt ornare massa.
                            Eu tincidunt tortor aliquam nulla facilisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-4">
            <div className="font-medium text-xl text-900 mb-3">Share your experience</div>
            <p className="text-600 p-0 mt-0 mb-3 line-height-3">Orci a scelerisque purus semper eget duis at tellus at. Ut diam quam nulla porttitor.</p>
            <Button label="Write a review" className="p-button-rounded" />
        </div>
        <div className="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
            <div>
                <span className="text-5xl text-900 font-bold mr-2">190</span>
                <span className="text-5xl text-600">Reviews</span>
                <div className="mt-3 text-center">
                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                    <i className="pi pi-star-fill text-300 text-2xl "></i>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4">
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-1 w-1rem">5</span>
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-9 border-round"></div>
                    </div>
                    <span className="text-500 font-medium ml-2">75%</span>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-1 w-1rem">4</span>
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-6 border-round"></div>
                    </div>
                    <span className="text-500 font-medium ml-2">50%</span>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-1 w-1rem">3</span>
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-2 border-round"></div>
                    </div>
                    <span className="text-500 font-medium ml-2">20%</span>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-1 w-1rem">2</span>
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-4 border-round"></div>
                    </div>
                    <span className="text-500 font-medium ml-2">40%</span>
                </li>
                <li className="flex align-items-center mb-2">
                    <span className="text-900 font-medium mr-1 w-1rem">1</span>
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                        <div className="h-full bg-yellow-500 w-3 border-round"></div>
                    </div>
                    <span className="text-500 font-medium ml-2">30%</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="mt-5">
        <ul className="list-none m-0 p-0">
            <li className="py-5 border-top-1 surface-border">
                <div className="flex align-items-center justify-content-between mb-3">
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="avatar-m-1"/>
                        <div className="flex flex-column">
                            <span className="text-900 font-medium mb-1">Robert Fox</span>
                            <span className="text-500 font-medium text-sm">February 3, 2022</span>
                        </div>
                    </div>
                    <div className="flex align-items-center">
                        <span className="mr-2">
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span className="font-medium">5</span>
                    </div>
                </div>
                <p className="text-600 p-0 m-0 line-height-3">Scelerisque varius morbi enim nunc. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elit ut aliquam purus sit amet luctus. Aliquam etiam erat velit scelerisque in.</p>
            </li>
            <li className="py-5 border-top-1 surface-border">
                <div className="flex align-items-center justify-content-between mb-3">
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="avatar-f-3" />
                        <div className="flex flex-column">
                            <span className="text-900 font-medium mb-1">Savannah Williams</span>
                            <span className="text-500 font-medium text-sm">February 4, 2022</span>
                        </div>
                    </div>
                    <div className="flex align-items-center">
                        <span className="mr-2">
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span className="font-medium">5</span>
                    </div>
                </div>
                <p className="text-600 p-0 m-0 line-height-3">Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.</p>
            </li>
            <li className="py-5 border-top-1 surface-border">
                <div className="flex align-items-center justify-content-between mb-3">
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="w-3rem h-3rem flex-shrink-0 mr-3" alt="avatar-f-2"/>
                        <div className="flex flex-column">
                            <span className="text-900 font-medium mb-1">Kathryn Murphy</span>
                            <span className="text-500 font-medium text-sm">February 5, 2022</span>
                        </div>
                    </div>
                    <div className="flex align-items-center">
                        <span className="mr-2">
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <i className="pi pi-star-fill text-yellow-500"></i>
                        </span>
                        <span className="font-medium">5</span>
                    </div>
                </div>
                <p className="text-600 p-0 m-0 line-height-3">Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. </p>
            </li>
        </ul>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-3xl font-bold mb-4">Customer Reviews</div>
    <div className="flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between mb-5">
        <div className="flex align-items-center mb-5 md:mb-0">
            <span className="mr-3">
                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                <i className="pi pi-star-fill text-pink-500 text-xl"></i>
            </span>
            <a tabIndex="0" className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">20 Reviews</a>
        </div>
        <Button label="Write a review" className="p-button-outlined" />
    </div>
    <ul className="list-none p-0 m-0">
        <li className="border-top-1 surface-border py-5">
            <div className="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div className="mt-2">
                        <span className="text-900 font-medium mr-2">Kathryn Murphy</span>
                        <span className="text-500 block sm:inline mt-1 sm:mt-0">on Feb 17, 2022</span>
                    </div>
                </div>
                <Button icon="pi pi-exclamation-circle" label="Report" className="p-button-text" />
            </div>
            <div className="mb-2 text-900 text-2xl font-medium">Spectacular!</div>
            <p className="text-600 line-height-3 mt-0 mb-3 p-0">Quis varius quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Sit amet mauris commodo quis.</p>
            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0" />
                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span className="text-900 font-medium">Peak Representative</span>
                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">Quis varius quam quisque id diam vel quam elementum pulvinar.
                        Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Sit amet mauris commodo quis.</p>
                </div>
            </div>
        </li>
        <li className="border-top-1 surface-border py-5">
            <div className="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div className="mt-2">
                        <span className="text-900 font-medium mr-2">Brooklyn Simmons</span>
                        <span className="text-500 block sm:inline mt-1 sm:mt-0">on Mar 17, 2022</span>
                    </div>
                </div>
                <Button icon="pi pi-exclamation-circle" label="Report" className="p-button-text" />
            </div>
            <div className="mb-2 text-900 text-2xl font-medium">Great Deal!</div>
            <p className="text-600 line-height-3 mt-0 mb-3 p-0">Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Egestas diam in arcu cursus euismod quis viverra nibh cras.</p>
            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0" />
                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span className="text-900 font-medium">Peak Representative</span>
                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet nulla facilisi morbi tempus iaculis.
                        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
                </div>
            </div>
        </li>
        <li className="border-top-1 surface-border py-5">
            <div className="flex align-items-center justify-content-between mb-4">
                <div>
                    <span>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                        <i className="pi pi-star-fill text-pink-500"></i>
                    </span>
                    <div className="mt-2">
                        <span className="text-900 font-medium mr-2">Annette Black</span>
                        <span className="text-500 block sm:inline mt-1 sm:mt-0">on Mar 20, 2022</span>
                    </div>
                </div>
                <Button icon="pi pi-exclamation-circle" label="Report" className="p-button-text" />
            </div>
            <div className="mb-2 text-900 text-2xl font-medium">I love it so much!</div>
            <p className="text-600 line-height-3 mt-0 mb-3 p-0">Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Turpis massa tincidunt dui ut ornare lectus. Sit amet nisl suscipit adipiscing bibendum est.</p>
            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0" />
                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                    <span className="text-900 font-medium">Peak Representative</span>
                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">Ut faucibus pulvinar elementum integer. Neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
                </div>
            </div>
        </li>
    </ul>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Review</div>
            <BlockViewer header="With Image" code={block1}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-2xl mb-5">
                        Your Voice
                    </div>
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 xl:col-4">
                            <div className="p-2">
                                <div
                                    className="shadow-2 p-4 surface-card"
                                    style={{ borderRadius: "1rem" }}
                                >
                                    <div className="flex">
                                        <div className="flex flex-column w-9 pr-4">
                                            <span className="mb-4 text-900 font-medium">
                                                Jenny Wilson
                                            </span>
                                            <span className="mb-3">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                            <p className="text-700 m-0 p-0 line-height-3">
                                                Maecenas sed enim ut sem viverra
                                                aliquet eget sit amet. Faucibus
                                                nisl tincidunt eget nullam non
                                                nisi est.
                                            </p>
                                        </div>
                                        <div className="w-3 flex align-items-start justify-content-end">
                                            <img
                                                src="/demo/images/blocks/ecommerce/review/review-1-1.png"
                                                className="w-full"
                                                alt="review-1-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/ecommerce/review/review-1-2.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="review-1-2"
                                        />
                                        <div>
                                            <span className="block mb-2 text-900 font-medium">
                                                Product Title
                                            </span>
                                            <p className="text-600 m-0 p-0 text-sm">
                                                Type of Product
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 xl:col-4">
                            <div className="p-2">
                                <div
                                    className="shadow-2 p-4 surface-card"
                                    style={{ borderRadius: "1rem" }}
                                >
                                    <div className="flex">
                                        <div className="flex flex-column w-9 pr-4">
                                            <span className="mb-4 text-900 font-medium">
                                                Wade Warren
                                            </span>
                                            <span className="mb-3">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                            <p className="text-700 m-0 p-0 line-height-3">
                                                Pellentesque eu tincidunt tortor
                                                aliquam nulla facilisi. Nunc
                                                consequat interdum varius sit
                                                amet mattis. 🔥
                                            </p>
                                        </div>
                                        <div className="w-3 flex align-items-start justify-content-end">
                                            <img
                                                src="/demo/images/blocks/ecommerce/review/review-1-3.png"
                                                className="w-full"
                                                alt="review-1-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/ecommerce/review/review-1-4.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="review-1-4"
                                        />
                                        <div>
                                            <span className="block mb-2 text-900 font-medium">
                                                Product Title
                                            </span>
                                            <p className="text-600 m-0 p-0 text-sm">
                                                Type of Product
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 xl:col-4">
                            <div className="p-2">
                                <div
                                    className="shadow-2 p-4 surface-card"
                                    style={{ borderRadius: "1rem" }}
                                >
                                    <div className="flex">
                                        <div className="flex flex-column w-9 pr-4">
                                            <span className="mb-4 text-900 font-medium">
                                                Jenny Wilson
                                            </span>
                                            <span className="mb-3">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                            <p className="text-700 m-0 p-0 line-height-3">
                                                Cursus sit amet dictum sit amet
                                                justo donec enim diam. Eget
                                                gravida cum sociis natoque
                                                penatibus et magnis. 👏
                                            </p>
                                        </div>
                                        <div className="w-3 flex align-items-start justify-content-end">
                                            <img
                                                src="/demo/images/blocks/ecommerce/review/review-1-5.png"
                                                className="w-full"
                                                alt="review-1-5"
                                            />
                                        </div>
                                    </div>
                                    <div className="border-top-1 surface-border pt-3 mt-3 flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/ecommerce/review/review-1-6.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="review-1-6"
                                        />
                                        <div>
                                            <span className="block mb-2 text-900 font-medium">
                                                Product Title
                                            </span>
                                            <p className="text-600 m-0 p-0 text-sm">
                                                Type of Product
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2x3 Grid" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row">
                        <div className="w-full md:w-6">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-2 w-1rem">
                                        5
                                    </span>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-9 border-round"></div>
                                    </div>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-2 w-1rem">
                                        4
                                    </span>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-6 border-round"></div>
                                    </div>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-2 w-1rem">
                                        3
                                    </span>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-2 border-round"></div>
                                    </div>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-2 w-1rem">
                                        2
                                    </span>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-4 border-round"></div>
                                    </div>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-2 w-1rem">
                                        1
                                    </span>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-3 border-round"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6 flex flex-column align-items-center justify-content-center mt-4 md:mt-0">
                            <span className="text-5xl font-medium text-900 mb-3">
                                3.0
                            </span>
                            <span className="mb-2">
                                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                                <i className="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i>
                                <i className="pi pi-star-fill text-300 text-2xl"></i>
                            </span>
                            <a
                                tabIndex="0"
                                className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium"
                            >
                                85 Reviews
                            </a>
                        </div>
                    </div>
                    <div className="border-top-1 surface-border mt-5 py-5">
                        <div className="flex align-items-center justify-content-between mb-5">
                            <Button label="Write a review" />
                            <Dropdown
                                value={reviewOrder}
                                onChange={(e) => setReviewOrder(e.value)}
                                options={reviewOrderOptions}
                            />
                        </div>
                        <div className="grid -mt-3 -ml-3 -mr-3">
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-f-1"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Code Fisher
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                1d ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Etiam tempor orci eu lobortis
                                            elementum nibh tellus. Auctor eu
                                            augue ut lectus arcu bibendum at
                                            varius vel. Id aliquet lectus proin
                                            nibh nisl. Lorem ipsum dolor sit
                                            amet consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-f-2"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Eleanor Pena
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                3d ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Scelerisque varius morbi enim nunc.
                                            Arcu bibendum at varius vel pharetra
                                            vel turpis nunc eget. Elit ut
                                            aliquam purus sit amet luctus.
                                            Aliquam etiam erat velit scelerisque
                                            in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-f-3"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Claire Jones
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                4d ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Laoreet id donec ultrices tincidunt
                                            arcu non sodales neque. A
                                            pellentesque sit amet porttitor
                                            eget.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-m-1"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Robert Fox
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                1w ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Orci porta non pulvinar neque
                                            laoreet suspendisse interdum
                                            consectetur. Vitae elementum
                                            curabitur vitae nunc sed velit
                                            dignissim sodales ut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-f-4"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Katie Murphy
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                1w ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Sollicitudin nibh sit amet commodo
                                            nulla facilisi nullam vehicula.
                                            Fringilla est ullamcorper eget nulla
                                            facilisi etiam dignissim diam quis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="p-2">
                                    <div className="border-1 surface-border border-round p-3">
                                        <div className="flex align-items-center mb-3">
                                            <img
                                                src="/demo/images/blocks/avatars/circle/avatar-f-5.png"
                                                className="w-2rem h-2rem flex-shrink-0 mr-2"
                                                alt="avatar-f-5"
                                            />
                                            <span className="text-900 font-medium mr-3">
                                                Arlene McCoy
                                            </span>
                                            <span className="text-sm font-medium text-500">
                                                2d ago
                                            </span>
                                            <span className="ml-auto">
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                                <i className="pi pi-star-fill text-300 mr-1"></i>
                                                <i className="pi pi-star-fill text-300"></i>
                                            </span>
                                        </div>
                                        <p className="m-0 p-0 line-height-3 text-600">
                                            Cursus eget nunc scelerisque viverra
                                            mauris in aliquam. Sed ullamcorper
                                            morbi tincidunt ornare massa. Eu
                                            tincidunt tortor aliquam nulla
                                            facilisi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Single Column" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="font-medium text-xl text-900 mb-3">
                                Share your experience
                            </div>
                            <p className="text-600 p-0 mt-0 mb-3 line-height-3">
                                Orci a scelerisque purus semper eget duis at
                                tellus at. Ut diam quam nulla porttitor.
                            </p>
                            <Button
                                label="Write a review"
                                className="p-button-rounded"
                            />
                        </div>
                        <div className="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
                            <div>
                                <span className="text-5xl text-900 font-bold mr-2">
                                    190
                                </span>
                                <span className="text-5xl text-600">
                                    Reviews
                                </span>
                                <div className="mt-3 text-center">
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-300 text-2xl "></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">
                                        5
                                    </span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-9 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">
                                        75%
                                    </span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">
                                        4
                                    </span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-6 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">
                                        50%
                                    </span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">
                                        3
                                    </span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-2 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">
                                        20%
                                    </span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">
                                        2
                                    </span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-4 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">
                                        40%
                                    </span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">
                                        1
                                    </span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div
                                        style={{ height: "7px" }}
                                        className="border-round overflow-hidden flex-auto surface-300"
                                    >
                                        <div className="h-full bg-yellow-500 w-3 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">
                                        30%
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="list-none m-0 p-0">
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="avatar-m-1"
                                        />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">
                                                Robert Fox
                                            </span>
                                            <span className="text-500 font-medium text-sm">
                                                February 3, 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">5</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">
                                    Scelerisque varius morbi enim nunc. Arcu
                                    bibendum at varius vel pharetra vel turpis
                                    nunc eget. Elit ut aliquam purus sit amet
                                    luctus. Aliquam etiam erat velit scelerisque
                                    in.
                                </p>
                            </li>
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="avatar-f-3"
                                        />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">
                                                Savannah Williams
                                            </span>
                                            <span className="text-500 font-medium text-sm">
                                                February 4, 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">5</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">
                                    Orci porta non pulvinar neque laoreet
                                    suspendisse interdum consectetur. Vitae
                                    elementum curabitur vitae nunc sed velit
                                    dignissim sodales ut.
                                </p>
                            </li>
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                            className="w-3rem h-3rem flex-shrink-0 mr-3"
                                            alt="avatar-f-2"
                                        />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">
                                                Kathryn Murphy
                                            </span>
                                            <span className="text-500 font-medium text-sm">
                                                February 5, 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">5</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">
                                    Sollicitudin nibh sit amet commodo nulla
                                    facilisi nullam vehicula. Fringilla est
                                    ullamcorper eget nulla facilisi etiam
                                    dignissim diam quis.{" "}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Seller Comment" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-3xl font-bold mb-4">
                        Customer Reviews
                    </div>
                    <div className="flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between mb-5">
                        <div className="flex align-items-center mb-5 md:mb-0">
                            <span className="mr-3">
                                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                                <i className="pi pi-star-fill text-pink-500 mr-1 text-xl"></i>
                                <i className="pi pi-star-fill text-pink-500 text-xl"></i>
                            </span>
                            <a
                                tabIndex="0"
                                className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium"
                            >
                                20 Reviews
                            </a>
                        </div>
                        <Button
                            label="Write a review"
                            className="p-button-outlined"
                        />
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="border-top-1 surface-border py-5">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <div>
                                    <span>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500"></i>
                                    </span>
                                    <div className="mt-2">
                                        <span className="text-900 font-medium mr-2">
                                            Kathryn Murphy
                                        </span>
                                        <span className="text-500 block sm:inline mt-1 sm:mt-0">
                                            on Feb 17, 2022
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    icon="pi pi-exclamation-circle"
                                    label="Report"
                                    className="p-button-text"
                                />
                            </div>
                            <div className="mb-2 text-900 text-2xl font-medium">
                                Spectacular!
                            </div>
                            <p className="text-600 line-height-3 mt-0 mb-3 p-0">
                                Quis varius quam quisque id diam vel quam
                                elementum pulvinar. Suspendisse interdum
                                consectetur libero id faucibus nisl tincidunt
                                eget. Sit amet mauris commodo quis.
                            </p>
                            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                                <img
                                    src="/demo/images/blocks/logos/peak-500.svg"
                                    alt="Image"
                                    className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0"
                                />
                                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                                    <span className="text-900 font-medium">
                                        Peak Representative
                                    </span>
                                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">
                                        Quis varius quam quisque id diam vel
                                        quam elementum pulvinar. Suspendisse
                                        interdum consectetur libero id faucibus
                                        nisl tincidunt eget. Sit amet mauris
                                        commodo quis.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-top-1 surface-border py-5">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <div>
                                    <span>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500"></i>
                                    </span>
                                    <div className="mt-2">
                                        <span className="text-900 font-medium mr-2">
                                            Brooklyn Simmons
                                        </span>
                                        <span className="text-500 block sm:inline mt-1 sm:mt-0">
                                            on Mar 17, 2022
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    icon="pi pi-exclamation-circle"
                                    label="Report"
                                    className="p-button-text"
                                />
                            </div>
                            <div className="mb-2 text-900 text-2xl font-medium">
                                Great Deal!
                            </div>
                            <p className="text-600 line-height-3 mt-0 mb-3 p-0">
                                Ultricies lacus sed turpis tincidunt id aliquet
                                risus feugiat. Egestas diam in arcu cursus
                                euismod quis viverra nibh cras.
                            </p>
                            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                                <img
                                    src="/demo/images/blocks/logos/peak-500.svg"
                                    alt="Image"
                                    className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0"
                                />
                                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                                    <span className="text-900 font-medium">
                                        Peak Representative
                                    </span>
                                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">
                                        Risus commodo viverra maecenas accumsan
                                        lacus vel facilisis volutpat. Amet nulla
                                        facilisi morbi tempus iaculis. Imperdiet
                                        massa tincidunt nunc pulvinar sapien et
                                        ligula ullamcorper malesuada.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-top-1 surface-border py-5">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <div>
                                    <span>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-pink-500"></i>
                                    </span>
                                    <div className="mt-2">
                                        <span className="text-900 font-medium mr-2">
                                            Annette Black
                                        </span>
                                        <span className="text-500 block sm:inline mt-1 sm:mt-0">
                                            on Mar 20, 2022
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    icon="pi pi-exclamation-circle"
                                    label="Report"
                                    className="p-button-text"
                                />
                            </div>
                            <div className="mb-2 text-900 text-2xl font-medium">
                                I love it so much!
                            </div>
                            <p className="text-600 line-height-3 mt-0 mb-3 p-0">
                                Ullamcorper malesuada proin libero nunc
                                consequat interdum varius sit. Turpis massa
                                tincidunt dui ut ornare lectus. Sit amet nisl
                                suscipit adipiscing bibendum est.
                            </p>
                            <div className="mt-5 flex flex-column sm:flex-row align-items-start sm:align-items-center">
                                <img
                                    src="/demo/images/blocks/logos/peak-500.svg"
                                    alt="Image"
                                    className="w-6rem flex-shrink-0 sm:mr-5 mb-3 sm:mb-0"
                                />
                                <div className="border-200 border-1 border-round p-3 surface-50 flex-auto">
                                    <span className="text-900 font-medium">
                                        Peak Representative
                                    </span>
                                    <p className="text-600 line-height-3 mt-3 mb-0 p-0">
                                        Ut faucibus pulvinar elementum integer.
                                        Neque laoreet suspendisse interdum
                                        consectetur libero id faucibus.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>
        </>
    );
};

export default Review;
