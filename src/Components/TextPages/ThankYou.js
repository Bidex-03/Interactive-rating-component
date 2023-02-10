import React from "react";

import Card from "../UI/Card";
import image from "../../Media/illustration-thank-you.svg";
import classes from "./ThankYou.module.css";
import Button from "../UI/Button";

const ThankYou = (props) => {
  return (
    <Card className={classes.container}>
      <div>
        <img src={image} alt="thank-you" className="thank-you" />
      </div>
      <div className={classes.selectedMessage}>
        <p>You selected 4 out of 5</p>
      </div>
      <div className={classes.messageContainer}>
        <p className={classes.thanks}>Thank you!</p>
        <p className={classes.message}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
      <Button type="submit" onClick={props.onRateAgain} >Rate Again</Button>
    </Card>
  );
};

export default ThankYou;
