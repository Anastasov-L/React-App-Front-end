"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart } from "recharts"

const Demo1 = () => {
  const chart = useChart({
    data: [
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 4 },
      { value: 7 },
      { value: 10 },
      { value: 8 },
      { value: 14 },
      { value: 13 },
      { value: 33 },
      { value: 26 },
      { value: 36 },
      { value: 26 },
      { value: 33 },
      { value: 26 },
      { value: 26 },
      { value: 27 },
    ],
    series: [{ name: "value",  color: "#7BBD67" }],
  })

  return (
    <Chart.Root width="100%" height="90%" chart={chart}>
      <AreaChart accessibilityLayer data={chart.data}>
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: "0%", color: item.color, opacity: 1 },
                { offset: "100%", color: item.color, opacity: 0.01 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            key={item.name}
            type="natural"
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={`url(#${item.name}-gradient)`}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
export default Demo1