import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html
            lang='fa-IR'
            dir='rtl'>
            <Head />
            <body className='bg-black text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
