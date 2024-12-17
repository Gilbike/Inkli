import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";

export default function Aboutus() {
    return (
        <Layout>
            <Container>
                <DefaultCard title={"About inkli"} className="my-5">
                    Inkli is a collaborative storytelling platform that empowers
                    writers to create and share their stories with a global
                    community. By providing a unique space for creative
                    expression, Inkli fosters a vibrant and supportive
                    environment for writers of all levels.
                </DefaultCard>
                <DefaultCard title={"About the creators"} className="my-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </DefaultCard>
            </Container>
        </Layout>
    );
}
