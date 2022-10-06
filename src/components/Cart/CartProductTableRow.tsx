import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { CartProduct } from "../../types/CartProduct";
import { shortenProductName } from "../../types/Product";
import { currencyFormat } from "../../util/currencyFormat";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

interface Props {
    cartProduct: CartProduct;
    setCartProductToUpdate: Dispatch<SetStateAction<CartProduct | undefined>>;
    setShowEditCartProductModal: Dispatch<SetStateAction<boolean>>;
}

export const CartProductTableRow: FunctionComponent<Props> = ({
    cartProduct,
    setCartProductToUpdate,
    setShowEditCartProductModal,
}: Props) => {
    return (
        <tr>
            <td>
                <Link to={`/products/${cartProduct.product.id}`}>
                    {shortenProductName(cartProduct.product)}
                </Link>
            </td>
            <td>{currencyFormat(cartProduct.product.price)}</td>
            <td>
                {cartProduct.count}
                <Button
                    color="secondary"
                    className="btn-xs ms-1"
                    onClick={() => {
                        setCartProductToUpdate(cartProduct);
                        setShowEditCartProductModal(true);
                    }}
                >
                    Edit
                </Button>
            </td>
            <td>
                {currencyFormat(cartProduct.product.price * cartProduct.count)}
            </td>
        </tr>
    );
};
