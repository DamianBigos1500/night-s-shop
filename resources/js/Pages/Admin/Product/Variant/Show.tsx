import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({ auth, productVariant, attributes }: any) => {
    const handleAttributeChange = (e: any) => {
        router.post(route("change-attribute-to-product"), {
            product_variant_id: productVariant.id,
            attribute_id: e.target.value,
        });
    };

    const handleAttributeValueChange = (e: any) => {
        router.post(route("change-attribute-value-to-product"), {
            product_variant_id: productVariant.id,
            attribute_value_id: e.target.value,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Product Variant
                </h2>
            }
        >
            <div className="flex flex-col text-white p-10">
                <div className="overflow-x-auto  ">
                    <div className="text-white">
                        {productVariant.product.name}
                    </div>
                </div>

                <div>
                    {attributes?.map((attribute: any) => (
                        <div className="mb-6" key={attribute.id}>
                            <div>
                                <input
                                    type="checkbox"
                                    onChange={handleAttributeChange}
                                    value={attribute.id}
                                    defaultChecked={productVariant.attributes.find(
                                        (variantAttribute: any) =>
                                            variantAttribute.id === attribute.id
                                    )}
                                />
                                <span>{attribute.name}</span>
                            </div>
                            <div>
                                {productVariant.attributes.find(
                                    (variantAttribute: any) =>
                                        variantAttribute.id === attribute.id
                                ) &&
                                    attribute.attribute_values.map(
                                        (attribute_value: any) => (
                                            <div
                                                className="ml-10"
                                                key={attribute_value.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    onChange={
                                                        handleAttributeValueChange
                                                    }
                                                    value={attribute_value.id}
                                                    defaultChecked={productVariant.attribute_values.find(
                                                        (
                                                            variantAttributeValue: any
                                                        ) =>
                                                            variantAttributeValue.id ===
                                                            attribute_value.id
                                                    )}
                                                />
                                                <span>
                                                    {attribute_value.value}
                                                </span>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
