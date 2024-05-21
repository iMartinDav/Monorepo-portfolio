import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";

const Incentive = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
            <span className="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
                <i className="pi pi-arrow-right text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">Pay Later in 30 Days</span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
        </div>
        <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
            <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
                <i className="pi pi-shopping-cart text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">Free Shipping</span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
        </div>
        <div className="col-12 md:col-4 flex flex-column align-items-center">
            <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
                <i className="pi pi-shield text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">Secure Payment</span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
            <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5"></i>
            <div>
                <span className="text-900 font-medium text-xl">Pay Later in 30 Days</span>
                <p className="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
            <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5"></i>
            <div>
                <span className="text-900 font-medium text-xl">Free Shipping</span>
                <p className="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
            <i className="pi pi-shield text-orange-500 text-4xl mr-5"></i>
            <div>
                <span className="text-900 font-medium text-xl">Secure Payment</span>
                <p className="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-cyan-500">
            <i className="pi pi-refresh text-cyan-500 text-4xl mr-5"></i>
            <div>
                <span className="text-900 font-medium text-xl">Money Back Guarantee</span>
                <p className="text-600 line-height-3 p-0 mt-3 mb-0">Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="surface-900 text-0 p-4" style={{ borderRadius: '10px' }}>
        <div className="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
            <span className="inline-flex align-items-center mb-3 md:mb-0">
                <i className="pi pi-shopping-cart text-base xl:text-2xl mr-3"></i>
                <span className="text-base xl:text-2xl font-medium">Free Shipping</span>
            </span>
            <span className="inline-flex align-items-center mb-3 md:mb-0">
                <i className="pi pi-refresh text-base xl:text-2xl mr-3"></i>
                <span className="text-base xl:text-2xl font-medium">120 Days Return Policy</span>
            </span>
            <span className="inline-flex align-items-center">
                <i className="pi pi-star text-base xl:text-2xl mr-3"></i>
                <span className="text-base xl:text-2xl font-medium">10 Year Warranty</span>
            </span>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap align-items-center justify-content-center gap-5">
        <div className="p-3 flex align-items-center bg-blue-100" style={{ borderRadius: '50px' }}>
            <div className="bg-blue-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                <i className="pi pi-shopping-bag text-white text-2xl"></i>
            </div>
            <span className="text-blue-900 text-lg font-medium">Free Shipping</span>
        </div>
        <div className="p-3 flex align-items-center bg-cyan-100" style={{ borderRadius: '50px' }}>
            <div className="bg-cyan-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                <i className="pi pi-arrow-right text-white text-2xl"></i>
            </div>
            <span className="text-cyan-900 text-lg font-medium">120 Days Return Policy</span>
        </div>
        <div className="p-3 flex align-items-center bg-orange-100" style={{ borderRadius: '50px' }}>
            <div className="bg-orange-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                <i className="pi pi-shield text-white text-2xl"></i>
            </div>
            <span className="text-orange-900 text-lg font-medium">10 Year Warranty</span>
        </div>
        <div className="p-3 flex align-items-center bg-green-100" style={{ borderRadius: '50px' }}>
            <div className="bg-green-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                <i className="pi pi-refresh text-white text-2xl"></i>
            </div>
            <span className="text-green-900 text-lg font-medium">Environment Friendly</span>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Incentive</div>
            <BlockViewer header="Columns with Icons" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                            <span className="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
                                <i className="pi pi-arrow-right text-white text-2xl"></i>
                            </span>
                            <span className="text-900 text-xl font-medium mb-4">
                                Pay Later in 30 Days
                            </span>
                            <p className="text-600 line-height-3 py-0 m-0 px-3">
                                Ullamcorper sit amet risus nullam eget felis
                                eget nunc.
                            </p>
                        </div>
                        <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
                            <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
                                <i className="pi pi-shopping-cart text-white text-2xl"></i>
                            </span>
                            <span className="text-900 text-xl font-medium mb-4">
                                Free Shipping
                            </span>
                            <p className="text-600 line-height-3 py-0 m-0 px-3">
                                Ullamcorper sit amet risus nullam eget felis
                                eget nunc.
                            </p>
                        </div>
                        <div className="col-12 md:col-4 flex flex-column align-items-center">
                            <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
                                <i className="pi pi-shield text-white text-2xl"></i>
                            </span>
                            <span className="text-900 text-xl font-medium mb-4">
                                Secure Payment
                            </span>
                            <p className="text-600 line-height-3 py-0 m-0 px-3">
                                Ullamcorper sit amet risus nullam eget felis
                                eget nunc.
                            </p>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Columns with Borders" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
                            <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5"></i>
                            <div>
                                <span className="text-900 font-medium text-xl">
                                    Pay Later in 30 Days
                                </span>
                                <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                        </div>
                        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
                            <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5"></i>
                            <div>
                                <span className="text-900 font-medium text-xl">
                                    Free Shipping
                                </span>
                                <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                        </div>
                        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
                            <i className="pi pi-shield text-orange-500 text-4xl mr-5"></i>
                            <div>
                                <span className="text-900 font-medium text-xl">
                                    Secure Payment
                                </span>
                                <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                        </div>
                        <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-cyan-500">
                            <i className="pi pi-refresh text-cyan-500 text-4xl mr-5"></i>
                            <div>
                                <span className="text-900 font-medium text-xl">
                                    Money Back Guarantee
                                </span>
                                <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                                    Ullamcorper sit amet risus nullam eget felis
                                    eget nunc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Surface" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="surface-900 text-0 p-4"
                        style={{ borderRadius: "10px" }}
                    >
                        <div className="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
                            <span className="inline-flex align-items-center mb-3 md:mb-0">
                                <i className="pi pi-shopping-cart text-base xl:text-2xl mr-3"></i>
                                <span className="text-base xl:text-2xl font-medium">
                                    Free Shipping
                                </span>
                            </span>
                            <span className="inline-flex align-items-center mb-3 md:mb-0">
                                <i className="pi pi-refresh text-base xl:text-2xl mr-3"></i>
                                <span className="text-base xl:text-2xl font-medium">
                                    120 Days Return Policy
                                </span>
                            </span>
                            <span className="inline-flex align-items-center">
                                <i className="pi pi-star text-base xl:text-2xl mr-3"></i>
                                <span className="text-base xl:text-2xl font-medium">
                                    10 Year Warranty
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap align-items-center justify-content-center gap-5">
                        <div
                            className="p-3 flex align-items-center bg-blue-100"
                            style={{ borderRadius: "50px" }}
                        >
                            <div className="bg-blue-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                                <i className="pi pi-shopping-bag text-white text-2xl"></i>
                            </div>
                            <span className="text-blue-900 text-lg font-medium">
                                Free Shipping
                            </span>
                        </div>
                        <div
                            className="p-3 flex align-items-center bg-cyan-100"
                            style={{ borderRadius: "50px" }}
                        >
                            <div className="bg-cyan-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                                <i className="pi pi-arrow-right text-white text-2xl"></i>
                            </div>
                            <span className="text-cyan-900 text-lg font-medium">
                                120 Days Return Policy
                            </span>
                        </div>
                        <div
                            className="p-3 flex align-items-center bg-orange-100"
                            style={{ borderRadius: "50px" }}
                        >
                            <div className="bg-orange-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                                <i className="pi pi-shield text-white text-2xl"></i>
                            </div>
                            <span className="text-orange-900 text-lg font-medium">
                                10 Year Warranty
                            </span>
                        </div>
                        <div
                            className="p-3 flex align-items-center bg-green-100"
                            style={{ borderRadius: "50px" }}
                        >
                            <div className="bg-green-500 inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle">
                                <i className="pi pi-refresh text-white text-2xl"></i>
                            </div>
                            <span className="text-green-900 text-lg font-medium">
                                Environment Friendly
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Incentive;
