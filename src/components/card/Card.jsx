import React, { useState } from "react";
import "./Card.css";

import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RxCross2 } from "react-icons/rx";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpended] = useState(false);
  return (
    <LayoutGroup>
      <motion.div layout>
        {expanded ? (
          <ExpandedCard param={props} setExpended={() => setExpended(false)} />
        ) : (
          <CompactCard param={props} setExpended={() => setExpended(true)} />
        )}
      </motion.div>
    </LayoutGroup>
  );
};
//compact Card
const CompactCard = ({ param, setExpended }) => {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpended}
      layoutRoot="expandaleCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};
//expanded Card
const ExpandedCard = ({ param, setExpended }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2025-02-30T00:00:00.000Z",
          "2025-02-30T01:00:00.000Z",
          "2025-02-30T02:00:00.000Z",
          "2025-02-30T03:00:00.000Z",
          "2025-02-30T04:00:00.000Z",
          "2025-02-30T05:00:00.000Z",
          "2025-02-30T06:00:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutRoot="expandaleCard"
    >
      <div
        style={{
          alignSelf: "flex-end",
          cursor: "pointer",
          color: "white",
        }}
      >
        <RxCross2 onClick={setExpended} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};
export default Card;
