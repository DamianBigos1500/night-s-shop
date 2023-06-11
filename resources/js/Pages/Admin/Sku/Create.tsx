import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth, products }: any) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_id: "",
        sku: "",
        regular_price: 0,
        sale_price: 0,
        quantity: 1,
        featured: "",
    });

    const submit = (e: any) => {
        e.preventDefault();
        post(route("sku.store"));
    };

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
                            <label className="text-white">Products</label>
                            <div className="custom-select">
                                <select
                                    onChange={(e: any) =>
                                        setData("product_id", e.target.value)
                                    }
                                >
                                    <option value="">------</option>
                                    {products.map((product: any) => (
                                        <option
                                            value={product.id}
                                            key={product.id}
                                        >
                                            {product.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Sku
                            </label>
                            <input
                                id="sku"
                                type="text"
                                name="sku"
                                value={data.sku}
                                className="mt-1 block w-full"
                                // isFocused={true}
                                onChange={(e: any) =>
                                    setData("sku", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Regular Price
                            </label>
                            <input
                                id="regular_price"
                                type="number"
                                min={0}
                                name="regular_price"
                                value={data.regular_price}
                                className="mt-1 block w-full"
                                onChange={(e: any) =>
                                    setData("regular_price", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Sale Price
                            </label>
                            <input
                                id="sale_price"
                                type="number"
                                min={0}
                                name="sale_price"
                                value={data.sale_price}
                                className="mt-1 block w-full"
                                onChange={(e: any) =>
                                    setData("sale_price", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                type="text"
                                name="quantity"
                                value={data.quantity}
                                className="mt-1 block w-full"
                                onChange={(e: any) =>
                                    setData("quantity", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="text-white" htmlFor="name">
                                Featured
                            </label>
                            <input
                                id="featured"
                                type="text"
                                name="featured"
                                value={data.featured}
                                className="mt-1 block w-full"
                                onChange={(e: any) =>
                                    setData("featured", e.target.value)
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
