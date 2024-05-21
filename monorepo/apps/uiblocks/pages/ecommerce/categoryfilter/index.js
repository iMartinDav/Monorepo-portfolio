import React, { useRef, useState } from "react";
import { Divider } from "primereact/divider";
import { Badge } from "primereact/badge";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { Galleria } from "primereact/galleria";
import { Ripple } from "primereact/ripple";
import { Chip } from "primereact/chip";
import { classNames } from "primereact/utils";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MultiSelect } from "primereact/multiselect";
import { ToggleButton } from "primereact/togglebutton";
import BlockViewer from "../../../demo/components/BlockViewer";

const CategoryFilter = () => {
    const [selectedBrand_1, setSelectedBrand_1] = useState([]);
    const [rangeValues, setRangeValues] = useState([20, 80]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes1, setSelectedSizes1] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState(["Alfred", "Hyper"]);
    const [selectedFilters, setSelectedFilters] = useState([
        "Alfred",
        "Hyper",
        "Black",
    ]);
    const [selectedColors2, setSelectedColors2] = useState(["Black"]);
    const [selectedSizes2, setSelectedSizes2] = useState([]);
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedColors3, setSelectedColors3] = useState([
        { name: "Black", class: "bg-gray-500" },
    ]);
    const [selectedBrands3, setSelectedBrands3] = useState([
        { name: "Alfred" },
        { name: "Hyper" },
    ]);
    const [openDropdown, setOpenDropdown] = useState(true);

    const btnRef1 = useRef(null);
    const menu = useRef(null);

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

    const prices = [
        { range: "$10 - $100" },
        { range: "$101 - $200" },
        { range: "$201 - $300" },
        { range: "$301 - $400" },
    ];

    const sizes = [
        {
            page: [
                { value: "28x28" },
                { value: "28x30" },
                { value: "28x32" },
                { value: "28x34" },
                { value: "29x28" },
                { value: "29x30" },
                { value: "29x32" },
                { value: "29x34" },
                { value: "30x28" },
                { value: "30x30" },
                { value: "30x32" },
                { value: "30x34" },
                { value: "31x28" },
                { value: "31x30" },
                { value: "31x32" },
                { value: "31x34" },
            ],
        },
        {
            page: [
                { value: "32x28" },
                { value: "32x30" },
                { value: "32x32" },
                { value: "32x34" },
                { value: "33x28" },
                { value: "33x30" },
                { value: "33x32" },
                { value: "33x34" },
                { value: "34x28" },
                { value: "34x30" },
                { value: "34x32" },
                { value: "35x34" },
                { value: "35x28" },
                { value: "35x30" },
                { value: "35x32" },
                { value: "35x34" },
            ],
        },
        {
            page: [
                { value: "28x28" },
                { value: "28x30" },
                { value: "28x32" },
                { value: "28x34" },
                { value: "29x28" },
                { value: "29x30" },
                { value: "29x32" },
                { value: "29x34" },
                { value: "30x28" },
                { value: "30x30" },
                { value: "30x32" },
                { value: "30x34" },
                { value: "31x28" },
                { value: "31x30" },
                { value: "31x32" },
                { value: "31x34" },
            ],
        },
    ];

    const onSizeClick = (size) => {
        let _selectedSizes1 = [...selectedSizes1];

        if (_selectedSizes1.indexOf(size.value) == -1) {
            _selectedSizes1.push(size.value);
        } else {
            _selectedSizes1.splice(
                _selectedSizes1.indexOf(size.value.toString()),
                1
            );
        }
        setSelectedSizes1(_selectedSizes1);
    };

    const onColorClick = (color) => {
        let _selectedColors = [...selectedColors];

        if (_selectedColors.indexOf(color) == -1) {
            _selectedColors.push(color);
        } else {
            _selectedColors.splice(_selectedColors.indexOf(color), 1);
        }
        setSelectedColors(_selectedColors);
    };

    const onBrandChange = (e) => {
        let _selectedBrand = [...selectedBrand_1];

        if (e.checked) _selectedBrand.push(e.value);
        else {
            _selectedBrand.splice(_selectedBrand.indexOf(e.value), 1);
        }

        setSelectedBrand_1(_selectedBrand);
    };

    const clearAll = () => {
        setSelectedFilters([]);
        setSelectedColors2([]);
        setSelectedSizes2([]);
        setSelectedBrands([]);
    };

    const onBrandsChange = (e, brand) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedBrands = [...selectedBrands];

        _selectedBrands.indexOf(brand) === -1
            ? _selectedBrands.push(brand)
            : _selectedBrands.splice(_selectedBrands.indexOf(brand), 1);
        _selectedFilters.indexOf(brand) === -1
            ? _selectedFilters.push(brand)
            : _selectedFilters.splice(_selectedFilters.indexOf(brand), 1);

        setSelectedFilters(_selectedFilters);
        setSelectedBrands(_selectedBrands);
    };

    const onColorClick2 = (color) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedColors = [...selectedColors2];

        if (_selectedFilters.indexOf(color) === -1) {
            _selectedFilters.push(color);
            _selectedColors.push(color);
        } else {
            _selectedFilters.splice(_selectedFilters.indexOf(color), 1);
            _selectedColors.splice(_selectedColors.indexOf(color), 1);
        }

        setSelectedColors2(_selectedColors);
        setSelectedFilters(_selectedFilters);
    };

    const onSizeClick2 = (size) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedSizes2 = [...selectedSizes2];

        _selectedSizes2.indexOf(size) === -1
            ? _selectedSizes2.push(size)
            : _selectedSizes2.splice(_selectedSizes2.indexOf(size), 1);
        _selectedFilters.indexOf(size) === -1
            ? _selectedFilters.push(size)
            : _selectedFilters.splice(_selectedFilters.indexOf(size), 1);

        setSelectedFilters(_selectedFilters);
        setSelectedSizes2(_selectedSizes2);
    };

    const removeChip = (filter) => {
        let _selectedFilters = selectedFilters.filter((i) => i !== filter);
        let _selectedColors = selectedColors2.filter((i) => i !== filter);
        let _selectedBrands = selectedBrands.filter((i) => i !== filter);
        let _selectedSizes2 = selectedSizes2.filter((i) => i !== filter);

        setSelectedColors2(_selectedColors);
        setSelectedFilters(_selectedFilters);
        setSelectedSizes2(_selectedSizes2);
        setSelectedBrands(_selectedBrands);
    };

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-bold text-3xl text-center">Category Title</div>
    <p className="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider className="w-full" />
    <div className="flex flex-wrap lg:flex-nowrap">
        <div className="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
            <div className="flex flex-column p-0">
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
                <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
            </div>
            <Divider className="w-full m-0 p-0" />

            <Accordion multiple className="-mb-1 mt-3">
                <AccordionTab selected header={\`Brand (\${selectedBrand_1 ? selectedBrand_1.length : '0'})\`}>
                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                        <div className="mb-3">
                            <span className="p-input-icon-right w-full">
                                <i className="pi pi-search"></i>
                                <InputText placeholder="Search" className="w-full" />
                            </span>
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Alfred" inputId="alfred" onChange={onBrandChange} checked={selectedBrand_1.indexOf('Alfred') !== -1}></Checkbox>
                                <label htmlFor="alfred" className="text-900">Alfred</label>
                            </div>
                            <Badge value={42} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Hyper" inputId="hyper" onChange={onBrandChange} checked={selectedBrand_1.indexOf('Hyper') !== -1}></Checkbox>
                                <label htmlFor="hyper" className="text-900">Hyper</label>
                            </div>
                            <Badge value={18} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Bastion" inputId="bastion" onChange={onBrandChange} checked={selectedBrand_1.indexOf('Bastion') !== -1}></Checkbox>
                                <label htmlFor="bastion" className="text-900">Bastion</label>
                            </div>
                            <Badge value={7} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Peak" inputId="peak" onChange={onBrandChange} checked={selectedBrand_1.indexOf('Peak') !== -1}></Checkbox>
                                <label htmlFor="peak" className="text-900">Peak</label>
                            </div>
                            <Badge value={36} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <a tabIndex="0" className="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                    </div>
                </AccordionTab>
                <AccordionTab selected header="Price Range">
                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                        <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="mt-3 mx-auto" style={{ 'maxWidth': '93%' }} />
                        <div className="flex my-4">
                            <InputNumber placeholder="$10" value={rangeValues[0]} min="10" inputClassName="w-full mr-3" />
                            <InputNumber placeholder="$10000" max="10000" value={rangeValues[1]} inputClassName="w-full" />
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab selected header={\`Color (\${selectedColors.length})\`}>
                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                        <div className="grid mb-3">
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Black')}>
                                    {selectedColors.indexOf('Black') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Black</p>
                            </div>
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Orange')}>
                                    {selectedColors.indexOf('Orange') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Orange</p>
                            </div>
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Indigo')}>
                                    {selectedColors.indexOf('Indigo') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Indigo</p>
                            </div>
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Gray')}>
                                    {selectedColors.indexOf('Gray') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Gray</p>
                            </div>
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Cyan')}>
                                    {selectedColors.indexOf('Cyan') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Cyan</p>
                            </div>
                            <div className="col-4 flex flex-column align-items-center">
                                <div className="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Pink')}>
                                    {selectedColors.indexOf('Pink') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                                </div>
                                <p className="text-900 text-sm text-center mt-1">Pink</p>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab selected header={\`Size (\${selectedSizes1.length})\`}>
                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                        <Galleria value={sizes} responsiveOptions={responsiveOptions} className="h-full" numVisible={2}
                            showThumbnails={false} showIndicators item={(item) => <div className="flex flex-wrap w-full h-auto overflow-hidden justify-content-center" style={{ columnGap: '5px', rowGap: '5px' }}>
                                {
                                    item.page.map((size, i) => {
                                        return <div key={\`item_\${i}\`} className={classNames('p-ripple w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round', { 'surface-100': selectedSizes1.indexOf(size.value) == -1, 'bg-blue-200': selectedSizes1.indexOf(size.value) !== -1 })}
                                            onClick={() => onSizeClick(size)}>
                                            {size.value}
                                            <Ripple />
                                        </div>
                                    })
                                }
                            </div>} />
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
        <div className="w-full border-2 border-dashed border-round surface-border surface-section mt-3 lg:mt-0" style={{ minHeight: '25rem' }}></div>
    </div>
</div>
    `;
    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-bold text-3xl">Category Title</div>
    <div className="grid grid-nogutter">
        <div className="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
            <StyleClass nodeRef={btnRef1} selector=".filter-container" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <Button ref={btnRef1} className="p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none" label="Filters" icon={\`pi pi-chevron-\${openDropdown ? 'down' : 'up'} ml-3"\`} iconPos="right" onClick={() => setOpenDropdown(prevState => !prevState)} />
            </StyleClass>
            <div className="grid flex-column lg:flex-row w-full h-full">
                <div className="col-12 lg:col flex align-items-center flex-wrap" style={{ columnGap: '5px', rowGap: '5px' }}>
                    {
                        selectedFilters.map((filter, i) => {
                            return <Chip key={filter} label={filter} removable className="mr-3 h-auto lg:h-full px-4 mt-3 lg:mt-0" removeIcon="pi pi-times" style={{ 'borderRadius': '50px' }} onRemove={() => removeChip(filter)}></Chip>
                        })
                    }
                    {(selectedFilters.length > 0 || selectedColors2) !== 1 &&
                        <a tabIndex="0" className="p-ripple text-900 cursor-pointer text-center px-3 py-2 mt-3 lg:mt-0 border-1 border-200 lg:border-none inline-block hover:bg-primary hover:border-primary transition-duration-150" style={{ borderRadius: '50px', maxWidth: '7rem' }} onClick={clearAll}>
                            Clear All
                            <Ripple />
                        </a>
                    }
                </div>
            </div>
        </div>
        <div className="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
            <div className="grid grid-nogutter flex-column lg:flex-row">
                <div className="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">{\`Brand (\${selectedBrands.length})\`}</a>
                    <div className="flex flex-column">
                        <div className="mb-3">
                            <span className="p-input-icon-right w-full">
                                <i className="pi pi-search"></i>
                                <InputText placeholder="Search" className="w-full" />
                            </span>
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Alfred" inputId="alfred2" checked={selectedFilters.indexOf('Alfred') !== -1} onChange={(e) => onBrandsChange(e, 'Alfred')} />
                                <label htmlFor="alfred2" className="text-900">Alfred</label>
                            </div>
                            <Badge value={42} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Hyper" inputId="hyper2" checked={selectedFilters.indexOf('Hyper') !== -1} onChange={(e) => onBrandsChange(e, 'Hyper')} />
                                <label htmlFor="hyper2" className="text-900">Hyper</label>
                            </div>
                            <Badge value={18} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Bastion" inputId="bastion2" checked={selectedFilters.indexOf('Bastion') !== -1} onChange={(e) => onBrandsChange(e, 'Bastion')} />
                                <label htmlFor="bastion2" className="text-900">Bastion</label>
                            </div>
                            <Badge value="7" className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <div className="flex w-full justify-content-between">
                            <div className="field-checkbox">
                                <Checkbox value="Peak" inputId="peak2" checked={selectedFilters.indexOf('Peak') !== -1} onChange={(e) => onBrandsChange(e, 'Peak')} />
                                <label htmlFor="peak2" className="text-900">Peak</label>
                            </div>
                            <Badge value={36} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                        </div>
                        <a tabIndex="0" className="cursor-pointer text-primary font-medium mb-3">Show all...</a>
                    </div>
                </div>
                <div className="flex-auto lg:flex-1 col mt-4 lg:mt-2 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">{\`Color (\${selectedColors2.length})\`}</a>
                    <div className="grid mb-3">
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Black')}>
                                {selectedFilters.indexOf('Black') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-sm text-center mt-1">Black</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Orange')}>
                                {selectedFilters.indexOf('Orange') !== -1 && <i className="pi pi-check text-2xl text-white" ></i>}
                            </div>
                            <p className="text-900 text-sm text-center mt-1">Orange</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Indigo')}>
                                {selectedFilters.indexOf('Indigo') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-sm text-center mt-1">Indigo</p>
                        </div >
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Gray')}>
                                {selectedFilters.indexOf('Gray') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div >
                            <p className="text-900 text-sm text-center mt-1">Gray</p>
                        </div >
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Cyan')}>
                                {selectedFilters.indexOf('Cyan') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div >
                            <p className="text-900 text-sm text-center mt-1">Cyan</p>
                        </div >
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick2('Pink')}>
                                {selectedFilters.indexOf('Pink') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div >
                            <p className="text-900 text-sm text-center mt-1">Pink</p>
                        </div >
                    </div >
                </div >
                <div className="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 surface-border border-round">
                    <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">{\`Size (\${selectedSizes2.length})\`}</a>
                    <Galleria value={sizes} responsiveOptions={responsiveOptions} className="h-full" numVisible={2}
                        showThumbnails={false} showIndicators item={(item) => <div className="flex flex-wrap justify-content-between w-full h-full mb-5 overflow-hidden" style={{ columnGap: '5px', rowGap: '5px' }}>
                            {
                                item.page.map((size, i) => {
                                    return <div key={\`item_\${i}\`} className={classNames('w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round', { 'surface-100': selectedFilters.indexOf(size.value) == -1, 'bg-blue-200': selectedFilters.indexOf(size.value) !== -1 })} onClick={() => onSizeClick2(size.value)}>
                                        {size.value}
                                        <Ripple />
                                    </div>
                                })
                            }
                        </div>
                        }>
                    </Galleria>
                </div>
            </div>
        </div>
        <Divider className="w-full" />
        <div className="col-12 border-2 border-dashed border-round surface-border surface-section" style={{ minHeight: '25rem' }}></div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-between flex-wrap">
        <div className="flex align-items-center mb-3 md:mb-0">
            <div className="text-900 font-bold text-3xl">Category Title </div>
            <Badge value={76} className="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
        </div>
        <div>
            <Button icon="pi pi-sort-alt" className="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" onClick={(event) => menu.current.toggle(event)}></Button>
            <Menu ref={menu} popup model={items} />
        </div>

    </div>
    <p className="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider className="w-full" />
    <div className="grid grid-nogutter align-items-center">
        <MultiSelect options={brands} value={selectedBrands3} onChange={(e) => setSelectedBrands3(e.value)} placeholder="Brand" optionLabel="name" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedBrands3 && selectedBrands3.length} brands selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" />
        <MultiSelect options={colors} value={selectedColors3} onChange={(e) => setSelectedColors3(e.value)} placeholder="Color" optionLabel="name" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedColors3 && selectedColors3.length} colors selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" itemTemplate={(color) => <div className="flex align-items-center">
            <div className={\`w-2rem h-2rem border-circle \${color.class} cursor-pointer border-none\`}></div>
            <div className="text-900 ml-2">{color.name}</div>
        </div>} />
        <MultiSelect options={prices} value={selectedPrice} onChange={(e) => setSelectedPrice(e.value)} placeholder="Price" optionLabel="range" filter maxSelectedLabels="2" selectedItemsLabel={\`\${selectedPrice && selectedPrice.length} prices selected\`} className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900" />
        <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" />
        <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" className="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" />
        <a tabIndex="0" className="p-ripple cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900">Clear All
            <Ripple />
        </a>
        <div className="col-12 border-2 border-dashed border-round surface-border surface-section h-30rem mt-2"></div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title text-900">
                Category Filters
            </div>
            <BlockViewer header="Sidebar" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-3xl text-center">
                        Category Title
                    </div>
                    <p className="text-600 font-normal text-xl text-center">
                        Nullam faucibus, sem et bibendum finibus, sapien ipsum
                        congue felis, sit amet pretium ex nisl ut eros.
                    </p>
                    <Divider className="w-full" />
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
                            <div className="flex flex-column p-0">
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Denim
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Sweaters
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    T-Shirt
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Pants & Shorts
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Outwear
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Shoes
                                </a>
                                <a
                                    tabIndex="0"
                                    className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150"
                                >
                                    Accessories
                                </a>
                            </div>
                            <Divider className="w-full m-0 p-0" />

                            <Accordion multiple className="-mb-1 mt-3">
                                <AccordionTab
                                    selected
                                    header={`Brand (${selectedBrand_1
                                            ? selectedBrand_1.length
                                            : "0"
                                        })`}
                                >
                                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                                        <div className="mb-3">
                                            <span className="p-input-icon-right w-full">
                                                <i className="pi pi-search"></i>
                                                <InputText
                                                    placeholder="Search"
                                                    className="w-full"
                                                />
                                            </span>
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Alfred"
                                                    inputId="alfred"
                                                    onChange={onBrandChange}
                                                    checked={
                                                        selectedBrand_1.indexOf(
                                                            "Alfred"
                                                        ) !== -1
                                                    }
                                                ></Checkbox>
                                                <label
                                                    htmlFor="alfred"
                                                    className="text-900"
                                                >
                                                    Alfred
                                                </label>
                                            </div>
                                            <Badge
                                                value={42}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Hyper"
                                                    inputId="hyper"
                                                    onChange={onBrandChange}
                                                    checked={
                                                        selectedBrand_1.indexOf(
                                                            "Hyper"
                                                        ) !== -1
                                                    }
                                                ></Checkbox>
                                                <label
                                                    htmlFor="hyper"
                                                    className="text-900"
                                                >
                                                    Hyper
                                                </label>
                                            </div>
                                            <Badge
                                                value={18}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Bastion"
                                                    inputId="bastion"
                                                    onChange={onBrandChange}
                                                    checked={
                                                        selectedBrand_1.indexOf(
                                                            "Bastion"
                                                        ) !== -1
                                                    }
                                                ></Checkbox>
                                                <label
                                                    htmlFor="bastion"
                                                    className="text-900"
                                                >
                                                    Bastion
                                                </label>
                                            </div>
                                            <Badge
                                                value={7}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Peak"
                                                    inputId="peak"
                                                    onChange={onBrandChange}
                                                    checked={
                                                        selectedBrand_1.indexOf(
                                                            "Peak"
                                                        ) !== -1
                                                    }
                                                ></Checkbox>
                                                <label
                                                    htmlFor="peak"
                                                    className="text-900"
                                                >
                                                    Peak
                                                </label>
                                            </div>
                                            <Badge
                                                value={36}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <a
                                            tabIndex="0"
                                            className="block cursor-pointer my-3 text-primary font-medium"
                                        >
                                            Show all...
                                        </a>
                                    </div>
                                </AccordionTab>
                                <AccordionTab selected header="Price Range">
                                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                                        <Slider
                                            value={rangeValues}
                                            onChange={(e) =>
                                                setRangeValues(e.value)
                                            }
                                            range
                                            className="mt-3 mx-auto"
                                            style={{ maxWidth: "93%" }}
                                        />
                                        <div className="flex my-4">
                                            <InputNumber
                                                placeholder="$10"
                                                value={rangeValues[0]}
                                                min="10"
                                                inputClassName="w-full mr-3"
                                            />
                                            <InputNumber
                                                placeholder="$10000"
                                                max="10000"
                                                value={rangeValues[1]}
                                                inputClassName="w-full"
                                            />
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab
                                    selected
                                    header={`Color (${selectedColors.length})`}
                                >
                                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                                        <div className="grid mb-3">
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Black")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Black"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Black
                                                </p>
                                            </div>
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Orange")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Orange"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Orange
                                                </p>
                                            </div>
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Indigo")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Indigo"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Indigo
                                                </p>
                                            </div>
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Gray")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Gray"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Gray
                                                </p>
                                            </div>
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Cyan")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Cyan"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Cyan
                                                </p>
                                            </div>
                                            <div className="col-4 flex flex-column align-items-center">
                                                <div
                                                    className="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        onColorClick("Pink")
                                                    }
                                                >
                                                    {selectedColors.indexOf(
                                                        "Pink"
                                                    ) !== -1 && (
                                                            <i className="pi pi-check text-2xl text-white"></i>
                                                        )}
                                                </div>
                                                <p className="text-900 text-sm text-center mt-1">
                                                    Pink
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab
                                    selected
                                    header={`Size (${selectedSizes1.length})`}
                                >
                                    <div className="transition-all transition-duration-400 transition-ease-in-out">
                                        <Galleria
                                            value={sizes}
                                            responsiveOptions={
                                                responsiveOptions
                                            }
                                            className="h-full"
                                            numVisible={2}
                                            showThumbnails={false}
                                            showIndicators
                                            item={(item) => (
                                                <div
                                                    className="flex flex-wrap w-full h-auto overflow-hidden justify-content-center"
                                                    style={{
                                                        columnGap: "5px",
                                                        rowGap: "5px",
                                                    }}
                                                >
                                                    {item.page.map(
                                                        (size, i) => {
                                                            return (
                                                                <div
                                                                    key={`item_${i}`}
                                                                    className={classNames(
                                                                        "p-ripple w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round",
                                                                        {
                                                                            "surface-100":
                                                                                selectedSizes1.indexOf(
                                                                                    size.value
                                                                                ) ==
                                                                                -1,
                                                                            "bg-blue-200":
                                                                                selectedSizes1.indexOf(
                                                                                    size.value
                                                                                ) !==
                                                                                -1,
                                                                        }
                                                                    )}
                                                                    onClick={() =>
                                                                        onSizeClick(
                                                                            size
                                                                        )
                                                                    }
                                                                >
                                                                    {size.value}
                                                                    <Ripple />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                        <div
                            className="w-full border-2 border-dashed border-round surface-border surface-section mt-3 lg:mt-0"
                            style={{ minHeight: "25rem" }}
                        ></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Horizontal Expandable" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-3xl">
                        Category Title
                    </div>
                    <div className="grid grid-nogutter">
                        <div className="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
                            <StyleClass
                                nodeRef={btnRef1}
                                selector=".filter-container"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <Button
                                    ref={btnRef1}
                                    className="p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none"
                                    label="Filters"
                                    icon={`pi pi-chevron-${openDropdown ? "down" : "up"
                                        } ml-3"`}
                                    iconPos="right"
                                    onClick={() =>
                                        setOpenDropdown(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            </StyleClass>
                            <div className="grid flex-column lg:flex-row w-full h-full">
                                <div
                                    className="col-12 lg:col flex align-items-center flex-wrap"
                                    style={{ columnGap: "5px", rowGap: "5px" }}
                                >
                                    {selectedFilters.map((filter, i) => {
                                        return (
                                            <Chip
                                                key={filter}
                                                label={filter}
                                                removable
                                                className="mr-3 h-auto lg:h-full px-4 mt-3 lg:mt-0"
                                                removeIcon="pi pi-times"
                                                style={{ borderRadius: "50px" }}
                                                onRemove={() =>
                                                    removeChip(filter)
                                                }
                                            ></Chip>
                                        );
                                    })}
                                    {(selectedFilters.length > 0 ||
                                        selectedColors2) !== 1 && (
                                            <a
                                                tabIndex="0"
                                                className="p-ripple text-900 cursor-pointer text-center px-3 py-2 mt-3 lg:mt-0 border-1 border-200 lg:border-none inline-block hover:bg-primary hover:border-primary transition-duration-150"
                                                style={{
                                                    borderRadius: "50px",
                                                    maxWidth: "7rem",
                                                }}
                                                onClick={clearAll}
                                            >
                                                Clear All
                                                <Ripple />
                                            </a>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <div className="grid grid-nogutter flex-column lg:flex-row">
                                <div className="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"
                                    >{`Brand (${selectedBrands.length})`}</a>
                                    <div className="flex flex-column">
                                        <div className="mb-3">
                                            <span className="p-input-icon-right w-full">
                                                <i className="pi pi-search"></i>
                                                <InputText
                                                    placeholder="Search"
                                                    className="w-full"
                                                />
                                            </span>
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Alfred"
                                                    inputId="alfred2"
                                                    checked={
                                                        selectedFilters.indexOf(
                                                            "Alfred"
                                                        ) !== -1
                                                    }
                                                    onChange={(e) =>
                                                        onBrandsChange(
                                                            e,
                                                            "Alfred"
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="alfred2"
                                                    className="text-900"
                                                >
                                                    Alfred
                                                </label>
                                            </div>
                                            <Badge
                                                value={42}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Hyper"
                                                    inputId="hyper2"
                                                    checked={
                                                        selectedFilters.indexOf(
                                                            "Hyper"
                                                        ) !== -1
                                                    }
                                                    onChange={(e) =>
                                                        onBrandsChange(
                                                            e,
                                                            "Hyper"
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="hyper2"
                                                    className="text-900"
                                                >
                                                    Hyper
                                                </label>
                                            </div>
                                            <Badge
                                                value={18}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Bastion"
                                                    inputId="bastion2"
                                                    checked={
                                                        selectedFilters.indexOf(
                                                            "Bastion"
                                                        ) !== -1
                                                    }
                                                    onChange={(e) =>
                                                        onBrandsChange(
                                                            e,
                                                            "Bastion"
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="bastion2"
                                                    className="text-900"
                                                >
                                                    Bastion
                                                </label>
                                            </div>
                                            <Badge
                                                value="7"
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <div className="flex w-full justify-content-between">
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    value="Peak"
                                                    inputId="peak2"
                                                    checked={
                                                        selectedFilters.indexOf(
                                                            "Peak"
                                                        ) !== -1
                                                    }
                                                    onChange={(e) =>
                                                        onBrandsChange(
                                                            e,
                                                            "Peak"
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="peak2"
                                                    className="text-900"
                                                >
                                                    Peak
                                                </label>
                                            </div>
                                            <Badge
                                                value={36}
                                                className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"
                                            />
                                        </div>
                                        <a
                                            tabIndex="0"
                                            className="cursor-pointer text-primary font-medium mb-3"
                                        >
                                            Show all...
                                        </a>
                                    </div>
                                </div>
                                <div className="flex-auto lg:flex-1 col mt-4 lg:mt-2 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"
                                    >{`Color (${selectedColors2.length})`}</a>
                                    <div className="grid mb-3">
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Black")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Black"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Black
                                            </p>
                                        </div>
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Orange")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Orange"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Orange
                                            </p>
                                        </div>
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Indigo")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Indigo"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Indigo
                                            </p>
                                        </div>
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Gray")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Gray"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Gray
                                            </p>
                                        </div>
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Cyan")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Cyan"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Cyan
                                            </p>
                                        </div>
                                        <div className="col-4 flex flex-column align-items-center">
                                            <div
                                                className="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center"
                                                onClick={() =>
                                                    onColorClick2("Pink")
                                                }
                                            >
                                                {selectedFilters.indexOf(
                                                    "Pink"
                                                ) !== -1 && (
                                                        <i className="pi pi-check text-2xl text-white"></i>
                                                    )}
                                            </div>
                                            <p className="text-900 text-sm text-center mt-1">
                                                Pink
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 surface-border border-round">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150"
                                    >{`Size (${selectedSizes2.length})`}</a>
                                    <Galleria
                                        value={sizes}
                                        responsiveOptions={responsiveOptions}
                                        className="h-full"
                                        numVisible={2}
                                        showThumbnails={false}
                                        showIndicators
                                        item={(item) => (
                                            <div
                                                className="flex flex-wrap justify-content-between w-full h-full mb-5 overflow-hidden"
                                                style={{
                                                    columnGap: "5px",
                                                    rowGap: "5px",
                                                }}
                                            >
                                                {item.page.map((size, i) => {
                                                    return (
                                                        <div
                                                            key={`item_${i}`}
                                                            className={classNames(
                                                                "w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round",
                                                                {
                                                                    "surface-100":
                                                                        selectedFilters.indexOf(
                                                                            size.value
                                                                        ) == -1,
                                                                    "bg-blue-200":
                                                                        selectedFilters.indexOf(
                                                                            size.value
                                                                        ) !==
                                                                        -1,
                                                                }
                                                            )}
                                                            onClick={() =>
                                                                onSizeClick2(
                                                                    size.value
                                                                )
                                                            }
                                                        >
                                                            {size.value}
                                                            <Ripple />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    ></Galleria>
                                </div>
                            </div>
                        </div>
                        <Divider className="w-full" />
                        <div
                            className="col-12 border-2 border-dashed border-round surface-border surface-section"
                            style={{ minHeight: "25rem" }}
                        ></div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dropdown" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center mb-3 md:mb-0">
                            <div className="text-900 font-bold text-3xl">
                                Category Title{" "}
                            </div>
                            <Badge
                                value={76}
                                className="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"
                            ></Badge>
                        </div>
                        <div>
                            <Button
                                icon="pi pi-sort-alt"
                                className="p-button-outlined p-button-secondary w-7rem p-2"
                                iconPos="right"
                                label="Sort By"
                                onClick={(event) => menu.current.toggle(event)}
                            ></Button>
                            <Menu ref={menu} popup model={items} />
                        </div>
                    </div>
                    <p className="text-600 text-xl">
                        Nullam faucibus, sem et bibendum finibus, sapien ipsum
                        congue felis, sit amet pretium ex nisl ut eros.
                    </p>
                    <Divider className="w-full" />
                    <div className="grid grid-nogutter align-items-center">
                        <MultiSelect
                            options={brands}
                            value={selectedBrands3}
                            onChange={(e) => setSelectedBrands3(e.value)}
                            placeholder="Brand"
                            optionLabel="name"
                            filter
                            maxSelectedLabels="2"
                            selectedItemsLabel={`${selectedBrands3 && selectedBrands3.length
                                } brands selected`}
                            className="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full mr-0 lg:mr-4 text-900"
                        />
                        <MultiSelect
                            options={colors}
                            value={selectedColors3}
                            onChange={(e) => setSelectedColors3(e.value)}
                            placeholder="Color"
                            optionLabel="name"
                            filter
                            maxSelectedLabels="2"
                            selectedItemsLabel={`${selectedColors3 && selectedColors3.length
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
                        <div className="col-12 border-2 border-dashed border-round surface-border surface-section h-30rem mt-2"></div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CategoryFilter;
