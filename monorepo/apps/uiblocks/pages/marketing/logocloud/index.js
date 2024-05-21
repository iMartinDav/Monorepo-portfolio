import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";

const LogoCloud = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 mb-3 font-bold text-5xl text-center">Trusted By</div>
    <div className="text-600 mb-6 line-height-3 text-xl text-center">We provide many of the Planet Earth’s most powerful companies with extraordinary infrastructural capabilities.</div>

    <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/alfred-500.svg" alt="alfred-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/hyper-500.svg" alt="hyper-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/bastion-500.svg" alt="bastion-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/peak-500.svg" alt="peak-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/charot-500.svg" alt="charot-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/shodan-500.svg" alt="shadon-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/hodly-500.svg" alt="hodly-500" height={50} />
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="flex align-items-center justify-content-center p-3">
                <img src="/demo/images/blocks/logos/franki-500.svg" alt="franki-500" height={50} />
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="text-white mb-3 font-bold text-5xl">You're in good company</div>
    <div className="text-white mb-6 line-height-3 text-xl">Millions of individuals, corporations, startups and institutes work with us.</div>

    <div className="flex align-items-center text-center flex-wrap">
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/alfred-300.svg" alt="alfred-300" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/charot-300.svg" alt="charot-300" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/hyper-300.svg" alt="hyper-300" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/hodly-300.svg" alt="hodly-300" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/franki-300.svg" alt="franki-300" />
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-evenly flex-wrap">
        <div className="p-3">
            <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/charot-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/hyper-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/hodly-500.svg" alt="Image" height="50" />
        </div>
        <div className="p-3">
            <img src="/demo/images/blocks/logos/franki-500.svg" alt="Image" height="50" />
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap align-items-center justify-content-between">
        <div className="w-full lg:w-6 pr-0 lg:pr-4">
            <div className="font-bold text-900 text-4xl mb-3">Our Clients</div>
            <p className="text-700 m-0 text-xl">Millions of individuals, corporations, startups and institutes work with us.</p>
        </div>
        <div className="w-full lg:w-6 mt-4 lg:mt-0">
            <div className="grid grid-nogutter">
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/peak-500.svg" alt="Image" height="40" />
                </div>
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/charot-500.svg" alt="Image" height="40" />
                </div>
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/hyper-500.svg" alt="Image" height="40" />
                </div>
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/hodly-500.svg" alt="Image" height="40" />
                </div>
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/franki-500.svg" alt="Image" height="40" />
                </div>
                <div className="col-12 sm:col-6 xl:col-4 p-4">
                    <img src="/demo/images/blocks/logos/alfred-500.svg" alt="Image" height="40" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="bg-indigo-500 px-4 py-8 md:px-6 lg:px-8">
    <div className="text-white mb-3 font-bold text-5xl text-center ">Who Uses Our Technology</div>
    <div className="text-indigo-200 mb-6 line-height-3 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <div className="flex align-items-center text-center flex-wrap">
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/alfred-300.svg" alt="Image" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/charot-300.svg" alt="Image" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/hyper-300.svg" alt="Image" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/hodly-300.svg" alt="Image" />
        </div>
        <div className="flex-grow-1 p-3">
            <img src="/demo/images/blocks/logos/franki-300.svg" alt="Image" />
        </div>
    </div>
</div>
    `;

    const block6 = `
<section className="surface-section gap-3 px-4 py-8 md:px-6 lg:px-8">
    <h2 className="m-0 font-normal text-xl text-700 line-height-3 text-center">Trusted by Fortune 500 companies</h2>
    <div className="flex justify-content-evenly flex-wrap">
        <img src="/demo/images/blocks/logos/peak-indigo.png" alt="Peak" />
        <img src="/demo/images/blocks/logos/charot-purple.png" alt="Charot" />
        <img src="/demo/images/blocks/logos/hyper-cyan.png" alt="Hyper" />
        <img src="/demo/images/blocks/logos/hodly-orange.png" alt="Hodly" />
        <img src="/demo/images/blocks/logos/franki-green.png" alt="Franki" />
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Logo Cloud</div>
            <BlockViewer header="Grid" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 mb-3 font-bold text-5xl text-center">
                        Trusted By
                    </div>
                    <div className="text-600 mb-6 line-height-3 text-xl text-center">
                        We provide many of the Planet Earth’s most powerful
                        companies with extraordinary infrastructural
                        capabilities.
                    </div>

                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/alfred-500.svg"
                                    alt="alfred-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/hyper-500.svg"
                                    alt="hyper-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/bastion-500.svg"
                                    alt="bastion-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/peak-500.svg"
                                    alt="peak-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/charot-500.svg"
                                    alt="charot-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/shodan-500.svg"
                                    alt="shadon-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/hodly-500.svg"
                                    alt="hodly-500"
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="flex align-items-center justify-content-center p-3">
                                <img
                                    src="/demo/images/blocks/logos/franki-500.svg"
                                    alt="franki-500"
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Background" code={block2}>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-white mb-3 font-bold text-5xl">
                        You&lsquo;re in good company
                    </div>
                    <div className="text-white mb-6 line-height-3 text-xl">
                        Millions of individuals, corporations, startups and
                        institutes work with us.
                    </div>

                    <div className="flex align-items-center text-center flex-wrap">
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/alfred-300.svg"
                                alt="alfred-300"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/charot-300.svg"
                                alt="charot-300"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/hyper-300.svg"
                                alt="hyper-300"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/hodly-300.svg"
                                alt="hodly-300"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/franki-300.svg"
                                alt="franki-300"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-evenly flex-wrap">
                        <div className="p-3">
                            <img
                                src="/demo/images/blocks/logos/peak-500.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                        <div className="p-3">
                            <img
                                src="/demo/images/blocks/logos/charot-500.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                        <div className="p-3">
                            <img
                                src="/demo/images/blocks/logos/hyper-500.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                        <div className="p-3">
                            <img
                                src="/demo/images/blocks/logos/hodly-500.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                        <div className="p-3">
                            <img
                                src="/demo/images/blocks/logos/franki-500.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2 Columns" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap align-items-center justify-content-between">
                        <div className="w-full lg:w-6 pr-0 lg:pr-4">
                            <div className="font-bold text-900 text-4xl mb-3">
                                Our Clients
                            </div>
                            <p className="text-700 m-0 text-xl">
                                Millions of individuals, corporations, startups
                                and institutes work with us.
                            </p>
                        </div>
                        <div className="w-full lg:w-6 mt-4 lg:mt-0">
                            <div className="grid grid-nogutter">
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/peak-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/charot-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/hyper-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/hodly-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/franki-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                                <div className="col-12 sm:col-6 xl:col-4 p-4">
                                    <img
                                        src="/demo/images/blocks/logos/alfred-500.svg"
                                        alt="Image"
                                        height="40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored Background" code={block5}>
                <div className="bg-indigo-500 px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-white mb-3 font-bold text-5xl text-center ">
                        Who Uses Our Technology
                    </div>
                    <div className="text-indigo-200 mb-6 line-height-3 text-xl text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>

                    <div className="flex align-items-center text-center flex-wrap">
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/alfred-300.svg"
                                alt="Image"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/charot-300.svg"
                                alt="Image"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/hyper-300.svg"
                                alt="Image"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/hodly-300.svg"
                                alt="Image"
                            />
                        </div>
                        <div className="flex-grow-1 p-3">
                            <img
                                src="/demo/images/blocks/logos/franki-300.svg"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Colored" code={block6} new>
                <section className="surface-section gap-3 px-4 py-8 md:px-6 lg:px-8">
                    <h2 className="m-0 font-normal text-xl text-700 line-height-3 text-center">
                        Trusted by Fortune 500 companies
                    </h2>
                    <div className="flex justify-content-evenly flex-wrap">
                        <img
                            src="/demo/images/blocks/logos/peak-indigo.png"
                            alt="Peak"
                        />
                        <img
                            src="/demo/images/blocks/logos/charot-purple.png"
                            alt="Charot"
                        />
                        <img
                            src="/demo/images/blocks/logos/hyper-cyan.png"
                            alt="Hyper"
                        />
                        <img
                            src="/demo/images/blocks/logos/hodly-orange.png"
                            alt="Hodly"
                        />
                        <img
                            src="/demo/images/blocks/logos/franki-green.png"
                            alt="Franki"
                        />
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default LogoCloud;
