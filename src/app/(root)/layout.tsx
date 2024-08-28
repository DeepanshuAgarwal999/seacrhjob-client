import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Navbar />
            <main className=" mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}
