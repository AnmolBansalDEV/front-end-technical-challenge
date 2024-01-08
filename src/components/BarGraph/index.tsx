import { FC } from "react";

import { ResponsiveBar } from "@nivo/bar";

type Data = Record<string, number | string>[];

type Props = {
  data: Data;
};

const BarGraph: FC<Props> = ({ data }) => {
  // @ts-expect-error: types are not added by Nivo yet
  const toolTipComponent = ({ id, value, color }) => {
    return (
      <div
        style={{
          padding: 12,
          color,
          background: "#222222",
        }}
      >
        <strong>
          {id}: {`${(value * 100).toFixed(2)}%`}
        </strong>
      </div>
    );
  };

  return (
    <ResponsiveBar
      data={data}
      enableGridX={true}
      label={({ value }) => `${(Number(value) * 100).toFixed(2)}%`}
      tooltip={toolTipComponent}
      axisBottom={{
        format: (value) => `${Number(value) * 100}%`,
      }}
      keys={["SepalLengthCm", "SepalWidthCm", "PetalLengthCm", "PetalWidthCm"]}
      colors={["#17aa50", "#fbaf1d", "#f05161", "#08dada"]}
      colorBy="id"
      groupMode="grouped"
      borderRadius={5}
      innerPadding={2}
      layout="horizontal"
      indexBy="origin"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "feature_list",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 3]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top",
          direction: "row",
          itemsSpacing: 5,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 15,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Model Bar graph"
    />
  );
};

export type { Props as BarGraphProps, Data as BarGraphData };

export default BarGraph;
