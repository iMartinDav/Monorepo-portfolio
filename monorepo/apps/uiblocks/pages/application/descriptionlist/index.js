import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';

const DescriptionList = () => {
    const block1 = `
<div className="surface-section">
    <div className="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div className="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul className="list-none p-0 m-0">
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Title</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <Chip label="Crime" className="mr-2" />
                <Chip label="Drama" className="mr-2" />
                <Chip label="Thriller" />
            </div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Director</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
    </ul>
</div>
    `;

    const block2 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div className="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul className="list-none p-0 m-0">
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Title</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text"></Button>
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <Chip label="Crime" className="mr-2" />
                <Chip label="Drama" className="mr-2" />
                <Chip label="Thriller" />
            </div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Director</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div className="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
            </div>
        </li>
    </ul>
</div>
    `;

    const block3 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
    <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
    <ul className="list-none p-0 m-0 border-top-1 surface-border">
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">Name</div>
            <div className="text-900 w-full md:w-10">Elliot Alderson</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
            <div className="text-500 w-full md:w-2 font-medium">Bio</div>
            <div className="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
            <div className="text-900 w-full md:w-10">$150,000</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
            <div className="text-500 w-full md:w-2 font-medium">Skills</div>
            <div className="text-900 w-full md:w-10">
                <Tag className="mr-2" value="Algorithms" rounded />
                <Tag className="mr-2" severity="success" value="Javascript" rounded />
                <Tag className="mr-2" severity="danger" value="Python" rounded />
                <Tag severity="warning" value="SQL" rounded />
            </div >
        </li >
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
            <div className="text-500 w-full md:w-2 font-medium">Repositories</div>
            <div className="text-900 w-full md:w-10">
                <div className="grid mt-0 mr-0">
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">PrimeFaces</span>
                            </div>
                            <div className="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">PrimeNG</span>
                            </div>
                            <div className="text-700">The Most Complete Angular UI Component Library</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">PrimeReact</span>
                            </div>
                            <div className="text-700">Advanced UI Components for ReactJS</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="p-3 border-1 surface-border border-round surface-card">
                            <div className="text-900 mb-2">
                                <i className="pi pi-github mr-2"></i>
                                <span className="font-medium">PrimeVue</span>
                            </div>
                            <div className="text-700">The Most Powerful Vue UI Component Library</div>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    </ul>
</div>
    `;

    const block4 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
    <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
    <div className="grid grid-nogutter border-top-1 surface-border pt-2">
        <div className="col-12 md:col-6 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Elliot Alderson</div>
        </div>
        <div className="col-12 md:col-6 p-3">
            <div className="text-500 font-medium mb-2">Email</div>
            <div className="text-900">elliot.alderson@email.com</div>
        </div>
        <div className="col-12 md:col-6 p-3">
            <div className="text-500 font-medium mb-2">Applied Position</div>
            <div className="text-900">Front-End Developer</div>
        </div>
        <div className="col-12 md:col-6 p-3">
            <div className="text-500 font-medium mb-2">Salary Expectation</div>
            <div className="text-900">$150,000</div>
        </div>
        <div className="col-12 p-3">
            <div className="text-500 font-medium mb-2">Bio</div>
            <div className="text-900 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
        </div>
        <div className="col-12 p-3">
            <div className="text-500 font-medium mb-3">Files</div>
            <div className="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row">
                <div className="flex align-items-center">
                    <span className="block pi pi-file mr-2"></span>
                    <span className="text-900">resume_en.pdf</span>
                </div>
                <Button icon="pi pi-download" label="Download" className="p-button-outlined mt-2 md:mt-0" />
            </div>
            <div className="flex md:align-items-center md:justify-content-between border-top-1 border-bottom-1 surface-border p-3 flex-column md:flex-row">
                <div className="flex align-items-center">
                    <span className="block pi pi-file mr-2"></span>
                    <span className="text-900">cover_letter_en.pdf</span>
                </div>
                <Button icon="pi pi-download" label="Download" className="p-button-outlined mt-2 md:mt-0" />
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Description Lists</div>
            <BlockViewer header="Left Aligned with Action" code={block1} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8" free>
                <div className="surface-section">
                    <div className="font-medium text-3xl text-900 mb-3">Movie Information</div>
                    <div className="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                                <Chip label="Crime" className="mr-2" />
                                <Chip label="Drama" className="mr-2" />
                                <Chip label="Thriller" />
                            </div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Director</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                                A group of professional bank robbers start to feel the heat from police
                                when they unknowingly leave a clue at their latest heist.</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Left Aligned In a Card" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="font-medium text-3xl text-900 mb-3">Movie Information</div>
                    <div className="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text"></Button>
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                                <Chip label="Crime" className="mr-2" />
                                <Chip label="Drama" className="mr-2" />
                                <Chip label="Thriller" />
                            </div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Director</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                                A group of professional bank robbers start to feel the heat from police
                                when they unknowingly leave a clue at their latest heist.</div>
                            <div className="w-6 md:w-2 flex justify-content-end">
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Striped in a Card" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
                    <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
                    <ul className="list-none p-0 m-0 border-top-1 surface-border">
                        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                            <div className="text-500 w-full md:w-2 font-medium">Name</div>
                            <div className="text-900 w-full md:w-10">Elliot Alderson</div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 flex-wrap">
                            <div className="text-500 w-full md:w-2 font-medium">Bio</div>
                            <div className="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                            <div className="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
                            <div className="text-900 w-full md:w-10">$150,000</div>
                        </li>
                        <li className="flex align-items-center py-3 px-2 flex-wrap">
                            <div className="text-500 w-full md:w-2 font-medium">Skills</div>
                            <div className="text-900 w-full md:w-10">
                                <Tag className="mr-2" value="Algorithms" rounded />
                                <Tag className="mr-2" severity="success" value="Javascript" rounded />
                                <Tag className="mr-2" severity="danger" value="Python" rounded />
                                <Tag severity="warning" value="SQL" rounded />
                            </div >
                        </li >
                        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                            <div className="text-500 w-full md:w-2 font-medium">Repositories</div>
                            <div className="text-900 w-full md:w-10">
                                <div className="grid mt-0 mr-0">
                                    <div className="col-12 md:col-6">
                                        <div className="p-3 border-1 surface-border border-round surface-card">
                                            <div className="text-900 mb-2">
                                                <i className="pi pi-github mr-2"></i>
                                                <span className="font-medium">PrimeFaces</span>
                                            </div>
                                            <div className="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="p-3 border-1 surface-border border-round surface-card">
                                            <div className="text-900 mb-2">
                                                <i className="pi pi-github mr-2"></i>
                                                <span className="font-medium">PrimeNG</span>
                                            </div>
                                            <div className="text-700">The Most Complete Angular UI Component Library</div>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="p-3 border-1 surface-border border-round surface-card">
                                            <div className="text-900 mb-2">
                                                <i className="pi pi-github mr-2"></i>
                                                <span className="font-medium">PrimeReact</span>
                                            </div>
                                            <div className="text-700">Advanced UI Components for ReactJS</div>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="p-3 border-1 surface-border border-round surface-card">
                                            <div className="text-900 mb-2">
                                                <i className="pi pi-github mr-2"></i>
                                                <span className="font-medium">PrimeVue</span>
                                            </div>
                                            <div className="text-700">The Most Powerful Vue UI Component Library</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </BlockViewer >

            <BlockViewer header="Vertical Layout in a Card" code={block4} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
                    <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
                    <div className="grid grid-nogutter border-top-1 surface-border pt-2">
                        <div className="col-12 md:col-6 p-3">
                            <div className="text-500 font-medium mb-2">Name</div>
                            <div className="text-900">Elliot Alderson</div>
                        </div>
                        <div className="col-12 md:col-6 p-3">
                            <div className="text-500 font-medium mb-2">Email</div>
                            <div className="text-900">elliot.alderson@email.com</div>
                        </div>
                        <div className="col-12 md:col-6 p-3">
                            <div className="text-500 font-medium mb-2">Applied Position</div>
                            <div className="text-900">Front-End Developer</div>
                        </div>
                        <div className="col-12 md:col-6 p-3">
                            <div className="text-500 font-medium mb-2">Salary Expectation</div>
                            <div className="text-900">$150,000</div>
                        </div>
                        <div className="col-12 p-3">
                            <div className="text-500 font-medium mb-2">Bio</div>
                            <div className="text-900 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                        </div>
                        <div className="col-12 p-3">
                            <div className="text-500 font-medium mb-3">Files</div>
                            <div className="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row">
                                <div className="flex align-items-center">
                                    <span className="block pi pi-file mr-2"></span>
                                    <span className="text-900">resume_en.pdf</span>
                                </div>
                                <Button icon="pi pi-download" label="Download" className="p-button-outlined mt-2 md:mt-0" />
                            </div>
                            <div className="flex md:align-items-center md:justify-content-between border-top-1 border-bottom-1 surface-border p-3 flex-column md:flex-row">
                                <div className="flex align-items-center">
                                    <span className="block pi pi-file mr-2"></span>
                                    <span className="text-900">cover_letter_en.pdf</span>
                                </div>
                                <Button icon="pi pi-download" label="Download" className="p-button-outlined mt-2 md:mt-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer >



        </>
    )
}

export default DescriptionList;
