import React from "react";

import classes from "./ThankYou.module.css";
import image from "../../Media/illustration-thank-you.svg";
import Card from "../UI/Card";

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
    </Card>
  );
};

export default ThankYou;
