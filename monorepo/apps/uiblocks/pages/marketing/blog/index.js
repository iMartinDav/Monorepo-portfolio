import React from "react";
import { Avatar } from "primereact/avatar";
import BlockViewer from "../../../demo/components/BlockViewer";

const Blog = () => {
    const block1 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-5 text-center">Featured Articles</div>
    <div className="grid nogutter">
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-1.jpg" alt="blog-1" className="block w-full border-round-top" />
                <div className="p-4">
                    <span className="block font-medium text-blue-600 mb-3">Crime</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">Fugitive flamingo spotted in Florida</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" />
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Anna Lane</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 5, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-2.jpg" alt="blog-2" className="block w-full border-round-top" />
                <div className="p-4 flex flex-column">
                    <span className="block font-medium text-pink-600 mb-3">Wildlife</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">Journey to the Ends of the Earth</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" />
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Arlene McCoy</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 6, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round h-full surface-card">
                <img src="/demo/images/blocks/blog/blog-3.jpg" alt="blog-3" className="block w-full border-round-top" />
                <div className="p-4">
                    <span className="block font-medium text-orange-600 mb-3">Marine</span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">'Real and imminent' extinction risk</div>
                    <div className="line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="flex">
                        <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" shape="circle"></Avatar>
                        <div className="ml-2">
                            <div className="text-sm font-bold text-900 mb-1">Diane Miles</div>
                            <div className="text-sm flex align-items-center text-700">
                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                <span>Apr 9, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-3">Recent Articles</div>
    <div className="text-700 text-xl line-height-3 mb-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div className="grid nogutter">
        <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-blue-600"></div>
            <div className="text-blue-600 font-medium my-2">Animals</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">Why Earth's most beloved creatures are headed toward extinction</div>
            <div className="text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
                <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle" />
                <div className="ml-2">
                    <div className="text-sm font-bold text-900 mb-1">Anna Miles</div>
                    <div className="text-sm flex align-items-center text-700">
                        <i className="pi pi-calendar mr-1 text-sm"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-pink-600"></div>
            <div className="text-pink-600 font-medium my-2">Oxygen</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">Only one-third of tropical rainforests remain intact, study says </div>
            <div className="text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
                <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle" />
                <div className="ml-2">
                    <div className="text-sm font-bold text-900 mb-1">Arlene Miles</div>
                    <div className="text-sm flex align-items-center text-700">
                        <i className="pi pi-calendar mr-1 text-sm"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-orange-600"></div>
            <div className="text-orange-600 font-medium my-2">Nature</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">Does planting a tree really offset your carbon footprint?</div>
            <div className="text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
                <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-3.png" shape="circle" />
                <div className="ml-2">
                    <div className="text-sm font-bold text-900 mb-1">Diane Miles</div>
                    <div className="text-sm flex align-items-center text-700">
                        <i className="pi pi-calendar mr-1 text-sm"></i>
                        <span>Apr 9, 2021</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-3">From the Blog</div>
    <div className="text-700 line-height-3 text-xl mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div className="flex flex-column xl:flex-row">
        <div className="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 xl:mb-0 flex-column md:flex-row">
            <img src="/demo/images/blocks/blog/blog-4.jpg" alt="blog-4" className="border-round-left" style={{ maxHeight: '234px' }} />
            <div className="p-4">
                <div className="flex justify-content-between mb-3">
                    <span className="text-orange-500 text-xl font-medium">Good News</span>
                    <span className="text-500 font-medium">3 days ago</span>
                </div>
                <div className="font-medium text-lg text-900 mb-3 line-height-3 ">Our Four-Legged Warriors</div>
                <div className="line-height-3 text-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div className="flex align-items-center">
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></Avatar>
                    <span className="font-bold text-sm block ml-2 text-blue-600">Anna Lane</span>
                </div>
            </div>
        </div>
        <div className="flex shadow-2 surface-card border-round flex-column md:flex-row">
            <img src="/demo/images/blocks/blog/blog-5.jpg" alt="blog-5" className="border-round-left" style={{ maxHeight: '234px' }} />
            <div className="p-4">
                <div className="flex justify-content-between mb-3">
                    <span className="text-teal-500 text-lg font-medium">Science</span>
                    <span className="text-500 font-medium">4 days ago</span>
                </div>
                <div className="font-medium text-lg text-900 mb-3 line-height-3">Can We Learn From Horses?</div>
                <div className="line-height-3 text-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                <div className="flex align-items-center">
                    <Avatar image="/demo/images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></Avatar>
                    <span className="font-bold text-sm block ml-2 text-blue-600">Arlene McCoy</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center text-900 text-5xl font-bold mb-5">Just Released</div>
    <div className="grid grid-nogutter">
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 shadow-2 border-round surface-card h-full">
                <div className="flex justify-content-between text-500">
                    <span>Article</span>
                    <span className="inline-flex">
                        <i className="pi pi-clock mr-2"></i>
                        <span>12 min</span>
                    </span>
                </div>
                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">It is time to step up and protect our world. Little actions will lead to huge differences.</p>
                <div>
                    <span className="bg-blue-100 text-blue-600 font-medium py-1 px-3 mr-2" style={{ borderRadius: '30px' }}>Environment</span>
                    <span className="bg-teal-100 text-teal-600 font-medium py-1 px-3" style={{ borderRadius: '30px' }}>Climate</span>
                </div>
                <img src="/demo/images/blocks/blog/blog-6.png" alt="Image" className="block w-full mt-5" />
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 shadow-2 border-round surface-card h-full">
                <div className="flex justify-content-between text-500">
                    <span>Article</span>
                    <span className="inline-flex">
                        <i className="pi pi-clock mr-2"></i>
                        <span>9 min</span>
                    </span>
                </div>
                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">New sustainable energy alternatives and how we can utilize them efficiently.</p>
                <div>
                    <span className="bg-blue-100 text-blue-600 font-medium py-1 px-3 mr-2" style={{ borderRadius: '30px' }}>Environment</span>
                    <span className="bg-green-100 text-green-600 font-medium py-1 px-3" style={{ borderRadius: '30px' }}>Energy</span>
                </div>
                <img src="/demo/images/blocks/blog/blog-7.png" alt="Image" className="block w-full mt-5" />
            </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
            <div className="p-3 shadow-2 border-round surface-card h-full">
                <div className="flex justify-content-between text-500">
                    <span>Article</span>
                    <span className="inline-flex">
                        <i className="pi pi-clock mr-2"></i>
                        <span>5 min</span>
                    </span>
                </div>
                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">Upcoming technology is what we've been waiting for to shape our future.</p>
                <div>
                    <span className="bg-purple-100 text-purple-600 font-medium py-1 px-3 mr-2" style={{ borderRadius: '30px' }}>Tech</span>
                    <span className="bg-indigo-100 text-indigo-600 font-medium py-1 px-3" style={{ borderRadius: '30px' }}>Opinion</span>
                </div>
                <img src="/demo/images/blocks/blog/blog-8.png" alt="Image" className="block w-full mt-5" />
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-900 font-bold text-5xl mb-6">Recent Posts</div>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-6 pr-0 xl:pr-6">
            <img src="/demo/images/blocks/blog/blog-9.png" alt="Image" className="w-full" />
            <div className="flex align-items-center mt-4">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="mr-3 flex-shrink-0" width="28" height="28" />
                <span className="text-900 font-medium text-lg white-space-nowrap">Darrel Steward</span>
                <span className="text-500 font-medium text-lg mx-3">|</span>
                <span className="text-500 font-medium text-lg white-space-nowrap">Oct 7</span>
            </div>
            <div className="text-900 font-bold text-3xl mt-4">Circumpolar Cooperation</div>
            <p className="line-height-3 text-700 my-4">Purus sit amet volutpat consequat mauris nunc congue. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.</p>
            <div className="flex align-items-center">
                <span className="text-600 text-sm font-medium">15 min read</span>
                <span className="text-600 font-medium text-sm mx-3">|</span>
                <span className="bg-indigo-100 text-indigo-600 text-sm block py-1 px-2 border-round mr-3">Poles</span>
                <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">Nature</span>
            </div>
        </div>
        <div className="w-full xl:w-6">
            <div className="flex flex-wrap align-items-start mb-8 mt-8 xl:mb-6 xl:mt-0">
                <div className="w-full xl:w-6 pr-0 xl:pr-4 mb-4 xl:mb-0">
                    <img src="/demo/images/blocks/blog/blog-10.png" alt="Image" className="w-full" />
                </div>
                <div className="w-full xl:w-6">
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" className="mr-3 flex-shrink-0" width="28" height="28" />
                        <span className="text-900 font-medium text-lg white-space-nowrap">Bessie Cooper</span>
                        <span className="text-500 font-medium text-lg mx-3">|</span>
                        <span className="text-500 font-medium text-lg white-space-nowrap">Oct 7</span>
                    </div>
                    <div className="text-900 font-bold text-3xl mt-4">World Famous Fish</div>
                    <p className="line-height-3 text-700 my-4">Quisque sagittis purus sit amet volutpat consequat mauris.</p>
                    <div className="flex align-items-center">
                        <span className="text-600 text-sm font-medium">12 min read</span>
                        <span className="text-600 font-medium text-sm mx-3">|</span>
                        <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3">Ocean</span>
                        <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">Nature</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap align-items-start">
                <div className="w-full xl:w-6 pr-0 xl:pr-4 mb-4 xl:mb-0">
                    <img src="/demo/images/blocks/blog/blog-11.png" alt="Image" className="w-full" />
                </div>
                <div className="w-full xl:w-6">
                    <div className="flex align-items-center">
                        <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" className="mr-3 flex-shrink-0" width="28" height="28" />
                        <span className="text-900 font-medium text-lg white-space-nowrap">Jenna Clark</span>
                        <span className="text-500 font-medium text-lg mx-3">|</span>
                        <span className="text-500 font-medium text-lg white-space-nowrap">Oct 10</span>
                    </div>
                    <div className="text-900 font-bold text-3xl mt-4">Extinction and Origination</div>
                    <p className="line-height-3 text-700 my-4">Bibendum enim facilisis gravida neque convallis a cras.</p>
                    <div className="flex align-items-center">
                        <span className="text-600 text-sm font-medium">10 min read</span>
                        <span className="text-600 font-medium text-sm mx-3">|</span>
                        <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3">Ocean</span>
                        <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">Nature</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-3">From the Blog</div>
    <div className="text-700 line-height-3 text-xl mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div className="grid">
        <div className="col-12 lg:col-6 pr-0 lg:pr-4 mb-6 lg:mb-0">
            <div style={{ minHeight: '350px', background: 'url("/demo/images/blocks/blog/blog-12.jpg") no-repeat', backgroundSize: 'cover' }} className="mb-6 p-3 flex flex-column justify-content-between">
                <div className="flex align-items-center mb-3">
                    <span className="bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium">Science</span>
                    <span className="bg-orange-100 text-orange-600 text-sm block py-1 px-2 border-round font-medium">Travel</span>
                </div>
                <div>
                    <div className="text-white font-medium text-xl mb-3">Lorem ipsum dolor amet</div>
                    <p className="text-gray-200 line-height-3 mt-0 mb-3">Bibendum ut tristique et egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.</p>
                    <span className="text-gray-300 font-medium">4 days ago</span>
                </div>
            </div>
            <div className="surface-card border-round p-3 shadow-2">
                <div className="flex align-items-center mb-3">
                    <span className="bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium">News</span>
                    <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round font-medium">Life</span>
                </div>
                <div className="text-900 font-medium text-xl mb-3">Lorem ipsum dolor amet</div>
                <p className="text-700 line-height-3 mt-0 mb-3">Bibendum ut tristique et egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.</p>
                <span className="text-500 font-medium">4 days ago</span>
            </div>
        </div>
        <div className="col-12 lg:col-6 pl-2 lg:pl-4">
            <div className="surface-card border-round p-3 shadow-2 mb-6">
                <div className="flex align-items-center mb-3">
                    <span className="bg-yellow-100 text-yellow-600 text-sm block py-1 px-2 border-round mr-3 font-medium">New</span>
                    <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round font-medium">Life</span>
                </div>
                <div className="text-900 font-medium text-xl mb-3">Numquam expedita facere perspiciatis</div>
                <p className="text-700 line-height-3 mt-0 mb-3">U sem integer vitae justo. Elit at imperdiet dui accumsan sit amet. Tristique risus nec feugiat in fermentum posuere urna.</p>
                <span className="text-500 font-medium">5 days ago</span>
            </div>
            <div style={{ minHeight: '350px', background: 'url("/demo/images/blocks/blog/blog-13.jpg") no-repeat', backgroundSize: 'cover' }} className="p-3 flex flex-column justify-content-between">
                <div className="flex align-items-center mb-3">
                    <span className="bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium">Science</span>
                    <span className="bg-orange-100 text-orange-600 text-sm block py-1 px-2 border-round font-medium">Travel</span>
                </div>
                <div>
                    <div className="text-white font-medium text-xl mb-3">Sed ullamcorper morbi tincidunt</div>
                    <p className="text-gray-200 line-height-3 mt-0 mb-3">Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus.</p>
                    <span className="text-gray-300 font-medium">4 days ago</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    const block7 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-5xl text-900 mb-3">Recent News</div>
    <div className="text-700 line-height-3 text-xl mb-6">Elementum nibh tellus molestie nunc non blandit. Enim eu turpis egestas pretium aenean pharetra.</div>
    <div className="flex flex-column lg:flex-row gap-5">
        <div className="shadow-2 border-round-xl" style={{ background: 'linear-gradient(15deg, #F91616, #F97316)', borderLeft: '10px solid transparent' }}>
            <div className="p-4 border-round surface-card h-full">
                <div className="flex mb-3">
                    <p-avatar image="/demo/images/blocks/avatars/circle/avatar-f-4.png" shape="circle"></p-avatar>
                    <div className="ml-2">
                        <div className="font-medium text-900 mb-1">Arlene McCoy</div>
                        <div className="text-sm flex align-items-center text-700">
                            <span>9 July, 2022</span>
                            <div className="border-circle surface-300 mx-2" style={{ width: '0.25rem', height: '0.25rem' }} />
                            <span>16 min read</span>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-900 font-medium mb-3 line-height-3">'Real and imminent' extinction risk</div>
                <div className="line-height-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
        <div className="shadow-2 border-round-xl" style={{ background: 'linear-gradient(15deg, #CC63F1, #6366F1)', borderLeft: '10px solid transparent' }}>
            <div className="p-4 border-round surface-card h-full">
                <div className="flex mb-3">
                    <p-avatar image="/demo/images/blocks/avatars/circle/avatar-f-11.png" shape="circle"></p-avatar>
                    <div className="ml-2">
                        <div className="font-medium text-900 mb-1">Dianne Russell</div>
                        <div className="text-sm flex align-items-center text-700">
                            <span>10 July, 2022</span>
                            <div className="border-circle surface-300 mx-2" style={{ width: '0.25rem', height: '0.25rem' }} />
                            <span>11 min read</span>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-900 font-medium mb-3 line-height-3">Climate standards for power plants</div>
                <div className="line-height-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div className="shadow-2 border-round-xl" style={{ background: 'linear-gradient(15deg, #06D465, #06B6D4)', borderLeft: '10px solid transparent' }}>
            <div className="p-4 border-round surface-card h-full">
                <div className="flex mb-3">
                    <p-avatar image="/demo/images/blocks/avatars/circle/avatar-m-9.png" shape="circle"></p-avatar>
                    <div className="ml-2">
                        <div className="font-medium text-900 mb-1">Ronald Richards</div>
                        <div className="text-sm flex align-items-center text-700">
                            <span>11 July, 2022</span>
                            <div className="border-circle surface-300 mx-2" style={{ width: '0.25rem', height: '0.25rem' }} />
                            <span>7 min read</span>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-900 font-medium mb-3 line-height-3">Heat Waves Around the World</div>
                <div className="line-height-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Blog Sections</div>
            <BlockViewer header="3 Columns with Images" code={block1}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-5 text-center">
                        Featured Articles
                    </div>
                    <div className="grid nogutter">
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-1.jpg"
                                    alt="blog-1"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4">
                                    <span className="block font-medium text-blue-600 mb-3">
                                        Crime
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        Fugitive flamingo spotted in Florida
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                            shape="circle"
                                        />
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Anna Lane
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 5, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-2.jpg"
                                    alt="blog-2"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4 flex flex-column">
                                    <span className="block font-medium text-pink-600 mb-3">
                                        Wildlife
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        Journey to the Ends of the Earth
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                            shape="circle"
                                        />
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Arlene McCoy
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 6, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="shadow-2 border-round h-full surface-card">
                                <img
                                    src="/demo/images/blocks/blog/blog-3.jpg"
                                    alt="blog-3"
                                    className="block w-full border-round-top"
                                />
                                <div className="p-4">
                                    <span className="block font-medium text-orange-600 mb-3">
                                        Marine
                                    </span>
                                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                                        &lsquo;Real and imminent&lsquo; extinction risk
                                    </div>
                                    <div className="line-height-3 mb-3 text-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                    <div className="flex">
                                        <Avatar
                                            image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                            alt="avatar-f-3"
                                            shape="circle"
                                        ></Avatar>
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">
                                                Diane Miles
                                            </div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>Apr 9, 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <div className="block-category-title">Blog Sections</div>
            <BlockViewer header="3 Columns with Lines" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-3">
                        Recent Articles
                    </div>
                    <div className="text-700 text-xl line-height-3 mb-5">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="grid nogutter">
                        <div className="col-12 lg:col-4 p-4">
                            <div className="border-top-3 border-blue-600"></div>
                            <div className="text-blue-600 font-medium my-2">
                                Animals
                            </div>
                            <div className="text-900 font-medium text-xl line-height-3 mb-4">
                                Why Earth&lsquo;s most beloved creatures are headed
                                toward extinction
                            </div>
                            <div className="text-700 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="flex mt-4">
                                <Avatar
                                    image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    shape="circle"
                                />
                                <div className="ml-2">
                                    <div className="text-sm font-bold text-900 mb-1">
                                        Anna Miles
                                    </div>
                                    <div className="text-sm flex align-items-center text-700">
                                        <i className="pi pi-calendar mr-1 text-sm"></i>
                                        <span>Apr 9, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-4">
                            <div className="border-top-3 border-pink-600"></div>
                            <div className="text-pink-600 font-medium my-2">
                                Oxygen
                            </div>
                            <div className="text-900 font-medium text-xl line-height-3 mb-4">
                                Only one-third of tropical rainforests remain
                                intact, study says{" "}
                            </div>
                            <div className="text-700 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="flex mt-4">
                                <Avatar
                                    image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    shape="circle"
                                />
                                <div className="ml-2">
                                    <div className="text-sm font-bold text-900 mb-1">
                                        Arlene Miles
                                    </div>
                                    <div className="text-sm flex align-items-center text-700">
                                        <i className="pi pi-calendar mr-1 text-sm"></i>
                                        <span>Apr 9, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-4">
                            <div className="border-top-3 border-orange-600"></div>
                            <div className="text-orange-600 font-medium my-2">
                                Nature
                            </div>
                            <div className="text-900 font-medium text-xl line-height-3 mb-4">
                                Does planting a tree really offset your carbon
                                footprint?
                            </div>
                            <div className="text-700 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="flex mt-4">
                                <Avatar
                                    image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    shape="circle"
                                />
                                <div className="ml-2">
                                    <div className="text-sm font-bold text-900 mb-1">
                                        Diane Miles
                                    </div>
                                    <div className="text-sm flex align-items-center text-700">
                                        <i className="pi pi-calendar mr-1 text-sm"></i>
                                        <span>Apr 9, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="2 Column Cards" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-3">
                        From the Blog
                    </div>
                    <div className="text-700 line-height-3 text-xl mb-6">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>

                    <div className="flex flex-column xl:flex-row">
                        <div className="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 xl:mb-0 flex-column md:flex-row">
                            <img
                                src="/demo/images/blocks/blog/blog-4.jpg"
                                alt="blog-4"
                                className="border-round-left"
                                style={{ maxHeight: "234px" }}
                            />
                            <div className="p-4">
                                <div className="flex justify-content-between mb-3">
                                    <span className="text-orange-500 text-lg font-medium">
                                        Good News
                                    </span>
                                    <span className="text-500 font-medium">
                                        3 days ago
                                    </span>
                                </div>
                                <div className="font-medium text-lg text-900 mb-3 line-height-3 ">
                                    Our Four-Legged Warriors
                                </div>
                                <div className="line-height-3 text-700 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor.
                                </div>
                                <div className="flex align-items-center">
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                        shape="circle"
                                    ></Avatar>
                                    <span className="font-bold text-sm block ml-2 text-blue-600">
                                        Anna Lane
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex shadow-2 surface-card border-round flex-column md:flex-row">
                            <img
                                src="/demo/images/blocks/blog/blog-5.jpg"
                                alt="blog-5"
                                className="border-round-left"
                                style={{ maxHeight: "234px" }}
                            />
                            <div className="p-4">
                                <div className="flex justify-content-between mb-3">
                                    <span className="text-teal-500 text-lg font-medium">
                                        Science
                                    </span>
                                    <span className="text-500 font-medium">
                                        4 days ago
                                    </span>
                                </div>
                                <div className="font-medium text-lg text-900 mb-3 line-height-3">
                                    Can We Learn From Horses?
                                </div>
                                <div className="line-height-3 text-700 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor.
                                </div>
                                <div className="flex align-items-center">
                                    <Avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                        shape="circle"
                                    ></Avatar>
                                    <span className="font-bold text-sm block ml-2 text-blue-600">
                                        Arlene McCoy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3 Columns with Tags" code={block4}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center text-900 text-5xl font-bold mb-5">
                        Just Released
                    </div>
                    <div className="grid grid-nogutter">
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 shadow-2 border-round surface-card h-full">
                                <div className="flex justify-content-between text-500">
                                    <span>Article</span>
                                    <span className="inline-flex">
                                        <i className="pi pi-clock mr-2"></i>
                                        <span>12 min</span>
                                    </span>
                                </div>
                                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">
                                    It is time to step up and protect our world.
                                    Little actions will lead to huge
                                    differences.
                                </p>
                                <div>
                                    <span
                                        className="bg-blue-100 text-blue-600 font-medium py-1 px-3 mr-2"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Environment
                                    </span>
                                    <span
                                        className="bg-teal-100 text-teal-600 font-medium py-1 px-3"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Climate
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/blog/blog-6.png"
                                    alt="Image"
                                    className="block w-full mt-5"
                                />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 shadow-2 border-round surface-card h-full">
                                <div className="flex justify-content-between text-500">
                                    <span>Article</span>
                                    <span className="inline-flex">
                                        <i className="pi pi-clock mr-2"></i>
                                        <span>9 min</span>
                                    </span>
                                </div>
                                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">
                                    New sustainable energy alternatives and how
                                    we can utilize them efficiently.
                                </p>
                                <div>
                                    <span
                                        className="bg-blue-100 text-blue-600 font-medium py-1 px-3 mr-2"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Environment
                                    </span>
                                    <span
                                        className="bg-green-100 text-green-600 font-medium py-1 px-3"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Energy
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/blog/blog-7.png"
                                    alt="Image"
                                    className="block w-full mt-5"
                                />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <div className="p-3 shadow-2 border-round surface-card h-full">
                                <div className="flex justify-content-between text-500">
                                    <span>Article</span>
                                    <span className="inline-flex">
                                        <i className="pi pi-clock mr-2"></i>
                                        <span>5 min</span>
                                    </span>
                                </div>
                                <p className="line-height-3 mt-3 mb-7 text-900 font-medium text-xl">
                                    Upcoming technology is what we have been
                                    waiting for to shape our future.
                                </p>
                                <div>
                                    <span
                                        className="bg-purple-100 text-purple-600 font-medium py-1 px-3 mr-2"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Tech
                                    </span>
                                    <span
                                        className="bg-indigo-100 text-indigo-600 font-medium py-1 px-3"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Opinion
                                    </span>
                                </div>
                                <img
                                    src="/demo/images/blocks/blog/blog-8.png"
                                    alt="Image"
                                    className="block w-full mt-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Emphasized Post" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-900 font-bold text-5xl mb-6">
                        Recent Posts
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-6 pr-0 xl:pr-6">
                            <img
                                src="/demo/images/blocks/blog/blog-9.png"
                                alt="Image"
                                className="w-full"
                            />
                            <div className="flex align-items-center mt-4">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    className="mr-3 flex-shrink-0"
                                    width="28"
                                    height="28"
                                    alt="avatar-f-3"
                                />
                                <span className="text-900 font-medium text-lg white-space-nowrap">
                                    Darrel Steward
                                </span>
                                <span className="text-500 font-medium text-lg mx-3">
                                    |
                                </span>
                                <span className="text-500 font-medium text-lg white-space-nowrap">
                                    Oct 7
                                </span>
                            </div>
                            <div className="text-900 font-bold text-3xl mt-4">
                                Circumpolar Cooperation
                            </div>
                            <p className="line-height-3 text-700 my-4">
                                Purus sit amet volutpat consequat mauris nunc
                                congue. Odio pellentesque diam volutpat commodo
                                sed egestas egestas fringilla phasellus.
                            </p>
                            <div className="flex align-items-center">
                                <span className="text-600 text-sm font-medium">
                                    15 min read
                                </span>
                                <span className="text-600 font-medium text-sm mx-3">
                                    |
                                </span>
                                <span className="bg-indigo-100 text-indigo-600 text-sm block py-1 px-2 border-round mr-3">
                                    Poles
                                </span>
                                <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">
                                    Nature
                                </span>
                            </div>
                        </div>
                        <div className="w-full xl:w-6">
                            <div className="flex flex-wrap align-items-start mb-8 mt-8 xl:mb-6 xl:mt-0">
                                <div className="w-full xl:w-6 pr-0 xl:pr-4 mb-4 xl:mb-0">
                                    <img
                                        src="/demo/images/blocks/blog/blog-10.png"
                                        alt="Image"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-full xl:w-6">
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                            className="mr-3 flex-shrink-0"
                                            width="28"
                                            height="28"
                                            alt="avatar-f-2"
                                        />
                                        <span className="text-900 font-medium text-lg white-space-nowrap">
                                            Bessie Cooper
                                        </span>
                                        <span className="text-500 font-medium text-lg mx-3">
                                            |
                                        </span>
                                        <span className="text-500 font-medium text-lg white-space-nowrap">
                                            Oct 7
                                        </span>
                                    </div>
                                    <div className="text-900 font-bold text-3xl mt-4">
                                        World Famous Fish
                                    </div>
                                    <p className="line-height-3 text-700 my-4">
                                        Quisque sagittis purus sit amet volutpat
                                        consequat mauris.
                                    </p>
                                    <div className="flex align-items-center">
                                        <span className="text-600 text-sm font-medium">
                                            12 min read
                                        </span>
                                        <span className="text-600 font-medium text-sm mx-3">
                                            |
                                        </span>
                                        <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3">
                                            Ocean
                                        </span>
                                        <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">
                                            Nature
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap align-items-start">
                                <div className="w-full xl:w-6 pr-0 xl:pr-4 mb-4 xl:mb-0">
                                    <img
                                        src="/demo/images/blocks/blog/blog-11.png"
                                        alt="Image"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-full xl:w-6">
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                            className="mr-3 flex-shrink-0"
                                            width="28"
                                            height="28"
                                            alt="avatar-f-3-circle"
                                        />
                                        <span className="text-900 font-medium text-lg white-space-nowrap">
                                            Jenna Clark
                                        </span>
                                        <span className="text-500 font-medium text-lg mx-3">
                                            |
                                        </span>
                                        <span className="text-500 font-medium text-lg white-space-nowrap">
                                            Oct 10
                                        </span>
                                    </div>
                                    <div className="text-900 font-bold text-3xl mt-4">
                                        Extinction and Origination
                                    </div>
                                    <p className="line-height-3 text-700 my-4">
                                        Bibendum enim facilisis gravida neque
                                        convallis a cras.
                                    </p>
                                    <div className="flex align-items-center">
                                        <span className="text-600 text-sm font-medium">
                                            10 min read
                                        </span>
                                        <span className="text-600 font-medium text-sm mx-3">
                                            |
                                        </span>
                                        <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3">
                                            Ocean
                                        </span>
                                        <span className="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round">
                                            Nature
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Alternating" code={block6}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-3">
                        From the Blog
                    </div>
                    <div className="text-700 line-height-3 text-xl mb-6">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="grid">
                        <div className="col-12 lg:col-6 pr-0 lg:pr-4 mb-6 lg:mb-0">
                            <div
                                style={{
                                    minHeight: "350px",
                                    background:
                                        'url("/demo/images/blocks/blog/blog-12.jpg") no-repeat',
                                    backgroundSize: "cover",
                                }}
                                className="mb-6 p-3 flex flex-column justify-content-between"
                            >
                                <div className="flex align-items-center mb-3">
                                    <span className="bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium">
                                        Science
                                    </span>
                                    <span className="bg-orange-100 text-orange-600 text-sm block py-1 px-2 border-round font-medium">
                                        Travel
                                    </span>
                                </div>
                                <div>
                                    <div className="text-white font-medium text-xl mb-3">
                                        Lorem ipsum dolor amet
                                    </div>
                                    <p className="text-gray-200 line-height-3 mt-0 mb-3">
                                        Bibendum ut tristique et egestas. Massa
                                        tincidunt nunc pulvinar sapien et ligula
                                        ullamcorper malesuada proin.
                                    </p>
                                    <span className="text-gray-300 font-medium">
                                        4 days ago
                                    </span>
                                </div>
                            </div>
                            <div className="surface-card border-round p-3 shadow-2">
                                <div className="flex align-items-center mb-3">
                                    <span className="bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium">
                                        News
                                    </span>
                                    <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round font-medium">
                                        Life
                                    </span>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3">
                                    Lorem ipsum dolor amet
                                </div>
                                <p className="text-700 line-height-3 mt-0 mb-3">
                                    Bibendum ut tristique et egestas. Massa
                                    tincidunt nunc pulvinar sapien et ligula
                                    ullamcorper malesuada proin.
                                </p>
                                <span className="text-500 font-medium">
                                    4 days ago
                                </span>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 pl-2 lg:pl-4">
                            <div className="surface-card border-round p-3 shadow-2 mb-6">
                                <div className="flex align-items-center mb-3">
                                    <span className="bg-yellow-100 text-yellow-600 text-sm block py-1 px-2 border-round mr-3 font-medium">
                                        New
                                    </span>
                                    <span className="bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round font-medium">
                                        Life
                                    </span>
                                </div>
                                <div className="text-900 font-medium text-xl mb-3">
                                    Numquam expedita facere perspiciatis
                                </div>
                                <p className="text-700 line-height-3 mt-0 mb-3">
                                    U sem integer vitae justo. Elit at imperdiet
                                    dui accumsan sit amet. Tristique risus nec
                                    feugiat in fermentum posuere urna.
                                </p>
                                <span className="text-500 font-medium">
                                    5 days ago
                                </span>
                            </div>
                            <div
                                style={{
                                    minHeight: "350px",
                                    background:
                                        'url("/demo/images/blocks/blog/blog-13.jpg") no-repeat',
                                    backgroundSize: "cover",
                                }}
                                className="p-3 flex flex-column justify-content-between"
                            >
                                <div className="flex align-items-center mb-3">
                                    <span className="bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium">
                                        Science
                                    </span>
                                    <span className="bg-orange-100 text-orange-600 text-sm block py-1 px-2 border-round font-medium">
                                        Travel
                                    </span>
                                </div>
                                <div>
                                    <div className="text-white font-medium text-xl mb-3">
                                        Sed ullamcorper morbi tincidunt
                                    </div>
                                    <p className="text-gray-200 line-height-3 mt-0 mb-3">
                                        Adipiscing diam donec adipiscing
                                        tristique risus nec feugiat in
                                        fermentum. Sed ullamcorper morbi
                                        tincidunt ornare massa eget egestas
                                        purus.
                                    </p>
                                    <span className="text-gray-300 font-medium">
                                        4 days ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Gradient Border" code={block7}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-5xl text-900 mb-3">
                        Recent News
                    </div>
                    <div className="text-700 line-height-3 text-xl mb-6">
                        Elementum nibh tellus molestie nunc non blandit. Enim eu
                        turpis egestas pretium aenean pharetra.
                    </div>

                    <div className="flex flex-column lg:flex-row gap-5">
                        <div
                            className="shadow-2 border-round-xl"
                            style={{
                                background:
                                    "linear-gradient(15deg, #F91616, #F97316)",
                                borderLeft: "10px solid transparent",
                            }}
                        >
                            <div className="p-4 border-round surface-card h-full">
                                <div className="flex mb-3">
                                    <p-avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                        shape="circle"
                                    ></p-avatar>
                                    <div className="ml-2">
                                        <div className="font-medium text-900 mb-1">
                                            Arlene McCoy
                                        </div>
                                        <div className="text-sm flex align-items-center text-700">
                                            <span>9 July, 2022</span>
                                            <div
                                                className="border-circle surface-300 mx-2"
                                                style={{
                                                    width: "0.25rem",
                                                    height: "0.25rem",
                                                }}
                                            ></div>
                                            <span>16 min read</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xl text-900 font-medium mb-3 line-height-3">
                                    &lsquo;Real and imminent&lsquo; extinction risk
                                </div>
                                <div className="line-height-3 text-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>

                        <div
                            className="shadow-2 border-round-xl"
                            style={{
                                background:
                                    "linear-gradient(15deg, #CC63F1, #6366F1)",
                                borderLeft: "10px solid transparent",
                            }}
                        >
                            <div className="p-4 border-round surface-card h-full">
                                <div className="flex mb-3">
                                    <p-avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-f-11.png"
                                        shape="circle"
                                    ></p-avatar>
                                    <div className="ml-2">
                                        <div className="font-medium text-900 mb-1">
                                            Dianne Russell
                                        </div>
                                        <div className="text-sm flex align-items-center text-700">
                                            <span>10 July, 2022</span>
                                            <div
                                                className="border-circle surface-300 mx-2"
                                                style={{
                                                    width: "0.25rem",
                                                    height: "0.25rem",
                                                }}
                                            ></div>
                                            <span>11 min read</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xl text-900 font-medium mb-3 line-height-3">
                                    Climate standards for power plants
                                </div>
                                <div className="line-height-3 text-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>

                        <div
                            className="shadow-2 border-round-xl"
                            style={{
                                background:
                                    "linear-gradient(15deg, #06D465, #06B6D4)",
                                borderLeft: "10px solid transparent",
                            }}
                        >
                            <div className="p-4 border-round surface-card h-full">
                                <div className="flex mb-3">
                                    <p-avatar
                                        image="/demo/images/blocks/avatars/circle/avatar-m-9.png"
                                        shape="circle"
                                    ></p-avatar>
                                    <div className="ml-2">
                                        <div className="font-medium text-900 mb-1">
                                            Ronald Richards
                                        </div>
                                        <div className="text-sm flex align-items-center text-700">
                                            <span>11 July, 2022</span>
                                            <div
                                                className="border-circle surface-300 mx-2"
                                                style={{
                                                    width: "0.25rem",
                                                    height: "0.25rem",
                                                }}
                                            ></div>
                                            <span>7 min read</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xl text-900 font-medium mb-3 line-height-3">
                                    Heat Waves Around the World
                                </div>
                                <div className="line-height-3 text-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Blog;
