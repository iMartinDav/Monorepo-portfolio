import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { RadioButton } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import AppContentContext from './context/appcontentcontext';

const AppConfig = (props) => {
    const scales = [12, 13, 14, 15, 16];
    const [scale, setScale] = useState(16);

    const { onRippleChange, ripple, inputStyle, onInputStyleChange } = useContext(AppContentContext);

    const onThemeChange = (theme, dark) => {
        props.onThemeChange({ theme, dark });
    };

    const decrementScale = () => {
        setScale((prevScale) => --prevScale);
    };

    const incrementScale = () => {
        setScale((prevScale) => ++prevScale);
    };

    useEffect(() => {
        document.documentElement.style.fontSize = scale + 'px';
    }, [scale]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <button className="layout-config-button p-link" type="button" onClick={props.onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>

            <Sidebar
                visible={props.active}
                onHide={props.onHide}
                position="right"
                className="layout-config p-sidebar-md"
            >
                <div className="config-title" style={{ marginTop: "0" }}>
                    Component Scale
                </div>
                <div className="config-scale">
                    <Button
                        type="button"
                        icon="pi pi-minus"
                        onClick={() => decrementScale()}
                        className="p-button-rounded p-button-text"
                        disabled={scale === scales[0]}
                    ></Button>
                    {scales.map((s, i) => {
                        return (
                            <i
                                key={i}
                                className={classNames(
                                    "pi pi-circle-on p-m-1 scale-icon",
                                    { "scale-active": s === scale }
                                )}
                            ></i>
                        );
                    })}
                    <Button
                        type="button"
                        icon="pi pi-plus"
                        onClick={() => incrementScale()}
                        className="p-button-rounded p-button-text"
                        disabled={scale === scales[scales.length - 1]}
                    ></Button>
                </div>

                <div className="config-title">Input Style</div>
                <div className="formgroup-inline">
                    <div className="field-radiobutton">
                        <RadioButton
                            name="inputstyle"
                            value="outlined"
                            checked={inputStyle === "outlined"}
                            onChange={() => onInputStyleChange('outlined')}
                            inputId="input_outlined"
                        ></RadioButton>
                        <label htmlFor="input_outlined">Outlined</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton
                            name="inputstyle"
                            value="filled"
                            checked={inputStyle === "filled"}
                            onChange={() => onInputStyleChange('filled')}
                            inputId="input_filled"
                        ></RadioButton>
                        <label htmlFor="input_filled">Filled</label>
                    </div>
                </div>

                <div className="config-title">Ripple Effect</div>
                <InputSwitch checked={ripple} onChange={(e) => onRippleChange(e.value)} />

                <div className="config-title">Bootstrap</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "bootstrap4-light-blue",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/bootstrap4-light-blue.svg"
                                alt="Bootstrap Light Blue"
                            />
                        </a>
                        <span>Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "bootstrap4-light-purple",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/bootstrap4-light-purple.svg"
                                alt="Bootstrap Light Purple"
                            />
                        </a>
                        <span>Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "bootstrap4-dark-blue",
                                    true
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/bootstrap4-dark-blue.svg"
                                alt="Bootstrap Dark Blue"
                            />
                        </a>
                        <span>Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "bootstrap4-dark-purple",
                                    true
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/bootstrap4-dark-purple.svg"
                                alt="Bootstrap Dark Purple"
                            />
                        </a>
                        <span>Purple</span>
                    </div>
                </div>

                <div className="config-title">Material Design</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("md-light-indigo", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/md-light-indigo.svg"
                                alt="Material Light Indigo"
                            />
                        </a>
                        <span>Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "md-light-deeppurple",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/md-light-deeppurple.svg"
                                alt="Material Light Deep Purple"
                            />
                        </a>
                        <span>Deep Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("md-dark-indigo", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/md-dark-indigo.svg"
                                alt="Material Dark Indigo"
                            />
                        </a>
                        <span>Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "md-dark-deeppurple",
                                    true
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/md-dark-deeppurple.svg"
                                alt="Material Dark Deep Purple"
                            />
                        </a>
                        <span>Deep Purple</span>
                    </div>
                </div>

                <div className="config-title">Material Design Compact</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "mdc-light-indigo",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/md-light-indigo.svg"
                                alt="Material Compact Light Indigo"
                            />
                        </a>
                        <span>Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "mdc-light-deeppurple",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/md-light-deeppurple.svg"
                                alt="Material Compact Deep Purple"
                            />
                        </a>
                        <span>Deep Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("mdc-dark-indigo", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/md-dark-indigo.svg"
                                alt="Material Compact Dark Indigo"
                            />
                        </a>
                        <span>Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "mdc-dark-deeppurple",
                                    true
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/md-dark-deeppurple.svg"
                                alt="Material Compact Dark Deep Purple"
                            />
                        </a>
                        <span>Deep Purple</span>
                    </div>
                </div>

                <div className="config-title">Tailwind</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("tailwind-light", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/tailwind-light.png"
                                alt="Tailwind Light"
                            />
                        </a>
                        <span>Light</span>
                    </div>
                </div>

                <div className="config-title">Fluent UI</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("fluent-light", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/fluent-light.png"
                                alt="Fluent Light"
                            />
                        </a>
                        <span>Light</span>
                    </div>
                </div>

                <div className="config-title">PrimeOne Design - 2022</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "lara-light-indigo",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-light-indigo.svg"
                                alt="Lara Light Indigo"
                            />
                        </a>
                        <span>Lara Light Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-dark-indigo", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-dark-indigo.svg"
                                alt="Lara Dark Indigo"
                            />
                        </a>
                        <span>Lara Dark Indigo</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange(
                                    "lara-light-purple",
                                    false
                                )
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-light-purple.svg"
                                alt="Lara Light Purple"
                            />
                        </a>
                        <span>Lara Light Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-dark-purple", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-dark-purple.svg"
                                alt="Lara Dark Purple"
                            />
                        </a>
                        <span>Lara Dark Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-light-blue", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-light-blue.png"
                                alt="Lara Light Blue"
                            />
                        </a>
                        <span>Lara Light Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-dark-blue", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-dark-blue.png"
                                alt="Lara Dark Blue"
                            />
                        </a>
                        <span>Lara Dark Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-light-teal", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-light-teal.png"
                                alt="Lara Light Teal"
                            />
                        </a>
                        <span>Lara Light Teal</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("lara-dark-teal", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/lara-dark-teal.png"
                                alt="Lara Dark Teal"
                            />
                        </a>
                        <span>Lara Dark Teal</span>
                    </div>
                </div>

                <div className="config-title">PrimeOne Design - 2021</div>
                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("saga-blue", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/saga-blue.png"
                                alt="Saga Blue"
                            />
                        </a>
                        <span>Saga Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("saga-green", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/saga-green.png"
                                alt="Saga Green"
                            />
                        </a>
                        <span>Saga Green</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("saga-orange", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/saga-orange.png"
                                alt="Saga Orange"
                            />
                        </a>
                        <span>Saga Orange</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("saga-purple", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/saga-purple.png"
                                alt="Saga Purple"
                            />
                        </a>
                        <span>Saga Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("vela-blue", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/vela-blue.png"
                                alt="Vela Blue"
                            />
                        </a>
                        <span>Vela Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("vela-green", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/vela-green.png"
                                alt="Vela Green"
                            />
                        </a>
                        <span>Vela Green</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            onClick={() =>
                                onThemeChange("vela-orange", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/vela-orange.png"
                                alt="Vela Orange"
                            />
                        </a>
                        <span>Vela Orange</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("vela-purple", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/vela-purple.png"
                                alt="Vela Purple"
                            />
                        </a>
                        <span>Vela Purple</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("arya-blue", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/arya-blue.png"
                                alt="Arya Blue"
                            />
                        </a>
                        <span>Arya Blue</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("arya-green", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/arya-green.png"
                                alt="Arya Green"
                            />
                        </a>
                        <span>Arya Green</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("arya-orange", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/arya-orange.png"
                                alt="Arya Orange"
                            />
                        </a>
                        <span>Arya Orange</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("arya-purple", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/arya-purple.png"
                                alt="Arya Purple"
                            />
                        </a>
                        <span>Arya Purple</span>
                    </div>
                </div>

                <div className="config-title">Premium Themes</div>

                <div className="grid themes-grid">
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("soho-light", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/soho-light.png"
                                alt="Soho Light"
                            />
                        </a>
                        <span>Soho Light</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("soho-dark", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/soho-dark.png"
                                alt="Soho Dark"
                            />
                        </a>
                        <span>Soho Dark</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("viva-light", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/viva-light.svg"
                                alt="Viva Light"
                            />
                        </a>
                        <span>Viva Light</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("viva-dark", true)
                            }
                        >
                            <img
                                src="/layout/images/themes/viva-dark.svg"
                                alt="Viva Dark"
                            />
                        </a>
                        <span>Viva Dark</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("mira", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/mira.jpg"
                                alt="Mira"
                            />
                        </a>
                        <span>Mira</span>
                    </div>
                    <div className="col-6 sm:col-3">
                        <a
                            className="cursor-pointer inline-block"
                            onClick={() =>
                                onThemeChange("nano", false)
                            }
                        >
                            <img
                                src="/layout/images/themes/nano.jpg"
                                alt="Nano"
                            />
                        </a>
                        <span>Nano</span>
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default AppConfig;
