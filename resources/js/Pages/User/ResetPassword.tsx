import { FC, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import RootLayout from "@/Layouts/RootLayout";

interface ResetPasswordProps {
    token: any;
    email: any;
}

const ResetPassword: FC<ResetPasswordProps> = ({ token, email }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <RootLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e: any) => setData("email", e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: any) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button className="ml-4" disabled={processing}>
                        Reset Password
                    </button>
                </div>
            </form>
        </RootLayout>
    );
};

export default ResetPassword;
