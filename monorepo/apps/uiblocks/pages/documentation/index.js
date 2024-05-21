import React from 'react';
import { AppCodeHighlight } from '../../demo/components/AppCodeHighlight';

const Documentation = () => {
    return (
        <div className="documentation">
            <h1 className="text-4xl mt-0 mb-3">Documentation</h1>
            <p className="mb-3 line-height-3">PrimeBlocks for React consists of copy paste ready UI blocks crafted with PrimeFlex where theming and interactivity is provided by PrimeReact.</p>

            <h3>Compatibility</h3>
            <p>PrimeBlocks library requires PrimeReact v9.3+ and PrimeFlex v3.3.0+.</p>

            <h3 className="text-xl mb-3">What is a Block?</h3>
            <p className="mb-3 line-height-3">A UI block is a set of html elements styled with the <a href="https://www.primefaces.org/primeflex" className="text-blue-500 no-underline hover:underline">PrimeFlex</a> CSS utility library.
                A block can also contain PrimeReact components in addition to regular elements. The blocks are designed to be used easily by simply moving the block code to your own application. This is achieved by defining the styling in the markup without using a custom css declaration.
                In cases where a block requires interactivity such as toggling the visibility of a menu or a sidebar, StyleClass component of PrimeReact manages the events and animations.</p>

            <h3 className="text-xl mb-3">Theming</h3>
            <p className="mb-3 line-height-3">Blocks utilize color classes for background, text color, border color and pseudo states. Color values are derived from the PrimeReact theme being used so that a block can seamlesslly integrate with your application. For example
                <i>bg-blue-500</i> class retrieves the background color using the <i>--blue-500</i> CSS variables from PrimeReact. See <a href="https://primefaces.org/primereact/showcase/#/colors" className="text-blue-500 no-underline hover:underline">PrimeReact colors palettes</a> for more information.
            </p>

            <h2 className="text-2xl mb-3">Setup</h2>
            <h3 className="text-xl mb-3">PrimeFlex</h3>

            <p className="mb-3 line-height-3">PrimeFlex v3.3+ needs to be installed to begin with.</p>
            <AppCodeHighlight lang="markup">
                {`
npm install primeflex --save
`}
            </AppCodeHighlight>

            <p className="line-height-3">Next step is adding the primeflex.css at <i>pages/_app.js</i> file.</p>
            <AppCodeHighlight lang="javascript">
                {`
import "primeflex/primeflex.css";
`}
            </AppCodeHighlight>

            <h3 className="text-xl mb-3">StyleClass Component</h3>
            <p className="mb-3 line-height-3">Many of the blocks like a navbar may require interactivity for opening or hiding a menu. A handy component called <i>StyleClass</i> is available via PrimeReact to bring interactivity easily.
                The Component adds a click event to its host and manages the enter/leave animation of a target. Import the StyleClass component from PrimeReact to your component.</p>
            <AppCodeHighlight lang="javascript">
                {`
import { StyleClass } from 'primereact/styleclass';
`}
            </AppCodeHighlight>

            <h3 className="text-xl mb-3">Font Settings</h3>
            <p className="mb-3 line-height-3">PrimeBlocks use the font derived from the PrimeReact theme being used, you may still use them with a font of your choice however to have the same look
                when a block is copied to your own page, add the config below to your application.</p>
            <AppCodeHighlight lang="css">
                {`
body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`}
            </AppCodeHighlight>

            <h3 className="text-xl mb-3">Run the Samples</h3>
            <p className="mb-3 line-height-3">PrimeBlocks demo application is distributed as a Next.JS project, download the file from PrimeStore, extract the contents of the zip file and execute the following commands to run the application at <i>http://localhost:3000</i>.
                Note that Next.JS is only used for demo purposes, PrimeBlocks can be used in any React environment like Remix as well.</p>

            <AppCodeHighlight lang="markup">
                {`
npm install
npm run dev
`}
            </AppCodeHighlight>
            <h3 className="text-xl mb-3">Try a Block</h3>
            <p className="mb-3 line-height-3">That&lsquo;s it, now you can use the copy icon of a block demo and paste it to your application to get started. Please note that, a block may use PrimeReact components as well so make sure those components are imported.</p>

            <h3 className="text-xl mb-3">Production Size</h3>
            <p className="mb-3 line-height-3">When using a utility CSS library like PrimeFlex, it is likely to use only a set of classes from the library leaving the rest of the library as unused.
                To avoid including the unused part in your application, it is strongly recommended to use a tool like PurgeCSS that analyzes your code and generates an optimized primeflex file that only contains the utilities you&lsquo;ve used.</p>
        </div>
    )
}

export default Documentation;
