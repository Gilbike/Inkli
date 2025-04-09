import FilterRow from "@/Components/FilterRow";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index({ stories, genres }) {
    return (
        <Layout title="Stories">
            <main className="flex-1 flex flex-col md:flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto md:w-6/12 lg:w-4/12">
                    <FilterRow genres={genres} />
                    {stories.map((story) => (
                        <Story
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            summary={story.content}
                            likeCount={story.likeCount}
                            genre={story.genre.name}
                        />
                    ))}
                </div>
                <div className="hidden lg:block w-2/12"></div>
            </main>
        </Layout>
    );
}
