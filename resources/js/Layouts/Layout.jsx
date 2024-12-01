import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function Layout({ title = "Inkli", children }) {
    return (
        <>
            <Head title={title} />
            <Header />
            {children}
            <div className="mb-auto"></div>
            <Footer />
        </>
    );
}
