import { FunctionComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import { useStoreState } from "../../store/_store";
import { Row, Col } from "reactstrap";
import { PageTitle } from "../../components/Layout/PageTitle";
import { ProductGlance } from "../../components/Product/ProductGlance";

export const ProductsIndexPage: FunctionComponent = () => {
    const products = useStoreState(state => state.products);

    return (
        <div>
            <PageTitle title="Products" />
            {productsList()}
        </div>
    );

    function productsList() {
        return (
            <Row>
                <Col>
                    {products ? (
                        <Fragment>
                            {products.map(product => (
                                <ProductGlance
                                    className="mb-3 no-mb-last"
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Fragment>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Col>
            </Row>
        );
    }
};
