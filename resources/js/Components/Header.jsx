import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { IoMdAdd, IoMdNotifications, IoMdSearch } from "react-icons/io";
import { IoInvertMode } from "react-icons/io5";
import Input from "./Input";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Header({ onDarkModeClick }) {
    const { auth } = usePage().props;
    // auth.user = null;

    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="dark:bg-dark1 bg-light1 p-3 flex flex-col items-center z-50 border-b border-b-outlineColor relative">
            <div className="w-full flex justify-between items-center relative">
                <Link
                    href={auth.user ? "/stories" : "/"}
                    className="text-2xl font-bold flex flex-row items-center w-10 gap-2"
                >
                    <img
                        className="dark:invert"
                        src="/img/logo-dark.png"
                        alt="Inkli logo"
                    />
                    <span className="hidden lg:block">Inkli</span>
                </Link>

                {auth.user && (
                    <div className="md:flex hidden absolute left-0 w-full h-full items-center justify-center z-40 pointer-events-none">
                        <form
                            className="w-4/12 pointer-events-auto"
                            action="/search"
                            method="GET"
                        >
                            <Input
                                name="q"
                                svg={<IoMdSearch />}
                                placeholder="Search"
                            />
                        </form>
                    </div>
                )}

                {auth.user ? (
                    <div className="flex flex-row gap-2">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="flex md:hidden items-center p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                        >
                            <IoMdSearch size={24} />
                        </button>
                        <Link
                            href="/stories/create"
                            className="flex flex-row gap-3 items-center p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                        >
                            <span className="lg:block hidden">Create</span>
                            <IoMdAdd size={24} />
                        </Link>
                        {auth.user.admin ? (
                            <Link
                                href="/adminpanel"
                                className="flex flex-row gap-3 items-center p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h"
                            >
                                <MdAdminPanelSettings size={24} />
                            </Link>
                        ) : null}
                        <div className="relative">
                            <button
                                className="p-2 rounded-md dark:bg-dark2 dark:hover:bg-dark2-h bg-light2 hover:bg-light2-h flex flex-row gap-3"
                                onClick={() => setOpen(!open)}
                            >
                                {auth.user.name}
                                <img
                                    className="rounded w-6 h-6"
                                    src={
                                        auth.user.profilepicture ??
                                        "/img/default-pfp.jpg"
                                    }
                                />
                            </button>

                            {open && (
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setOpen(false)}
                                ></div>
                            )}

                            {open ? (
                                <div className="absolute w-48 right-0 dark:bg-dark2 bg-light2 shadow rounded-lg overflow-hidden z-50">
                                    <Link
                                        className="w-full flex flex-row items-center gap-2 py-2 px-3 rounded-md  dark:hover:bg-dark2-h  hover:bg-light2-h"
                                        href="/profile"
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        className="w-full flex flex-row items-center gap-2 py-2 px-3 rounded-md  dark:hover:bg-dark2-h  hover:bg-light2-h"
                                        onClick={onDarkModeClick}
                                    >
                                        <IoInvertMode />
                                        Toggle dark theme
                                    </button>
                                    <Link
                                        href="/logout"
                                        method="POST"
                                        className="w-full flex flex-row items-center gap-2 py-2 px-3 rounded-md  dark:hover:bg-dark2-h  hover:bg-light2-h"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    <Link className="mr-2" href="/login">
                        Already a member?
                    </Link>
                )}
            </div>
            {searchOpen && (
                <form
                    className="w-8/12 pointer-events-auto block md:hidden mt-2"
                    action="/search"
                    method="GET"
                >
                    <Input name="q" svg={<IoMdSearch />} placeholder="Search" />
                </form>
            )}
        </nav>
    );
}
