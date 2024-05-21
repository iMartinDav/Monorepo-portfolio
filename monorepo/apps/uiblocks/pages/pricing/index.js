import { classNames } from "primereact/utils";
import React from "react";

const PricingPage = () => {
    return (
        <>
            <div className="pricing">
                <div className="pricing-content shadow-2">
                    <div className="pricing-title text-900">Get Started With</div>
                    <div className="pricing-subtitle">PrimeBlocks</div>
                    <p className="m-0">
                        Choose the right plan for your business. Whether you are
                        an individual or a member of a team, PrimeBlocks are
                        available for affordable prices.
                    </p>
                </div>
            </div>
            <div className="px-0 lg:px-8">
                <p className="mb-3 text-center text-lg">
                    All licences share same terms and only differ in per-seat
                    limits, visit the{" "}
                    <a
                        href="https://www.primefaces.org/blocks/licenses"
                        className="text-blue-500 no-underline hover:underline"
                    >
                        license
                    </a>{" "}
                    page for terms and conditions.
                </p>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4 p-3">
                        <div
                            className="shadow-2 p-4 surface-0 border-blue-500 border-2"
                            style={{ borderRadius: "6px" }}
                        >
                            <div className="text-2xl text-900 mb-3 font-medium">
                                Single Developer
                            </div>
                            <p className="text-600 mb-4">
                                For individual developers
                            </p>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="flex flex-wrap gap-3">
                                <span className="font-bold text-2xl text-900">
                                    $199
                                </span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="pt-4 pb-0">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="font-bold text-700 ml-2">
                                            1 Developer
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            All Blocks
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Figma File
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Lifetime Support
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Unlimited Updates
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-blue-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Use on Unlimited Projects
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="https://www.primefaces.org/store/blocks.xhtml"
                                    className="border-round no-underline bg-blue-500 text-center hover:bg-blue-600 text-white block w-full p-3 mt-8 font-medium
                        transition-colors transition-duration-150"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4 p-3">
                        <div
                            className="shadow-2 p-4 surface-0 border-orange-500 border-2"
                            style={{ borderRadius: "6px" }}
                        >
                            <div className="text-2xl text-900 mb-3 font-medium">
                                Team
                            </div>
                            <p className="text-600 mb-4">For small teams</p>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="flex flex-wrap gap-3">
                                <span className="font-bold text-2xl text-900">
                                    $699
                                </span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="pt-4 pb-0">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="font-bold text-700 ml-2">
                                            Up to 25 Developers
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            All Blocks
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Figma File
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Lifetime Support
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Unlimited Updates
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-orange-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Use on Unlimited Projects
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="https://www.primefaces.org/store/blocks.xhtml"
                                    className="border-round no-underline bg-orange-500 text-center hover:bg-orange-600 text-white block w-full p-3 mt-8 font-medium
                        transition-colors transition-duration-150"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4 p-3">
                        <div
                            className="shadow-2 p-4 surface-0 border-bluegray-500 border-2"
                            style={{ borderRadius: "6px" }}
                        >
                            <div className="text-2xl text-900 mb-3 font-medium">
                                Enterprise
                            </div>
                            <p className="text-600 mb-4">For larger teams</p>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="flex flex-wrap gap-3">
                                <span className="font-bold text-2xl text-900">
                                    Exclusive Deals
                                </span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div className="pt-4 pb-0">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="font-bold text-700 ml-2">
                                            Unlimited Developers
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            All Blocks
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Figma File
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Lifetime Support
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Unlimited Updates
                                        </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <span
                                            className="border-circle bg-bluegray-500 text-white flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                            }}
                                        >
                                            <i className="pi pi-check"></i>
                                        </span>
                                        <span className="text-600 ml-2">
                                            Use on Unlimited Projects
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="mailto:contact@primetek.com.tr"
                                    className="border-round no-underline bg-bluegray-500 text-center hover:bg-bluegray-600 text-white block w-full p-3 mt-8 font-medium
                        transition-colors transition-duration-150"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-users bg-bluegray-700 text-center py-6 px-4 lg:px-8">
                <div className="text-white text-4xl mb-3">User Community</div>
                <p className="mt-0 p-0 mb-6 text-white line-height-3">
                    The creator of PrimeReact is{" "}
                    <a
                        href="https://www.primetek.com.tr"
                        className="text-white"
                    >
                        PrimeTek Informatics
                    </a>
                    , the distinguished component library vendor who built
                    vastly popular open source projects such as PrimeFaces,
                    PrimeReact, PrimeNG and PrimeVue over the past years.
                </p>
                <div className="grid">
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/airbus.svg"
                            alt="airbus"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img src="/demo/images/pricing/amex.svg" alt="amex" />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/nvidia.svg"
                            alt="nvidia"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img src="/demo/images/pricing/ebay.svg" alt="ebay" />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img src="/demo/images/pricing/ford.svg" alt="ford" />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img src="/demo/images/pricing/fox.svg" alt="fox" />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/lufthansa.svg"
                            alt="lufthansa"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/mercedes.svg"
                            alt="mercedes"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img src="/demo/images/pricing/sap.svg" alt="sap" />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/unicredit.svg"
                            alt="unicredit"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/verizon.svg"
                            alt="verizon"
                        />
                    </div>
                    <div className="col-6 md:col-2 p-3">
                        <img
                            src="/demo/images/pricing/viacom.svg"
                            alt="viacom"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8">
                <div className="text-900 text-4xl mb-6 text-center">
                    Frequently Asked Questions
                </div>
                <div className="grid">
                    <div className="col-12 lg:col-4 px-2 lg:px-5">
                        <div className="text-2xl text-900 line-height-3 mb-2">
                            What do I get when I purchase a license?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            You&lsquo;ll be able to download this application as an
                            NextJS project that unlocks all the code views
                            along with the full source code.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Is there a recurring fee or is the license
                            perpetual?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            PrimeBlocks license is perpetual so required one
                            time payment not subscription based.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Can I use PrimeBlocks license for commercial
                            projects?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Yes, your license allows you to sell your projects
                            that utilize PrimeBlocks.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Can I create multiple projects for multiple clients?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            There is no limit, you are able to use PrimeBlocks
                            in multiple projects for multiple clients.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Does PrimeBlocks include Figma, Sketch, or Adobe XD
                            files?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            PrimeBlocks uses Figma as the design tool. It will
                            be possible to download the Figma file after your
                            purchase. You can{" "}
                            <a
                                href="https://www.figma.com/file/rw1jU3W047bcvf0ukKAWFO/Preview-%7C-PrimeBlocks-3.2.0?node-id=3730%3A40223&t=uqG6lHmjblRg6UH7-1"
                                className="text-blue-500 no-underline hover:underline"
                            >
                                preview the Figma file
                            </a>{" "}
                            before the purchase.
                        </p>
                    </div>
                    <div className="col-12 lg:col-4 px-2 lg:px-5">
                        <div className="text-2xl text-900 line-height-3 mb-2">
                            We’re a reseller, are we able to purchase a license
                            on behalf of our client?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Yes, after the purchase, please{" "}
                            <a
                                href="mailto:contact@primetek.com.tr"
                                className="text-blue-500 no-underline hover:underline"
                            >
                                contact us
                            </a>{" "}
                            so we can transfer the license to your client.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Does the enterprise license include contractors
                            within the organization?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Yes, contractors are also able to use the
                            PrimeBlocks within your company.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Can subsidiary company of a larger organization
                            share the enterprise license?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            No, enterprise license is per company so each
                            subsidiary company needs to purchase a separate
                            license.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            What does &ldquo;free updates&ldquo; mean?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            All updates including new designs and blocks will be
                            totally free of charge for existing customers.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Is there a maintenance period for PrimeBlocks and
                            the support?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            No, updates are free of charge and support is
                            available for unlimited period.
                        </p>
                    </div>
                    <div className="col-12 lg:col-4 px-2 lg:px-5">
                        <div className="text-2xl text-900 line-height-3 mb-2">
                            How can I get support?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Support is provided by PrimeTek via
                            <a
                                href="https://forum.primefaces.org/viewforum.php?f=153"
                                className="text-blue-500 no-underline hover:underline"
                            >
                                {" "}
                                a dedicated forum channel monitored
                            </a>{" "}
                            by PrimeTek support staff.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            What does lifetime support mean?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Support service at the forum does not have a time
                            limit.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            Can I use PrimeBlocks in open-source projects?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Due to the license, it is not possible to use the
                            blocks in an open source project where code is
                            publicly available.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            What JS framework does PrimeBlocks use?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            Each Prime UI component library has its own
                            PrimeBlocks version, PrimeBlocks for React uses
                            PrimeReact.
                        </p>

                        <div className="text-2xl text-900 line-height-3 mb-2">
                            What browsers does PrimeBlocks support?
                        </div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-700">
                            PrimeBlocks supports IE11, Firefox, Safari, Chrome
                            and Edge.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPage;
