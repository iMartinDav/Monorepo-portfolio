import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const ActionPanel = () => {
    const block1 = `
<div className="surface-card border-round shadow-2 p-4">
    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <Button label="Save Changes" />
</div>
    `;

    const block2 = `
<div className="surface-card border-round shadow-2 p-4 flex flex-column lg:flex-row align-items-start">
    <div>
        <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
        <p className="mt-0 mb-4 lg:mb-0 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    </div>
    <Button label="Save" icon="pi pi-check" className="ml-0 lg:ml-5" />
</div>
    `;

    const block3 = `
<div className="surface-card border-round shadow-2 p-4">
    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <div className="flex mb-4 flex-column lg:flex-row">
        <div className="surface-50 p-3 flex-auto">
            <div className="text-600 mb-3">Guests</div>
            <span className="text-blue-600 font-medium text-xl">4</span>
        </div>
        <div className="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
            <div className="text-600 mb-3">Date</div>
            <span className="text-blue-600 font-medium text-xl">24/05/2021</span>
        </div>
        <div className="surface-50 p-3 flex-auto">
            <div className="text-600 mb-3">Time</div>
            <span className="text-blue-600 font-medium text-xl">14:30</span>
        </div>
    </div>
    <Button icon="pi pi-check" label="Confirm Reservation" />
</div>
    `;

    const block4 = `
<div className="surface-card border-round shadow-2 p-4">
    <div className="text-900 font-medium mb-2 text-xl">Change Phone</div>
    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
    <div className="flex">
        <InputText className="flex-auto mr-3" />
        <Button label="Update" />
    </div>
</div>
    `;

    const block5 = `
<div className="surface-card border-round shadow-2 p-4 text-center" >
    <img src="/demo/images/blocks/illustration/subscribe.svg" alt="subscribe" className="mx-auto block mb-4" />
    <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
    <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <Button label="Learn More" icon="pi pi-arrow-right" className="p-button-rounded" iconPos="right" />
</div>
    `;

    const block6 = `
<div className="surface-card border-round flex shadow-2">
    <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-5">
        <img src="/demo/images/blocks/illustration/live-collaboration.svg" alt="Image" className="mx-auto block mb-4 w-full" />
    </div>
    <div className="py-3 px-5 flex flex-column align-items-start">
        <div className="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
        <p className="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
        <Button label="Proceed" className="mt-auto" />
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Action Panel</div>
            <BlockViewer
                header="Simple"
                code={block1}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round shadow-2 p-4">
                    <div className="text-900 font-medium mb-2 text-xl">
                        Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                        Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                        viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <Button label="Save Changes" />
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Button at Top Right"
                code={block2}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round shadow-2 p-4 flex flex-column lg:flex-row align-items-start">
                    <div>
                        <div className="text-900 font-medium mb-2 text-xl">
                            Title Placeholder
                        </div>
                        <p className="mt-0 mb-4 lg:mb-0 p-0 line-height-3">
                            Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                            viverra tellus in hac habitasse platea dictumst.
                        </p>
                    </div>
                    <Button
                        label="Save"
                        icon="pi pi-check"
                        className="ml-0 lg:ml-5"
                    />
                </div>
            </BlockViewer>

            <BlockViewer
                header="Info and Button"
                code={block3}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round shadow-2 p-4">
                    <div className="text-900 font-medium mb-2 text-xl">
                        Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                        Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                        viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <div className="flex mb-4 flex-column lg:flex-row">
                        <div className="surface-50 p-3 flex-auto">
                            <div className="text-600 mb-3">Guests</div>
                            <span className="text-blue-600 font-medium text-xl">
                                4
                            </span>
                        </div>
                        <div className="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                            <div className="text-600 mb-3">Date</div>
                            <span className="text-blue-600 font-medium text-xl">
                                24/05/2021
                            </span>
                        </div>
                        <div className="surface-50 p-3 flex-auto">
                            <div className="text-600 mb-3">Time</div>
                            <span className="text-blue-600 font-medium text-xl">
                                14:30
                            </span>
                        </div>
                    </div>
                    <Button icon="pi pi-check" label="Confirm Reservation" />
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Input"
                code={block4}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round shadow-2 p-4">
                    <div className="text-900 font-medium mb-2 text-xl">
                        Change Phone
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                        Nunc mi ipsum faucibus vitae aliquet nec.
                    </p>
                    <div className="flex">
                        <InputText className="flex-auto mr-3" />
                        <Button label="Update" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Illustration"
                code={block5}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img
                        src="/demo/images/blocks/illustration/subscribe.svg"
                        alt="subscribe"
                        className="mx-auto block mb-4"
                    />
                    <div className="text-900 font-medium mb-2 text-xl">
                        Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                        Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                        viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <Button
                        label="Learn More"
                        icon="pi pi-arrow-right"
                        className="p-button-rounded"
                        iconPos="right"
                    />
                </div>
            </BlockViewer>

            <BlockViewer
                header="Inline Illustration"
                code={block6}
                containerClassName="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center"
            >
                <div className="surface-card border-round flex shadow-2">
                    <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-5">
                        <img
                            src="/demo/images/blocks/illustration/live-collaboration.svg"
                            alt="Image"
                            className="mx-auto block mb-4 w-full"
                        />
                    </div>
                    <div className="py-3 px-5 flex flex-column align-items-start">
                        <div className="text-900 font-medium mb-2 text-xl">
                            Title Placeholder
                        </div>
                        <p className="mt-0 mb-4 p-0 line-height-3">
                            Nunc mi ipsum faucibus vitae aliquet nec.
                        </p>
                        <Button label="Proceed" className="mt-auto" />
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default ActionPanel;
