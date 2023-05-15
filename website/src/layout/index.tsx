import Footer from './Footer';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <div className='fixed w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-30 -z-[99999]'></div>

      <main>{children}</main>

      <Footer />
    </>
  );
}
