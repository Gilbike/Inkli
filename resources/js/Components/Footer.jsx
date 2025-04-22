import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-light1 dark:bg-dark1 dark:text-darkT text-lightT py-4 border-t border-outlineColor flex flex-row gap-2 items-center justify-center">
            <Link href="/aboutus" className="hover:underline">
                About Us
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
            </Link>
            <span>•</span>
            ©2024 Inkli
        </footer>
    );
}
