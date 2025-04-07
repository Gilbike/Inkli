import React from "react";
import Dropdown from "./Dropdown";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const users = usePage().props.auth.followedUsers;

    return (
        <div className="w-2/12 dark:bg-dark1 bg-light1 border-r border-r-outlineColor p-3 flex flex-col gap-3">
            <Link
                href="/stories"
                className="w-full rounded-lg dark:bg-dark2 bg-light2 px-3 py-2"
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
                    <div className="flex flex-col gap-2 p-2 dark:bg-dark2 bg-light2 rounded-b-lg">
                        <p>Genres</p>
                        <div>
                            <p className="italic">Users</p>
                            {users.map((x) => (
                                <a href={route("user", { user: x.id })}>
                                    {x.name}
                                </a>
                            ))}
                        </div>
                    </div>
                }
            />
            <Link
                href="/my-stories"
                className="w-full rounded-lg dark:bg-dark2 bg-light2 px-3 py-2"
            >
                My Stories
            </Link>
        </div>
    );
}
