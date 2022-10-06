import { FunctionComponent, useCallback, useState } from "react";
import {
    Collapse,
    Container,
    Nav,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { CartNavItem } from "../Cart/CartNavItem";

export const Navigation: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = useCallback(() => setIsOpen(o => !o), [setIsOpen]);
    const close = useCallback(() => setIsOpen(false), [setIsOpen]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2 sticky-top">
            <Container>
                <NavLink
                    to="/"
                    className="mb-1 nav-link navbar-brand"
                    onClick={close}
                >
                    EP Store
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="me-auto" onClick={close}>
                        <NavLink to="/products" className="nav-link">
                            Products
                        </NavLink>
                    </Nav>
                    <Nav navbar className="ms-auto" onClick={close}>
                        <CartNavItem />
                    </Nav>
                </Collapse>
            </Container>
        </nav>
    );
};
