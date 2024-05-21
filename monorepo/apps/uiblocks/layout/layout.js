import Head from 'next/head';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import AppTopbar from './AppTopbar';
import AppConfig from './AppConfig';
import PrimeReact from 'primereact/api';
import AppContentContext from './context/appcontentcontext';
import { useBreadcrumb } from './hooks/useBreadcrumb';

const Layout = (props) => {
    const [configActive, setConfigActive] = useState(false);
    const [topbarActive, setTopbarActive] = useState(false);
    const [inputStyle, setInputStyle] = useState("outlined");
    const [ripple, setRipple] = useState(true);

    const onConfigButtonClick = () => {
        setConfigActive(true);
    };

    const onConfigHide = () => {
        setConfigActive(false);
    };

    const onTopbarMenuButtonClick = () => {
        setTopbarActive(true);
    };

    const onTopbarHide = () => {
        setTopbarActive(false);
    };

    const onInputStyleChange = (value) => {
        setInputStyle(value);
    };

    const onRippleChange = (value) => {
        setRipple(value);
    };

    const onThemeChange = (event) => {
        if (event.theme.startsWith('md')) {
            setRipple(true);
        }

        props.onThemeChange(event.theme, event.dark);
    };


    PrimeReact.ripple = true;


    const containerClass = classNames('layout-wrapper', {
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-wrapper-dark': props.dark,
        'layout-wrapper-light': !props.dark
    });

    const breadcrumb = useBreadcrumb(props.routes);

    return (
        <React.Fragment>
            <Head>
                <title>PrimeBlocks</title>
                <meta charSet="UTF-8" />
            </Head>

            <div className={containerClass}>
                <AppTopbar darkTheme={props.dark} topbarActive={topbarActive} onTopbarMenuButtonClick={onTopbarMenuButtonClick} onTopbarHide={onTopbarHide} />
                <AppContentContext.Provider
                    value={{
                        ripple,
                        inputStyle,
                        darkTheme: props.dark,
                        onInputStyleChange,
                        onRippleChange
                    }}
                >
                    <div className="layout-breadcrumb">
                        {breadcrumb}
                    </div>


                    <div className="layout-content">{props.children}</div>
                    <AppConfig active={configActive} onThemeChange={onThemeChange} onConfigButtonClick={onConfigButtonClick} onHide={onConfigHide} />
                </AppContentContext.Provider>
                <div className="layout-mask"></div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
