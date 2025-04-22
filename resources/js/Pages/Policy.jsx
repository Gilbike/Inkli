import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";

export default function Policy() {
    return (
        <Layout>
            <Container>
                <DefaultCard title={"Introduction"} className="my-5">
                    <p>
                        This Privacy Policy outlines how we collect, store, and
                        use your personal data when you interact with our
                        platform. Your privacy is of the utmost importance to
                        us, and we are committed to protecting your data and
                        using it responsibly.
                    </p>
                    <h1 className="text-xl font-medium">
                        What Data Do We Collect?
                    </h1>
                    <p>
                        Based on our database schema, we may collect the
                        following information about you: Personal information:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Username</li>
                        <li>Password (encrypted)</li>
                        <li>Email address</li>
                        <li>Profile picture (optional)</li>
                        <li>Registration date</li>
                        <li>Stories you have read</li>
                        <li>Users you follow</li>
                        <li>Stories you have liked</li>
                    </ul>
                </DefaultCard>
                <DefaultCard
                    title={"How do we use your data?"}
                    className="my-5"
                >
                    <h1 className="text-xl font-medium">
                        We may use your data for the following purposes:
                    </h1>
                    <ul className="list-disc list-inside">
                        <li>
                            Providing our services: To facilitate registration,
                            login, and use of our platform.
                        </li>
                        <li>
                            Personalization: To recommend content tailored to
                            your interests.
                        </li>
                        <li>
                            Communication: To contact you, such as sending
                            messages or notifications.
                        </li>
                        <li>
                            Analytics: To analyze how our platform is used and
                            make improvements.
                        </li>
                        <li>Data Sharing</li>
                    </ul>
                    <h1 className="text-xl font-medium">
                        We do not share your personal data with third parties,
                        except in the following circumstances:
                    </h1>
                    <p>
                        With your explicit consent When required by law For
                        security purposes Data Security We implement appropriate
                        technical and organizational measures to protect your
                        data. Your data is stored on secure servers, and access
                        is restricted.
                    </p>
                </DefaultCard>
                <DefaultCard title="Your Rights" className="my-5">
                    You have the right to:
                    <ul className="list-disc list-inside">
                        <li>Access: Access your personal data.</li>
                        <li>
                            Rectification: Request the correction of inaccurate
                            data.
                        </li>
                        <li>
                            Erasure: Request the deletion of your personal data.
                        </li>
                        <li>
                            Objection: Object to the processing of your data for
                            certain purposes.
                        </li>
                        <li>
                            Data portability: Request the transfer of your data
                            to another controller.
                        </li>
                    </ul>
                    <h1 className="text-xl font-medium">Cookies</h1>
                    We use cookies to enhance your user experience. Cookies are
                    small files that are stored on your device. We use cookies
                    to remember your preferences and provide you with
                    personalized content.
                </DefaultCard>

                <DefaultCard title="Changes to this policy" className="my-5">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any significant changes.
                </DefaultCard>

                <DefaultCard title="Contact" className="my-5">
                    <p>
                        If you have any questions about our privacy policy,
                        please contact us at:
                    </p>
                    <p>privacy@inkli.com</p>
                </DefaultCard>
            </Container>
        </Layout>
    );
}
