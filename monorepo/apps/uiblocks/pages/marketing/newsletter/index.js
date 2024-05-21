import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import BlockViewer from "../../../demo/components/BlockViewer";

const Newsletter = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap align-items-center">
        <div className="w-full lg:w-6 lg:pr-6">
            <div className="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span className="text-blue-500">free stuff!</span></div>
            <div className="text-600 text-xl line-height-3 lg:mb-0 mb-4" style={{ maxWidth: '450px' }}>Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div className="w-full lg:w-6">
            <div className="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                <InputText placeholder="Enter your email" className="p-3 mr-3 border-400 mb-3 md:mb-0" />
                <Button label="Subscribe" className="py-3 font-bold" />
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
    <div className="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style={{ maxWidth: '350px' }}>
        🔥&nbsp;3,907 businesses already subscribed</div>
    <div className="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
    <p className="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
    </p>

    <div className="flex align-items-center justify-content-center">
        <InputText placeholder="Enter your email" className="p-3 border-noround border-round-left" style={{ minWidth: '250px' }} />
        <Button icon="pi pi-chevron-right" className="border-noround border-round-right p-3 w-auto" />
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="py-6 px-3 md:px-6shadow-2 text-center" style={{ background: 'linear-gradient(180deg, #6372C3 0%, #3F51B5 100%)', borderRadius: '1rem' }}>
        <div className="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
        <span className="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
        <div className="mt-5 mb-3 relative sm:w-20rem mx-auto">
            <InputText className="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style={{ borderRadius: '35px', paddingRight: '6rem' }} value="Your email" />
            <Button type="button" className="absolute" label="Join" style={{ borderRadius: '35px', top: '.5rem', right: '.5rem' }} />
        </div>
        <span className="text-indigo-200">We ensure to protect your privacy. <a tabIndex="0" className="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>
    `;

    const block4 = `
<section className="flex flex-column lg:flex-row justify-content-between overflow-hidden gap-4 surface-section py-8">
    <div className="flex flex-column gap-5 pl-4 md:pl-6 lg:pl-8">
        <h2 className="m-0 font-bold text-900 text-4xl line-height-3">
            Interactively Enpower <br /> Installed Base Users
        </h2>
        <article className="flex flex-column gap-4">
            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>Fully responsive sections.
            </p>
            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>Clean code blocks.
            </p>
            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>Lifetime accessing to source code.
            </p>
        </article>
        <form className="flex flex-column gap-4 lg:gap-2" submit={(event) => event.preventDefault()}>
            <div className="flex flex-column align-items-start md:flex-row md:align-items-center gap-3">
                <InputText placeholder="Email address" className="w-20rem" />
                <Button label="Subscribe"></Button>
            </div>
            <div>
                <span className="text-base text-600">
                    We exist to protect your privacy. <a className="text-base text-primary-500 cursor-pointer">Privacy Policy</a>
                </span>
            </div>
        </form>
    </div>
    <img src="/demo/images/blocks/newsletter/with-image.png" alt="Image" className="-mb-8 ml-4 md:ml-6 lg:ml-0" />
</section>
    `;

    return (
        <>
            <div className="block-category-title">Newsletter</div>
            <BlockViewer header="Simple 2 Column" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap align-items-center">
                        <div className="w-full lg:w-6 lg:pr-6">
                            <div className="text-900 font-bold text-2xl mb-3">
                                Get our weekly updates and{" "}
                                <span className="text-blue-500">
                                    free stuff!
                                </span>
                            </div>
                            <div
                                className="text-600 text-xl line-height-3 lg:mb-0 mb-4"
                                style={{ maxWidth: "450px" }}
                            >
                                Join our community to get weekly updates and
                                unique gifts every friday.
                            </div>
                        </div>

                        <div className="w-full lg:w-6">
                            <div className="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                                <InputText
                                    placeholder="Enter your email"
                                    className="p-3 mr-3 border-400 mb-3 md:mb-0"
                                />
                                <Button
                                    label="Subscribe"
                                    className="py-3 font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple Centered" code={block2}>
                <div className="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3"
                        style={{ maxWidth: "350px" }}
                    >
                        🔥&nbsp;3,907 businesses already subscribed
                    </div>
                    <div className="text-2xl text-900 font-bold mb-3">
                        Subscribe to our newsletter today
                    </div>
                    <p className="text-600 line-height-3 mb-6">
                        Join our community to receieve the latest updates and
                        special promotions.
                    </p>

                    <div className="flex align-items-center justify-content-center">
                        <InputText
                            placeholder="Enter your email"
                            className="p-3 border-noround border-round-left"
                            style={{ minWidth: "250px" }}
                        />
                        <Button
                            icon="pi pi-chevron-right"
                            className="border-noround border-round-right p-3 w-auto"
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Gradient Background" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="py-6 px-3 md:px-6shadow-2 text-center"
                        style={{
                            background:
                                "linear-gradient(180deg, #6372C3 0%, #3F51B5 100%)",
                            borderRadius: "1rem",
                        }}
                    >
                        <div className="text-white font-bold text-2xl mb-3">
                            Stay in touch with us
                        </div>
                        <span className="block text-indigo-100 font-medium text-xl">
                            Subscribe for updates to ensure that you don’t miss
                            any important news from us.
                        </span>
                        <div className="mt-5 mb-3 relative sm:w-20rem mx-auto">
                            <InputText
                                className="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none"
                                style={{
                                    borderRadius: "35px",
                                    paddingRight: "6rem",
                                }}
                                value="Your email"
                            />
                            <Button
                                type="button"
                                className="absolute"
                                label="Join"
                                style={{
                                    borderRadius: "35px",
                                    top: ".5rem",
                                    right: ".5rem",
                                }}
                            />
                        </div>
                        <span className="text-indigo-200">
                            We ensure to protect your privacy.{" "}
                            <a
                                tabIndex="0"
                                className="cursor-pointer text-white"
                            >
                                Privacy Policy
                            </a>
                        </span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Image" code={block4} new>
                <section className="flex flex-column lg:flex-row justify-content-between overflow-hidden gap-4 surface-section py-8">
                    <div className="flex flex-column gap-5 pl-4 md:pl-6 lg:pl-8">
                        <h2 className="m-0 font-bold text-900 text-4xl line-height-3">
                            Interactively Enpower <br /> Installed Base Users
                        </h2>
                        <article className="flex flex-column gap-4">
                            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                Fully responsive sections.
                            </p>
                            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                Clean code blocks.
                            </p>
                            <p className="flex align-items-center gap-3 text-base text-700 mb-0 mt-0">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                Lifetime accessing to source code.
                            </p>
                        </article>
                        <form
                            className="flex flex-column gap-4 lg:gap-2"
                            submit={(event) => event.preventDefault()}
                        >
                            <div className="flex flex-column align-items-start md:flex-row md:align-items-center gap-3">
                                <InputText
                                    placeholder="Email address"
                                    className="w-20rem"
                                />
                                <Button label="Subscribe"></Button>
                            </div>
                            <div>
                                <span className="text-base text-600">
                                    We exist to protect your privacy.{" "}
                                    <a className="text-base text-primary-500 cursor-pointer">
                                        Privacy Policy
                                    </a>
                                </span>
                            </div>
                        </form>
                    </div>
                    <img
                        src="/demo/images/blocks/newsletter/with-image.png"
                        alt="Image"
                        className="-mb-8 ml-4 md:ml-6 lg:ml-0"
                    />
                </section>
            </BlockViewer>
        </>
    );
};

export default Newsletter;
