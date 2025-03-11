import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", cpu: 30 },
  { time: "10:10", cpu: 60 },
  { time: "10:20", cpu: 20 }
];

export default function CPUUsageGraph() {
  return (
    <div style={{ width: "100%", height: "400px", padding: "10px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "8px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255, 255, 255, 0.2)" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="white" />
          <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} stroke="white" />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "white" }} />
          <Line type="monotone" dataKey="cpu" stroke="cyan" strokeWidth={3} dot={{ r: 6, fill: "cyan" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
