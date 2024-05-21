import React, { useState } from "react";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import BlockViewer from "../../../demo/components/BlockViewer";

const ProducList = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [color1, setColor1] = useState("bluegray");
    const [color2, setColor2] = useState("indigo");
    const [color3, setColor3] = useState("purple");
    const [color4, setColor4] = useState("cyan");

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-4xl mb-4">Popular Items</div>
    <p className="mt-0 p-0 mb-5 text-600 text-2xl">From Brand</p>

    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div className="p-2">
                <div className="relative">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-1.png" className="w-full" />
                    <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-heart text-2xl text-500"></i>
                        <Ripple />
                    </button>
                </div>
                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="text-900 text-xl ml-3">$14</span>
                </div>
                <span className="text-600">Black</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div className="p-2">
                <div className="relative">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-2.png" className="w-full" />
                    <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-heart text-2xl text-500"></i>
                        <Ripple />
                    </button>
                </div>
                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="text-900 text-xl ml-3">$24</span>
                </div>
                <span className="text-600">Beige</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div className="p-2">
                <div className="relative">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-3.png" className="w-full" />
                    <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-heart text-2xl text-500"></i>
                        <Ripple />
                    </button>
                </div>
                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="text-900 text-xl ml-3">$42</span>
                </div>
                <span className="text-600">White</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2">
                <div className="relative">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-1-4.png" className="w-full" />
                    <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-heart text-2xl text-500"></i>
                        <Ripple />
                    </button>
                </div>
                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="text-900 text-xl ml-3">$20</span>
                </div>
                <span className="text-600">Black</span>
            </div>
        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div className="mb-3 relative">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-1.png" className="w-full" />
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
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color1 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor1('bluegray')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor1('indigo')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor1('purple')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor1('cyan')}></div>
                </div>
                <span className="text-500 capitalize">{color1}</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div className="mb-3 relative">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-2.png" className="w-full" />
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
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color2 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor2('bluegray')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color2 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor2('indigo')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color2 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor2('purple')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color2 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor2('cyan')}></div>
                </div>
                <span className="text-500 capitalize">{color2}</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
            <div className="mb-3 relative">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-3.png" className="w-full" />
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
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color3 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor3('bluegray')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color3 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor3('indigo')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color3 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor3('purple')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color3 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor3('cyan')}></div>
                </div>
                <span className="text-500 capitalize">{color3}</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="mb-3 relative">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-2-4.png" className="w-full" />
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
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color4 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor4('bluegray')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color4 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor4('indigo')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color4 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor4('purple')}></div>
                    <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                        style={{ boxShadow: color4 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor4('cyan')}></div>
                </div>
                <span className="text-500 capitalize">{color4}</span>
            </div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-1.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$140.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$175.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%25</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-2.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$100.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$150.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%50</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-3.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$90.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$103.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%15</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-4.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$50.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$57.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%15</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-5.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$42.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$54.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%30</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 xl:col-2">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-3-6.png" className="w-full mb-3" />
                <div className="text-900 text-xl font-medium mb-2">$25.00</div>
                <div className="mb-2">
                    <span className="text-600 line-through">$50.00</span>
                    <span className="ml-2 text-pink-500 font-medium">%50</span>
                </div>
                <span className="text-900">Product Name</span>
            </div>
        </div>
    </div>
</div>
    `;
    const block4 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-4xl mb-4">Popular Products</div>
    <p className="mt-0 p-0 mb-5 text-600 text-2xl">Exclusive Selection</p>
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-1.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$140.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-2.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$82.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-3.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$54.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-4.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$72.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-5.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$99.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-2">
                <div className="shadow-2 p-4 surface-card border-round">
                    <div className="relative mb-3">
                        <span className="surface-card text-900 shadow-2 px-3 py-2 absolute" style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}>Category</span>
                        <img src="/demo/images/blocks/ecommerce/productlist/product-list-4-6.png" className="w-full" />
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900 font-medium text-xl">Product Name</span>
                        <span>
                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                            <span className="font-medium">5.0</span>
                        </span>
                    </div>
                    <p className="mt-0 mb-3 text-600 line-height-3">
                        Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.
                    </p>
                    <span className="text-primary text-xl font-medium">$89.00</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-3">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-5-1.png" className="w-full" />
                    <span className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style={{ borderRadius: '1rem', right: '1rem', bottom: '1rem' }}>-%25</span>
                </div>
                <span className="text-900 font-medium text-xl">Product Name</span>
                <div className="my-3">
                    <span className="mr-3">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <span className="text-500">12 reviews</span>
                </div>
                <div className="mb-4">
                    <span className="line-through text-600">$321.00</span>
                    <span className="font-bold text-900 ml-2">$150.00</span>
                </div>
                <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-3">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-5-2.png" className="w-full" />
                    <span className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style={{ borderRadius: '1rem', right: '1rem', bottom: '1rem' }}>-%25</span>
                </div>
                <span className="text-900 font-medium text-xl">Product Name</span>
                <div className="my-3">
                    <span className="mr-3">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-500"></i>
                    </span>
                    <span className="text-500">15 reviews</span>
                </div>
                <div className="mb-4">
                    <span className="line-through text-600">$80.00</span>
                    <span className="font-bold text-900 ml-2">$49.00</span>
                </div>
                <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-3">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-5-3.png" className="w-full" />
                    <span className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style={{ borderRadius: '1rem', right: '1rem', bottom: '1rem' }}>-%25</span>
                </div>
                <span className="text-900 font-medium text-xl">Product Name</span>
                <div className="my-3">
                    <span className="mr-3">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-500 mr-1"></i>
                        <i className="pi pi-star-fill text-500"></i>
                    </span>
                    <span className="text-500">21 reviews</span>
                </div>
                <div className="mb-4">
                    <span className="line-through text-600">$124.00</span>
                    <span className="font-bold text-900 ml-2">$82.00</span>
                </div>
                <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full" />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2">
                <div className="relative mb-3">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-5-4.png" className="w-full" />
                    <span className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute" style={{ borderRadius: '1rem', right: '1rem', bottom: '1rem' }}>-%25</span>
                </div>
                <span className="text-900 font-medium text-xl">Product Name</span>
                <div className="my-3">
                    <span className="mr-3">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <span className="text-500">22 reviews</span>
                </div>
                <div className="mb-4">
                    <span className="line-through text-600">$250.00</span>
                    <span className="font-bold text-900 ml-2">$120.00</span>
                </div>
                <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full" />
            </div>
        </div>
    </div>
</div>
    `;
    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid border-1 surface-border border-round">
        <div className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-1.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 surface-border">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-2.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 md:border-right-1 lg:border-right-none border-bottom-1 surface-border">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-3.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-4.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 surface-border">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-5.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
            <div className="p-4">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-6-6.png" className="w-full" />
                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">Product Name</span>
                    <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1" style={{ borderRadius: '1rem' }}>NEW</span>
                </div>
                <span className="text-900">Brand</span>
                <div className="text-900 text-xl font-medium mt-3">$120.00</div>
            </div>
        </div>
    </div>
</div>
    `;
    const block7 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-5xl font-medium text-900 text-center mb-6">Featured for Summer</div>
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-2">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-7-1.png" className="w-full" />
                    <div className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style={{ bottom: '1.25rem', right: '1rem' }}>$42</div>
                </div>
                <div className="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div className="flex align-items-center justify-content-center mb-3">
                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div className="text-900 font-medium text-xl line-height-1">4.8</div>
                </div>
                <p className="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">
                    Add to Cart
                    <Ripple />
                </button>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-2">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-7-2.png" className="w-full" />
                    <div className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style={{ bottom: '1.25rem', right: '1rem' }}>$42</div>
                </div>
                <div className="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div className="flex align-items-center justify-content-center mb-3">
                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div className="text-900 font-medium text-xl line-height-1">3.9</div>
                </div>
                <p className="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">
                    Add to Cart
                    <Ripple />
                </button>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <div className="relative mb-2">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-7-3.png" className="w-full" />
                    <div className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style={{ bottom: '1.25rem', right: '1rem' }}>$42</div>
                </div>
                <div className="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div className="flex align-items-center justify-content-center mb-3">
                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div className="text-900 font-medium text-xl line-height-1">4.5</div>
                </div>
                <p className="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">
                    Add to Cart
                    <Ripple />
                </button>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2">
                <div className="relative mb-2">
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-7-4.png" className="w-full" />
                    <div className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center" style={{ bottom: '1.25rem', right: '1rem' }}>$42</div>
                </div>
                <div className="text-900 font-medium text-xl mb-3 text-center">Product Name</div>
                <div className="flex align-items-center justify-content-center mb-3">
                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                    <div className="text-900 font-medium text-xl line-height-1">5.0</div>
                </div>
                <p className="text-500 mt-0 mb-3 text-center line-height-3">Congue quisque egestas diam in. Nunc sed blandit libero volutpat.</p>
                <button type="button" className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center">
                    Add to Cart
                    <Ripple />
                </button>
            </div>
        </div>
    </div>
</div>
    `;
    const block8 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-5">
        <span className="text-900 text-3xl font-medium">CATEGORY TITLE</span>
        <ul className="list-none p-0 m-0 flex mt-3 md:mt-0">
            <li>
                <a tabIndex="0" className="cursor-pointer text-900 font-bold text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">NEW</a>
            </li>
            <li>
                <a tabIndex="0" className="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">SALE</a>
            </li>
            <li>
                <a tabIndex="0" className="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2">POPULAR</a>
            </li>
        </ul>
    </div>

    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2" onMouseEnter={() => setHoveredItem(0)} onMouseLeave={() => setHoveredItem(null)}>
                <div className="relative mb-3">
                    {hoveredItem === 0 && <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>}
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-8-1.png" className="w-full" />
                    {hoveredItem == 0 && <button type="text" className="p-ripple fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-shopping-cart text-2xl text-white"></i>
                        <Ripple />
                    </button>}
                </div>
                <div className={classNames('surface-section pt-3 z-1 relative transition-all transition-duration-300', { '-mt-8 pb-8': hoveredItem === 0 })}>
                    <div className="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div className="mb-3 text-center">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </div>
                    <div className="text-center text-900 text-xl mb-3">Product Name</div>
                    <div className="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2" onMouseEnter={() => setHoveredItem(1)} onMouseLeave={() => setHoveredItem(null)}>
                <div className="relative mb-3">
                    {hoveredItem === 1 && <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>}
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-8-2.png" className="w-full" />
                    {hoveredItem == 1 && <button type="text" className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-shopping-cart text-2xl text-white"></i>
                        <Ripple />
                    </button>}
                </div>
                <div className={classNames('surface-section pt-3 z-1 relative transition-all transition-duration-300', { '-mt-8 pb-8': hoveredItem === 1 })}>
                    <div className="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div className="mb-3 text-center">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </div>
                    <div className="text-center text-900 text-xl mb-3">Product Name</div>
                    <div className="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2" onMouseEnter={() => setHoveredItem(2)} onMouseLeave={() => setHoveredItem(null)}>
                <div className="relative mb-3">
                    {hoveredItem === 2 && <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>}
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-8-3.png" className="w-full" />
                    {hoveredItem == 2 && <button type="text" className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-shopping-cart text-2xl text-white"></i>
                        <Ripple />
                    </button>}
                </div>
                <div className={classNames('surface-section pt-3 z-1 relative transition-all transition-duration-300', { '-mt-8 pb-8': hoveredItem === 2 })}>
                    <div className="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div className="mb-3 text-center">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </div>
                    <div className="text-center text-900 text-xl mb-3">Product Name</div>
                    <div className="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="p-2" onMouseEnter={() => setHoveredItem(3)} onMouseLeave={() => setHoveredItem(null)}>
                <div className="relative mb-3">
                    {hoveredItem === 3 && <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>}
                    <img src="/demo/images/blocks/ecommerce/productlist/product-list-8-4.png" className="w-full" />
                    {hoveredItem == 3 && <button type="text" className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }}>
                        <i className="pi pi-shopping-cart text-2xl text-white"></i>
                        <Ripple />
                    </button>}
                </div>
                <div className={classNames('surface-section pt-3 z-1 relative transition-all transition-duration-300', { '-mt-8 pb-8': hoveredItem === 3 })}>
                    <div className="text-center text-700 font-medium text-xl mb-3">BRAND</div>
                    <div className="mb-3 text-center">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </div>
                    <div className="text-center text-900 text-xl mb-3">Product Name</div>
                    <div className="text-center text-900 font-medium text-xl mb-3">$50.00</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block9 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mt-3 -ml-3 -mr-3">
        <div className="col-12 md:col-6 xl:col-3">
            <div className="p-2 h-full mt-2" style={{background: "url('/demo/images/blocks/ecommerce/productlist/product-list-9-1.png') no-repeat", backgroundSize: 'cover'}}>
                <div className="py-5 px-4">
                    <span className="text-2xl font-bold text-gray-900 mb-3 ml-3">SKI COLLECTION</span>
                    <ul className="list-none p-0 mt-3 mb-0 mx-0">
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Jackets</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Pants</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round text-blue-500">Equipment</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Gloves</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Helmets</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Shoes</a>
                        </li>
                        <li className="mb-2">
                            <a tabIndex="0" className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round">Glasses</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-9-2.png" className="w-full mb-3" />
                <div className="flex justify-content-between mb-3">
                    <span className="font-bold text-500">BRAND</span>
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </span>
                </div>
                <div className="text-900 text-xl mb-3">Product Name</div>
                <div>
                    <span className="text-xl font-medium text-pink-500">$100.00</span>
                    <span className="text-xl font-medium text-700 line-through ml-3">$150.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-9-3.png" className="w-full mb-3" />
                <div className="flex justify-content-between mb-3">
                    <span className="font-bold text-500">BRAND</span>
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </span>
                </div>
                <div className="text-900 text-xl mb-3">Product Name</div>
                <div>
                    <span className="text-xl font-medium text-pink-500">$79.00</span>
                    <span className="text-xl font-medium text-700 line-through ml-3">$99.00</span>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
            <div className="p-2">
                <img src="/demo/images/blocks/ecommerce/productlist/product-list-9-4.png" className="w-full mb-3" />
                <div className="flex justify-content-between mb-3">
                    <span className="font-bold text-500">BRAND</span>
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-300"></i>
                    </span>
                </div>
                <div className="text-900 text-xl mb-3">Product Name</div>
                <div>
                    <span className="text-xl font-medium text-pink-500">$56.00</span>
                    <span className="text-xl font-medium text-700 line-through ml-3">$65.00</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Product List</div>
            <BlockViewer header="Inline Price" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-4xl mb-4">
                        Popular Items
                    </div>
                    <p className="mt-0 p-0 mb-5 text-600 text-2xl">
                        From Brand
                    </p>

                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                            <div className="p-2">
                                <div className="relative">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-1-1.png"
                                        className="w-full"
                                        alt="list-1-1"
                                    />
                                    <button
                                        type="text"
                                        className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                        style={{ top: "1rem", right: "1rem" }}
                                    >
                                        <i className="pi pi-heart text-2xl text-500"></i>
                                        <Ripple />
                                    </button>
                                </div>
                                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span className="text-900 text-xl ml-3">
                                        $14
                                    </span>
                                </div>
                                <span className="text-600">Black</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                            <div className="p-2">
                                <div className="relative">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-1-2.png"
                                        className="w-full"
                                        alt="list-1-2"
                                    />
                                    <button
                                        type="text"
                                        className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                        style={{ top: "1rem", right: "1rem" }}
                                    >
                                        <i className="pi pi-heart text-2xl text-500"></i>
                                        <Ripple />
                                    </button>
                                </div>
                                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span className="text-900 text-xl ml-3">
                                        $24
                                    </span>
                                </div>
                                <span className="text-600">Beige</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                            <div className="p-2">
                                <div className="relative">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-1-3.png"
                                        className="w-full"
                                        alt="list-1-3"
                                    />
                                    <button
                                        type="text"
                                        className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                        style={{ top: "1rem", right: "1rem" }}
                                    >
                                        <i className="pi pi-heart text-2xl text-500"></i>
                                        <Ripple />
                                    </button>
                                </div>
                                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span className="text-900 text-xl ml-3">
                                        $42
                                    </span>
                                </div>
                                <span className="text-600">White</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="p-2">
                                <div className="relative">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-1-4.png"
                                        className="w-full"
                                        alt="list-1-4"
                                    />
                                    <button
                                        type="text"
                                        className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                        style={{ top: "1rem", right: "1rem" }}
                                    >
                                        <i className="pi pi-heart text-2xl text-500"></i>
                                        <Ripple />
                                    </button>
                                </div>
                                <div className="flex align-items-center justify-content-between mt-3 mb-2">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span className="text-900 text-xl ml-3">
                                        $20
                                    </span>
                                </div>
                                <span className="text-600">Black</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered with Overlay CTA" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div className="mb-3 relative">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-2-1.png"
                                    className="w-full"
                                    alt="list-2-1"
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
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color1 === "bluegray"
                                                    ? "0 0 0 0.2rem var(--bluegray-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor1("bluegray")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color1 === "indigo"
                                                    ? "0 0 0 0.2rem var(--indigo-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor1("indigo")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color1 === "purple"
                                                    ? "0 0 0 0.2rem var(--purple-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor1("purple")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color1 === "cyan"
                                                    ? "0 0 0 0.2rem var(--cyan-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor1("cyan")}
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
                                    alt="list-2-2"
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
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color2 === "bluegray"
                                                    ? "0 0 0 0.2rem var(--bluegray-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor2("bluegray")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color2 === "indigo"
                                                    ? "0 0 0 0.2rem var(--indigo-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor2("indigo")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color2 === "purple"
                                                    ? "0 0 0 0.2rem var(--purple-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor2("purple")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color2 === "cyan"
                                                    ? "0 0 0 0.2rem var(--cyan-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor2("cyan")}
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
                                    alt="list-2-3"
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
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color3 === "bluegray"
                                                    ? "0 0 0 0.2rem var(--bluegray-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor3("bluegray")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color3 === "indigo"
                                                    ? "0 0 0 0.2rem var(--indigo-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor3("indigo")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color3 === "purple"
                                                    ? "0 0 0 0.2rem var(--purple-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor3("purple")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color3 === "cyan"
                                                    ? "0 0 0 0.2rem var(--cyan-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor3("cyan")}
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
                                    alt="list-2-4"
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
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color4 === "bluegray"
                                                    ? "0 0 0 0.2rem var(--bluegray-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor4("bluegray")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color4 === "indigo"
                                                    ? "0 0 0 0.2rem var(--indigo-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor4("indigo")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color4 === "purple"
                                                    ? "0 0 0 0.2rem var(--purple-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor4("purple")}
                                    ></div>
                                    <div
                                        className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                        style={{
                                            boxShadow:
                                                color4 === "cyan"
                                                    ? "0 0 0 0.2rem var(--cyan-500)"
                                                    : null,
                                        }}
                                        onClick={() => setColor4("cyan")}
                                    ></div>
                                </div>
                                <span className="text-500 capitalize">
                                    {color4}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Condensed with Discount" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-1.png"
                                    className="w-full mb-3"
                                    alt="list-3-1"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $140.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $175.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %25
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-2.png"
                                    className="w-full mb-3"
                                    alt="list-3-2"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $100.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $150.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %50
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-3.png"
                                    className="w-full mb-3"
                                    alt="list-3-3"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $90.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $103.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %15
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-4.png"
                                    className="w-full mb-3"
                                    alt="list-3-4"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $50.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $57.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %15
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2 border-bottom-1 surface-border md:border-bottom-none">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-5.png"
                                    className="w-full mb-3"
                                    alt="list-3-5"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $42.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $54.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %30
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 xl:col-2">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-3-6.png"
                                    className="w-full mb-3"
                                    alt="list-3-6"
                                />
                                <div className="text-900 text-xl font-medium mb-2">
                                    $25.00
                                </div>
                                <div className="mb-2">
                                    <span className="text-600 line-through">
                                        $50.00
                                    </span>
                                    <span className="ml-2 text-pink-500 font-medium">
                                        %50
                                    </span>
                                </div>
                                <span className="text-900">Product Name</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Cards with Details" code={block4}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-4xl mb-4">
                        Popular Products
                    </div>
                    <p className="mt-0 p-0 mb-5 text-600 text-2xl">
                        Exclusive Selection
                    </p>
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-1.png"
                                            className="w-full"
                                            alt="list-4-1"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $140.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-2.png"
                                            className="w-full"
                                            alt="list-4-2"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $82.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-3.png"
                                            className="w-full"
                                            alt="list-4-3"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $54.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-4.png"
                                            className="w-full"
                                            alt="list-4-4"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $72.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-5.png"
                                            className="w-full"
                                            alt="list-4-5"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $99.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-2">
                                <div className="shadow-2 p-4 surface-card border-round">
                                    <div className="relative mb-3">
                                        <span
                                            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                                            style={{
                                                borderRadius: "1.5rem",
                                                left: "1rem",
                                                top: "1rem",
                                            }}
                                        >
                                            Category
                                        </span>
                                        <img
                                            src="/demo/images/blocks/ecommerce/productlist/product-list-4-6.png"
                                            className="w-full"
                                            alt="list-4-6"
                                        />
                                    </div>
                                    <div className="flex justify-content-between align-items-center mb-3">
                                        <span className="text-900 font-medium text-xl">
                                            Product Name
                                        </span>
                                        <span>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <span className="font-medium">
                                                5.0
                                            </span>
                                        </span>
                                    </div>
                                    <p className="mt-0 mb-3 text-600 line-height-3">
                                        Enim nec dui nunc mattis enim ut tellus.
                                        Tincidunt arcu.
                                    </p>
                                    <span className="text-primary text-xl font-medium">
                                        $89.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="CTA Button and Badge" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-5-1.png"
                                        className="w-full"
                                        alt="list-5-1"
                                    />
                                    <span
                                        className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute"
                                        style={{
                                            borderRadius: "1rem",
                                            right: "1rem",
                                            bottom: "1rem",
                                        }}
                                    >
                                        -%25
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-xl">
                                    Product Name
                                </span>
                                <div className="my-3">
                                    <span className="mr-3">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500"></i>
                                    </span>
                                    <span className="text-500">12 reviews</span>
                                </div>
                                <div className="mb-4">
                                    <span className="line-through text-600">
                                        $321.00
                                    </span>
                                    <span className="font-bold text-900 ml-2">
                                        $150.00
                                    </span>
                                </div>
                                <Button
                                    label="Add to Cart"
                                    icon="pi pi-shopping-cart"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-5-2.png"
                                        className="w-full"
                                        alt="list-5-2"
                                    />
                                    <span
                                        className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute"
                                        style={{
                                            borderRadius: "1rem",
                                            right: "1rem",
                                            bottom: "1rem",
                                        }}
                                    >
                                        -%25
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-xl">
                                    Product Name
                                </span>
                                <div className="my-3">
                                    <span className="mr-3">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-500"></i>
                                    </span>
                                    <span className="text-500">15 reviews</span>
                                </div>
                                <div className="mb-4">
                                    <span className="line-through text-600">
                                        $80.00
                                    </span>
                                    <span className="font-bold text-900 ml-2">
                                        $49.00
                                    </span>
                                </div>
                                <Button
                                    label="Add to Cart"
                                    icon="pi pi-shopping-cart"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-5-3.png"
                                        className="w-full"
                                        alt="list-5-3"
                                    />
                                    <span
                                        className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute"
                                        style={{
                                            borderRadius: "1rem",
                                            right: "1rem",
                                            bottom: "1rem",
                                        }}
                                    >
                                        -%25
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-xl">
                                    Product Name
                                </span>
                                <div className="my-3">
                                    <span className="mr-3">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-500"></i>
                                    </span>
                                    <span className="text-500">21 reviews</span>
                                </div>
                                <div className="mb-4">
                                    <span className="line-through text-600">
                                        $124.00
                                    </span>
                                    <span className="font-bold text-900 ml-2">
                                        $82.00
                                    </span>
                                </div>
                                <Button
                                    label="Add to Cart"
                                    icon="pi pi-shopping-cart"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="p-2">
                                <div className="relative mb-3">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-5-4.png"
                                        className="w-full"
                                        alt="list-5-4"
                                    />
                                    <span
                                        className="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute"
                                        style={{
                                            borderRadius: "1rem",
                                            right: "1rem",
                                            bottom: "1rem",
                                        }}
                                    >
                                        -%25
                                    </span>
                                </div>
                                <span className="text-900 font-medium text-xl">
                                    Product Name
                                </span>
                                <div className="my-3">
                                    <span className="mr-3">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500"></i>
                                    </span>
                                    <span className="text-500">22 reviews</span>
                                </div>
                                <div className="mb-4">
                                    <span className="line-through text-600">
                                        $250.00
                                    </span>
                                    <span className="font-bold text-900 ml-2">
                                        $120.00
                                    </span>
                                </div>
                                <Button
                                    label="Add to Cart"
                                    icon="pi pi-shopping-cart"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Border Grid" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid border-1 surface-border border-round">
                        <div className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-1.png"
                                    className="w-full"
                                    alt="list-6-1"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 surface-border">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-2.png"
                                    className="w-full"
                                    alt="list-6-2"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 md:border-right-1 lg:border-right-none border-bottom-1 surface-border">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-3.png"
                                    className="w-full"
                                    alt="list-6-3"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-4.png"
                                    className="w-full"
                                    alt="list-6-4"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 surface-border">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-5.png"
                                    className="w-full"
                                    alt="list-6-5"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4">
                            <div className="p-4">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-6-6.png"
                                    className="w-full"
                                    alt="list-6-6"
                                />
                                <div className="flex align-items-center justify-content-between mt-5 mb-3">
                                    <span className="text-900 font-medium text-xl">
                                        Product Name
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                                        style={{ borderRadius: "1rem" }}
                                    >
                                        NEW
                                    </span>
                                </div>
                                <span className="text-900">Brand</span>
                                <div className="text-900 text-xl font-medium mt-3">
                                    $120.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With CTA and Overlay Price" code={block7}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-5xl font-medium text-900 text-center mb-6">
                        Featured for Summer
                    </div>
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-7-1.png"
                                        className="w-full"
                                        alt="list-7-1"
                                    />
                                    <div
                                        className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
                                        style={{
                                            bottom: "1.25rem",
                                            right: "1rem",
                                        }}
                                    >
                                        $42
                                    </div>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3 text-center">
                                    Product Name
                                </div>
                                <div className="flex align-items-center justify-content-center mb-3">
                                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                                    <div className="text-900 font-medium text-xl line-height-1">
                                        4.8
                                    </div>
                                </div>
                                <p className="text-500 mt-0 mb-3 text-center line-height-3">
                                    Congue quisque egestas diam in. Nunc sed
                                    blandit libero volutpat.
                                </p>
                                <button
                                    type="button"
                                    className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center"
                                >
                                    Add to Cart
                                    <Ripple />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-7-2.png"
                                        className="w-full"
                                        alt="list-7-2"
                                    />
                                    <div
                                        className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
                                        style={{
                                            bottom: "1.25rem",
                                            right: "1rem",
                                        }}
                                    >
                                        $42
                                    </div>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3 text-center">
                                    Product Name
                                </div>
                                <div className="flex align-items-center justify-content-center mb-3">
                                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                                    <div className="text-900 font-medium text-xl line-height-1">
                                        3.9
                                    </div>
                                </div>
                                <p className="text-500 mt-0 mb-3 text-center line-height-3">
                                    Congue quisque egestas diam in. Nunc sed
                                    blandit libero volutpat.
                                </p>
                                <button
                                    type="button"
                                    className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center"
                                >
                                    Add to Cart
                                    <Ripple />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <div className="relative mb-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-7-3.png"
                                        className="w-full"
                                        alt="list-7-3"
                                    />
                                    <div
                                        className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
                                        style={{
                                            bottom: "1.25rem",
                                            right: "1rem",
                                        }}
                                    >
                                        $42
                                    </div>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3 text-center">
                                    Product Name
                                </div>
                                <div className="flex align-items-center justify-content-center mb-3">
                                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                                    <div className="text-900 font-medium text-xl line-height-1">
                                        4.5
                                    </div>
                                </div>
                                <p className="text-500 mt-0 mb-3 text-center line-height-3">
                                    Congue quisque egestas diam in. Nunc sed
                                    blandit libero volutpat.
                                </p>
                                <button
                                    type="button"
                                    className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center"
                                >
                                    Add to Cart
                                    <Ripple />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="p-2">
                                <div className="relative mb-2">
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-7-4.png"
                                        className="w-full"
                                        alt="list-7-4"
                                    />
                                    <div
                                        className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
                                        style={{
                                            bottom: "1.25rem",
                                            right: "1rem",
                                        }}
                                    >
                                        $42
                                    </div>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3 text-center">
                                    Product Name
                                </div>
                                <div className="flex align-items-center justify-content-center mb-3">
                                    <i className="pi pi-star-fill text-yellow-500 mr-2 text-2xl"></i>
                                    <div className="text-900 font-medium text-xl line-height-1">
                                        5.0
                                    </div>
                                </div>
                                <p className="text-500 mt-0 mb-3 text-center line-height-3">
                                    Congue quisque egestas diam in. Nunc sed
                                    blandit libero volutpat.
                                </p>
                                <button
                                    type="button"
                                    className="p-ripple p-component cursor-pointer p-3 surface-900 hover:surface-800 border-none text-0 w-full transition-all transition-duration-300 text-center"
                                >
                                    Add to Cart
                                    <Ripple />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Hover Animation" code={block8}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-5">
                        <span className="text-900 text-3xl font-medium">
                            CATEGORY TITLE
                        </span>
                        <ul className="list-none p-0 m-0 flex mt-3 md:mt-0">
                            <li>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-bold text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2"
                                >
                                    NEW
                                </a>
                            </li>
                            <li>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2"
                                >
                                    SALE
                                </a>
                            </li>
                            <li>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-600 font-medium text-xl block hover:surface-200 transition-colors transition-duration-300 border-round px-3 py-2"
                                >
                                    POPULAR
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div
                                className="p-2"
                                onMouseEnter={() => setHoveredItem(0)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative mb-3">
                                    {hoveredItem === 0 && (
                                        <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>
                                    )}
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-8-1.png"
                                        className="w-full"
                                        alt="list-8-1"
                                    />
                                    {hoveredItem == 0 && (
                                        <button
                                            type="text"
                                            className="p-ripple fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart text-2xl text-white"></i>
                                            <Ripple />
                                        </button>
                                    )}
                                </div>
                                <div
                                    className={classNames(
                                        "surface-section pt-3 z-1 relative transition-all transition-duration-300",
                                        { "-mt-8 pb-8": hoveredItem === 0 }
                                    )}
                                >
                                    <div className="text-center text-700 font-medium text-xl mb-3">
                                        BRAND
                                    </div>
                                    <div className="mb-3 text-center">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </div>
                                    <div className="text-center text-900 text-xl mb-3">
                                        Product Name
                                    </div>
                                    <div className="text-center text-900 font-medium text-xl mb-3">
                                        $50.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div
                                className="p-2"
                                onMouseEnter={() => setHoveredItem(1)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative mb-3">
                                    {hoveredItem === 1 && (
                                        <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>
                                    )}
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-8-2.png"
                                        className="w-full"
                                        alt="list-8-2"
                                    />
                                    {hoveredItem == 1 && (
                                        <button
                                            type="text"
                                            className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart text-2xl text-white"></i>
                                            <Ripple />
                                        </button>
                                    )}
                                </div>
                                <div
                                    className={classNames(
                                        "surface-section pt-3 z-1 relative transition-all transition-duration-300",
                                        { "-mt-8 pb-8": hoveredItem === 1 }
                                    )}
                                >
                                    <div className="text-center text-700 font-medium text-xl mb-3">
                                        BRAND
                                    </div>
                                    <div className="mb-3 text-center">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </div>
                                    <div className="text-center text-900 text-xl mb-3">
                                        Product Name
                                    </div>
                                    <div className="text-center text-900 font-medium text-xl mb-3">
                                        $50.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div
                                className="p-2"
                                onMouseEnter={() => setHoveredItem(2)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative mb-3">
                                    {hoveredItem === 2 && (
                                        <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>
                                    )}
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-8-3.png"
                                        className="w-full"
                                        alt="list-8-3"
                                    />
                                    {hoveredItem == 2 && (
                                        <button
                                            type="text"
                                            className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart text-2xl text-white"></i>
                                            <Ripple />
                                        </button>
                                    )}
                                </div>
                                <div
                                    className={classNames(
                                        "surface-section pt-3 z-1 relative transition-all transition-duration-300",
                                        { "-mt-8 pb-8": hoveredItem === 2 }
                                    )}
                                >
                                    <div className="text-center text-700 font-medium text-xl mb-3">
                                        BRAND
                                    </div>
                                    <div className="mb-3 text-center">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </div>
                                    <div className="text-center text-900 text-xl mb-3">
                                        Product Name
                                    </div>
                                    <div className="text-center text-900 font-medium text-xl mb-3">
                                        $50.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div
                                className="p-2"
                                onMouseEnter={() => setHoveredItem(3)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative mb-3">
                                    {hoveredItem === 3 && (
                                        <div className="fadein bg-black-alpha-50 absolute left-0 top-0 w-full h-full"></div>
                                    )}
                                    <img
                                        src="/demo/images/blocks/ecommerce/productlist/product-list-8-4.png"
                                        className="w-full"
                                        alt="list-8-4"
                                    />
                                    {hoveredItem == 3 && (
                                        <button
                                            type="text"
                                            className="fadein p-link w-3rem h-3rem bg-pink-500 hover:bg-pink-600 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                                            style={{
                                                top: "1rem",
                                                right: "1rem",
                                            }}
                                        >
                                            <i className="pi pi-shopping-cart text-2xl text-white"></i>
                                            <Ripple />
                                        </button>
                                    )}
                                </div>
                                <div
                                    className={classNames(
                                        "surface-section pt-3 z-1 relative transition-all transition-duration-300",
                                        { "-mt-8 pb-8": hoveredItem === 3 }
                                    )}
                                >
                                    <div className="text-center text-700 font-medium text-xl mb-3">
                                        BRAND
                                    </div>
                                    <div className="mb-3 text-center">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </div>
                                    <div className="text-center text-900 text-xl mb-3">
                                        Product Name
                                    </div>
                                    <div className="text-center text-900 font-medium text-xl mb-3">
                                        $50.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Inline Menu" code={block9}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mt-3 -ml-3 -mr-3">
                        <div className="col-12 md:col-6 xl:col-3">
                            <div
                                className="p-2 h-full mt-2"
                                style={{
                                    background:
                                        "url('/demo/images/blocks/ecommerce/productlist/product-list-9-1.png') no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="py-5 px-4">
                                    <span className="text-2xl font-bold text-gray-900 mb-3 ml-3">
                                        SKI COLLECTION
                                    </span>
                                    <ul className="list-none p-0 mt-3 mb-0 mx-0">
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Jackets
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Pants
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round text-blue-500"
                                            >
                                                Equipment
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Gloves
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Helmets
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Shoes
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                tabIndex="0"
                                                className="block cursor-pointer text-xl text-gray-900 font-medium px-3 py-2 bg-transparent hover:bg-white-alpha-30 transition-colors transition-duration-150 border-round"
                                            >
                                                Glasses
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-9-2.png"
                                    className="w-full mb-3"
                                    alt="list-9-2"
                                />
                                <div className="flex justify-content-between mb-3">
                                    <span className="font-bold text-500">
                                        BRAND
                                    </span>
                                    <span>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </span>
                                </div>
                                <div className="text-900 text-xl mb-3">
                                    Product Name
                                </div>
                                <div>
                                    <span className="text-xl font-medium text-pink-500">
                                        $100.00
                                    </span>
                                    <span className="text-xl font-medium text-700 line-through ml-3">
                                        $150.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-9-3.png"
                                    className="w-full mb-3"
                                    alt="list-9-3"
                                />
                                <div className="flex justify-content-between mb-3">
                                    <span className="font-bold text-500">
                                        BRAND
                                    </span>
                                    <span>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </span>
                                </div>
                                <div className="text-900 text-xl mb-3">
                                    Product Name
                                </div>
                                <div>
                                    <span className="text-xl font-medium text-pink-500">
                                        $79.00
                                    </span>
                                    <span className="text-xl font-medium text-700 line-through ml-3">
                                        $99.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3 mb-5 md:mb-0">
                            <div className="p-2">
                                <img
                                    src="/demo/images/blocks/ecommerce/productlist/product-list-9-4.png"
                                    className="w-full mb-3"
                                    alt="list-9-4"
                                />
                                <div className="flex justify-content-between mb-3">
                                    <span className="font-bold text-500">
                                        BRAND
                                    </span>
                                    <span>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-300"></i>
                                    </span>
                                </div>
                                <div className="text-900 text-xl mb-3">
                                    Product Name
                                </div>
                                <div>
                                    <span className="text-xl font-medium text-pink-500">
                                        $56.00
                                    </span>
                                    <span className="text-xl font-medium text-700 line-through ml-3">
                                        $65.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default ProducList;
