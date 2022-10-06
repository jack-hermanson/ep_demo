import { useStoreState } from "../store/_store";

export const useProductInCart = (productId: number) => {
    const cart = useStoreState(state => state.cart);

    return cart.find(cp => cp.product.id === productId)?.count || 0;
};
