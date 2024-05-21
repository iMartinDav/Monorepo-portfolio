import React, { useState, useRef, useEffect } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";

const Notification = () => {
    const toast1 = useRef(null);
    const toast2 = useRef(null);
    const toast3 = useRef(null);
    const toast4 = useRef(null);
    const toast5 = useRef(null);
    const toast6 = useRef(null);
    const toast7 = useRef(null);
    const toast8 = useRef(null);
    const toast9 = useRef(null);
    const toast10 = useRef(null);

    const clearAll = () => {
        if (toast1.current) {
            toast1.current.clear();
        }
        if (toast2.current) {
            toast2.current.clear();
        }
        if (toast3.current) {
            toast3.current.clear();
        }
        if (toast4.current) {
            toast4.current.clear();
        }
        if (toast5.current) {
            toast5.current.clear();
        }
        if (toast6.current) {
            toast6.current.clear();
        }
        if (toast7.current) {
            toast7.current.clear();
        }
        if (toast8.current) {
            toast8.current.clear();
        }
        if (toast9.current) {
            toast9.current.clear();
        }
        if (toast10.current) {
            toast10.current.clear();
        }
    };

    const notify1 = () => {
        clearAll();
        toast1.current.show({
            sticky: true,
            closable: false,
            className: "surface-0",
            contentClassName: "p-0",
            content: (
                <div className="flex surface-overlay border-1 surface-border">
                    <div className="flex flex-column p-3">
                        <div className="flex align-items-center">
                            <span
                                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                                style={{ width: "32px", height: "32px" }}
                            >
                                <i className="pi pi-info text-lg"></i>
                            </span>
                            <span className="font-medium text-2xl text-900">
                                Message Title
                            </span>
                        </div>
                        <p className="my-3 p-0 line-height-3 text-700">
                            Sagittis eu volutpat odio facilisis mauris sit amet.
                            Sed velit dignissim sodales ut eu sem integer.
                        </p>
                    </div>
                    <div className="flex flex-column border-left-1 surface-border">
                        <div className="flex-auto flex align-items-center justify-content-center px-3">
                            <Button
                                label="Update"
                                className="p-button-text font-medium"
                                onClick={() => toast1.current.clear()}
                            />
                        </div>
                        <div className="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                            <Button
                                label="Later"
                                className="p-button-text font-medium"
                                onClick={() => toast1.current.clear()}
                            />
                        </div>
                    </div>
                </div>
            ),
        });
    };

    const notify2 = () => {
        clearAll();
        toast2.current.show({
            closable: false,
            className: "surface-900",
            contentClassName: "p-0",
            life: 3000,
            content: (
                <div className="flex flex-column bg-gray-900">
                    <div className="p-3">
                        <div className="flex align-items-center">
                            <span
                                className="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle"
                                style={{ width: "32px", height: "32px" }}
                            >
                                <i className="pi pi-info text-lg"></i>
                            </span>
                            <span className="font-medium text-2xl text-white">
                                Message Title
                            </span>
                        </div>
                        <p className="my-3 line-height-3 text-gray-300">
                            Sagittis eu volutpat odio facilisis mauris sit amet.
                            Sed velit dignissim sodales ut eu sem integer.
                        </p>
                    </div>
                    <div style={{ height: "6px" }} className="bg-gray-700">
                        <div className="h-full bg-blue-500 animate-width animation-duration-3000"></div>
                    </div>
                </div>
            ),
        });
    };

    const notify3 = () => {
        clearAll();
        toast3.current.show({
            severity: "custom-3",
            className: "surface-overlay",
            contentClassName: "p-3",
            life: 3000,
            content: (
                <div className="flex align-items-start flex-1">
                    <i className="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
                    <div>
                        <span className="text-xl font-medium text-900">
                            Custom Icon
                        </span>
                        <p className="text-700 mt-3">
                            Sagittis eu volutpat odio facilisis mauris sit amet.
                        </p>
                    </div>
                </div>
            ),
        });
    };

    const notify4 = () => {
        clearAll();
        toast4.current.show({
            severity: "custom-4",
            className: "surface-overlay",
            contentClassName: "p-3",
            life: 3000,
            content: (
                <div className="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                    <span className="text-xl font-medium text-900">
                        You received 1 new message.
                    </span>
                    <a className="cursor-pointer font-medium text-blue-500">
                        Reply
                    </a>
                </div>
            ),
        });
    };

    const notify5 = () => {
        clearAll();
        toast5.current.show({
            severity: "custom-5",
            className: "surface-overlay",
            contentClassName: "p-4",
            life: 3000,
            content: (
                <div className="flex align-items-start flex-1 align-self-center mr-3">
                    <img
                        src="/demo/images/blocks/avatars/circle-big/avatar-f-2.png"
                        style={{ width: "56px", height: "56px" }}
                        alt="avatar-f-2"
                    />
                    <div className="ml-3">
                        <span className="text-xl font-medium text-900">
                            Arlene McCoy
                        </span>
                        <p className="text-600 mt-2 mb-3">
                            Tristique nulla aliquet enim tortor at auctor 😅...
                            Urna nunc id.
                        </p>
                        <Button
                            className="p-button-sm mr-2"
                            label="Reply"
                            onClick={() => toast5.current.clear()}
                        />
                        <Button
                            className="p-button-sm p-button-text"
                            label="Hide"
                            onClick={() => toast5.current.clear()}
                        />
                    </div>
                </div>
            ),
        });
    };

    const notify6 = () => {
        clearAll();
        toast6.current.show({
            severity: "custom-6",
            className: "bg-cyan-500",
            contentClassName: "p-3",
            life: 3000,
            content: (
                <div className="flex align-items-start flex-1">
                    <i className="pi pi-envelope text-cyan-900 text-2xl mr-3"></i>
                    <div>
                        <span className="text-xl font-medium text-cyan-900">
                            Custom Icon
                        </span>
                        <p className="text-cyan-800 mt-3">
                            Sagittis eu volutpat odio facilisis mauris sit amet.
                        </p>
                    </div>
                </div>
            ),
        });
    };

    const notify7 = () => {
        clearAll();
        toast7.current.show({
            sevetiy: "custom-7",
            className: "bg-orange-300",
            contentClassName: "p-3",
            life: 3000,
            content: (
                <div className="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                    <span className="text-xl font-medium text-orange-900">
                        You received 1 new message.
                    </span>
                    <a className="cursor-pointer font-medium text-orange-700">
                        Reply
                    </a>
                </div>
            ),
        });
    };

    const notify8 = () => {
        clearAll();
        toast8.current.show({
            sevetiy: "custom-8",
            className: "surface-overlay",
            contentClassName: "p-4",
            life: 3000,
            content: (
                <div className="flex gap-3 p-0 -m-4">
                    <img
                        src="/demo/images/blocks/illustration/notification-1.jpg"
                        alt="Image"
                    />
                    <div className="flex flex-column gap-3 py-3">
                        <h1 className="m-0 font-semibold text-base text-900 w-full pr-1">
                            Hey! Did you see new features? 🎉
                        </h1>
                        <span className="text-base text-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </span>
                        <div className="flex gap-3">
                            <Button
                                label="Let's see"
                                className="p-button-text p-0"
                            ></Button>
                            <Button
                                label="Not now"
                                className="p-button-text text-500 p-0"
                            ></Button>
                        </div>
                    </div>
                </div>
            ),
        });
    };

    const NotificationWithProgress = () => {
        const [value, setValue] = useState(0);
        const interval = useRef(null);

        useEffect(() => {
            interval.current = setInterval(() => {
                if (value <= 100) {
                    setValue((prevValue) => prevValue + 20);
                }
                if (value >= 100) {
                    setValue(100);
                    clearInterval(interval.current);
                }
            }, 1000);

            return () => {
                if (interval.current) {
                    clearInterval(interval.current);
                    interval.current = null;
                }
            };
        }, [value]);

        return (
            <article className="flex gap-3 w-full">
                <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                <div className="flex flex-column gap-3 w-full">
                    <p className="m-0 font-semibold text-base text-900">
                        Uploading Your Files
                    </p>
                    <p className="m-0 text-base text-700">
                        Please wait till the end...
                    </p>
                    <div className="flex flex-column gap-2">
                        <ProgressBar
                            value={value}
                            showValue={false}
                            style={{ height: "6px" }}
                        ></ProgressBar>
                        <label className="text-right text-xs text-700">
                            {value}% uploaded...
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            label="Another Upload?"
                            className="p-button-text p-0"
                        ></Button>
                        <Button
                            label="Cancel"
                            className="p-button-text text-500 p-0"
                        ></Button>
                    </div>
                </div>
            </article>
        );
    };

    const notify9 = () => {
        clearAll();
        toast9.current.show({
            sevetiy: "custom-9",
            className: "surface-overlay",
            contentClassName: "p-3",
            life: 3000,
            content: (
                <article className="flex flex-column gap-3 w-full">
                    <div className="flex flex-column gap-2">
                        <p className="m-0 font-semibold text-base text-900">
                            Uploading Your Files
                        </p>
                        <p className="m-0 text-base text-700">
                            Please wait till the end...
                        </p>
                    </div>
                    <img
                        src="/demo/images/blocks/illustration/notification-2.jpg"
                        className="border-round"
                        alt="Image"
                    />
                    <div className="flex gap-3">
                        <Button
                            label="Let's see"
                            className="p-button-text p-0"
                        ></Button>
                        <Button
                            label="Not now"
                            className="p-button-text text-500 p-0"
                        ></Button>
                    </div>
                </article>
            ),
        });
    };

    const notify10 = () => {
        clearAll();
        toast10.current.show({
            sevetiy: "custom-10",
            className: "surface-overlay",
            contentClassName: "p-3",
            life: 6000,
            content: <NotificationWithProgress />,
        });
    };

    const block1 = `
<Button label="Display" onClick={() => notify1()} />
<Toast style={{ width: '30rem' }} life={3000} ref={toast1} key="block1" />
    `;

    const block2 = `
<Button label="Display" onClick={() => notify2()} />
<Toast style={{ width: '30rem' }} ref={toast2} key="block2" />
    `;

    const block3 = `
<Button label="Display" onClick={() => notify3()} />
<Toast key="block3" style={{ width: '30rem' }} ref={toast3} />
    `;

    const block4 = `
<Button label="Display" onClick={() => notify4()} />
<Toast key="block4" style={{ width: '30rem' }} ref={toast4} />
    `;

    const block5 = `
<Button label="Display" onClick={() => notify5()} />
<Toast key="block5" style={{ width: '30rem' }} ref={toast5} />
    `;

    const block6 = `
<Button label="Display" onClick={() => notify6()} />
<Toast key="block6" style={{ width: '30rem' }} ref={toast6} />
    `;

    const block7 = `
<Button label="Display" onClick={() => notify7()} />
<Toast key="block7" style={{ width: '30rem' }} ref={toast7} />
    `;

    const block8 = `
<Button label="Display" onClick={() => notify8()} />
<Toast key="block8" style={{ width: '30rem' }} ref={toast8} />
    `;

    const block9 = `
<Button label="Display" onClick={() => notify9()} />
<Toast key="block9" style={{ width: '20rem' }} ref={toast9} />
    `;

    const block10 = `
<Button label="Display" onClick={() => notify10()} />
<Toast key="block10" style={{ width: '30rem' }} ref={toast10} />
    `;

    return (
        <>
            <div className="block-category-title">Notification</div>
            <BlockViewer
                header="Message Actions"
                code={block1}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify1()} />
                <Toast
                    style={{ width: "30rem" }}
                    life={3000}
                    ref={toast1}
                    key="block1"
                />
            </BlockViewer>

            <BlockViewer
                header="Dark with Timeout"
                code={block2}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify2()} />
                <Toast style={{ width: "30rem" }} ref={toast2} key="block2" />
            </BlockViewer>

            <BlockViewer
                header="Custom Icon"
                code={block3}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify3()} />
                <Toast key="block3" style={{ width: "30rem" }} ref={toast3} />
            </BlockViewer>

            <BlockViewer
                header="Condensed"
                code={block4}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify4()} />
                <Toast key="block4" style={{ width: "30rem" }} ref={toast4} />
            </BlockViewer>

            <BlockViewer
                header="With Profile"
                code={block5}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify5()} />
                <Toast key="block5" style={{ width: "30rem" }} ref={toast5} />
            </BlockViewer>

            <BlockViewer
                header="Colored Custom Icon"
                code={block6}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify6()} />
                <Toast key="block6" style={{ width: "30rem" }} ref={toast6} />
            </BlockViewer>

            <BlockViewer
                header="Colored Condensed"
                code={block7}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => notify7()} />
                <Toast key="block7" style={{ width: "30rem" }} ref={toast7} />
            </BlockViewer>

            <BlockViewer
                header="With Inline Image"
                code={block8}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => notify8()} />
                <Toast key="block8" style={{ width: "30rem" }} ref={toast8} />
            </BlockViewer>

            <BlockViewer
                header="With Image"
                code={block9}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => notify9()} />
                <Toast key="block9" style={{ width: "20rem" }} ref={toast9} />
            </BlockViewer>

            <BlockViewer
                header="With Progress"
                code={block10}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => notify10()} />
                <Toast key="block10" style={{ width: "30rem" }} ref={toast10} />
            </BlockViewer>
        </>
    );
};

export default Notification;
