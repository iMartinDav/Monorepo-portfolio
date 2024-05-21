import React, { useContext, useRef } from "react";
import { Button } from "primereact/button";
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppContentContext from '../layout/context/appcontentcontext';

const Home = () => {
  const application = useRef(null);
  const { darkTheme } = useContext(AppContentContext);

  const router = useRouter();

  const viewBlocks = (el) => {
    el.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="introduction">
        <div className="introduction-content shadow-2 relative overflow-hidden">
          <div className="bg-drop bg-primary hidden"></div>

          <div className="introduction-title">React UI Blocks</div>
          <div className="introduction-subtitle">
            Powered by PrimeReact
          </div>
          <p>
            <strong>400+</strong> ready to use UI blocks to build
            spectacular applications in no time.
          </p>
          <div className="flex flex-nowrap flex-column align-items-center sm:flex-row sm:justify-content-center">
            <Button
              label="Browse All"
              onClick={() => viewBlocks(application)}
              className="w-full sm:w-auto font-bold p-3 mb-3 sm:mb-0 sm:mr-3"
            />
            <Button
              onClick={() => router.push("/free")}
              label="Free Blocks"
              className="w-full sm:w-auto p-button-outlined font-bold p-3"
            />
          </div>
        </div>
      </div>

      <div ref={application} className="block-category-title">
        Application UI
      </div>
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
                    <span className="block-name">
                      Detail
                    </span>
                    <span className="block-count">
                      2 Blocks
                    </span>
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
                    <span className="block-name">
                      Setting
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
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
                    <span className="block-name">
                      Page Heading
                    </span>
                    <span className="block-count">
                      14 Blocks
                    </span>
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
                    <span className="block-name">
                      Section Heading
                    </span>
                    <span className="block-count">
                      8 Blocks
                    </span>
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
                    <span className="block-name">
                      Grid List
                    </span>
                    <span className="block-count">
                      9 Blocks
                    </span>
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
                      7 Blocks
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

      <div className="block-category-title">Marketing</div>
      <div className="block-category">
        <div className="block-group">
          <span className="block-group-title">Page Sections</span>
          <div className="block-group-content">
            <div className="grid">
              <div className="col-12 md:col-3">
                <Link href="/marketing/hero">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-hero-dark.svg"
                        : "/demo/images/placeholders/placeholder-hero.svg"
                    }
                    className="block-placeholder"
                    alt="Hero"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">Hero</span>
                    <span className="block-count">
                      8 Blocks
                    </span>
                  </div>
                  <span className="badge-new">2 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/feature">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-feature-dark.svg"
                        : "/demo/images/placeholders/placeholder-feature.svg"
                    }
                    className="block-placeholder"
                    alt="Feature"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Feature
                    </span>
                    <span className="block-count">
                      14 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/cta">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-cta-dark.svg"
                        : "/demo/images/placeholders/placeholder-cta.svg"
                    }
                    className="block-placeholder"
                    alt="CTA"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Call to Action
                    </span>
                    <span className="block-count">
                      12 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/pricing">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-pricing-dark.svg"
                        : "/demo/images/placeholders/placeholder-pricing.svg"
                    }
                    className="block-placeholder"
                    alt="Pricing"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Pricing
                    </span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/faq">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-faq-dark.svg"
                        : "/demo/images/placeholders/placeholder-faq.svg"
                    }
                    className="block-placeholder"
                    alt="FAQ"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">FAQ</span>
                    <span className="block-count">
                      5 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/newsletter">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-newsletter-dark.svg"
                        : "/demo/images/placeholders/placeholder-newsletter.svg"
                    }
                    className="block-placeholder"
                    alt="Newsletter"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Newsletter
                    </span>
                    <span className="block-count">
                      4 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/stats">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-stats-dark.svg"
                        : "/demo/images/placeholders/placeholder-stats.svg"
                    }
                    className="block-placeholder"
                    alt="Newsletter"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Stats
                    </span>
                    <span className="block-count">
                      6 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/testimonials">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-testimonials-dark.svg"
                        : "/demo/images/placeholders/placeholder-testimonials.svg"
                    }
                    className="block-placeholder"
                    alt="Testimonial"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Testimonial
                    </span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                  <span className="badge-new">2 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/blog">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-blogsections-dark.svg"
                        : "/demo/images/placeholders/placeholder-blogsections.svg"
                    }
                    className="block-placeholder"
                    alt="Blog"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">Blog</span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/contact">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-contactsections-dark.svg"
                        : "/demo/images/placeholders/placeholder-contactsections.svg"
                    }
                    className="block-placeholder"
                    alt="Contact"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Contact
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/team">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-teamsections-dark.svg"
                        : "/demo/images/placeholders/placeholder-teamsections.svg"
                    }
                    className="block-placeholder"
                    alt="Team"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">Team</span>
                    <span className="block-count">
                      6 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/content">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-contentsections-dark.svg"
                        : "/demo/images/placeholders/placeholder-contentsections.svg"
                    }
                    className="block-placeholder"
                    alt="Content"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Content
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/footer">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-footer-dark.svg"
                        : "/demo/images/placeholders/placeholder-footer.svg"
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
                      4 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/logocloud">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-logocloud-dark.svg"
                        : "/demo/images/placeholders/placeholder-logocloud.svg"
                    }
                    className="block-placeholder"
                    alt="Logo Cloud"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Logo Cloud
                    </span>
                    <span className="block-count">
                      6 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/navbar">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-marketing-navbar-dark.svg"
                        : "/demo/images/placeholders/placeholder-marketing-navbar.svg"
                    }
                    className="block-placeholder"
                    alt="NavBar"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Navbar
                    </span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                  <span className="badge-new">1 New</span>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/marketing/banner">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-banner-dark.svg"
                        : "/demo/images/placeholders/placeholder-banner.svg"
                    }
                    className="block-placeholder"
                    alt="Banners"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Banners
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
                <Link href="/marketing/landing">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-landingscreens-dark.svg"
                        : "/demo/images/placeholders/placeholder-landingscreens.svg"
                    }
                    className="block-placeholder"
                    alt="Landing"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Landing
                    </span>
                    <span className="block-count">
                      2 Blocks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-category-title">E-Commerce</div>
      <div className="block-category">
        <div className="block-group">
          <span className="block-group-title">Blocks</span>
          <div className="block-group-content">
            <div className="grid">
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/productoverview">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-productoverviews-dark.svg"
                        : "/demo/images/placeholders/placeholder-productoverviews.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Product Overview
                    </span>
                    <span className="block-count">
                      4 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/productlist">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-productlists-dark.svg"
                        : "/demo/images/placeholders/placeholder-productlists.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Product List
                    </span>
                    <span className="block-count">
                      9 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/categorypreview">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-categorypreviews-dark.svg"
                        : "/demo/images/placeholders/placeholder-categorypreviews.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Category Preview
                    </span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/shoppingcart">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-shoppingcarts-dark.svg"
                        : "/demo/images/placeholders/placeholder-shoppingcarts.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Shopping Cart
                    </span>
                    <span className="block-count">
                      5 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/categoryfilter">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-categoryfilters-dark.svg"
                        : "/demo/images/placeholders/placeholder-categoryfilters.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Category Filter
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/productquickview">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-productquickviews-dark.svg"
                        : "/demo/images/placeholders/placeholder-productquickviews.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Product Quickview
                    </span>
                    <span className="block-count">
                      2 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/productfeature">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-productfeatures-dark.svg"
                        : "/demo/images/placeholders/placeholder-productfeatures.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Product Feature
                    </span>
                    <span className="block-count">
                      7 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/storenavigation">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-storenavigation-dark.svg"
                        : "/demo/images/placeholders/placeholder-storenavigation.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Store Navigation
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/promosection">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-promosections-dark.svg"
                        : "/demo/images/placeholders/placeholder-promosections.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Promo Section
                    </span>
                    <span className="block-count">
                      6 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/checkoutform">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-checkoutforms-dark.svg"
                        : "/demo/images/placeholders/placeholder-checkoutforms.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Checkout Form
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/review">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-reviews-dark.svg"
                        : "/demo/images/placeholders/placeholder-reviews.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Review
                    </span>
                    <span className="block-count">
                      4 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/ordersummary">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-ordersummaries-dark.svg"
                        : "/demo/images/placeholders/placeholder-ordersummaries.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Order Summary
                    </span>
                    <span className="block-count">
                      3 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/orderhistory">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-orderhistory-dark.svg"
                        : "/demo/images/placeholders/placeholder-orderhistory.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Order History
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/incentive">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-incentives-dark.svg"
                        : "/demo/images/placeholders/placeholder-incentives.svg"
                    }
                    className="block-placeholder"
                    alt="Product Overview"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Incentive
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
          <span className="block-group-title">Page Samples</span>
          <div className="block-group-content">
            <div className="grid">
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/storefront">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-storefrontpages-dark.svg"
                        : "/demo/images/placeholders/placeholder-storefrontpages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Storefront
                    </span>
                    <span className="block-count">
                      2 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/productpage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-productpages-dark.svg"
                        : "/demo/images/placeholders/placeholder-productpages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Product Page
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/categorypage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-categorypages-dark.svg"
                        : "/demo/images/placeholders/placeholder-categorypages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Category Page
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/shoppingcartpage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-shoppingcarts-dark.svg"
                        : "/demo/images/placeholders/placeholder-shoppingcarts.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Shopping Cart Page
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/checkoutpage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-checkoutpages-dark.svg"
                        : "/demo/images/placeholders/placeholder-checkoutpages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Checkout Page
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/orderdetailpage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-orderdetailpages-dark.svg"
                        : "/demo/images/placeholders/placeholder-orderdetailpages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Order Detail Page
                    </span>
                    <span className="block-count">
                      1 Blocks
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-3">
                <Link href="/ecommerce/orderhistorypage">
                  <img
                    src={
                      darkTheme
                        ? "/demo/images/placeholders/placeholder-orderhistorypages-dark.svg"
                        : "/demo/images/placeholders/placeholder-orderhistorypages.svg"
                    }
                    className="block-placeholder"
                    alt="Store Front"
                  />
                </Link>
                <div className="flex align-items-start justify-content-between">
                  <div>
                    <span className="block-name">
                      Order History Page
                    </span>
                    <span className="block-count">
                      1 Blocks
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

export default Home;
