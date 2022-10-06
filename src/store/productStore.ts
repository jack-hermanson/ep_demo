import { Action, Thunk, action, thunk } from "easy-peasy";
import { ProductApi } from "../api/ProductApi";
import { Product, sortProducts } from "../types/Product";
import { StoreModel } from "./_store";

export interface ProductStoreModel {
    products: Product[] | undefined;
    setProducts: Action<StoreModel, Product[]>;
    fetchProducts: Thunk<StoreModel>;
}

export const productStore: ProductStoreModel = {
    products: undefined,
    setProducts: action((state, payload) => {
        state.products = payload.sort(sortProducts);
    }),
    fetchProducts: thunk(async actions => {
        const products = await ProductApi.getAll();
        actions.setProducts(products);
    }),
};
