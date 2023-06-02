import RootLayout from "@/Layouts/RootLayout";
import { Link, useForm } from "@inertiajs/react";
import { FC, useEffect } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <RootLayout>
            <h2>Login</h2>
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
                        // isFocused={true}
                        onChange={(e: any) => setData("email", e.target.value)}
                    />

                    {/* <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                    />

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e: any) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("password.request")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Forgot your password?
                    </Link>

                    <button className="ml-4" disabled={processing}>
                        Log in
                    </button>
                </div>
            </form>
        </RootLayout>
    );
};

export default Login;
