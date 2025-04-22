import Button from "@/Components/Button";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Show({ stories, followed, genre }) {
    const { post } = useForm({});

    const followGenre = () => {
        post(route("genres.follow", { genre: genre.id }));
    };

    const unfollowGenre = () => {
        post(route("genres.unfollow", { genre: genre.id }));
    };

    return (
        <Layout title="Stories">
            <main className="flex-1 flex flex-col md:flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto md:w-6/12 lg:w-4/12">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-3xl">{genre.name}</h1>
                        {followed ? (
                            <form onSubmit={unfollowGenre}>
                                <Button>Unfollow</Button>
                            </form>
                        ) : (
                            <form onSubmit={followGenre}>
                                <Button>Follow</Button>
                            </form>
                        )}
                    </div>
                    {stories.map((story) => (
                        <Story
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            summary={story.content}
                            likeCount={story.likeCount}
                            genre={story.genre}
                        />
                    ))}
                </div>
                <div className="hidden lg:block w-2/12"></div>
            </main>
        </Layout>
    );
}
