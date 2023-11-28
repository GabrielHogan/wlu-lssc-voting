"use client";

import { FC } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Vote } from "../app/types/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface ChartsProps {
  results: Vote[];
}

import { options } from "@/app/options";

const COLORS = [
  "#667eea",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ff4125",
  "#A0AEC0",
];

const Charts: FC<ChartsProps> = ({ results }) => {
  const optionIds = options.map((opt) => opt.id);

  const optionsData = optionIds.map((opt) => ({
    name: opt,
    value: results.filter((res) => res.option === opt).length,
  }));
  const optionsWinner = optionsData.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );

  const grades = [
    "First Year",
    "Sophomore",
    "Junior",
    "Senior",
    "1L",
    "2L",
    "3L",
  ];
  const gradeData = grades.map((opt) => ({
    name: opt,
    value: results.filter((res) => res.grade === opt).length,
  }));
  const gradeWinner = gradeData.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card className="">
          <CardHeader>
            <CardTitle>Results Distribution</CardTitle>
            <CardDescription>
              Looks like {optionsWinner.name} is winning!
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={optionsData}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label
                >
                  {optionsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend className="text-xs" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>
              Looks like {gradeWinner.name}’s are winning!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={gradeData}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label
                >
                  {gradeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend className="text-xs" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Charts;
