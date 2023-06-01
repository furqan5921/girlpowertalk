import { Checkbox, Text, Flex, GridItem, Image, Input } from "@chakra-ui/react";
import React from "react";
import CautionIcon from "../assets/cautionIcon.png";
const SingleBox = ({ value, percentage, updatePercentage }) => {
  
  return (
    <GridItem
      background="rgba(221, 225, 237, 0.24)"
      border="1px solid rgba(3, 201, 136, 0.2)"
      borderRadius="17px"
      boxSizing="border-box"
      p={4}
    >
      <Flex justify={"flex-end"}>
        <Image
          onClick={() => alert("Caution")}
          _hover={{ cursor: "pointer" }}
          p={"1rem"}
          src={CautionIcon}
        />
      </Flex>
      <Checkbox
        onChange={(e) =>
          e.target.checked
            ? updatePercentage(-percentage)
            : updatePercentage(percentage)
        }
        colorScheme="green"
        p={"1rem"}
        size={"lg"}
        
      >
        <Text
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={400}
          fontSize="20px"
          color={"#262626"}
        >
          {value}
        </Text>
      </Checkbox>
      <Flex justify={"center"} align={"center"} gap={2}>
        <Input
          bg="#FFFFFF"
          border="1px solid rgba(3, 201, 136, 0.2)"
          borderRadius="20px"
          placeholder="Edit Weightage"
          _placeholder={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            color: "gray",
          }}
        />
        <Text
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={600}
          fontSize="12px"
          lineHeight="16px"
          textAlign="right"
          color="#04593D"
          opacity={0.64}
        >
          {percentage}%
        </Text>
      </Flex>
    </GridItem>
  );
};

export default SingleBox;