import Container from "@/Components/Container";
import DefaultCard from "@/Components/DefaultCard";
import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Edit() {
    const user = usePage().props.auth.user;

    return (
        <Layout>
            <Container>
                <h1 className="font-bold text-[36px]">Edit your profile</h1>
                <DefaultCard>
                    <h2 className="font-medium text-[24px]">
                        Account deletion
                    </h2>
                    <a
                        className="block mt-2 w-fit rounded px-3 py-2 bg-secondaryP"
                        href={route("profile.delete")}
                    >
                        Delete account
                    </a>
                </DefaultCard>
            </Container>
        </Layout>
    );
}
