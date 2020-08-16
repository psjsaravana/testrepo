import React, { Fragment, ReactChild, useState } from "react";
import "./Form.scss";
import Modal from "../modal/modal";
import { Rate, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

interface IRatingDialogProps {
  onClose: (flag: boolean) => void;
  visible: boolean;
}

const FormDialog = (props: IRatingDialogProps) => {
  const { visible, onClose } = props;
  const [title, setTitle] = useState<string>("Tell us more.");
  const [showAck, setShowAck] = useState<boolean>(false);
  const [comments, setComments] = useState<string>("");
  const onMaskClick = () => {
    if (comments && showAck) {
      setShowAck(false);
      setComments("");
      onClose(true);
    }
  };

  const onSubmit = () => {
    setShowAck(true);
    setTitle("");
  };

  return (
    <Fragment>
      {visible && (
        <Modal
          onMaskClick={onMaskClick}
          show={visible}
          title={title}
          handleClose={() => {
            setShowAck(false);
            setComments("");
            onClose(false);
          }}
        >
          <Fragment>
            {!showAck && (
              <Fragment>
                <div className="form-body">
                  <div className="form-label">What did you like most</div>
                  <TextArea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Tell us your experience "
                    rows={4}
                  />
                  <div className="form-label">What did you like least</div>
                  <TextArea
                    placeholder="Let us know how we can improve (optional)"
                    rows={4}
                  />
                  <div className="form-label">Your email</div>
                  <Input
                    type="email"
                    placeholder="Your email adress (optional)"
                  />
                </div>
                <div className="form-footer">
                  <Button
                    onClick={onSubmit}
                    disabled={!comments}
                    type="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Fragment>
            )}
            {showAck && (
              <div className="feedback-title">
                Thank you!
                <div className="feedback-content">
                  Your feedback is valuable to us.
                </div>
              </div>
            )}
          </Fragment>
        </Modal>
      )}
    </Fragment>
  );
};

export default FormDialog;
