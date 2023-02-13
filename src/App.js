import React, { useState } from "react";

import RequestPage from "./Components/TextPages/AddRequest";
import ThankYou from "./Components/TextPages/ThankYou";
import Wrapper from "./Helpers/Wrapper";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const numRating = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(0);
  const submit = () => {
    if (num) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      alert("Nigga, rate us on the scale of 1 to 5");
    }
  };

  return (
    <Wrapper>
      {!isSubmitted && (
        <RequestPage
          submit={submit}
          numRating={numRating}
          num={num}
          setNum={setNum}
        />
      )}
      {isSubmitted && (
        <ThankYou num={num} setNum={setNum} setIsSubmitted={setIsSubmitted} />
      )}
    </Wrapper>
  );
}

export default App;
