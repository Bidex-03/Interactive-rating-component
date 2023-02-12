import React from "react";

import classes from "./RatingList.module.css";

const RatingList = ({ num, setNum, numRating }) => {
  // const handleNums = (nums) => {
  //   setNum(nums)
  //   console.log(num);
  // }

  return (
    <ul className={classes.Rating}>
      {numRating.map((nums, id) => {
        return (
          <li
            key={id}
            className={
              num === nums
                ? "text-orange-500"
                : num === nums + 1
                ? "text-blue-500"
                : "text-white"
            }
            onClick={() => setNum(nums)}
          >
            {nums}
          </li>
        );
      })}
    </ul>
  );
};

export default RatingList;
