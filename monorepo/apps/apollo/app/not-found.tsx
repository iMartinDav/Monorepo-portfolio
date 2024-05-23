import { Button } from "primereact/button";
import type { Page } from "@/types";

const Custom404: Page = () => {
    return (
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
                <div className="text-center lg:text-right">
                    <div className="mt-6 mb-3 font-bold text-6xl text-900">
                        Are you lost?
                    </div>
                    <p className="text-700 text-3xl mt-0 mb-6">
                        Sorry, we couldn&#39;t find the page.
                    </p>
                    <Button
                        type="button"
                        label="Go back to home page"
                        className="p-button-outlined"
                    ></Button>
                </div>
                <div>
                    <img
                        src="/demo/images/blocks/feedback/404-rocket.png"
                        alt="Image"
                        className="w-full md:w-28rem"
                    />
                </div>
            </div>
        </div>
    );
};

export default Custom404;
