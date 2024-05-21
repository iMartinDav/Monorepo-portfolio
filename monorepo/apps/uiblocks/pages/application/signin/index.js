import React, { useState } from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { Carousel } from 'primereact/carousel';
import { Ripple } from 'primereact/ripple';

const SignIn = () => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");


    const features = [
        { title: 'Unlimited Inbox', image: 'live-collaboration.svg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Data Security', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Cloud Backup Williams', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
    ];

    const block1 = `
<div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div className="text-center mb-5">
        <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" placeholder="Password" className="w-full mb-3" />

        <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" className="w-full" />
    </div>
</div>
    `;

    const block2 = `
<div className="flex">
    <div className="surface-section w-full md:w-6 p-6 md:p-8">
        <div className="mb-5">
            <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium mr-2">Don't have an account?</span>
            <a className="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a>
        </div>
        <div>
            <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email2" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password2" type="password" placeholder="Password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme2" className="mr-2" checked={checked2} onChange={(e) => setChecked2(e.checked)} />
                    <label htmlFor="rememberme2">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
    </div>
    <div className="hidden md:block w-6 bg-no-repeat bg-cover" style={{ backgroundImage: "url('/demo/images/blocks/signin/signin.jpg')" }}></div>
</div>
    `;

    const block3 = `
<div style={{ background: 'url("/demo/images/blocks/signin/signin-2.jpg") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 p-4 lg:p-7" style={{ backgroundColor: 'rgba(255,255,255,.7)' }}>
            <img src="/demo/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" className="mb-6" />
            <div className="text-xl text-black-alpha-90 font-500 mb-3">Welcome to Bastion</div>
            <p className="text-black-alpha-50 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-start mb-4">
                    <div>
                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                            <i className="text-xl text-white pi pi-inbox"></i>
                        </span>
                    </div>
                    <div className="ml-3">
                        <span className="font-medium text-black-alpha-90">Unlimited Inbox</span>
                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. </p>
                    </div>
                </li>
                <li className="flex align-items-start mb-4">
                    <div>
                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                            <i className="text-xl text-white pi pi-shield"></i>
                        </span>
                    </div>
                    <div className="ml-3">
                        <span className="font-medium text-black-alpha-90">Premium Security</span>
                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.</p>
                    </div>
                </li>
                <li className="flex align-items-start">
                    <div>
                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                            <i className="text-xl text-white pi pi-globe"></i>
                        </span>
                    </div>
                    <div className="ml-3">
                        <span className="font-medium text-black-alpha-90">Cloud Backups Inbox</span>
                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
            <div className="text-900 text-2xl font-medium mb-6">Login</div>
            <label htmlFor="email3" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email3" type="text" placeholder="Email address" className="w-full mb-4" />

            <label htmlFor="password3" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password3" type="password" placeholder="Password" className="w-full mb-4" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme3" className="mr-2" checked={checked3} onChange={(e) => setChecked3(e.checked)} />
                    <label htmlFor="rememberme3">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>

            <Button label="Login" icon="pi pi-user" className="w-full" />

            <Divider align="center" className="my-6">
                <span className="text-600 font-normal text-sm">OR</span>
            </Divider>

            <Button label="Sign In with GitHub" icon="pi pi-github" className="w-full p-button-secondary" />

            <div className="mt-6 text-center text-600">
                Don't have an account? <a tabIndex="0" className="font-medium text-blue-500">Sign up</a>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap shadow-2">
        <div className="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="35" className="mb-6" />
            <Carousel value={features} itemTemplate={(feature) =>
                <div className="text-center mb-8">
                    <img src={\`/demo/images/blocks/illustration/$\{feature.image}\`} alt="Image" className="mb-6 w-6" />
                    <div className="mx-auto font-medium text-xl mb-4 text-blue-900">{feature.title}</div>
                    <p className="m-0 text-blue-700 line-height-3">{feature.text}</p>
                </div>} />
        </div>
        <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
            <div className="flex align-items-center justify-content-between mb-7">
                <span className="text-2xl font-medium text-900">Login to Bastion</span>
                <a tabIndex="0" className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Sign up</a>
            </div>
            <div className="flex justify-content-between">
                <button className="p-ripple mr-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                    <i className="pi pi-facebook text-indigo-500 mr-2"></i>
                    <span>Sign in With Facebook</span>
                    <Ripple />
                </button>
                <button className="p-ripple ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                    <i className="pi pi-google text-red-500 mr-2"></i>
                    <span>Sign in With Google</span>
                    <Ripple />
                </button>
            </div>
            <Divider align="center" className="my-4">
                <span className="text-600 font-normal text-sm">OR</span>
            </Divider>

            <label htmlFor="email4" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email4" type="text" placeholder="Email address" className="w-full mb-3 p-3" />

            <label htmlFor="password4" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password4" type="password" placeholder="Password" className="w-full mb-3 p-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" className="mr-2" checked={checked4} onChange={(e) => setChecked4(e.checked)} />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
            </div>

            <Button label="Sign In" className="w-full py-3 font-medium" />
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center" style={{ background: 'linear-gradient(-225deg,#ac32e4,#7918f2 48%,#4801ff)' }}>
    <div className="p-6 shadow-2 text-center lg:w-30rem" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.8)' }}>
        <div className="text-4xl font-medium mb-6">Welcome</div>
        <input type="text" className="appearance-none border-none p-3 w-full outline-none text-xl block mb-4 bg-white-alpha-10 text-white-alpha-60" value={email} style={{ borderRadius: '30px' }} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="appearance-none border-none p-3 w-full outline-none text-xl mb-4 bg-white-alpha-10 text-white-alpha-60" value={password} style={{ borderRadius: '30px' }} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" className="appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium w-12rem bg-white-alpha-30 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150" style={{ borderRadius: '30px' }}>Sign In</button>
        <a className="cursor-pointer font-medium block text-center">Forgot Password?</a>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Sign-In</div>
            <BlockViewer header="Simple in Card" code={block1} containerClassName="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center" free>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Do not have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText type="password" placeholder="Password" className="w-full mb-3" />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                        </div>

                        <Button label="Sign In" icon="pi pi-user" className="w-full" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Split Screen" code={block2}>
                <div className="flex">
                    <div className="surface-section w-full md:w-6 p-6 md:p-8">
                        <div className="mb-5">
                            <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                            <span className="text-600 font-medium mr-2">Do not have an account?</span>
                            <a className="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a>
                        </div>
                        <div>
                            <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
                            <InputText id="email2" type="text" placeholder="Email address" className="w-full mb-3" />

                            <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
                            <InputText id="password2" type="password" placeholder="Password" className="w-full mb-3" />

                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">
                                    <Checkbox id="rememberme2" className="mr-2" checked={checked2} onChange={(e) => setChecked2(e.checked)} />
                                    <label htmlFor="rememberme2">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                            </div>

                            <Button label="Sign In" icon="pi pi-user" className="w-full" />
                        </div>
                    </div>
                    <div className="hidden md:block w-6 bg-no-repeat bg-cover" style={{ backgroundImage: "url('/demo/images/blocks/signin/signin.jpg')" }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Feature List" code={block3}>
                <div style={{ background: 'url("/demo/images/blocks/signin/signin-2.jpg") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6 p-4 lg:p-7" style={{ backgroundColor: 'rgba(255,255,255,.7)' }}>
                            <img src="/demo/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" className="mb-6" />
                            <div className="text-xl text-black-alpha-90 font-500 mb-3">Welcome to Bastion</div>
                            <p className="text-black-alpha-50 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-start mb-4">
                                    <div>
                                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                            <i className="text-xl text-white pi pi-inbox"></i>
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <span className="font-medium text-black-alpha-90">Unlimited Inbox</span>
                                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. </p>
                                    </div>
                                </li>
                                <li className="flex align-items-start mb-4">
                                    <div>
                                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                            <i className="text-xl text-white pi pi-shield"></i>
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <span className="font-medium text-black-alpha-90">Premium Security</span>
                                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.</p>
                                    </div>
                                </li>
                                <li className="flex align-items-start">
                                    <div>
                                        <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                            <i className="text-xl text-white pi pi-globe"></i>
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <span className="font-medium text-black-alpha-90">Cloud Backups Inbox</span>
                                        <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                            <div className="text-900 text-2xl font-medium mb-6">Login</div>
                            <label htmlFor="email3" className="block text-900 font-medium mb-2">Email</label>
                            <InputText id="email3" type="text" placeholder="Email address" className="w-full mb-4" />

                            <label htmlFor="password3" className="block text-900 font-medium mb-2">Password</label>
                            <InputText id="password3" type="password" placeholder="Password" className="w-full mb-4" />

                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">
                                    <Checkbox id="rememberme3" className="mr-2" checked={checked3} onChange={(e) => setChecked3(e.checked)} />
                                    <label htmlFor="rememberme3">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                            </div>

                            <Button label="Login" icon="pi pi-user" className="w-full" />

                            <Divider align="center" className="my-6">
                                <span className="text-600 font-normal text-sm">OR</span>
                            </Divider>

                            <Button label="Sign In with GitHub" icon="pi pi-github" className="w-full p-button-secondary" />

                            <div className="mt-6 text-center text-600">
                                Do not have an account? <a tabIndex="0" className="font-medium text-blue-500">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Carousel" code={block4}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap shadow-2">
                        <div className="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
                            <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="35" className="mb-6" />
                            <Carousel value={features} itemTemplate={(feature) =>
                                <div className="text-center mb-8">
                                    <img src={`/demo/images/blocks/illustration/${feature.image}`} alt="Image" className="mb-6 w-6" />
                                    <div className="mx-auto font-medium text-xl mb-4 text-blue-900">{feature.title}</div>
                                    <p className="m-0 text-blue-700 line-height-3">{feature.text}</p>
                                </div>} />
                        </div>
                        <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                            <div className="flex align-items-center justify-content-between mb-7">
                                <span className="text-2xl font-medium text-900">Login to Bastion</span>
                                <a tabIndex="0" className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Sign up</a>
                            </div>
                            <div className="flex justify-content-between">
                                <button className="p-ripple mr-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                                    <i className="pi pi-facebook text-indigo-500 mr-2"></i>
                                    <span>Sign in With Facebook</span>
                                    <Ripple />
                                </button>
                                <button className="p-ripple ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                                    <i className="pi pi-google text-red-500 mr-2"></i>
                                    <span>Sign in With Google</span>
                                    <Ripple />
                                </button>
                            </div>
                            <Divider align="center" className="my-4">
                                <span className="text-600 font-normal text-sm">OR</span>
                            </Divider>

                            <label htmlFor="email4" className="block text-900 font-medium mb-2">Email</label>
                            <InputText id="email4" type="text" placeholder="Email address" className="w-full mb-3 p-3" />

                            <label htmlFor="password4" className="block text-900 font-medium mb-2">Password</label>
                            <InputText id="password4" type="password" placeholder="Password" className="w-full mb-3 p-3" />

                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">
                                    <Checkbox id="rememberme" className="mr-2" checked={checked4} onChange={(e) => setChecked4(e.checked)} />
                                    <label htmlFor="rememberme">Remember me</label>
                                </div>
                                <a className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
                            </div>

                            <Button label="Sign In" className="w-full py-3 font-medium" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Glass" code={block5}>
                <div className="px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center" style={{ background: 'linear-gradient(-225deg,#ac32e4,#7918f2 48%,#4801ff)' }}>
                    <div className="p-6 shadow-2 text-center lg:w-30rem" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.8)' }}>
                        <div className="text-4xl font-medium mb-6">Welcome</div>
                        <input type="text" className="appearance-none border-none p-3 w-full outline-none text-xl block mb-4 bg-white-alpha-10 text-white-alpha-60" value={email} style={{ borderRadius: '30px' }} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="appearance-none border-none p-3 w-full outline-none text-xl mb-4 bg-white-alpha-10 text-white-alpha-60" value={password} style={{ borderRadius: '30px' }} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium w-12rem bg-white-alpha-30 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150" style={{ borderRadius: '30px' }}>Sign In</button>
                        <a className="cursor-pointer font-medium block text-center">Forgot Password?</a>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default SignIn;
