import Button from "@/Components/Button";
import Container from "@/Components/Container";
import FaqBox from "@/Components/FaqBox";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";

export default function Aboutus() {
    return (
        <Layout>
            <DefaultCard title={"About inkli"}>
                Inkli is a collaborative storytelling platform that empowers
                writers to create and share their stories with a global
                community. By providing a unique space for creative expression,
                Inkli fosters a vibrant and supportive environment for writers
                of all levels.
            </DefaultCard>
            <DefaultCard title={"About the creators"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </DefaultCard>
        </Layout>
    );
}
