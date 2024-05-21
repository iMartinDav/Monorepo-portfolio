import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

const convertRoute = (route) => {
    return route.replace(/\s/g, "").toLowerCase();
};

const parseRoute = (route) => {
    return route.split("-").join("");
};

export const useBreadcrumb = (routes) => {
    const router = useRouter();
    const [breadcrumb, setBreadcrumb] = useState({
        parent: "",
        child: "",
        to: "",
    });

    const handleRouteChange = useCallback(() => {
        const pathname =
            router.pathname === "/"
                ? ["", ""]
                : router.pathname.split("/").slice(1);

        const activeRoute = routes.filter((route) => {
            if (pathname.length === 1 && route.child === "") {
                if (route.parent.split("-")) {
                    return (
                        convertRoute(parseRoute(route.parent)) ===
                        pathname[0]
                    );
                }

                return convertRoute(route.parent) === pathname[0];
            } else {
                if (route.parent.split("-")) {
                    return (
                        convertRoute(parseRoute(route.parent)) ===
                        pathname[0] &&
                        convertRoute(route.child) === pathname[1]
                    );
                }

                return (
                    convertRoute(route.parent) === pathname[0] &&
                    convertRoute(route.child) === pathname[1]
                );
            }
        });

        const parent = activeRoute.length ? activeRoute[0].parent : "";
        const child = activeRoute.length ? activeRoute[0].child : "";
        const to = `/${parent.split("-")
            ? parent.split("-").join("").toLowerCase()
            : parent.toLowerCase()
            }`;

        setBreadcrumb({ parent, child, to });
    }, [router.pathname, routes]);

    useEffect(() => {
        router.events.on("routeChangeStart", handleRouteChange);
        handleRouteChange();
        // Cleanup
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleRouteChange]);

    return (
        <ul>
            <li>
                <Link href="/">
                    <i className="pi pi-home"></i>
                </Link>
            </li>
            <li>
                <div className="chevron">/</div>
            </li>
            {breadcrumb.parent && (
                <li>
                    <Link href={breadcrumb.to}>{breadcrumb.parent}</Link>
                </li>
            )}
            {breadcrumb.child !== "" && (
                <>
                    <li>
                        <div className="chevron">/</div>
                    </li>
                    <li>
                        <a>{breadcrumb.child}</a>
                    </li>
                </>
            )}
        </ul>
    );
};
