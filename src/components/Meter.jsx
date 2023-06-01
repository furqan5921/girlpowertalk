import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import meterIcon from "../assets/meterIcon.png";
import { BsArrowRightShort } from "react-icons/bs";
const Meter = ({ totalPercentage }) => {
  return (
    <Box mt={"2rem"} px={{ base: "2rem", md: "5rem" }}>
      <Flex justify={"space-between"}>
        <Text
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={700}
          fontSize="20px"
          lineHeight="29px"
          letterSpacing="-0.561998px"
          color="#262626"
        >
          High
        </Text>
        <Text
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={700}
          fontSize="20px"
          lineHeight="29px"
          letterSpacing="-0.561998px"
          color="#262626"
        >
          Medium
        </Text>
        <Text
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={700}
          fontSize="20px"
          lineHeight="29px"
          letterSpacing="-0.561998px"
          color="#262626"
        >
          Low
        </Text>
      </Flex>
      <Box
        background="linear-gradient(90deg, #96ECB9 0%, #ECD978 31.63%, #F5BF8C 63.78%, #F27E7E 99.56%)"
        borderRadius="50px"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
        h={"45px"}
        mt={"1rem"}
      >
        <Image
          pl={{
            base: `${totalPercentage - 3}%`,
            md: `${totalPercentage - 1}%`,
          }}
          src={meterIcon}
          alt="Meter Icon"
        />
      </Box>
      <Flex justify={"center"} align={"center"} gap={1} mt={"1rem"}>
        <Button
          fontFamily="IBM Plex Sans"
          fontStyle="normal"
          fontWeight={300}
          fontSize="20px"
          lineHeight="29px"
          letterSpacing="-0.561998px"
          color="#262626"
          variant={"link"}
        >
          Check Detailed Checklist
        </Button>
        <Icon fontSize={20} as={BsArrowRightShort} />
      </Flex>
    </Box>
  );
};

export default Meter;
