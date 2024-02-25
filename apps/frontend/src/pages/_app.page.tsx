// pages/_app.tsx

import "../styles/globals.css";
import "ui/styles.css";

import { Auth0Provider } from "@auth0/auth0-react";
import { Inter } from "@next/font/google";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

import { Navbar, UrqlClientProvider } from "~/components/";
import { CurrentUserProvider } from "~/contexts/currentUser";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="light">
        {" "}
        {/* Wrap your application with ThemeProvider */}
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
          audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE || ""}
          redirectUri={
            typeof window !== "undefined" ? window.location.origin : undefined
          }
        >
          <UrqlClientProvider>
            <CurrentUserProvider>
              <Navbar />
              <div className="container mx-auto bg-white px-5 pt-4">
                <Component {...pageProps} />
              </div>
            </CurrentUserProvider>
          </UrqlClientProvider>
        </Auth0Provider>
        <div id="modal" className="relative mx-auto max-w-xl" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
