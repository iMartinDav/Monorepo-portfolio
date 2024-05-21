import React from "react";
import { Carousel } from "primereact/carousel";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Ripple } from "primereact/ripple";

const CategoryPreview = () => {
    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const products = [
        {
            image: "category-preview-1-18",
        },
        {
            image: "category-preview-1-19",
        },
        {
            image: "category-preview-1-20",
        },
        {
            image: "category-preview-1-26",
        },
        {
            image: "category-preview-1-27",
        },
        {
            image: "category-preview-1-28",
        },
        {
            image: "category-preview-1-29",
        },
        {
            image: "category-preview-1-30",
        },
        {
            image: "category-preview-1-31",
        },
    ];

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-4xl font-medium mb-4 text-center lg:text-left">Seasonal Collection</div>
    <p className="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">Mata tincidunt dui ut ornare</p>

    <div className="grid -mt-3 -ml-3 -mr-3 flex-wrap">
        <div className="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-1.png" className="w-full h-full" alt="product" />
            <p className="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div className="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-2.png" className="w-full h-full" alt="product" />
            <p className="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div className="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-3.png" className="w-full h-full" alt="product" />
            <p className="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div className="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-4.png" className="w-full h-full" alt="product" />
            <p className="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
        <div className="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-5.png" className="w-full h-full" alt="product" />
            <p className="text-600 uppercase font-medium my-3">Subtitle</p>
            <a tabIndex="0" className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">Category Title <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-4xl font-bold mb-5 text-center">Best Gifts</div>
    <div className="flex justify-content-center align-items-center mb-5">
        <a tabIndex="0" className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Women</a>
        <a tabIndex="0" className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Men</a>
        <a tabIndex="0" className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150">Denim</a>
    </div>
    <div className="grid -mt-3 -ml-3 -mr-3 align-items-center justify-content-center lg:justify-content-start">
        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div className="surface-card m-3 border-round shadow-2">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-6.png" className="border-round-top w-full" alt="product" />
                <div className="flex flex-column w-full p-4">
                    <span className="text-900 font-medium text-xl border-200 pb-2" style={{ borderBottom: '1px solid' }}>Category Title</span>
                    <span className="text-600 pt-2"><i className="pi pi-fw pi-users mr-2"></i>People's Choice</span>
                </div>
            </div>

        </div>
        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div className="surface-card m-3 border-round shadow-2">
                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-7.png" className="border-round-top w-full" alt="product" />
                <div className="flex flex-column w-full p-4">
                    <span className="text-900 font-medium text-xl border-200 pb-2" style={{ borderBottom: '1px solid' }}>Category Title</span>
                    <span className="text-600 pt-2"><i className="pi pi-fw pi-sun mr-2"></i>Always Warm</span>
                </div>
            </div>

        </div>
        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
            <div className="surface-card m-3 border-round shadow-2">

                <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-8.png" className="border-round-top w-full" alt="product" />
                <div className="flex flex-column w-full p-4">
                    <span className="text-900 font-medium text-xl border-200 pb-2" style={{ borderBottom: '1px solid' }}>Category Title</span>
                    <span className="text-600 pt-2"><i className="pi pi-fw pi-wallet mr-2"></i>Best Price</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="grid grid-nogutter -mt-3 -ml-3 -mr-3">
        <div className="col-12 lg:col-6 p-3">
            <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-9.png)', minHeight: '50rem' }}>
                <div className="p-4 align-self-start">
                    <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                    <span className="text-white text-lg line-height-3">Quis varius quam quisque id diam. A pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.</span>
                </div>
                <div className="p-4 align-self-end">
                    <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6">
            <div className="grid grid-nogutter lg:flex-column">
                <div className="col-12 p-3">
                    <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-10.png)' }}>
                        <div className="p-4 align-self-start">
                            <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                            <span className="text-white text-lg line-height-3">Quis varius quam quisque id diam</span>
                        </div>
                        <div className="p-4 align-self-end">
                            <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-3">
                    <div className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-11.png)' }}>
                        <div className="p-4 align-self-start">
                            <div className="text-white text-2xl font-bold mb-2">Category Title</div>
                            <span className="text-white text-lg line-height-3">Vitae purus faucibus ornare</span>
                        </div>
                        <div className="p-4 align-self-end">
                            <a tabIndex="0" className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150">Shop Now<i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column">
        <div className="flex flex-column lg:flex-row align-items-center justify-content-center lg:justify-content-between">
            <div className="text-900 font-medium text-4xl mb-4">Top Categories</div>
            <a tabIndex="0" className="cursor-pointer text-primary flex align-items-center">See All Categories<i className="pi pi-arrow-right ml-3"></i></a>
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
            <div className="flex flex-column h-25rem flex-grow-1">
                <div className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-12.jpg)', minWidth: '15rem' }}>
                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div className="flex flex-column h-25rem flex-grow-1">
                <div className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-13.jpg)', minWidth: '15rem' }}>
                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div className="flex flex-column h-25rem flex-grow-1">
                <div className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-14.jpg)', minWidth: '15rem' }}>
                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div className="flex flex-column h-25rem flex-grow-1">
                <div className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-15.jpg)', minWidth: '15rem' }}>
                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
            <div className="flex flex-column h-25rem flex-grow-1">
                <div className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-16.jpg)', minWidth: '15rem' }}>
                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">Category</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block5 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="bg-no-repeat bg-cover border-round shadow-2 h-23rem sm:h-20rem w-full" style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-17.jpg)' }}>
        <div className="h-full w-full p-4 md:p-6">
            <div className="text-primary text-5xl font-bold">Category Title</div>
            <p className="text-black-alpha-80 text-3xl font-normal">Editor's Choice</p>
            <a tabIndex="0" className="p-ripple bg-primary text-center inline-block mt-7 sm:mt-5 text-2xl font-normal px-3 py-2 border-round cursor-pointer">View the Collection
                <Ripple />
            </a>
        </div>
    </div>
</div>
    `;
    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 xl:col-2 text-center lg:text-left">
            <div className="text-900 font-medium text-3xl">Season Collections</div>
            <p className="text-600 font-normal">Dui id ornare arcu odio ut sem nulla pharetra diam.</p>
        </div>
        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-25.png" alt="avatar" />
            <span className="text-900 text-xl font-medium mt-3">Hoodies</span>
        </div>
        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-24.png" alt="avatar" />
            <span className="text-900 text-xl font-medium mt-3">T-Shirts</span>
        </div>
        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-23.png" alt="avatar" />
            <span className="text-900 text-xl font-medium mt-3">Accessories</span>
        </div>
        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-22.png" alt="avatar" />
            <span className="text-900 text-xl font-medium mt-3">Jeans</span>
        </div>
        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
            <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-21.png" alt="avatar" />
            <span className="text-900 text-xl font-medium mt-3">Bags</span>
        </div>
    </div>
</div>
    `;
    const block7 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-2 text-center lg:text-left">
            <div className="text-900 font-medium text-3xl">Category Title</div>
            <p className="text-600 font-normal mt-3">Dui id ornare arcu odio ut sem nulla pharetra diam.</p>
            <a tabIndex="0" className="text-primary cursor-pointer block mt-5 mb-5 md:mb-0">Explore Collections</a>
        </div>
        <div className="col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4">
            <Carousel value={products} numVisible={3} numScroll={3} circular={false} responsiveOptions={responsiveOptions} indicatorsContentClassName="m-0" contentClassName="m-0" itemTemplate={(product) => <div className="p-4 text-center">
                <img src={\`/demo/images/blocks/ecommerce/categorypreview/\${product.image}.png\`} className="w-full h-full" alt="product" />
            </div>}>
            </Carousel>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Category Previews</div>
            <BlockViewer header="Simple 5 Columns" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-4xl font-medium mb-4 text-center lg:text-left">
                        Seasonal Collection
                    </div>
                    <p className="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">
                        Mata tincidunt dui ut ornare
                    </p>

                    <div className="grid -mt-3 -ml-3 -mr-3 flex-wrap">
                        <div className="col flex px-3 flex-column mt-4 md:mt-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-1.png"
                                className="w-full h-full"
                                alt="product"
                            />
                            <p className="text-600 uppercase font-medium my-3">
                                Subtitle
                            </p>
                            <a
                                tabIndex="0"
                                className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                            >
                                Category Title{" "}
                                <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                            </a>
                        </div>
                        <div className="col flex px-3 flex-column mt-4 md:mt-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-2.png"
                                className="w-full h-full"
                                alt="product"
                            />
                            <p className="text-600 uppercase font-medium my-3">
                                Subtitle
                            </p>
                            <a
                                tabIndex="0"
                                className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                            >
                                Category Title{" "}
                                <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                            </a>
                        </div>
                        <div className="col flex px-3 flex-column mt-4 md:mt-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-3.png"
                                className="w-full h-full"
                                alt="product"
                            />
                            <p className="text-600 uppercase font-medium my-3">
                                Subtitle
                            </p>
                            <a
                                tabIndex="0"
                                className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                            >
                                Category Title{" "}
                                <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                            </a>
                        </div>
                        <div className="col flex px-3 flex-column mt-4 md:mt-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-4.png"
                                className="w-full h-full"
                                alt="product"
                            />
                            <p className="text-600 uppercase font-medium my-3">
                                Subtitle
                            </p>
                            <a
                                tabIndex="0"
                                className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                            >
                                Category Title{" "}
                                <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                            </a>
                        </div>
                        <div className="col flex px-3 flex-column mt-4 md:mt-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-5.png"
                                className="w-full h-full"
                                alt="product"
                            />
                            <p className="text-600 uppercase font-medium my-3">
                                Subtitle
                            </p>
                            <a
                                tabIndex="0"
                                className="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150"
                            >
                                Category Title{" "}
                                <i className="pi pi-fw pi-arrow-right ml-2 text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Three Columns Card" code={block2}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-4xl font-bold mb-5 text-center">
                        Best Gifts
                    </div>
                    <div className="flex justify-content-center align-items-center mb-5">
                        <a
                            tabIndex="0"
                            className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150"
                        >
                            Women
                        </a>
                        <a
                            tabIndex="0"
                            className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150"
                        >
                            Men
                        </a>
                        <a
                            tabIndex="0"
                            className="cursor-pointer py-2 mx-3 text-xl text-700 font-medium uppercase text-600 border-bottom-3 border-left-none border-transparent hover:border-gray-900 hover:text-900 transition-duration-150"
                        >
                            Denim
                        </a>
                    </div>
                    <div className="grid -mt-3 -ml-3 -mr-3 align-items-center justify-content-center lg:justify-content-start">
                        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
                            <div className="surface-card m-3 border-round shadow-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-6.png"
                                    className="border-round-top w-full"
                                    alt="product"
                                />
                                <div className="flex flex-column w-full p-4">
                                    <span
                                        className="text-900 font-medium text-xl border-200 pb-2"
                                        style={{ borderBottom: "1px solid" }}
                                    >
                                        Category Title
                                    </span>
                                    <span className="text-600 pt-2">
                                        <i className="pi pi-fw pi-users mr-2"></i>
                                        People&lsquo;s Choice
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
                            <div className="surface-card m-3 border-round shadow-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-7.png"
                                    className="border-round-top w-full"
                                    alt="product"
                                />
                                <div className="flex flex-column w-full p-4">
                                    <span
                                        className="text-900 font-medium text-xl border-200 pb-2"
                                        style={{ borderBottom: "1px solid" }}
                                    >
                                        Category Title
                                    </span>
                                    <span className="text-600 pt-2">
                                        <i className="pi pi-fw pi-sun mr-2"></i>
                                        Always Warm
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="xs:col-12 sm:col-6 lg:col-4 p-0">
                            <div className="surface-card m-3 border-round shadow-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-8.png"
                                    className="border-round-top w-full"
                                    alt="product"
                                />
                                <div className="flex flex-column w-full p-4">
                                    <span
                                        className="text-900 font-medium text-xl border-200 pb-2"
                                        style={{ borderBottom: "1px solid" }}
                                    >
                                        Category Title
                                    </span>
                                    <span className="text-600 pt-2">
                                        <i className="pi pi-fw pi-wallet mr-2"></i>
                                        Best Price
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Image Backgrounds" code={block3}>
                <div className="surface-50 px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid grid-nogutter -mt-3 -ml-3 -mr-3">
                        <div className="col-12 lg:col-6 p-3">
                            <div
                                className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover"
                                style={{
                                    background:
                                        "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-9.png)",
                                    minHeight: "50rem",
                                }}
                            >
                                <div className="p-4 align-self-start">
                                    <div className="text-white text-2xl font-bold mb-2">
                                        Category Title
                                    </div>
                                    <span className="text-white text-lg line-height-3">
                                        Quis varius quam quisque id diam. A
                                        pellentesque sit amet porttitor eget.
                                        Vitae purus faucibus ornare suspendisse
                                        sed nisi lacus.
                                    </span>
                                </div>
                                <div className="p-4 align-self-end">
                                    <a
                                        tabIndex="0"
                                        className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                    >
                                        Shop Now
                                        <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6">
                            <div className="grid grid-nogutter lg:flex-column">
                                <div className="col-12 p-3">
                                    <div
                                        className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem"
                                        style={{
                                            background:
                                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-10.png)",
                                        }}
                                    >
                                        <div className="p-4 align-self-start">
                                            <div className="text-white text-2xl font-bold mb-2">
                                                Category Title
                                            </div>
                                            <span className="text-white text-lg line-height-3">
                                                Quis varius quam quisque id diam
                                            </span>
                                        </div>
                                        <div className="p-4 align-self-end">
                                            <a
                                                tabIndex="0"
                                                className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                            >
                                                Shop Now
                                                <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-3">
                                    <div
                                        className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover h-25rem"
                                        style={{
                                            background:
                                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-11.png)",
                                        }}
                                    >
                                        <div className="p-4 align-self-start">
                                            <div className="text-white text-2xl font-bold mb-2">
                                                Category Title
                                            </div>
                                            <span className="text-white text-lg line-height-3">
                                                Vitae purus faucibus ornare
                                            </span>
                                        </div>
                                        <div className="p-4 align-self-end">
                                            <a
                                                tabIndex="0"
                                                className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                                            >
                                                Shop Now
                                                <i className="pi pi-fw pi-arrow-right text-2xl ml-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Columns With Title Overlay" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column">
                        <div className="flex flex-column lg:flex-row align-items-center justify-content-center lg:justify-content-between">
                            <div className="text-900 font-medium text-4xl mb-4">
                                Top Categories
                            </div>
                            <a
                                tabIndex="0"
                                className="cursor-pointer text-primary flex align-items-center"
                            >
                                See All Categories
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-3">
                            <div className="flex flex-column h-25rem flex-grow-1">
                                <div
                                    className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-12.jpg)",
                                        minWidth: "15rem",
                                    }}
                                >
                                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">
                                        Category
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-column h-25rem flex-grow-1">
                                <div
                                    className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-13.jpg)",
                                        minWidth: "15rem",
                                    }}
                                >
                                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">
                                        Category
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-column h-25rem flex-grow-1">
                                <div
                                    className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-14.jpg)",
                                        minWidth: "15rem",
                                    }}
                                >
                                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">
                                        Category
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-column h-25rem flex-grow-1">
                                <div
                                    className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-15.jpg)",
                                        minWidth: "15rem",
                                    }}
                                >
                                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">
                                        Category
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-column h-25rem flex-grow-1">
                                <div
                                    className="flex h-full bg-no-repeat bg-cover bg-center border-round shadow-2 lg:mx-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-16.jpg)",
                                        minWidth: "15rem",
                                    }}
                                >
                                    <p className="font-medium text-2xl text-white text-center w-full align-self-end">
                                        Category
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Image Overlay" code={block5}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="bg-no-repeat bg-cover border-round shadow-2 h-23rem sm:h-20rem w-full"
                        style={{
                            background:
                                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(/demo/images/blocks/ecommerce/categorypreview/category-preview-1-17.jpg)",
                        }}
                    >
                        <div className="h-full w-full p-4 md:p-6">
                            <div className="text-primary text-5xl font-bold">
                                Category Title
                            </div>
                            <p className="text-black-alpha-80 text-3xl font-normal">
                                Editor&lsquo;s Choice
                            </p>
                            <a
                                tabIndex="0"
                                className="p-ripple bg-primary text-center inline-block mt-7 sm:mt-5 text-2xl font-normal px-3 py-2 border-round cursor-pointer"
                            >
                                View the Collection
                                <Ripple />
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Circular 5 Columns" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 xl:col-2 text-center lg:text-left">
                            <div className="text-900 font-medium text-3xl">
                                Season Collections
                            </div>
                            <p className="text-600 font-normal">
                                Dui id ornare arcu odio ut sem nulla pharetra
                                diam.
                            </p>
                        </div>
                        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-25.png"
                                alt="avatar"
                            />
                            <span className="text-900 text-xl font-medium mt-3">
                                Hoodies
                            </span>
                        </div>
                        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-24.png"
                                alt="avatar"
                            />
                            <span className="text-900 text-xl font-medium mt-3">
                                T-Shirts
                            </span>
                        </div>
                        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-23.png"
                                alt="avatar"
                            />
                            <span className="text-900 text-xl font-medium mt-3">
                                Accessories
                            </span>
                        </div>
                        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-22.png"
                                alt="avatar"
                            />
                            <span className="text-900 text-xl font-medium mt-3">
                                Jeans
                            </span>
                        </div>
                        <div className="xs:col-12 sm:col-6 md:col-4 xl:col-2 flex flex-column align-items-center mx-auto lg:mx-0 mb-3 md:mb-0">
                            <img
                                src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-21.png"
                                alt="avatar"
                            />
                            <span className="text-900 text-xl font-medium mt-3">
                                Bags
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Carousel" code={block7}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-2 text-center lg:text-left">
                            <div className="text-900 font-medium text-3xl">
                                Category Title
                            </div>
                            <p className="text-600 font-normal mt-3">
                                Dui id ornare arcu odio ut sem nulla pharetra
                                diam.
                            </p>
                            <a
                                tabIndex="0"
                                className="text-primary cursor-pointer block mt-5 mb-5 md:mb-0"
                            >
                                Explore Collections
                            </a>
                        </div>
                        <div className="col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4">
                            <Carousel
                                value={products}
                                numVisible={3}
                                numScroll={3}
                                circular={false}
                                responsiveOptions={responsiveOptions}
                                indicatorsContentClassName="m-0"
                                contentClassName="m-0"
                                itemTemplate={(product) => (
                                    <div className="p-4 text-center">
                                        <img
                                            src={`/demo/images/blocks/ecommerce/categorypreview/${product.image}.png`}
                                            className="w-full h-full"
                                            alt="product"
                                        />
                                    </div>
                                )}
                            ></Carousel>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CategoryPreview;
