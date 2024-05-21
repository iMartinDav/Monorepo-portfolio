import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";

const Alert = () => {
    const block1 = `
<div className="flex align-items-start p-4 bg-green-100 border-round border-1 border-green-300">
    <i className="pi pi-check-circle text-green-900 text-2xl mr-3"></i>
    <div className="mr-3">
        <div className="text-green-900 font-medium text-xl mb-2 line-height-1">Success</div>
        <p className="m-0 p-0 text-green-700 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
    </div>
    <div className="ml-auto">
        <a className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-green-50 no-underline cursor-pointer transition-colors transition-duration-150" style={{ width: '1.5rem', height: '1.5rem' }}>
            <i className="pi pi-times text-green-900"></i>
        </a>
    </div>
</div>
    `;

    const block2 = `
<div className="flex align-items-start p-4 bg-yellow-100 border-round border-1 border-yellow-300">
    <i className="pi pi-exclamation-triangle text-yellow-900 text-2xl mr-3"></i>
    <div className="mr-3">
        <div className="text-yellow-900 font-medium text-xl mb-2 line-height-1">Attention</div>
        <p className="m-0 p-0 text-yellow-700 mb-3 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
        <a className="font-medium text-yellow-900 mr-4 no-underline cursor-pointer">Accept</a>
        <a className="font-medium text-yellow-900 no-underline cursor-pointer">Decline</a>
    </div>
    <div className="ml-auto">
        <a className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-yellow-50 no-underline cursor-pointer transition-colors transition-duration-150" style={{ width: '1.5rem', height: '1.5rem' }}>
            <i className="pi pi-times text-yellow-900"></i>
        </a>
    </div>
</div>
    `;

    const block3 = `
<div className="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
    <div className="flex align-items-start">
        <i className="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
        <div className="mr-3 flex lg:align-items-start flex-column lg:flex-row">
            <div className="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
            <p className="m-0 p-0 text-blue-700 line-height-3">Quis commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
        </div>
    </div>
    <a className="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer">
        <span>Learn More</span>
        <i className="pi pi-arrow-right text-blue-900 ml-2"></i>
    </a>
</div>
    `;

    const block4 = `
<div className="flex align-items-start p-4 bg-pink-100 border-round border-1 border-pink-300">
    <i className="pi pi-times-circle text-pink-900 text-2xl mr-3"></i>
    <div className="mr-3">
        <div className="text-pink-900 font-medium text-xl mb-3 line-height-1">Validation Errors</div>
        <ul className="m-0 p-0 text-pink-700 ml-3">
            <li className="p-1">Quis commodo odio aenean sed adipiscing diam.</li>
            <li className="p-1">Risus pretium quam vulputate dignissim suspendisse.</li>
            <li className="p-1">Bibendum enim facilisis gravida neque convallis a cras semper.</li>
        </ul>
    </div>
    <div className="ml-auto">
        <a className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-pink-50 no-underline cursor-pointer transition-colors transition-duration-150" style={{ width: '1.5rem', height: '1.5rem' }}>
            <i className="pi pi-times text-pink-900"></i>
        </a>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Alert</div>
            <BlockViewer
                header="With Description"
                code={block1}
                containerClassName="surface-section p-3 md:p-6 lg:p-8"
            >
                <div className="flex align-items-start p-4 bg-green-100 border-round border-1 border-green-300">
                    <i className="pi pi-check-circle text-green-900 text-2xl mr-3"></i>
                    <div className="mr-3">
                        <div className="text-green-900 font-medium text-xl mb-2 line-height-1">
                            Success
                        </div>
                        <p className="m-0 p-0 text-green-700 line-height-3">
                            Quis commodo odio aenean sed adipiscing diam.
                            Bibendum enim facilisis gravida neque convallis a
                            cras semper.
                        </p>
                    </div>
                    <div className="ml-auto">
                        <a
                            className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-green-50 no-underline cursor-pointer transition-colors transition-duration-150"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                        >
                            <i className="pi pi-times text-green-900"></i>
                        </a>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Actions"
                code={block2}
                containerClassName="surface-section p-3 md:p-6 lg:p-8"
            >
                <div className="flex align-items-start p-4 bg-yellow-100 border-round border-1 border-yellow-300">
                    <i className="pi pi-exclamation-triangle text-yellow-900 text-2xl mr-3"></i>
                    <div className="mr-3">
                        <div className="text-yellow-900 font-medium text-xl mb-2 line-height-1">
                            Attention
                        </div>
                        <p className="m-0 p-0 text-yellow-700 mb-3 line-height-3">
                            Quis commodo odio aenean sed adipiscing diam.
                            Bibendum enim facilisis gravida neque convallis a
                            cras semper.
                        </p>
                        <a className="font-medium text-yellow-900 mr-4 no-underline cursor-pointer">
                            Accept
                        </a>
                        <a className="font-medium text-yellow-900 no-underline cursor-pointer">
                            Decline
                        </a>
                    </div>
                    <div className="ml-auto">
                        <a
                            className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-yellow-50 no-underline cursor-pointer transition-colors transition-duration-150"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                        >
                            <i className="pi pi-times text-yellow-900"></i>
                        </a>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With Link on Right"
                code={block3}
                containerClassName="surface-section p-3 md:p-6 lg:p-8"
            >
                <div className="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                    <div className="flex align-items-start">
                        <i className="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                        <div className="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                            <div className="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">
                                Information
                            </div>
                            <p className="m-0 p-0 text-blue-700 line-height-3">
                                Quis commodo odio aenean sed adipiscing diam.
                                Bibendum enim facilisis gravida neque convallis
                                a cras semper.
                            </p>
                        </div>
                    </div>
                    <a className="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer">
                        <span>Learn More</span>
                        <i className="pi pi-arrow-right text-blue-900 ml-2"></i>
                    </a>
                </div>
            </BlockViewer>

            <BlockViewer
                header="With List"
                code={block4}
                containerClassName="surface-section p-3 md:p-6 lg:p-8"
            >
                <div className="flex align-items-start p-4 bg-pink-100 border-round border-1 border-pink-300">
                    <i className="pi pi-times-circle text-pink-900 text-2xl mr-3"></i>
                    <div className="mr-3">
                        <div className="text-pink-900 font-medium text-xl mb-3 line-height-1">
                            Validation Errors
                        </div>
                        <ul className="m-0 p-0 text-pink-700 ml-3">
                            <li className="p-1">
                                Quis commodo odio aenean sed adipiscing diam.
                            </li>
                            <li className="p-1">
                                Risus pretium quam vulputate dignissim
                                suspendisse.
                            </li>
                            <li className="p-1">
                                Bibendum enim facilisis gravida neque convallis
                                a cras semper.
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto">
                        <a
                            className="inline-flex align-items-center justify-content-center ml-auto border-circle hover:bg-pink-50 no-underline cursor-pointer transition-colors transition-duration-150"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                        >
                            <i className="pi pi-times text-pink-900"></i>
                        </a>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Alert;
