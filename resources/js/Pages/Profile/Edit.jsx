import Button from "@/Components/Button";
import Container from "@/Components/Container";
import DefaultCard from "@/Components/DefaultCard";
import FormInput from "@/Components/FormInput";
import Layout from "@/Layouts/Layout";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function Edit() {
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: user.name,
        profilepicture: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"));
    };

    return (
        <Layout>
            <Container>
                <h1 className="font-bold text-[36px]">Manage your account</h1>
                <DefaultCard className="mb-3">
                    <h2 className="font-medium text-[24px]">Edit profile</h2>
                    <form onSubmit={submit} encType="multipart/form-data">
                        <FormInput
                            htmlName={"username"}
                            icon={<FaUser />}
                            label="Display name"
                            className="focus:outline-none border-0 shadow-none"
                            placeholder="Display name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <input
                            onChange={(e) =>
                                setData("profilepicture", e.target.files[0])
                            }
                            type="file"
                            name="profilepicture"
                            id="profilepicture"
                            className="block"
                        />

                        <Button className="mt-3">Update Profile</Button>
                    </form>
                </DefaultCard>
                <DefaultCard>
                    <h2 className="font-medium text-[24px]">
                        Account deletion
                    </h2>
                    <a
                        className="block text-white mt-2 w-fit rounded px-3 py-2 bg-secondaryP"
                        href={route("profile.delete")}
                    >
                        Delete account
                    </a>
                </DefaultCard>
            </Container>
        </Layout>
    );
}
