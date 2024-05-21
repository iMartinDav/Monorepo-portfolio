import React, { useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
const RadioGroup = () => {
    const [activeTab1, setActiveTab1] = useState(0);

    const [animal, setAnimal] = useState(1);
    const [tier1, setTier1] = useState(1);
    const [tier2, setTier2] = useState(1);
    const [hotel, setHotel] = useState(1);
    const [subscription, setSubscription] = useState(1);
    const [payment, setPayment] = useState(1);

    const block1 = `
<div className="w-full">
    <div className="text-900 text-xl mb-3 text-left font-medium">Choose your favorite animal</div>
    <div onClick={() => setAnimal(0)}
        className={classNames('surface-card border-2 p-5 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer', { 'surface-border': animal !== 0, 'border-primary': animal === 0 })}>
        <div className="flex align-items-start mr-0 md:mr-8">
            <img src="/demo/images/blocks/animals/a1.jpg" className="mr-3 border-round" style={{ width: '50px' }} alt="a1" />
            <div>
                <div className={classNames('font-medium mb-2', { 'text-primary-600': animal === 0 })}>Owl</div>
                <div className="flex flex-grow gap-2">
                    <span className={classNames('p-1 border-round surface-100', { 'text-primary-600': animal === 0 })}>Sharp Talons</span>
                </div>
            </div>
        </div>
        <div className={classNames('ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium', { 'surface-100 text-600 surface-border': animal !== 0, 'bg-primary-reverse': animal === 0 })}>
            <i className="pi pi-users mr-2"></i>
            <span>702</span>
        </div>
    </div>
    <div onClick={() => setAnimal(1)}
        className={classNames('surface-card border-2 p-5 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer', { 'surface-border': animal !== 1, 'border-primary': animal === 1 })}>
        <div className="flex align-items-start mr-0 md:mr-8">
            <img src="/demo/images/blocks/animals/a2.jpg" className="mr-3 border-round" style={{ width: '50px' }} alt="a2" />
            <div>
                <div className={classNames('font-medium mb-2', { 'text-primary-900': animal === 1 })}>Fox</div>
                <div className="flex flex-grow gap-2">
                    <span className={classNames('p-1 border-round surface-100', { 'text-primary-600': animal === 1 })}>Upturned Snout</span>
                </div>
            </div>
        </div>
        <div className={classNames('ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium', { 'surface-100 text-600 surface-border': animal !== 1, 'bg-primary-reverse': animal === 1 })}>
            <i className="pi pi-users mr-2"></i>
            <span>702</span>
        </div>
    </div>
    <div onClick={() => setAnimal(2)}
        className={classNames('surface-card border-2 p-5 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer', { 'surface-border': animal !== 2, 'border-primary': animal === 2 })}>
        <div className="flex align-items-start mr-0 md:mr-8">
            <img src="/demo/images/blocks/animals/a3.jpg" className="mr-3 border-round" style={{ width: '50px' }} alt="a3" />
            <div>
                <div className={classNames('font-medium mb-2', { 'text-primary-900': animal === 2 })}>Sheep</div>
                <div className="flex flex-grow gap-2">
                    <span className={classNames('p-1 border-round surface-100', { 'text-primary-600': animal === 2 })}>Just Sheep</span>
                </div>
            </div>
        </div>
        <div className={classNames('ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium', { 'surface-100 text-600 surface-border': animal !== 2, 'bg-primary-reverse': animal === 2 })}>
            <i className="pi pi-users mr-2"></i>
            <span>529</span>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="w-full">
    <div className="text-900 text-xl mb-3 text-left font-medium">Change your account tier1</div>
    <div className={classNames('surface-card border-2 p-3 border-round-top flex align-items-center cursor-pointer', { 'surface-border': tier1 !== 0, 'border-primary': tier1 === 0 })} onClick={() => setTier1(0)}>
        <RadioButton name="tier1" value={0} onChange={(e) => setTier1(e.value)} checked={tier1 === 0} className="mr-3" />
        <div className="mr-4 md:mr-8">
            <div className="font-medium mb-1">Basic</div>
            <span className="text-sm">Quam nulla porttitor massa.</span>
        </div>
        <div className={classNames('border-round border-1 p-1 ml-auto flex flex-nowrap', { 'surface-50 text-600 surface-border': tier1 !== 0, 'bg-primary-reverse': tier1 === 0 })}>
            <i className="pi pi-star-fill"></i>
        </div>
    </div>
    <div className={classNames('surface-card border-2 p-3 flex align-items-center cursor-pointer', { 'surface-border': tier1 !== 1, 'border-primary': tier1 === 1 })} onClick={() => setTier1(1)}>
        <RadioButton name="tier1" value={1} onChange={(e) => setTier1(e.value)} checked={tier1 === 1} className="mr-3" />
        <div className="mr-4 md:mr-8">
            <div className="font-medium mb-1">Premium</div>
            <span className="text-sm">Quam nulla porttitor massa.</span>
        </div>
        <div className={classNames('border-round border-1 p-1 ml-auto flex flex-nowrap', { 'surface-50 text-600 surface-border': tier1 !== 1, 'bg-primary-reverse': tier1 === 1 })}>
            <i className="pi pi-star-fill mr-2"></i>
            <i className="pi pi-star-fill"></i>
        </div>
    </div>
    <div className={classNames('surface-card border-2 p-3 border-round-bottom flex align-items-center cursor-pointer', { 'surface-border': tier1 !== 2, 'border-primary': tier1 === 2 })} onClick={() => setTier1(2)}>
        <RadioButton name="tier1" value={2} onChange={(e) => setTier1(e.value)} checked={tier1 === 2} className="mr-3" />
        <div className="mr-4 md:mr-8">
            <div className="font-medium mb-1">Enterprise</div>
            <span className="text-sm">Quam nulla porttitor massa.</span>
        </div>
        <div className={classNames('border-round border-1 p-1 ml-auto flex flex-nowrap', { 'surface-50 text-600 surface-border': tier1 !== 2, 'bg-primary-reverse': tier1 === 2 })}>
            <i className="pi pi-star-fill mr-2"></i>
            <i className="pi pi-star-fill mr-2"></i>
            <i className="pi pi-star-fill"></i>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="w-full">
    <div className="text-900 text-xl mb-3 text-left font-medium">Change your account tier</div>
    <div className={classNames('surface-card border-2 p-3 border-round-top flex align-items-center cursor-pointer', { 'surface-border': tier2 !== 0, 'border-primary': tier2 === 0 })} onClick={() => setTier2(0)}>
        <div className="w-4 flex align-items-center pr-4">
            <RadioButton name="tier2" value={0} onChange={(e) => setTier2(e.value)} checked={tier2 === 0} className="mr-2" />
            <div className="font-medium">Basic</div>
        </div>
        <div className="w-4 text-center">
            <span className="bg-blue-100 text-primary-700 font-medium px-2 py-1" style={{ borderRadius: '12px' }}>Save 20%</span>
        </div>
        <div className="w-4 text-right">
            <span className="font-medium">19$</span>
            <span> / Month</span>
        </div>
    </div>
    <div className={classNames('surface-card border-2 p-3 flex align-items-center cursor-pointer', { 'surface-border': tier2 !== 1, 'border-primary': tier2 === 1 })} onClick={() => setTier2(1)}>
        <div className="w-4 flex align-items-center pr-4">
            <RadioButton name="tier2" value={1} onChange={(e) => setTier2(e.value)} checked={tier2 === 1} className="mr-2" />
            <div className="font-medium">Premium</div>
        </div>
        <div className="w-4 text-center">
            <span className="bg-primary-100 text-primary-700 font-medium px-2 py-1" style={{ borderRadius: '12px' }}>Save 25%</span>
        </div>
        <div className="w-4 text-right">
            <span className="font-medium">29$</span>
            <span> / Month</span>
        </div>
    </div>
    <div className={classNames('surface-card border-2 p-3 border-round-bottom flex align-items-center cursor-pointer', { 'surface-border': tier2 !== 2, 'border-primary': tier2 === 2 })} onClick={() => setTier2(2)}>
        <div className="w-4 flex align-items-center pr-4">
            <RadioButton name="tier2" value={2} onChange={(e) => setTier2(e.value)} checked={tier2 === 2} className="mr-2" />
            <div className="font-medium">Enterprise</div>
        </div>
        <div className="w-4 text-center">
            <span className="bg-primary-100 text-primary-700 font-medium px-2 py-1" style={{ borderRadius: '12px' }}>Save 50%</span>
        </div>
        <div className="w-4 text-right">
            <span className="text-primary">39$</span>
            <span> / Month</span>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-medium text-2xl mb-3">Choose your Adventure</div>
    <div className="text-700 line-height-3 mb-4">Volutpat est velit egestas dui id ornare arcu odio. Amet dictum sit amet justo.</div>
    <div className="grid">
        <div className="col-12 lg:col-4">
            <div className={classNames('shadow-1 border-round border-2 cursor-pointer surface-card h-full', { 'border-transparent': hotel !== 0, 'border-blue-500': hotel === 0, 'shadow-3': hotel === 0 })} onClick={() => setHotel(0)}>
                <img src="/demo/images/blocks/hotels/h1.jpg" className="w-full" alt="h1" />
                <div className="p-3 flex flex-column align-items-center gap-3">
                    <div className="text-900 text-xl font-medium">Tranquility Point</div>
                    <p className="m-0">Praesent semper feugiat nibh sed pulvinar.</p>
                    <div className="text-yellow-500">
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star mr-1"></i>
                        <i className="pi pi-star"></i>
                    </div>
                    <RadioButton name="hotel" value={0} onChange={(e) => setHotel(e.value)} checked={hotel === 0} />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4">
            <div className={classNames('shadow-1 border-round border-2 cursor-pointer surface-card h-full', { 'border-transparent': hotel !== 1, 'border-blue-500': hotel === 1, 'shadow-3': hotel === 1 })} onClick={() => setHotel(1)}>
                <img src="/demo/images/blocks/hotels/h2.jpg" className="w-full" alt="h2" />
                <div className="p-3 flex flex-column align-items-center gap-3">
                    <div className="text-900 text-xl font-medium">Paradise Hotel</div>
                    <p className="m-0">Volutpat est velit egestas dui id ornare arcu odio.</p>
                    <div className="text-yellow-500">
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star mr-1"></i>
                        <i className="pi pi-star"></i>
                    </div>
                    <RadioButton name="hotel" value={1} onChange={(e) => setHotel(e.value)} checked={hotel === 1} />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4">
            <div className={classNames('shadow-1 border-round border-2 cursor-pointer surface-card h-full', { 'border-transparent': hotel !== 2, 'border-blue-500': hotel === 2, 'shadow-3': hotel === 2 })} onClick={() => setHotel(2)}>
                <img src="/demo/images/blocks/hotels/h3.jpg" className="w-full" alt="h3" />
                <div className="p-3 flex flex-column align-items-center gap-3">
                    <div className="text-900 text-xl font-medium">Horizon Hill</div>
                    <p className="m-0">Ultrices in iaculis nunc sed augue lacus.</p>
                    <div className="text-yellow-500">
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star-fill mr-1"></i>
                        <i className="pi pi-star mr-1"></i>
                        <i className="pi pi-star"></i>
                    </div>
                    <RadioButton name="hotel" value={2} onChange={(e) => setHotel(e.value)} checked={hotel === 2} />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-xl font-medium mb-3 text-center">Subscription Options</div>
    <p className="text-700 mt-0 mb-4 text-center">Volutpat est velit egestas dui id ornare arcu odio. Amet dictum sit amet justo.</p>
    <div className="surface-card shadow-2 border-round p-5">
        <div className="grid">
            <div className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 border-bottom-1 lg:border-bottom-none surface-border cursor-pointer" onClick={() => setSubscription(0)}>
                <div className="flex align-items-center mr-3">
                    <RadioButton name="subscription" value={0} checked={subscription === 0} onChange={(e) => setSubscription(e.value)} />
                </div>
                <div>
                    <span className="text-900 text-2xl font-medium">10 Days</span>
                    <p className="text-xl text-500 font-medium mt-2 mb-0">In tellus integer</p>
                </div>
            </div>
            <div className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border cursor-pointer" onClick={() => setSubscription(1)}>
                <div className="flex align-items-center mr-3">
                    <RadioButton name="subscription" checked={subscription === 1} onChange={(e) => setSubscription(e.value)} />
                </div>
                <div>
                    <span className="text-900 text-2xl font-medium">30 Days</span>
                    <p className="text-xl text-500 font-medium mt-2 mb-0">Risus pretium</p>
                </div>
            </div>
            <div className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 border-bottom-1 sm:border-bottom-none surface-border cursor-pointer" onClick={() => setSubscription(2)}>
                <div className="flex align-items-center mr-3">
                    <RadioButton name="subscription" checked={subscription === 2} onChange={(e) => setSubscription(e.value)} />
                </div>
                <div>
                    <span className="text-900 text-2xl font-medium">90 Days</span>
                    <p className="text-xl text-500 font-medium mt-2 mb-0">Pharetra pharetra</p>
                </div>
            </div>
            <div className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center cursor-pointer" onClick={() => setSubscription(3)}>
                <div className="flex align-items-center mr-3">
                    <RadioButton name="subscription" checked={subscription === 3} onChange={(e) => setSubscription(e.value)} />
                </div>
                <div>
                    <span className="text-900 text-2xl font-medium">360 Days</span>
                    <p className="text-xl text-500 font-medium mt-2 mb-0">Aliquet lectus</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 text-xl font-medium mb-3 text-center">Payment Methods</div>
    <p className="text-700 mt-0 mb-4 text-center">In tellus integer feugiat scelerisque varius morbi.</p>
    <div className="grid">
        <div className="col-12 lg:col-6 p-3">
            <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': payment === 0 })} onClick={() => setPayment(0)}>
                <div className="flex align-items-center mb-4">
                    <div className="mr-3">
                        <span className="inline-flex justify-content-center align-items-center bg-indigo-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                            <i className="pi pi-credit-card text-2xl text-indigo-600"></i>
                        </span>
                    </div>
                    <div>
                        <span className="text-900 text-xl mb-2 font-medium">Credit Card</span>
                        <p className="m-0 text-600 font-medium text-sm">Magna fermentum iaculis</p>
                    </div>
                    <RadioButton name="payment" value={0} checked={payment === 0} onChange={() => setPayment(0)} className="ml-auto" />
                </div>
                <p className="text-600 m-0 line-height-3">Nunc consequat interdum varius sit. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.</p>
            </div>
        </div>
        <div className="col-12 lg:col-6 p-3">
            <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': payment === 1 })} onClick={() => setPayment(1)}>
                <div className="flex align-items-center mb-4">
                    <div className="mr-3">
                        <span className="inline-flex justify-content-center align-items-center bg-blue-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                            <img src="/demo/images/blocks/logos/paypal.svg" style={{ height: '1.5rem' }} alt="paypal"/>
                        </span>
                    </div>
                    <div>
                        <span className="text-900 text-xl mb-2 font-medium">PayPal</span>
                        <p className="m-0 text-600 font-medium text-sm">Nibh sit amet</p>
                    </div>
                    <RadioButton name="payment" value={1} checked={payment === 1} onChange={() => setPayment(1)} className="ml-auto" />
                </div>
                <p className="text-600 m-0 line-height-3">Est pellentesque elit ullamcorper dignissim. Tortor condimentum lacinia quis vel eros. Pharetra magna ac placerat vestibulum lectus mauris ultrices.</p>
            </div>
        </div>
        <div className="col-12 lg:col-6 p-3">
            <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': payment === 2 })} onClick={() => setPayment(2)}>
                <div className="flex align-items-center mb-4">
                    <div className="mr-3">
                        <span className="inline-flex justify-content-center align-items-center bg-green-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                            <i className="pi pi-money-bill text-2xl text-green-600"></i>
                        </span>
                    </div>
                    <div>
                        <span className="text-900 text-xl mb-2 font-medium">Wire Transfer</span>
                        <p className="m-0 text-600 font-medium text-sm">Ornare lectus sit</p>
                    </div>
                    <RadioButton name="payment" value={2} checked={payment === 2} onChange={() => setPayment(2)} className="ml-auto" />
                </div>
                <p className="text-600 m-0 line-height-3">Eget nunc lobortis mattis aliquam. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
        </div>
        <div className="col-12 lg:col-6 p-3">
            <div style={{ borderRadius: '10px' }} className={classNames('shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer', { 'border-blue-500': payment === 3 })} onClick={() => setPayment(3)}>
                <div className="flex align-items-center mb-4">
                    <div className="mr-3">
                        <span className="inline-flex justify-content-center align-items-center bg-orange-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                            <img src="/demo/images/blocks/logos/bitcoin.svg" style={{ height: '1.5rem' }} alt="bitcoin"/>
                        </span>
                    </div>
                    <div>
                        <span className="text-900 text-xl mb-2 font-medium">BitCoin</span>
                        <p className="m-0 text-600 font-medium text-sm">Donec adipiscing tristique</p>
                    </div>
                    <RadioButton name="payment" value={3} checked={payment === 3} onChange={() => setPayment(3)} className="ml-auto" />
                </div>
                <p className="text-600 m-0 line-height-3">Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.</p>
            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<div className="flex flex-wrap justify-content-center align-items-center gap-3">
    <div className="font-medium text-900 text-lg">Choose Payment Amount</div>
    <div className="flex justify-content-center flex-wrap gap-3">
        <div className={'inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150' + (activeTab1 === 0 ? ' bg-primary border-primary' : ' surface-card surface-border hover:surface-hover')} onClick={() => setActiveTab1(0)}>
            10$
        </div>
        <div className={'inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150' + (activeTab1 === 1 ? ' bg-primary border-primary' : ' surface-card surface-border hover:surface-hover')} onClick={() => setActiveTab1(1)}>
            25$
        </div>
        <div className={'inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150' + (activeTab1 === 2 ? ' bg-primary border-primary' : ' surface-card surface-border hover:surface-hover')} onClick={() => setActiveTab1(2)}>
            50$
        </div>
        <div className={'inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150' + (activeTab1 === 3 ? ' bg-primary border-primary' : ' surface-card surface-border hover:surface-hover ')} onClick={() => setActiveTab1(3)}>
            100$
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Radio Group</div>
            <BlockViewer
                header="Stacked Cards"
                code={block1}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="w-full">
                    <div className="text-900 text-xl mb-3 text-left font-medium">
                        Choose your favorite animal
                    </div>
                    <div
                        onClick={() => setAnimal(0)}
                        className={classNames(
                            "surface-card border-2 p-5 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer",
                            {
                                "surface-border": animal !== 0,
                                "border-primary": animal === 0,
                            }
                        )}
                    >
                        <div className="flex align-items-start mr-0 md:mr-8">
                            <img
                                src="/demo/images/blocks/animals/a1.jpg"
                                className="mr-3 border-round"
                                style={{ width: "50px" }}
                                alt="a1"
                            />
                            <div>
                                <div
                                    className={classNames("font-medium mb-2", {
                                        "text-primary-600": animal === 0,
                                    })}
                                >
                                    Owl
                                </div>
                                <div className="flex flex-grow gap-2">
                                    <span
                                        className={classNames(
                                            "p-1 border-round surface-100",
                                            {
                                                "text-primary-600":
                                                    animal === 0,
                                            }
                                        )}
                                    >
                                        Sharp Talons
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                "ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium",
                                {
                                    "surface-100 text-600 surface-border":
                                        animal !== 0,
                                    "bg-primary-reverse": animal === 0,
                                }
                            )}
                        >
                            <i className="pi pi-users mr-2"></i>
                            <span>702</span>
                        </div>
                    </div>
                    <div
                        onClick={() => setAnimal(1)}
                        className={classNames(
                            "surface-card border-2 p-5 mb-3 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer",
                            {
                                "surface-border": animal !== 1,
                                "border-primary": animal === 1,
                            }
                        )}
                    >
                        <div className="flex align-items-start mr-0 md:mr-8">
                            <img
                                src="/demo/images/blocks/animals/a2.jpg"
                                className="mr-3 border-round"
                                style={{ width: "50px" }}
                                alt="a2"
                            />
                            <div>
                                <div
                                    className={classNames("font-medium mb-2", {
                                        "text-primary-600": animal === 1,
                                    })}
                                >
                                    Fox
                                </div>
                                <div className="flex flex-grow gap-2">
                                    <span
                                        className={classNames(
                                            "p-1 border-round surface-100",
                                            {
                                                "text-primary-600":
                                                    animal === 1,
                                            }
                                        )}
                                    >
                                        Upturned Snout
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                "ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium",
                                {
                                    "surface-100 text-600 surface-border":
                                        animal !== 1,
                                    "bg-primary-reverse": animal === 1,
                                }
                            )}
                        >
                            <i className="pi pi-users mr-2"></i>
                            <span>702</span>
                        </div>
                    </div>
                    <div
                        onClick={() => setAnimal(2)}
                        className={classNames(
                            "surface-card border-2 p-5 border-round flex flex-column md:flex-row align-items-start md:align-items-center md:justify-content-between cursor-pointer",
                            {
                                "surface-border": animal !== 2,
                                "border-primary": animal === 2,
                            }
                        )}
                    >
                        <div className="flex align-items-start mr-0 md:mr-8">
                            <img
                                src="/demo/images/blocks/animals/a3.jpg"
                                className="mr-3 border-round"
                                style={{ width: "50px" }}
                                alt="a3"
                            />
                            <div>
                                <div
                                    className={classNames("font-medium mb-2", {
                                        "text-primary-600": animal === 2,
                                    })}
                                >
                                    Sheep
                                </div>
                                <div className="flex flex-grow gap-2">
                                    <span
                                        className={classNames(
                                            "p-1 border-round surface-100",
                                            {
                                                "text-primary-600":
                                                    animal === 2,
                                            }
                                        )}
                                    >
                                        Just Sheep
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                "ml-0 md:ml-8 mt-2 md:mt-0 border-1 p-1 px-2 border-round flex align-items-center font-medium",
                                {
                                    "surface-100 text-600 surface-border":
                                        animal !== 2,
                                    "bg-primary-reverse": animal === 2,
                                }
                            )}
                        >
                            <i className="pi pi-users mr-2"></i>
                            <span>529</span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="List Description"
                code={block2}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="w-full">
                    <div className="text-900 text-xl mb-3 text-left font-medium">
                        Change your account tier1
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 border-round-top flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier1 !== 0,
                                "border-primary": tier1 === 0,
                            }
                        )}
                        onClick={() => setTier1(0)}
                    >
                        <RadioButton
                            name="tier1"
                            value={0}
                            onChange={(e) => setTier1(e.value)}
                            checked={tier1 === 0}
                            className="mr-3"
                        />
                        <div className="mr-4 md:mr-8">
                            <div className="font-medium mb-1">Basic</div>
                            <span className="text-sm">
                                Quam nulla porttitor massa.
                            </span>
                        </div>
                        <div
                            className={classNames(
                                "border-round border-1 p-1 ml-auto flex flex-nowrap",
                                {
                                    "surface-50 text-600 surface-border":
                                        tier1 !== 0,
                                    "bg-primary-reverse": tier1 === 0,
                                }
                            )}
                        >
                            <i className="pi pi-star-fill"></i>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier1 !== 1,
                                "border-primary": tier1 === 1,
                            }
                        )}
                        onClick={() => setTier1(1)}
                    >
                        <RadioButton
                            name="tier1"
                            value={1}
                            onChange={(e) => setTier1(e.value)}
                            checked={tier1 === 1}
                            className="mr-3"
                        />
                        <div className="mr-4 md:mr-8">
                            <div className="font-medium mb-1">Premium</div>
                            <span className="text-sm">
                                Quam nulla porttitor massa.
                            </span>
                        </div>
                        <div
                            className={classNames(
                                "border-round border-1 p-1 ml-auto flex flex-nowrap",
                                {
                                    "surface-50 text-600 surface-border":
                                        tier1 !== 1,
                                    "bg-primary-reverse": tier1 === 1,
                                }
                            )}
                        >
                            <i className="pi pi-star-fill mr-2"></i>
                            <i className="pi pi-star-fill"></i>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 border-round-bottom flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier1 !== 2,
                                "border-primary": tier1 === 2,
                            }
                        )}
                        onClick={() => setTier1(2)}
                    >
                        <RadioButton
                            name="tier1"
                            value={2}
                            onChange={(e) => setTier1(e.value)}
                            checked={tier1 === 2}
                            className="mr-3"
                        />
                        <div className="mr-4 md:mr-8">
                            <div className="font-medium mb-1">Enterprise</div>
                            <span className="text-sm">
                                Quam nulla porttitor massa.
                            </span>
                        </div>
                        <div
                            className={classNames(
                                "border-round border-1 p-1 ml-auto flex flex-nowrap",
                                {
                                    "surface-50 text-600 surface-border":
                                        tier1 !== 2,
                                    "bg-primary-reverse": tier1 === 2,
                                }
                            )}
                        >
                            <i className="pi pi-star-fill mr-2"></i>
                            <i className="pi pi-star-fill mr-2"></i>
                            <i className="pi pi-star-fill"></i>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Table Layout"
                code={block3}
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="w-full">
                    <div className="text-900 text-xl mb-3 text-left font-medium">
                        Change your account tier
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 border-round-top flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier2 !== 0,
                                "border-primary": tier2 === 0,
                            }
                        )}
                        onClick={() => setTier2(0)}
                    >
                        <div className="w-4 flex align-items-center pr-4">
                            <RadioButton
                                name="tier2"
                                value={0}
                                onChange={(e) => setTier2(e.value)}
                                checked={tier2 === 0}
                                className="mr-2"
                            />
                            <div className="font-medium">Basic</div>
                        </div>
                        <div className="w-4 text-center">
                            <span
                                className="bg-primary-100 text-primary-700 font-medium px-2 py-1"
                                style={{ borderRadius: "12px" }}
                            >
                                Save 20%
                            </span>
                        </div>
                        <div className="w-4 text-right">
                            <span className="font-medium">19$</span>
                            <span> / Month</span>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier2 !== 1,
                                "border-primary": tier2 === 1,
                            }
                        )}
                        onClick={() => setTier2(1)}
                    >
                        <div className="w-4 flex align-items-center pr-4">
                            <RadioButton
                                name="tier2"
                                value={1}
                                onChange={(e) => setTier2(e.value)}
                                checked={tier2 === 1}
                                className="mr-2"
                            />
                            <div className="font-medium">Premium</div>
                        </div>
                        <div className="w-4 text-center">
                            <span
                                className="bg-primary-100 text-primary-700 font-medium px-2 py-1"
                                style={{ borderRadius: "12px" }}
                            >
                                Save 25%
                            </span>
                        </div>
                        <div className="w-4 text-right">
                            <span className="font-medium">29$</span>
                            <span> / Month</span>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            "surface-card border-2 p-3 border-round-bottom flex align-items-center cursor-pointer",
                            {
                                "surface-border": tier2 !== 2,
                                "border-primary": tier2 === 2,
                            }
                        )}
                        onClick={() => setTier2(2)}
                    >
                        <div className="w-4 flex align-items-center pr-4">
                            <RadioButton
                                name="tier2"
                                value={2}
                                onChange={(e) => setTier2(e.value)}
                                checked={tier2 === 2}
                                className="mr-2"
                            />
                            <div className="font-medium">Enterprise</div>
                        </div>
                        <div className="w-4 text-center">
                            <span
                                className="bg-primary-100 text-primary-700 font-medium px-2 py-1"
                                style={{ borderRadius: "12px" }}
                            >
                                Save 50%
                            </span>
                        </div>
                        <div className="w-4 text-right">
                            <span className="font-medium">39$</span>
                            <span> / Month</span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3-Column Cards" code={block4}>
                <div className="surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-medium text-2xl mb-3">
                        Choose your Adventure
                    </div>
                    <div className="text-700 line-height-3 mb-4">
                        Volutpat est velit egestas dui id ornare arcu odio. Amet
                        dictum sit amet justo.
                    </div>
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div
                                className={classNames(
                                    "shadow-1 border-round border-2 cursor-pointer surface-card h-full",
                                    {
                                        "border-transparent": hotel !== 0,
                                        "border-blue-500": hotel === 0,
                                        "shadow-3": hotel === 0,
                                    }
                                )}
                                onClick={() => setHotel(0)}
                            >
                                <img
                                    src="/demo/images/blocks/hotels/h1.jpg"
                                    className="w-full"
                                    alt="h1"
                                />
                                <div className="p-3 flex flex-column align-items-center gap-3">
                                    <div className="text-900 text-xl font-medium">
                                        Tranquility Point
                                    </div>
                                    <p className="m-0">
                                        Praesent semper feugiat nibh sed
                                        pulvinar.
                                    </p>
                                    <div className="text-yellow-500">
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star mr-1"></i>
                                        <i className="pi pi-star"></i>
                                    </div>
                                    <RadioButton
                                        name="hotel"
                                        value={0}
                                        onChange={(e) => setHotel(e.value)}
                                        checked={hotel === 0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <div
                                className={classNames(
                                    "shadow-1 border-round border-2 cursor-pointer surface-card h-full",
                                    {
                                        "border-transparent": hotel !== 1,
                                        "border-blue-500": hotel === 1,
                                        "shadow-3": hotel === 1,
                                    }
                                )}
                                onClick={() => setHotel(1)}
                            >
                                <img
                                    src="/demo/images/blocks/hotels/h2.jpg"
                                    className="w-full"
                                    alt="h2"
                                />
                                <div className="p-3">
                                    <div className="text-900 text-xl mb-3 font-medium">
                                        Paradise Hotel
                                    </div>
                                    <p className="m-0 mb-3">
                                        Volutpat est velit egestas dui id ornare
                                        arcu odio.
                                    </p>
                                    <div className="text-yellow-500 mb-4">
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star mr-1"></i>
                                        <i className="pi pi-star"></i>
                                    </div>
                                    <RadioButton
                                        name="hotel"
                                        value={1}
                                        onChange={(e) => setHotel(e.value)}
                                        checked={hotel === 1}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <div
                                className={classNames(
                                    "shadow-1 border-round border-2 cursor-pointer surface-card h-full",
                                    {
                                        "border-transparent": hotel !== 2,
                                        "border-blue-500": hotel === 2,
                                        "shadow-3": hotel === 2,
                                    }
                                )}
                                onClick={() => setHotel(2)}
                            >
                                <img
                                    src="/demo/images/blocks/hotels/h3.jpg"
                                    className="w-full"
                                    alt="h3"
                                />
                                <div className="p-3">
                                    <div className="text-900 text-xl mb-3 font-medium">
                                        Horizon Hill
                                    </div>
                                    <p className="m-0 mb-3">
                                        Ultrices in iaculis nunc sed augue
                                        lacus.
                                    </p>
                                    <div className="text-yellow-500 mb-4">
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star-fill mr-1"></i>
                                        <i className="pi pi-star mr-1"></i>
                                        <i className="pi pi-star"></i>
                                    </div>
                                    <RadioButton
                                        name="hotel"
                                        value={2}
                                        onChange={(e) => setHotel(e.value)}
                                        checked={hotel === 2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Inline with Separators" code={block5}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-xl font-medium mb-3 text-center">
                        Subscription Options
                    </div>
                    <p className="text-700 mt-0 mb-4 text-center">
                        Volutpat est velit egestas dui id ornare arcu odio. Amet
                        dictum sit amet justo.
                    </p>
                    <div className="surface-card shadow-2 border-round p-5">
                        <div className="grid">
                            <div
                                className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 border-bottom-1 lg:border-bottom-none surface-border cursor-pointer"
                                onClick={() => setSubscription(0)}
                            >
                                <div className="flex align-items-center mr-3">
                                    <RadioButton
                                        name="subscription"
                                        value={0}
                                        checked={subscription === 0}
                                        onChange={(e) =>
                                            setSubscription(e.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <span className="text-900 text-2xl font-medium">
                                        10 Days
                                    </span>
                                    <p className="text-xl text-500 font-medium mt-2 mb-0">
                                        In tellus integer
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center lg:border-right-1 border-bottom-1 lg:border-bottom-none surface-border cursor-pointer"
                                onClick={() => setSubscription(1)}
                            >
                                <div className="flex align-items-center mr-3">
                                    <RadioButton
                                        name="subscription"
                                        checked={subscription === 1}
                                        onChange={(e) =>
                                            setSubscription(e.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <span className="text-900 text-2xl font-medium">
                                        30 Days
                                    </span>
                                    <p className="text-xl text-500 font-medium mt-2 mb-0">
                                        Risus pretium
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center sm:border-right-1 border-bottom-1 sm:border-bottom-none surface-border cursor-pointer"
                                onClick={() => setSubscription(2)}
                            >
                                <div className="flex align-items-center mr-3">
                                    <RadioButton
                                        name="subscription"
                                        checked={subscription === 2}
                                        onChange={(e) =>
                                            setSubscription(e.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <span className="text-900 text-2xl font-medium">
                                        90 Days
                                    </span>
                                    <p className="text-xl text-500 font-medium mt-2 mb-0">
                                        Pharetra pharetra
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-12 sm:col-6 lg:col-3 p-3 flex align-items-center sm:justify-content-center cursor-pointer"
                                onClick={() => setSubscription(3)}
                            >
                                <div className="flex align-items-center mr-3">
                                    <RadioButton
                                        name="subscription"
                                        checked={subscription === 3}
                                        onChange={(e) =>
                                            setSubscription(e.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <span className="text-900 text-2xl font-medium">
                                        360 Days
                                    </span>
                                    <p className="text-xl text-500 font-medium mt-2 mb-0">
                                        Aliquet lectus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2x2 Grid" code={block6}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 text-xl font-medium mb-3 text-center">
                        Payment Methods
                    </div>
                    <p className="text-700 mt-0 mb-4 text-center">
                        In tellus integer feugiat scelerisque varius morbi.
                    </p>
                    <div className="grid">
                        <div className="col-12 lg:col-6 p-3">
                            <div
                                style={{ borderRadius: "10px" }}
                                className={classNames(
                                    "shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer",
                                    { "border-blue-500": payment === 0 }
                                )}
                                onClick={() => setPayment(0)}
                            >
                                <div className="flex align-items-center mb-4">
                                    <div className="mr-3">
                                        <span
                                            className="inline-flex justify-content-center align-items-center bg-indigo-100"
                                            style={{
                                                borderRadius: "4px",
                                                width: "45px",
                                                height: "45px",
                                            }}
                                        >
                                            <i className="pi pi-credit-card text-2xl text-indigo-600"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">
                                            Credit Card
                                        </span>
                                        <p className="m-0 text-600 font-medium text-sm">
                                            Magna fermentum iaculis
                                        </p>
                                    </div>
                                    <RadioButton
                                        name="payment"
                                        value={0}
                                        checked={payment === 0}
                                        onChange={() => setPayment(0)}
                                        className="ml-auto"
                                    />
                                </div>
                                <p className="text-600 m-0 line-height-3">
                                    Nunc consequat interdum varius sit. Commodo
                                    odio aenean sed adipiscing diam donec
                                    adipiscing tristique risus.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div
                                style={{ borderRadius: "10px" }}
                                className={classNames(
                                    "shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer",
                                    { "border-blue-500": payment === 1 }
                                )}
                                onClick={() => setPayment(1)}
                            >
                                <div className="flex align-items-center mb-4">
                                    <div className="mr-3">
                                        <span
                                            className="inline-flex justify-content-center align-items-center bg-blue-100"
                                            style={{
                                                borderRadius: "4px",
                                                width: "45px",
                                                height: "45px",
                                            }}
                                        >
                                            <img
                                                src="/demo/images/blocks/logos/paypal.svg"
                                                style={{ height: "1.5rem" }}
                                                alt="paypal"
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">
                                            PayPal
                                        </span>
                                        <p className="m-0 text-600 font-medium text-sm">
                                            Nibh sit amet
                                        </p>
                                    </div>
                                    <RadioButton
                                        name="payment"
                                        value={1}
                                        checked={payment === 1}
                                        onChange={() => setPayment(1)}
                                        className="ml-auto"
                                    />
                                </div>
                                <p className="text-600 m-0 line-height-3">
                                    Est pellentesque elit ullamcorper dignissim.
                                    Tortor condimentum lacinia quis vel eros.
                                    Pharetra magna ac placerat vestibulum lectus
                                    mauris ultrices.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div
                                style={{ borderRadius: "10px" }}
                                className={classNames(
                                    "shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer",
                                    { "border-blue-500": payment === 2 }
                                )}
                                onClick={() => setPayment(2)}
                            >
                                <div className="flex align-items-center mb-4">
                                    <div className="mr-3">
                                        <span
                                            className="inline-flex justify-content-center align-items-center bg-green-100"
                                            style={{
                                                borderRadius: "4px",
                                                width: "45px",
                                                height: "45px",
                                            }}
                                        >
                                            <i className="pi pi-money-bill text-2xl text-green-600"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">
                                            Wire Transfer
                                        </span>
                                        <p className="m-0 text-600 font-medium text-sm">
                                            Ornare lectus sit
                                        </p>
                                    </div>
                                    <RadioButton
                                        name="payment"
                                        value={2}
                                        checked={payment === 2}
                                        onChange={() => setPayment(2)}
                                        className="ml-auto"
                                    />
                                </div>
                                <p className="text-600 m-0 line-height-3">
                                    Eget nunc lobortis mattis aliquam. Dictumst
                                    vestibulum rhoncus est pellentesque elit
                                    ullamcorper dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div
                                style={{ borderRadius: "10px" }}
                                className={classNames(
                                    "shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer",
                                    { "border-blue-500": payment === 3 }
                                )}
                                onClick={() => setPayment(3)}
                            >
                                <div className="flex align-items-center mb-4">
                                    <div className="mr-3">
                                        <span
                                            className="inline-flex justify-content-center align-items-center bg-orange-100"
                                            style={{
                                                borderRadius: "4px",
                                                width: "45px",
                                                height: "45px",
                                            }}
                                        >
                                            <img
                                                src="/demo/images/blocks/logos/bitcoin.svg"
                                                style={{ height: "1.5rem" }}
                                                alt="bitcoin"
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">
                                            BitCoin
                                        </span>
                                        <p className="m-0 text-600 font-medium text-sm">
                                            Donec adipiscing tristique
                                        </p>
                                    </div>
                                    <RadioButton
                                        name="payment"
                                        value={3}
                                        checked={payment === 3}
                                        onChange={() => setPayment(3)}
                                        className="ml-auto"
                                    />
                                </div>
                                <p className="text-600 m-0 line-height-3">
                                    Pharetra magna ac placerat vestibulum lectus
                                    mauris ultrices. Nec dui nunc mattis enim ut
                                    tellus elementum sagittis vitae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Small Cards"
                containerClassName="px-4 py-8 md:px-6 lg:px-8"
                code={block7}
            >
                <div className="flex flex-wrap justify-content-center align-items-center gap-3">
                    <div className="font-medium text-900 text-lg">
                        Choose Payment Amount
                    </div>
                    <div className="flex justify-content-center flex-wrap gap-3">
                        <div
                            className={
                                "inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150" +
                                (activeTab1 === 0
                                    ? " bg-primary border-primary"
                                    : " surface-card surface-border hover:surface-hover")
                            }
                            onClick={() => setActiveTab1(0)}
                        >
                            10$
                        </div>
                        <div
                            className={
                                "inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150" +
                                (activeTab1 === 1
                                    ? " bg-primary border-primary"
                                    : " surface-card surface-border hover:surface-hover")
                            }
                            onClick={() => setActiveTab1(1)}
                        >
                            25$
                        </div>
                        <div
                            className={
                                "inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150" +
                                (activeTab1 === 2
                                    ? " bg-primary border-primary"
                                    : " surface-card surface-border hover:surface-hover")
                            }
                            onClick={() => setActiveTab1(2)}
                        >
                            50$
                        </div>
                        <div
                            className={
                                "inline-flex align-items-center justify-content-center px-3 py-2 text-900 text-lg cursor-pointer border-round border-1 surface-border transition-colors transition-duration-150" +
                                (activeTab1 === 3
                                    ? " bg-primary border-primary"
                                    : " surface-card surface-border hover:surface-hover ")
                            }
                            onClick={() => setActiveTab1(3)}
                        >
                            100$
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default RadioGroup;
