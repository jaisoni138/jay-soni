import Head from 'next/head';
import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { classNames } from 'primereact/utils';
import PrimeReact from 'primereact/api';
import { useMountEffect } from 'primereact/hooks';

const Layout = (props) => {
    const { layoutConfig } = useContext(LayoutContext);

    useMountEffect(() => {
        PrimeReact.ripple = true;
    });

    const containerClass = classNames('layout-wrapper', {
        'p-ripple-disabled': !layoutConfig.ripple
    });

    return (
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <title>JANAVI SONI | Visual Artist</title>
                <meta name="description" content="Editorial and portrait photography by Janavi Soni." />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                {/* Global Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <div className={containerClass}>
                {/* Main container with zero margins/padding 
                    to ensure Home Page Hero is perfectly full-screen 
                */}
                <div className="layout-main-container" style={{ marginLeft: 0, padding: 0 }}>
                    <div className="layout-main">
                        {props.children}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* Ensure no default spacing breaks the full-bleed hero */
                html, body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    color: #1a1a1a;
                }
                
                /* Remove any hidden overflow/padding from the parent layout-wrapper if present in CSS */
                .layout-wrapper {
                    padding: 0 !important;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Layout;