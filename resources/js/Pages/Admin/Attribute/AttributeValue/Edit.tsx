import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth, attributeValue, attributes }: any) => {
    const { data, setData, patch, processing, errors, reset } = useForm({
        attributeId: attributeValue.attribute_id,
        value: attributeValue.value,
    });

    const submit = (e: any) => {
        e.preventDefault();
        patch(route("attribute-value.update", attributeValue.id));
    };

    console.log(errors);

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
                    <form
                        onSubmit={submit}
                        className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-10"
                    >
                        <div>
                            <label className="text-white">Attribute</label>
                            <div className="custom-select">
                                <select
                                    defaultValue={attributeValue.attribute_id}
                                    onChange={(e: any) =>
                                        setData("attributeId", e.target.value)
                                    }
                                >
                                    <option value="">------</option>
                                    {attributes.map((attribute: any) => (
                                        <option value={attribute.id}>
                                            {attribute.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Value
                            </label>
                            <input
                                id="value"
                                type="text"
                                name="value"
                                value={data.value}
                                className="mt-1 block w-full"
                                // isFocused={true}
                                onChange={(e: any) =>
                                    setData("value", e.target.value)
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
