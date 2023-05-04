import { Pie } from "@ant-design/plots";
import { useEffect } from "react";
import useStore from "../store/store";
import Loading from "../components/loading";
import styled from "styled-components";
import React from "react";

const ChartWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  > div {
    flex-grow: 1;
  }
`;

const ChartComponent: React.FC = () => {
  const { getChartData, chartData, loading } = useStore();

  useEffect(() => {
    getChartData();
  }, []);

  const config = {
    appendPadding: 20,
    data: chartData,
    maintainAspectRatio: false,
    angleField: "population",
    colorField: "city",
    radius: 1,
    label: {
      type: "inner",
      content: "{name} - {percentage}",
    },
    interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
  };

  if (loading) return <Loading />;

  return (
    <ChartWrapper>
      <Pie {...config} />
    </ChartWrapper>
  );
};

export default ChartComponent;
