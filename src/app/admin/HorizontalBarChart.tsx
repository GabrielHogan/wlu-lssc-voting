// "use client";

// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/Card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/Chart";
// import { FC } from "react";

// // const chartData = [
// //   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
// //   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// //   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
// //   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
// //   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// // ];

// interface HorizontalBarChartrops {
//   title: string;
//   description: string;
//   data: {
//     name: string;
//     value: number;
//     fill: string;
//   }[];
//   config: ChartConfig;
// }

// const HorizontalBarChart: FC<HorizontalBarChartrops> = ({
//   title,
//   description,
//   data,
//   config,
// }) => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={config}>
//           <BarChart
//             accessibilityLayer
//             data={data}
//             layout="vertical"
//             margin={{
//               left: 0,
//             }}
//           >
//             <YAxis
//               dataKey="name"
//               type="category"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               // tickFormatter={(value) =>
//               //   config[value as keyof typeof config]?.label
//               // }
//             />
//             <XAxis dataKey="visitors" type="number" hide />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Bar dataKey="visitors" layout="vertical" radius={5} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       {/* <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter> */}
//     </Card>
//   );
// };

// export default HorizontalBarChart;
