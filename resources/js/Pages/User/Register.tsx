import RootLayout from "@/Layouts/RootLayout";
import { Link, useForm } from "@inertiajs/react";
import { FC, useEffect } from "react";

interface RegisterProps {}

const Register: FC<RegisterProps> = ({}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
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

        post(route("register"));
    };

    return (
        <RootLayout>
            <h2>Register</h2>

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e: any) => setData("name", e.target.value)}
                        required
                    />

                    {/* <InputError message={errors.name} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e: any) => setData("email", e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                        required
                    />

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>

                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: any) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    {/* <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    /> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <button className="ml-4" disabled={processing}>
                        Register
                    </button>
                </div>
            </form>
        </RootLayout>
    );
};

export default Register;
