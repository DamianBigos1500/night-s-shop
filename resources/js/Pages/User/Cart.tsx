import RootLayout from "@/Layouts/RootLayout";
import { FC } from "react";

interface CartProps {
    cart2: any;
}

const Cart: FC<CartProps> = ({ cart2 }) => {
    console.log(cart2);
    return <RootLayout>Cart2</RootLayout>;
};

export default Cart;
