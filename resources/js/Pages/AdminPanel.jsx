import Container from "@/Components/Container";
import DefaultCard from "@/Components/DefaultCard";
import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function AdminPanel({ users }) {
    const currentUser = usePage().props.auth.user;

    return (
        <Layout>
            <Container>
                <DefaultCard
                    title="Manage Users"
                    className="mt-3"
                >
                    <div className="overflow-auto h-96 w-full flex flex-col gap-2">
                        {users.map(x => (
                            <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center">
                                <a href={route("user", { user: x.id })}>
                                    {x.name}
                                </a>
                                <div className="flex flex-row gap-1">
                                    {!x.admin ? (
                                        <button className="text-white px-2 py-1 rounded bg-lightP dark:bg-darkP hover:bg-lightH dark:hover:bg-darkH">Grant Admin</button>
                                    ) : null}
                                    <button className="text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">Delete User</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Only avaible for the main admin account */}
                    {currentUser.email == "admin@inkli.com" ? (
                        <>
                            <h3 className="font-medium text-2xl my-2">Manage Administrators</h3>
                            <div className="flex flex-row gap-3 overflow-auto">
                                {users.filter(x => x.admin).map(x => (
                                    <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center w-fit gap-2">
                                        <a href={route("user", { user: x.id })}>
                                            {x.name}
                                        </a>
                                        <div className="flex flex-row gap-1">
                                            <button className="text-sm text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">Remove Admin</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : null}
                </DefaultCard>
            </Container>
        </Layout>
    );
}
