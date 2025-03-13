import Layout from "@/Layouts/Layout";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import React from "react";
import { Link } from "@inertiajs/react";

export default function Search({ users, stories }) {
    return (
        <Layout>
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto w-4/12">
                    <h2 className="font-bold text-4xl">
                        Stories ({stories.length})
                    </h2>
                    <div className="flex flex-col gap-2">
                        {stories.map((story) => (
                            <Story
                                id={story.id}
                                title={story.title}
                                likeCount={story.likeCount}
                                summary={story.content}
                                key={story.id}
                            />
                        ))}
                    </div>

                    <h2 className="font-bold text-4xl">
                        Users ({users.length})
                    </h2>
                    <div>
                        {users.map((user) => (
                            <Link
                                href={"/user/" + user.id}
                                key={user.id}
                                className="mb-2 rounded bg-light1 dark:bg-dark1 p-2 flex flex-row gap-2 items-center"
                            >
                                <img
                                    className="rounded-lg w-10 h-10"
                                    src={
                                        user.profilepicture ??
                                        "/img/default-pfp.jpg"
                                    }
                                    alt={user.name}
                                />
                                <p>{user.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-2/12"></div>
            </main>
        </Layout>
    );
}
