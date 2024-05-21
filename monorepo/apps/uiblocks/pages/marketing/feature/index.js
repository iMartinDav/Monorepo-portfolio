import React, { useState } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Carousel } from "primereact/carousel";

const Feature = () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [carouselPage, setCarouselPage] = useState(0);

    const screenshots = [
        {
            name: "Screenshot 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/demo/images/blocks/feature/feature-sliding-1.jpg",
        },
        {
            name: "Screenshot 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/demo/images/blocks/feature/feature-sliding-2.jpg",
        },
        {
            name: "Screenshot 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/demo/images/blocks/feature/feature-sliding-3.jpg",
        },
    ];

    const itemTemplate = (screenshot) => {
        return (
            <div className="p-5 text-center">
                <img
                    src={screenshot.image}
                    className="w-full h-full"
                    alt={screenshot.description}
                />
            </div>
        );
    };

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Product, </span>
        <span className="text-blue-600">Many Solutions</span>
    </div>
    <div className="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Built for Developers</div>
            <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
            <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
            <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                <i className="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Trusted Security</div>
            <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="px-4 py-8 md:px-6 lg:px-8" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
    <div className="text-blue-600 text-xl font-medium mb-3">ALL-IN-ONE</div>
    <div className="text-900 text-3xl font-bold mb-3">Focus on the work that matters</div>
    <div className="text-700">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div className="grid mt-7">
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-heart text-5xl "></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">Simpler Interface</div>
                <div className="text-700 mb-4 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <Button label="Learn More" className="p-button-text font-bold" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-wifi text-5xl"></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">Extensive Connectivity</div>
                <div className="text-700 mb-4 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                <Button label="Learn More" className="p-button-text font-bold" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-lock text-5xl"></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">Magical Privacy</div>
                <div className="text-700 mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                <Button label="Learn More" className="p-button-text font-bold" />
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6 flex align-items-center">
            <div>
                <div className="text-blue-600 text-xl mb-3">ALL-IN-ONE</div>
                <div className="text-900 text-4xl font-bold mb-6">Mobile Experience</div>

                <div className="grid">
                    <div className="col-12 md:col-6">
                        <div className="text-900 font-medium mb-2">Fully Managed</div>
                        <div className="text-700 mb-3 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="text-900 font-medium mb-2">Fully Secure</div>
                        <div className="text-700 mb-3 line-height-3">Eu turpis egestas pretium aenean pharetra.</div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="text-900 font-medium mb-2">Unlimited & Free</div>
                        <div className="text-700 mb-3 line-height-3">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="text-900 font-medium mb-2">Daily Spending</div>
                        <div className="text-700 mb-3 line-height-3">Risus nec feugiat in fermentum posuere urna nec.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6">
            <img src="/demo/images/blocks/feature/feature-1.png" alt="Image" className="w-full" />
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <img src="/demo/images/blocks/feature/feature-2.png" alt="Image" className="w-full" />
        </div>
        <div className="col-12 md:col-6 md:pl-6">
            <div className="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium" style={{ borderRadius: '30px' }}>
                <i className="pi pi-star-fill mr-2"></i>
                <span>Open Source API</span>
            </div>
            <div className="text-4xl font-bold text-900 mb-3">Redefine Possible</div>
            <div className="text-700 text-lg mb-5 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>

            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Simple to Use</div>
                    <div className="text-700">Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                </div>
            </div>
            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Personalized Design</div>
                    <div className="text-700">Eu turpis egestas pretium aenean pharetra.</div>
                </div>
            </div>
            <div className="flex align-items-center mb-4">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Status Notifications</div>
                    <div className="text-700">Tortor dignissim convallis aenean et tortor at risus viverra.</div>
                </div>
            </div>
            <div className="flex align-items-center">
                <i className="pi pi-check text-green-600 mr-3"></i>
                <div>
                    <div className="text-900 font-medium mb-2">Interactive Templates</div>
                    <div className="text-700">Risus nec feugiat in fermentum posuere urna nec.</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <div className="pr-0 md:pr-8">
                <div className="text-blue-500 font-bold text-5xl mb-5">Manage Your Corporation</div>

                <div className="mb-5 border-blue-500 pl-3" style={{ borderLeft: '4px solid' }}>
                    <span className="text-white font-bold text-2xl">Simpler Interface</span>
                    <div className="text-gray-400 line-height-3 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>

                <div className="mb-5">
                    <span className="text-gray-400 font-bold text-2xl">Extensive Connectivity</span>
                    <div className="text-gray-400 line-height-3 mt-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                </div>

                <div className="mb-5">
                    <span className="text-gray-400 font-bold text-2xl">Magical Privacy</span>
                    <div className="text-gray-400 line-height-3 mt-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6">
            <img src="/demo/images/blocks/feature/feature-3.png" alt="Image" className="w-full" />
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 md:col-6">
            <div className="pr-0 md:pr-8">
                <div className="text-900 font-bold text-4xl mb-3">Easy to Use</div>
                <div className="text-700 line-height-3 mb-5">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>

                <div className="mb-5 flex">
                    <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                        <span className="bg-cyan-600 text-white flex align-items-center justify-content-center border-circle shadow-2" style={{ minWidth: '2.5rem', minHeight: '2.5rem', border: '2px solid #ffffff' }}>
                            <i className="pi pi-image text-2xl"></i>
                        </span>
                        <div className="h-full bg-cyan-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                    </div>
                    <div className="ml-3">
                        <div className="font-medium text-900 mb-2">Create a wireframe</div>
                        <span className="line-height-3 text-700">Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin. Eu mi bibendum neque egestas congue quisque egestas diam.</span>
                    </div>
                </div>

                <div className="mb-5 flex">
                    <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                        <span className="bg-orange-500 text-white flex align-items-center justify-content-center border-circle shadow-2" style={{ minWidth: '2.5rem', minHeight: '2.5rem', border: '2px solid #ffffff' }}>
                            <i className="pi pi-android text-2xl"></i>
                        </span>
                        <div className="h-full bg-orange-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                    </div>
                    <div className="ml-3">
                        <div className="font-medium text-900 mb-2">Artificial Intelligence</div>
                        <span className="line-height-3 text-700">Erat pellentesque adipiscing commodo elit at imperdiet dui. Morbi tristique senectus et netus et malesuada fames.</span>
                    </div>
                </div>

                <div className="mb-5 flex">
                    <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                        <span className="bg-purple-500 text-white flex align-items-center justify-content-center border-circle shadow-2" style={{ minWidth: '2.5rem', minHeight: '2.5rem', border: '2px solid #ffffff' }}>
                            <i className="pi pi-globe text-2xl"></i>
                        </span>
                        <div className="h-full bg-purple-500" style={{ width: '2px', minHeight: '4rem' }}></div>
                    </div>
                    <div className="ml-3">
                        <div className="font-medium text-900 mb-2">Deploy to Production</div>
                        <span className="line-height-3 text-700">Adipiscing at in tellus integer. Lorem donec massa sapien faucibus et molestie ac feugiat. Laoreet sit amet cursus sit. Velit ut tortor pretium viverra.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 md:col-6">
            <img src="/demo/images/blocks/feature/feature-4.png" alt="Image" className="w-full" />
        </div>
    </div>
</div>
    `;

    const block7 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-900 text-3xl mb-3 text-center">Build The Way You Want</div>
    <div className="text-700 text-center mb-3">Risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem.</div>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-1.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Ornare Arcu Odio</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-2.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Sem Nulla Pharetra</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-3.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Facilisi Etiam Dignissim</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
            <img src="/demo/images/blocks/feature/feature-illustration-4.svg" alt="Image" className="w-full" />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">Risus Feugiat In Ante</div>
            <span className="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <a tabIndex="0" className="text-blue-500 font-medium flex align-items-center mt-2">
                <span>Explore</span>
                <i className="pi pi-arrow-right ml-3"></i>
            </a>
        </div>
    </div>
</div>
    `;

    const block8 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
    <div className="font-bold text-900 text-3xl mb-3 text-center">Explore The Features</div>
    <div className="text-700 text-center mb-5 line-height-3">Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque vitae tempus quam pellentesque nec nam.</div>
    <div className="flex lg:justify-content-center mb-5">
        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mr-8" />
        </div>
        <div className="flex flex-column align-items-center w-2rem">
            <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>1</span>
            <div className="h-full bg-blue-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">Ornare Arcu Odio</div>
            <span className="block text-700 line-height-3 mb-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Sed lectus vestibulum</span> mattis ullamcorper velit. Laoreet sit amet cursus sit.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Fames ac turpis</span> egestas sed tempus urna et. Cursus turpis massa.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-1.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
    </div>
    <div className="flex justify-content-center mb-5">
        <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
            <div className="text-900 text-xl mb-2 font-medium">A diam maecenas</div>
            <span className="block text-700 line-height-3 mb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Quis hendrerit dolor</span> magna eget est. Pellentesque pulvinar pellentesque.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Lectus urna duis</span> convallis convallis tellus id interdum velit laoreet.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
        <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
            <span className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>2</span>
            <div className="h-full bg-yellow-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
            <img src="/demo/images/blocks/feature/feature-timeline-2.png" alt="Image" className="w-full mr-8" />
        </div>
    </div>
    <div className="flex justify-content-center">
        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mr-8" />
        </div>
        <div className="flex flex-column align-items-center w-2rem">
            <span className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>3</span>
            <div className="h-full bg-cyan-500" style={{ width: '2px', minHeight: '4rem' }}></div>
        </div>
        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">Pharetra et ultrices neque</div>
            <span className="block text-700 line-height-3 mb-3">Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.</span>
            <div className="pt-3 border-top-1 border-300">
                <div className="mb-2 line-height-3"><span className="text-900 font-medium">Egestas dui id</span> ornare arcu odio ut. Mi bibendum neque egestas congue.</div>
                <div className="line-height-3"><span className="text-900 font-medium">Sed velit dignissim</span> sodales ut eu. Massa placerat duis ultricies lacus.</div>
            </div>
            <img src="/demo/images/blocks/feature/feature-timeline-3.png" alt="Image" className="w-full mt-3 block lg:hidden" />
        </div>
    </div>
</div>
    `;

    const block9 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-900 text-3xl mb-3 text-center">These apps are ready to build</div>
    <div className="text-700 text-center mb-5 line-height-3">Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Nibh sit amet commodo nulla facilisi nullam vehicula.</div>
    <div className="mb-4 flex flex-wrap justify-content-center">
        <span className="inline-flex align-items-center px-3 py-2 bg-blue-500 text-white mb-3 mr-3" style={{ borderRadius: '40px' }}>
            <i className="pi pi-credit-card mr-2"></i>
            <span className="font-medium">Ornare Arcu</span>
        </span>
        <span className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3" style={{ borderRadius: '40px' }}>
            <i className="pi pi-envelope mr-2"></i>
            <span className="font-medium">Diam Maecenas</span>
        </span>
        <span className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3" style={{ borderRadius: '40px' }}>
            <i className="pi pi-link mr-2"></i>
            <span className="font-medium">Ultrices Neque</span>
        </span>
        <span className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 " style={{ borderRadius: '40px' }}>
            <i className="pi pi-moon mr-2"></i>
            <span className="font-medium">Facilisi Etiam</span>
        </span>
    </div>
    <div className="flex flex-wrap border-300 border-round border-1 p-5 overflow-hidden">
        <div className="flex align-items-center w-full lg:w-6 pr-0 lg:pr-8">
            <div className="text-center lg:text-left mb-3 lg:mb-0">
                <div className="font-medium text-2xl text-900 mb-3">Vitae semper quis lectus nulla</div>
                <p className="mt-0 mb-3 line-height-3 text-700">Pretium aenean pharetra magna ac placerat vestibulum. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim. Vulputate odio ut enim blandit volutpat.</p>
                <Button label="Learn More" className="p-button-outlined" />
            </div>
        </div>
        <div className="w-full lg:w-6 text-center lg:text-right">
            <img src="/demo/images/blocks/feature/feature-chips.png" alt="Image" className="w-full lg:w-auto" />
        </div>
    </div>
</div>
    `;

    const block10 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-900 text-4xl mb-3">More reasons people around the world prefer us</div>
    <div className="text-700 mb-5 line-height-3">Egestas dui id ornare arcu odio. Egestas fringilla phasellus faucibus scelerisque eleifend.</div>
    <div className="p-3 border-round surface-50">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-6 p-3">
                <div className="text-lg text-900 mb-3 font-medium">Services</div>
                <Accordion>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-cloud text-sm"></i>
                        </span>
                        <span>Cloud Services</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-chart-bar text-sm"></i>
                        </span>
                        <span>Analytic Dashboard</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-key text-sm"></i>
                        </span>
                        <span>Private Keys</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-file-pdf text-sm"></i>
                        </span>
                        <span>PDF Export</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-book text-sm"></i>
                        </span>
                        <span>Documentation</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="w-full lg:w-6 p-3">
                <div className="text-lg text-900 mb-3 font-medium">Support</div>
                <Accordion>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-filter text-sm"></i>
                        </span>
                        <span>Advanced Filtering</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-credit-card text-sm"></i>
                        </span>
                        <span>Payment Gateway</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-map-marker text-sm"></i>
                        </span>
                        <span>Device Tracking</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-tags text-sm"></i>
                        </span>
                        <span>Tag Management</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                    <AccordionTab header={<div className="flex align-items-center">
                        <span className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700" style={{ width: '2rem', height: '2rem' }}>
                            <i className="pi pi-eye text-sm"></i>
                        </span>
                        <span>Privacy Settings</span></div>}>
                        <p className="line-height-3">Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
</div>
    `;

    const block11 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center font-bold text-blue-600 mb-4">DISCOVER YOUR POTENTIAL</div>
    <div className="text-center font-bold text-900 mb-5 text-4xl">One Simple Platform</div>
    <div className="grid">
        <div className="col-12 lg:col-6 flex align-items-center justify-content-center">
            {activeTab1 == 0 && <img src="/demo/images/blocks/feature/feature-illustration-1.svg" alt="Image" className="w-full md:w-9" />}
            {activeTab1 == 1 && <img src="/demo/images/blocks/feature/feature-illustration-2.svg" alt="Image" className="w-full md:w-9" />}
            {activeTab1 == 2 && <img src="/demo/images/blocks/feature/feature-illustration-3.svg" alt="Image" className="w-full md:w-9" />}
        </div>
        <div className="col-12 lg:col-6 mt-5 lg:mt-0">
            <ul className="list-none m-0 p-0">
                <li onMouseOver={() => setActiveTab1(0)} className={classNames('border-left-2 p-4 cursor-pointer', { 'surface-border': activeTab1 !== 0, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 0 })}>
                    <div className="text-2xl font-medium">Optimize your apps</div>
                    <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li onMouseOver={() => setActiveTab1(1)} className={classNames('border-left-2 p-4 cursor-pointer', { 'surface-border': activeTab1 !== 1, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 1 })}>
                    <div className="text-2xl font-medium">Analyze competitors</div>
                    <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li onMouseOver={() => setActiveTab1(2)} className={classNames('border-left-2 p-4 cursor-pointer', { 'surface-border': activeTab1 !== 2, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 2 })}>
                    <div className="text-2xl font-medium">Track Progress</div>
                    <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
    `;

    const block12 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center font-bold text-blue-600 mb-4">DISCOVER YOUR POTENTIAL</div>
    <div className="text-center font-bold text-900 mb-5 text-4xl">One Simple Platform</div>
    <div className="flex align-items-center justify-content-center py-4">
        {activeTab2 == 0 && <img src="/demo/images/blocks/feature/feature-illustration-1.svg" alt="Image" className="w-full md:w-6" />}
        {activeTab2 == 1 && <img src="/demo/images/blocks/feature/feature-illustration-2.svg" alt="Image" className="w-full md:w-6" />}
        {activeTab2 == 2 && <img src="/demo/images/blocks/feature/feature-illustration-3.svg" alt="Image" className="w-full md:w-6" />}
    </div>
    <ul className="grid list-none mx-0 mb-0 mt-5 p-0">
        <li onMouseOver={() => setActiveTab2(0)} className={classNames('col-12 lg:col-4 border-top-2 p-4 cursor-pointer', { 'surface-border': activeTab2 !== 0, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 0 })}>
            <div className="text-2xl font-medium">Optimize your apps</div>
            <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
        <li onMouseOver={() => setActiveTab2(1)} className={classNames('col-12 lg:col-4 border-top-2 p-4 cursor-pointer', { 'surface-border': activeTab2 !== 1, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 1 })}>
            <div className="text-2xl font-medium">Analyze competitors</div>
            <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
        <li onMouseOver={() => setActiveTab2(2)} className={classNames('col-12 lg:col-4 border-top-2 p-4 cursor-pointer', { 'surface-border': activeTab2 !== 2, 'text-blue-900 bg-blue-50 border-blue-500': activeTab2 === 2 })}>
            <div className="text-2xl font-medium">Track Progress</div>
            <p className="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
        </li>
    </ul>
</div>
    `;
    const block13 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center bg-no-repeat bg-cover border-round px-6 py-8" style={{ background: "url('/demo/images/blocks/feature/overlapping-cards.jpg')" }}>
        <div className="text-white text-6xl font-semibold mb-3">
            Augue Lacus <span className="text-primary">Viverra</span> Vitae
        </div>
        <p className="text-gray-300 text-xl mt-0 mb-8 line-height-3">Phasellus vestibulum lorem sed risus ultricies. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Aenean euismod elementum nisi quis eleifend quam.</p>
    </div>
    <div className="flex flex-column lg:flex-row px-4 lg:px-6 gap-5 -mt-8">
        <div className="flex flex-column lg:w-4">
            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i className="pi pi-sliders-v mr-2 text-2xl"></i>
                <span className="font-semibold text-2xl">Lectus Arcu</span>
            </div>
            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p className="mt-0 mb-6 line-height-3 text-xl text-00">Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sollicitudin ac orci phasellus egestas tellus rutrum.</p>
                <div className="text-center">
                    <Button label="Learn More" icon="pi pi-arrow-right" iconPos="right" className="p-button-text"></Button>
                </div>
            </div>
        </div>
        <div className="flex flex-column lg:w-4">
            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i className="pi pi-moon mr-2 text-2xl"></i>
                <span className="font-semibold text-2xl">Sollicitudin Ac</span>
            </div>
            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p className="mt-0 mb-6 line-height-3 text-xl text-00">Faucibus ornare suspendisse sed nisi lacus. Urna nunc id cursus metus aliquam eleifend. Augue lacus viverra vitae congue eu consequat ac.</p>
                <div className="text-center">
                    <Button label="Learn More" icon="pi pi-arrow-right" iconPos="right" className="p-button-text"></Button>
                </div>
            </div>
        </div>
        <div className="flex flex-column lg:w-4">
            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                <i className="pi pi-sun mr-2 text-2xl"></i>
                <span className="font-semibold text-2xl">Nec Nisl</span>
            </div>
            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                <p className="mt-0 mb-6 line-height-3 text-xl text-00">Montes nascetur ridiculus mus mauris. Enim tortor at auctor urna nunc id cursus metus. Sed odio morbi quis commodo odio.</p>
                <div className="text-center">
                    <Button label="Learn More" icon="pi pi-arrow-right" iconPos="right" className="p-button-text"></Button>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block14 = `
<div className="surface-section px-4 py-2 md:px-6 lg:px-8">
    <div className="text-center px-6 py-8">
        <div className="text-900 text-4xl font-semibold mb-3">Move Work Forward</div>
        <p className="text-700 text-xl my-0 line-height-3">Orci dapibus ultrices in iaculis. Quam adipiscing vitae proin sagittis nisl. Amet massa vitae tortor condimentum lacinia quis vel eros donec.</p>
    </div>
    <div className="grid mb-4">
        <div className="col-12 md:col-4 mb-4 px-5">
            <Button className={'p-link p-3 shadow-2 mb-3 inline-block ' + (carouselPage === 0 ? 'bg-primary' : 'bg-bluegray-400 text-white')} style={{ borderRadius: '10px' }} onClick={() => setCarouselPage(0)}>
                <i className="pi pi-map text-4xl"></i>
            </Button>
            <div className="text-bluegray-500 mb-3 font-medium">Dynamic Mapping</div>
            <div className="text-900 mb-3 font-medium text-xl">Collect and organize mappings</div>
            <span className="text-600 line-height-3">Diam sollicitudin tempor id eu. Ut consequat semper viverra nam libero justo laoreet sit. Mi sit amet mauris commodo quis imperdiet massa. Euismod quis viverra.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <Button className={'p-link p-3 shadow-2 mb-3 inline-block ' + (carouselPage === 1 ? 'bg-primary' : 'bg-bluegray-400 text-white')} style={{ borderRadius: '10px' }} onClick={() => setCarouselPage(1)}>
                <i className="pi pi-sync text-4xl"></i>
            </Button>
            <div className="text-bluegray-500 mb-3 font-medium">Seamless Sync</div>
            <div className="text-900 mb-3 font-medium text-xl">Never touch plaintext data</div>
            <span className="text-600 line-height-3">Massa id neque aliquam vestibulum. Tristique senectus et netus et malesuada fames ac. A scelerisque purus semper eget duis at tellus at. Orci phasellus egestas tellus rutrum.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <Button className={'p-link p-3 shadow-2 mb-3 inline-block ' + (carouselPage === 2 ? 'bg-primary' : 'bg-bluegray-400 text-white')} style={{ borderRadius: '10px' }} onClick={() => setCarouselPage(2)}>
                <i className="pi pi-shield text-4xl"></i>
            </Button>
            <div className="text-bluegray-500 mb-3 font-medium">Maximum Security</div>
            <div className="text-900 mb-3 font-medium text-xl">Process encrypted data</div>
            <span className="text-600 line-height-3">Pellentesque eu tincidunt tortor aliquam nulla. Nulla facilisi cras fermentum odio eu. Ultrices in iaculis nunc sed augue. Nullam vehicula ipsum a arcu cursus.</span>
        </div>
    </div>
    <div className="surface-100 align-items-center flex flex-row border-round mb-8">
        <div className="col-12 lg:col w-full">
            <Carousel value={screenshots} numVisible={1} numScroll={1} circular={false} itemTemplate={itemTemplate} page={carouselPage} onPageChange={(e) => setCarouselPage(e.page)} showIndicators={false} showNavigators={false} />
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Feature Sections</div>
            <BlockViewer header="Centered 3x3 Grid" code={block1} free>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div className="mb-3 font-bold text-3xl">
                        <span className="text-900">One Product, </span>
                        <span className="text-blue-600">Many Solutions</span>
                    </div>
                    <div className="text-700 mb-6">
                        Ac turpis egestas maecenas pharetra convallis posuere
                        morbi leo urna.
                    </div>
                    <div className="grid">
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-desktop text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Built for Developers
                            </div>
                            <span className="text-700 line-height-3">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-lock text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                End-to-End Encryption
                            </div>
                            <span className="text-700 line-height-3">
                                Risus nec feugiat in fermentum posuere urna nec.
                                Posuere sollicitudin aliquam ultrices sagittis.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Easy to Use
                            </div>
                            <span className="text-700 line-height-3">
                                Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Neque volutpat ac tincidunt vitae
                                semper.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-globe text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Fast & Global Support
                            </div>
                            <span className="text-700 line-height-3">
                                Fermentum et sollicitudin ac orci phasellus
                                egestas tellus rutrum tellus.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-github text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Open Source
                            </div>
                            <span className="text-700 line-height-3">
                                Nec tincidunt praesent semper feugiat. Sed
                                adipiscing diam donec adipiscing tristique risus
                                nec feugiat.{" "}
                            </span>
                        </div>
                        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                            <span
                                className="p-3 shadow-2 mb-3 inline-block surface-card"
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="pi pi-shield text-4xl text-blue-500"></i>
                            </span>
                            <div className="text-900 text-xl mb-3 font-medium">
                                Trusted Security
                            </div>
                            <span className="text-700 line-height-3">
                                Mattis rhoncus urna neque viverra justo nec
                                ultrices. Id cursus metus aliquam eleifend.
                            </span>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3x1 with Colored Icons" code={block2}>
                <div
                    className="px-4 py-8 md:px-6 lg:px-8"
                    style={{
                        background:
                            "radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                >
                    <div className="text-blue-600 text-xl font-medium mb-3">
                        ALL-IN-ONE
                    </div>
                    <div className="text-900 text-3xl font-bold mb-3">
                        Focus on the work that matters
                    </div>
                    <div className="text-700">
                        Ac turpis egestas maecenas pharetra convallis posuere
                        morbi leo urna.
                    </div>
                    <div className="grid mt-7">
                        <div className="col-12 md:col-4">
                            <div className="shadow-1 p-5 surface-card text-center border-round">
                                <div className="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                                    <i className="pi pi-heart text-5xl "></i>
                                </div>
                                <div className="text-900 font-medium text-2xl mb-4">
                                    Simpler Interface
                                </div>
                                <div className="text-700 mb-4 line-height-3">
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                </div>
                                <Button
                                    label="Learn More"
                                    className="p-button-text font-bold"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="shadow-1 p-5 surface-card text-center border-round">
                                <div className="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                                    <i className="pi pi-wifi text-5xl"></i>
                                </div>
                                <div className="text-900 font-medium text-2xl mb-4">
                                    Extensive Connectivity
                                </div>
                                <div className="text-700 mb-4 line-height-3">
                                    Risus nec feugiat in fermentum posuere urna
                                    nec. Posuere sollicitudin aliquam ultrices
                                    sagittis.
                                </div>
                                <Button
                                    label="Learn More"
                                    className="p-button-text font-bold"
                                />
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="shadow-1 p-5 surface-card text-center border-round">
                                <div className="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                                    <i className="pi pi-lock text-5xl"></i>
                                </div>
                                <div className="text-900 font-medium text-2xl mb-4">
                                    Magical Privacy
                                </div>
                                <div className="text-700 mb-4 line-height-3">
                                    Laoreet sit amet cursus sit. Velit ut tortor
                                    pretium viverra. Sollicitudin aliquam
                                    ultrices sagittis orci.
                                </div>
                                <Button
                                    label="Learn More"
                                    className="p-button-text font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Feature Grid with Image" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 flex align-items-center">
                            <div>
                                <div className="text-blue-600 text-xl mb-3">
                                    ALL-IN-ONE
                                </div>
                                <div className="text-900 text-4xl font-bold mb-6">
                                    Mobile Experience
                                </div>

                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <div className="text-900 font-medium mb-2">
                                            Fully Managed
                                        </div>
                                        <div className="text-700 mb-3 line-height-3">
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit.
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="text-900 font-medium mb-2">
                                            Fully Secure
                                        </div>
                                        <div className="text-700 mb-3 line-height-3">
                                            Eu turpis egestas pretium aenean
                                            pharetra.
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="text-900 font-medium mb-2">
                                            Unlimited & Free
                                        </div>
                                        <div className="text-700 mb-3 line-height-3">
                                            Tortor dignissim convallis aenean et
                                            tortor at risus viverra.
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="text-900 font-medium mb-2">
                                            Daily Spending
                                        </div>
                                        <div className="text-700 mb-3 line-height-3">
                                            Risus nec feugiat in fermentum
                                            posuere urna nec.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <img
                                src="/demo/images/blocks/feature/feature-1.png"
                                alt="Image"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Feature List with Image" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <img
                                src="/demo/images/blocks/feature/feature-2.png"
                                alt="Image"
                                className="w-full"
                            />
                        </div>
                        <div className="col-12 md:col-6 md:pl-6">
                            <div
                                className="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium"
                                style={{ borderRadius: "30px" }}
                            >
                                <i className="pi pi-star-fill mr-2"></i>
                                <span>Open Source API</span>
                            </div>
                            <div className="text-4xl font-bold text-900 mb-3">
                                Redefine Possible
                            </div>
                            <div className="text-700 text-lg mb-5 line-height-3 mb-5">
                                Ac turpis egestas maecenas pharetra convallis
                                posuere morbi leo urna.
                            </div>

                            <div className="flex align-items-center mb-4">
                                <i className="pi pi-check text-green-600 mr-3"></i>
                                <div>
                                    <div className="text-900 font-medium mb-2">
                                        Simple to Use
                                    </div>
                                    <div className="text-700">
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit.
                                    </div>
                                </div>
                            </div>
                            <div className="flex align-items-center mb-4">
                                <i className="pi pi-check text-green-600 mr-3"></i>
                                <div>
                                    <div className="text-900 font-medium mb-2">
                                        Personalized Design
                                    </div>
                                    <div className="text-700">
                                        Eu turpis egestas pretium aenean
                                        pharetra.
                                    </div>
                                </div>
                            </div>
                            <div className="flex align-items-center mb-4">
                                <i className="pi pi-check text-green-600 mr-3"></i>
                                <div>
                                    <div className="text-900 font-medium mb-2">
                                        Status Notifications
                                    </div>
                                    <div className="text-700">
                                        Tortor dignissim convallis aenean et
                                        tortor at risus viverra.
                                    </div>
                                </div>
                            </div>
                            <div className="flex align-items-center">
                                <i className="pi pi-check text-green-600 mr-3"></i>
                                <div>
                                    <div className="text-900 font-medium mb-2">
                                        Interactive Templates
                                    </div>
                                    <div className="text-700">
                                        Risus nec feugiat in fermentum posuere
                                        urna nec.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Feature List" code={block5}>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="pr-0 md:pr-8">
                                <div className="text-blue-500 font-bold text-5xl mb-5">
                                    Manage Your Corporation
                                </div>

                                <div
                                    className="mb-5 border-blue-500 pl-3"
                                    style={{ borderLeft: "4px solid" }}
                                >
                                    <span className="text-white font-bold text-2xl">
                                        Simpler Interface
                                    </span>
                                    <div className="text-gray-400 line-height-3 mt-3">
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <span className="text-gray-400 font-bold text-2xl">
                                        Extensive Connectivity
                                    </span>
                                    <div className="text-gray-400 line-height-3 mt-3">
                                        Risus nec feugiat in fermentum posuere
                                        urna nec. Posuere sollicitudin aliquam
                                        ultrices sagittis.
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <span className="text-gray-400 font-bold text-2xl">
                                        Magical Privacy
                                    </span>
                                    <div className="text-gray-400 line-height-3 mt-3">
                                        Laoreet sit amet cursus sit. Velit ut
                                        tortor pretium viverra. Sollicitudin
                                        aliquam ultrices sagittis orci.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <img
                                src="/demo/images/blocks/feature/feature-3.png"
                                alt="Image"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Feature Timeline with Image" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="pr-0 md:pr-8">
                                <div className="text-900 font-bold text-4xl mb-3">
                                    Easy to Use
                                </div>
                                <div className="text-700 line-height-3 mb-5">
                                    Ac turpis egestas maecenas pharetra
                                    convallis posuere morbi leo urna.
                                </div>

                                <div className="mb-5 flex">
                                    <div
                                        className="flex flex-column align-items-center"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-cyan-600 text-white flex align-items-center justify-content-center border-circle shadow-2"
                                            style={{
                                                minWidth: "2.5rem",
                                                minHeight: "2.5rem",
                                                border: "2px solid #ffffff",
                                            }}
                                        >
                                            <i className="pi pi-image text-2xl"></i>
                                        </span>
                                        <div
                                            className="h-full bg-cyan-500"
                                            style={{
                                                width: "2px",
                                                minHeight: "4rem",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="font-medium text-900 mb-2">
                                            Create a wireframe
                                        </div>
                                        <span className="line-height-3 text-700">
                                            Imperdiet nulla malesuada
                                            pellentesque elit eget gravida. Dui
                                            sapien eget mi proin. Eu mi bibendum
                                            neque egestas congue quisque egestas
                                            diam.
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-5 flex">
                                    <div
                                        className="flex flex-column align-items-center"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-orange-500 text-white flex align-items-center justify-content-center border-circle shadow-2"
                                            style={{
                                                minWidth: "2.5rem",
                                                minHeight: "2.5rem",
                                                border: "2px solid #ffffff",
                                            }}
                                        >
                                            <i className="pi pi-android text-2xl"></i>
                                        </span>
                                        <div
                                            className="h-full bg-orange-500"
                                            style={{
                                                width: "2px",
                                                minHeight: "4rem",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="font-medium text-900 mb-2">
                                            Artificial Intelligence
                                        </div>
                                        <span className="line-height-3 text-700">
                                            Erat pellentesque adipiscing commodo
                                            elit at imperdiet dui. Morbi
                                            tristique senectus et netus et
                                            malesuada fames.
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-5 flex">
                                    <div
                                        className="flex flex-column align-items-center"
                                        style={{ width: "2rem" }}
                                    >
                                        <span
                                            className="bg-purple-500 text-white flex align-items-center justify-content-center border-circle shadow-2"
                                            style={{
                                                minWidth: "2.5rem",
                                                minHeight: "2.5rem",
                                                border: "2px solid #ffffff",
                                            }}
                                        >
                                            <i className="pi pi-globe text-2xl"></i>
                                        </span>
                                        <div
                                            className="h-full bg-purple-500"
                                            style={{
                                                width: "2px",
                                                minHeight: "4rem",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="font-medium text-900 mb-2">
                                            Deploy to Production
                                        </div>
                                        <span className="line-height-3 text-700">
                                            Adipiscing at in tellus integer.
                                            Lorem donec massa sapien faucibus et
                                            molestie ac feugiat. Laoreet sit
                                            amet cursus sit. Velit ut tortor
                                            pretium viverra.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <img
                                src="/demo/images/blocks/feature/feature-4.png"
                                alt="Image"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="4x1 with Illustrations" code={block7}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-900 text-3xl mb-3 text-center">
                        Build The Way You Want
                    </div>
                    <div className="text-700 text-center mb-3">
                        Risus feugiat in ante metus. Lacus suspendisse faucibus
                        interdum posuere lorem.
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-1.svg"
                                alt="Image"
                                className="w-full"
                            />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">
                                Ornare Arcu Odio
                            </div>
                            <span className="text-700 line-height-3">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend.
                            </span>
                            <a
                                tabIndex="0"
                                className="text-blue-500 font-medium flex align-items-center mt-2"
                            >
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-2.svg"
                                alt="Image"
                                className="w-full"
                            />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">
                                Sem Nulla Pharetra
                            </div>
                            <span className="text-700 line-height-3">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend.
                            </span>
                            <a
                                tabIndex="0"
                                className="text-blue-500 font-medium flex align-items-center mt-2"
                            >
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-3.svg"
                                alt="Image"
                                className="w-full"
                            />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">
                                Facilisi Etiam Dignissim
                            </div>
                            <span className="text-700 line-height-3">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend.
                            </span>
                            <a
                                tabIndex="0"
                                className="text-blue-500 font-medium flex align-items-center mt-2"
                            >
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                        <div className="w-full lg:w-6 xl:w-3 p-5">
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-4.svg"
                                alt="Image"
                                className="w-full"
                            />
                            <div className="mt-3 mb-2 font-medium text-900 text-xl">
                                Risus Feugiat In Ante
                            </div>
                            <span className="text-700 line-height-3">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend.
                            </span>
                            <a
                                tabIndex="0"
                                className="text-blue-500 font-medium flex align-items-center mt-2"
                            >
                                <span>Explore</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Timeline" code={block8}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
                    <div className="font-bold text-900 text-3xl mb-3 text-center">
                        Explore The Features
                    </div>
                    <div className="text-700 text-center mb-5 line-height-3">
                        Libero justo laoreet sit amet cursus sit amet dictum.
                        Auctor neque vitae tempus quam pellentesque nec nam.
                    </div>
                    <div className="flex lg:justify-content-center mb-5">
                        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-1.png"
                                alt="Image"
                                className="w-full mr-8"
                            />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem">
                            <span
                                className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle"
                                style={{
                                    minWidth: "2.5rem",
                                    minHeight: "2.5rem",
                                }}
                            >
                                1
                            </span>
                            <div
                                className="h-full bg-blue-500"
                                style={{ width: "2px", minHeight: "4rem" }}
                            ></div>
                        </div>
                        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                            <div className="text-900 text-xl mb-2 font-medium">
                                Ornare Arcu Odio
                            </div>
                            <span className="block text-700 line-height-3 mb-3">
                                Quisque sagittis purus sit amet volutpat
                                consequat mauris nunc. Scelerisque eleifend.
                            </span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3">
                                    <span className="text-900 font-medium">
                                        Sed lectus vestibulum
                                    </span>{" "}
                                    mattis ullamcorper velit. Laoreet sit amet
                                    cursus sit.
                                </div>
                                <div className="line-height-3">
                                    <span className="text-900 font-medium">
                                        Fames ac turpis
                                    </span>{" "}
                                    egestas sed tempus urna et. Cursus turpis
                                    massa.
                                </div>
                            </div>
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-1.png"
                                alt="Image"
                                className="w-full mt-3 block lg:hidden"
                            />
                        </div>
                    </div>
                    <div className="flex justify-content-center mb-5">
                        <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
                            <div className="text-900 text-xl mb-2 font-medium">
                                A diam maecenas
                            </div>
                            <span className="block text-700 line-height-3 mb-3">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit.
                            </span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3">
                                    <span className="text-900 font-medium">
                                        Quis hendrerit dolor
                                    </span>{" "}
                                    magna eget est. Pellentesque pulvinar
                                    pellentesque.
                                </div>
                                <div className="line-height-3">
                                    <span className="text-900 font-medium">
                                        Lectus urna duis
                                    </span>{" "}
                                    convallis convallis tellus id interdum velit
                                    laoreet.
                                </div>
                            </div>
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-2.png"
                                alt="Image"
                                className="w-full mt-3 block lg:hidden"
                            />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
                            <span
                                className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle"
                                style={{
                                    minWidth: "2.5rem",
                                    minHeight: "2.5rem",
                                }}
                            >
                                2
                            </span>
                            <div
                                className="h-full bg-yellow-500"
                                style={{ width: "2px", minHeight: "4rem" }}
                            ></div>
                        </div>
                        <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-2.png"
                                alt="Image"
                                className="w-full mr-8"
                            />
                        </div>
                    </div>
                    <div className="flex justify-content-center">
                        <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-3.png"
                                alt="Image"
                                className="w-full mr-8"
                            />
                        </div>
                        <div className="flex flex-column align-items-center w-2rem">
                            <span
                                className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle"
                                style={{
                                    minWidth: "2.5rem",
                                    minHeight: "2.5rem",
                                }}
                            >
                                3
                            </span>
                            <div
                                className="h-full bg-cyan-500"
                                style={{ width: "2px", minHeight: "4rem" }}
                            ></div>
                        </div>
                        <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                            <div className="text-900 text-xl mb-2 font-medium">
                                Pharetra et ultrices neque
                            </div>
                            <span className="block text-700 line-height-3 mb-3">
                                Id interdum velit laoreet id. A iaculis at erat
                                pellentesque adipiscing commodo elit at
                                imperdiet.
                            </span>
                            <div className="pt-3 border-top-1 border-300">
                                <div className="mb-2 line-height-3">
                                    <span className="text-900 font-medium">
                                        Egestas dui id
                                    </span>{" "}
                                    ornare arcu odio ut. Mi bibendum neque
                                    egestas congue.
                                </div>
                                <div className="line-height-3">
                                    <span className="text-900 font-medium">
                                        Sed velit dignissim
                                    </span>{" "}
                                    sodales ut eu. Massa placerat duis ultricies
                                    lacus.
                                </div>
                            </div>
                            <img
                                src="/demo/images/blocks/feature/feature-timeline-3.png"
                                alt="Image"
                                className="w-full mt-3 block lg:hidden"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Chips" code={block9}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-900 text-3xl mb-3 text-center">
                        These apps are ready to build
                    </div>
                    <div className="text-700 text-center mb-5 line-height-3">
                        Etiam non quam lacus suspendisse faucibus interdum
                        posuere lorem. Nibh sit amet commodo nulla facilisi
                        nullam vehicula.
                    </div>
                    <div className="mb-4 flex flex-wrap justify-content-center">
                        <span
                            className="inline-flex align-items-center px-3 py-2 bg-blue-500 text-white mb-3 mr-3"
                            style={{ borderRadius: "40px" }}
                        >
                            <i className="pi pi-credit-card mr-2"></i>
                            <span className="font-medium">Ornare Arcu</span>
                        </span>
                        <span
                            className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3"
                            style={{ borderRadius: "40px" }}
                        >
                            <i className="pi pi-envelope mr-2"></i>
                            <span className="font-medium">Diam Maecenas</span>
                        </span>
                        <span
                            className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 mr-3"
                            style={{ borderRadius: "40px" }}
                        >
                            <i className="pi pi-link mr-2"></i>
                            <span className="font-medium">Ultrices Neque</span>
                        </span>
                        <span
                            className="inline-flex align-items-center px-3 py-2 surface-200 text-900 mb-3 "
                            style={{ borderRadius: "40px" }}
                        >
                            <i className="pi pi-moon mr-2"></i>
                            <span className="font-medium">Facilisi Etiam</span>
                        </span>
                    </div>
                    <div className="flex flex-wrap border-300 border-round border-1 p-5 overflow-hidden">
                        <div className="flex align-items-center w-full lg:w-6 pr-0 lg:pr-8">
                            <div className="text-center lg:text-left mb-3 lg:mb-0">
                                <div className="font-medium text-2xl text-900 mb-3">
                                    Vitae semper quis lectus nulla
                                </div>
                                <p className="mt-0 mb-3 line-height-3 text-700">
                                    Pretium aenean pharetra magna ac placerat
                                    vestibulum. Est ullamcorper eget nulla
                                    facilisi etiam dignissim diam quis enim.
                                    Fringilla urna porttitor rhoncus dolor purus
                                    non enim. Vulputate odio ut enim blandit
                                    volutpat.
                                </p>
                                <Button
                                    label="Learn More"
                                    className="p-button-outlined"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-6 text-center lg:text-right">
                            <img
                                src="/demo/images/blocks/feature/feature-chips.png"
                                alt="Image"
                                className="w-full lg:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2x5 Grid Accordion" code={block10}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-900 text-4xl mb-3">
                        More reasons people around the world prefer us
                    </div>
                    <div className="text-700 mb-5 line-height-3">
                        Egestas dui id ornare arcu odio. Egestas fringilla
                        phasellus faucibus scelerisque eleifend.
                    </div>
                    <div className="p-3 border-round surface-50">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6 p-3">
                                <div className="text-lg text-900 mb-3 font-medium">
                                    Services
                                </div>
                                <Accordion>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-cloud text-sm"></i>
                                                </span>
                                                <span>Cloud Services</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-chart-bar text-sm"></i>
                                                </span>
                                                <span>Analytic Dashboard</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-key text-sm"></i>
                                                </span>
                                                <span>Private Keys</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-file-pdf text-sm"></i>
                                                </span>
                                                <span>PDF Export</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-book text-sm"></i>
                                                </span>
                                                <span>Documentation</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                </Accordion>
                            </div>
                            <div className="w-full lg:w-6 p-3">
                                <div className="text-lg text-900 mb-3 font-medium">
                                    Support
                                </div>
                                <Accordion>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-filter text-sm"></i>
                                                </span>
                                                <span>Advanced Filtering</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-credit-card text-sm"></i>
                                                </span>
                                                <span>Payment Gateway</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-map-marker text-sm"></i>
                                                </span>
                                                <span>Device Tracking</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-tags text-sm"></i>
                                                </span>
                                                <span>Tag Management</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                    <AccordionTab
                                        header={
                                            <div className="flex align-items-center">
                                                <span
                                                    className="block inline-flex align-items-center justify-content-center border-circle surface-300 mr-2 text-700"
                                                    style={{
                                                        width: "2rem",
                                                        height: "2rem",
                                                    }}
                                                >
                                                    <i className="pi pi-eye text-sm"></i>
                                                </span>
                                                <span>Privacy Settings</span>
                                            </div>
                                        }
                                    >
                                        <p className="line-height-3">
                                            Aenean vel elit scelerisque mauris
                                            pellentesque pulvinar pellentesque
                                            habitant morbi. Sit amet risus
                                            nullam eget felis eget. Feugiat
                                            pretium nibh ipsum consequat nisl
                                            vel pretium.
                                        </p>
                                    </AccordionTab>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Vertical Tabs" code={block11}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center font-bold text-blue-600 mb-4">
                        DISCOVER YOUR POTENTIAL
                    </div>
                    <div className="text-center font-bold text-900 mb-5 text-4xl">
                        One Simple Platform
                    </div>
                    <div className="grid">
                        <div className="col-12 lg:col-6 flex align-items-center justify-content-center">
                            {activeTab1 == 0 && (
                                <img
                                    src="/demo/images/blocks/feature/feature-illustration-1.svg"
                                    alt="Image"
                                    className="w-full md:w-9"
                                />
                            )}
                            {activeTab1 == 1 && (
                                <img
                                    src="/demo/images/blocks/feature/feature-illustration-2.svg"
                                    alt="Image"
                                    className="w-full md:w-9"
                                />
                            )}
                            {activeTab1 == 2 && (
                                <img
                                    src="/demo/images/blocks/feature/feature-illustration-3.svg"
                                    alt="Image"
                                    className="w-full md:w-9"
                                />
                            )}
                        </div>
                        <div className="col-12 lg:col-6 mt-5 lg:mt-0">
                            <ul className="list-none m-0 p-0">
                                <li
                                    onMouseOver={() => setActiveTab1(0)}
                                    className={classNames(
                                        "border-left-2 p-4 cursor-pointer",
                                        {
                                            "surface-border": activeTab1 !== 0,
                                            "text-blue-900 bg-blue-50 border-blue-500":
                                                activeTab1 === 0,
                                        }
                                    )}
                                >
                                    <div className="text-2xl font-medium">
                                        Optimize your apps
                                    </div>
                                    <p className="line-height-3 text-xl">
                                        Eget nulla facilisi etiam dignissim diam
                                        quis enim lobortis. Viverra tellus in
                                        hac habitasse platea dictumst vestibulum
                                        rhoncus. Nunc non blandit massa enim nec
                                        dui nunc mattis.
                                    </p>
                                </li>
                                <li
                                    onMouseOver={() => setActiveTab1(1)}
                                    className={classNames(
                                        "border-left-2 p-4 cursor-pointer",
                                        {
                                            "surface-border": activeTab1 !== 1,
                                            "text-blue-900 bg-blue-50 border-blue-500":
                                                activeTab1 === 1,
                                        }
                                    )}
                                >
                                    <div className="text-2xl font-medium">
                                        Analyze competitors
                                    </div>
                                    <p className="line-height-3 text-xl">
                                        Eget nulla facilisi etiam dignissim diam
                                        quis enim lobortis. Viverra tellus in
                                        hac habitasse platea dictumst vestibulum
                                        rhoncus. Nunc non blandit massa enim nec
                                        dui nunc mattis.
                                    </p>
                                </li>
                                <li
                                    onMouseOver={() => setActiveTab1(2)}
                                    className={classNames(
                                        "border-left-2 p-4 cursor-pointer",
                                        {
                                            "surface-border": activeTab1 !== 2,
                                            "text-blue-900 bg-blue-50 border-blue-500":
                                                activeTab1 === 2,
                                        }
                                    )}
                                >
                                    <div className="text-2xl font-medium">
                                        Track Progress
                                    </div>
                                    <p className="line-height-3 text-xl">
                                        Eget nulla facilisi etiam dignissim diam
                                        quis enim lobortis. Viverra tellus in
                                        hac habitasse platea dictumst vestibulum
                                        rhoncus. Nunc non blandit massa enim nec
                                        dui nunc mattis.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Horizontal Tabs" code={block12}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center font-bold text-blue-600 mb-4">
                        DISCOVER YOUR POTENTIAL
                    </div>
                    <div className="text-center font-bold text-900 mb-5 text-4xl">
                        One Simple Platform
                    </div>
                    <div className="flex align-items-center justify-content-center py-4">
                        {activeTab2 == 0 && (
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-1.svg"
                                alt="Image"
                                className="w-full md:w-6"
                            />
                        )}
                        {activeTab2 == 1 && (
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-2.svg"
                                alt="Image"
                                className="w-full md:w-6"
                            />
                        )}
                        {activeTab2 == 2 && (
                            <img
                                src="/demo/images/blocks/feature/feature-illustration-3.svg"
                                alt="Image"
                                className="w-full md:w-6"
                            />
                        )}
                    </div>
                    <ul className="grid list-none mx-0 mb-0 mt-5 p-0">
                        <li
                            onMouseOver={() => setActiveTab2(0)}
                            className={classNames(
                                "col-12 lg:col-4 border-top-2 p-4 cursor-pointer",
                                {
                                    "surface-border": activeTab2 !== 0,
                                    "text-blue-900 bg-blue-50 border-blue-500":
                                        activeTab2 === 0,
                                }
                            )}
                        >
                            <div className="text-2xl font-medium">
                                Optimize your apps
                            </div>
                            <p className="line-height-3 text-xl">
                                Eget nulla facilisi etiam dignissim diam quis
                                enim lobortis. Viverra tellus in hac habitasse
                                platea dictumst vestibulum rhoncus. Nunc non
                                blandit massa enim nec dui nunc mattis.
                            </p>
                        </li>
                        <li
                            onMouseOver={() => setActiveTab2(1)}
                            className={classNames(
                                "col-12 lg:col-4 border-top-2 p-4 cursor-pointer",
                                {
                                    "surface-border": activeTab2 !== 1,
                                    "text-blue-900 bg-blue-50 border-blue-500":
                                        activeTab2 === 1,
                                }
                            )}
                        >
                            <div className="text-2xl font-medium">
                                Analyze competitors
                            </div>
                            <p className="line-height-3 text-xl">
                                Eget nulla facilisi etiam dignissim diam quis
                                enim lobortis. Viverra tellus in hac habitasse
                                platea dictumst vestibulum rhoncus. Nunc non
                                blandit massa enim nec dui nunc mattis.
                            </p>
                        </li>
                        <li
                            onMouseOver={() => setActiveTab2(2)}
                            className={classNames(
                                "col-12 lg:col-4 border-top-2 p-4 cursor-pointer",
                                {
                                    "surface-border": activeTab2 !== 2,
                                    "text-blue-900 bg-blue-50 border-blue-500":
                                        activeTab2 === 2,
                                }
                            )}
                        >
                            <div className="text-2xl font-medium">
                                Track Progress
                            </div>
                            <p className="line-height-3 text-xl">
                                Eget nulla facilisi etiam dignissim diam quis
                                enim lobortis. Viverra tellus in hac habitasse
                                platea dictumst vestibulum rhoncus. Nunc non
                                blandit massa enim nec dui nunc mattis.
                            </p>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Overlapping Cards" code={block13}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="text-center bg-no-repeat bg-cover border-round px-6 py-8"
                        style={{
                            background:
                                "url('/demo/images/blocks/feature/overlapping-cards.jpg')",
                        }}
                    >
                        <div className="text-white text-6xl font-semibold mb-3">
                            Augue Lacus{" "}
                            <span className="text-primary">Viverra</span> Vitae
                        </div>
                        <p className="text-gray-300 text-xl mt-0 mb-8 line-height-3">
                            Phasellus vestibulum lorem sed risus ultricies.
                            Nulla pharetra diam sit amet nisl suscipit
                            adipiscing bibendum est. Aenean euismod elementum
                            nisi quis eleifend quam.
                        </p>
                    </div>
                    <div className="flex flex-column lg:flex-row px-4 lg:px-6 gap-5 -mt-8">
                        <div className="flex flex-column lg:w-4">
                            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                                <i className="pi pi-sliders-v mr-2 text-2xl"></i>
                                <span className="font-semibold text-2xl">
                                    Lectus Arcu
                                </span>
                            </div>
                            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                                <p className="mt-0 mb-6 line-height-3 text-xl text-00">
                                    Aliquam vestibulum morbi blandit cursus
                                    risus at ultrices mi. Sollicitudin ac orci
                                    phasellus egestas tellus rutrum.
                                </p>
                                <div className="text-center">
                                    <Button
                                        label="Learn More"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        className="p-button-text"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-column lg:w-4">
                            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                                <i className="pi pi-moon mr-2 text-2xl"></i>
                                <span className="font-semibold text-2xl">
                                    Sollicitudin Ac
                                </span>
                            </div>
                            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                                <p className="mt-0 mb-6 line-height-3 text-xl text-00">
                                    Faucibus ornare suspendisse sed nisi lacus.
                                    Urna nunc id cursus metus aliquam eleifend.
                                    Augue lacus viverra vitae congue eu
                                    consequat ac.
                                </p>
                                <div className="text-center">
                                    <Button
                                        label="Learn More"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        className="p-button-text"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-column lg:w-4">
                            <div className="flex align-items-center border-round-top bg-primary text-primary h-5rem px-4">
                                <i className="pi pi-sun mr-2 text-2xl"></i>
                                <span className="font-semibold text-2xl">
                                    Nec Nisl
                                </span>
                            </div>
                            <div className="surface-card shadow-2 p-4 flex flex-column justify-content-between flex-1 border-round-bottom">
                                <p className="mt-0 mb-6 line-height-3 text-xl text-00">
                                    Montes nascetur ridiculus mus mauris. Enim
                                    tortor at auctor urna nunc id cursus metus.
                                    Sed odio morbi quis commodo odio.
                                </p>
                                <div className="text-center">
                                    <Button
                                        label="Learn More"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        className="p-button-text"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Sliding Screenshots" code={block14}>
                <div className="surface-section px-4 py-2 md:px-6 lg:px-8">
                    <div className="text-center px-6 py-8">
                        <div className="text-900 text-4xl font-semibold mb-3">
                            Move Work Forward
                        </div>
                        <p className="text-700 text-xl my-0 line-height-3">
                            Orci dapibus ultrices in iaculis. Quam adipiscing
                            vitae proin sagittis nisl. Amet massa vitae tortor
                            condimentum lacinia quis vel eros donec.
                        </p>
                    </div>
                    <div className="grid mb-4">
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <Button
                                className={
                                    "p-link p-3 shadow-2 mb-3 inline-block " +
                                    (carouselPage === 0
                                        ? "bg-primary"
                                        : "bg-bluegray-400 text-white")
                                }
                                style={{ borderRadius: "10px" }}
                                onClick={() => setCarouselPage(0)}
                            >
                                <i className="pi pi-map text-4xl"></i>
                            </Button>
                            <div className="text-bluegray-500 mb-3 font-medium">
                                Dynamic Mapping
                            </div>
                            <div className="text-900 mb-3 font-medium text-xl">
                                Collect and organize mappings
                            </div>
                            <span className="text-600 line-height-3">
                                Diam sollicitudin tempor id eu. Ut consequat
                                semper viverra nam libero justo laoreet sit. Mi
                                sit amet mauris commodo quis imperdiet massa.
                                Euismod quis viverra.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <Button
                                className={
                                    "p-link p-3 shadow-2 mb-3 inline-block " +
                                    (carouselPage === 1
                                        ? "bg-primary"
                                        : "bg-bluegray-400 text-white")
                                }
                                style={{ borderRadius: "10px" }}
                                onClick={() => setCarouselPage(1)}
                            >
                                <i className="pi pi-sync text-4xl"></i>
                            </Button>
                            <div className="text-bluegray-500 mb-3 font-medium">
                                Seamless Sync
                            </div>
                            <div className="text-900 mb-3 font-medium text-xl">
                                Never touch plaintext data
                            </div>
                            <span className="text-600 line-height-3">
                                Massa id neque aliquam vestibulum. Tristique
                                senectus et netus et malesuada fames ac. A
                                scelerisque purus semper eget duis at tellus at.
                                Orci phasellus egestas tellus rutrum.
                            </span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
                            <Button
                                className={
                                    "p-link p-3 shadow-2 mb-3 inline-block " +
                                    (carouselPage === 2
                                        ? "bg-primary"
                                        : "bg-bluegray-400 text-white")
                                }
                                style={{ borderRadius: "10px" }}
                                onClick={() => setCarouselPage(2)}
                            >
                                <i className="pi pi-shield text-4xl"></i>
                            </Button>
                            <div className="text-bluegray-500 mb-3 font-medium">
                                Maximum Security
                            </div>
                            <div className="text-900 mb-3 font-medium text-xl">
                                Process encrypted data
                            </div>
                            <span className="text-600 line-height-3">
                                Pellentesque eu tincidunt tortor aliquam nulla.
                                Nulla facilisi cras fermentum odio eu. Ultrices
                                in iaculis nunc sed augue. Nullam vehicula ipsum
                                a arcu cursus.
                            </span>
                        </div>
                    </div>
                    <div className="surface-100 align-items-center flex flex-row border-round mb-8">
                        <div className="col-12 lg:col w-full">
                            <Carousel
                                value={screenshots}
                                numVisible={1}
                                numScroll={1}
                                circular={false}
                                itemTemplate={itemTemplate}
                                page={carouselPage}
                                onPageChange={(e) => setCarouselPage(e.page)}
                                showIndicators={false}
                                showNavigators={false}
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Feature;
