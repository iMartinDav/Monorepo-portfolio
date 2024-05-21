import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";

const Panel = () => {

    const block1 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="border-2 border-dashed surface-border border-round" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block2 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block3 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
    <div className="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>
    `;

    const block4 = `
<div className="surface-card p-4 shadow-2 border-round">
    <div className="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
    <div className="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Panel</div>
            <BlockViewer header="Basic Card" code={block1} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="border-2 border-dashed surface-border border-round" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card with Header" code={block2} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
                    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card with Footer" code={block3} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
                    <div className="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Card with Header and Footer" code={block4} containerClassName="px-4 py-8 md:px-6 lg:px-8">
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
                    <div className="border-2 border-dashed surface-border border-round p-4" style={{ minHeight: '20rem' }}></div>
                    <div className="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Panel;
