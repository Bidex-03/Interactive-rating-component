import React from "react";

import classes from "../../CSS/RatingList.module.css"

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
                ? `${classes.focus}`
                : num === nums + 1
                ? `${classes.hover}`
                : `${classes.reset}`
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
