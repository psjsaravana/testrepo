import React, { FC, useState } from "react";
import "./Home.scss";
import SmileyButton from "./smiley-button/SmileyButton";
import RatingDialog from "./rating-dialog/RatingDialog";
import FormDialog from "./form/Form";

const Home: FC = () => {
  const [showSmiley, setShowSmiley] = useState<boolean>(true);
  const [showRating, setShowRating] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleSmileyClick = () => {
    setShowSmiley(false);
    setShowRating(true);
  };

  const onModalClose = (showNext: boolean) => {
    if (showNext) {
      setShowSmiley(false);
      setShowRating(false);
      setShowForm(true);
    } else {
      setShowSmiley(true);
      setShowRating(false);
    }
  };

  const onFormClose = () => {
    setShowSmiley(true);
    setShowRating(false);
    setShowForm(false);
  };

  return (
    <div className="home">
      <div className="page-wrapper">
        {showSmiley && <SmileyButton onClick={handleSmileyClick} />}
        {showRating && (
          <RatingDialog onClose={onModalClose} visible={showRating} />
        )}
        {showForm && (
          <FormDialog onClose={onFormClose} visible={showForm}></FormDialog>
        )}
      </div>
    </div>
  );
};

export default Home;
