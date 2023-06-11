import RootLayout from "@/Layouts/RootLayout";
import { FC } from "react";

interface ShowProps {
    product: any;
}

const Show: FC<ShowProps> = ({ product }) => {
    return <RootLayout>{product.name}</RootLayout>;
};

export default Show;
