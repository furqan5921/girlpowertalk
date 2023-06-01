import { Grid } from "@chakra-ui/react";
import React, { useState } from "react";

import SingleBox from "./SingleBox";

const CheckBoxes = ({ data, totalPercentage, updatePercentage }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={7}
      mt={"3rem"}
      
    >
      {data &&
        data.map((el, i) => (
          <SingleBox
            updatePercentage={updatePercentage}
            key={i}
            value={el.key}
            percentage={el.percentage}
            totalPercentage={totalPercentage}
          />
        ))}
    </Grid>
  );
};

export default CheckBoxes;
