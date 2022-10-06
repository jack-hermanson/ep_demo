import { FunctionComponent } from "react";
import { Badge, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import { AddToCartButton } from "./AddToCartButton";

interface Props {
    product: Product;
    className?: string;
}

export const ProductGlance: FunctionComponent<Props> = ({
    product,
    className,
}: Props) => {
    return (
        <Card className={className || ""}>
            {cardTitle()}
            {cardBody()}
            {cardFooter()}
        </Card>
    );

    function cardTitle() {
        return (
            <CardHeader>
                <h5 className="mb-0">
                    <Link className="text-white" to={`/products/${product.id}`}>
                        {product.title}
                    </Link>{" "}
                    <Badge color="success">${product.price.toFixed(2)}</Badge>
                </h5>
            </CardHeader>
        );
    }

    function cardBody() {
        return (
            <CardBody>
                <p className="mb-0">{product.description}</p>
            </CardBody>
        );
    }

    function cardFooter() {
        return (
            <CardFooter>
                <AddToCartButton product={product} />
            </CardFooter>
        );
    }
};
