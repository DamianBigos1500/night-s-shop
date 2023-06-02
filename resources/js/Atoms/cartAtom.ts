import { atom } from "recoil";

type CartState = {};

const initialCartState: any = {
    id: "1213094200112",
    name: "poxpocppxocvpo",
};

export const cartState = atom<any>({
    key: "cartState",
    default: initialCartState,
});
