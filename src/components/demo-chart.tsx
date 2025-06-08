"use client"

import { Box} from "@chakra-ui/react"
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { type: "Jan", "Listings Removed": 5000, "Notices Rejected": 1000, "Notices Sent": 6000 },
  { type: "Feb", "Listings Removed": 4200, "Notices Rejected": 800, "Notices Sent": 5000 },
  { type: "Mar", "Listings Removed": 4350, "Notices Rejected": 800, "Notices Sent": 5150 },
  { type: "Apr", "Listings Removed": 3500, "Notices Rejected": 800, "Notices Sent": 4200 },
  { type: "May", "Listings Removed": 3950, "Notices Rejected": 500, "Notices Sent": 4500 },
  { type: "Jun", "Listings Removed": 4800, "Notices Rejected": 500, "Notices Sent": 5200 },
  { type: "Jul", "Listings Removed": 5000, "Notices Rejected": 800, "Notices Sent": 5800 },
  { type: "Aug", "Listings Removed": 5500, "Notices Rejected": 500, "Notices Sent": 6000 },
  { type: "Sep", "Listings Removed": 5200, "Notices Rejected": 200, "Notices Sent": 5300 },
  { type: "Oct", "Listings Removed": 4900, "Notices Rejected": 200, "Notices Sent": 5000 },
  { type: "Nov", "Listings Removed": 4650, "Notices Rejected": 200, "Notices Sent": 4800 },
  { type: "Dec", "Listings Removed": 4300, "Notices Rejected": 220, "Notices Sent": 4300 },
]

const Demo = () => {
  return (
    <Box w="98%" h="60%"  >
                  

      <ResponsiveContainer width="100%" height="140%">
        <BarChart data={data} barSize = {6} >
                      

        <Bar dataKey="Listings Removed" color = "black" fill="#D7F0FC" legendType = "circle"/>
          <Bar  dataKey="Notices Sent" fill="#CDEFD9" legendType = "circle"/>
          <Bar dataKey="Notices Rejected" fill="#FEA4A3" legendType = "circle" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/> {/*vertical false does not make vertical lines in the background of the chart*/}
          <XAxis dataKey="type" />
          <YAxis />
       
          
          <Legend align = "right" verticalAlign="top"  wrapperStyle={{ top: -22 }}  formatter={(value) => <span style={{ color: 'black', fontSize: '10px',        // change font size
      fontWeight: '600',       // boldness
      font: 'inter' }}>{value}</span>}/>
        </BarChart>
        
      </ResponsiveContainer>
    </Box>
  )
}

export default Demo
