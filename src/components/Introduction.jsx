import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Introduction = ({ heading, details }) => {
  return (
    <Box>
      <Heading
        color={"#262626"}
        textAlign={"center"}
        fontFamily="IBM Plex Sans"
        fontSize="50px"
        fontWeight={400}
        lineHeight={"70px"}
        mt={"60px"}
      >
        {heading}
      </Heading>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="24px"
        fontWeight={400}
        textAlign="center"
        p={"1rem"}
      >
        {details}
      </Text>
    </Box>
  );
};

export default Introduction;
