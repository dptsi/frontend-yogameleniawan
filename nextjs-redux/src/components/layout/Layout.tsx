import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

type Props = {
    children?: any
    title?: string
}

const Layout: React.FC<Props> = ({ children, title = "Book Best Hotels for your Holiday" }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Find and book best hotels for your holiday" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            {children}
            <Footer />

        </div>
    )
}

export default Layout;