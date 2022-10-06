import { FunctionComponent } from "react";
import { PageTitle } from "../../components/Layout/PageTitle";
import { useStoreActions, useStoreState } from "../../store/_store";
import { Row, Col, Table, Button } from "reactstrap";
import { CartProductTableRow } from "../../components/Cart/CartProductTableRow";
import { currencyFormat } from "../../util/currencyFormat";

export const CartIndexPage: FunctionComponent = () => {
    const cart = useStoreState(state => state.cart);
    const totalCartPrice = useStoreState(state => state.totalCartPrice);
    const setCart = useStoreActions(actions => actions.setCart);

    return (
        <div>
            <PageTitle title="Shopping Cart">
                <Button size="sm" color="secondary" onClick={clearCart}>
                    Clear Cart
                </Button>
            </PageTitle>
            {cartList()}
        </div>
    );

    function cartList() {
        return (
            <Row>
                <Col>
                    <Table responsive="lg" striped>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Unit Price</th>
                                <th>Count</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartProduct, index) => (
                                <CartProductTableRow
                                    cartProduct={cartProduct}
                                    key={index}
                                />
                            ))}
                            <tr>
                                <th colSpan={3}>Total</th>
                                <th>{currencyFormat(totalCartPrice)}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }

    function clearCart() {
        setCart([]);
    }
};
