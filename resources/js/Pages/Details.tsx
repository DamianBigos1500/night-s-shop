import { Link } from "@inertiajs/react";
import { FC } from "react";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({ sku, skus }: any) => {
    console.log(skus);

    return (
        <div>
            <h1>{sku.product.name}</h1>

            <div>
                {sku.product.product_variants[0].attributes.map(
                    (attribute: any) => (
                        <div key={attribute.id} className="my-5 text-blue-600">
                            {attribute.name}
                            <div>
                                {sku.product.product_variants[0].attribute_values.map(
                                    (attribute_value: any) => {
                                        if (
                                            attribute_value.attribute_id ===
                                            attribute.id
                                        ) {
                                            if (
                                                sku.attribute_values.find(
                                                    (
                                                        sku_attribute_value: any
                                                    ) =>
                                                        sku_attribute_value.id ===
                                                        attribute_value.id
                                                )
                                            ) {
                                                return (
                                                    <span
                                                        key={attribute_value.id}
                                                        className="text-red-500 mx-2"
                                                    >
                                                        {attribute_value.value}
                                                    </span>
                                                );
                                            } else {
                                                return (
                                                    <Link
                                                        key={attribute_value.id}
                                                        className="text-gray-600 mx-2"
                                                        href={
                                                            "/sku" +
                                                                "/" +
                                                                skus.find(
                                                                    (
                                                                        skus_sku: any
                                                                    ) => {
                                                                        return skus_sku.attribute_values.find(
                                                                            (
                                                                                attr_val: any
                                                                            ) => {
                                                                                return (
                                                                                    attr_val.attribute_id ==
                                                                                        attribute.id &&
                                                                                    attr_val.id ==
                                                                                        attribute_value.id
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                )?.id ?? "0"
                                                        }
                                                    >
                                                        {attribute_value.value}
                                                    </Link>
                                                );
                                            }
                                        }
                                    }
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Details;
