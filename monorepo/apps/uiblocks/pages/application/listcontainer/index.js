import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";

const ListContainer = () => {

    const block1 = `
<ul className="list-none p-0 m-0">
    <li className="pb-4 border-bottom-1 surface-border">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li className="py-4 border-bottom-1 surface-border">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li className="pt-4">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
</ul>
    `;

    const block2 = `
<div className="surface-card p-4 shadow-2 border-round">
    <ul className="list-none p-0 m-0">
        <li className="pb-4 border-bottom-1 surface-border">
            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
        <li className="py-4 border-bottom-1 surface-border">
            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
        <li className="pt-4">
            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
        </li>
    </ul>
</div>
    `;

    const block3 = `
<ul className="list-none p-0 m-0">
    <li className="surface-card p-4 mb-3 shadow-2 border-round">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li className="surface-card p-4 mb-3 shadow-2 border-round">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
    <li className="surface-card p-4 shadow-2 border-round">
        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
    </li>
</ul>
    `;

    return (
        <>
            <div className="block-category-title">List Container</div>
            <BlockViewer header="With Dividers" code={block1} containerClassName="surface-card px-4 py-8 md:px-6 lg:px-8">
                <ul className="list-none p-0 m-0">
                    <li className="pb-4 border-bottom-1 surface-border">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                    <li className="py-4 border-bottom-1 surface-border">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                    <li className="pt-4">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                </ul>
            </BlockViewer>

            <BlockViewer header="Card with Dividers" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <div className="surface-card p-4 shadow-2 border-round">
                    <ul className="list-none p-0 m-0">
                        <li className="pb-4 border-bottom-1 surface-border">
                            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                        </li>
                        <li className="py-4 border-bottom-1 surface-border">
                            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                        </li>
                        <li className="pt-4">
                            <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                        </li>
                    </ul>
                </div>
            </BlockViewer>

            <BlockViewer header="Separate Cards" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8" >
                <ul className="list-none p-0 m-0">
                    <li className="surface-card p-4 mb-3 shadow-2 border-round">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                    <li className="surface-card p-4 mb-3 shadow-2 border-round">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                    <li className="surface-card p-4 shadow-2 border-round">
                        <div className="border-2 border-dashed surface-border border-round surface-0 p-4"></div>
                    </li>
                </ul>
            </BlockViewer>
        </>
    )
}

export default ListContainer;
