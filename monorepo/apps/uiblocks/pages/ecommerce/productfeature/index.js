import React, { useRef } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import BlockViewer from "../../../demo/components/BlockViewer";
import { StyleClass } from "primereact/styleclass";

const ProductFeature = () => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="w-full lg:hidden">
        <div className="text-900 text-3xl font-medium">Feature Title</div>
        <p className="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
    </div>
    <div className="grid justify-content-center flex-column lg:flex-row">
        <div className="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
            <div className="w-full hidden lg:block">
                <div className="text-900 text-3xl font-medium">Feature Title</div>
                <p className="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
            <div className="flex px-5 py-2">
                <i className="pi pi-wallet text-4xl font-bold text-900"></i>
                <div className="ml-5">
                    <div className="text-900 font-medium text-2xl">Eu non diam phasellus</div>
                    <p className="text-700">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
                </div>
            </div>
            <div className="flex px-5 py-2">
                <i className="pi pi-video text-4xl font-bold text-900"></i>
                <div className="ml-5">
                    <div className="text-900 font-medium text-2xl">Imperdiet proin fermentum</div>
                    <p className="text-700">Consectetur lorem donec massa sapien faucibus et molestie.</p>
                </div>
            </div>
            <div className="flex px-5 py-2">
                <i className="pi pi-tags text-4xl font-bold text-900"></i>
                <div className="ml-5">
                    <div className="text-900 font-medium text-2xl">Est ullamcorper eget</div>
                    <p className="text-700">Eget arcu dictum varius duis at consectetur lorem donec. Semper viverra nam libero justo laoreet sit amet cursus sit. </p>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 flex-order-1 lg:flex-order-2">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-1.png" className="border-round w-full" alt="product" />
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="w-full lg:hidden">
        <div className="text-900 text-3xl font-medium">Feature Title</div>
        <p className="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
    </div>
    <div className="grid justify-content-center flex-column lg:flex-row">
        <div className="col-12 lg:col-6">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-2.png" className="border-round w-full" alt="product" />
        </div>
        <div className="col-12 lg:col-6 lg:pl-4 py-4">
            <div className="w-full hidden lg:block">
                <div className="text-900 text-3xl font-medium">Feature Title</div>
                <p className="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Eu non diam phasellus</td>
                        <td className="text-600 p-2">123 qui</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Arcu felis bibendum</td>
                        <td className="text-600 p-2">123 voluptate</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Imperdiet proin</td>
                        <td className="text-600 p-2">123 consequat</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Est ullamcorper eget</td>
                        <td className="text-600 p-2">123 cillum</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Diam sit amet nisl</td>
                        <td className="text-600 p-2">123 esse</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Tempus egestas sed</td>
                        <td className="text-600 p-2">123 velit</td>
                    </tr>
                    <tr>
                        <td className="text-900 text-xl p-2 font-medium w-7">Vulputate enim nulla</td>
                        <td className="text-600 p-2">123 deserunt</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-6 p-4 flex flex-column">
            <p className="text-600 font-medium text-xl">Subtitle</p>
            <div className="text-900 font-bold text-3xl mt-2">Feature Title</div>
            <p className="text-600 text-xl mt-3 mb-5 line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            <Accordion expandIcon="pi pi-fw pi-plus" collapseIcon="pi pi-fw pi-minus">
                <AccordionTab header="Eu non diam phasellus">
                    <ul className="list-none">
                        <li className="text-600 line-height-3 flex align-items-center mb-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>
                </AccordionTab>
                <AccordionTab header="Nulla facilisi morbi">
                    <ul className="list-none">
                        <li className="text-600 line-height-3 flex align-items-center mb-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>
                </AccordionTab>
                <AccordionTab header="Totor id aliquet lectus">
                    <ul className="list-none">
                        <li className="text-600 line-height-3 flex align-items-center mb-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                        <li className="text-600 line-height-3 flex align-items-center my-4"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
                    </ul>
                </AccordionTab>
            </Accordion>
        </div>
        <div className="col-12 lg:col-6 p-4">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-3.png" className="w-full" alt="product" />
        </div>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <p className="text-600 font-medium text-xl text-center">Subtitle</p>
    <div className="text-900 font-bold text-3xl text-center mt-4">Feature Title</div>
    <p className="text-600 font-medium text-xl text-center mt-4">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>

    <div className="grid mt-7 -mr-3 -ml-3">
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-4.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-5.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-6.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-7.png" alt="product" className="w-full h-full border-round" />
            <div className="text-900 text-xl mt-4">Facilisis gravida neque</div>
            <p className="text-600 mt-3 line-height-3">Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
    </div>
</div>
    `;
    const block5 = `
<div className="surface-section grid grid-nogutter px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover bg-center" style={{ background: 'url(/demo/images/blocks/ecommerce/productfeature/product-features-1-8.jpg)', 'backgroundPosition': 'center top' }}>
    <div className="col-12 lg:col-6 p-4 flex flex-column shadow-2 border-round" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="text-black-alpha-90 text-3xl font-bold mb-4">Feature Details</div>
        <p className="text-black-alpha-60 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
            <a ref={btnRef1} tabIndex="0" className="cursor-pointer text-black-alpha-90 text-2xl font-medium mt-3 mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150">Eu non diam phasellus<i className="pi pi-fw pi-plus text-3xl"></i></a>
        </StyleClass>
        <div className="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul className="list-none">
                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
            </ul>
        </div>
        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
            <a ref={btnRef2} tabIndex="0" className="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150">Nulla facilisi morbi<i className="pi pi-fw pi-plus text-3xl"></i></a>
        </StyleClass>
        <div className="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul className="list-none">
                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
            </ul>
        </div>
        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
            <a ref={btnRef3} tabIndex="0" className="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150">Tortor id aliquet lectus<i className="pi pi-fw pi-plus text-3xl"></i></a>
        </StyleClass>
        <div className="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
            <ul className="list-none">
                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Hendrerit gravida rutrum quisque non tellus. Tempus egestas sed sed risus pretium quam.</li>
                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3"><i className="pi pi-circle-fill mr-3" style={{ fontSize: '7px' }}></i>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Vulputate enim nulla aliquet porttitor lacus.</li>
            </ul>
        </div>
    </div>
</div>
    `;
    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mr-4 -ml-4 flex-column xl:flex-row">
        <div className="col-12 xl:col-6 p-4">
            <div className="bg-yellow-50 border-round flex flex-column justify-content-center h-full p-6">
                <p className="text-yellow-600 mb-4 font-bold">SUBTITLE</p>
                <div className="text-yellow-900 text-3xl font-medium">Feature Details</div>
                <p className="text-yellow-800 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
        </div>
        <div className="col-12 xl:col-6 p-4">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-9.png" className="w-full" alt="product" />
        </div>
        <div className="col-12 xl:col-6 p-4">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-10.png" className="w-full" alt="product" />
        </div>
        <div className="col-12 xl:col-6 p-4">
            <div className="bg-cyan-50 border-round flex flex-column justify-content-center h-full p-6">
                <p className="text-cyan-600 mb-4 font-bold">SUBTITLE</p>
                <div className="text-cyan-900 text-3xl font-medium">Feature Details</div>
                <p className="text-cyan-800 text-xl line-height-3">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius duis at consectetur lorem donec.</p>
            </div>
        </div>
    </div>
</div>
    `;
    const block7 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-4xl font-bold text-center">Cursus sit amet dictum sit amet justo donec enim</div>
    <p className="text-600 text-2xl text-center px-5 line-height-3">Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Eu augue ut lectus arcu bibendum at. Et odio pellentesque diam volutpat. Aliquam ut porttitor leo a.</p>
    <div className="grid mt-3 -mr-3 -ml-3">
        <div className="col-12 lg:col-6 p-3">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-11.png" alt="product" className="w-full h-full border-round" />
        </div>
        <div className="col-12 lg:col-6 p-3">
            <img src="/demo/images/blocks/ecommerce/productfeature/product-features-1-12.png" alt="product" className="w-full h-full border-round" />
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Product Features</div>
            <BlockViewer header="Single Image with Icons" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="w-full lg:hidden">
                        <div className="text-900 text-3xl font-medium">
                            Feature Title
                        </div>
                        <p className="text-600 text-xl line-height-3 mb-6">
                            Vulputate eu scelerisque felis imperdiet proin. Eget
                            arcu dictum varius duis at consectetur lorem donec.
                        </p>
                    </div>
                    <div className="grid justify-content-center flex-column lg:flex-row">
                        <div className="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
                            <div className="w-full hidden lg:block">
                                <div className="text-900 text-3xl font-medium">
                                    Feature Title
                                </div>
                                <p className="text-600 text-xl line-height-3 mb-6">
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </p>
                            </div>
                            <div className="flex px-5 py-2">
                                <i className="pi pi-wallet text-4xl font-bold text-900"></i>
                                <div className="ml-5">
                                    <div className="text-900 font-medium text-2xl">
                                        Eu non diam phasellus
                                    </div>
                                    <p className="text-700">
                                        Vulputate eu scelerisque felis imperdiet
                                        proin. Eget arcu dictum varius duis at
                                        consectetur lorem donec.
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-5 py-2">
                                <i className="pi pi-video text-4xl font-bold text-900"></i>
                                <div className="ml-5">
                                    <div className="text-900 font-medium text-2xl">
                                        Imperdiet proin fermentum
                                    </div>
                                    <p className="text-700">
                                        Consectetur lorem donec massa sapien
                                        faucibus et molestie.
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-5 py-2">
                                <i className="pi pi-tags text-4xl font-bold text-900"></i>
                                <div className="ml-5">
                                    <div className="text-900 font-medium text-2xl">
                                        Est ullamcorper eget
                                    </div>
                                    <p className="text-700">
                                        Eget arcu dictum varius duis at
                                        consectetur lorem donec. Semper viverra
                                        nam libero justo laoreet sit amet cursus
                                        sit.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 flex-order-1 lg:flex-order-2">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-1.png"
                                className="border-round w-full"
                                alt="product"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Single Image with Specs" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="w-full lg:hidden">
                        <div className="text-900 text-3xl font-medium">
                            Feature Title
                        </div>
                        <p className="text-600 text-xl line-height-3 mb-6">
                            Vulputate eu scelerisque felis imperdiet proin. Eget
                            arcu dictum varius duis at consectetur lorem donec.
                        </p>
                    </div>
                    <div className="grid justify-content-center flex-column lg:flex-row">
                        <div className="col-12 lg:col-6">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-2.png"
                                className="border-round w-full"
                                alt="product"
                            />
                        </div>
                        <div className="col-12 lg:col-6 lg:pl-4 py-4">
                            <div className="w-full hidden lg:block">
                                <div className="text-900 text-3xl font-medium">
                                    Feature Title
                                </div>
                                <p className="text-600 text-xl line-height-3 mb-6">
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </p>
                            </div>
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Eu non diam phasellus
                                        </td>
                                        <td className="text-600 p-2">
                                            123 qui
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Arcu felis bibendum
                                        </td>
                                        <td className="text-600 p-2">
                                            123 voluptate
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Imperdiet proin
                                        </td>
                                        <td className="text-600 p-2">
                                            123 consequat
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Est ullamcorper eget
                                        </td>
                                        <td className="text-600 p-2">
                                            123 cillum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Diam sit amet nisl
                                        </td>
                                        <td className="text-600 p-2">
                                            123 esse
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Tempus egestas sed
                                        </td>
                                        <td className="text-600 p-2">
                                            123 velit
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-900 text-xl p-2 font-medium w-7">
                                            Vulputate enim nulla
                                        </td>
                                        <td className="text-600 p-2">
                                            123 deserunt
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Accordion" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-6 p-4 flex flex-column">
                            <p className="text-600 font-medium text-xl">
                                Subtitle
                            </p>
                            <div className="text-900 font-bold text-3xl mt-2">
                                Feature Title
                            </div>
                            <p className="text-600 text-xl mt-3 mb-5 line-height-3">
                                Vulputate eu scelerisque felis imperdiet proin.
                                Eget arcu dictum varius duis at consectetur
                                lorem donec.
                            </p>
                            <Accordion
                                expandIcon="pi pi-fw pi-plus"
                                collapseIcon="pi pi-fw pi-minus"
                            >
                                <AccordionTab header="Eu non diam phasellus">
                                    <ul className="list-none">
                                        <li className="text-600 line-height-3 flex align-items-center mb-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vulputate eu scelerisque felis
                                            imperdiet proin. Eget arcu dictum
                                            varius duis at consectetur lorem
                                            donec.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Hendrerit gravida rutrum quisque non
                                            tellus. Tempus egestas sed sed risus
                                            pretium quam.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vestibulum morbi blandit cursus
                                            risus at ultrices mi tempus
                                            imperdiet. Vulputate enim nulla
                                            aliquet porttitor lacus.
                                        </li>
                                    </ul>
                                </AccordionTab>
                                <AccordionTab header="Nulla facilisi morbi">
                                    <ul className="list-none">
                                        <li className="text-600 line-height-3 flex align-items-center mb-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vulputate eu scelerisque felis
                                            imperdiet proin. Eget arcu dictum
                                            varius duis at consectetur lorem
                                            donec.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Hendrerit gravida rutrum quisque non
                                            tellus. Tempus egestas sed sed risus
                                            pretium quam.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vestibulum morbi blandit cursus
                                            risus at ultrices mi tempus
                                            imperdiet. Vulputate enim nulla
                                            aliquet porttitor lacus.
                                        </li>
                                    </ul>
                                </AccordionTab>
                                <AccordionTab header="Totor id aliquet lectus">
                                    <ul className="list-none">
                                        <li className="text-600 line-height-3 flex align-items-center mb-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vulputate eu scelerisque felis
                                            imperdiet proin. Eget arcu dictum
                                            varius duis at consectetur lorem
                                            donec.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Hendrerit gravida rutrum quisque non
                                            tellus. Tempus egestas sed sed risus
                                            pretium quam.
                                        </li>
                                        <li className="text-600 line-height-3 flex align-items-center my-4">
                                            <i
                                                className="pi pi-circle-fill mr-3"
                                                style={{ fontSize: "7px" }}
                                            ></i>
                                            Vestibulum morbi blandit cursus
                                            risus at ultrices mi tempus
                                            imperdiet. Vulputate enim nulla
                                            aliquet porttitor lacus.
                                        </li>
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </div>
                        <div className="col-12 lg:col-6 p-4">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-3.png"
                                className="w-full"
                                alt="product"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Square Images" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <p className="text-600 font-medium text-xl text-center">
                        Subtitle
                    </p>
                    <div className="text-900 font-bold text-3xl text-center mt-4">
                        Feature Title
                    </div>
                    <p className="text-600 font-medium text-xl text-center mt-4">
                        Vulputate eu scelerisque felis imperdiet proin. Eget
                        arcu dictum varius duis at consectetur lorem donec.
                    </p>

                    <div className="grid mt-7 -mr-3 -ml-3">
                        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-4.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                            <div className="text-900 text-xl mt-4">
                                Facilisis gravida neque
                            </div>
                            <p className="text-600 mt-3 line-height-3">
                                Potenti nullam ac tortor vitae. Aliquet bibendum
                                enim facilisis gravida neque convallis a cras
                                semper.
                            </p>
                        </div>
                        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-5.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                            <div className="text-900 text-xl mt-4">
                                Facilisis gravida neque
                            </div>
                            <p className="text-600 mt-3 line-height-3">
                                Potenti nullam ac tortor vitae. Aliquet bibendum
                                enim facilisis gravida neque convallis a cras
                                semper.
                            </p>
                        </div>
                        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-6.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                            <div className="text-900 text-xl mt-4">
                                Facilisis gravida neque
                            </div>
                            <p className="text-600 mt-3 line-height-3">
                                Potenti nullam ac tortor vitae. Aliquet bibendum
                                enim facilisis gravida neque convallis a cras
                                semper.
                            </p>
                        </div>
                        <div className="xs:col-12 sm:col-6 lg:col-3 p-4 flex flex-column text-center">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-7.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                            <div className="text-900 text-xl mt-4">
                                Facilisis gravida neque
                            </div>
                            <p className="text-600 mt-3 line-height-3">
                                Potenti nullam ac tortor vitae. Aliquet bibendum
                                enim facilisis gravida neque convallis a cras
                                semper.
                            </p>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Overlay with Accordion" code={block5}>
                <div
                    className="surface-section grid grid-nogutter px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover bg-center"
                    style={{
                        background:
                            "url(/demo/images/blocks/ecommerce/productfeature/product-features-1-8.jpg)",
                        "backgroundPosition": "center top",
                    }}
                >
                    <div
                        className="col-12 lg:col-6 p-4 flex flex-column shadow-2 border-round"
                        style={{ background: "rgba(255, 255, 255, 0.9)" }}
                    >
                        <div className="text-black-alpha-90 text-3xl font-bold mb-4">
                            Feature Details
                        </div>
                        <p className="text-black-alpha-60 text-xl line-height-3">
                            Vulputate eu scelerisque felis imperdiet proin. Eget
                            arcu dictum varius duis at consectetur lorem donec.
                        </p>
                        <StyleClass
                            nodeRef={btnRef1}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                        >
                            <a
                                ref={btnRef1}
                                tabIndex="0"
                                className="cursor-pointer text-black-alpha-90 text-2xl font-medium mt-3 mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150"
                            >
                                Eu non diam phasellus
                                <i className="pi pi-fw pi-plus text-3xl"></i>
                            </a>
                        </StyleClass>
                        <div className="overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <ul className="list-none">
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Hendrerit gravida rutrum quisque non tellus.
                                    Tempus egestas sed sed risus pretium quam.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vestibulum morbi blandit cursus risus at
                                    ultrices mi tempus imperdiet. Vulputate enim
                                    nulla aliquet porttitor lacus.
                                </li>
                            </ul>
                        </div>
                        <StyleClass
                            nodeRef={btnRef2}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                        >
                            <a
                                ref={btnRef2}
                                tabIndex="0"
                                className="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150"
                            >
                                Nulla facilisi morbi
                                <i className="pi pi-fw pi-plus text-3xl"></i>
                            </a>
                        </StyleClass>
                        <div className="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
                            <ul className="list-none">
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Hendrerit gravida rutrum quisque non tellus.
                                    Tempus egestas sed sed risus pretium quam.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vestibulum morbi blandit cursus risus at
                                    ultrices mi tempus imperdiet. Vulputate enim
                                    nulla aliquet porttitor lacus.
                                </li>
                            </ul>
                        </div>
                        <StyleClass
                            nodeRef={btnRef3}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                        >
                            <a
                                ref={btnRef3}
                                tabIndex="0"
                                className="cursor-pointer text-black-alpha-90 text-2xl font-medium mb-2 py-3 flex justify-content-between w-full border-bottom-1 border-black-alpha-10 hover:text-black-alpha-60 transition-duration-150"
                            >
                                Tortor id aliquet lectus
                                <i className="pi pi-fw pi-plus text-3xl"></i>
                            </a>
                        </StyleClass>
                        <div className="overflow-hidden hidden transition-all transition-duration-400 transition-ease-in-out">
                            <ul className="list-none">
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center mb-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Hendrerit gravida rutrum quisque non tellus.
                                    Tempus egestas sed sed risus pretium quam.
                                </li>
                                <li className="text-black-alpha-60 line-height-3 flex align-items-center my-3">
                                    <i
                                        className="pi pi-circle-fill mr-3"
                                        style={{ fontSize: "7px" }}
                                    ></i>
                                    Vestibulum morbi blandit cursus risus at
                                    ultrices mi tempus imperdiet. Vulputate enim
                                    nulla aliquet porttitor lacus.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Alternating Sections" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mr-4 -ml-4 flex-column xl:flex-row">
                        <div className="col-12 xl:col-6 p-4">
                            <div className="bg-yellow-50 border-round flex flex-column justify-content-center h-full p-6">
                                <p className="text-yellow-600 mb-4 font-bold">
                                    SUBTITLE
                                </p>
                                <div className="text-yellow-900 text-3xl font-medium">
                                    Feature Details
                                </div>
                                <p className="text-yellow-800 text-xl line-height-3">
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6 p-4">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-9.png"
                                className="w-full"
                                alt="product"
                            />
                        </div>
                        <div className="col-12 xl:col-6 p-4">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-10.png"
                                className="w-full"
                                alt="product"
                            />
                        </div>
                        <div className="col-12 xl:col-6 p-4">
                            <div className="bg-cyan-50 border-round flex flex-column justify-content-center h-full p-6">
                                <p className="text-cyan-600 mb-4 font-bold">
                                    SUBTITLE
                                </p>
                                <div className="text-cyan-900 text-3xl font-medium">
                                    Feature Details
                                </div>
                                <p className="text-cyan-800 text-xl line-height-3">
                                    Vulputate eu scelerisque felis imperdiet
                                    proin. Eget arcu dictum varius duis at
                                    consectetur lorem donec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Two Columns" code={block7}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-4xl font-bold text-center">
                        Cursus sit amet dictum sit amet justo donec enim
                    </div>
                    <p className="text-600 text-2xl text-center px-5 line-height-3">
                        Volutpat diam ut venenatis tellus in metus vulputate eu
                        scelerisque. Eu augue ut lectus arcu bibendum at. Et
                        odio pellentesque diam volutpat. Aliquam ut porttitor
                        leo a.
                    </p>
                    <div className="grid mt-3 -mr-3 -ml-3">
                        <div className="col-12 lg:col-6 p-3">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-11.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <img
                                src="/demo/images/blocks/ecommerce/productfeature/product-features-1-12.png"
                                alt="product"
                                className="w-full h-full border-round"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default ProductFeature;
