import { Action, Computed, action, computed } from "easy-peasy";
import { CartProduct, sortCartProducts } from "../types/CartProduct";
import { Product } from "../types/Product";
import { StoreModel } from "./_store";

export interface CartStoreModel {
    cart: CartProduct[];
    setCart: Action<StoreModel, CartProduct[]>;
    addProductToCart: Action<StoreModel, Product>;
    totalCartPrice: Computed<StoreModel, number>;
}

export const cartStore: CartStoreModel = {
    cart: [],
    setCart: action((state, payload) => {
        state.cart = payload;
    }),
    addProductToCart: action((state, payload) => {
        console.log({ payload });
        // Check if that product is already in the cart.
        const existingCartProduct = state.cart.find(
            cp => cp.product.id === payload.id
        );
        if (existingCartProduct) {
            existingCartProduct.count += 1;

            state.cart = [
                ...state.cart.filter(cp => cp.product.id !== payload.id),
                existingCartProduct,
            ].sort(sortCartProducts);

            return;
        }

        // If it's not in the cart already, then add it.
        state.cart = [
            ...state.cart,
            {
                count: 1,
                product: payload,
            },
        ].sort(sortCartProducts);
    }),
    totalCartPrice: computed(state => {
        return state.cart.length
            ? state.cart
                  .map(cp => cp.product.price * cp.count)
                  .reduce((accumulator = 0, price) => accumulator + price)
            : 0;
    }),
};
