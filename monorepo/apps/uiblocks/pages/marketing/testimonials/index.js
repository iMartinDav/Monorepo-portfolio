import React from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

const Testimonials = () => {
    const company = [
        {
            name: "Dave Williams",
            image: "1",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
        },
        {
            name: "Jane Watson",
            image: "2",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
        },
        {
            name: "Annie Lanphear",
            image: "3",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
        },
    ];

    const block1 = `
<div className="surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column md:flex-row">
        <div className="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
            <div className="shadow-2 surface-card border-round relative">
                <img src="/demo/images/blocks/testimonial/testimonials-1.png" width={100} height={100} className="absolute left-50" style={{ marginLeft: '-50px', top: '-50px' }} alt="testimonial-1" />
                <div className="px-4 pb-4 pt-8 relative">
                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”
                    </p>

                    <div className="text-900 font-semibold line-height-3 mt-4">Dave Williams</div>
                    <div className="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>

        <div className="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
            <div className="shadow-2 surface-card border-round relative">
                <img src="/demo/images/blocks/testimonial/testimonials-2.png" width={100} height={100} className="absolute left-50" style={{ marginLeft: '-50px', top: '-50px' }} alt="testimonial-2" />

                <div className="px-4 pb-4 pt-8 relative">
                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”</p>

                    <div className="text-900 font-semibold line-height-3 mt-4">Jane Watson</div>
                    <div className="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>

        <div className="flex flex-grow-1 md:px-4 py-4 md:py-0">
            <div className="shadow-2 surface-card border-round relative">
                <img src="/demo/images/blocks/testimonial/testimonials-3.png" width={100} height={100} className="absolute left-50" style={{ marginLeft: '-50px', top: '-50px' }} alt="testimonial-3" />

                <div className="px-4 pb-4 pt-8 relative">
                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                        “Lorem ipsum dolor sit amet, sed tempor incididunt ut labore et dolore magna alique.”</p>

                    <div className="text-900 font-semibold line-height-3 mt-4">Annie Lanphear</div>
                    <div className="text-600 line-height-3 text-sm">Company Title</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-ground text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8">
    <Carousel value={company} itemTemplate={(person) => <>
        <div className="flex justify-content-center">
            <div className="surface-card shadow-2 px-2 md:px-6 py-5 border-round mb-4 text-900 text-2xl line-highlight-3"
                style={{ maxWidth: '600px' }}>{person.text}</div>
        </div>
        <img src={\`/demo/images/blocks/testimonial/testimonials-\${person.image}.png\`} width={56} height={56} alt={person.name} className="mb-3" />
        <div className="text-900 font-bold line-height-3">{person.name}</div>
        <div className="text-600 line-height-3 mb-4">Company Title</div>
    </>} />
</div>
    `;

    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-orange-500 font-medium mb-3 text-center">Exclusive Community</div>
    <div className="text-2xl font-medium mb-5 text-center text-900">Join Our Developer Community</div>
    <div className="grid grid-nogutter">
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="w-5rem" alt="avatar-f-1"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">No matter where you go, Blocks is the coolest, most happening thing around! We can't understand how we've been living without Blocks.</p>
                    <span className="text-900 font-medium mb-1 mt-auto">Jane Cooper</span>
                    <div className="text-600 text-sm">Belton, Inc</div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-m-1.png" className="w-5rem" alt="avatar-m-1"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">I use Blocks often. We can't understand how we've been living without Blocks. Keep up the excellent work.</p>
                    <div className="text-900 font-medium mb-1 mt-auto">Jacob Jones</div>
                    <div className="text-600 text-sm">Vailan Corp</div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="w-5rem" alt="avatar-f-2"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">Just what I was looking for. I would like to personally thank you for your outstanding product.</p>
                    <div className="text-900 font-medium mb-1 mt-auto">Leslie Alexander</div>
                    <div className="text-600 text-sm">Alfred, Ltd</div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="w-5rem" alt="avatar-f-3"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">Really good. If you want real marketing that works and effective implementation - Blocks's got you covered.</p>
                    <div className="text-900 font-medium mb-1 mt-auto">Kristin Watson</div>
                    <div className="text-600 text-sm">Charot</div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" className="w-5rem" alt="avatar-f-4"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">I will recommend you to my colleagues. Thanks guys, keep up the good work! Blocks is awesome! It's really wonderful.</p>
                    <div className="text-900 font-medium mb-1 mt-auto">Cody Fisher</div>
                    <div className="text-600 text-sm">Franki</div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-4 p-4">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full" style={{ borderRadius: '10px' }}>
                <span>
                    <img src="/demo/images/blocks/avatars/circle/avatar-m-5.png" className="w-5rem" alt="avatar-m-5"/>
                </span>
                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.</p>
                    <div className="text-900 font-medium mb-1 mt-auto">Floyd Miles</div>
                    <div className="text-600 text-sm">Hyper, Inc</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div style={{ background: 'url("/demo/images/blocks/testimonial/testimonials-4.png") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column lg:flex-row">
        <div className="flex-1 pr-0 lg:pr-6 pb-6 lg:pb-0">
            <div className="mb-5 text-900 font-bold text-5xl">Cursus metus aliquam eleifend</div>
            <p className="line-height-3 text-600 text-xl mb-5">Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Viverra vitae congue eu consequat ac felis.
                Magna eget est lorem ipsum dolor sit. Bibendum enim facilisis gravida neque convallis a cras semper auctor.
                Porttitor massa id neque aliquam vestibulum morbi.
                Purus non enim praesent elementum facilisis leo vel fringilla est. Donec massa sapien faucibus et molestie ac feugiat.</p>
            <Button label="Learn More" className="text-xl" />
        </div>
        <div className="flex-1">
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5" style={{ borderRadius: '10px' }}>
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" className="w-5rem" alt="avatar-f-1"/>
                <div className="ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3">No matter where you go, Blocks is the coolest, most happening thing around! We can't understand how we've been living without Blocks.</p>
                    <div className="text-900 font-medium mb-1 text-right">Jane Cooper</div>
                    <div className="text-600 text-sm text-right">Belton, Inc</div>
                </div>
            </div>
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5" style={{ borderRadius: '10px' }}>
                <img src="/demo/images/blocks/avatars/circle/avatar-m-5.png" className="w-5rem" alt="avatar-m-5"/>
                <div className="ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3">We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.</p>
                    <div className="text-900 font-medium mb-1 text-right">Floyd Miles</div>
                    <div className="text-600 text-sm text-right">Belton, Inc</div>
                </div>
            </div>
            <div className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start" style={{ borderRadius: '10px' }}>
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="w-5rem" alt="avatar-f-2" />
                <div className="ml-4 mt-4 md:mt-0">
                    <p className="mt-0 mb-3 line-height-3">Just what I was looking for. I would like to personally thank you for your outstanding product.</p>
                    <div className="text-900 font-medium mb-1 text-right">Leslie Alexander</div>
                    <div className="text-600 text-sm text-right">Alfred, Inc</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="bg-no-repeat bg-cover bg-center border-round-xl p-7" style={{ background: "url('/demo/images/blocks/testimonial/testimonials-5.jpg')" }}>
        <img src="/demo/images/blocks/logos/franki-300.svg" alt="Image" className="block mb-4" />
        <div>
            <p className="text-white text-4xl mt-0 mb-3 line-height-3">"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."</p>
            <div className="text-white text-xl font-medium mb-3">Esther Howard</div>
            <div className="text-primary font-semibold">Marketing Coordinator</div>
        </div>
    </div>
</div>
    `;
    const block6 = `
<section className="flex flex-column lg:flex-row justify-content-between align-items-center surface-section">
    <article className="flex flex-column w-full gap-5 px-4 py-8 md:px-6 lg:px-8">
        <h1 className="m-0 text-900 font-bold text-7xl">Designed for Developers</h1>
        <div className="flex flex-column gap-4">
            <div className="flex align-items-center gap-2">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                <p className="mt-0 mb-0 text-base text-700 line-height-3">Aliquet nibh praesent tristique magna</p>
            </div>
            <div className="flex align-items-center gap-2">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                <p className="mt-0 mb-0 text-base text-700 line-height-3">Ut enim blandit volutpat maecenas</p>
            </div>
            <div className="flex align-items-center gap-2">
                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                <p className="mt-0 mb-0 text-base text-700 line-height-3">Quisque non tellus orci ac auctor</p>
            </div>
        </div>
        <div className="flex align-items-center gap-3">
            <Button label="Try it free" className="p-button-outlined"></Button>
            <Button label="Upgrade now" icon="pi pi-bolt" iconPos="right"></Button>
        </div>
    </article>
    <article
        className="w-full bg-cover flex align-items-end p-5 bg-center"
        style={{
            background: "url('/demo/images/blocks/testimonial/testimonials-8.jpg')",
            height: '44rem'
        }}>
        <div
            className="flex flex-column gap-5 border-round-lg p-3 w-full"
            style={{
                backdropFilter: 'blur(12.25px)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
            <p className="m-0 text-0 text-2xl line-height-3 font-semibold text-center text-white">“He wondered if it could be called a beach if there was no sand.”</p>
            <div className="flex gap-3 align-items-center">
                <hr
                    className="w-full"
                    style={{
                        border: '1px solid rgba(222, 226, 230, 0.15)'
                    }}
                />
                <div className="flex align-items-center gap-2">
                    <i className="pi pi-star-fill text-white"></i>
                    <i className="pi pi-star-fill text-white"></i>
                    <i className="pi pi-star-fill text-white"></i>
                    <i className="pi pi-star-fill text-white"></i>
                    <i className="pi pi-star-fill text-white"></i>
                </div>
                <hr
                    className="w-full"
                    style={{
                        border: '1px solid rgba(222, 226, 230, 0.15)'
                    }}
                />
            </div>
            <div className="flex justify-content-between">
                <div className="flex flex-column gap-1">
                    <p className="mt-0 mb-0 font-semibold line-height-3 text-base text-white">Johnathan Doe</p>
                    <span className="text-50 font-light line-height-3 text-sm text-white-alpha-80">CEO & Co-Founder of Hyper</span>
                </div>
                <div className="flex align-items-center gap-2">
                    <Button
                        icon="pi pi-arrow-left"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                        className="p-button-rounded bg-white-alpha-10 text-white"></Button>
                    <Button
                        icon="pi pi-arrow-right"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                        className="p-button-rounded bg-white-alpha-10 text-white"></Button>
                </div>
            </div>
        </div>
    </article>
</section>
    `;
    const block7 = `
<section className="surface-ground text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8">
    <div className="flex justify-content-center text-center mb-4 gap-2">
        <img src="/demo/images/blocks/logos/hodly-indigo-500.svg" height="38" alt="hodly-indigo-500"/>
    </div>
    <div className="flex justify-content-center">
        <h2 className="px-2 md:px-6 text-900 text-5xl font-medium line-height-3 mb-0" style={{ maxWidth: '1350px' }}>
            It is a fantastic component library for web development. The components are easy to use, well-designed, and the documentation and support are top-notch. Highly recommend!”
        </h2>
    </div>
    <img src="/demo/images/blocks/testimonial/testimonials-3.png" width="56" height="56" className="mt-4" alt="testimonials-3"/>
    <p className="text-900 font-semibold text-xl line-height-3 text-center">Annie Lanphear</p>
    <p className="text-600 font-normal line-height-1 mt-2 text-md text-center">Software Engineer</p>
</section>
    `;

    return (
        <>
            <div className="block-category-title">Testimonials</div>
            <BlockViewer header="3x1 Grid with Offset Images" code={block1}>
                <div className="surface-ground text-center px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-column md:flex-row">
                        <div className="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
                            <div className="shadow-2 surface-card border-round relative">
                                <img
                                    src="/demo/images/blocks/testimonial/testimonials-1.png"
                                    width={100}
                                    height={100}
                                    className="absolute left-50"
                                    style={{
                                        marginLeft: "-50px",
                                        top: "-50px",
                                    }}
                                    alt="testimonial-1"
                                />
                                <div className="px-4 pb-4 pt-8 relative">
                                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                                        “Lorem ipsum dolor sit amet, sed tempor
                                        incididunt ut labore et dolore magna
                                        alique.”
                                    </p>

                                    <div className="text-900 font-semibold line-height-3 mt-4">
                                        Dave Williams
                                    </div>
                                    <div className="text-600 line-height-3 text-sm">
                                        Company Title
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
                            <div className="shadow-2 surface-card border-round relative">
                                <img
                                    src="/demo/images/blocks/testimonial/testimonials-2.png"
                                    width={100}
                                    height={100}
                                    className="absolute left-50"
                                    style={{
                                        marginLeft: "-50px",
                                        top: "-50px",
                                    }}
                                    alt="testimonial-2"
                                />

                                <div className="px-4 pb-4 pt-8 relative">
                                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                                        “Lorem ipsum dolor sit amet, sed tempor
                                        incididunt ut labore et dolore magna
                                        alique.”
                                    </p>

                                    <div className="text-900 font-semibold line-height-3 mt-4">
                                        Jane Watson
                                    </div>
                                    <div className="text-600 line-height-3 text-sm">
                                        Company Title
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-grow-1 md:px-4 py-4 md:py-0">
                            <div className="shadow-2 surface-card border-round relative">
                                <img
                                    src="/demo/images/blocks/testimonial/testimonials-3.png"
                                    width={100}
                                    height={100}
                                    className="absolute left-50"
                                    style={{
                                        marginLeft: "-50px",
                                        top: "-50px",
                                    }}
                                    alt="testimonial-3"
                                />

                                <div className="px-4 pb-4 pt-8 relative">
                                    <p className="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border">
                                        “Lorem ipsum dolor sit amet, sed tempor
                                        incididunt ut labore et dolore magna
                                        alique.”
                                    </p>

                                    <div className="text-900 font-semibold line-height-3 mt-4">
                                        Annie Lanphear
                                    </div>
                                    <div className="text-600 line-height-3 text-sm">
                                        Company Title
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered with Slide" code={block2}>
                <div className="surface-ground text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8">
                    <Carousel
                        value={company}
                        itemTemplate={(person) => (
                            <>
                                <div className="flex justify-content-center">
                                    <div
                                        className="surface-card shadow-2 px-2 md:px-6 py-5 border-round mb-4 text-900 text-2xl line-highlight-3"
                                        style={{ maxWidth: "600px" }}
                                    >
                                        {person.text}
                                    </div>
                                </div>
                                <img
                                    src={`/demo/images/blocks/testimonial/testimonials-${person.image}.png`}
                                    width={56}
                                    height={56}
                                    alt={person.name}
                                    className="mb-3"
                                />
                                <div className="text-900 font-bold line-height-3">
                                    {person.name}
                                </div>
                                <div className="text-600 line-height-3 mb-4">
                                    Company Title
                                </div>
                            </>
                        )}
                    />
                </div>
            </BlockViewer>

            <BlockViewer header="Centered 3x2 Grid" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-orange-500 font-medium mb-3 text-center">
                        Exclusive Community
                    </div>
                    <div className="text-2xl font-medium mb-5 text-center text-900">
                        Join Our Developer Community
                    </div>
                    <div className="grid grid-nogutter">
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="w-5rem"
                                        alt="avatar-f-1"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        No matter where you go, Blocks is the
                                        coolest, most happening thing around! We
                                        can&lsquo;t understand how we&lsquo;ve been living
                                        without Blocks.
                                    </p>
                                    <span className="text-900 font-medium mb-1 mt-auto">
                                        Jane Cooper
                                    </span>
                                    <div className="text-600 text-sm">
                                        Belton, Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-m-1.png"
                                        className="w-5rem"
                                        alt="avatar-m-1"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        I use Blocks often. We can&lsquo;t understand
                                        how we&lsquo;ve been living without Blocks.
                                        Keep up the excellent work.
                                    </p>
                                    <div className="text-900 font-medium mb-1 mt-auto">
                                        Jacob Jones
                                    </div>
                                    <div className="text-600 text-sm">
                                        Vailan Corp
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                        className="w-5rem"
                                        alt="avatar-f-2"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        Just what I was looking for. I would
                                        like to personally thank you for your
                                        outstanding product.
                                    </p>
                                    <div className="text-900 font-medium mb-1 mt-auto">
                                        Leslie Alexander
                                    </div>
                                    <div className="text-600 text-sm">
                                        Alfred, Ltd
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                        className="w-5rem"
                                        alt="avatar-f-3"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        Really good. If you want real marketing
                                        that works and effective implementation
                                        - Blocks&lsquo;s got you covered.
                                    </p>
                                    <div className="text-900 font-medium mb-1 mt-auto">
                                        Kristin Watson
                                    </div>
                                    <div className="text-600 text-sm">
                                        Charot
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                        className="w-5rem"
                                        alt="avatar-f-4"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        I will recommend you to my colleagues.
                                        Thanks guys, keep up the good work!
                                        Blocks is awesome! It&lsquo;s really
                                        wonderful.
                                    </p>
                                    <div className="text-900 font-medium mb-1 mt-auto">
                                        Cody Fisher
                                    </div>
                                    <div className="text-600 text-sm">
                                        Franki
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-4 p-4">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-stretch h-full"
                                style={{ borderRadius: "10px" }}
                            >
                                <span>
                                    <img
                                        src="/demo/images/blocks/avatars/circle/avatar-m-5.png"
                                        className="w-5rem"
                                        alt="avatar-m-5"
                                    />
                                </span>
                                <div className="flex flex-column align-items-center md:align-items-stretch ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3 text-center md:text-left">
                                        We can&lsquo;t understand how we&lsquo;ve been
                                        living without Blocks. Blocks impressed
                                        me on multiple levels. It&lsquo;s really
                                        wonderful.
                                    </p>
                                    <div className="text-900 font-medium mb-1 mt-auto">
                                        Floyd Miles
                                    </div>
                                    <div className="text-600 text-sm">
                                        Hyper, Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3x1 Grid with Offset Images" code={block4}>
                <div
                    style={{
                        background:
                            'url("/demo/images/blocks/testimonial/testimonials-4.png") no-repeat',
                        backgroundSize: "cover",
                    }}
                    className="px-4 py-8 md:px-6 lg:px-8"
                >
                    <div className="flex flex-column lg:flex-row">
                        <div className="flex-1 pr-0 lg:pr-6 pb-6 lg:pb-0">
                            <div className="mb-5 text-900 font-bold text-5xl">
                                Cursus metus aliquam eleifend
                            </div>
                            <p className="line-height-3 text-600 text-xl mb-5">
                                Egestas tellus rutrum tellus pellentesque eu
                                tincidunt tortor aliquam. Viverra vitae congue
                                eu consequat ac felis. Magna eget est lorem
                                ipsum dolor sit. Bibendum enim facilisis gravida
                                neque convallis a cras semper auctor. Porttitor
                                massa id neque aliquam vestibulum morbi. Purus
                                non enim praesent elementum facilisis leo vel
                                fringilla est. Donec massa sapien faucibus et
                                molestie ac feugiat.
                            </p>
                            <Button label="Learn More" className="text-xl" />
                        </div>
                        <div className="flex-1">
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    className="w-5rem"
                                    alt="avatar-f-1"
                                />
                                <div className="ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3">
                                        No matter where you go, Blocks is the
                                        coolest, most happening thing around! We
                                        can&lsquo;t understand how we&lsquo;ve been living
                                        without Blocks.
                                    </p>
                                    <div className="text-900 font-medium mb-1 text-right">
                                        Jane Cooper
                                    </div>
                                    <div className="text-600 text-sm text-right">
                                        Belton, Inc
                                    </div>
                                </div>
                            </div>
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start mb-5"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-m-5.png"
                                    className="w-5rem"
                                    alt="avatar-m-5"
                                />
                                <div className="ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3">
                                        We can&lsquo;t understand how we&lsquo;ve been
                                        living without Blocks. Blocks impressed
                                        me on multiple levels. It&lsquo;s really
                                        wonderful.
                                    </p>
                                    <div className="text-900 font-medium mb-1 text-right">
                                        Floyd Miles
                                    </div>
                                    <div className="text-600 text-sm text-right">
                                        Belton, Inc
                                    </div>
                                </div>
                            </div>
                            <div
                                className="surface-card shadow-2 p-4 flex flex-column align-items-center md:flex-row md:align-items-start"
                                style={{ borderRadius: "10px" }}
                            >
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    className="w-5rem"
                                    alt="avatar-f-2"
                                />
                                <div className="ml-4 mt-4 md:mt-0">
                                    <p className="mt-0 mb-3 line-height-3">
                                        Just what I was looking for. I would
                                        like to personally thank you for your
                                        outstanding product.
                                    </p>
                                    <div className="text-900 font-medium mb-1 text-right">
                                        Leslie Alexander
                                    </div>
                                    <div className="text-600 text-sm text-right">
                                        Alfred, Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Background Image" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="bg-no-repeat bg-cover bg-center border-round-xl p-7"
                        style={{
                            background:
                                "url('/demo/images/blocks/testimonial/testimonials-5.jpg')",
                        }}
                    >
                        <img
                            src="/demo/images/blocks/logos/franki-300.svg"
                            alt="Image"
                            className="block mb-4"
                        />
                        <div>
                            <p className="text-white text-4xl mt-0 mb-3 line-height-3">
                                &ldquo;Very easy to use. I made back the purchase
                                price in just 48 hours! It&lsquo;s great. It&lsquo;s is both
                                attractive and highly adaptable.&ldquo;
                            </p>
                            <div className="text-white text-xl font-medium mb-3">
                                Esther Howard
                            </div>
                            <div className="text-primary font-semibold">
                                Marketing Coordinator
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Side-by-Side" code={block6} new>
                <section className="flex flex-column lg:flex-row justify-content-between align-items-center surface-section">
                    <article className="flex flex-column w-full gap-5 px-4 py-8 md:px-6 lg:px-8">
                        <h1 className="m-0 text-900 font-bold text-7xl">
                            Designed for Developers
                        </h1>
                        <div className="flex flex-column gap-4">
                            <div className="flex align-items-center gap-2">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                <p className="mt-0 mb-0 text-base text-700 line-height-3">
                                    Aliquet nibh praesent tristique magna
                                </p>
                            </div>
                            <div className="flex align-items-center gap-2">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                <p className="mt-0 mb-0 text-base text-700 line-height-3">
                                    Ut enim blandit volutpat maecenas
                                </p>
                            </div>
                            <div className="flex align-items-center gap-2">
                                <i className="pi pi-check-circle text-primary-500 text-2xl"></i>
                                <p className="mt-0 mb-0 text-base text-700 line-height-3">
                                    Quisque non tellus orci ac auctor
                                </p>
                            </div>
                        </div>
                        <div className="flex align-items-center gap-3">
                            <Button
                                label="Try it free"
                                className="p-button-outlined"
                            ></Button>
                            <Button
                                label="Upgrade now"
                                icon="pi pi-bolt"
                                iconPos="right"
                            ></Button>
                        </div>
                    </article>
                    <article
                        className="w-full bg-cover flex align-items-end p-5 bg-center"
                        style={{
                            background:
                                "url('/demo/images/blocks/testimonial/testimonials-8.jpg')",
                            height: "44rem",
                        }}
                    >
                        <div
                            className="flex flex-column gap-5 border-round-lg p-3 w-full"
                            style={{
                                backdropFilter: "blur(12.25px)",
                                background: "rgba(255, 255, 255, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            <p className="m-0 text-0 text-2xl line-height-3 font-semibold text-center text-white">
                                “He wondered if it could be called a beach if
                                there was no sand.”
                            </p>
                            <div className="flex gap-3 align-items-center">
                                <hr
                                    className="w-full"
                                    style={{
                                        border: "1px solid rgba(222, 226, 230, 0.15)",
                                    }}
                                />
                                <div className="flex align-items-center gap-2">
                                    <i className="pi pi-star-fill text-white"></i>
                                    <i className="pi pi-star-fill text-white"></i>
                                    <i className="pi pi-star-fill text-white"></i>
                                    <i className="pi pi-star-fill text-white"></i>
                                    <i className="pi pi-star-fill text-white"></i>
                                </div>
                                <hr
                                    className="w-full"
                                    style={{
                                        border: "1px solid rgba(222, 226, 230, 0.15)",
                                    }}
                                />
                            </div>
                            <div className="flex justify-content-between">
                                <div className="flex flex-column gap-1">
                                    <p className="mt-0 mb-0 font-semibold line-height-3 text-base text-white">
                                        Johnathan Doe
                                    </p>
                                    <span className="text-50 font-light line-height-3 text-sm text-white-alpha-80">
                                        CEO & Co-Founder of Hyper
                                    </span>
                                </div>
                                <div className="flex align-items-center gap-2">
                                    <Button
                                        icon="pi pi-arrow-left"
                                        style={{
                                            border: "1px solid rgba(255, 255, 255, 0.15)",
                                        }}
                                        className="p-button-rounded bg-white-alpha-10 text-white"
                                    ></Button>
                                    <Button
                                        icon="pi pi-arrow-right"
                                        style={{
                                            border: "1px solid rgba(255, 255, 255, 0.15)",
                                        }}
                                        className="p-button-rounded bg-white-alpha-10 text-white"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </BlockViewer>

            <BlockViewer header="Centered With Logo" code={block7} new>
                <section className="surface-ground text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex justify-content-center text-center mb-4 gap-2">
                        <img
                            src="/demo/images/blocks/logos/hodly-indigo-500.svg"
                            height="38"
                            alt="hodly-indigo-500"
                        />
                    </div>
                    <div className="flex justify-content-center">
                        <h2
                            className="px-2 md:px-6 text-900 text-5xl font-medium line-height-3 mb-0"
                            style={{ maxWidth: "1350px" }}
                        >
                            It is a fantastic component library for web
                            development. The components are easy to use,
                            well-designed, and the documentation and support are
                            top-notch. Highly recommend!”
                        </h2>
                    </div>
                    <img
                        src="/demo/images/blocks/testimonial/testimonials-3.png"
                        width="56"
                        height="56"
                        className="mt-4"
                        alt="testimonials-3"
                    />
                    <p className="text-900 font-semibold text-xl line-height-3 text-center">
                        Annie Lanphear
                    </p>
                    <p className="text-600 font-normal line-height-1 mt-2 text-md text-center">
                        Software Engineer
                    </p>
                </section>
            </BlockViewer>
        </>
    );
};

export default Testimonials;
