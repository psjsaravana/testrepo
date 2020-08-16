import React, { Fragment, ReactChild, useState } from "react";
import "./RatingDialog.scss";
import Modal from "../modal/modal";
import { SmileFilled } from "@ant-design/icons";
import { Rate } from "antd";

interface IRatingDialogProps {
  onClose: (flag: boolean) => void;
  visible: boolean;
}

const RatingDialog = (props: IRatingDialogProps) => {
  const { visible, onClose } = props;
  const [showAck, setShowAck] = useState<boolean>(false);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const onMaskClick = () => {
    if (rating) {
      setShowAck(false);
      setRating(undefined);
      onClose(true);
    }
  };
  return (
    <Fragment>
      {visible && (
        <Modal
          onMaskClick={onMaskClick}
          show={visible}
          handleClose={() => {
            setShowAck(false);
            setRating(0);
            onClose(false);
          }}
        >
          <Fragment>
            {!showAck && (
              <Fragment>
                <div className="rate-header">Rate your experience</div>
                <Rate
                  className="custom-rate"
                  defaultValue={rating}
                  allowClear={true}
                  onChange={(val: number) => {
                    if (val) {
                      setRating(val);
                      setShowAck(true);
                    }
                  }}
                  character={({ index }: { index: number }) => index + 1}
                />
                <div className="rate-footer">
                  <span>Not satisfied</span>
                  <span>Very satisfied</span>
                </div>
              </Fragment>
            )}
            {showAck && (
              <div className="ack">
                <SmileFilled className="smiley-icon" /> Thank you!. Tell us more
              </div>
            )}
          </Fragment>
        </Modal>
      )}
    </Fragment>
  );
};

export default RatingDialog;
