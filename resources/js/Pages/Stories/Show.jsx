import Sidebar from "@/Components/Sidebar";
import Layout from "@/Layouts/Layout";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Show({ story }) {
    return (
        <Layout title="Stories">
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto w-4/12">
                    <h1 className="font-bold text-4xl mt-4">{story.title}</h1>
                    <ReactMarkdown className="w-full prose dark:prose-invert lg:prose-xl">
                        {story.content}
                    </ReactMarkdown>
                </div>
                <div className="w-2/12"></div>
            </main>
        </Layout>
    );
}
