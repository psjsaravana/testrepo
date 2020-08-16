import React, { ReactChild, Fragment, ReactNode } from "react";
import "./modal.scss";
import { CloseOutlined } from "@ant-design/icons";

interface IModalProps {
  handleClose: () => void;
  show: boolean;
  children: ReactChild;
  onMaskClick: () => void;
  title?: string | ReactNode;
}

const Modal = ({
  handleClose,
  show,
  children,
  onMaskClick,
  title,
}: IModalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <Fragment>
      <div
        className={`${showHideClassName} modal-mask`}
        onClick={onMaskClick}
      />
      {show && (
        <div className={showHideClassName}>
          <div className={title ? "title-header" : "title"} onClick={handleClose}>
              {title || null} <CloseOutlined className="icon-btn" />
          </div>
          <section className="modal-main">{children}</section>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
