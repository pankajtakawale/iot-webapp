import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'TCP',
        uv: 4000,
    },
    {
        name: 'UDP',
        uv: 3000,
    },
];

const Chart = ({data, color}) => {
    return (
        <div style={{width: "500px", height:"400px"}} >
            <BarChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" name="name"/>
                <YAxis />
                <Tooltip />
                <Legend name="name"/>
                <Bar dataKey="count" fill={color} />
            </BarChart>
        </div>
    );

}
export default Chart;

