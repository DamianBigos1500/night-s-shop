import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth }: any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        short_description: "",
        description: "",
    });

    const submit = (e: any) => {
        e.preventDefault();
        post(route("product.store"));
    };
    console.log(errors)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Products
                </h2>
            }
        >
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 p-10">
                    <form
                        onSubmit={submit}
                        className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-10"
                    >
                        <div>
                            <label className="text-white" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e: any) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                className="text-white"
                                htmlFor="short_description"
                            >
                                Short Description
                            </label>
                            <input
                                id="short_description"
                                type="text"
                                name="short_description"
                                value={data.short_description}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e: any) =>
                                    setData("short_description", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="description">
                                Description
                            </label>
                            <input
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e: any) =>
                                    setData("description", e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className=" mt-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
