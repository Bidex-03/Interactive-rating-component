import React, {useState} from "react";

import RequestPage from "./Components/TextPages/AddRequest";
import ThankYou from "./Components/TextPages/ThankYou";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = props => {
    setIsSubmitted(true)
  }

  const rateAgainHandler = props => {
    setIsSubmitted(false)
  }

  return (
    <div>
      {!isSubmitted && <RequestPage onSubmit={submitHandler} />}
      {isSubmitted && <ThankYou onRateAgain={rateAgainHandler} />}
    </div>
  );
}

export default App;
