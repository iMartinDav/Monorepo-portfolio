import React from "react";
import { Button } from "primereact/button";
import BlockViewer from "../../../demo/components/BlockViewer";

const PromoSection = () => {
    const block1 = `
<div className="bg-no-repeat bg-cover px-4 py-8 md:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/demo/images/blocks/ecommerce/promosection/promo-section-1-1.jpg')" }}>
    <div className="text-white text-5xl font-bold mb-4 text-white z-1">Promo Title Placeholder</div>
    <p className="line-height-3 mt-0 mb-6 p-0 text-white text-3xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
    <Button label="VIEW THE SHOP" className="p-button-rounded text-2xl" />
</div>
    `;
    const block2 = `
<div className="flex flex-wrap">
    <div className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), linear-gradient(246.36deg, #007261 15.22%, #005347 65.22%)' }}>
        <div className="text-4xl text-white mb-3 font-medium">Promo Title Placeholder</div>
        <p className="line-height-3 mt-0 mb-7 p-0 text-white text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
        <Button label="READ STORY" className="p-button-secondary text-2xl" />
    </div>
    <div className="w-full md:w-6 bg-no-repeat bg-cover" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-2-1.jpg')", minHeight: '400px' }}></div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 px-4 py-8 md:px-6 lg:px-8" style={{ background: 'linear-gradient(116.38deg, #DD364A 0%, #E34D60 28%, #EEEEEE 28.01%, #F0F1F3 64.54%)' }}>
            <div className="text-4xl text-gray-900 mb-3 font-medium">Promo Title Placeholder</div>
            <p className="line-height-3 mt-0 mb-7 p-0 text-gray-900 text-2xl">Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse ultrices.</p>
            <Button label="BUY NOW" className="p-button-secondary text-2xl" />
        </div>
        <div className="hidden lg:block w-6 bg-no-repeat bg-cover" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-3-1.jpg')" }}></div>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column sm:flex-row sm:align-items-center mb-5">
        <span className="text-2xl font-medium text-900">Deal of the Week</span>
        <div className="flex align-items-center flex-auto mt-5 sm:mt-0">
            <div className="bg-indigo-50 w-4rem mx-2" style={{ height: '7px' }}></div>
            <div className="flex align-items-center p-2 bg-indigo-50 border-round">
                <span className="text-indigo-500 text-xl font-medium">Ends in</span>
                <span className="block bg-indigo-500 text-white border-round px-3 py-2 ml-2">12:30:00</span>
            </div>
            <div className="bg-indigo-50 ml-2 flex-auto" style={{ height: '7px' }}></div>
        </div>
    </div>
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div className="p-2">
                <div className="font-medium mb-3">SUBTITLE</div>
                <div className="mb-3">
                    <span className="line-through mr-3 text-600 text-xl">120.00</span>
                    <span className="font-medium text-xl text-pink-500">80.00</span>
                </div>
                <img src="/demo/images/blocks/ecommerce/promosection/promo-section-4-1.jpg" className="block mb-3 w-full" alt="promo-section-4-1" />
                <div className="mb-4 surface-300 border-round overflow-hidden" style={{ height: '.5rem' }}>
                    <div className="surface-900 w-6 h-full"></div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-600">Sold: 35</span>
                    <span className="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div className="p-2">
                <div className="font-medium mb-3">SUBTITLE</div>
                <div className="mb-3">
                    <span className="line-through mr-3 text-600 text-xl">56.00</span>
                    <span className="font-medium text-xl text-pink-500">39.00</span>
                </div>
                <img src="/demo/images/blocks/ecommerce/promosection/promo-section-4-2.jpg" className="block mb-3 w-full" alt="promo-section-4-1"/>
                <div className="mb-4 surface-300 border-round overflow-hidden" style={{ height: '.5rem' }}>
                    <div className="surface-900 w-6 h-full"></div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-600">Sold: 35</span>
                    <span className="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="font-medium mb-3">SUBTITLE</div>
                <div className="mb-3">
                    <span className="line-through mr-3 text-600 text-xl">96.00</span>
                    <span className="font-medium text-xl text-pink-500">45.00</span>
                </div>
                <img src="/demo/images/blocks/ecommerce/promosection/promo-section-4-3.jpg" className="block mb-3 w-full" alt="promo-section-4-3"/>
                <div className="mb-4 surface-300 border-round overflow-hidden" style={{ height: '.5rem' }}>
                    <div className="surface-900 w-6 h-full"></div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-600">Sold: 35</span>
                    <span className="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2">
                <div className="font-medium mb-3">SUBTITLE</div>
                <div className="mb-3">
                    <span className="line-through mr-3 text-600 text-xl">84.00</span>
                    <span className="font-medium text-xl text-pink-500">72.00</span>
                </div>
                <img src="/demo/images/blocks/ecommerce/promosection/promo-section-4-4.jpg" className="block mb-3 w-full" alt="promo-section-4-4" />
                <div className="mb-4 surface-300 border-round overflow-hidden" style={{ height: '.5rem' }}>
                    <div className="surface-900 w-6 h-full"></div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-600">Sold: 35</span>
                    <span className="text-900 font-medium">Available: 50</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="p-2 w-full xl:w-6">
            <div className="bg-no-repeat bg-cover p-3 border-round pr-2" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-1-x.jpg')" }}>
                <div className="border-2 border-round border-gray-900 flex flex-column sm:flex-row overflow-hidden">
                    <div className="flex-1 text-center bg-white-alpha-60 font-medium" style={{ backdropFilter: 'blur(15px)' }}>
                        <div className="p-6 flex flex-column align-items-center">
                            <span className="text-xl text-gray-900 mb-5">Up To</span>
                            <span className="text-xl text-gray-900 mb-5 text-5xl">25 <span className="text-xl text-gray-900">% OFF</span></span>
                            <span className="text-xl text-gray-900">Exclusive JEWELRY</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-no-repeat bg-cover" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-1.jpg')", minHeight: '200px' }}></div>
                </div>
            </div>
        </div>
        <div className="p-2 w-full xl:w-6">
            <div className="bg-no-repeat bg-cover p-3 border-round pr-2" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-2-x.jpg')" }}>
                <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                    <div className="flex-1 text-center bg-dark-alpha-60 font-medium" style={{ backdropFilter: 'blur(15px)' }}>
                        <div className="p-6 flex flex-column align-items-center">
                            <span className="text-xl text-gray-100 mb-5">Up To</span>
                            <span className="text-xl text-gray-100 mb-5 text-5xl">25 <span className="text-xl text-gray-100">% OFF</span></span>
                            <span className="text-xl text-gray-100">Exclusive JEWELRY</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-no-repeat bg-cover" style={{ background: "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-2.jpg')", minHeight: '200px' }}></div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column text-center align-items-center px-5 py-8 bg-cover mb-3" style={{ backgroundImage: "url('/demo/images/blocks/ecommerce/promosection/promo-section-6-1.jpg')" }}>
        <div className="text-5xl font-bold text-gray-900 mb-3">This Is Your Last Chance to Save 50% Off </div>
        <p className="line-height-3 text-gray-700 text-xl font-medium mt-0 mb-5">Black Friday will soon be leaving PrimeLand There is still time to save big this season. </p>
        <Button label="Get Started Today" className="p-ripple p-button-success text-xl"></Button>
    </div>
    <div className="flex flex-column lg:flex-row">
        <div className="flex-1 p-5">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="w-3rem h-3rem block mb-3" alt="avatar-f-1"/>
            <div className="text-900 line-height-3 mb-3">"You won't regret it. I was amazed at the quality of it. I am really satisfied with my it."</div>
            <span className="text-xs font-medium text-900">Brooklyn Simmons</span>
        </div>
        <div className="flex-1 p-5">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="w-3rem h-3rem block mb-3" />
            <div className="text-900 line-height-3 mb-3">"No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it. "</div>
            <span className="text-xs font-medium text-900">Jenny Wilson</span>
        </div>
        <div className="flex-1 p-5">
            <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" className="w-3rem h-3rem mb-3" alt="avatar-f-6" />
            <div className="text-900 line-height-3 mb-3">"We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier."</div>
            <span className="text-xs font-medium text-900">Floyd Miles</span>
        </div>
    </div>
</div>
`;
    return (
        <>
            <div className="block-category-title">Promo Section</div>
            <BlockViewer header="Full Width Image" code={block1}>
                <div
                    className="bg-no-repeat bg-cover px-4 py-8 md:px-6 lg:px-8 text-center"
                    style={{
                        background:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/demo/images/blocks/ecommerce/promosection/promo-section-1-1.jpg')",
                    }}
                >
                    <div className="text-white text-5xl font-bold mb-4 text-white z-1">
                        Promo Title Placeholder
                    </div>
                    <p className="line-height-3 mt-0 mb-6 p-0 text-white text-3xl">
                        Malesuada bibendum arcu vitae elementum curabitur vitae
                        nunc. Aliquam nulla facilisi cras fermentum. Et egestas
                        quis ipsum suspendisse ultrices.
                    </p>
                    <Button
                        label="VIEW THE SHOP"
                        className="p-button-rounded text-2xl"
                    />
                </div>
            </BlockViewer>

            <BlockViewer header="Full Width Split Image" code={block2}>
                <div className="flex flex-wrap">
                    <div
                        className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), linear-gradient(246.36deg, #007261 15.22%, #005347 65.22%)",
                        }}
                    >
                        <div className="text-4xl text-white mb-3 font-medium">
                            Promo Title Placeholder
                        </div>
                        <p className="line-height-3 mt-0 mb-7 p-0 text-white text-2xl">
                            Malesuada bibendum arcu vitae elementum curabitur
                            vitae nunc. Aliquam nulla facilisi cras fermentum.
                            Et egestas quis ipsum suspendisse ultrices.
                        </p>
                        <Button
                            label="READ STORY"
                            className="p-button-secondary text-2xl"
                        />
                    </div>
                    <div
                        className="w-full md:w-6 bg-no-repeat bg-cover"
                        style={{
                            background:
                                "url('/demo/images/blocks/ecommerce/promosection/promo-section-2-1.jpg')",
                            minHeight: "400px",
                        }}
                    ></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Condensed Split Image" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div
                            className="w-full lg:w-6 px-4 py-8 md:px-6 lg:px-8"
                            style={{
                                background:
                                    "linear-gradient(116.38deg, #DD364A 0%, #E34D60 28%, #EEEEEE 28.01%, #F0F1F3 64.54%)",
                            }}
                        >
                            <div className="text-4xl text-gray-900 mb-3 font-medium">
                                Promo Title Placeholder
                            </div>
                            <p className="line-height-3 mt-0 mb-7 p-0 text-gray-900 text-2xl">
                                Malesuada bibendum arcu vitae elementum
                                curabitur vitae nunc. Aliquam nulla facilisi
                                cras fermentum. Et egestas quis ipsum
                                suspendisse ultrices.
                            </p>
                            <Button
                                label="BUY NOW"
                                className="p-button-secondary text-2xl"
                            />
                        </div>
                        <div
                            className="hidden lg:block w-6 bg-no-repeat bg-cover"
                            style={{
                                background:
                                    "url('/demo/images/blocks/ecommerce/promosection/promo-section-3-1.jpg')",
                            }}
                        ></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Countdown" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column sm:flex-row sm:align-items-center mb-5">
                        <span className="text-2xl font-medium text-900">
                            Deal of the Week
                        </span>
                        <div className="flex align-items-center flex-auto mt-5 sm:mt-0">
                            <div
                                className="bg-indigo-50 w-4rem mx-2"
                                style={{ height: "7px" }}
                            ></div>
                            <div className="flex align-items-center p-2 bg-indigo-50 border-round">
                                <span className="text-indigo-500 text-xl font-medium">
                                    Ends in
                                </span>
                                <span className="block bg-indigo-500 text-white border-round px-3 py-2 ml-2">
                                    12:30:00
                                </span>
                            </div>
                            <div
                                className="bg-indigo-50 ml-2 flex-auto"
                                style={{ height: "7px" }}
                            ></div>
                        </div>
                    </div>
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div className="p-2">
                                <div className="font-medium mb-3">SUBTITLE</div>
                                <div className="mb-3">
                                    <span className="line-through mr-3 text-600 text-xl">
                                        120.00
                                    </span>
                                    <span className="font-medium text-xl text-pink-500">
                                        80.00
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/ecommerce/promosection/promo-section-4-1.jpg"
                                    className="block mb-3 w-full"
                                    alt="promo-section-4-1"
                                />
                                <div
                                    className="mb-4 surface-300 border-round overflow-hidden"
                                    style={{ height: ".5rem" }}
                                >
                                    <div className="surface-900 w-6 h-full"></div>
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <span className="text-600">Sold: 35</span>
                                    <span className="text-900 font-medium">
                                        Available: 50
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div className="p-2">
                                <div className="font-medium mb-3">SUBTITLE</div>
                                <div className="mb-3">
                                    <span className="line-through mr-3 text-600 text-xl">
                                        56.00
                                    </span>
                                    <span className="font-medium text-xl text-pink-500">
                                        39.00
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/ecommerce/promosection/promo-section-4-2.jpg"
                                    className="block mb-3 w-full"
                                    alt="promo-section-4-2"
                                />
                                <div
                                    className="mb-4 surface-300 border-round overflow-hidden"
                                    style={{ height: ".5rem" }}
                                >
                                    <div className="surface-900 w-6 h-full"></div>
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <span className="text-600">Sold: 35</span>
                                    <span className="text-900 font-medium">
                                        Available: 50
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="font-medium mb-3">SUBTITLE</div>
                                <div className="mb-3">
                                    <span className="line-through mr-3 text-600 text-xl">
                                        96.00
                                    </span>
                                    <span className="font-medium text-xl text-pink-500">
                                        45.00
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/ecommerce/promosection/promo-section-4-3.jpg"
                                    className="block mb-3 w-full"
                                    alt="promo-section-4-3"
                                />
                                <div
                                    className="mb-4 surface-300 border-round overflow-hidden"
                                    style={{ height: ".5rem" }}
                                >
                                    <div className="surface-900 w-6 h-full"></div>
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <span className="text-600">Sold: 35</span>
                                    <span className="text-900 font-medium">
                                        Available: 50
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="p-2">
                                <div className="font-medium mb-3">SUBTITLE</div>
                                <div className="mb-3">
                                    <span className="line-through mr-3 text-600 text-xl">
                                        84.00
                                    </span>
                                    <span className="font-medium text-xl text-pink-500">
                                        72.00
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/ecommerce/promosection/promo-section-4-4.jpg"
                                    className="block mb-3 w-full"
                                    alt="promo-section-4-4"
                                />
                                <div
                                    className="mb-4 surface-300 border-round overflow-hidden"
                                    style={{ height: ".5rem" }}
                                >
                                    <div className="surface-900 w-6 h-full"></div>
                                </div>
                                <div className="flex align-items-center justify-content-between">
                                    <span className="text-600">Sold: 35</span>
                                    <span className="text-900 font-medium">
                                        Available: 50
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Side-by-Side" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full xl:w-6">
                            <div
                                className="bg-no-repeat bg-cover p-3 border-round pr-2"
                                style={{
                                    background:
                                        "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-1-x.jpg')",
                                }}
                            >
                                <div className="border-2 border-round border-gray-900 flex flex-column sm:flex-row overflow-hidden">
                                    <div
                                        className="flex-1 text-center bg-white-alpha-60 font-medium"
                                        style={{ backdropFilter: "blur(15px)" }}
                                    >
                                        <div className="p-6 flex flex-column align-items-center">
                                            <span className="text-xl text-gray-900 mb-5">
                                                Up To
                                            </span>
                                            <span className="text-xl text-gray-900 mb-5 text-5xl">
                                                25{" "}
                                                <span className="text-xl text-gray-900">
                                                    % OFF
                                                </span>
                                            </span>
                                            <span className="text-xl text-gray-900">
                                                Exclusive JEWELRY
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 bg-no-repeat bg-cover"
                                        style={{
                                            background:
                                                "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-1.jpg')",
                                            minHeight: "200px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-full xl:w-6">
                            <div
                                className="bg-no-repeat bg-cover p-3 border-round pr-2"
                                style={{
                                    background:
                                        "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-2-x.jpg')",
                                }}
                            >
                                <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                                    <div
                                        className="flex-1 text-center bg-dark-alpha-60 font-medium"
                                        style={{ backdropFilter: "blur(15px)" }}
                                    >
                                        <div className="p-6 flex flex-column align-items-center">
                                            <span className="text-xl text-gray-100 mb-5">
                                                Up To
                                            </span>
                                            <span className="text-xl text-gray-100 mb-5 text-5xl">
                                                25{" "}
                                                <span className="text-xl text-gray-100">
                                                    % OFF
                                                </span>
                                            </span>
                                            <span className="text-xl text-gray-100">
                                                Exclusive JEWELRY
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 bg-no-repeat bg-cover"
                                        style={{
                                            background:
                                                "url('/demo/images/blocks/ecommerce/promosection/promo-section-5-2.jpg')",
                                            minHeight: "200px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Background Image and Testimonials"
                code={block6}
            >
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="flex flex-column text-center align-items-center px-5 py-8 bg-cover mb-3"
                        style={{
                            backgroundImage:
                                "url('/demo/images/blocks/ecommerce/promosection/promo-section-6-1.jpg')",
                        }}
                    >
                        <div className="text-5xl font-bold text-gray-900 mb-3">
                            This Is Your Last Chance to Save 50% Off{" "}
                        </div>
                        <p className="line-height-3 text-gray-700 text-xl font-medium mt-0 mb-5">
                            Black Friday will soon be leaving PrimeLand. There
                            is still time to save big this season.{" "}
                        </p>
                        <Button
                            label="Get Started Today"
                            className="p-ripple p-button-success text-xl shadow-none"
                        ></Button>
                    </div>
                    <div className="flex flex-column lg:flex-row">
                        <div className="flex-1 p-5">
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                className="w-3rem h-3rem block mb-3"
                                alt="avatar-f-1"
                            />
                            <div className="text-900 line-height-3 mb-3">
                                &ldquo;You won&lsquo;t regret it. I was amazed at the
                                quality of it. I am really satisfied with my
                                it.&ldquo;
                            </div>
                            <span className="text-xs font-medium text-900">
                                Brooklyn Simmons
                            </span>
                        </div>
                        <div className="flex-1 p-5">
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                className="w-3rem h-3rem block mb-3"
                                alt="avatar-f-4"
                            />
                            <div className="text-900 line-height-3 mb-3">
                                &ldquo;No matter where you go, It&lsquo;s is the coolest,
                                most happening thing around! Not able to tell
                                you how happy I am with it. &ldquo;
                            </div>
                            <span className="text-xs font-medium text-900">
                                Jenny Wilson
                            </span>
                        </div>
                        <div className="flex-1 p-5">
                            <img
                                src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                className="w-3rem h-3rem mb-3"
                                alt="avatar-f-6"
                            />
                            <div className="text-900 line-height-3 mb-3">
                                &ldquo;We&lsquo;re loving it. This is simply unbelievable! I
                                like it more and more each day because it makes
                                my life a lot easier.&ldquo;
                            </div>
                            <span className="text-xs font-medium text-900">
                                Floyd Miles
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default PromoSection;
