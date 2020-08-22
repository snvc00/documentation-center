import React from "react";

import Tick from "./Tick.component";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function CustomChart(props) {
  return (
    <ResponsiveContainer
      width="100%"
      minHeight={350}
      maxHeight={350}
      margin={0}
    >
      <AreaChart
        data={props.data}
        margin={{ top: 5, right: 0, left: -50, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="15%"
              stopColor={props.primaryColor}
              stopOpacity={0.8}
            />
            <stop
              offset="85%"
              stopColor={props.secondaryColor}
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <XAxis tick={false} />
        <YAxis tick={<Tick />} />
        <CartesianGrid strokeWidth={0.5} />
        <Area
          type="monotone"
          animationDuration={2000}
          dataKey="y"
          stroke={props.primaryColor}
          fillOpacity={1}
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
