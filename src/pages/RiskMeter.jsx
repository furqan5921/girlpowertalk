import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Introduction from "../components/Introduction";
import CheckBoxes from "../components/CheckBoxes";
import Meter from "../components/Meter";

const initialData = {
  heading: "Risk Meter",
  details:
    "Your website is often the face of your brand. It is where you present your products and services and how you build brand awareness and trust. However, in today’s fast-paced digital world, risks are commonplace. So, it is critical to implement certain website maintenance practices to help reduce your risk. Calculate yours now:",
  data: [
    {
      id: 1,
      key: "Core Web Vitals",
      percentage: 12.5,
    },
    {
      id: 2,
      key: "Optimized Codes",
      percentage: 12.5,
    },
    {
      id: 3,
      key: "SEO Friendly Website",
      percentage: 12.5,
    },
    {
      id: 4,
      key: "Efficient Browser caching",
      percentage: 12.5,
    },
    {
      id: 5,
      key: "Server Security",
      percentage: 12.5,
    },
    {
      id: 6,
      key: "Crawling and Indexing",
      percentage: 12.5,
    },
    {
      id: 7,
      key: "User Interaction",
      percentage: 12.5,
    },
    {
      id: 8,
      key: "Large Network Payload",
      percentage: 12.5,
    },
  ],
};
function calculateTotalPercentage(data) {
  const totalPercentage = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.percentage;
  }, 0);
  return totalPercentage;
}
const RiskMeter = () => {
  const [data, setData] = useState(initialData);
  const [totalPercentage, setTotalPercentage] = useState(
    calculateTotalPercentage(initialData.data)
  );
  const updatePercentage = (value) => {
    setTotalPercentage(value);
  };
  const updatePercentageById = (id, percentage) => {
    setData((prevData) => {
      const updatedData = prevData.data.map((item) => {
        if (item.id === id) {
          return { ...item, percentage: percentage };
        }
        return item;
      });
      return { ...prevData, data: updatedData };
    });
  };
  console.log(totalPercentage);
  console.log(data.data);
  return (
    <Box>
      <Introduction heading={data.heading} details={data.details} />
      <CheckBoxes
        updatePercentage={updatePercentage}
        data={data.data}
        totalPercentage={totalPercentage}
        updatePercentageById={updatePercentageById}
      />
      <Meter totalPercentage={totalPercentage} />
    </Box>
  );
};

export default RiskMeter;
