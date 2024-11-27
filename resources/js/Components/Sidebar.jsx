import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <div className="w-2/12 bg-dark1 border-r border-r-outlineColor p-3 flex flex-col gap-3">
            <Link
                href="/stories"
                className="w-full rounded-lg bg-dark2 px-3 py-2"
            >
                Stories
            </Link>
            <Dropdown
                className="w-full"
                content={<Link href="/highlights">Highlights</Link>}
                menu={<div></div>}
            />
            <Dropdown
                className="w-full"
                content={<Link href="/following">Following</Link>}
                menu={
                    <div className="flex flex-col gap-2 p-2 bg-dark2 rounded-b-lg">
                        <p>Genres</p>
                        <p>Users</p>
                    </div>
                }
            />
            <Link
                href="/my-stories"
                className="w-full rounded-lg bg-dark2 px-3 py-2"
            >
                My Stories
            </Link>
        </div>
    );
}
