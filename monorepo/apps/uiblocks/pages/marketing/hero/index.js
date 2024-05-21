import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import BlockViewer from "../../../demo/components/BlockViewer";

const Hero = () => {
    const block1 = `
<div className="grid grid-nogutter surface-section text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Create the screens your</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="/demo/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    `;

    const block2 = `
<div className="relative p-8 overflow-hidden">
    <img src="/demo/images/blocks/hero/hero-2.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

    <div className="text-center my-6 relative">
        <div className="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div className="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Button label="Learn More" type="button"></Button>

        <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div className="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" className="text-white mr-3">
                <i className="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" className="text-white mr-3">
                <i className="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-white">
                <i className="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="relative p-8 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/demo/images/blocks/hero/hero-3.jpg")' }}>
    <div className="text-center my-6 relative">
        <div className="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
        <div className="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
        <p className="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style={{ maxWidth: '500px' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="flex align-items-center justify-content-center flex-wrap">
            <InputText className="bg-transparent border-white p-3 mr-3 mt-3" style={{ borderRadius: '40px' }} size={30} placeholder="Enter your email" />
            <Button label="Notify Me" className="p-3 mt-3" style={{ borderRadius: '40px' }}></Button>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="p-6 text-center" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
    <div className="surface-900 text-0 p-2 mx-auto mb-4" style={{ maxWidth: '250px', borderRadius: '40px' }}>🔥 Get started in no time</div>
    <div className="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
    <div className="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
    <Button label="Get Started" className="p-button-outlined p-3 font-bold"></Button>

    <img src="/demo/images/blocks/hero/ultima.png" alt="ultima" className="block mx-auto mt-6 w-full md:w-auto border-round-top sm:w-full md:w-8 lg:w-7 xl:w-6" style={{ marginBottom: '-3rem' }} />
</div>
    `;

    const block5 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-12 lg:w-6 p-4">
            <h1 className="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span className="text-yellow-500 underline">for free</span></h1>
            <p className="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
            <ul className="list-none p-0 m-0">
                <li className="mb-3 flex align-items-center"><i className="pi pi-compass text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-map text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
            </ul>
            <Button label="Claim Your Account" className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium" />
        </div>
        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img src="/demo/images/blocks/hero/hero-illustration.svg" alt="Image" className="w-full lg:w-auto" />
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-full xl:w-6 p-3 pr-5">
            <span className="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
            <div className="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
            <p className="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
            <div className="relative w-full xl:w-30rem">
                <InputText placeholder="Enter your email" className="py-3 pl-3 w-full" style={{ borderRadius: '30px', paddingRight: '8rem' }} />
                <button className="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style={{ borderRadius: '30px', top: '0', right: '0' }}>Join Now</button>
            </div>
        </div>
        <div className="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style={{ borderRadius: '30px' }}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: '0' }}>
                <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/Prz3phy2bHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    </div>
</div>
    `;

    const block7 = `
<div style={{backgroundImage: "url('/demo/images/blocks/hero/hero-11.png')"}} className="bg-cover z-1">
    <div className="p-6 flex flex-column align-items-center relative overflow-hidden bg-no-repeat bg-cover" style={{ background:'rgba(233, 244, 255, 0.7)'}}>
        <article className="flex flex-column align-items-center bg-no-repeat z-2">
            <span className="text-center font-semibold text-xs md:text-sm text-black-alpha-60 mb-2">MULTIPLY YOUR DEVELOPMENT SPEED</span>
            <h3 className="text-center font-bold text-3xl md:text-6xl text-black-alpha-80 mt-0 mb-4">Start your business with <br/> <span style={{background: 'linear-gradient(90deg, rgba(0, 209, 255, 1) 0%, rgba(255, 109, 232, 1) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>PrimeBlocks</span></h3>
            <div className="px-3 py-2 border-round-lg bg-white-alpha-90 flex justify-content-between align-items-center w-20rem shadow-1">
                <span className="font-normal text-black-alpha-60">npm i primeblocks</span>
                <span className="flex justify-content-center border-round shadow-1 cursor-pointer p-1 text-black-alpha-90"><i className="pi pi-copy"></i></span>
            </div>
        </article>
        <div className="flex flex-column md:flex-row gap-3 mt-4">
            <Button label="Documentation" className="p-button-outlined z-2"></Button>
            <Button label="Get Started" className="z-2"></Button>
        </div>
        <img src="/demo/images/blocks/hero/hero-9.png" alt="Image" className="block mx-auto mt-6 w-full md:w-auto z-1" style={{marginBottom:"-3rem"}}/>
        <img src="/demo/images/blocks/hero/hero-5.png" alt="Image" className="hidden xl:block absolute z-1 xl:z-3" style={{top: "66%", left: "73.5%" }}/>
        <img src="/demo/images/blocks/hero/hero-6.png" alt="Image" className="hidden xl:block absolute z-1 xl:z-3" style={{top: "70%", right: "77%" }}/>
        <img src="/demo/images/blocks/hero/hero-7.png" alt="Image" className="hidden xl:block absolute z-1 xl:z-3" style={{top: "22%", left: "70%" }}/>
        <img src="/demo/images/blocks/hero/hero-8.png" alt="Image" className="hidden xl:block absolute z-1 xl:z-3" style={{top: "35%", left: "19%" }}/>
        <img src="/demo/images/blocks/hero/hero-10.svg" alt="Image" className="hidden xl:block xl:absolute bottom-0" style={{mixBlendMode: 'overlay'}} />
    </div>
</div>
    `;

    const block8 = `
<section className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
    <div className="flex flex-wrap">
        <article className="w-full mt-8 xl:mt-0 xl:mb-0 xl:w-8 flex flex-column flex-order-1 xl:flex-order-0 justify-content-center align-items-center xl:align-items-start">
            <span className="text-blue-500 font-semibold text-lg mb-2">CATCH YOUR NOTIFICATIONS</span>
            <h2 className="font-bold text-4xl sm:text-7xl mt-0 mb-4">
                Develop amazing <br /> communication.
            </h2>
            <div className="flex gap-3">
                <Button type="button" label="Get Started" icon="pi pi-arrow-right" iconPos="right" className="z-2"></Button>
                <Button type="button" label="Documentation" className="p-button-outlined z-2"></Button>
            </div>
        </article>
        <div className="w-full xl:w-4 relative flex justify-content-center align-items-center">
            <img src="/demo/images/blocks/hero/hero-12.png" alt="Image" />
            <article
                className="absolute flex align-items-center w-24rem border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                style={{
                    bottom: '41%',
                    backdropFilter: 'blur(40px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                <img src="/demo/images/blocks/hero/hero-13.png" className="border-circle" alt="Image" />
                <div className="flex flex-column justify-content-center w-full">
                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">
                        Your stocks <span className="text-indigo-500">getting up</span>
                    </p>
                </div>
                <img src="/demo/images/blocks/hero/hero-14.png" alt="Image" className="border-circle" />
            </article>

            <article
                className="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                style={{
                    bottom: '24%',
                    backdropFilter: 'blur(40px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                <img src="/demo/images/blocks/hero/hero-15.png" alt="Image" className="border-circle" />
                <div className="flex flex-column justify-content-center w-full">
                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">Anastasia sent you a message</p>
                </div>
            </article>

            <article
                className="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                style={{
                    bottom: '7%',
                    backdropFilter: 'blur(40px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                <img src="/demo/images/blocks/hero/hero-13.png" alt="Image" className="border-circle" />
                <div className="flex flex-column justify-content-center w-full">
                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">OLYMPIA</p>
                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">
                        Your revenue <span className="text-red-500"></span>
                        getting low
                    </p>
                </div>
                <img src="/demo/images/blocks/hero/hero-16.png" alt="Image" className="border-circle" />
            </article>
        </div>
    </div>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Hero</div>
            <BlockViewer header="Right Aligned Image" code={block1} free>
                <div className="grid grid-nogutter surface-section text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <span className="block text-6xl font-bold mb-1">
                                Create the screens
                            </span>
                            <div className="text-6xl text-primary font-bold mb-3">
                                your visitors deserve to see
                            </div>
                            <p className="mt-0 mb-4 text-700 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <Button
                                label="Learn More"
                                type="button"
                                className="mr-3 p-button-raised"
                            ></Button>
                            <Button
                                label="Live Demo"
                                type="button"
                                className="p-button-outlined"
                            ></Button>
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img
                            src="/demo/images/blocks/hero/hero-1.png"
                            alt="hero-1"
                            className="md:ml-auto block md:h-full"
                            style={{
                                clipPath:
                                    "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                            }}
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Light Image Background" code={block2}>
                <div className="relative p-8 overflow-hidden">
                    <img
                        src="/demo/images/blocks/hero/hero-2.jpg"
                        alt="hero-2"
                        className="absolute top-0 left-0 w-auto h-full block md:w-full"
                    />

                    <div className="text-center my-6 relative">
                        <div className="text-6xl text-white font-bold mb-1">
                            The Platform For
                        </div>
                        <div className="text-6xl text-primary font-bold mb-4">
                            Today&lsquo;s Generation
                        </div>
                        <p
                            className="mt-0 mb-4 line-height-3 text-center mx-auto text-white"
                            style={{ maxWidth: "500px" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>

                        <Button label="Learn More" type="button"></Button>

                        <p className="text-sm mt-4 mb-4 line-height-3 text-white">
                            Available for MacOS, Web and Google accounts only
                        </p>
                        <div className="flex justify-content-center align-items-center">
                            <a
                                href="https://www.apple.com"
                                className="text-white mr-3"
                            >
                                <i className="pi pi-apple text-2xl"></i>
                            </a>
                            <a
                                href="https://play.google.com"
                                className="text-white mr-3"
                            >
                                <i className="pi pi-android text-2xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                className="text-white"
                            >
                                <i className="pi pi-facebook text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Image Background" code={block3}>
                <div
                    className="relative p-8 overflow-hidden bg-no-repeat bg-cover"
                    style={{
                        backgroundImage:
                            'url("/demo/images/blocks/hero/hero-3.jpg")',
                    }}
                >
                    <div className="text-center my-6 relative">
                        <div className="text-6xl font-bold mb-1 text-white">
                            Bring Out The Best
                        </div>
                        <div className="text-6xl text-blue-400 font-bold mb-4">
                            In Your Code
                        </div>
                        <p
                            className="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100"
                            style={{ maxWidth: "500px" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>

                        <div className="flex align-items-center justify-content-center flex-wrap">
                            <InputText
                                className="bg-transparent border-white p-3 mr-3 mt-3"
                                style={{ borderRadius: "40px" }}
                                size={30}
                                placeholder="Enter your email"
                            />
                            <Button
                                label="Notify Me"
                                className="p-3 mt-3"
                                style={{ borderRadius: "40px" }}
                            ></Button>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered Product Image" code={block4}>
                <div
                    className="p-6 text-center"
                    style={{
                        background:
                            "radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                >
                    <div
                        className="surface-900 text-0 p-2 mx-auto mb-4"
                        style={{ maxWidth: "250px", borderRadius: "40px" }}
                    >
                        🔥 Get started in no time
                    </div>
                    <div className="text-6xl text-900 font-bold mb-1">
                        Highly Customizable
                    </div>
                    <div className="text-6xl text-primary font-bold mb-4">
                        Premium Application Template
                    </div>
                    <Button
                        label="Get Started"
                        className="p-button-outlined p-3 font-bold"
                    ></Button>

                    <img
                        src="/demo/images/blocks/hero/ultima.png"
                        alt="ultima"
                        className="block mx-auto mt-6 w-full md:w-auto border-round-top sm:w-full md:w-8 lg:w-7 xl:w-6"
                        style={{ marginBottom: "-3rem" }}
                    />
                </div>
            </BlockViewer>

            <BlockViewer header="Dark with Illustration" code={block5}>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-12 lg:w-6 p-4">
                            <h1 className="text-6xl font-bold text-white mt-0 mb-3">
                                Social CRM that helps you grow faster{" "}
                                <span className="text-yellow-500 underline">
                                    for free
                                </span>
                            </h1>
                            <p className="text-3xl text-gray-400 mt-0 mb-5">
                                Arcu cursus euismod quis viverra nibh cras. Amet
                                justo donec enim diam vulputate ut.
                            </p>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-3 flex align-items-center">
                                    <i className="pi pi-compass text-yellow-500 text-xl mr-2"></i>
                                    <span className="text-gray-400 line-height-3">
                                        Senectus et netus et malesuada fames.
                                    </span>
                                </li>
                                <li className="mb-3 flex align-items-center">
                                    <i className="pi pi-map text-yellow-500 text-xl mr-2"></i>
                                    <span className="text-gray-400 line-height-3">
                                        Orci a scelerisque purus semper eget.
                                    </span>
                                </li>
                                <li className="mb-3 flex align-items-center">
                                    <i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i>
                                    <span className="text-gray-400 line-height-3">
                                        Aenean sed adipiscing diam donec
                                        adipiscing tristique.
                                    </span>
                                </li>
                            </ul>
                            <Button
                                label="Claim Your Account"
                                className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium"
                            />
                        </div>
                        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
                            <img
                                src="/demo/images/blocks/hero/hero-illustration.svg"
                                alt="Image"
                                className="w-full lg:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Form and Video Aligned Image" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-6 p-3 pr-5">
                            <span className="text-indigo-600 font-bold mb-4 block">
                                SUPERCHARGE YOUR PRODUCT
                            </span>
                            <div className="font-bold text-900 text-6xl mb-4">
                                Take Control of Your Marketing Strategy
                            </div>
                            <p className="mt-0 mb-5 text-700 line-height-3 text-xl">
                                Mauris rhoncus aenean vel elit scelerisque
                                mauris pellentesque pulvinar. In ante metus
                                dictum at tempor commodo ullamcorper a lacus.
                            </p>
                            <div className="relative w-full xl:w-30rem">
                                <InputText
                                    placeholder="Enter your email"
                                    className="py-3 pl-3 w-full"
                                    style={{
                                        borderRadius: "30px",
                                        paddingRight: "8rem",
                                    }}
                                />
                                <button
                                    className="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer"
                                    style={{
                                        borderRadius: "30px",
                                        top: "0",
                                        right: "0",
                                    }}
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>
                        <div
                            className="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0"
                            style={{ borderRadius: "30px" }}
                        >
                            <div
                                className="relative w-full"
                                style={{ paddingBottom: "56.25%", height: "0" }}
                            >
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/Prz3phy2bHY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With 3D Emoji" code={block7} new>
                <div
                    style={{
                        backgroundImage:
                            "url('/demo/images/blocks/hero/hero-11.png')",
                    }}
                    className="bg-cover z-1"
                >
                    <div
                        className="p-6 flex flex-column align-items-center relative overflow-hidden bg-no-repeat bg-cover"
                        style={{ background: "rgba(233, 244, 255, 0.7)" }}
                    >
                        <article className="flex flex-column align-items-center bg-no-repeat z-2">
                            <span className="text-center font-semibold text-xs md:text-sm text-black-alpha-60 mb-2">
                                MULTIPLY YOUR DEVELOPMENT SPEED
                            </span>
                            <h3 className="text-center font-bold text-3xl md:text-6xl text-black-alpha-80 mt-0 mb-4">
                                Start your business with <br />{" "}
                                <span
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(0, 209, 255, 1) 0%, rgba(255, 109, 232, 1) 100%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    PrimeBlocks
                                </span>
                            </h3>
                            <div className="px-3 py-2 border-round-lg bg-white-alpha-90 flex justify-content-between align-items-center w-20rem shadow-1">
                                <span className="font-normal text-black-alpha-60">
                                    npm i primeblocks
                                </span>
                                <span className="flex justify-content-center border-round shadow-1 cursor-pointer p-1 text-black-alpha-90">
                                    <i className="pi pi-copy"></i>
                                </span>
                            </div>
                        </article>
                        <div className="flex flex-column md:flex-row gap-3 mt-4">
                            <Button
                                label="Documentation"
                                className="p-button-outlined z-2"
                            ></Button>
                            <Button
                                label="Get Started"
                                className="z-2"
                            ></Button>
                        </div>
                        <img
                            src="/demo/images/blocks/hero/hero-9.png"
                            alt="Image"
                            className="block mx-auto mt-6 w-full md:w-auto z-1"
                            style={{ marginBottom: "-3rem" }}
                        />
                        <img
                            src="/demo/images/blocks/hero/hero-5.png"
                            alt="Image"
                            className="hidden xl:block absolute z-1 xl:z-3"
                            style={{ top: "66%", left: "73.5%" }}
                        />
                        <img
                            src="/demo/images/blocks/hero/hero-6.png"
                            alt="Image"
                            className="hidden xl:block absolute z-1 xl:z-3"
                            style={{ top: "70%", right: "77%" }}
                        />
                        <img
                            src="/demo/images/blocks/hero/hero-7.png"
                            alt="Image"
                            className="hidden xl:block absolute z-1 xl:z-3"
                            style={{ top: "22%", left: "70%" }}
                        />
                        <img
                            src="/demo/images/blocks/hero/hero-8.png"
                            alt="Image"
                            className="hidden xl:block absolute z-1 xl:z-3"
                            style={{ top: "35%", left: "19%" }}
                        />
                        <img
                            src="/demo/images/blocks/hero/hero-10.svg"
                            alt="Image"
                            className="hidden xl:block xl:absolute bottom-0"
                            style={{ mixBlendMode: "overlay" }}
                        />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Phone" code={block8} new>
                <section className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
                    <div className="flex flex-wrap">
                        <article className="w-full mt-8 xl:mt-0 xl:mb-0 xl:w-8 flex flex-column flex-order-1 xl:flex-order-0 justify-content-center align-items-center xl:align-items-start">
                            <span className="text-blue-500 font-semibold text-lg mb-2">
                                CATCH YOUR NOTIFICATIONS
                            </span>
                            <h2 className="font-bold text-4xl sm:text-7xl mt-0 mb-4">
                                Develop amazing <br /> communication.
                            </h2>
                            <div className="flex gap-3">
                                <Button
                                    type="button"
                                    label="Get Started"
                                    icon="pi pi-arrow-right"
                                    iconPos="right"
                                    className="z-2"
                                ></Button>
                                <Button
                                    type="button"
                                    label="Documentation"
                                    className="p-button-outlined z-2"
                                ></Button>
                            </div>
                        </article>
                        <div className="w-full xl:w-4 relative flex justify-content-center align-items-center">
                            <img
                                src="/demo/images/blocks/hero/hero-12.png"
                                alt="Image"
                            />
                            <article
                                className="absolute flex align-items-center w-24rem border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                                style={{
                                    bottom: "41%",
                                    backdropFilter: "blur(40px)",
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                }}
                            >
                                <img
                                    src="/demo/images/blocks/hero/hero-13.png"
                                    className="border-circle"
                                    alt="Image"
                                />
                                <div className="flex flex-column justify-content-center w-full">
                                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">
                                        OLYMPIA
                                    </p>
                                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">
                                        Your stocks{" "}
                                        <span className="text-indigo-500">
                                            getting up
                                        </span>
                                    </p>
                                </div>
                                <img
                                    src="/demo/images/blocks/hero/hero-14.png"
                                    alt="Image"
                                    className="border-circle"
                                />
                            </article>

                            <article
                                className="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                                style={{
                                    bottom: "24%",
                                    backdropFilter: "blur(40px)",
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                }}
                            >
                                <img
                                    src="/demo/images/blocks/hero/hero-15.png"
                                    alt="Image"
                                    className="border-circle"
                                />
                                <div className="flex flex-column justify-content-center w-full">
                                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">
                                        OLYMPIA
                                    </p>
                                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">
                                        Anastasia sent you a message
                                    </p>
                                </div>
                            </article>

                            <article
                                className="absolute flex align-items-center w-24rem p-1 border-round-xl z-2 right-0 md:right-50 gap-3 px-4 py-3"
                                style={{
                                    bottom: "7%",
                                    backdropFilter: "blur(40px)",
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                }}
                            >
                                <img
                                    src="/demo/images/blocks/hero/hero-13.png"
                                    alt="Image"
                                    className="border-circle"
                                />
                                <div className="flex flex-column justify-content-center w-full">
                                    <p className="m-0 font-semibold text-sm line-height-1.5 text-black-alpha-60">
                                        OLYMPIA
                                    </p>
                                    <p className="m-0 font-medium text-sm line-height-1.5 text-black-alpha-80">
                                        Your revenue{" "}
                                        <span className="text-red-500"></span>
                                        getting low
                                    </p>
                                </div>
                                <img
                                    src="/demo/images/blocks/hero/hero-16.png"
                                    alt="Image"
                                    className="border-circle"
                                />
                            </article>
                        </div>
                    </div>
                </section>
            </BlockViewer>
        </>
    );
};

export default Hero;
