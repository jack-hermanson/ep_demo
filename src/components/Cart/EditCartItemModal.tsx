import {
    FunctionComponent,
    Dispatch,
    SetStateAction,
    useCallback,
} from "react";
import { CartProduct } from "../../types/CartProduct";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

interface Props {
    cartProduct: CartProduct;
    setShowEditCartProductModal: Dispatch<SetStateAction<boolean>>;
    showEditCartProductModal: boolean;
}

export const EditCartItemModal: FunctionComponent<Props> = ({
    cartProduct,
    setShowEditCartProductModal,
    showEditCartProductModal,
}: Props) => {
    const toggle = useCallback(
        () => setShowEditCartProductModal(s => !s),
        [setShowEditCartProductModal]
    );

    return (
        <Modal toggle={toggle} isOpen={showEditCartProductModal} size="lg">
            <ModalHeader toggle={toggle}>
                {cartProduct.product.title}
            </ModalHeader>
            <ModalBody>
                <p>This is the modal body.</p>
            </ModalBody>
        </Modal>
    );
};
