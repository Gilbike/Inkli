import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Layout title="Log in">
            <form onSubmit={submit}>
                <FormInput />

                <FormInput />

                <Button className="w-full">Login</Button>
            </form>
        </Layout>
    );
}
