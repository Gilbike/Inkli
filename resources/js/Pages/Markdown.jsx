import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";

export default function Policy() {
    return (
        <Layout>
            <Container>
                <DefaultCard title="Markdown - How to use it?" className="my-5">
                    <p className="font-[Playfair]">
                        Markdown is a lightweight markup language that you can
                        use to format plain text. It's widely used for
                        documentation, READMEs, blogging, and more. Inkli uses
                        this format to allow users to add more depth and
                        creativity to their stories. Please note that not all
                        markdown features are enabled on Inkli.
                    </p>
                </DefaultCard>
                <DefaultCard title="Headers" className="my-5">
                    <p className="font-[Playfair]">
                        Use # for headers. More # = smaller header.
                    </p>
                    <p># H1</p>
                    <p>## H2</p>
                    <p>### H3</p>
                </DefaultCard>
                <DefaultCard title="Emphasis" className="my-5">
                    <p>*italic* or _italic_</p>
                    <p>**bold** or __bold__</p>
                    <p>***bold italic***</p>
                </DefaultCard>

                <DefaultCard title="Lists" className="my-5">
                    <p className="font-[Playfair]">Unordered List</p>
                    <p>- First</p>
                    <p>- Second</p>
                    <p className="font-[Playfair]">Ordered List</p>
                    <p>1. First</p>
                    <p>2. Second</p>
                </DefaultCard>

                <DefaultCard title="Quotes" className="my-5">
                    <p>&gt; This is a quote.</p>
                    <p>&gt;&gt; Nested quote.</p>
                </DefaultCard>

                <DefaultCard title="Horizontal Line" className="my-5">
                    <p>---</p>
                </DefaultCard>
            </Container>
        </Layout>
    );
}
