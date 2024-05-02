export type TModalOverlayProps = {
    handleCloseClick: () => void;
};

export type TModalProps = {
    title?: string;
    children: JSX.Element;
    handleClickClose: () => void;
};