import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import RootLayout from "@/Layouts/RootLayout";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();
        post(route("password.confirm"));
    };

    return (
        <RootLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                    />

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button className="ml-4" disabled={processing}>
                        Confirm
                    </button>
                </div>
            </form>
        </RootLayout>
    );
}
