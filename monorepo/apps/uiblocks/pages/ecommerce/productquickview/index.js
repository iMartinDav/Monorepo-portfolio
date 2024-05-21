import React, { useState } from "react";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";
import BlockViewer from "../../../demo/components/BlockViewer";

const ProductQuickView = () => {
    const [hovered, setHovered] = useState(false);
    const [visibleDialog, setVisibleDialog] = useState(false);

    const [color1, setColor1] = useState("cyan");
    const [size1, setSize1] = useState("M");
    const images = [
        "product-quickview-2-1.png",
        "product-quickview-2-2.png",
        "product-quickview-2-3.png",
        "product-quickview-2-4.png",
        "product-quickview-2-5.png",
        "product-quickview-2-6.png",
    ];
    const responsiveOptions = [
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "560px",
            numVisible: 2,
        },
    ];

    const block1 = `
<div className="shadow-2 border-round surface-card p-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <div className="relative">
        <img src="/demo/images/blocks/ecommerce/productquickview/product-quickview-1-1.png" className="w-15rem" alt="product-quickview-1-1" />
        {hovered && <button className="fadein absolute p-component border-none bg-black-alpha-40 hover:bg-black-alpha-50 px-3 py-2 text-white font-medium text-base border-round cursor-pointer transition-colors transition-duration-300 w-13rem"
            style={{ bottom: '1rem', left: '1rem' }} onClick={() => setVisibleDialog(true)}>View Details</button>}
    </div>
    <div className="flex align-items-center justify-content-between text-xl font-medium mt-3 text-900">
        <span>Hover Image</span>
        <span>$90.00</span>
    </div>
</div>

<Dialog visible={visibleDialog} appendTo="self" modal breakpoints={{ '960px': '75vw', '640px': '90vw' }} style={{ width: '700px' }} showHeader={false} contentStyle={{ padding: '2rem 2rem 1rem 2rem' }}>
    <div className="grid relative">
        <div className="col-12 lg:col-6 text-center">
            <img src="/demo/images/blocks/ecommerce/productquickview/product-quickview-1-1.png" className="w-8rem sm:w-15rem lg:w-20rem" alt="product-quickview-1-1"/>
        </div>
        <div className="col-12 lg:col-6 py-0 lg:pl-5">
            <div className="flex justify-content-end">
                <Button className="absolute lg:static p-button-text p-button-plain p-button-rounded" icon="pi pi-times pi-2xl" onClick={() => setVisibleDialog(false)} style={{ right: '0rem', top: '0rem' }} />
            </div>
            <div className="flex align-items-center justify-content-between mb-3">
                <span className="text-xl font-medium text-900">Product Title</span>
            </div>
            <div className="flex align-items-center justify-content-between mb-3">
                <div className="text-xl text-900">$123</div>
                <div className="flex align-items-center">
                    <span className="mr-3 flex">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500"></i>
                    </span>
                </div>
            </div>
            <p className="p-0 mt-0 mb-3 line-height-3 text-700">
                Dolor purus non enim praesent.
                At quis risus sed vulputate odio ut.
            </p>
            <div className="font-bold text-900 mb-3">Color</div>
            <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor1('cyan')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor1('purple')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 border-white transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor1('indigo')}></div>
            </div>

            <div className="mb-3 flex align-items-center justify-content-between">
                <span className="font-bold text-900">Size</span>
                <a tabIndex="0" className="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div className="flex align-items-center mb-3 text-base">
                <div className={classNames('h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'S' })} onClick={() => setSize1('S')}>S</div>
                <div className={classNames('h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'M' })} onClick={() => setSize1('M')}>M</div>
                <div className={classNames('h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'L' })} onClick={() => setSize1('L')}>L</div>
                <div className={classNames('h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'XL' })} onClick={() => setSize1('XL')}>XL</div>
            </div>

            <Button icon="pi pi-shopping-cart" className="w-full" label="Add to Cart" />
        </div>
    </div>
</Dialog>
    `;
    const block2 = `
<div className="surface-overlay border-round p-4 shadow-4 relative" style={{ maxWidth: '800px' }}>
    <div className="grid">
        <div className="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={3} style={{ maxWidth: '300px' }}
                item={(item) => <img src={'/demo/images/blocks/ecommerce/productquickview/' + item} style={{ width: '100%', display: 'block' }} />}
                thumbnail={(item) => <div className="grid grid-nogutter justify-content-center">
                    <img src={'/demo/images/blocks/ecommerce/productquickview/' + item} width="50" alt="product-quickview" />
                </div>}
            />

        </div>
        <div className="col-12 md:col-6 md:pl-5">
            <div className="flex justify-content-end">
                <Button className="p-button-text p-button-plain p-button-rounded absolute md:sticky" icon="pi pi-times pi-2xl" style={{ right: '.5rem', top: '.5rem' }}></Button>
            </div>
            <div className="text-900 text-2xl font-medium mb-3">Product Title</div>
            <div className="text-900 text-3xl font-bold mb-3">$120.00</div>
            <p className="text-700 line-height-3 my-4 p-0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Urna molestie at elementum eu facilisis.</p>
            <div className="flex align-items-center mb-4">
                <Button label="Add to Cart" className="mr-3 py-2" />
                <Button icon="pi pi-heart" className="p-button-text" />
            </div>
            <div className="flex align-items-center mb-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="-mr-1 w-2rem h-2rem" alt="avatar-f-1"/>
                <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="-mr-1 w-2rem h-2rem" alt="avatar-m-1" />
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="-mr-1 w-2rem h-2rem" alt="avatar-f-2" />
                <img src="/demo/images/blocks/avatars/circle/avatar-m-2.png" className="mr-3 w-2rem h-2rem"  alt="avatar-m-2"/>
                <span className="text-600 text-sm font-medium">11 other people liked it</span>
            </div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-2">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span className="text-900 text-sm">Urna molestie at elementum eu facilisis.</span>
                </li>
                <li className="flex align-items-center mb-2">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span className="text-900 text-sm">Ut tristique et egestas quis ipsum..</span>
                </li>
                <li className="flex align-items-center">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span className="text-900 text-sm">Magna etiam tempor orci..</span>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Product Quickview</div>
            <BlockViewer
                header="Single Picture with Selectors"
                code={block1}
                previewStyle={{ height: "640px" }}
                containerClassName="flex align-items-center justify-content-center"
            >
                <div
                    className="shadow-2 border-round surface-card p-4"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="relative">
                        <img
                            src="/demo/images/blocks/ecommerce/productquickview/product-quickview-1-1.png"
                            className="w-15rem"
                            alt="product-quickview-1-1"
                        />
                        {hovered && (
                            <button
                                className="fadein absolute p-component border-none bg-black-alpha-40 hover:bg-black-alpha-50 px-3 py-2 text-white font-medium text-base border-round cursor-pointer transition-colors transition-duration-300 w-13rem"
                                style={{ bottom: "1rem", left: "1rem" }}
                                onClick={() => setVisibleDialog(true)}
                            >
                                View Details
                            </button>
                        )}
                    </div>
                    <div className="flex align-items-center justify-content-between text-xl font-medium mt-3 text-900">
                        <span>Hover Image</span>
                        <span>$90.00</span>
                    </div>
                </div>

                <Dialog
                    visible={visibleDialog}
                    appendTo="self"
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "90vw" }}
                    style={{ width: "700px" }}
                    showHeader={false}
                    contentStyle={{ padding: "2rem 2rem 1rem 2rem" }}
                >
                    <div className="grid relative">
                        <div className="col-12 lg:col-6 text-center">
                            <img
                                src="/demo/images/blocks/ecommerce/productquickview/product-quickview-1-1.png"
                                className="w-8rem sm:w-15rem lg:w-20rem"
                                alt="product-quickview-1-1"
                            />
                        </div>
                        <div className="col-12 lg:col-6 py-0 lg:pl-5">
                            <div className="flex justify-content-end">
                                <Button
                                    className="absolute lg:static p-button-text p-button-plain p-button-rounded"
                                    icon="pi pi-times pi-2xl"
                                    onClick={() => setVisibleDialog(false)}
                                    style={{ right: "0rem", top: "0rem" }}
                                />
                            </div>
                            <div className="flex align-items-center justify-content-between mb-3">
                                <span className="text-xl font-medium text-900">
                                    Product Title
                                </span>
                            </div>
                            <div className="flex align-items-center justify-content-between mb-3">
                                <div className="text-xl text-900">$123</div>
                                <div className="flex align-items-center">
                                    <span className="mr-3 flex">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500"></i>
                                    </span>
                                </div>
                            </div>
                            <p className="p-0 mt-0 mb-3 line-height-3 text-700">
                                Dolor purus non enim praesent. At quis risus sed
                                vulputate odio ut.
                            </p>
                            <div className="font-bold text-900 mb-3">Color</div>
                            <div className="flex align-items-center mb-5">
                                <div
                                    className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300"
                                    style={{
                                        boxShadow:
                                            color1 === "cyan"
                                                ? "0 0 0 0.2rem var(--cyan-500)"
                                                : null,
                                    }}
                                    onClick={() => setColor1("cyan")}
                                ></div>
                                <div
                                    className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300"
                                    style={{
                                        boxShadow:
                                            color1 === "purple"
                                                ? "0 0 0 0.2rem var(--purple-500)"
                                                : null,
                                    }}
                                    onClick={() => setColor1("purple")}
                                ></div>
                                <div
                                    className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 border-white transition-all transition-duration-300"
                                    style={{
                                        boxShadow:
                                            color1 === "indigo"
                                                ? "0 0 0 0.2rem var(--indigo-500)"
                                                : null,
                                    }}
                                    onClick={() => setColor1("indigo")}
                                ></div>
                            </div>

                            <div className="mb-3 flex align-items-center justify-content-between">
                                <span className="font-bold text-900">Size</span>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-600 text-sm flex align-items-center"
                                >
                                    Size Guide{" "}
                                    <i className="ml-1 pi pi-angle-right"></i>
                                </a>
                            </div>
                            <div className="flex align-items-center mb-3 text-base">
                                <div
                                    className={classNames(
                                        "h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors",
                                        {
                                            "border-blue-500 border-2 text-blue-500":
                                                size1 === "S",
                                        }
                                    )}
                                    onClick={() => setSize1("S")}
                                >
                                    S
                                </div>
                                <div
                                    className={classNames(
                                        "h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors",
                                        {
                                            "border-blue-500 border-2 text-blue-500":
                                                size1 === "M",
                                        }
                                    )}
                                    onClick={() => setSize1("M")}
                                >
                                    M
                                </div>
                                <div
                                    className={classNames(
                                        "h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors",
                                        {
                                            "border-blue-500 border-2 text-blue-500":
                                                size1 === "L",
                                        }
                                    )}
                                    onClick={() => setSize1("L")}
                                >
                                    L
                                </div>
                                <div
                                    className={classNames(
                                        "h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors",
                                        {
                                            "border-blue-500 border-2 text-blue-500":
                                                size1 === "XL",
                                        }
                                    )}
                                    onClick={() => setSize1("XL")}
                                >
                                    XL
                                </div>
                            </div>

                            <Button
                                icon="pi pi-shopping-cart"
                                className="w-full"
                                label="Add to Cart"
                            />
                        </div>
                    </div>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="Galleria and Features"
                code={block2}
                previewStyle={{ backgroundColor: "var(--maskbg)" }}
                containerClassName="flex align-items-center justify-content-center h-screen"
            >
                <div
                    className="surface-overlay border-round p-4 shadow-4 relative"
                    style={{ maxWidth: "800px" }}
                >
                    <div className="grid">
                        <div className="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
                            <Galleria
                                value={images}
                                responsiveOptions={responsiveOptions}
                                numVisible={3}
                                style={{ maxWidth: "300px" }}
                                item={(item) => (
                                    <img
                                        src={
                                            "/demo/images/blocks/ecommerce/productquickview/" +
                                            item
                                        }
                                        style={{
                                            width: "100%",
                                            display: "block",
                                        }}
                                        alt="product-quickview"
                                    />
                                )}
                                thumbnail={(item) => (
                                    <div className="grid grid-nogutter justify-content-center">
                                        <img
                                            src={
                                                "/demo/images/blocks/ecommerce/productquickview/" +
                                                item
                                            }
                                            width="50"
                                            alt="product-quickview"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className="col-12 md:col-6 md:pl-5">
                            <div className="flex justify-content-end">
                                <Button
                                    className="p-button-text p-button-plain p-button-rounded absolute md:sticky"
                                    icon="pi pi-times pi-2xl"
                                    style={{ right: ".5rem", top: ".5rem" }}
                                ></Button>
                            </div>
                            <div className="text-900 text-2xl font-medium mb-3">
                                Product Title
                            </div>
                            <div className="text-900 text-3xl font-bold mb-3">
                                $120.00
                            </div>
                            <p className="text-700 line-height-3 my-4 p-0">
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames. Urna molestie at
                                elementum eu facilisis.
                            </p>
                            <div className="flex align-items-center mb-4">
                                <Button
                                    label="Add to Cart"
                                    className="mr-3 py-2"
                                />
                                <Button
                                    icon="pi pi-heart"
                                    className="p-button-text"
                                />
                            </div>
                            <div className="flex align-items-center mb-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    className="-mr-1 w-2rem h-2rem"
                                    alt="avatar-f-1"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                    className="-mr-1 w-2rem h-2rem"
                                    alt="avatar-m-1"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    className="-mr-1 w-2rem h-2rem"
                                    alt="avatar-f-2"
                                />
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-2.png"
                                    className="mr-3 w-2rem h-2rem"
                                    alt="avatar-m-2"
                                />
                                <span className="text-600 text-sm font-medium">
                                    11 other people liked it
                                </span>
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center mb-2">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span className="text-900 text-sm">
                                        Urna molestie at elementum eu facilisis.
                                    </span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span className="text-900 text-sm">
                                        Ut tristique et egestas quis ipsum..
                                    </span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span className="text-900 text-sm">
                                        Magna etiam tempor orci..
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default ProductQuickView;
