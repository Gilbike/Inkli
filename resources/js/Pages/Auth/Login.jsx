import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import Layout from "@/Layouts/Layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Layout>
            <Head title="Login" />

            <div className="p-5">
                <form
                    onSubmit={submit}
                    className="w-full md:w-8/12 lg:w-5/12 dark:bg-dark1 bg-light1 p-5 flex flex-col gap-10 m-auto rounded-lg"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-4xl">Welcome back!</h3>
                        <p className="font-[Playfair] text-base/6">
                            Log back into your Inkli account and continue the
                            creative journey.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormInput
                            error={errors.email}
                            htmlName={"email"}
                            icon={<MdEmail />}
                            label="Email"
                            placeholder="The email you started with"
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
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button className="w-full">Login</Button>

                        <Link
                            href={route("register")}
                            className="font-light text-xs"
                        >
                            New here?
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
