import { useStoreState } from "../../store/_store";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/Layout/PageTitle";
import { Product } from "../../types/Product";
import { ProductInfoCard } from "../../components/Product/ProductInfoCard";
import { Row, Col } from "reactstrap";

export const ProductDetailsPage: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();

    const products = useStoreState(state => state.products);

    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        if (products && id) {
            setProduct(products.find(p => p.id === parseInt(id)));
        }
    }, [setProduct, products, id]);

    return (
        <div>
            {pageTitle()}
            {productInfoCard()}
        </div>
    );

    function pageTitle() {
        if (product) {
            return <PageTitle title={product.title} />;
        }
    }

    function productInfoCard() {
        return (
            <Row>
                <Col>
                    {product ? (
                        <ProductInfoCard product={product} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </Col>
            </Row>
        );
    }
};
