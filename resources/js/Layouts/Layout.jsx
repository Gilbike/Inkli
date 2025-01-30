import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Layout({ title = "Inkli", children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkmode") || "false";
        setDarkMode(savedMode === "true");
    }, []);

    useEffect(() => {
        localStorage.setItem("darkmode", darkMode);
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <Head title={title} />
            <Header onDarkModeClick={() => setDarkMode(!darkMode)} />
            {children}
            <div className="mb-auto"></div>
            <Footer />
        </>
    );
}
