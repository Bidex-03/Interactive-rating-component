import React, {useState} from "react";

import RequestPage from "./Components/TextPages/AddRequest";
import ThankYou from "./Components/TextPages/ThankYou";
import Wrapper from "./Components/Helpers/Wrapper";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = props => {
    setIsSubmitted(true)
  }

  const rateAgainHandler = props => {
    setIsSubmitted(false)
  }

  return (
    <Wrapper>
      {!isSubmitted && <RequestPage onSubmitFun={submitHandler} />}
      {isSubmitted && <ThankYou onRateAgain={rateAgainHandler} />}
    </Wrapper>
  );
}

export default App;
