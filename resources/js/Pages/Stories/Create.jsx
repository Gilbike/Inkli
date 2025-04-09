import MarkdownEditor from "@/Components/MarkdownEditor";
import Sidebar from "@/Components/Sidebar";
import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";

export default function Index({ genres }) {
    return (
        <Layout title="Create Story">
            <main className="flex-1 flex flex-col md:flex-row items-stretch">
                <Sidebar />

                <Container>
                    <MarkdownEditor genres={genres} />
                </Container>
            </main>
        </Layout>
    );
}
