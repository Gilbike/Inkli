import FilterRow from "@/Components/FilterRow";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index() {
    return (
        <Layout title="Stories">
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />
                <div className="flex flex-col gap-3 mt-3 mx-auto w-4/12">
                    <FilterRow />
                    <Story
                        title="Placeholder title"
                        summary="Placeholder summary for story to display"
                        likeCount={63}
                        proposals={7}
                        continues={12}
                    />
                </div>
                <div className="w-2/12"></div>
            </main>
        </Layout>
    );
}
