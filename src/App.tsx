import { ProductsIndexPage } from "./pages/products/ProductsIndex.page";
import { ProductDetailsPage } from "./pages/products/ProductDetails.page";
import { IndexPage } from "./pages/index/MainIndex.page";
import { CartIndexPage } from "./pages/cart/CartIndex.page";
import { useStoreActions } from "./store/_store";
import { FunctionComponent, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

export const App: FunctionComponent = () => {
    // Bring in required actions.
    const fetchProducts = useStoreActions(actions => actions.fetchProducts);

    // When the app starts up, do this.
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/">
                        <Route index element={<IndexPage />} />
                    </Route>

                    <Route path="/products">
                        <Route index element={<ProductsIndexPage />} />
                        <Route path=":id" element={<ProductDetailsPage />} />
                    </Route>

                    <Route path="/cart">
                        <Route index element={<CartIndexPage />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
