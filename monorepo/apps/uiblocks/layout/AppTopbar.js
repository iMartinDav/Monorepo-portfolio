import React from 'react';
import Link from 'next/link';
import { Sidebar } from "primereact/sidebar";
import { classNames } from 'primereact/utils';
import { useRouter } from 'next/router';

const AppTopbar = (props) => {
    const router = useRouter();

    const onTopbarMenuButtonClick = () => {
        props.onTopbarMenuButtonClick();
    };

    const onTopbarHide = () => {
        props.onTopbarHide();
    };


    return (
        <>
            <div className="layout-topbar">
                <div style={{ cursor: "pointer" }} className="topbar-logo">
                    <Link href="/">
                        <img
                            src={
                                props.darkTheme
                                    ? "/layout/images/logo-primeblocks-dark.svg"
                                    : "/layout/images/logo-primeblocks.svg"
                            }
                            className="logo"
                            alt="PrimeBlocks Logo"
                        />
                        <img
                            src="/layout/images/icon-primeblocks.svg"
                            className="icon"
                            alt="PrimeBlocks"
                        />
                    </Link>
                </div>

                <div className="topbar-actions">
                    <a
                        className="topbar-menu-button"
                        onClick={onTopbarMenuButtonClick}
                    >
                        <i className="pi pi-bars"></i>
                    </a>
                    <ul className="topbar-menu">
                        <li>
                            <Link
                                href="/"
                                className={classNames({ "router-link router-link-active": router.pathname === "/" })}
                            >
                                BLOCKS
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/documentation"
                                className={classNames({ "router-link router-link-active": router.pathname === "/documentation" })}
                            >
                                DOCUMENTATION
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className={classNames({ "router-link router-link-active": router.pathname === "/pricing" })}
                            >
                                PRICING
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Sidebar
                position="right"
                visible={props.topbarActive}
                onHide={onTopbarHide}
            >
                <ul className="topbar-mobile-menu">
                    <li>
                        <Link
                            href="/"
                            className={classNames({ "router-link router-link-active": router.pathname === "/" })}
                        >
                            BLOCKS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/documentation"
                            className={classNames({ "router-link router-link-active": router.pathname === "/documentation" })}
                        >
                            DOCUMENTATION
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pricing"
                            className={classNames({ "router-link router-link-active": router.pathname === "/pricing" })}
                        >
                            PRICING
                        </Link>
                    </li>
                </ul>
            </Sidebar>

        </>
    );
};

export default AppTopbar;
