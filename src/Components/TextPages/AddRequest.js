import React from "react";
import Card from "../UI/Card";

import classes from "./AddRequest.module.css";
import Button from "../UI/Button";
import RatingList from "./RatingList";

const AddRequest = (props) => {
  const AddRequestHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={AddRequestHandler}>
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
