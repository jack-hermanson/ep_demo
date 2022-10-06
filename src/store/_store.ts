import { createStore, createTypedHooks } from "easy-peasy";
import { cartStore, CartStoreModel } from "./cartStore";
import { ProductStoreModel, productStore } from "./productStore";

export interface StoreModel extends CartStoreModel, ProductStoreModel {}

const typedHooks = createTypedHooks<StoreModel>();

export const store = createStore<StoreModel>({
    ...productStore,
    ...cartStore,
});

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
