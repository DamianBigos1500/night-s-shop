import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth, attribute }: any) => {
  console.log(attribute)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Attribute Value - {attribute.name}
                </h2>
            }
        >
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 p-10">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light text-white">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-700">
                                    <tr>
                                    <th scope="col" className=" px-6 py-4">
                                            Id
                                        </th>
                                        <th scope="col" className=" px-6 py-4">
                                            Attribute Name
                                        </th>
                                        <th scope="col" className=" px-6 py-4">
                                            Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attribute?.attribute_values?.map((attribute_value: any) => (
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                {attribute_value.id}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                {attribute.name}
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                {attribute_value.value}
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
