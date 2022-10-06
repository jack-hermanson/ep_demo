import { Product, sortProducts } from "./Product";

export interface CartProduct {
    product: Product;
    count: number;
}

export function sortCartProducts(
    cartProduct1: CartProduct,
    cartProduct2: CartProduct
) {
    return sortProducts(cartProduct1.product, cartProduct2.product);
}
