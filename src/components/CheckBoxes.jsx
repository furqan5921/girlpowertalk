import { Grid } from "@chakra-ui/react";
import React from "react";

import SingleBox from "./SingleBox";

const CheckBoxes = ({
  data,
  totalPercentage,
  updatePercentage,
  updatePercentageById,
}) => {
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
            updatePercentage={updatePercentage}
            key={el.id}
            value={el.key}
            percentage={el.percentage}
            totalPercentage={totalPercentage}
            updatePercentageById={updatePercentageById}
            id={el.id}
          />
        ))}
    </Grid>
  );
};

export default CheckBoxes;
