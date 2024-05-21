import React, {useContext} from "react";
import Link from "next/link";
import AppContentContext from "../../layout/context/appcontentcontext";

const Ecommerce = () => {
    const { darkTheme } = useContext(AppContentContext);

    return (
        <>
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
                                            5 Blocks
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
                                            1 Block
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
                                            3 Blocks
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
                                            1 Block
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
                                            1 Block
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
                                            1 Block
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
                                            1 Block
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

export default Ecommerce;
