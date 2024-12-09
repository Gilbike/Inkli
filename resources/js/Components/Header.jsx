import React from "react";
import { Link } from "@inertiajs/react";
import { IoMdAdd, IoMdNotifications, IoMdSearch } from "react-icons/io";
import Input from "./Input";

function Header() {
    return (
        <nav className="dark:bg-dark1 bg-light1 p-3 flex justify-between items-center z-50 border-b border-b-outlineColor relative">
            <Link
                href="/"
                className="text-2xl font-bold flex flex-row items-center w-10 gap-2"
            >
                <img
                    className="dark:invert"
                    src="img/logo-dark.png"
                    alt="Inkli logo"
                />
                Inkli
            </Link>
            <div className="absolute left-0 w-full h-full flex items-center justify-center z-40 pointer-events-none">
                <Input
                    cl
                    svg={<IoMdSearch />}
                    placeholder="Search"
                    className="w-4/12 pointer-events-auto bg-light3-h "
                />
            </div>
            <div className="flex flex-row gap-2">
                <Link
                    href="/create"
                    className="flex flex-row gap-3 items-center p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                >
                    Create
                    <IoMdAdd size={24} />
                </Link>
                <Link
                    href="/notifications"
                    className="flex items-center p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                >
                    <IoMdNotifications size={24} />
                </Link>
                <Link
                    href="/profile"
                    className="p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                >
                    Name
                </Link>
            </div>
        </nav>
    );
}

export default Header;
