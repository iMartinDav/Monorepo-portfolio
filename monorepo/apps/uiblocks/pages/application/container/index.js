import React from 'react';
import BlockViewer from "../../../demo/components/BlockViewer";

const Container = () => {

    const block1 = `
<div className="p-4">
    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block2 = `
<div className="px-4 py-8 md:px-6 lg:px-8">
    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block3 = `
<div className="p-4 md:p-6 lg:p-8">
    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block4 = `
<div className="p-0">
    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    const block5 = `
<div className="px-0 py-4 md:px-4">
    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Container</div>
            <BlockViewer header="Uniform Padding" code={block1}>
                <div className="p-4">
                    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Responsive X Axis" code={block2}>
                <div className="px-4 py-8 md:px-6 lg:px-8">
                    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Responsive Both Axes" code={block3}>
                <div className="p-4 md:p-6 lg:p-8">
                    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="No Padding" code={block4}>
                <div className="p-0">
                    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>

            <BlockViewer header="Uniform Padding - Full Width on Mobile" code={block5}>
                <div className="px-0 py-4 md:px-4">
                    <div className="border-2 border-dashed surface-border border-round surface-card" style={{ minHeight: '20rem' }}></div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Container;
