import { Checkbox, Text, Flex, GridItem, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import CautionIcon from "../assets/cautionIcon.png";
import toast, { Toaster } from "react-hot-toast";
const SingleBox = ({
  value,
  percentage,
  id,
  isChecked,
  updateById,
  totalPercentage,
}) => {
  const [checked, setChecked] = useState(isChecked);
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const inputValue = Number(e.target.value);
      const accumulatedPercentage = totalPercentage - percentage + inputValue;
      console.log("Accumulated", accumulatedPercentage);
      if (accumulatedPercentage > 100) {
        toast.error("Weightage cannot exceed 100%");
        return;
      }
      updateById(id, inputValue, checked);
      toast.success("Weightage has been updated");
      setInputValue("");
    }
  };
  const handleChecked = (e) => {
    setChecked(e.target.checked);
    updateById(id, percentage, e.target.checked);
  };
  console.log(percentage);
  return (
    <GridItem
      background="rgba(221, 225, 237, 0.24)"
      border="1px solid rgba(3, 201, 136, 0.2)"
      borderRadius="17px"
      boxSizing="border-box"
      p={4}
    >
      <Flex justify={"flex-end"}>
        <Image _hover={{ cursor: "pointer" }} p={"1rem"} src={CautionIcon} />
      </Flex>
      <Checkbox
        onChange={handleChecked}
        colorScheme="green"
        p={"1rem"}
        size={"lg"}
        isChecked={checked}
        onKeyPress={handleKeyPress}
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
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
        <Toaster />
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
