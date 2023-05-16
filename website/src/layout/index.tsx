import Footer from './Footer';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />

            <div className='fixed w-full h-full inset-0 bg-body bg-center -z-[99999] opacity-60'></div>

            <main className='mt-32 md:mt-28'>{children}</main>

            {/*<Footer />*/}
        </>
    );
}
