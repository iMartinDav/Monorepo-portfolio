import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { AvatarGroup } from 'primereact/avatargroup';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import BlockViewer from "../../../demo/components/BlockViewer";

const Faq = () => {

    const block1 = `
<div className="surface-section text-800 px-4 py-6 md:px-6">
    <div className="grid">
        <div className="col-12 md:col-3">
            <span className="block font-bold text-3xl mb-3">Frequently Asked Questions</span>
            <div className="text-700 line-height-3">Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="col-12 md:col-9 md:px-5">
            <Accordion activeIndex={0}>
                <AccordionTab header="Question 1">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
                <AccordionTab header="Question 2">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
                <AccordionTab header="Question 3">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
                <AccordionTab header="Question 4">
                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-6 md:px-6">
    <div className="text-2xl text-900 font-bold mb-2">Frequently Asked Questions</div>
    <div className="text-700 line-height-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div className="grid mt-6">
        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">How do I become an expert in web designing?</div>
        <div className="col-12 md:col-6 text-700 line-height-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
    <div className="grid">
        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What is web traffic?</div>
        <div className="col-12 md:col-6 text-700 line-height-3">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</div>
    </div>
    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
    <div className="grid">
        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">How do you know if something is true?</div>
        <div className="col-12 md:col-6 text-700 line-height-3">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</div>
    </div>
    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
    <div className="grid">
        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What is the difference between intuition and an educated guess?</div>
        <div className="col-12 md:col-6 text-700 line-height-3">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus. </div>
    </div>
    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
    <div className="grid">
        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What are the implications of Occam's razor principle?</div>
        <div className="col-12 md:col-6 text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-6 md:px-6">
    <span className="block font-bold text-3xl mb-5 text-center">Frequently Asked Questions</span>
    <div className="grid grid-nogutter">
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">How do I become a webmaster?</div>
            <p className="text-700 line-height-3 m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">What is web traffic?</div>
            <p className="text-700 line-height-3 m-0 ">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">What is an easy way to make a website?</div>
            <p className="text-700 line-height-3 m-0">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</p>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">How do you know if something is true?</div>
            <p className="text-700 line-height-3 m-0">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.</p>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">What is the difference between intuition and an educated guess?</div>
            <p className="text-700 line-height-3 m-0">Ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.</p>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-5">
            <div className="font-medium text-xl text-900 mb-3">What are the implications of Occam's razor principle?</div>
            <p className="text-700 line-height-3 m-0">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</p>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-6 md:px-6">
    <span className="block font-bold text-3xl mb-5 text-center">Frequently Asked Questions</span>
    <div className="grid grid-nogutter">
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">How do I become a webmaster?</div>
                <p className="text-700 line-height-3 m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">What is web traffic?</div>
                <p className="text-700 line-height-3 m-0 ">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">What is an easy way to make a website?</div>
                <p className="text-700 line-height-3 m-0">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</p>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">How do you know if something is true?</div>
                <p className="text-700 line-height-3 m-0">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.</p>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">What is the difference between intuition and an educated guess?</div>
                <p className="text-700 line-height-3 m-0">Ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.</p>
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4 p-3">
            <div className="shadow-2 p-3 border-round h-full surface-card">
                <div className="font-medium text-xl text-900 mb-3">What are the implications of Occam's razor principle?</div>
                <p className="text-700 line-height-3 m-0">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</p>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-6 md:px-6">
    <div className="text-2xl text-900 font-bold mb-2 text-center">Frequently Asked Questions</div>
    <div className="text-700 line-height-3 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <Accordion className="mb-6" activeIndex={0}>
        <AccordionTab header="Question 1">
            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        </AccordionTab>
        <AccordionTab header="Question 2">
            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        </AccordionTab>
        <AccordionTab header="Question 3">
            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        </AccordionTab>
        <AccordionTab header="Question 4">
            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        </AccordionTab>
    </Accordion>
    <div className="border-1 border-round surface-border p-5 surface-50 flex flex-column align-items-center">
        <AvatarGroup className="text-center">
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" size="large" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" size="large" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-1.png" shape="circle" size="large" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-2.png" shape="circle" size="large" />
            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" shape="circle" size="large" />
        </AvatarGroup>
        <div className="font-medium text-xl mt-5 mb-3">Still Have Questions?</div>
        <p className="text-700 line-height-3 mt-0 mb-5">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
        <Button label="Contact Us" icon="pi pi-send" className="p-button-help" />
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">FAQs</div>
            <BlockViewer header="Two Columns with Accordion Questions" code={block1}>
                <div className="surface-section text-800 px-4 py-6 md:px-6">
                    <div className="grid">
                        <div className="col-12 md:col-3">
                            <span className="block font-bold text-3xl mb-3">Frequently Asked Questions</span>
                            <div className="text-700 line-height-3">Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="col-12 md:col-9 md:px-5">
                            <Accordion activeIndex={0}>
                                <AccordionTab header="Question 1">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                                <AccordionTab header="Question 2">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                                <AccordionTab header="Question 3">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                                <AccordionTab header="Question 4">
                                    <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Side-by-Side" code={block2}>
                <div className="surface-section px-4 py-6 md:px-6">
                    <div className="text-2xl text-900 font-bold mb-2">Frequently Asked Questions</div>
                    <div className="text-700 line-height-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    <div className="grid mt-6">
                        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">How do I become an expert in web designing?</div>
                        <div className="col-12 md:col-6 text-700 line-height-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="grid">
                        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What is web traffic?</div>
                        <div className="col-12 md:col-6 text-700 line-height-3">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="grid">
                        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">How do you know if something is true?</div>
                        <div className="col-12 md:col-6 text-700 line-height-3">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</div>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="grid">
                        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What is the difference between intuition and an educated guess?</div>
                        <div className="col-12 md:col-6 text-700 line-height-3">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus. </div>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div className="grid">
                        <div className="col-12 text-900 md:col-6 font-medium text-lg line-height-3">What are the implications of Occam&lsquo;s razor principle?</div>
                        <div className="col-12 md:col-6 text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Three Columns" code={block3}>
                <div className="surface-section px-4 py-6 md:px-6">
                    <span className="block font-bold text-3xl mb-5 text-center">Frequently Asked Questions</span>
                    <div className="grid grid-nogutter">
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">How do I become a webmaster?</div>
                            <p className="text-700 line-height-3 m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">What is web traffic?</div>
                            <p className="text-700 line-height-3 m-0 ">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">What is an easy way to make a website?</div>
                            <p className="text-700 line-height-3 m-0">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">How do you know if something is true?</div>
                            <p className="text-700 line-height-3 m-0">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">What is the difference between intuition and an educated guess?</div>
                            <p className="text-700 line-height-3 m-0">Ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-5">
                            <div className="font-medium text-xl text-900 mb-3">What are the implications of Occam&lsquo;s razor principle?</div>
                            <p className="text-700 line-height-3 m-0">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</p>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Three Columns with Cards" code={block4}>
                <div className="surface-ground px-4 py-6 md:px-6">
                    <span className="block font-bold text-3xl mb-5 text-center">Frequently Asked Questions</span>
                    <div className="grid grid-nogutter">
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">How do I become a webmaster?</div>
                                <p className="text-700 line-height-3 m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">What is web traffic?</div>
                                <p className="text-700 line-height-3 m-0 ">Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">What is an easy way to make a website?</div>
                                <p className="text-700 line-height-3 m-0">In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">How do you know if something is true?</div>
                                <p className="text-700 line-height-3 m-0">Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">What is the difference between intuition and an educated guess?</div>
                                <p className="text-700 line-height-3 m-0">Ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 p-3">
                            <div className="shadow-2 p-3 border-round h-full surface-card">
                                <div className="font-medium text-xl text-900 mb-3">What are the implications of Occam&lsquo;s razor principle?</div>
                                <p className="text-700 line-height-3 m-0">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Contact Card" code={block5}>
                <div className="surface-section px-4 py-6 md:px-6">
                    <div className="text-2xl text-900 font-bold mb-2 text-center">Frequently Asked Questions</div>
                    <div className="text-700 line-height-3 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <Accordion className="mb-6" activeIndex={0}>
                        <AccordionTab header="Question 1">
                            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                        </AccordionTab>
                        <AccordionTab header="Question 2">
                            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                        </AccordionTab>
                        <AccordionTab header="Question 3">
                            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                        </AccordionTab>
                        <AccordionTab header="Question 4">
                            <div className="line-height-3">Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                        </AccordionTab>
                    </Accordion>
                    <div className="border-1 border-round surface-border p-5 surface-50 flex flex-column align-items-center">
                        <AvatarGroup className="text-center">
                            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" size="large" />
                            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" size="large" />
                            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-1.png" shape="circle" size="large" />
                            <Avatar image="/demo/images/blocks/avatars/circle/avatar-m-2.png" shape="circle" size="large" />
                            <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" shape="circle" size="large" />
                        </AvatarGroup>
                        <div className="font-medium text-xl mt-5 mb-3">Still Have Questions?</div>
                        <p className="text-700 line-height-3 mt-0 mb-5">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
                        <Button label="Contact Us" icon="pi pi-send" className="p-button-help" />
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Faq;
