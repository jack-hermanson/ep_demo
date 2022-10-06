import { FunctionComponent, useState } from "react";
import { PageTitle } from "../../components/Layout/PageTitle";
import { useStoreActions, useStoreState } from "../../store/_store";
import { Row, Col, Table, Button } from "reactstrap";
import { CartProductTableRow } from "../../components/Cart/CartProductTableRow";
import { currencyFormat } from "../../util/currencyFormat";
import { CartProduct } from "../../types/CartProduct";
import { EditCartItemModal } from "../../components/Cart/EditCartItemModal";

export const CartIndexPage: FunctionComponent = () => {
    const cart = useStoreState(state => state.cart);
    const totalCartPrice = useStoreState(state => state.totalCartPrice);
    const setCart = useStoreActions(actions => actions.setCart);

    const [cartProductToEdit, setCartProductToUpdate] = useState<
        CartProduct | undefined
    >(undefined);
    const [showEditCartProductModal, setShowEditCartProductModal] =
        useState(false);

    return (
        <div>
            <PageTitle title="Shopping Cart">
                <Button size="sm" color="secondary" onClick={clearCart}>
                    Clear Cart
                </Button>
            </PageTitle>
            {cartList()}
            {editCartProductModal()}
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
                                    setCartProductToUpdate={
                                        setCartProductToUpdate
                                    }
                                    setShowEditCartProductModal={
                                        setShowEditCartProductModal
                                    }
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

    function editCartProductModal() {
        if (cartProductToEdit) {
            return (
                <EditCartItemModal
                    cartProduct={cartProductToEdit}
                    setShowEditCartProductModal={setShowEditCartProductModal}
                    showEditCartProductModal={showEditCartProductModal}
                />
            );
        }
    }
};
