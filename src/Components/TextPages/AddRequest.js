import React from "react";
import Card from "../UI/Card";

import Button from "../UI/Button";
import RatingList from "./RatingList";
import image from "../../Media/icon-star.svg";
import classes from "../../CSS/AddRequest.module.css"

const AddRequest = ({ submit, num, setNum, numRating }) => {
  const AddRequestHandler = (e) => {
    e.preventDefault();
    // submit();
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={AddRequestHandler}>
        <div>
          <img src={image} alt="Star-image" className="star" />
        </div>
        <div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did your support request. All feedback is
            appreciated to help us improve our offering!
          </p>
        </div>
        <div>
          <RatingList num={num} setNum={setNum} numRating={numRating} />
        </div>
        <Button className="bg-orange-500" type="submit" onClick={() => submit()}>
          SUBMIT
        </Button>
      </form>
    </Card>
  );
};

export default AddRequest;
