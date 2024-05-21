import React, { useContext } from "react";
import Link from "next/link";
import AppContentContext from "../../layout/context/appcontentcontext";

const Application = () => {
    const { darkTheme } = useContext(AppContentContext);

    return (
        <>
            <div className="block-category-title">Application UI</div>
            <div className="block-category">
                <div className="block-group">
                    <span className="block-group-title">
                        Application Shells
                    </span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/stackedlayout">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-stackedlayout-dark.svg"
                                                : "/demo/images/placeholders/placeholder-stackedlayout.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stacked Layout"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stacked Layout
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/sidebarlayout">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-sidebarlayouts-dark.svg"
                                                : "/demo/images/placeholders/placeholder-sidebarlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sidebar Layout"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sidebar Layout
                                        </span>
                                        <span className="block-count">
                                            13 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/multicolumnlayout">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-multicolumnlayouts-dark.svg"
                                                : "/demo/images/placeholders/placeholder-multicolumnlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Multi-Column Layout"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Multi-Column Layout
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Samples</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/dashboard">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-dashboard-dark.svg"
                                                : "/demo/images/placeholders/placeholder-dashboard.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Dashboard"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Dashboard
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/detail">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-detailscreens-dark.svg"
                                                : "/demo/images/placeholders/placeholder-detailscreens.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Detail"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Detail</span>
                                        <span className="block-count">2 Blocks</span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/settingscreen">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-settingscreens-dark.svg"
                                                : "/demo/images/placeholders/placeholder-settingscreens.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Settings"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Setting</span>
                                        <span className="block-count">3 Blocks</span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Headings</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/pageheading">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-pageheadings-dark.svg"
                                                : "/demo/images/placeholders/placeholder-pageheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Page Heading"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Page Heading</span>
                                        <span className="block-count">14 Blocks</span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/cardheading">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-cardheadings-dark.svg"
                                                : "/demo/images/placeholders/placeholder-cardheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Card Heading"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Card Heading
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/sectionheading">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-sectionheadings-dark.svg"
                                                : "/demo/images/placeholders/placeholder-sectionheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Section Heading"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">

                                    <div>
                                        <span className="block-name">Section Heading</span>
                                        <span className="block-count">8 Blocks</span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Data Display</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/descriptionlist">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-descriptionlist-dark.svg"
                                                : "/demo/images/placeholders/placeholder-descriptionlist.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Description List"
                                    />
                                </Link>
                                <span className="block-name">
                                    Description List
                                </span>
                                <span className="block-count">4 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/stats">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-stats-data-dark.svg"
                                                : "/demo/images/placeholders/placeholder-stats-data.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stats"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stats
                                        </span>
                                        <span className="block-count">
                                            11 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Lists</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/stackedlist">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-stackedlists-dark.svg"
                                                : "/demo/images/placeholders/placeholder-stackedlists.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stacked List"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stacked List
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/gridlist">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-gridlists-dark.svg"
                                                : "/demo/images/placeholders/placeholder-gridlists.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Grid List"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Grid List</span>
                                        <span className="block-count">9 Blocks</span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>

                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/feed">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-feeds-dark.svg"
                                                : "/demo/images/placeholders/placeholder-feeds.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Feed"
                                    />
                                </Link>
                                <span className="block-name">Feed</span>
                                <span className="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Forms</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/formlayout">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-formlayouts-dark.svg"
                                                : "/demo/images/placeholders/placeholder-formlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Form Layout"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Form Layout
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/signin">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-signin-dark.svg"
                                                : "/demo/images/placeholders/placeholder-signin.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sign-in"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sign-in
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/radiogroup">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-radiogroups-dark.svg"
                                                : "/demo/images/placeholders/placeholder-radiogroups.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Radio Group"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Radio Group
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/actionpanel">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-actionpanels-dark.svg"
                                                : "/demo/images/placeholders/placeholder-actionpanels.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Action Panel"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Action Panel
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Feedback</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/alert">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-alert-dark.svg"
                                                : "/demo/images/placeholders/placeholder-alert.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Alert"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Alert
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Navigation</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/navbar">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-app-navbar-dark.svg"
                                                : "/demo/images/placeholders/placeholder-app-navbar.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Navbar"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Navbar
                                        </span>
                                        <span className="block-count">
                                            12 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/tabs">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-tabs-dark.svg"
                                                : "/demo/images/placeholders/placeholder-tabs.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Tabs"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Tabs</span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/verticalnav">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-verticalnavigation-dark.svg"
                                                : "/demo/images/placeholders/placeholder-verticalnavigation.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Vertical Navigation"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Vertical Navigation
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/sidebarnav">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-sidebarnavigation-dark.svg"
                                                : "/demo/images/placeholders/placeholder-sidebarnavigation.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sidebar Navigation"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sidebar Navigation
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/breadcrumb">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-breadcrumb-dark.svg"
                                                : "/demo/images/placeholders/placeholder-breadcrumb.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Breadcrumb"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Breadcrumbs
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/steps">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-steps-dark.svg"
                                                : "/demo/images/placeholders/placeholder-steps.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Steps"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Steps
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/footer">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-footers-appui-dark.svg"
                                                : "/demo/images/placeholders/placeholder-footers-appui.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Footer"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Footer
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Overlays</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/dialog">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-dialog-dark.svg"
                                                : "/demo/images/placeholders/placeholder-dialog.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Modal"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Dialog
                                        </span>
                                        <span className="block-count">
                                            8 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">5 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/slideover">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-slideovers-dark.svg"
                                                : "/demo/images/placeholders/placeholder-slideovers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Slide-over"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            SlideOver
                                        </span>
                                        <span className="block-count">
                                            11 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/notification">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-notification-dark.svg"
                                                : "/demo/images/placeholders/placeholder-notification.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Notification"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Notification
                                        </span>
                                        <span className="block-count">
                                            10 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">3 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/commandmenu">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-commandmenu-dark.svg"
                                                : "/demo/images/placeholders/placeholder-commandmenu.svg"
                                        }
                                        className="block-placeholder"
                                        alt="block-Notification"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Command Menu
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">6 New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Pages</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/pagenotfound">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-pagenotfound-dark.svg"
                                                : "/demo/images/placeholders/placeholder-pagenotfound.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Container"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Page Not Found
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Layout</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <Link href="/application/container">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-containers-dark.svg"
                                                : "/demo/images/placeholders/placeholder-containers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Container"
                                    />
                                </Link>
                                <span className="block-name">Container</span>
                                <span className="block-count">5 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/panel">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-panels-dark.svg"
                                                : "/demo/images/placeholders/placeholder-panels.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Panel"
                                    />
                                </Link>
                                <span className="block-name">Panel</span>
                                <span className="block-count">4 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/listcontainer">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-listcontainers-dark.svg"
                                                : "/demo/images/placeholders/placeholder-listcontainers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="List Container"
                                    />
                                </Link>
                                <span className="block-name">
                                    List Container
                                </span>
                                <span className="block-count">3 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <Link href="/application/divider">
                                    <img
                                        src={
                                            darkTheme
                                                ? "/demo/images/placeholders/placeholder-dividers-dark.svg"
                                                : "/demo/images/placeholders/placeholder-dividers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Dividers"
                                    />
                                </Link>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Divider
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Application;
