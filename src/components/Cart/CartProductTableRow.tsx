import { FunctionComponent } from "react";
import { CartProduct } from "../../types/CartProduct";
import { shortenProductName } from "../../types/Product";
import { currencyFormat } from "../../util/currencyFormat";
import { Link } from "react-router-dom";

interface Props {
    cartProduct: CartProduct;
}

export const CartProductTableRow: FunctionComponent<Props> = ({
    cartProduct,
}: Props) => {
    return (
        <tr>
            <td>
                <Link to={`/products/${cartProduct.product.id}`}>
                    {shortenProductName(cartProduct.product)}
                </Link>
            </td>
            <td>{currencyFormat(cartProduct.product.price)}</td>
            <td>{cartProduct.count}</td>
            <td>
                {currencyFormat(cartProduct.product.price * cartProduct.count)}
            </td>
        </tr>
    );
};
