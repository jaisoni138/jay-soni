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
                {/* Standardized Global Title */}
                <title>Janavi Soni Photography</title>
                <meta name="description" content="Editorial and portrait photography by Janavi Soni." />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                
                {/* Global Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <div className={containerClass}>
                <div className="layout-main-container" style={{ marginLeft: 0, padding: 0 }}>
                    <div className="layout-main">
                        {props.children}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    color: #1a1a1a;
                    font-family: 'Montserrat', sans-serif;
                }
                
                .layout-wrapper {
                    padding: 0 !important;
                }

                /* Smooth scrolling for the whole site */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Layout;