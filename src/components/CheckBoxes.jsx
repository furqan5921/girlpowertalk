import { Grid } from "@chakra-ui/react";
import React from "react";

import SingleBox from "./SingleBox";

const CheckBoxes = ({ data ,updateById,totalPercentage}) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={7}
      mt={"65px"}
      p={{ base: "1rem", md: "2rem" }}
    >
      {data &&
        data.map((el) => (
          <SingleBox
            key={el.id}
            value={el.key}
            percentage={el.percentage}
            isChecked={el.isChecked}
            id={el.id}
            updateById={updateById}
            totalPercentage={totalPercentage}
          />
        ))}
    </Grid>
  );
};

export default CheckBoxes;
