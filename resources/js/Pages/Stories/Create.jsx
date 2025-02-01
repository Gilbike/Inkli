import MarkdownEditor from "@/Components/MarkdownEditor";
import Sidebar from "@/Components/Sidebar";
import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index() {
    return (
        <Layout title="Create Story">
            <main className="flex-1 flex flex-row items-stretch">
                <Sidebar />

                <Container>
                    <MarkdownEditor />
                </Container>
            </main>
        </Layout>
    );
}
