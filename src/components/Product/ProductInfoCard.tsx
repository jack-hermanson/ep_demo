import { FunctionComponent } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
} from "reactstrap";
import { Product } from "../../types/Product";
import { currencyFormat } from "../../util/currencyFormat";
import { useProductInCart } from "../../hooks/useProductInCart";
import { AddToCartButton } from "./AddToCartButton";

interface Props {
    product: Product;
    className?: string;
}

export const ProductInfoCard: FunctionComponent<Props> = ({
    product,
    className,
}: Props) => {
    const numberInCart = useProductInCart(product.id);

    return (
        <Card className={className || ""}>
            {cardHeader()}
            {cardBody()}
        </Card>
    );

    function cardHeader() {
        return (
            <CardHeader className="d-flex">
                <h5 className="my-auto">Product Details</h5>
                <AddToCartButton
                    product={product}
                    className="ms-auto mt-auto"
                />
            </CardHeader>
        );
    }

    function cardBody() {
        return (
            <CardBody className="p-0">
                <ListGroup flush>
                    <ListGroupItem className="bg-transparent border-bottom">
                        <ListGroupItemHeading>Description</ListGroupItemHeading>
                        <ListGroupItemText className="mb-0">
                            {product.description}
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent">
                        <ListGroupItemHeading>Price</ListGroupItemHeading>
                        <ListGroupItemText className="mb-0">
                            {currencyFormat(product.price)}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        );
    }
};
