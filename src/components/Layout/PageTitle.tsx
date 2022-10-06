import { FunctionComponent, ReactNode } from "react";
import { Row, Col } from "reactstrap";

interface Props {
    title: string;
    children?: ReactNode;
}

export const PageTitle: FunctionComponent<Props> = ({
    title,
    children,
}: Props) => {
    return (
        <Row>
            <Col>
                <div className="d-flex border-bottom mb-3">
                    <h1 className="my-auto">{title}</h1>
                    {children ? (
                        <div className="ms-auto mt-auto mb-1">{children}</div>
                    ) : null}
                </div>
            </Col>
        </Row>
    );
};
