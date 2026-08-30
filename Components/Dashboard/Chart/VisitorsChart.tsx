"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "شنبه", views: 120 },
  { day: "یکشنبه", views: 180 },
  { day: "دوشنبه", views: 150 },
  { day: "سه‌شنبه", views: 230 },
  { day: "چهارشنبه", views: 190 },
  { day: "پنجشنبه", views: 280 },
  { day: "جمعه", views: 320 },
];

export default function VisitorsChart() {
  return (
    <div className="w-full rounded-2xl border border-(--border) bg-(--surface) p-5">
      <div className="mb-6">
        <h2 className="text-[14px] font-bold">
          بازدیدهای اخیر
        </h2>

        <p className="mt-1 text-[12px] text-(--muted)">
          تعداد بازدید سایت در ۷ روز اخیر
        </p>
      </div>

      <div className="h-[30svh] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="viewsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--primary)"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="var(--primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--muted)",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                direction: "rtl",
              }}
              labelStyle={{
                color: "var(--font-color)",
              }}
              formatter={(value) => [
                `${value} بازدید`,
                "بازدید",
              ]}
            />

            <Area
              type="monotone"
              dataKey="views"
              stroke="var(--primary)"
              strokeWidth={2}
              fill="url(#viewsGradient)"
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}