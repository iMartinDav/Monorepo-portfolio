import React, { useState, useEffect, useRef, useMemo } from "react";
import BlockViewer from "../../../demo/components/BlockViewer";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";

const DialogBlock = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [visible8, setVisible8] = useState(false);
    const [cvc, setCvc] = useState("");
    const [expiration, setExpiration] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("Visa");
    const [checklist, setChecklist] = useState(["binary1"]);
    const [selectedMember, setSelectedMember] = useState(null);
    const members = useMemo(
        () => [
            { name: "Robert Fox", avatar: "avatar-m-11" },
            { name: "John Walter", avatar: "avatar-m-12" },
            { name: "Jane Doe", avatar: "avatar-f-12" },
        ],
        []
    );

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

    const inputObj = {
        input1,
        input2,
        input3,
        input4,
        input5,
        input6,
    };

    const ccRegex = new RegExp("/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/");
    const regexNum = new RegExp("^[0-9]+$");

    const focus = (event, inputId) => {
        const isNumberKey = regexNum.test(event.key);
        const inputRef = inputObj[`input${inputId}`];

        const prevEl =
            inputId !== 1 && inputObj[`input${inputId - 1}`]
                ? inputObj[`input${inputId - 1}`].current
                : undefined;
        const nextEl =
            inputId !== 6 && inputObj[`input${inputId + 1}`]
                ? inputObj[`input${inputId + 1}`].current
                : undefined;

        if (isNumberKey && inputRef && inputRef.current) {
            if (!inputRef.current.value && inputId !== 6) {
                inputRef.current.value = event.key;
            }

            if (nextEl && event.target.value !== "") {
                nextEl.focus();
            }
        } else if (event.key === "Backspace" && prevEl) {
            event.preventDefault();
            prevEl.value = "";
            prevEl.focus();
        }
    };

    useEffect(() => {
        setSelectedMember(members[0]);
    }, [members]);

    const onChecked = (e, checkedValue) => {
        let selected = [...checklist];
        if (e.checked) selected.push(checkedValue);
        else selected.splice(selected.indexOf(checkedValue), 1);

        setChecklist(selected);
    };

    const isChecked = (value) => {
        return checklist.indexOf(value) !== -1;
    };

    const selectedMemberTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img
                        src={`/demo/images/blocks/avatars/circle/${option.avatar}.png`}
                        alt="avatar"
                        className="mr-3"
                        style={{
                            height: "1.50rem",
                            width: "1.50rem",
                        }}
                    />
                    <p className="mt-0 mb-0 font-normal text-base text-600">
                        {option.name}
                    </p>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };
    const block1 = `
<Button label="Display" onClick={() => setVisible1(true)} />
<Dialog visible={visible1} header={<div className="flex align-items-center">
    <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style={{ width: '32px', height: '32px' }}>
        <i className="pi pi-info text-lg"></i>
    </span>
    <span className="font-medium text-2xl text-900">Modal Title Placeholder</span>
</div>} onHide={() => setVisible1(false)} footer={<div className=" border-top-1 surface-border pt-3">
    <Button icon="pi pi-times" onClick={() => setVisible1(false)} label="Cancel" className="p-button-text" />
    <Button icon="pi pi-check" onClick={() => setVisible1(false)} label="Save" />
</div >} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }}>
    <p className="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
</Dialog>
    `;

    const block2 = `
<Button label="Display" onClick={() => setVisible2(true)} />
<Dialog visible={visible2} onHide={() => setVisible2(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} closable={false} showHeader={false} footer={<div className=" border-top-1 surface-border pt-3 flex">
    <Button icon="pi pi-times" onClick={() => setVisible2(false)} label="Cancel" className="p-button-outlined w-6 mr-2" />
    <Button icon="pi pi-check" onClick={() => setVisible2(false)} label="Save" className="w-6 ml-2" />
</div >}>
    <div className="flex flex-column align-items-center my-4">
        <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style={{ width: '64px', height: '64px' }}>
            <i className="pi pi-check text-5xl"></i>
        </span>
        <div className="font-medium text-2xl text-900">Modal Title Placeholder</div>
    </div>
    <p className="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
</Dialog>
    `;

    const block3 = `
<Button label="Display" onClick={() => setVisible3(true)} />
<Dialog visible={visible3} onHide={() => setVisible3(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} header="Title Placeholder" draggable={false} resizable={false} footer={<div className="border-top-1 surface-border pt-3">
    <Button icon="pi pi-times" onClick={() => setVisible3(false)} label="Cancel" className="p-button-text" />
    <Button icon="pi pi-check" onClick={() => setVisible3(false)} label="Save" />
</div>}>
    <div className="flex flex-wrap border-top-1 surface-border pt-4">
        <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
            <img src="/demo/images/blocks/illustration/security.svg" alt="Image" className="w-9" />
        </div>
        <p className="text-700 line-height-3 m-0 p-5 w-full md:w-8">
            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
        </p>
    </div>
</Dialog>
    `;

    const block4 = `
<Button label="Display" onClick={() => setVisible4(true)}></Button>
<Dialog
    visible={visible4}
    onHide={() => setVisible4(false)}
    modal
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    header={
        <div className="flex flex-column gap-2">
            <h1 className="m-0 text-900 font-semibold text-xl line-height-3">Edit Payment Method</h1>
            <span className="text-600 text-base font-normal">Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.</span>
        </div>
    }
    footer={
        <div className="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
            <Button label="Cancel" onClick={() => setVisible4(false)} className="p-button-text"></Button>
            <Button label="Update" onClick={() => setVisible4(false)} className="p-button-rounded"></Button>
        </div>
    }
    style={{ width: '52vw' }}
    draggable={false}
    resizable={false}>
    <form className="flex flex-column gap-3 mt-3">
        <div>
            <label htmlFor="cardholder" className="block mb-1 text-color text-base">
                Cardholder Name
            </label>
            <span className="p-input-icon-left w-full">
                <i className="pi pi-user"></i>
                <InputText id="cardholder" name="cardholder" type="text" className="w-full" />
            </span>
        </div>
        <div>
            <label htmlFor="credit-card" className="block mb-1 text-color text-base">
                Credit Card Number
            </label>
            <span className="p-input-icon-left w-full">
                <i className="pi pi-credit-card"></i>
                <InputMask id="credit-card" name="cc" mask="9999-9999-9999-9999" className="w-full" validateOnly={true} value={creditCardNumber} required keyfilter={ccRegex} onChange={(e) => setCreditCardNumber(e.target.value)} placeholder="1234-1234-1234-1234" />
            </span>
        </div>
        <div className="flex gap-3">
            <div className="w-full">
                <label htmlFor="cvc" className="block mb-1 text-color text-base">
                    CVC
                </label>
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-lock"></i>
                    <InputText id="cvc" name="cvc" type="text" className="w-full" keyfilter="int" maxLength={3} value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" />
                </span>
            </div>
            <div className="w-full">
                <label htmlFor="expiration" className="block mb-1 text-color text-base">
                    Expiration
                </label>
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-clock"></i>
                    <InputMask id="expiration" type="text" name="exp" mask="99/99" value={expiration} onChange={(e) => setExpiration(e.target.value)} className="w-full" placeholder="12/22" />
                </span>
            </div>
        </div>
    </form>
</Dialog>
    `;

    const block5 = `
<Button label="Display" onClick={() => setVisible5(true)}></Button>
<Dialog
    visible={visible5}
    modal
    closable={false}
    showHeader={false}
    style={{ width: '40vw', height: '22rem' }}
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    footer={
        <div className="pt-3 flex">
            <Button onClick={() => setVisible5(false)} label="Cancel" className="p-button-text flex-grow-1"></Button>
            <Button onClick={() => setVisible5(false)} label="Invite" className="flex-grow-1"></Button>
        </div>
    }>
    <section className="flex flex-column w-full mt-4">
        <div className="flex w-full justify-content-between mb-4">
            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                <i className="pi pi-users text-blue-700 text-4xl"></i>
            </span>
            <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-secondary p-button-text align-self-start" onClick={() => setVisible5(false)}></Button>
        </div>
        <p className="font-semibold text-xl mt-0 mb-2 text-900">Invite Team Member</p>
        <p className="font-normal text-base mt-0 mb-3 text-600">Sagittis eu volutpat odio facilisis mauris sit amet.</p>
        <Dropdown
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.value)}
            options={members}
            optionLabel="name"
            className="w-full border-round-lg"
            placeholder="Select a member"
            valueTemplate={selectedMemberTemplate}
            itemTemplate={(option) => {
                return (
                    <div className="flex align-items-center">
                        <img
                            src={'/demo/images/blocks/avatars/circle/' + option.avatar + '.png'}
                            alt="avatar"
                            className="mr-3"
                            style={{
                                height: '1.50rem',
                                width: '1.50rem'
                            }}
                        />
                        <p className="mt-0 mb-0 font-normal text-base text-600">{option.name}</p>
                    </div>
                );
            }}
        />
    </section>
</Dialog>
    `;

    const block6 = `
<Button label="Display" onClick={() => setVisible6(true)}></Button>
<Dialog
    visible={visible6}
    modal
    closable={false}
    showHeader={false}
    onShow={() => input1.current.focus()}
    style={{ width: '52vw', height: '24rem' }}
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    footer={
        <div className="pt-3 flex justify-content-between align-items-center">
            <div className="text-left">
                <p className="font-normal text-base text-600 mb-0 mt-0">It may take a minute to receive.</p>
                <a className="font-normal text-base text-primary-500 mb-0 mt-0 cursor-pointer">Resend a new code.</a>
            </div>
            <Button onClick={() => setVisible6(false)} label="Submit Code" className="m-0"></Button>
        </div>
    }>
    <form className="flex flex-column w-full mt-4">
        <div className="flex w-full justify-content-between mb-4">
            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                <i className="pi pi-lock text-blue-700 text-4xl"></i>
            </span>
            <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-secondary p-button-text align-self-start" onClick={() => setVisible6(false)}></Button>
        </div>
        <p className="font-semibold text-xl mt-0 mb-2 text-900">Authenticate Your Account</p>
        <p className="font-normal text-base mt-0 mb-3 text-600">Protecting your profile is our first priority. Please confirm your account by entering the authorization code sent to ***-***1052.</p>
        <div className="flex justify-content-between w-full align-items-center mb-4 gap-2">
            <InputText id="input1" ref={input1} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 1)} />
            <InputText id="input2" ref={input2} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 2)} />
            <InputText id="input3" ref={input3} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 3)} />
            <InputText id="input4" ref={input4} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 4)} />
            <InputText id="input5" ref={input5} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 5)} />
            <InputText id="input6" ref={input6} type="text" maxLength={1} keyfilter="int" className="w-4rem xl:w-6rem text-center" onKeyUp={(e) => focus(e, 6)} />
        </div>
    </form>
</Dialog>
    `;

    const block7 = `
<Button label="Display" onClick={() => setVisible7(true)}></Button>
<Dialog
    visible={visible7}
    modal
    closable={false}
    showHeader={false}
    style={{ width: '45vw' }}
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    footer={
        <div className="flex -mt-3 justify-content-between align-items-center">
            <Button onClick={() => setVisible7(false)} icon="pi pi-plus" label="Add Payment Method" className="p-button-text m-0"></Button>
            <Button onClick={() => setVisible7(false)} icon="pi pi-check" label="Save" className="m-0"></Button>
        </div>
    }>
    <form className="flex flex-column w-full mt-4">
        <div className="flex w-full justify-content-between mb-4">
            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                <i className="pi pi-credit-card text-blue-700 text-4xl"></i>
            </span>
            <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-secondary p-button-text align-self-start" onClick={() => setVisible7(false)}></Button>
        </div>
        <p className="font-semibold text-xl mt-0 mb-4 text-900">Manage Payment Info</p>
        <div
            className={classNames('flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer', {
                'surface-hover': selectedPayment === 'Visa'
            })}
            onClick={() => setSelectedPayment('Visa')}>
            <div>
                <div className="flex align-items-center mb-3">
                    <img src="/demo/images/blocks/dialog/dialog-1.svg" alt="Image" className="mr-2 w-3rem border-1 surface-border border-round" />
                    <p className="font-medium text-xl mt-0 mb-0 mr-2 text-900">Visa ending in 1234</p>
                    <span className="p-tag">Default</span>
                </div>
                <p className="font-medium text-base mt-0 mb-0 text-600">Expires 12/2038</p>
            </div>
            <RadioButton inputId="payment1" name="payment" value={'Visa'} onChange={(e) => setSelectedPayment(e.value)} checked={selectedPayment === 'Visa'} />
        </div>
        <div
            className={classNames('flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer', {
                'surface-hover': selectedPayment === 'MasterCard'
            })}
            onClick={() => setSelectedPayment('MasterCard')}>
            <div>
                <div className="flex align-items-center mb-3">
                    <img src="/demo/images/blocks/dialog/dialog-2.svg" alt="Image" className="mr-2 w-3rem border-1 surface-border border-round" />
                    <p className="font-medium text-xl mt-0 mb-0 text-900">MasterCard ending in 1234</p>
                </div>
                <p className="font-medium text-base mt-0 mb-0 text-600">Expires 07/2025</p>
            </div>
            <RadioButton inputId="payment2" name="payment" value={'MasterCard'} onChange={(e) => setSelectedPayment(e.value)} checked={selectedPayment === 'MasterCard'} />
        </div>
        <div
            className={classNames('flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border opacity-50', {
                'surface-hover': selectedPayment === 'Other'
            })}>
            <div>
                <div className="flex align-items-center mb-3">
                    <img src="/demo/images/blocks/dialog/dialog-1.svg" alt="Image" className="mr-2 w-3rem border-1 surface-border border-round" />
                    <p className="font-medium text-xl text-900 mt-0 mb-0 mr-2">Visa ending in 1234</p>
                    <span className="p-tag bg-red-500 text-white">Expired</span>
                </div>
                <p className="font-medium text-base text-600 mt-0 mb-0">Expires 01/2022</p>
            </div>
            <RadioButton inputId="payment3" name="payment" value={'Other'} onChange={(e) => setSelectedPayment(e.value)} checked={selectedPayment === 'Other'} disabled />
        </div>
    </form>
</Dialog>
    `;

    const block8 = `
<Button label="Display" onClick={() => setVisible8(true)}></Button>
<Dialog
    visible={visible8}
    modal
    closable={false}
    showHeader={false}
    style={{ width: '45vw' }}
    breakpoints={{ '960px': '75vw', '640px': '100vw' }}
    footer={
        <div className="flex border-top-1 pt-5 surface-border justify-content-end align-items-center">
            <Button onClick={() => setVisible8(false)} icon="pi pi-check" label="Save" className="m-0"></Button>
        </div>
    }>
    <section className="flex flex-column w-full mt-4">
        <div className="flex w-full justify-content-between align-items-center mb-4">
            <span className="font-semibold text-base text-600">
                Notes / <span className="text-900">Daily</span>
            </span>
            <Button type="button" icon="pi pi-times text-sm" className="w-2rem h-2rem p-button-rounded p-button-secondary p-button-text text-600" onClick={() => setVisible8(false)}></Button>
        </div>
        <div className="flex justify-content-between align-items-center w-full mb-4">
            <p className="font-semibold text-xl mt-0 mb-0 text-900">
                <span className="pi pi-bolt text-xl text-yellow-600"></span> Extend Functional Coverage
            </p>
            <Button type="button" icon="pi pi-pencil text-sm" className="w-2rem h-2rem p-button-rounded p-button-text surface-200 text-600"></Button>
        </div>
        <table>
            <tr style={{ height: '2.5rem' }}>
                <td className="font-medium text-base text-600">Status</td>
                <td className="font-medium text-base text-900">In Progress</td>
            </tr>
            <tr style={{ height: '2.5rem' }}>
                <td className="font-medium text-base text-600">Assignee</td>
                <td>
                    <div className="flex align-items-center">
                        <img
                            src="/demo/images/blocks/avatars/circle/avatar-m-11.png"
                            alt="Image"
                            className="inline mr-2"
                            style={{
                                height: '1.5rem',
                                width: '1.5rem'
                            }}
                        />
                        <span className="font-medium text-base text-900">John Walter</span>
                    </div>
                </td>
            </tr>
            <tr style={{ height: '2.5rem' }}>
                <td className="font-medium text-base text-600">Due Date</td>
                <td className="font-medium text-base text-900">Oct 21 at 2:00 PM</td>
            </tr>
            <tr style={{ height: '2.5rem' }}>
                <td className="font-medium text-base text-600">Label</td>
                <td>
                    <span className="p-tag bg-orange-500 mr-2">Product</span>
                    <span className="p-tag bg-green-500">Quality</span>
                </td>
            </tr>
        </table>
        <div className="border-y-1 surface-border py-4 my-4">
            <p className="font-medium text-lg text-700 mt-0">Description</p>
            <p className="text-base text-900 mt-0 mb-0">Donec enim diam vulputate ut. Tellus mauris a diam maecenas. At varius vel pharetra vel turpis. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.</p>
        </div>
        <div className="flex flex-column">
            <div className="flex justify-content-between align-items-center w-full">
                <p className="font-medium text-lg text-700 mt-0">Checklist</p>
                <span className="w-3rem text-500 flex align-items-center justify-content-between gap-2">
                    <i className="pi pi-check-square text-lg"></i>
                    {checklist.length}/4
                </span>
            </div>
            <div className="field-checkbox">
                <Checkbox inputId="binary1" onChange={(e) => onChecked(e, 'binary1')} checked={isChecked('binary1')}></Checkbox>
                <label htmlFor="binary">Placerat in egestas erat imperdiet.</label>
            </div>
            <div className="field-checkbox">
                <Checkbox inputId="binary2" onChange={(e) => onChecked(e, 'binary2')} checked={isChecked('binary2')}></Checkbox>
                <label htmlFor="binary2">Cursus euismod quis viverra nibh.</label>
            </div>
            <div className="field-checkbox">
                <Checkbox inputId="binary3" onChange={(e) => onChecked(e, 'binary3')} checked={isChecked('binary3')}></Checkbox>
                <label htmlFor="binary3">Malesuada fames ac turpis egestas integer eget.</label>
            </div>
            <div className="field-checkbox mb-0">
                <Checkbox inputId="binary4" onChange={(e) => onChecked(e, 'binary4')} checked={isChecked('binary4')}></Checkbox>
                <label htmlFor="binary4">Nisl suscipit adipiscing bibendum est ultricies integer quis.</label>
            </div>
        </div>
    </section>
</Dialog>
    `;

    return (
        <>
            <div className="block-category-title">Dialog</div>
            <BlockViewer
                header="Left Aligned Header Icon"
                code={block1}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => setVisible1(true)} />
                <Dialog
                    visible={visible1}
                    header={
                        <div className="flex align-items-center">
                            <span
                                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                                style={{ width: "32px", height: "32px" }}
                            >
                                <i className="pi pi-info text-lg"></i>
                            </span>
                            <span className="font-medium text-2xl text-900">
                                Modal Title Placeholder
                            </span>
                        </div>
                    }
                    onHide={() => setVisible1(false)}
                    footer={
                        <div className=" border-top-1 surface-border pt-3">
                            <Button
                                icon="pi pi-times"
                                onClick={() => setVisible1(false)}
                                label="Cancel"
                                className="p-button-text"
                            />
                            <Button
                                icon="pi pi-check"
                                onClick={() => setVisible1(false)}
                                label="Save"
                            />
                        </div>
                    }
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "40vw" }}
                >
                    <p className="line-height-3 p-0 m-0">
                        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit
                        dignissim sodales ut eu sem integer. Sed risus pretium quam
                        vulputate. At tellus at urna condimentum mattis pellentesque.
                    </p>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="Centered Header Icon"
                code={block2}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => setVisible2(true)} />
                <Dialog
                    visible={visible2}
                    onHide={() => setVisible2(false)}
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "40vw" }}
                    closable={false}
                    showHeader={false}
                    footer={
                        <div className=" border-top-1 surface-border pt-3 flex">
                            <Button
                                icon="pi pi-times"
                                onClick={() => setVisible2(false)}
                                label="Cancel"
                                className="p-button-outlined w-6 mr-2"
                            />
                            <Button
                                icon="pi pi-check"
                                onClick={() => setVisible2(false)}
                                label="Save"
                                className="w-6 ml-2"
                            />
                        </div>
                    }
                >
                    <div className="flex flex-column align-items-center my-4">
                        <span
                            className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3"
                            style={{ width: "64px", height: "64px" }}
                        >
                            <i className="pi pi-check text-5xl"></i>
                        </span>
                        <div className="font-medium text-2xl text-900">
                            Modal Title Placeholder
                        </div>
                    </div>
                    <p className="line-height-3 p-0 m-0">
                        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit
                        dignissim sodales ut eu sem integer. Sed risus pretium quam
                        vulputate. At tellus at urna condimentum mattis pellentesque.
                    </p>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Illustration"
                code={block3}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
            >
                <Button label="Display" onClick={() => setVisible3(true)} />
                <Dialog
                    visible={visible3}
                    onHide={() => setVisible3(false)}
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    style={{ width: "40vw" }}
                    header="Title Placeholder"
                    draggable={false}
                    resizable={false}
                    footer={
                        <div className="border-top-1 surface-border pt-3">
                            <Button
                                icon="pi pi-times"
                                onClick={() => setVisible3(false)}
                                label="Cancel"
                                className="p-button-text"
                            />
                            <Button
                                icon="pi pi-check"
                                onClick={() => setVisible3(false)}
                                label="Save"
                            />
                        </div>
                    }
                >
                    <div className="flex flex-wrap border-top-1 surface-border pt-4">
                        <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
                            <img
                                src="/demo/images/blocks/illustration/security.svg"
                                alt="Image"
                                className="w-9"
                            />
                        </div>
                        <p className="text-700 line-height-3 m-0 p-5 w-full md:w-8">
                            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit
                            dignissim sodales ut eu sem integer. Sed risus pretium quam
                            vulputate. At tellus at urna condimentum mattis pellentesque.
                        </p>
                    </div>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Form Layout"
                code={block4}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => setVisible4(true)}></Button>

                <Dialog
                    visible={visible4}
                    onHide={() => setVisible4(false)}
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    header={
                        <div className="flex flex-column gap-2">
                            <h1 className="m-0 text-900 font-semibold text-xl line-height-3">
                                Edit Payment Method
                            </h1>
                            <span className="text-600 text-base font-normal">
                                Quis enim lobortis scelerisque fermentum dui faucibus in ornare
                                quam.
                            </span>
                        </div>
                    }
                    footer={
                        <div className="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
                            <Button
                                label="Cancel"
                                onClick={() => setVisible4(false)}
                                className="p-button-text"
                            ></Button>
                            <Button
                                label="Update"
                                onClick={() => setVisible4(false)}
                                className="p-button-rounded"
                            ></Button>
                        </div>
                    }
                    style={{ width: "52vw" }}
                    draggable={false}
                    resizable={false}
                >
                    <form className="flex flex-column gap-3 mt-3">
                        <div>
                            <label
                                htmlFor="cardholder"
                                className="block mb-1 text-color text-base"
                            >
                                Cardholder Name
                            </label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-user"></i>
                                <InputText
                                    id="cardholder"
                                    name="cardholder"
                                    type="text"
                                    className="w-full"
                                />
                            </span>
                        </div>
                        <div>
                            <label
                                htmlFor="credit-card"
                                className="block mb-1 text-color text-base"
                            >
                                Credit Card Number
                            </label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-credit-card"></i>
                                <InputMask
                                    id="credit-card"
                                    name="cc"
                                    mask="9999-9999-9999-9999"
                                    className="w-full"
                                    validateOnly={true}
                                    value={creditCardNumber}
                                    required
                                    keyfilter={ccRegex}
                                    onChange={(e) => setCreditCardNumber(e.target.value)}
                                    placeholder="1234-1234-1234-1234"
                                />
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-full">
                                <label
                                    htmlFor="cvc"
                                    className="block mb-1 text-color text-base"
                                >
                                    CVC
                                </label>
                                <span className="p-input-icon-left w-full">
                                    <i className="pi pi-lock"></i>
                                    <InputText
                                        id="cvc"
                                        name="cvc"
                                        type="text"
                                        className="w-full"
                                        keyfilter="int"
                                        maxLength={3}
                                        value={cvc}
                                        onChange={(e) => setCvc(e.target.value)}
                                        placeholder="123"
                                    />
                                </span>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="expiration"
                                    className="block mb-1 text-color text-base"
                                >
                                    Expiration
                                </label>
                                <span className="p-input-icon-left w-full">
                                    <i className="pi pi-clock"></i>
                                    <InputMask
                                        id="expiration"
                                        type="text"
                                        name="exp"
                                        mask="99/99"
                                        value={expiration}
                                        onChange={(e) => setExpiration(e.target.value)}
                                        className="w-full"
                                        placeholder="12/22"
                                    />
                                </span>
                            </div>
                        </div>
                    </form>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Dropdown"
                code={block5}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => setVisible5(true)}></Button>

                <Dialog
                    visible={visible5}
                    modal
                    closable={false}
                    showHeader={false}
                    style={{ width: "40vw", height: "22rem" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    footer={
                        <div className="pt-3 flex">
                            <Button
                                onClick={() => setVisible5(false)}
                                label="Cancel"
                                className="p-button-text flex-grow-1"
                            ></Button>
                            <Button
                                onClick={() => setVisible5(false)}
                                label="Invite"
                                className="flex-grow-1"
                            ></Button>
                        </div>
                    }
                >
                    <section className="flex flex-column w-full mt-4">
                        <div className="flex w-full justify-content-between mb-4">
                            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                                <i className="pi pi-users text-blue-700 text-4xl"></i>
                            </span>
                            <Button
                                type="button"
                                icon="pi pi-times"
                                className="p-button-rounded p-button-secondary p-button-text align-self-start"
                                onClick={() => setVisible5(false)}
                            ></Button>
                        </div>
                        <p className="font-semibold text-xl mt-0 mb-2 text-900">
                            Invite Team Member
                        </p>
                        <p className="font-normal text-base mt-0 mb-3 text-600">
                            Sagittis eu volutpat odio facilisis mauris sit amet.
                        </p>
                        <Dropdown
                            value={selectedMember}
                            onChange={(e) => setSelectedMember(e.value)}
                            options={members}
                            optionLabel="name"
                            className="w-full border-round-lg"
                            placeholder="Select a member"
                            valueTemplate={selectedMemberTemplate}
                            itemTemplate={(option) => {
                                return (
                                    <div className="flex align-items-center">
                                        <img
                                            src={
                                                "/demo/images/blocks/avatars/circle/" +
                                                option.avatar +
                                                ".png"
                                            }
                                            alt="avatar"
                                            className="mr-3"
                                            style={{
                                                height: "1.50rem",
                                                width: "1.50rem",
                                            }}
                                        />
                                        <p className="mt-0 mb-0 font-normal text-base text-600">
                                            {option.name}
                                        </p>
                                    </div>
                                );
                            }}
                        />
                    </section>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="Verification"
                code={block6}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => setVisible6(true)}></Button>

                <Dialog
                    visible={visible6}
                    modal
                    closable={false}
                    showHeader={false}
                    onShow={() => input1.current.focus()}
                    style={{ width: "52vw", height: "24rem" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    footer={
                        <div className="pt-3 flex justify-content-between align-items-center">
                            <div className="text-left">
                                <p className="font-normal text-base text-600 mb-0 mt-0">
                                    It may take a minute to receive.
                                </p>
                                <a className="font-normal text-base text-primary-500 mb-0 mt-0 cursor-pointer">
                                    Resend a new code.
                                </a>
                            </div>
                            <Button
                                onClick={() => setVisible6(false)}
                                label="Submit Code"
                                className="m-0"
                            ></Button>
                        </div>
                    }
                >
                    <form className="flex flex-column w-full mt-4">
                        <div className="flex w-full justify-content-between mb-4">
                            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                                <i className="pi pi-lock text-blue-700 text-4xl"></i>
                            </span>
                            <Button
                                type="button"
                                icon="pi pi-times"
                                className="p-button-rounded p-button-secondary p-button-text align-self-start"
                                onClick={() => setVisible6(false)}
                            ></Button>
                        </div>
                        <p className="font-semibold text-xl mt-0 mb-2 text-900">
                            Authenticate Your Account
                        </p>
                        <p className="font-normal text-base mt-0 mb-3 text-600">
                            Protecting your profile is our first priority. Please confirm your
                            account by entering the authorization code sent to ***-***1052.
                        </p>
                        <div className="flex justify-content-between w-full align-items-center mb-4 gap-2">
                            <InputText
                                id="input1"
                                ref={input1}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 1)}
                            />
                            <InputText
                                id="input2"
                                ref={input2}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 2)}
                            />
                            <InputText
                                id="input3"
                                ref={input3}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 3)}
                            />
                            <InputText
                                id="input4"
                                ref={input4}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 4)}
                            />
                            <InputText
                                id="input5"
                                ref={input5}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 5)}
                            />
                            <InputText
                                id="input6"
                                ref={input6}
                                type="text"
                                maxLength={1}
                                keyfilter="int"
                                className="w-4rem xl:w-6rem text-center"
                                onKeyUp={(e) => focus(e, 6)}
                            />
                        </div>
                    </form>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Radio Group"
                code={block7}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => setVisible7(true)}></Button>

                <Dialog
                    visible={visible7}
                    modal
                    closable={false}
                    showHeader={false}
                    style={{ width: "45vw" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    footer={
                        <div className="flex -mt-3 justify-content-between align-items-center">
                            <Button
                                onClick={() => setVisible7(false)}
                                icon="pi pi-plus"
                                label="Add Payment Method"
                                className="p-button-text m-0"
                            ></Button>
                            <Button
                                onClick={() => setVisible7(false)}
                                icon="pi pi-check"
                                label="Save"
                                className="m-0"
                            ></Button>
                        </div>
                    }
                >
                    <form className="flex flex-column w-full mt-4">
                        <div className="flex w-full justify-content-between mb-4">
                            <span className="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100">
                                <i className="pi pi-credit-card text-blue-700 text-4xl"></i>
                            </span>
                            <Button
                                type="button"
                                icon="pi pi-times"
                                className="p-button-rounded p-button-secondary p-button-text align-self-start"
                                onClick={() => setVisible7(false)}
                            ></Button>
                        </div>
                        <p className="font-semibold text-xl mt-0 mb-4 text-900">
                            Manage Payment Info
                        </p>
                        <div
                            className={classNames(
                                "flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer",
                                {
                                    "surface-hover": selectedPayment === "Visa",
                                }
                            )}
                            onClick={() => setSelectedPayment("Visa")}
                        >
                            <div>
                                <div className="flex align-items-center mb-3">
                                    <img
                                        src="/demo/images/blocks/dialog/dialog-1.svg"
                                        alt="Image"
                                        className="mr-2 w-3rem border-1 surface-border border-round"
                                    />
                                    <p className="font-medium text-xl mt-0 mb-0 mr-2 text-900">
                                        Visa ending in 1234
                                    </p>
                                    <span className="p-tag">Default</span>
                                </div>
                                <p className="font-medium text-base mt-0 mb-0 text-600">
                                    Expires 12/2038
                                </p>
                            </div>
                            <RadioButton
                                inputId="payment1"
                                name="payment"
                                value={"Visa"}
                                onChange={(e) => setSelectedPayment(e.value)}
                                checked={selectedPayment === "Visa"}
                            />
                        </div>
                        <div
                            className={classNames(
                                "flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border mb-2 cursor-pointer",
                                {
                                    "surface-hover": selectedPayment === "MasterCard",
                                }
                            )}
                            onClick={() => setSelectedPayment("MasterCard")}
                        >
                            <div>
                                <div className="flex align-items-center mb-3">
                                    <img
                                        src="/demo/images/blocks/dialog/dialog-2.svg"
                                        alt="Image"
                                        className="mr-2 w-3rem border-1 surface-border border-round"
                                    />
                                    <p className="font-medium text-xl mt-0 mb-0 text-900">
                                        MasterCard ending in 1234
                                    </p>
                                </div>
                                <p className="font-medium text-base mt-0 mb-0 text-600">
                                    Expires 07/2025
                                </p>
                            </div>
                            <RadioButton
                                inputId="payment2"
                                name="payment"
                                value={"MasterCard"}
                                onChange={(e) => setSelectedPayment(e.value)}
                                checked={selectedPayment === "MasterCard"}
                            />
                        </div>
                        <div
                            className={classNames(
                                "flex justify-content-between w-full align-items-center border-1 p-3 border-round surface-border opacity-50",
                                {
                                    "surface-hover": selectedPayment === "Other",
                                }
                            )}
                        >
                            <div>
                                <div className="flex align-items-center mb-3">
                                    <img
                                        src="/demo/images/blocks/dialog/dialog-1.svg"
                                        alt="Image"
                                        className="mr-2 w-3rem border-1 surface-border border-round"
                                    />
                                    <p className="font-medium text-xl text-900 mt-0 mb-0 mr-2">
                                        Visa ending in 1234
                                    </p>
                                    <span className="p-tag bg-red-500 text-white">Expired</span>
                                </div>
                                <p className="font-medium text-base text-600 mt-0 mb-0">
                                    Expires 01/2022
                                </p>
                            </div>
                            <RadioButton
                                inputId="payment3"
                                name="payment"
                                value={"Other"}
                                onChange={(e) => setSelectedPayment(e.value)}
                                checked={selectedPayment === "Other"}
                                disabled
                            />
                        </div>
                    </form>
                </Dialog>
            </BlockViewer>

            <BlockViewer
                header="With Description List"
                code={block8}
                containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
                new
            >
                <Button label="Display" onClick={() => setVisible8(true)}></Button>

                <Dialog
                    visible={visible8}
                    modal
                    closable={false}
                    showHeader={false}
                    style={{ width: "45vw" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    footer={
                        <div className="flex border-top-1 pt-5 surface-border justify-content-end align-items-center">
                            <Button
                                onClick={() => setVisible8(false)}
                                icon="pi pi-check"
                                label="Save"
                                className="m-0"
                            ></Button>
                        </div>
                    }
                >
                    <section className="flex flex-column w-full mt-4">
                        <div className="flex w-full justify-content-between align-items-center mb-4">
                            <span className="font-semibold text-base text-600">
                                Notes / <span className="text-900">Daily</span>
                            </span>
                            <Button
                                type="button"
                                icon="pi pi-times text-sm"
                                className="w-2rem h-2rem p-button-rounded p-button-secondary p-button-text text-600"
                                onClick={() => setVisible8(false)}
                            ></Button>
                        </div>
                        <div className="flex justify-content-between align-items-center w-full mb-4">
                            <p className="font-semibold text-xl mt-0 mb-0 text-900">
                                <span className="pi pi-bolt text-xl text-yellow-600"></span>{" "}
                                Extend Functional Coverage
                            </p>
                            <Button
                                type="button"
                                icon="pi pi-pencil text-sm"
                                className="w-2rem h-2rem p-button-rounded p-button-text surface-200 text-600"
                            ></Button>
                        </div>
                        <table>
                            <tr style={{ height: "2.5rem" }}>
                                <td className="font-medium text-base text-600">Status</td>
                                <td className="font-medium text-base text-900">In Progress</td>
                            </tr>
                            <tr style={{ height: "2.5rem" }}>
                                <td className="font-medium text-base text-600">Assignee</td>
                                <td>
                                    <div className="flex align-items-center">
                                        <img
                                            src="/demo/images/blocks/avatars/circle/avatar-m-11.png"
                                            alt="Image"
                                            className="inline mr-2"
                                            style={{
                                                height: "1.5rem",
                                                width: "1.5rem",
                                            }}
                                        />
                                        <span className="font-medium text-base text-900">
                                            John Walter
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ height: "2.5rem" }}>
                                <td className="font-medium text-base text-600">Due Date</td>
                                <td className="font-medium text-base text-900">
                                    Oct 21 at 2:00 PM
                                </td>
                            </tr>
                            <tr style={{ height: "2.5rem" }}>
                                <td className="font-medium text-base text-600">Label</td>
                                <td>
                                    <span className="p-tag bg-orange-500 mr-2">Product</span>
                                    <span className="p-tag bg-green-500">Quality</span>
                                </td>
                            </tr>
                        </table>
                        <div className="border-y-1 surface-border py-4 my-4">
                            <p className="font-medium text-lg text-700 mt-0">Description</p>
                            <p className="text-base text-900 mt-0 mb-0">
                                Donec enim diam vulputate ut. Tellus mauris a diam maecenas. At
                                varius vel pharetra vel turpis. Diam sollicitudin tempor id eu
                                nisl nunc mi ipsum faucibus. Amet luctus venenatis lectus magna
                                fringilla urna porttitor rhoncus.
                            </p>
                        </div>
                        <div className="flex flex-column">
                            <div className="flex justify-content-between align-items-center w-full">
                                <p className="font-medium text-lg text-700 mt-0">Checklist</p>
                                <span className="w-3rem text-500 flex align-items-center justify-content-between gap-2">
                                    <i className="pi pi-check-square text-lg"></i>
                                    {checklist.length}/4
                                </span>
                            </div>
                            <div className="field-checkbox">
                                <Checkbox
                                    inputId="binary1"
                                    onChange={(e) => onChecked(e, "binary1")}
                                    checked={isChecked("binary1")}
                                ></Checkbox>
                                <label htmlFor="binary">
                                    Placerat in egestas erat imperdiet.
                                </label>
                            </div>
                            <div className="field-checkbox">
                                <Checkbox
                                    inputId="binary2"
                                    onChange={(e) => onChecked(e, "binary2")}
                                    checked={isChecked("binary2")}
                                ></Checkbox>
                                <label htmlFor="binary2">
                                    Cursus euismod quis viverra nibh.
                                </label>
                            </div>
                            <div className="field-checkbox">
                                <Checkbox
                                    inputId="binary3"
                                    onChange={(e) => onChecked(e, "binary3")}
                                    checked={isChecked("binary3")}
                                ></Checkbox>
                                <label htmlFor="binary3">
                                    Malesuada fames ac turpis egestas integer eget.
                                </label>
                            </div>
                            <div className="field-checkbox mb-0">
                                <Checkbox
                                    inputId="binary4"
                                    onChange={(e) => onChecked(e, "binary4")}
                                    checked={isChecked("binary4")}
                                ></Checkbox>
                                <label htmlFor="binary4">
                                    Nisl suscipit adipiscing bibendum est ultricies integer quis.
                                </label>
                            </div>
                        </div>
                    </section>
                </Dialog>
            </BlockViewer>
        </>
    );
};

export default DialogBlock;
