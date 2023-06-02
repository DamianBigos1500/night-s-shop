import { cartState } from "@/Atoms/cartAtom";
import { Link, usePage } from "@inertiajs/react";
import { FC, ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    const { cart, auth }: any = usePage().props;

    return (
        <div>
            <div className="space-x-10">
                <Link href={route("index")}>home</Link>
                <Link href={route("products")}>products</Link>
                <Link href={route("register")}>register</Link>
                <Link href={route("login")}>login</Link>
                <span>{auth?.user?.name}</span>
                <span>{cart?.id}</span>
            </div>
            {children}
        </div>
    );
};

export default RootLayout;
