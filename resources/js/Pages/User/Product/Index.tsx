import RootLayout from "@/Layouts/RootLayout";
import { Link } from "@inertiajs/react";
import { FC } from "react";

interface IndexProps {
    products: any;
}

const Index: FC<IndexProps> = ({ products }) => {
    return (
        <RootLayout>
            Products
            <div>
                {products?.data?.map((product: any) => (
                    <div key={product.id}>
                        <Link href={"/products" + "/" + product.id}>
                            {product.id} {product.name}
                        </Link>
                    </div>
                ))}
            </div>
        </RootLayout>
    );
};

export default Index;
