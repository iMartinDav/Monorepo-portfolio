import React, { useContext } from "react";
import Link from "next/link";
import AppContentContext from "../../layout/context/appcontentcontext";

const Marketing = () => {
  const { darkTheme } = useContext(AppContentContext);

  return (
    <>
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
                    <span className="block-count">8 Blocks</span>
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
                    <span className="block-name">Feature</span>
                    <span className="block-count">14 Blocks</span>
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
                    <span className="block-name">Call to Action</span>
                    <span className="block-count">12 Blocks</span>
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
                    <span className="block-name">Pricing</span>
                    <span className="block-count">7 Blocks</span>
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
                    <span className="block-count">5 Blocks</span>
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
                    <span className="block-name">Newsletter</span>
                    <span className="block-count">4 Blocks</span>
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
                    <span className="block-name">Stats</span>
                    <span className="block-count">6 Blocks</span>
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
                    <span className="block-name">Testimonial</span>
                    <span className="block-count">7 Blocks</span>
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
                    <span className="block-count">7 Blocks</span>
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
                    <span className="block-name">Contact</span>
                    <span className="block-count">3 Blocks</span>
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
                    <span className="block-count">6 Blocks</span>
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
                    <span className="block-name">Content</span>
                    <span className="block-count">3 Blocks</span>
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
                    <span className="block-name">Footer</span>
                    <span className="block-count">4 Blocks</span>
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
                    <span className="block-name">Logo Cloud</span>
                    <span className="block-count">6 Blocks</span>
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
                    <span className="block-name">Navbar</span>
                    <span className="block-count">7 Blocks</span>
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
                    <span className="block-name">Banners</span>
                    <span className="block-count">3 Blocks</span>
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
                    <span className="block-name">Landing</span>
                    <span className="block-count">2 Block</span>
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

export default Marketing;
