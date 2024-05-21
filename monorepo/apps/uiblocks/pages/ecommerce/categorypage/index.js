import React, { useRef, useState } from "react";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { ToggleButton } from "primereact/togglebutton";
import BlockViewer from "../../../demo/components/BlockViewer";
import { StyleClass } from "primereact/styleclass";

const CategoryPage = () => {
    const [color1, setColor1] = useState("black");
    const [color2, setColor2] = useState("bluegray");
    const [color3, setColor3] = useState("green");
    const [color4, setColor4] = useState("blue");
    const [color5, setColor5] = useState("black");
    const [color6, setColor6] = useState("black");
    const [color7, setColor7] = useState("blue");
    const [color8, setColor8] = useState("green");
    const [text, setText] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedColors, setSelectedColors] = useState([
        { name: "Black", class: "bg-gray-500" },
    ]);
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const menu = useRef(null);

    const prices = [
        { range: "$10 - $100" },
        { range: "$101 - $200" },
        { range: "$201 - $300" },
        { range: "$301 - $400" },
    ];

    const [selectedBrands, setSelectedBrands] = useState([
        { name: "Alfred" },
        { name: "Hyper" },
    ]);

    const items = [{ label: "Color" }, { label: "Size" }, { label: "Price" }];

    const brands = [
        { name: "Alfred" },
        { name: "Hyper" },
        { name: "Peak" },
        { name: "Bastion" },
    ];

    const colors = [
        { name: "Black", class: "bg-gray-500" },
        { name: "Orange", class: "bg-orange-500" },
        { name: "Indigo", class: "bg-indigo-500" },
        { name: "Pink", class: "bg-pink-500" },
    ];

    const block1 = `
<div className="bg-cyan-700 px-4 lg:px-8 py-2 text-center">
    <span className="text-white">Free shipping on orders over $100</span>
</div>

<div className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style={{ minHeight: '80px' }}>
    <div className="flex align-items-center justify-content-center">
        <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" className="hidden lg:inline mr-3 lg:mr-6" />
        <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" className="inline lg:hidden mr-3 lg:mr-6" />
    </div>
    <div className="flex align-items-center flex-auto">
        <div className="p-input-icon-left w-full p-input-filled">
            <i className="pi pi-search"></i>
            <InputText type="text" className="w-full" placeholder="Product search" />
        </div>
    </div>
    <div className="flex ml-3 lg:ml-6">
        <ul className="list-none p-0 m-0 flex">
            <li className="inline-flex relative">
                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveclassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef1} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none">
                        <i className="pi pi-user text-xl"></i>
                        <span className="hidden">My Account</span>
                        <Ripple />
                    </a>
                </StyleClass>

                <div className="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                    <ul className="list-none p-0 m-0">
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-box text-lg mr-2"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-heart text-lg mr-2"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-star text-lg mr-2"></i>
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i className="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="inline-flex relative">
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveclassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none">
                        <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                        <span className="hidden">My Cart</span>
                        <Ripple />
                    </a>
                </StyleClass>

                <div className="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                    <span className="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                    <div className="flex align-items-center border-bottom-1 surface-border pb-3">
                        <img src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" className="w-4rem flex-shrink-0 shadow-1" alt="shopping-cart-2-2"/>
                        <div className="flex flex-column pl-3">
                            <span className="text-900 font-medium mb-2">Prime Watch</span>
                            <span className="text-600 mb-2">Standard Size</span>
                            <span className="text-primary font-bold">$50.00</span>
                        </div>
                    </div>
                    <div className="flex pt-3">
                        <Button className="p-button-outlined mr-2">View Cart</Button>
                        <Button className="ml-2">Purchase</Button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div className="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border" style={{ minHeight: '80px' }}>
    <div className="flex">
        <ul className="list-none p-0 m-0 flex">
            <li className="flex">
                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef3} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Women</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                    <div className="flex flex-wrap justify-content-between p-4 lg:p-6">
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Clothing</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Shoes</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li className="font-bold mb-5 text-xl text-900">Accessories</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <ul className="list-none flex p-0 m-0">
                            <li className="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-1.png" alt="Image" style={{ borderRadius: '12px' }} className="mb-5 w-full lg:w-20rem" />
                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">New Arrivals</span>
                                <a className="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                            <li className="flex flex-column align-items-center pl-3 lg:pl-0">
                                <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-2.png" alt="Image" style={{ borderRadius: '12px' }} className="mb-5 w-full lg:w-20rem" />
                                <span className="inline-flex surface-0 text-900 border-round font-semibold text-xl mb-3">Seasonal</span>
                                <a className="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="flex">
                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef4} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Men</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li className="flex">
                <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef5} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none">
                        <span>Kids</span>
                        <Ripple />
                    </a>
                </StyleClass>

                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
</div>

<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-between flex-wrap">
        <div className="flex align-items-center mb-4 md:mb-0">
            <div className="text-900 font-bold text-3xl">Category Title </div>
            <Badge value={76} className="ml-3 bg-gray-200 text-gray-900 p-0 border-circle" />
        </div>
        <div>
            <Button icon="pi pi-sort-alt" className="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" onClick={(event) => menu.current.toggle(event)} />
            <Menu ref={menu} popup model={items} />
        </div>
    </div>

    <p className="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider className="w-full border-gray-200" />
    <div className="grid grid-nogutter align-items-center">
        <MultiSelect options={brands} value={selectedBrands} onChange={(e) => setSelectedBrands(e.value)} placeholder="Brand" optionLabel="name" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedBrands && selectedBrands.length} brands selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" />
        <MultiSelect options={colors} value={selectedColors} onChange={(e) => setSelectedColors(e.value)} placeholder="Color" optionLabel="name" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedColors && selectedColors.length} colors selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" itemTemplate={(color) => <div className="flex align-items-center">
            <div className={\`w-2rem h-2rem border-circle \${color.class} cursor-pointer border-none\`}></div>
            <div className="text-900 ml-2">{color.name}</div>
        </div>} />
        <MultiSelect options={prices} value={selectedPrice} onChange={(e) => setSelectedPrice(e.value)} placeholder="Price" optionLabel="range" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedPrice && selectedPrice.length} prices selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" />
        <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" />
        <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" />
        <a tabIndex="0" className="p-ripple cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900">Clear All
            <Ripple />
        </a>
        <div className="col-12">
            <div className="grid mt-4">
                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-1.png" className="w-full" alt="product-list-2-1" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color1 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor1('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color1 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor1('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color1 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor1('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color1 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor1('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color1}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-2.png" className="w-full" alt="product-list-2-2" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color2 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor2('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color2 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor2('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color2 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor2('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color2 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor2('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color2}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-3.png" className="w-full" alt="product-list-2-3" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color3 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor3('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color3 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor3('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color3 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor3('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color3 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor3('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color3}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-4.png" className="w-full" alt="product-list-2-4" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color4 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor4('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color4 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor4('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color4 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor4('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color4 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor4('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color4}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-28.png" className="w-full" alt="category-preview-1-28" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color5 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor5('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color5 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor5('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color5 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor5('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color5 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor5('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color5}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-29.png" className="w-full" alt="category-preview-1-29" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color6 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor6('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color6 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor6('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color6 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor6('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color6 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor6('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color6}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-30.png" className="w-full" alt="category-preview-1-30" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color7 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor7('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color7 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor7('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color7 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor7('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color7 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor7('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color7}</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mt-5">
                    <div className="mb-3 relative">
                        <img src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-31.png" className="w-full" alt="category-preview-1-31" />
                        <button type="button" className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                            style={{ bottom: '1rem', left: '1rem', width: 'calc(100% - 2rem)', backdropFilter: 'blur(4px)' }}>
                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                            <span className="text-base">Add to Cart</span>
                            <Ripple />
                        </button>
                    </div>
                    <div className="flex flex-column align-items-center">
                        <span className="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span className="text-xl text-900 mb-3">$150.00</span>
                        <div className="flex align-items-center mb-3">
                            <div className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color8 === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null }} onClick={() => setColor8('black')}></div>
                            <div className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color8 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor8('bluegray')}></div>
                            <div className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color8 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor8('green')}></div>
                            <div className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                style={{ width: '1.2rem', height: '1.2rem', boxShadow: color8 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor8('blue')}></div>
                        </div>
                        <span className="text-500 capitalize">{color8}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Divider className="w-full border-gray-200 m-0" />
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid grid-nogutter flex-wrap p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
        <div className="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
            <span className="text-3xl block text-cyan-900 font-bold">Get Deals and Updates from Peak</span>
            <span className="block text-cyan-600 mt-3">We promise for not sending spam emails. It’ll only good emails.</span>
            <div className="p-inputgroup relative mt-4" style={{ borderRadius: '30px', maxWidth: '90%' }}>
                <InputText value={text} onChange={(e) => setText(e.target.value)} placeholder="Email" style={{ borderRadius: '30px', height: '3.5rem' }} className="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100" />
                <Button type="button" label="Subscribe" className="bg-cyan-500 border-none absolute text-white" style={{ borderRadius: '30px', right: '8px', top: '8px', height: '2.5rem', zIndex: '1' }} />
            </div>
        </div>
        <div className="col-12 lg:col-6 p-4">
            <div className="w-full h-full bg-no-repeat bg-center bg-cover p-5" style={{ background: 'url(/demo/images/blocks/ecommerce/categorypage/categorypage-1-1.png)', borderRadius: '30px' }}>
                <span className="text-cyan-500 font-bold block">Exclusive Peak Club</span>
                <span className="text-white text-xl font-bold block mt-3 line-height-3">Join Exlusive Peak Club for free shipping, premium service and deals.</span>
                <Button type="button" label="Get Your Card Today" className="bg-cyan-500 border-none w-full mt-3 text-white" style={{ borderRadius: '30px' }} />
            </div>
        </div>
    </div>
    <div className="grid grid-nogutter text-center sm:text-left flex-wrap mt-8">
        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Company</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Account</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Legal</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>

        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span className="text-900 text-xl block">Connect</span>
            <ul className="list-none p-0">
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
            </ul>
        </div>
    </div>
</div>

<div className="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
        <span className="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
        <i className="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Category Pages</div>
            <BlockViewer
                header="With Dropdown Filter and Hover CTA"
                code={block1}
            >
                <div className="bg-cyan-700 px-4 lg:px-8 py-2 text-center">
                    <span className="text-white">
                        Free shipping on orders over $100
                    </span>
                </div>

                <div
                    className="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border"
                    style={{ minHeight: "80px" }}
                >
                    <div className="flex align-items-center justify-content-center">
                        <img
                            src="/demo/images/blocks/logos/peak-700.svg"
                            alt="Image"
                            height="40"
                            className="hidden lg:inline mr-3 lg:mr-6"
                        />
                        <img
                            src="/demo/images/blocks/logos/peak-700.svg"
                            alt="Image"
                            height="40"
                            className="inline lg:hidden mr-3 lg:mr-6"
                        />
                    </div>
                    <div className="flex align-items-center flex-auto">
                        <div className="p-input-icon-left w-full p-input-filled">
                            <i className="pi pi-search"></i>
                            <InputText
                                type="text"
                                className="w-full"
                                placeholder="Product search"
                            />
                        </div>
                    </div>
                    <div className="flex ml-3 lg:ml-6">
                        <ul className="list-none p-0 m-0 flex">
                            <li className="inline-flex relative">
                                <StyleClass
                                    nodeRef={btnRef1}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveclassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef1}
                                        className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none"
                                    >
                                        <i className="pi pi-user text-xl"></i>
                                        <span className="hidden">
                                            My Account
                                        </span>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <div className="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-box text-lg mr-2"></i>
                                                <span>Orders</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-heart text-lg mr-2"></i>
                                                <span>Favorites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-star text-lg mr-2"></i>
                                                <span>Reviews</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                                <i className="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                                <span>Sign Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="inline-flex relative">
                                <StyleClass
                                    nodeRef={btnRef2}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveclassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef2}
                                        className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none"
                                    >
                                        <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                            <Badge />
                                        </i>
                                        <span className="hidden">My Cart</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <div className="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                                    <span className="text-900 font-medium mb-3 block">
                                        My Cart (1 Item)
                                    </span>
                                    <div className="flex align-items-center border-bottom-1 surface-border pb-3">
                                        <img
                                            src="/demo/images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png"
                                            className="w-4rem flex-shrink-0 shadow-1"
                                            alt="shopping-cart-2-2"
                                        />
                                        <div className="flex flex-column pl-3">
                                            <span className="text-900 font-medium mb-2">
                                                Prime Watch
                                            </span>
                                            <span className="text-600 mb-2">
                                                Standard Size
                                            </span>
                                            <span className="text-primary font-bold">
                                                $50.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex pt-3">
                                        <Button className="p-button-outlined mr-2">
                                            View Cart
                                        </Button>
                                        <Button className="ml-2">
                                            Purchase
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border"
                    style={{ minHeight: "80px" }}
                >
                    <div className="flex">
                        <ul className="list-none p-0 m-0 flex">
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef3}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef3}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Women</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                                    <div className="flex flex-wrap justify-content-between p-4 lg:p-6">
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
                                                Clothing
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Dresses
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Jeans
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Pants
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Skirts
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Sweaters
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Blouses
                                            </li>
                                        </ul>
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
                                                Shoes
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Athletic
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Boots
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Sneakers
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Flats
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Outdoor
                                            </li>
                                        </ul>
                                        <ul className="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                            <li className="font-bold mb-5 text-xl text-900">
                                                Accessories
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Handbags
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Gloves
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Belts
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Hats
                                            </li>
                                            <li className="mb-3 cursor-pointer hover:text-900">
                                                Earmuffs
                                            </li>
                                        </ul>
                                        <ul className="list-none flex p-0 m-0">
                                            <li className="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                                <img
                                                    src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-1.png"
                                                    alt="Image"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                    className="mb-5 w-full lg:w-20rem"
                                                />
                                                <span className="inline-flex surface-0 text-900 border-round font-semibold mb-3">
                                                    New Arrivals
                                                </span>
                                                <a className="cursor-pointer text-700 font-medium hover:text-900">
                                                    View All
                                                </a>
                                            </li>
                                            <li className="flex flex-column align-items-center pl-3 lg:pl-0">
                                                <img
                                                    src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-3-2.png"
                                                    alt="Image"
                                                    style={{
                                                        borderRadius: "12px",
                                                    }}
                                                    className="mb-5 w-full lg:w-20rem"
                                                />
                                                <span className="inline-flex surface-0 text-900 border-round font-semibold mb-3">
                                                    Seasonal
                                                </span>
                                                <a className="cursor-pointer text-700 font-medium hover:text-900">
                                                    View All
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef4}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef4}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Men</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                            <li className="flex">
                                <StyleClass
                                    nodeRef={btnRef5}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef5}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none"
                                    >
                                        <span>Kids</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <div className="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center mb-4 md:mb-0">
                            <div className="text-900 font-bold text-3xl">
                                Category Title{" "}
                            </div>
                            <Badge
                                value={76}
                                className="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"
                            />
                        </div>
                        <div>
                            <Button
                                icon="pi pi-sort-alt"
                                className="p-button-outlined p-button-secondary w-7rem p-2"
                                iconPos="right"
                                label="Sort By"
                                onClick={(event) => menu.current.toggle(event)}
                            />
                            <Menu ref={menu} popup model={items} />
                        </div>
                    </div>

                    <p className="text-600 text-xl">
                        Nullam faucibus, sem et bibendum finibus, sapien ipsum
                        congue felis, sit amet pretium ex nisl ut eros.
                    </p>
                    <Divider className="w-full border-gray-200" />
                    <div className="grid grid-nogutter align-items-center">
                        <MultiSelect
                            options={brands}
                            value={selectedBrands}
                            onChange={(e) => setSelectedBrands(e.value)}
                            placeholder="Brand"
                            optionLabel="name"
                            filter
                            maxSelectedLabels="2"
                            selectedItemsLabel={`${selectedBrands && selectedBrands.length
                                } brands selected`}
                            className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900"
                        />
                        <MultiSelect
                            options={colors}
                            value={selectedColors}
                            onChange={(e) => setSelectedColors(e.value)}
                            placeholder="Color"
                            optionLabel="name"
                            filter
                            maxSelectedLabels="2"
                            selectedItemsLabel={`${selectedColors && selectedColors.length
                                } colors selected`}
                            className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900"
                            itemTemplate={(color) => (
                                <div className="flex align-items-center">
                                    <div
                                        className={`w-2rem h-2rem border-circle ${color.class} cursor-pointer border-none`}
                                    ></div>
                                    <div className="text-900 ml-2">
                                        {color.name}
                                    </div>
                                </div>
                            )}
                        />
                        <MultiSelect
                            options={prices}
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.value)}
                            placeholder="Price"
                            optionLabel="range"
                            filter
                            maxSelectedLabels="2"
                            selectedItemsLabel={`${selectedPrice && selectedPrice.length
                                } prices selected`}
                            className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900"
                        />
                        <ToggleButton
                            checked={checked1}
                            onChange={(e) => setChecked1(e.value)}
                            onLabel="Sustainable"
                            offLabel="Unsustainable"
                            onIcon="pi pi-check"
                            offIcon="pi pi-times"
                            className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem"
                        />
                        <ToggleButton
                            checked={checked2}
                            onChange={(e) => setChecked2(e.value)}
                            onLabel="Sale"
                            offLabel="Not Sale"
                            onIcon="pi pi-check"
                            offIcon="pi pi-times"
                            className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem"
                        />
                        <a
                            tabIndex="0"
                            className="p-ripple cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900"
                        >
                            Clear All
                            <Ripple />
                        </a>
                        <div className="col-12">
                            <div className="grid mt-4">
                                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-2-1.png"
                                            className="w-full"
                                            alt="product-list-2-1"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color1 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor1("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color1 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor1("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color1 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor1("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color1 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor1("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color1}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-2-2.png"
                                            className="w-full"
                                            alt="product-list-2-2"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color2 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor2("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color2 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor2("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color2 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor2("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color2 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor2("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color2}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-2-3.png"
                                            className="w-full"
                                            alt="product-list-2-3"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color3 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor3("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color3 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor3("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color3 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor3("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color3 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor3("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color3}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-2-4.png"
                                            className="w-full"
                                            alt="product-list-2-4"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color4 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor4("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color4 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor4("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color4 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor4("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color4 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor4("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color4}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-28.png"
                                            className="w-full"
                                            alt="category-preview-1-28"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color5 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor5("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color5 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor5("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color5 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor5("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color5 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor5("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color5}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-29.png"
                                            className="w-full"
                                            alt="category-preview-1-29"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color6 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor6("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color6 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor6("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color6 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor6("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color6 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor6("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color6}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-30.png"
                                            className="w-full"
                                            alt="category-preview-1-30"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color7 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor7("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color7 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor7("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color7 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor7("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color7 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor7("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color7}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 mt-5">
                                    <div className="mb-3 relative">
                                        <img
                                            src="/demo/images/blocks/ecommerce/categorypreview/category-preview-1-31.png"
                                            className="w-full"
                                            alt="category-preview-1-31"
                                        />
                                        <button
                                            type="button"
                                            className="p-ripple border-1 border-white-alpha-20 border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer font-semibold"
                                            style={{
                                                bottom: "1rem",
                                                left: "1rem",
                                                width: "calc(100% - 2rem)",
                                                backdropFilter: "blur(4px)"
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart mr-3 text-base"></i>
                                            <span className="text-base">
                                                Add to Cart
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                    <div className="flex flex-column align-items-center">
                                        <span className="text-xl text-900 font-medium mb-3">
                                            Product Name
                                        </span>
                                        <span className="text-xl text-900 mb-3">
                                            $150.00
                                        </span>
                                        <div className="flex align-items-center mb-3">
                                            <div
                                                className="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color8 === "black"
                                                            ? "0 0 0 0.2rem var(--bluegray-900)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor8("black")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color8 === "bluegray"
                                                            ? "0 0 0 0.2rem var(--bluegray-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor8("bluegray")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color8 === "green"
                                                            ? "0 0 0 0.2rem var(--green-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor8("green")
                                                }
                                            ></div>
                                            <div
                                                className="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                                style={{
                                                    width: "1.2rem",
                                                    height: "1.2rem",
                                                    boxShadow:
                                                        color8 === "blue"
                                                            ? "0 0 0 0.2rem var(--blue-500)"
                                                            : null,
                                                }}
                                                onClick={() =>
                                                    setColor8("blue")
                                                }
                                            ></div>
                                        </div>
                                        <span className="text-500 capitalize">
                                            {color8}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className="w-full border-gray-200 m-0" />
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid grid-nogutter flex-wrap p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
                        <div className="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
                            <span className="text-3xl block text-cyan-900 font-bold">
                                Get Deals and Updates from Peak
                            </span>
                            <span className="block text-cyan-600 mt-3">
                                We promise for not sending spam emails. It’ll
                                only good emails.
                            </span>
                            <div
                                className="p-inputgroup relative mt-4"
                                style={{
                                    borderRadius: "30px",
                                    maxWidth: "90%",
                                }}
                            >
                                <InputText
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Email"
                                    style={{
                                        borderRadius: "30px",
                                        height: "3.5rem",
                                    }}
                                    className="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100"
                                />
                                <Button
                                    type="button"
                                    label="Subscribe"
                                    className="bg-cyan-500 border-none absolute text-white"
                                    style={{
                                        borderRadius: "30px",
                                        right: "8px",
                                        top: "8px",
                                        height: "2.5rem",
                                        zIndex: "1",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-4">
                            <div
                                className="w-full h-full bg-no-repeat bg-center bg-cover p-5"
                                style={{
                                    background:
                                        "url(/demo/images/blocks/ecommerce/categorypage/categorypage-1-1.png)",
                                    borderRadius: "30px",
                                }}
                            >
                                <span className="text-cyan-500 font-bold block">
                                    Exclusive Peak Club
                                </span>
                                <span className="text-white text-xl font-bold block mt-3 line-height-3">
                                    Join Exlusive Peak Club for free shipping,
                                    premium service and deals.
                                </span>
                                <Button
                                    type="button"
                                    label="Get Your Card Today"
                                    className="bg-cyan-500 border-none w-full mt-3 text-white"
                                    style={{ borderRadius: "30px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-nogutter text-center sm:text-left flex-wrap mt-8">
                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                            <span className="text-900 text-xl block">
                                Company
                            </span>
                            <ul className="list-none p-0">
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        About Peak
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Factories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Environmental Initiatives
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                            <span className="text-900 text-xl block">
                                Account
                            </span>
                            <ul className="list-none p-0">
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Manage Account
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Saved Items
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        My Cart
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Orders & Returns
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                            <span className="text-900 text-xl block">
                                Legal
                            </span>
                            <ul className="list-none p-0">
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Investor Relations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Data Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Legal Information
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                            <span className="text-900 text-xl block">
                                Connect
                            </span>
                            <ul className="list-none p-0">
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        tabIndex="0"
                                        className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                                    >
                                        Pinterest
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
                    <div className="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
                        <span className="text-500">
                            © 2022, Peak. Powered by PrimeBlocks.
                        </span>
                    </div>
                    <div className="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
                        <i className="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CategoryPage;
