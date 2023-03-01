import {Container} from "./styles";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine } from "recharts";
import theme from "../../styles/theme"

const data = [
    {
        name: "Seg",
        km: 28,
        day: "Seg"
    },
    {
        name: "Ter",
        km: 55,
        day: "Ter"
    },
    {
        name: "Qua",
        km: 38,
        day: "Qua"
    },
    {
        name: "Qui",
        km: 30,
        day: "Qui"
    },
    {
        name: "Sex",
        km: 35,
        day: "Sex"
    },
    {
        name: "Sab",
        km: 18,
        day: "Sab"
    },
        {name: "Dom",
        km: 19,
        day: "Dom"
    }
]

export default function App() {
    return (
        <Container>
            <BarChart width={454} barSize={32} height={180} data={data} margin={{ top: 0, right: 0, left: -36, bottom: 0 }} padding={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="day" tickLine={false} axisLine={false}  />
                <YAxis tickLine={false} axisLine={false} domain={[0,60]} tickCount={4} />
                <ReferenceLine y={0} stroke="#000000" strokeWidth={.2}  />
                <Bar dataKey="km" fill={theme.COLORS.chart_green_100} />
            </BarChart>
        </Container>
    );
}