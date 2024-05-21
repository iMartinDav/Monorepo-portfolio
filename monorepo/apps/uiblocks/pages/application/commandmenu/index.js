import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import BlockViewer from "../../../demo/components/BlockViewer";

const CommandMenu = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState(
        "Search menus, shortcuts, contact and more..."
    );
    const [value6, setValue6] = useState("Sign");

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

    const block1 = `
<section className="w-30rem border-1 surface-border border-round-lg">
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" placeholder="Search menus, shortcuts, contact and more..." className="w-full border-none shadow-none outline-none" onClick={() => setVisible1(true)} />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible1}
    onHide={() => {
        setVisible1(false);
        setValue1('');
    }}
    onShow={() => input1.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    contentClassName="border-round-top p-0"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '50vw', maxWidth: '750px' }}>
    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText ref={input1} type="text" placeholder="Search menus, shortcuts, contact and more..." value={value1} onChange={(e) => setValue1(e.target.value)} className="w-full border-none shadow-none outline-none" />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
    <div className="border-y-1 surface-border px-3 py-3">
        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">unread mails</li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">go to last mail</li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">lock account</li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">profile</li>
        </ul>
    </div>
    <div className="p-2">
        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
            <div className="flex align-items-center">
                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                    <i className="pi pi-cog text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">System Settings</p>
                    <p className="font-normal text-xs text-600 mt-0 mb-0">Change your system preferences</p>
                </div>
            </div>
            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">S</span>
        </article>
        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
            <div className="flex align-items-center">
                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                    <i className="pi pi-user text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">My Profile</p>
                    <p className="font-normal text-xs text-600 mt-0 mb-0">Go to your profile</p>
                </div>
            </div>
            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">P</span>
        </article>
        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
            <div className="flex align-items-center">
                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                    <i className="pi pi-moon text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Switch to Dark Mode</p>
                    <p className="font-normal text-xs text-600 mt-0 mb-0">Switch to dark mode save your eyes</p>
                </div>
            </div>
            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">D</span>
        </article>
        <article className="flex w-full justify-content-between align-items-center select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
            <div className="flex align-items-center">
                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                    <i className="pi pi-sign-out text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Log out</p>
                    <p className="font-normal text-xs text-600 mt-0 mb-0">End your session</p>
                </div>
            </div>
        </article>
    </div>
</Dialog>
        `;

    const block2 = `
<section className="w-30rem border-1 surface-border border-round-lg">
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" placeholder="Search menus, shortcuts, contact and more..." className="w-full border-none shadow-none outline-none" onClick={() => setVisible2(true)} />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible2}
    onHide={() => {
        setVisible2(false);
        setValue2('');
    }}
    onShow={() => input2.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    contentClassName="border-round-top p-0"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '50vw', maxWidth: '750px' }}>
    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText ref={input2} type="text" placeholder="Search menus, shortcuts, contact and more..." value={value2} onChange={(e) => setValue2(e.target.value)} className="w-full border-none shadow-none outline-none" />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
    <section className="border-y-1 surface-border p-5 flex flex-column align-items-center gap-2">
        <h2 className="m-0 font-semibold text-900 text-xl">No emails found</h2>
        <span className="text-sm text-600 text-center">"{value2}" could not match any emails. Would you like to write a new email?</span>
        <div className="flex justfiy-content-center gap-3 mt-3">
            <button className="p-button p-button-outlined" label="View all emails">
                View all emails
            </button>
            <button icon="pi pi-plus" className="p-button" label="Compose">
                Compose
            </button>
        </div>
    </section>
</Dialog>
            `;

    const block3 = `
<section className="w-30rem border-1 surface-border border-round-lg">
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" placeholder="Search menus, shortcuts, contact and more..." className="w-full border-none shadow-none outline-none" onClick={() => setVisible3(true)} />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible3}
    onHide={() => {
        setVisible3(false);
        setValue3('');
    }}
    onShow={() => input3.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    contentClassName="border-round-top p-0"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '50vw', maxWidth: '750px' }}>
    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" ref={input3} placeholder="Search menus, shortcuts, contact and more..." value={value3} onChange={(e) => setValue3(e.target.value)} className="w-full border-none shadow-none outline-none" />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
    <div className="border-y-1 surface-border p-3">
        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-file mr-2"></i>Add new file
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">N</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-lock mr-2"></i>Lock Session
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-moon mr-2"></i>Dark Mode
                </span>
            </li>
        </ul>
    </div>
    <div className="p-3">
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-bell mr-2"></i>
                    Notifications
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">C</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-bookmark mr-2"></i>
                    Bookmarks
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">B</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-bolt mr-2"></i>Quick Actions
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">Q</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-users mr-2"></i>Manage User Groups
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">U</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-book mr-2"></i>Go to Documentation
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                <span className="flex align-items-center">
                    <i className="pi pi-cog mr-2"></i>System Preferences
                </span>
                <div className="hidden md:flex align-items-center">
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                    <span className="mx-2 text-600">+</span>
                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">P</span>
                </div>
            </li>
        </ul>
    </div>
</Dialog>
                `;

    const block4 = `
<section className="w-30rem border-1 surface-border border-round-lg">
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" placeholder="Find someone quickly..." className="w-full border-none shadow-none outline-none text-white-alpha-80" onClick={() => setVisible4(true)} />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible4}
    onHide={() => {
        setVisible4(false);
        setValue4('');
    }}
    onShow={() => input4.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    contentClassName="border-round-top p-0"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '50vw', maxWidth: '750px' }}>
    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-500"></i>
            <InputText type="text" ref={input4} placeholder="Find someone quickly..." value={value4} onChange={(e) => setValue4(e.target.value)} className="w-full border-none shadow-none outline-none" />
        </span>
        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span>
    </div>
    <div className="border-y-1 surface-border p-3">
        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-1.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Sarah Dylan</span>
                    <span className="text-600 text-xs">@srhdylan</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-2.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Marvin McKinney</span>
                    <span className="text-600 text-xs">@terekdriving</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-3.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Jenny Wilson</span>
                    <span className="text-600 text-xs">@lewissanctuary</span>
                </div>
            </li>
        </ul>
    </div>
    <div className="p-3">
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-4.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Wade Warren</span>
                    <span className="text-600 text-xs">@amusementethics</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-5.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Darlene Robertson</span>
                    <span className="text-600 text-xs">@pointersnutmeg</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-6.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Courtney Henry</span>
                    <span className="text-600 text-xs">@amisssteadily</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-7.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Annette Black</span>
                    <span className="text-600 text-xs">@raddledhastily</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-8.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Arlene McCoy</span>
                    <span className="text-600 text-xs">@germlessshredder</span>
                </div>
            </li>
            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                <img src="/demo/images/blocks/avatars/circle/avatar-f-9.png" alt="Image" className="w-2rem h-2rem" />
                <div className="flex flex-column justify-content-center">
                    <span className="text-800 text-base">Savannah Nguyen</span>
                    <span className="text-600 text-xs">@zapdetergent</span>
                </div>
            </li>
        </ul>
    </div>
</Dialog>
                    `;

    const block5 = `
<section className="w-30rem bg-black-alpha-50 border-round-lg" style={{ backdropFilter: 'blur(70px)' }}>
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-white-alpha-80"></i>
            <InputText
                type="text"
                value={value5}
                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                onClick={() => {
                    setVisible5(true);
                    setValue5('');
                }}
            />
        </span>
        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible5}
    onHide={() => {
        setVisible5(false);
        setValue5('Search menus, shortcuts, contact and more...');
    }}
    onShow={() => input5.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    className="border-none bg-black-alpha-50"
    contentClassName="border-black-alpha-20 border-round p-0 bg-transparent"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '750px', backdropFilter: 'blur(70px)' }}>
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-white-alpha-80"></i>
            <InputText type="text" ref={input5} value={value5} onChange={(e) => setValue5(e.target.value)} className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm" />
        </span>
        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">⌘K</span>
    </div>
    <div className="border-y-2 border-white-alpha-20 p-3">
        <h2 className="font-semibold text-xs text-white-alpha-50 mb-2 mt-0 px-1">RECENT</h2>
        <ul className="list-none m-0 p-0">
            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">unread mails</li>
            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">go to last mail</li>
            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">lock account</li>
            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">profile</li>
        </ul>
    </div>
    <div className="p-3">
        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
            <div className="flex align-items-center">
                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                    <i className="pi pi-star text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Favorites</p>
                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Reach your favorites easily</p>
                </div>
            </div>
            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                <span className="mx-2 text-white-alpha-80">+</span>
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">F</span>
            </div>
        </article>
        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
            <div className="flex align-items-center">
                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                    <i className="pi pi-github text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Repositories</p>
                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Get list and manage your repositories</p>
                </div>
            </div>
            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                <span className="mx-2 text-white-alpha-80">+</span>
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">SHIFT</span>
                <span className="mx-2 text-white-alpha-80">+</span>
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">R</span>
            </div>
        </article>
        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
            <div className="flex align-items-center">
                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                    <i className="pi pi-bolt text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Uprade your plan now</p>
                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Access all premium benefits</p>
                </div>
            </div>
            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                <span className="mx-2 text-white-alpha-80">+</span>
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">U</span>
            </div>
        </article>
        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
            <div className="flex align-items-center">
                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                    <i className="pi pi-sync text-lg"></i>
                </span>
                <div className="ml-2">
                    <p className="font-semibold text-sm mt-0 mb-1">Resync your account</p>
                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Refresh all of your data</p>
                </div>
            </div>
            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                <span className="mx-2 text-white-alpha-80">+</span>
                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">/</span>
            </div>
        </article>
    </div>
    <div className="p-2 bg-white-alpha-10 border-top-1 border-white-alpha-20 flex flex-wrap sm:flex-nowrap align-items-center">
        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">P</span>
            Select
        </p>
        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↑</span>
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↓</span>
            Navigate
        </p>
        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">esc</span>
            Close
        </p>
        <p className="w-full md:w-auto mt-0 mb-0 md:ml-auto text-xs text-white-alpha-70">4 results</p>
    </div>
</Dialog>
                        `;

    const block6 = `
<section className="w-30rem bg-black-alpha-50 border-round-lg" style={{ backdropFilter: 'blur(70px)' }}>
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-white-alpha-80"></i>
            <InputText
                type="text"
                value={value6}
                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                onClick={() => {
                    setVisible6(true);
                    setValue6('');
                }}
            />
        </span>
        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">⌘K</span>
    </div>
</section>
<Dialog
    visible={visible6}
    onHide={() => {
        setVisible6(false);
        setValue6('Sign');
    }}
    onShow={() => input6.current.focus()}
    modal
    dismissableMask
    showHeader={false}
    className="border-none bg-black-alpha-50"
    contentClassName="border-black-alpha-20 border-round p-0 bg-transparent"
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    style={{ width: '750px', backdropFilter: 'blur(70px)' }}>
    <div className="flex w-full align-items-center justify-content-between px-1">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search text-white-alpha-80"></i>
            <InputText type="text" ref={input6} value={value6} onChange={(e) => setValue6(e.target.value)} className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm" />
        </span>
        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">⌘K</span>
    </div>
    <div className="flex flex-column md:flex-row border-top-1 border-white-alpha-20">
        <div className="w-full md:w-6 p-3 md:border-right-1 border-white-alpha-20">
            <ul className="list-none m-0 p-0">
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-image mr-2"></i>
                        mail-sign.jpg
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-image mr-2"></i>
                        portrait-sign.jpg
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-image mr-2"></i>
                        sign-in.png
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-image mr-2"></i>
                        sign-out.png
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-file-excel mr-2"></i>
                        sign-terms.xls
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                    <span>
                        <i className="pi pi-file-pdf mr-2"></i>
                        sign-present.pdf
                    </span>
                    <i className="pi pi-chevron-right text-xs"></i>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-6 px-3 py-4 md:p-3 flex flex-column align-items-center md:align-items-start border-top-1 border-white-alpha-20 md:border-none">
            <img src="/demo/images/blocks/commandmenu/commandmenu-3.jpeg" className="w-10rem h-6rem mx-auto border-round shadow-2" alt="Image" />
            <p className="font-medium text-sm text-white mt-2 mb-2 w-full text-center">portrait-sign.jpg</p>
            <div className="flex w-full gap-2 text-white-alpha-80">
                <span className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style={{ height: '2rem', width: '4rem' }}>
                    <i className="pi pi-eye"></i>
                </span>
                <span className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style={{ height: '2rem', width: '4rem' }}>
                    <i className="pi pi-star"></i>
                </span>
                <span className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style={{ height: '2rem', width: '4rem' }}>
                    <i className="pi pi-copy"></i>
                </span>
                <span className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style={{ height: '2rem', width: '4rem' }}>
                    <i className="pi pi-upload"></i>
                </span>
            </div>
            <table className="w-full mt-2">
                <tr>
                    <td>
                        <p className="text-white font-medium text-xs my-1">File Size</p>
                    </td>
                    <td>
                        <p className="text-white font-medium text-xs text-right my-1">345 kb</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-white font-medium text-xs my-1">Location</p>
                    </td>
                    <td>
                        <div className="inline-flex w-full align-items-center justify-content-end">
                            <p className="text-white font-medium text-xs text-right my-1">My Drive/Personal/Images/</p>
                            <span className="bg-white-alpha-20 border-circle ml-1 p-1 flex align-items-center justify-content-center">
                                <i className="pi pi-folder-open text-white" style={{ fontSize: '8px' }}></i>
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-white font-medium text-xs my-1">Tags</p>
                    </td>
                    <td>
                        <div className="inline-flex w-full justify-content-end">
                            <div className="flex align-items-center mr-2">
                                <div
                                    className="bg-green-500 flex-shrink-0 border-circle mr-1"
                                    style={{
                                        width: '10px',
                                        height: '10px'
                                    }}></div>
                                <p className="text-white font-medium text-xs mt-0 mb-0">Green</p>
                            </div>
                            <div className="flex align-items-center">
                                <div
                                    className="bg-yellow-500 flex-shrink-0 border-circle mr-1"
                                    style={{
                                        width: '10px',
                                        height: '10px'
                                    }}></div>
                                <p className="text-white font-medium text-xs mt-0 mb-0">Yellow</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div className="hidden md:flex column-gap-1 md:column-gap-3 flex-wrap md:flex-nowrap align-items-center justify-content-evenly sm:justify-content-start px-2 bg-white-alpha-10 border-top-1 border-white-alpha-20">
        <p className="text-xs text-white-alpha-70">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">⏎</span>
            Select
        </p>
        <p className="text-xs text-white-alpha-70">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↑</span>
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↓</span>
            Navigate
        </p>
        <p className="text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">esc</span>
            Close
        </p>
    </div>
</Dialog>
                `;

    return (
        <>
            <div className="block-category-title">CommandMenu</div>
            <BlockViewer
                header="Simple"
                code={block1}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <section className="w-30rem border-1 surface-border border-round-lg">
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                placeholder="Search menus, shortcuts, contact and more..."
                                className="w-full border-none shadow-none outline-none"
                                onClick={() => setVisible1(true)}
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>

                <Dialog
                    visible={visible1}
                    onHide={() => {
                        setVisible1(false);
                        setValue1("");
                    }}
                    onShow={() => input1.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    contentClassName="border-round-top p-0"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "50vw" }}
                >
                    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                ref={input1}
                                type="text"
                                placeholder="Search menus, shortcuts, contact and more..."
                                value={value1}
                                onChange={(e) => setValue1(e.target.value)}
                                className="w-full border-none shadow-none outline-none"
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <div className="border-y-1 surface-border px-3 py-3">
                        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">
                            RECENT
                        </h2>
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
                                unread mails
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
                                go to last mail
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
                                lock account
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
                                profile
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                            <div className="flex align-items-center">
                                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                                    <i className="pi pi-cog text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        System Settings
                                    </p>
                                    <p className="font-normal text-xs text-600 mt-0 mb-0">
                                        Change your system preferences
                                    </p>
                                </div>
                            </div>
                            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">
                                S
                            </span>
                        </article>

                        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                            <div className="flex align-items-center">
                                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                                    <i className="pi pi-user text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        My Profile
                                    </p>
                                    <p className="font-normal text-xs text-600 mt-0 mb-0">
                                        Go to your profile
                                    </p>
                                </div>
                            </div>
                            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">
                                P
                            </span>
                        </article>

                        <article className="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                            <div className="flex align-items-center">
                                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                                    <i className="pi pi-moon text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Switch to Dark Mode
                                    </p>
                                    <p className="font-normal text-xs text-600 mt-0 mb-0">
                                        Switch to dark mode save your eyes
                                    </p>
                                </div>
                            </div>
                            <span className="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">
                                D
                            </span>
                        </article>

                        <article className="flex w-full justify-content-between align-items-center select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                            <div className="flex align-items-center">
                                <span className="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                                    <i className="pi pi-sign-out text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Log out
                                    </p>
                                    <p className="font-normal text-xs text-600 mt-0 mb-0">
                                        End your session
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </Dialog>
            </BlockViewer>
            <BlockViewer
                header="Not Found"
                code={block2}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <section className="w-30rem border-1 surface-border border-round-lg">
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                placeholder="Search menus, shortcuts, contact and more..."
                                className="w-full border-none shadow-none outline-none"
                                onClick={() => setVisible2(true)}
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>

                <Dialog
                    visible={visible2}
                    onHide={() => {
                        setVisible2(false);
                        setValue2("");
                    }}
                    onShow={() => input2.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    contentClassName="border-round-top p-0"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "50vw" }}
                >
                    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                ref={input2}
                                type="text"
                                placeholder="Search menus, shortcuts, contact and more..."
                                value={value2}
                                onChange={(e) => setValue2(e.target.value)}
                                className="w-full border-none shadow-none outline-none"
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <section className="border-y-1 surface-border p-5 flex flex-column align-items-center gap-2">
                        <h2 className="m-0 font-semibold text-900 text-xl">
                            No emails found
                        </h2>
                        <span className="text-sm text-600 text-center">
                            &ldquo;{value2} &ldquo; could not match any emails. Would you
                            like to write a new email?
                        </span>
                        <div className="flex justfiy-content-center gap-3 mt-3">
                            <button
                                className="p-button p-button-outlined"
                                label="View all emails"
                            >
                                View all emails
                            </button>
                            <button
                                icon="pi pi-plus"
                                className="p-button"
                                label="Compose"
                            >
                                Compose
                            </button>
                        </div>
                    </section>
                </Dialog>
            </BlockViewer>
            <BlockViewer
                header="With Icons"
                code={block3}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <section className="w-30rem border-1 surface-border border-round-lg">
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                placeholder="Search menus, shortcuts, contact and more..."
                                className="w-full border-none shadow-none outline-none"
                                onClick={() => setVisible3(true)}
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>
                <Dialog
                    visible={visible3}
                    onHide={() => {
                        setVisible3(false);
                        setValue3("");
                    }}
                    onShow={() => input3.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    contentClassName="border-round-top p-0"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "50vw" }}
                >
                    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                ref={input3}
                                placeholder="Search menus, shortcuts, contact and more..."
                                value={value3}
                                onChange={(e) => setValue3(e.target.value)}
                                className="w-full border-none shadow-none outline-none"
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <div className="border-y-1 surface-border p-3">
                        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">
                            RECENT
                        </h2>
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-file mr-2"></i>Add new
                                    file
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        N
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-lock mr-2"></i>Lock
                                    Session
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        L
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-moon mr-2"></i>Dark Mode
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-bell mr-2"></i>
                                    Notifications
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        C
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-bookmark mr-2"></i>
                                    Bookmarks
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        B
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-bolt mr-2"></i>Quick
                                    Actions
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        SHIFT
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        Q
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-users mr-2"></i>Manage
                                    User Groups
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        U
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-book mr-2"></i>Go to
                                    Documentation
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        SHIFT
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        L
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                                <span className="flex align-items-center">
                                    <i className="pi pi-cog mr-2"></i>System
                                    Preferences
                                </span>
                                <div className="hidden md:flex align-items-center">
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        CMD
                                    </span>
                                    <span className="mx-2 text-600">+</span>
                                    <span className="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">
                                        P
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Dialog>
            </BlockViewer>
            <BlockViewer
                header="With Avatars"
                code={block4}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <section className="w-30rem border-1 surface-border border-round-lg">
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                placeholder="Find someone quickly..."
                                className="w-full border-none shadow-none outline-none text-white-alpha-80"
                                onClick={() => setVisible4(true)}
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>
                <Dialog
                    visible={visible4}
                    onHide={() => {
                        setVisible4(false);
                        setValue4("");
                    }}
                    onShow={() => input4.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    contentClassName="border-round-top p-0"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "50vw" }}
                >
                    <div className="flex w-full surface-section align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-500"></i>
                            <InputText
                                type="text"
                                ref={input4}
                                placeholder="Find someone quickly..."
                                value={value4}
                                onChange={(e) => setValue4(e.target.value)}
                                className="w-full border-none shadow-none outline-none"
                            />
                        </span>
                        <span className="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <div className="border-y-1 surface-border p-3">
                        <h2 className="font-semibold text-xs text-500 mb-2 mt-0 px-1">
                            RECENT
                        </h2>
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Sarah Dylan
                                    </span>
                                    <span className="text-600 text-xs">
                                        @srhdylan
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-2.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Marvin McKinney
                                    </span>
                                    <span className="text-600 text-xs">
                                        @terekdriving
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-3.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Jenny Wilson
                                    </span>
                                    <span className="text-600 text-xs">
                                        @lewissanctuary
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Wade Warren
                                    </span>
                                    <span className="text-600 text-xs">
                                        @amusementethics
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-5.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Darlene Robertson
                                    </span>
                                    <span className="text-600 text-xs">
                                        @pointersnutmeg
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-6.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Courtney Henry
                                    </span>
                                    <span className="text-600 text-xs">
                                        @amisssteadily
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-7.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Annette Black
                                    </span>
                                    <span className="text-600 text-xs">
                                        @raddledhastily
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-8.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Arlene McCoy
                                    </span>
                                    <span className="text-600 text-xs">
                                        @germlessshredder
                                    </span>
                                </div>
                            </li>
                            <li className="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                                <img
                                    src="/demo/images/blocks/avatars/circle/avatar-f-9.png"
                                    alt="Image"
                                    className="w-2rem h-2rem"
                                />
                                <div className="flex flex-column justify-content-center">
                                    <span className="text-800 text-base">
                                        Savannah Nguyen
                                    </span>
                                    <span className="text-600 text-xs">
                                        @zapdetergent
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="Transparent"
                code={block5}
                containerClassName="bg-no-repeat bg-center px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                previewStyle={{
                    backgroundImage:
                        "url(/demo/images/blocks/commandmenu/commandmenu-1.jpg)",
                    height: "700px",
                }}
                new
            >
                <section
                    className="w-30rem bg-black-alpha-50 border-round-lg"
                    style={{ backdropFilter: "blur(70px)" }}
                >
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-white-alpha-80"></i>
                            <InputText
                                type="text"
                                value={value5}
                                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                                onClick={() => {
                                    setVisible5(true);
                                    setValue5("");
                                }}
                            />
                        </span>
                        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>
                <Dialog
                    visible={visible5}
                    onHide={() => {
                        setVisible5(false);
                        setValue5(
                            "Search menus, shortcuts, contact and more..."
                        );
                    }}
                    onShow={() => input5.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    className="border-none bg-black-alpha-50"
                    contentClassName="border-black-alpha-20 border-round p-0 bg-transparent"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "750px", backdropFilter: "blur(70px)" }}
                >
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-white-alpha-80"></i>
                            <InputText
                                type="text"
                                ref={input5}
                                value={value5}
                                onChange={(e) => setValue5(e.target.value)}
                                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                            />
                        </span>
                        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <div className="border-y-2 border-white-alpha-20 p-3">
                        <h2 className="font-semibold text-xs text-white-alpha-50 mb-2 mt-0 px-1">
                            RECENT
                        </h2>
                        <ul className="list-none m-0 p-0">
                            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                unread mails
                            </li>
                            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                go to last mail
                            </li>
                            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                lock account
                            </li>
                            <li className="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                profile
                            </li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                            <div className="flex align-items-center">
                                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                                    <i className="pi pi-star text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Favorites
                                    </p>
                                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">
                                        Reach your favorites easily
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    ⌘
                                </span>
                                <span className="mx-2 text-white-alpha-80">
                                    +
                                </span>
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    F
                                </span>
                            </div>
                        </article>

                        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                            <div className="flex align-items-center">
                                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                                    <i className="pi pi-github text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Repositories
                                    </p>
                                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">
                                        Get list and manage your repositories
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    ⌘
                                </span>
                                <span className="mx-2 text-white-alpha-80">
                                    +
                                </span>
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    SHIFT
                                </span>
                                <span className="mx-2 text-white-alpha-80">
                                    +
                                </span>
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    R
                                </span>
                            </div>
                        </article>

                        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                            <div className="flex align-items-center">
                                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                                    <i className="pi pi-bolt text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Uprade your plan now
                                    </p>
                                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">
                                        Access all premium benefits
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    ⌘
                                </span>
                                <span className="mx-2 text-white-alpha-80">
                                    +
                                </span>
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    U
                                </span>
                            </div>
                        </article>

                        <article className="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                            <div className="flex align-items-center">
                                <span className="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                                    <i className="pi pi-sync text-lg"></i>
                                </span>
                                <div className="ml-2">
                                    <p className="font-semibold text-sm mt-0 mb-1">
                                        Resync your account
                                    </p>
                                    <p className="font-normal text-xs text-white-alpha-80 mt-0 mb-0">
                                        Refresh all of your data
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    ⌘
                                </span>
                                <span className="mx-2 text-white-alpha-80">
                                    +
                                </span>
                                <span className="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">
                                    /
                                </span>
                            </div>
                        </article>
                    </div>
                    <div className="p-2 bg-white-alpha-10 border-top-1 border-white-alpha-20 flex flex-wrap sm:flex-nowrap align-items-center">
                        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                P
                            </span>
                            Select
                        </p>
                        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                ↑
                            </span>
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                ↓
                            </span>
                            Navigate
                        </p>
                        <p className="hidden md:block mt-0 mb-0 mr-3 text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">
                                esc
                            </span>
                            Close
                        </p>
                        <p className="w-full md:w-auto mt-0 mb-0 md:ml-auto text-xs text-white-alpha-70">
                            4 results
                        </p>
                    </div>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Preview"
                code={block6}
                containerClassName="bg-no-repeat bg-center px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                previewStyle={{
                    backgroundImage:
                        "url(/demo/images/blocks/commandmenu/commandmenu-2.jpg)",
                    height: "700px",
                }}
                new
            >
                <section
                    className="w-30rem bg-black-alpha-50 border-round-lg"
                    style={{ backdropFilter: "blur(70px)" }}
                >
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-white-alpha-80"></i>
                            <InputText
                                type="text"
                                value={value6}
                                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                                onClick={() => {
                                    setVisible6(true);
                                    setValue6("");
                                }}
                            />
                        </span>
                        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">
                            ⌘K
                        </span>
                    </div>
                </section>
                <Dialog
                    visible={visible6}
                    onHide={() => {
                        setVisible6(false);
                        setValue6("Sign");
                    }}
                    onShow={() => input6.current.focus()}
                    modal
                    dismissableMask
                    showHeader={false}
                    className="border-none bg-black-alpha-50"
                    contentClassName="border-black-alpha-20 border-round p-0 bg-transparent"
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "750px", backdropFilter: "blur(70px)" }}
                >
                    <div className="flex w-full align-items-center justify-content-between px-1">
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-search text-white-alpha-80"></i>
                            <InputText
                                type="text"
                                ref={input6}
                                value={value6}
                                onChange={(e) => setValue6(e.target.value)}
                                className="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm"
                            />
                        </span>
                        <span className="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-2s hidden md:block">
                            ⌘K
                        </span>
                    </div>
                    <div className="flex flex-column md:flex-row border-top-1 border-white-alpha-20">
                        <div className="w-full md:w-6 p-3 md:border-right-1 border-white-alpha-20">
                            <ul className="list-none m-0 p-0">
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-image mr-2"></i>
                                        mail-sign.jpg
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-image mr-2"></i>
                                        portrait-sign.jpg
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-image mr-2"></i>
                                        sign-in.png
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-image mr-2"></i>
                                        sign-out.png
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-file-excel mr-2"></i>
                                        sign-terms.xls
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                                <li className="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                                    <span>
                                        <i className="pi pi-file-pdf mr-2"></i>
                                        sign-present.pdf
                                    </span>
                                    <i className="pi pi-chevron-right text-xs"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6 px-3 py-4 md:p-3 flex flex-column align-items-center md:align-items-start border-top-1 border-white-alpha-20 md:border-none">
                            <img
                                src="/demo/images/blocks/commandmenu/commandmenu-3.jpeg"
                                className="w-10rem h-6rem mx-auto border-round shadow-2"
                                alt="Image"
                            />
                            <p className="font-medium text-sm text-white mt-2 mb-2 w-full text-center">
                                portrait-sign.jpg
                            </p>
                            <div className="flex w-full gap-2 text-white-alpha-80">
                                <span
                                    className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer"
                                    style={{ height: "2rem", width: "4rem" }}
                                >
                                    <i className="pi pi-eye"></i>
                                </span>
                                <span
                                    className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer"
                                    style={{ height: "2rem", width: "4rem" }}
                                >
                                    <i className="pi pi-star"></i>
                                </span>
                                <span
                                    className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer"
                                    style={{ height: "2rem", width: "4rem" }}
                                >
                                    <i className="pi pi-copy"></i>
                                </span>
                                <span
                                    className="flex flex-grow-1 justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer"
                                    style={{ height: "2rem", width: "4rem" }}
                                >
                                    <i className="pi pi-upload"></i>
                                </span>
                            </div>
                            <table className="w-full mt-2">
                                <tr>
                                    <td>
                                        <p className="text-white font-medium text-xs my-1">
                                            File Size
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-white font-medium text-xs text-right my-1">
                                            345 kb
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-white font-medium text-xs my-1">
                                            Location
                                        </p>
                                    </td>
                                    <td>
                                        <div className="inline-flex w-full align-items-center justify-content-end">
                                            <p className="text-white font-medium text-xs text-right my-1">
                                                My Drive/Personal/Images/
                                            </p>
                                            <span className="bg-white-alpha-20 border-circle ml-1 p-1 flex align-items-center justify-content-center">
                                                <i
                                                    className="pi pi-folder-open text-white"
                                                    style={{ fontSize: "8px" }}
                                                ></i>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-white font-medium text-xs my-1">
                                            Tags
                                        </p>
                                    </td>
                                    <td>
                                        <div className="inline-flex w-full justify-content-end">
                                            <div className="flex align-items-center mr-2">
                                                <div
                                                    className="bg-green-500 flex-shrink-0 border-circle mr-1"
                                                    style={{
                                                        width: "10px",
                                                        height: "10px",
                                                    }}
                                                ></div>
                                                <p className="text-white font-medium text-xs mt-0 mb-0">
                                                    Green
                                                </p>
                                            </div>
                                            <div className="flex align-items-center">
                                                <div
                                                    className="bg-yellow-500 flex-shrink-0 border-circle mr-1"
                                                    style={{
                                                        width: "10px",
                                                        height: "10px",
                                                    }}
                                                ></div>
                                                <p className="text-white font-medium text-xs mt-0 mb-0">
                                                    Yellow
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="hidden md:flex column-gap-1 md:column-gap-3 flex-wrap md:flex-nowrap align-items-center justify-content-evenly sm:justify-content-start px-2 bg-white-alpha-10 border-top-1 border-white-alpha-20">
                        <p className="text-xs text-white-alpha-70">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                ⏎
                            </span>
                            Select
                        </p>
                        <p className="text-xs text-white-alpha-70">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                ↑
                            </span>
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">
                                ↓
                            </span>
                            Navigate
                        </p>
                        <p className="text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
                            <span className="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">
                                esc
                            </span>
                            Close
                        </p>
                    </div>
                </Dialog>
            </BlockViewer>
        </>
    );
};

export default CommandMenu;
