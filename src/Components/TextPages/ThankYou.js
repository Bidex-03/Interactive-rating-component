import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import image from "../../Media/illustration-thank-you.svg";
import classes from "../../CSS/ThankYou.module.css"

const ThankYou = ({ num, setNum, setIsSubmitted }) => {
  const okay = () => {
    setNum(0);
    setIsSubmitted(false);
  };
  return (
    <Card className={classes.container}>
      <div>
        <img src={image} alt="thank-you" className="thank-you" />
      </div>
      <div className={classes.selectedMessage}>
        <p>You selected {num} out of 5</p>
      </div>
      <div className={classes.messageContainer}>
        <p className={classes.thanks}>Thank you!</p>
        <p className={classes.message}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
      {/* <Button type="submit" onClick={props.onRateAgain} >Rate Again</Button> */}
      <Button type="submit" onClick={okay}>
        Rate Again
      </Button>
    </Card>
  );
};

export default ThankYou;
