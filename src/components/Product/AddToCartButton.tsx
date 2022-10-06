import { Fragment, FunctionComponent } from "react";
import { Button } from "reactstrap";
import { useProductInCart } from "../../hooks/useProductInCart";
import { useStoreState, useStoreActions } from "../../store/_store";
import { Product } from "../../types/Product";

interface Props {
    product: Product;
    className?: string;
}

export const AddToCartButton: FunctionComponent<Props> = ({
    product,
    className,
}: Props) => {
    const productCountInCart = useProductInCart(product.id);
    const addProductToCart = useStoreActions(
        actions => actions.addProductToCart
    );

    return (
        <Button
            color="secondary"
            size="sm"
            className={className || ""}
            onClick={() => addProductToCart(product)}
        >
            Add to Cart {cartCountParentheses()}
        </Button>
    );

    function cartCountParentheses() {
        if (productCountInCart) {
            return <span>({productCountInCart})</span>;
        }
    }
};
