import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
      isChecked: false,
    },
    {
      id: 2,
      key: "Optimized Codes",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 3,
      key: "SEO Friendly Website",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 4,
      key: "Efficient Browser caching",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 5,
      key: "Server Security",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 6,
      key: "Crawling and Indexing",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 7,
      key: "User Interaction",
      percentage: 12.5,
      isChecked: false,
    },
    {
      id: 8,
      key: "Large Network Payload",
      percentage: 12.5,
      isChecked: false,
    },
  ],
};

const RiskMeter = () => {
  const [data, setData] = useState({});
  const [totalPercentage, setTotalPercentage] = useState(0);
  const getData = (data) => {
    setData(data);
    const accumulatedPercentage = data.data.reduce((accumulator, item) => {
      if (!item.isChecked) {
        return accumulator + item.percentage;
      }
      return accumulator;
    }, 0);
    console.log(accumulatedPercentage);
    setTotalPercentage(accumulatedPercentage);
  };
  const updateById = (id, newPercentage, checked) => {
    const updatedData = data.data.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          percentage: newPercentage,
          isChecked: checked,
        };
      }
      return el;
    });

    const newData = {
      ...data,
      data: updatedData,
    };
    getData(newData);
  };

  useEffect(() => {
    getData(initialData);
  }, []);
  console.log(data);
  return (
    <Box>
      <Introduction heading={data.heading} details={data.details} />
      <CheckBoxes
        updateById={updateById}
        data={data.data}
        totalPercentage={totalPercentage}

      />
      <Meter totalPercentage={totalPercentage} />
    </Box>
  );
};

export default RiskMeter;
