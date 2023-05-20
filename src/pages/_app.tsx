import 'STYLE/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '../layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import SeoMeta from 'next/head';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <SeoMeta>
                <title>وبسایت پیمان نادری | FrontEnd Developer</title>
                <meta
                    name='description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <link
                    rel='canonical'
                    href='https://peymanath.ir/'
                />
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link
                    rel='shortcut icon'
                    href='/assets/images/favicon.png'
                />
                <meta
                    name='theme-color'
                    content='#2c333f'
                />
                <meta
                    property='og:title'
                    content='وبسایت شخصی پیمان نادری | FrontEnd Developer'
                    key='title'
                />
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:url'
                    content='https://peymanath.ir/'
                />
                <meta
                    property='og:image'
                    content='/assets/images/og-cover.png'
                />
                <meta
                    property='twitter:image:src'
                    content='/assets/images/og-cover.png'
                />
                <meta
                    property='author'
                    content='پیمان نادری'
                />
                <meta
                    property='og:locale'
                    content='fa_IR'
                />
                <meta
                    property='og:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
                <meta
                    property='og:site_name'
                    content='PeymanATH'
                />
                <meta
                    property='og:url'
                    content='https://peymanath.ir'
                />
                <meta
                    property='twitter:card'
                    content='summary_large_image'
                />
                <meta
                    property='twitter:site'
                    content='@peymanath'
                />
                <meta
                    property='twitter:creator'
                    content='@peymanath'
                />
                <meta
                    property='twitter:title'
                    content='وبسایت پیمان نادری | FrontEnd Developer'
                />
                <meta
                    property='twitter:description'
                    content='توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer'
                />
            </SeoMeta>
            <Component {...pageProps} />
        </RootLayout>
    );
}
