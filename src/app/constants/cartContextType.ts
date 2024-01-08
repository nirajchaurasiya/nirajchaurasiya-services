import { Cart } from "./cartType";

export type CartContextType = {
  cartValue: Array<Cart>;
  setCartValue: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (
    id: number,
    price: number,
    title: string,
    desc: string,
    type: string
  ) => void;
  removeFromCart: (type: string) => void;
};
