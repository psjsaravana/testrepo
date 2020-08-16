import React, { Fragment } from "react";
import "./SmileyButton.scss";
import { SmileFilled } from "@ant-design/icons";
import { Button } from "antd";

interface ISmileyBtnProps {
  onClick: () => void;
}

const SmileyButton = (props: ISmileyBtnProps) => {
  const { onClick } = props;
  return (
    <Fragment>
      <div onClick={onClick} className="circle-btn">
        <SmileFilled className="smiley-icon" />
        <div className="content">Help us improve</div>
      </div>
    </Fragment>
  );
};

export default SmileyButton;
