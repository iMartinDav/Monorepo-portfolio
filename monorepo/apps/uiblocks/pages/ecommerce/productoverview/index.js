import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { InputNumber } from 'primereact/inputnumber';
import { TabPanel } from 'primereact/tabview';
import { TabView } from 'primereact/tabview';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Dropdown } from 'primereact/dropdown';

const ProductOverview = () => {

    const [color1, setColor1] = useState('cyan');
    const [size1, setSize1] = useState('M');
    const [color2, setColor2] = useState('pink');
    const [size2, setSize2] = useState(null);
    const [color3, setColor3] = useState('bluegray');
    const [size3, setSize3] = useState('M');
    const [color4, setColor4] = useState('blue');
    const [liked1, setLiked1] = useState(false);
    const [liked2, setLiked2] = useState(false);
    const [selectedImageIndex1, setSelectedImageIndex1] = useState(0);
    const [selectedImageIndex2, setSelectedImageIndex2] = useState(0);
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);

    const sizes = [
        { label: 'Small', value: 'S' },
        { label: 'Medium', value: 'M' },
        { label: 'Large', value: 'L' }
    ];

    const images1 = [
        'product-overview-2-1.png',
        'product-overview-2-2.png',
        'product-overview-2-3.png',
        'product-overview-2-4.png'
    ];

    const images2 = [
        'product-overview-3-1.png',
        'product-overview-3-2.png',
        'product-overview-3-3.png',
        'product-overview-3-4.png'
    ];

    const galleriaImages = [
        'product-overview-4-1.png',
        'product-overview-4-2.png',
        'product-overview-4-3.png'
    ];

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-6">
            <div className="flex">
                <div>
                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-1.png" className="w-full" alt='product-overview-1-1' />
                </div>
                <div className="flex flex-column px-3">
                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-2.png" className="mb-3 w-full" alt='product-overview-1-2' />
                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-3.png" className="w-full" alt='product-overview-1-3' />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 py-5 lg:py-3 lg:pl-5">
            <ol className="flex list-none m-0 pt-0 px-0 pb-3 align-items-center text-sm text-600 mb-3 overflow-x-auto">
                <li className="mr-2">Category</li>
                <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                <li className="mr-2">Category</li>
                <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                <li className="mr-2 inline-flex align-items-center">Category</li>
                <li className="mr-2"><i className="pi pi-angle-right text-sm"></i></li>
                <li>Category</li>
            </ol>
            <div className="flex align-items-center justify-content-between mb-4">
                <span className="text-xl font-medium text-900">Product Title Placeholder</span>
                <span className="text-xl font-medium text-900">$123</span>
            </div>
            <div className="flex align-items-center justify-content-between lg:justify-content-start mb-5">
                <span className="mr-3">
                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                </span>
                <span className="text-500">5.00 | <b>20</b> reviews</span>
            </div>
            <p className="p-0 mt-0 mb-5 line-height-3 text-700">
                Dolor purus non enim praesent.
                At quis risus sed vulputate odio ut. Quis risus sed vulputate odio ut enim blandit volutpat.
                Ornare arcu odio ut sem nulla pharetra diam sit. Augue neque gravida in nrmentum et sollicitudin ac orci phasellus.
            </p>
            <div className="font-bold text-900 mb-3">Color</div>
            <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor1('cyan')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor1('purple')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor1('indigo')}></div>
            </div>

            <div className="mb-3 flex align-items-center justify-content-between">
                <span className="font-bold text-900">Size</span>
                <a tabIndex="0" className="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
            </div>

            <div className="flex align-items-center mb-5">
                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'XS' })} onClick={() => setSize1('XS')}>XS</div>
                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'S' })} onClick={() => setSize1('S')}>S</div>
                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'M' })} onClick={() => setSize1('M')}>M</div>
                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'L' })} onClick={() => setSize1('L')}>L</div>
                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'XL' })} onClick={() => setSize1('XL')}>XL</div>
            </div>

            <div className="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-5">
                <i className="pi pi-exclamation"></i>
                <span>Only a few left!</span>
            </div>

            <Button icon="pi pi-shopping-cart" className="w-full mb-5" label="Add to Cart" />

            <ul className="list-none p-0 m-0 text-sm text-600">
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-credit-card mr-2"></i>
                    <span>Pay in 21 days</span>
                </li>
                <li className="flex align-items-center mb-3">
                    <i className="pi pi-send mr-2"></i>
                    <span>Free Shipping</span>
                </li>
                <li className="flex align-items-center">
                    <i className="pi pi-refresh mr-2"></i>
                    <span>30 Days Return Policy</span>
                </li>
            </ul>

        </div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <ol className="flex list-none m-0 p-0 align-items-center text-sm text-600 mb-5 border-top-1 border-bottom-1 surface-border py-2 overflow-x-auto">
        <li className="mr-2">Category</li>
        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
        <li className="mr-2">Category</li>
        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
        <li className="mr-2">Category</li>
        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
        <li>Category</li>
    </ol>
    <div className="grid">
        <div className="col-12 lg:col-6">
            <img src={\`/demo/images/blocks/ecommerce/productoverview/\${images1[selectedImageIndex1]}\`} className="mb-3 w-full" alt='product-overview'/>
            <div className="grid">
                {
                    images1.map((image, i) => {
                        return <div className='col-3' key={\`images2_\${image}\`}> <img src={\`/demo/images/blocks/ecommerce/productoverview/\${image}\`} alt='product-overview'
                            className={classNames('w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150', { 'border-primary': selectedImageIndex1 === i })}
                            onClick={() => setSelectedImageIndex1(i)} /> </div>
                    })
                }
            </div>
        </div>
        <div className="col-12 lg:col-6 py-3 lg:pl-6">
            <div className="flex align-items-center text-xl font-medium text-900 mb-4">
                <span>Product Title Placeholder</span> <i className={classNames('pi ml-3 cursor-pointer', { 'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1 })} onClick={() => setLiked1(prevState => !prevState)}></i>
            </div>
            <span className="text-900 font-medium text-3xl block mb-5">$120</span>

            <div className="font-bold text-900 mb-3">Color</div>
            <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color2 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null }} onClick={() => setColor2('pink')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-orange-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color2 === 'orange' ? '0 0 0 0.2rem var(--orange-500)' : null }} onClick={() => setColor2('orange')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color2 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor2('indigo')}></div>
            </div>

            <div className="font-bold text-900 mb-3">Size</div>
            <div className="w-full sm:w-10rem p-fluid mb-3">
                <Dropdown value={size2} onChange={(e) => setSize2(e.value)} options={sizes} optionLabel="label" optionValue="value" placeholder="Select Size" />
            </div>
            <div className="flex align-items-center mb-5">
                <i className="pi pi-question-circle text-600 mr-3"></i>
                <span className="mr-3">Need help about size?</span>
                <a tabIndex="0" className="text-900 font-medium inline-flex align-items-center hover:text-primary cursor-pointer transition-colors transition-duration-150">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
            </div>
            <Button icon="pi pi-shopping-cart" className="w-full mb-5" label="Add to Cart" />
            <div className="flex align-items-center justify-content-center text-900 mb-5">
                <i className="pi pi-users mr-3"></i>
                <span><b>12 people</b> are looking at this right now.</span>
            </div>
            <ol className="list-none p-0 m-0 surface-100 text-center text-900">
                <li className="line-height-3 p-3 font-bold border-bottom-1 border-300">Product Highlights</li>
                <li className="line-height-3 p-3 border-bottom-1 border-300">Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum.</li>
                <li className="line-height-3 p-3 border-bottom-1 border-300">Purus gravida quis blandit turpis cursus in hac habitasse platea.</li>
                <li className="line-height-3 p-3">Nisi quis eleifend quam adipiscing vitae proin sagittis.</li>
            </ol>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid mb-7">
        <div className="col-12 lg:col-6">
            <div className="flex">
                <div className="flex flex-column w-2 justify-content-between">
                    {
                        images2.map((image, i) => {
                            return <img src={\`/demo/images/blocks/ecommerce/productoverview/\${image}\`} key={\`images1_\${image}\`} alt='product-overview'
                                className={classNames('w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150', { 'border-primary': selectedImageIndex2 === i })}
                                onClick={() => setSelectedImageIndex2(i)} />
                        })
                    }
                </div>
                <div className="pl-3 w-10">
                    <img src={\`/demo/images/blocks/ecommerce/productoverview/\${images2[selectedImageIndex2]}\`} className="w-full" alt='product-overview' />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 py-3 lg:pl-6">
            <div className="flex align-items-center text-xl font-medium text-900 mb-4">Product Title Placeholder</div>
            <div className="flex align-items-center justify-content-between mb-5">
                <span className="text-900 font-medium text-3xl block">$120</span>
                <div className="flex align-items-center">
                    <span className="mr-3">
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star text-700 mr-1"></i>
                    </span>
                    <span className="text-sm"><b className="text-900 mr-1">24</b> <span className="text-500"></span>reviews</span>
                </div>
            </div>

            <div className="font-bold text-900 mb-3">Color</div>
            <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color3 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor3('bluegray')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color3 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor3('green')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color3 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor3('blue')}></div>
            </div>

            <div className="mb-3 flex align-items-center justify-content-between">
                <span className="font-bold text-900">Size</span>
                <a tabIndex="0" className="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div className="grid grid-nogutter align-items-center mb-5">
                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'XS' })}
                    onClick={() => setSize3('XS')}>XS</div>
                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'S' })}
                    onClick={() => setSize3('S')}>S</div>
                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'M' })}
                    onClick={() => setSize3('M')}>M</div>
                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'L' })}
                    onClick={() => setSize3('L')}>L</div>
                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'XL' })}
                    onClick={() => setSize3('XL')}>XL</div>
            </div>

            <div className="font-bold text-900 mb-3">Quantity</div>
            <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center" value={quantity1} onChange={(e) => setQuantity1(e.value)}
                    decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                <div className="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                    <Button label="Add to Cart" className="flex-1 mr-5" />
                    <i className={classNames('pi text-2xl cursor-pointer', { 'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1 })} onClick={() => setLiked1(prevState => !prevState)}></i>
                </div>
            </div>
        </div>
    </div>

    <TabView>
        <TabPanel header="Details">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Product Details</div>
            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.</p>

            <div className="grid">
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3">Highlights</span>
                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                        <li className="mb-2">Vulputate sapien nec.</li>
                        <li className="mb-2">Purus gravida quis blandit.</li>
                        <li className="mb-2">Nisi quis eleifend quam adipiscing.</li>
                        <li>Imperdiet proin fermentum.</li>
                    </ul>
                </div>
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3">Size and Fit</span>
                    <ul className="list-none p-0 m-0 text-700 mb-4">
                        <li className="mb-3"><span className="font-medium">Leo vel:</span> Egestas congue.</li>
                        <li className="mb-3"><span className="font-medium">Sociis natoque:</span> Parturient montes nascetur.</li>
                        <li><span className="font-medium">Suspendisse in:</span> Purus sit amet volutpat.</li>
                    </ul>
                </div>
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3">Material & Care</span>
                    <ul className="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                        <li className="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                            <i className="pi pi-sun mr-2"></i>
                            <span>Not dryer safe</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i className="pi pi-times-circle mr-2"></i>
                            <span>No chemical wash</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                            <i className="pi pi-sliders-h mr-2"></i>
                            <span>Iron medium heat</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i className="pi pi-minus-circle mr-2"></i>
                            <span>Dry flat</span>
                        </li>
                    </ul>
                </div>
            </div>
        </TabPanel>
        <TabPanel header="Reviews">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Customer Reviews</div>
            <ul className="list-none p-0 m-0">
                <li className="pb-5 border-bottom-1 surface-border">
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-gray-500"></i>
                    </span>
                    <div className="text-900 font-medium text-xl my-3">Absolute Perfection!</div>
                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.</p>
                    <span className="text-600 font-medium">Darlene Robertson, 2 days ago</span>
                </li>
                <li className="py-5 border-bottom-1 surface-border">
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <div className="text-900 font-medium text-xl my-3">Classy</div>
                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                    <span className="text-600 font-medium">Kristin Watson, 2 days ago</span>
                </li>
            </ul>
        </TabPanel>
        <TabPanel header="Shipping">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Shipping Placeholder</div>
            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus.
                Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>

            <div className="grid">
                <div className="col-12 md:col-6">
                    <span className="text-900 block font-medium mb-3">Shipping Costs</span>
                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                        <li className="mb-2">Japan - JPY 2,500.</li>
                        <li className="mb-2">Europe – EUR 10</li>
                        <li className="mb-2">Switzerland – CHF 10</li>
                        <li className="mb-2">Canada – CAD 25</li>
                        <li className="mb-2">USA – USD 20</li>
                        <li className="mb-2">Australia – AUD 30</li>
                        <li className="mb-2">United Kingdom – GBP 10</li>
                    </ul>
                </div>
                <div className="col-12 md:col-6">
                    <span className="text-900 block font-medium mb-3">Return Policy</span>
                    <p className="line-height-3 text-700 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. </p>
                </div>
            </div>
        </TabPanel>
    </TabView>
</div>
    `;
    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-6 flex justify-content-center">
            <Galleria  value={galleriaImages} style={{ 'maxWidth': '640px' }} numVisible={2}
                showThumbnails={false} showIndicators item={(item) => <div className="w-full h-full overflow-hidden">
                    <img src={'/demo/images/blocks/ecommerce/productoverview/' + item} className="w-full block" alt='product-overview' />
                </div>} />
        </div>
        <div className="col-12 lg:col-6 lg:col-6 py-3 lg:pl-5">
            <div className="flex align-items-center justify-content-between mb-4">
                <span className="text-900 text-4xl font">Product Title</span>
                <span className="inline-flex align-items-center">
                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                    <span className="font-bold text-900">5.0</span>
                </span>
            </div>
            <div className="text-700 text-3xl mb-5">$56.00</div>

            <div className="font-medium text-900 mb-3 text-xl">Color
                <span className="ml-1 text-700 font-normal capitalize">| { color4 }</span>
            </div>
            <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color4 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor4('blue')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color4 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor4('purple')}></div>
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: color4 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null }} onClick={() => setColor4('pink')}></div>
            </div>

            <div className="border-round p-2 border-1 surface-border inline-flex mb-5">
                <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center border-transparent" value={quantity2} onChange={(e) => setQuantity2(e.value)}
                    decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div>

            <div className="flex mb-5">
                <Button label="Add to Cart" className="p-button-outlined w-6 mr-1" />
                <Button label="Buy Now" className="w-6 ml-1" />
            </div>

            <div className="surface-50 border-round p-3 mb-5">
                <div className="text-900 text-xl mb-4">Goes with</div>
                <div className="flex align-items-center">
                    <img src="/demo/images/blocks/ecommerce/productoverview/product-suggestion.png" className="w-5rem h-5rem flex-shrink-0" alt='product-overview'/>
                    <div className="pl-3">
                        <span className="text-900 text-xl font-medium">Product Title</span>
                        <p className="mb-0 mt-2 p-0 text-600 font-medium">$24.00</p>
                    </div>
                    <Button className="ml-auto border-circle p-button-outlined" icon="pi pi-plus" />
                </div>
            </div>

            <Accordion>
                <AccordionTab header="About Product">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
                <AccordionTab header="Shipping">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
                <AccordionTab header="Environment">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</div>
    `;


    return (
        <>
            <div className="block-category-title">Product Overview</div>
            <BlockViewer header="Image Grid" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-6">
                            <div className="flex">
                                <div>
                                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-1.png" className="w-full" alt='product-overview-1-1' />
                                </div>
                                <div className="flex flex-column px-3">
                                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-2.png" className="mb-3 w-full" alt='product-overview-1-2' />
                                    <img src="/demo/images/blocks/ecommerce/productoverview/product-overview-1-3.png" className="w-full" alt='product-overview-1-3' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 py-5 lg:py-3 lg:pl-5">
                            <ol className="flex list-none m-0 pt-0 px-0 pb-3 align-items-center text-sm text-600 mb-3 overflow-x-auto">
                                <li className="mr-2">Category</li>
                                <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                                <li className="mr-2">Category</li>
                                <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                                <li className="mr-2 inline-flex align-items-center">Category</li>
                                <li className="mr-2"><i className="pi pi-angle-right text-sm"></i></li>
                                <li>Category</li>
                            </ol>
                            <div className="flex align-items-center justify-content-between mb-4">
                                <span className="text-xl font-medium text-900">Product Title Placeholder</span>
                                <span className="text-xl font-medium text-900">$123</span>
                            </div>
                            <div className="flex align-items-center justify-content-between lg:justify-content-start mb-5">
                                <span className="mr-3">
                                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                </span>
                                <span className="text-500">5.00 | <b>20</b> reviews</span>
                            </div>
                            <p className="p-0 mt-0 mb-5 line-height-3 text-700">
                                Dolor purus non enim praesent.
                                At quis risus sed vulputate odio ut. Quis risus sed vulputate odio ut enim blandit volutpat.
                                Ornare arcu odio ut sem nulla pharetra diam sit. Augue neque gravida in nrmentum et sollicitudin ac orci phasellus.
                            </p>
                            <div className="font-bold text-900 mb-3">Color</div>
                            <div className="flex align-items-center mb-5">
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null }} onClick={() => setColor1('cyan')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor1('purple')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor1('indigo')}></div>
                            </div>

                            <div className="mb-3 flex align-items-center justify-content-between">
                                <span className="font-bold text-900">Size</span>
                                <a tabIndex="0" className="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
                            </div>

                            <div className="flex align-items-center mb-5">
                                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'XS' })} onClick={() => setSize1('XS')}>XS</div>
                                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'S' })} onClick={() => setSize1('S')}>S</div>
                                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'M' })} onClick={() => setSize1('M')}>M</div>
                                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'L' })} onClick={() => setSize1('L')}>L</div>
                                <div className={classNames('h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size1 === 'XL' })} onClick={() => setSize1('XL')}>XL</div>
                            </div>

                            <div className="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-5">
                                <i className="pi pi-exclamation"></i>
                                <span>Only a few left!</span>
                            </div>

                            <Button icon="pi pi-shopping-cart" className="w-full mb-5" label="Add to Cart" />

                            <ul className="list-none p-0 m-0 text-sm text-600">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-credit-card mr-2"></i>
                                    <span>Pay in 21 days</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-send mr-2"></i>
                                    <span>Free Shipping</span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-refresh mr-2"></i>
                                    <span>30 Days Return Policy</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Thumbnails" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <ol className="flex list-none m-0 p-0 align-items-center text-sm text-600 mb-5 border-top-1 border-bottom-1 surface-border py-2 overflow-x-auto">
                        <li className="mr-2">Category</li>
                        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                        <li className="mr-2">Category</li>
                        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                        <li className="mr-2">Category</li>
                        <li className="mr-2 inline-flex align-items-center"><i className="pi pi-angle-right text-sm"></i></li>
                        <li>Category</li>
                    </ol>
                    <div className="grid">
                        <div className="col-12 lg:col-6">
                            <img src={`/demo/images/blocks/ecommerce/productoverview/${images1[selectedImageIndex1]}`} className="mb-3 w-full" alt='product-overview' />
                            <div className="grid">
                                {
                                    images1.map((image, i) => {
                                        return <div className='col-3' key={`images2_${image}`}> <img src={`/demo/images/blocks/ecommerce/productoverview/${image}`} alt='product-overview'
                                            className={classNames('w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150', { 'border-primary': selectedImageIndex1 === i })}
                                            onClick={() => setSelectedImageIndex1(i)} /> </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 py-3 lg:pl-6">
                            <div className="flex align-items-center text-xl font-medium text-900 mb-4">
                                <span>Product Title Placeholder</span> <i className={classNames('pi ml-3 cursor-pointer', { 'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1 })} onClick={() => setLiked1(prevState => !prevState)}></i>
                            </div>
                            <span className="text-900 font-medium text-3xl block mb-5">$120</span>

                            <div className="font-bold text-900 mb-3">Color</div>
                            <div className="flex align-items-center mb-5">
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color2 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null }} onClick={() => setColor2('pink')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-orange-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color2 === 'orange' ? '0 0 0 0.2rem var(--orange-500)' : null }} onClick={() => setColor2('orange')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color2 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null }} onClick={() => setColor2('indigo')}></div>
                            </div>

                            <div className="font-bold text-900 mb-3">Size</div>
                            <div className="w-full sm:w-10rem p-fluid mb-3">
                                <Dropdown value={size2} onChange={(e) => setSize2(e.value)} options={sizes} optionLabel="label" optionValue="value" placeholder="Select Size" />
                            </div>
                            <div className="flex align-items-center mb-5">
                                <i className="pi pi-question-circle text-600 mr-3"></i>
                                <span className="mr-3">Need help about size?</span>
                                <a tabIndex="0" className="text-900 font-medium inline-flex align-items-center hover:text-primary cursor-pointer transition-colors transition-duration-150">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
                            </div>
                            <Button icon="pi pi-shopping-cart" className="w-full mb-5" label="Add to Cart" />
                            <div className="flex align-items-center justify-content-center text-900 mb-5">
                                <i className="pi pi-users mr-3"></i>
                                <span><b>12 people</b> are looking at this right now.</span>
                            </div>
                            <ol className="list-none p-0 m-0 surface-100 text-center text-900">
                                <li className="line-height-3 p-3 font-bold border-bottom-1 border-300">Product Highlights</li>
                                <li className="line-height-3 p-3 border-bottom-1 border-300">Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum.</li>
                                <li className="line-height-3 p-3 border-bottom-1 border-300">Purus gravida quis blandit turpis cursus in hac habitasse platea.</li>
                                <li className="line-height-3 p-3">Nisi quis eleifend quam adipiscing vitae proin sagittis.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Tabs" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid mb-7">
                        <div className="col-12 lg:col-6">
                            <div className="flex">
                                <div className="flex flex-column w-2 justify-content-between">
                                    {
                                        images2.map((image, i) => {
                                            return <img src={`/demo/images/blocks/ecommerce/productoverview/${image}`} key={`images1_${image}`} alt='product-overview'
                                                className={classNames('w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150', { 'border-primary': selectedImageIndex2 === i })}
                                                onClick={() => setSelectedImageIndex2(i)} />
                                        })
                                    }
                                </div>
                                <div className="pl-3 w-10">
                                    <img src={`/demo/images/blocks/ecommerce/productoverview/${images2[selectedImageIndex2]}`} className="w-full" alt='product-overview'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 py-3 lg:pl-6">
                            <div className="flex align-items-center text-xl font-medium text-900 mb-4">Product Title Placeholder</div>
                            <div className="flex align-items-center justify-content-between mb-5">
                                <span className="text-900 font-medium text-3xl block">$120</span>
                                <div className="flex align-items-center">
                                    <span className="mr-3">
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star text-700 mr-1"></i>
                                    </span>
                                    <span className="text-sm"><b className="text-900 mr-1">24</b> <span className="text-500"></span>reviews</span>
                                </div>
                            </div>

                            <div className="font-bold text-900 mb-3">Color</div>
                            <div className="flex align-items-center mb-5">
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color3 === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null }} onClick={() => setColor3('bluegray')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color3 === 'green' ? '0 0 0 0.2rem var(--green-500)' : null }} onClick={() => setColor3('green')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color3 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor3('blue')}></div>
                            </div>

                            <div className="mb-3 flex align-items-center justify-content-between">
                                <span className="font-bold text-900">Size</span>
                                <a tabIndex="0" className="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right"></i></a>
                            </div>
                            <div className="grid grid-nogutter align-items-center mb-5">
                                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'XS' })}
                                    onClick={() => setSize3('XS')}>XS</div>
                                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'S' })}
                                    onClick={() => setSize3('S')}>S</div>
                                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'M' })}
                                    onClick={() => setSize3('M')}>M</div>
                                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'L' })}
                                    onClick={() => setSize3('L')}>L</div>
                                <div className={classNames('col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors', { 'border-blue-500 border-2 text-blue-500': size3 === 'XL' })}
                                    onClick={() => setSize3('XL')}>XL</div>
                            </div>

                            <div className="font-bold text-900 mb-3">Quantity</div>
                            <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                                <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center" value={quantity1} onChange={(e) => setQuantity1(e.value)}
                                    decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                                <div className="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                                    <Button label="Add to Cart" className="flex-1 mr-5" />
                                    <i className={classNames('pi text-2xl cursor-pointer', { 'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1 })} onClick={() => setLiked1(prevState => !prevState)}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TabView>
                        <TabPanel header="Details">
                            <div className="text-900 font-medium text-3xl mb-4 mt-2">Product Details</div>
                            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra.
                                Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                                Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.</p>

                            <div className="grid">
                                <div className="col-12 lg:col-4">
                                    <span className="text-900 block font-medium mb-3">Highlights</span>
                                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                                        <li className="mb-2">Vulputate sapien nec.</li>
                                        <li className="mb-2">Purus gravida quis blandit.</li>
                                        <li className="mb-2">Nisi quis eleifend quam adipiscing.</li>
                                        <li>Imperdiet proin fermentum.</li>
                                    </ul>
                                </div>
                                <div className="col-12 lg:col-4">
                                    <span className="text-900 block font-medium mb-3">Size and Fit</span>
                                    <ul className="list-none p-0 m-0 text-700 mb-4">
                                        <li className="mb-3"><span className="font-medium">Leo vel:</span> Egestas congue.</li>
                                        <li className="mb-3"><span className="font-medium">Sociis natoque:</span> Parturient montes nascetur.</li>
                                        <li><span className="font-medium">Suspendisse in:</span> Purus sit amet volutpat.</li>
                                    </ul>
                                </div>
                                <div className="col-12 lg:col-4">
                                    <span className="text-900 block font-medium mb-3">Material & Care</span>
                                    <ul className="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                                        <li className="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                                            <i className="pi pi-sun mr-2"></i>
                                            <span>Not dryer safe</span>
                                        </li>
                                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                                            <i className="pi pi-times-circle mr-2"></i>
                                            <span>No chemical wash</span>
                                        </li>
                                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                                            <i className="pi pi-sliders-h mr-2"></i>
                                            <span>Iron medium heat</span>
                                        </li>
                                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                                            <i className="pi pi-minus-circle mr-2"></i>
                                            <span>Dry flat</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Reviews">
                            <div className="text-900 font-medium text-3xl mb-4 mt-2">Customer Reviews</div>
                            <ul className="list-none p-0 m-0">
                                <li className="pb-5 border-bottom-1 surface-border">
                                    <span>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-gray-500"></i>
                                    </span>
                                    <div className="text-900 font-medium text-xl my-3">Absolute Perfection!</div>
                                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.</p>
                                    <span className="text-600 font-medium">Darlene Robertson, 2 days ago</span>
                                </li>
                                <li className="py-5 border-bottom-1 surface-border">
                                    <span>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                        <i className="pi pi-star-fill text-yellow-500"></i>
                                    </span>
                                    <div className="text-900 font-medium text-xl my-3">Classy</div>
                                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                                    <span className="text-600 font-medium">Kristin Watson, 2 days ago</span>
                                </li>
                            </ul>
                        </TabPanel>
                        <TabPanel header="Shipping">
                            <div className="text-900 font-medium text-3xl mb-4 mt-2">Shipping Placeholder</div>
                            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus.
                                Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>

                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <span className="text-900 block font-medium mb-3">Shipping Costs</span>
                                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                                        <li className="mb-2">Japan - JPY 2,500.</li>
                                        <li className="mb-2">Europe – EUR 10</li>
                                        <li className="mb-2">Switzerland – CHF 10</li>
                                        <li className="mb-2">Canada – CAD 25</li>
                                        <li className="mb-2">USA – USD 20</li>
                                        <li className="mb-2">Australia – AUD 30</li>
                                        <li className="mb-2">United Kingdom – GBP 10</li>
                                    </ul>
                                </div>
                                <div className="col-12 md:col-6">
                                    <span className="text-900 block font-medium mb-3">Return Policy</span>
                                    <p className="line-height-3 text-700 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. </p>
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </BlockViewer>

            <BlockViewer header="Galleria and Accordion" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-6 flex justify-content-center">
                            <Galleria value={galleriaImages} style={{ 'maxWidth': '640px' }} numVisible={2}
                                showThumbnails={false} showIndicators item={(item) => <div className="w-full h-full overflow-hidden">
                                    <img src={'/demo/images/blocks/ecommerce/productoverview/' + item} className="w-full block" alt='product-overview'/>
                                </div>} />
                        </div>
                        <div className="col-12 lg:col-6 lg:col-6 py-3 lg:pl-5">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <span className="text-900 text-4xl font">Product Title</span>
                                <span className="inline-flex align-items-center">
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <span className="font-bold text-900">5.0</span>
                                </span>
                            </div>
                            <div className="text-700 text-3xl mb-5">$56.00</div>

                            <div className="font-medium text-900 mb-3 text-xl">Color
                                <span className="ml-1 text-700 font-normal capitalize">| {color4}</span>
                            </div>
                            <div className="flex align-items-center mb-5">
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color4 === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null }} onClick={() => setColor4('blue')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color4 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null }} onClick={() => setColor4('purple')}></div>
                                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-pink-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                                    style={{ boxShadow: color4 === 'pink' ? '0 0 0 0.2rem var(--pink-500)' : null }} onClick={() => setColor4('pink')}></div>
                            </div>

                            <div className="border-round p-2 border-1 surface-border inline-flex mb-5">
                                <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center border-transparent" value={quantity2} onChange={(e) => setQuantity2(e.value)}
                                    decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            </div>

                            <div className="flex mb-5">
                                <Button label="Add to Cart" className="p-button-outlined w-6 mr-1" />
                                <Button label="Buy Now" className="w-6 ml-1" />
                            </div>

                            <div className="surface-50 border-round p-3 mb-5">
                                <div className="text-900 text-xl mb-4">Goes with</div>
                                <div className="flex align-items-center">
                                    <img src="/demo/images/blocks/ecommerce/productoverview/product-suggestion.png" className="w-5rem h-5rem flex-shrink-0" alt='product-overview'/>
                                    <div className="pl-3">
                                        <span className="text-900 text-xl font-medium">Product Title</span>
                                        <p className="mb-0 mt-2 p-0 text-600 font-medium">$24.00</p>
                                    </div>
                                    <Button className="ml-auto border-circle p-button-outlined" icon="pi pi-plus" />
                                </div>
                            </div>

                            <Accordion>
                                <AccordionTab header="About Product">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                                <AccordionTab header="Shipping">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                                <AccordionTab header="Environment">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default ProductOverview;
