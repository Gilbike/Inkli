import FilterRow from "@/Components/FilterRow";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index({ stories }) {
    return (
        <Layout title="Stories">
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto w-4/12">
                    <FilterRow />
                    {stories.map((story) => (
                        <Story
                            title={story.title}
                            summary={story.content}
                            likeCount={0}
                            proposals={0}
                            continues={0}
                        />
                    ))}
                </div>
                <div className="w-2/12"></div>
            </main>
        </Layout>
    );
}
