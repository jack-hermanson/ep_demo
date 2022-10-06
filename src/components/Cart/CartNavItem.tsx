import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "reactstrap";
import { useStoreState } from "../../store/_store";
import { currencyFormat } from "../../util/currencyFormat";

export const CartNavItem: FunctionComponent = () => {
    const cartTotal = useStoreState(state => state.totalCartPrice);

    return (
        <NavLink to="/cart" className="nav-link">
            🛒Cart {displayTotalPrice()}
        </NavLink>
    );

    function displayTotalPrice() {
        if (cartTotal > 0) {
            return <Badge color="secondary">{currencyFormat(cartTotal)}</Badge>;
        }
    }
};
