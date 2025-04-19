import Button from "@/Components/Button";
import Container from "@/Components/Container";
import DefaultCard from "@/Components/DefaultCard";
import FormInput from "@/Components/FormInput";
import Layout from "@/Layouts/Layout";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function AdminPanel({ users, genres, stories, success }) {
    const currentUser = usePage().props.auth.user;

    const formSubmitter = useForm({});

    const banUser = (id) => {
        formSubmitter.delete(route("user.ban", { user: id }));
    }
    const grantAdminToUser = (id) => {
        formSubmitter.put(route("user.admin.grant", { user: id }));
    }
    const removeAdminFromUser = (id) => {
        formSubmitter.put(route("user.admin.remove", { user: id }));
    }

    const deleteGenre = (id) => {
        formSubmitter.delete(route("genres.delete", { genre: id }));
    }

    const deleteStory = (id) => {
        formSubmitter.delete(route("stories.delete", { story: id }));
    }

    const { post, setData, data } = useForm({
        name: ""
    });

    const createGenre = () => {
        post(route("genres.store"));
    }

    return (
        <Layout>
            <Container>
                {success ? (
                    <div className="bg-green-100 text-green-800 p-3 rounded my-4">
                        Action perfomed successfully
                    </div>
                ) : null}
                <DefaultCard title="Manage Users" className="mt-3">
                    <div className="overflow-auto h-96 w-full flex flex-col gap-2">
                        {users.map((x) => (
                            <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center">
                                <a href={route("user", { user: x.id })}>
                                    {x.name}
                                </a>
                                <div className="flex flex-row gap-1">
                                    {!x.admin ? (
                                        <form onSubmit={() => grantAdminToUser(x.id)}>
                                            <button className="text-white px-2 py-1 rounded bg-lightP dark:bg-darkP hover:bg-lightH dark:hover:bg-darkH">
                                                Grant Admin
                                            </button>
                                        </form>
                                    ) : null}
                                    <form onSubmit={() => banUser(x.id)}>
                                        <button className="text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">
                                            Delete User
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Only avaible for the main admin account */}
                    {
                        currentUser.email == "admin@inkli.com" ? (
                            <>
                                <h3 className="font-medium text-2xl my-2">
                                    Manage Administrators
                                </h3>
                                <div className="flex flex-row gap-3 overflow-auto">
                                    {users
                                        .filter((x) => x.admin)
                                        .map((x) => (
                                            <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center w-fit gap-2">
                                                <a
                                                    href={route("user", {
                                                        user: x.id,
                                                    })}
                                                >
                                                    {x.name}
                                                </a>
                                                <div className="flex flex-row gap-1">
                                                    <form onSubmit={() => removeAdminFromUser(x.id)}>
                                                        <button className="text-sm text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">
                                                            Remove Admin
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </>
                        ) : null
                    }
                </DefaultCard>

                <DefaultCard title="Manage Genres" className="mt-3">
                    <div className="overflow-auto h-96 w-full flex flex-col gap-2">
                        {genres.map((x) => (
                            <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center">
                                <a href={route("genres.show", { genre: x.id })}>
                                    {x.name}
                                </a>
                                <div className="flex flex-row gap-1">
                                    <form onSubmit={() => deleteGenre(x.id)}>
                                        <button className="text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">
                                            Delete Genre
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-medium text-2xl my-2">Create new genre</h3>
                    <form onSubmit={createGenre}>
                        <FormInput label="Name" htmlName="name" value={data.name} onChange={(e) => setData("name", e.target.value)} />
                        <Button className="mt-2">Create Genre</Button>
                    </form>
                </DefaultCard>

                <DefaultCard title="Manage Stories" className="my-3">
                    <div className="overflow-auto h-96 w-full flex flex-col gap-2">
                        {stories.map((x) => (
                            <div className="bg-light2 dark:bg-dark2 rounded px-3 py-2 flex flex-row justify-between items-center">
                                <a href={route("stories.show", { story: x.id })}>
                                    {x.title}
                                </a>
                                <div className="flex flex-row gap-1">
                                    <form onSubmit={() => deleteStory(x.id)}>
                                        <button className="text-white bg-secondaryP hover:bg-secondaryH px-2 py-1 rounded">
                                            Delete Story
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                </DefaultCard>
            </Container>
        </Layout>
    );
}
