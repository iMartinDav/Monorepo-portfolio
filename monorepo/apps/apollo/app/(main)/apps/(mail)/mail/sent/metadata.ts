import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PrimeReact APOLLO",
    description:
        "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
    robots: { index: false, follow: false },
    openGraph: {
        type: "website",
        title: "PrimeReact APOLLO-REACT",
        url: "https://www.primefaces.org/apollo-react",
        description:
            "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
        images: ["https://www.primefaces.org/static/social/apollo-react.png"],
        ttl: 604800,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport = {
    initialScale: 1,
    width: "device-width",
};
