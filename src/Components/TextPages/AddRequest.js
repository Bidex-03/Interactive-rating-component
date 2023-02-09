import React, { useState } from "react";
import Card from "../UI/Card";

import Button from "../UI/Button";
import RatingList from "./RatingList";
import image from "../../Media/icon-star.svg";
import classes from "./AddRequest.module.css";

const AddRequest = (props) => {

  const AddRequestHandler = (e) => {
    e.preventDefault();
    props.onSubmit()
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
          <RatingList />
        </div>
        <Button type="submit">SUBMIT</Button>
      </form>
    </Card>
  );
};

export default AddRequest;
