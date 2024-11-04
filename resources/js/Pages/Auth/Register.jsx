import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import Layout from "@/Layouts/Layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <Layout>
            <Head title="Register" />

            <div className="p-5">
                <form
                    onSubmit={submit}
                    className="w-full md:w-8/12 lg:w-5/12 bg-dark1 p-5 flex flex-col gap-10 m-auto rounded-lg"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-4xl">Join Inkli</h3>
                        <p className="font-[Playfair] text-base/6">
                            Join Inkli today and dive into a vibrant community
                            where your imagination sets the rules, and your
                            ideas can shape and evolve the stories you love.
                            Unleash your creativity, connect with fellow
                            writers, and become part of an amazing community.
                            Let’s create together on Inkli!
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormInput
                            error={errors.name}
                            htmlName={"username"}
                            icon={<FaUser />}
                            label="Username"
                            placeholder="How should we call you?"
                            autocomplete="on username"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <FormInput
                            error={errors.email}
                            htmlName={"email"}
                            icon={<MdEmail />}
                            label="Email"
                            placeholder="Your contact email. This cannot be changed later"
                            type="email"
                            autocomplete="on email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <FormInput
                            error={errors.password}
                            htmlName={"password"}
                            icon={<FaLock />}
                            label="Password"
                            placeholder="Shhh.. It’s your very own secure password"
                            type="password"
                            autocomplete="on new-password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <FormInput
                            error={errors.password_confirmation}
                            htmlName={"password_confirmation"}
                            icon={<FaLock />}
                            label="Confirm Password"
                            placeholder="Shhh.. We need to make sure it's secure"
                            type="password"
                            autocomplete="on new-password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button className="w-full" content="Join Inkli" />
                        <Link
                            href={route("login")}
                            className="font-light text-xs"
                        >
                            Already a member?
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
