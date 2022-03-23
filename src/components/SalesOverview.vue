<template>
  <CardPanel>
    <template #header>
      <div
        class="flex-1 flex flex-col md:items-center md:flex-row space-y-2 space-x-0 md:space-y-0 md:space-x-2"
      >
        <div class="flex-1 flex items-center">
          Sales Overview
          <!-- Question Mark Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-300 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="flex items-center space-x-2">
          <Listbox :options="filterThreeOptions" />
          <Listbox :options="filterFourOptions" />
        </div>
      </div>
    </template>
    <template #body>
      <div class="px-4">
        <div class="flex flex-col md:flex-row md:items-center mb-6">
          <div class="flex-shrink mr-4">
            <span class="font-semibold text-normal lg:text-lg">Total:</span>
          </div>

          <div
            class="flex-1 grid grid-cols-2 gap-4 md:flex md:items-center md:space-x-4"
          >
            <div class="flex-shrink flex flex-col text-xs">
              <span>Sales</span>
              <span class="bg-indigo-400 text-white p-1 rounded-sm">
                {{ salesOverviewStore.data.sales }}
              </span>
            </div>
            <div class="flex-shrink flex flex-col text-xs">
              <span>Revenue</span>
              <span class="bg-green-400 text-white p-1 rounded-sm">
                {{ salesOverviewStore.data.revenue }}
              </span>
            </div>
            <div class="flex-shrink flex flex-col text-xs">
              <span>Generated Points</span>
              <span class="bg-purple-400 text-white p-1 rounded-sm">
                {{ salesOverviewStore.data.generated_points }}
              </span>
            </div>
            <div class="flex-shrink flex flex-col text-xs">
              <span>Used Points</span>
              <span class="bg-purple-400 text-white p-1 rounded-sm">
                {{ salesOverviewStore.data.used_points }}
              </span>
            </div>
          </div>
        </div>
        <BarChart v-bind="barChartProps" />
      </div>
    </template>
  </CardPanel>
</template>

<script setup>
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@tailwindConfig";

import { computed } from "vue";
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

import CardPanel from "../components/CardPanel.vue";
import Listbox from "../components/Listbox.vue";
import { useSalesOverviewStore } from "../stores/sales_overview";

const salesOverviewStore = useSalesOverviewStore();

const {
  theme: {
    colors: { green, indigo },
    fontFamily: { sans },
  },
} = resolveConfig(tailwindConfig);

Chart.register(...registerables);
Chart.defaults.font.family = sans.join(",");

const chartData = computed(() => ({
  labels: salesOverviewStore.data.chart_labels,
  datasets: [
    {
      label: "Sales",
      data: salesOverviewStore.data.chart_data,
      borderColor: indigo[400],
      backgroundColor: indigo[400],
      parsing: {
        yAxisKey: "sales",
      },
    },
    {
      label: "Revenue",
      data: salesOverviewStore.data.chart_data,
      borderColor: green[400],
      backgroundColor: green[400],
      parsing: {
        yAxisKey: "revenue",
      },
    },
  ],
}));

const { barChartProps, barChartRef } = useBarChart({
  chartData,
});

const filterThreeOptions = [
  { id: 1, title: "All Transactions", unavailable: false },
];
const filterFourOptions = [
  { id: 1, title: "All Branches", unavailable: false },
];
</script>

<style></style>
