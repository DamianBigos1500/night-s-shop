import RootLayout from "@/Layouts/RootLayout";
import { Head, useForm } from "@inertiajs/react";
import { FC } from "react";

interface ForgotPasswordProps {
    status?: any;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e: any) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <RootLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("email", e.target.value)}
                />

                <div className="flex items-center justify-end mt-4">
                    <button className="ml-4" disabled={processing}>
                        Email Password Reset Link
                    </button>
                </div>
            </form>
        </RootLayout>
    );
};

export default ForgotPassword;
