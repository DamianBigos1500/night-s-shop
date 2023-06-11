import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth, attributes }: any) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Attributes
                </h2>
            }
        >
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 p-10">
                    <Link
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        href={route("attribute.create")}
                    >
                        Create Attribute
                    </Link>

                    <div className="inline-block min-w-full pt-10">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light text-white">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-700">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">
                                            Id
                                        </th>
                                        <th scope="col" className=" px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className=" px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attributes?.map((attribute: any) => (
                                        <tr className="border-b dark:border-neutral-500" key={attribute.id}>
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                {attribute.id}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                {attribute.name}
                                            </td>
                                            <td className="flex flex-col px-6 py-4">
                                                <Link
                                                    className="text-blue-500"
                                                    href={route(
                                                        "attribute.edit",
                                                        attribute.id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    method="delete"
                                                    as="button"
                                                    className="text-red-500"
                                                    href={route(
                                                        "attribute.destroy",
                                                        attribute.id
                                                    )}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
