import FilterRow from "@/Components/FilterRow";
import Sidebar from "@/Components/Sidebar";
import Story from "@/Components/Story";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index() {
    return (
        <Layout title="Create Story">
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />

                <div className="w-2/12"></div>
            </main>
        </Layout>
    );
}
