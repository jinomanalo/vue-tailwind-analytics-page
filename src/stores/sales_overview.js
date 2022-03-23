import { defineStore } from "pinia";
import axios from "axios";
import request from "../router/requests";

export const useSalesOverviewStore = defineStore("salesOverview", {
  state: () => {
    return {
      data: {
        sales: "Php 10,000.00",
        revenue: "Php 10,000.00",
        generated_points: "1000 Points",
        used_points: "1000 Points",
        chart_data: [
          { x: "Aug 1", sales: 1000, revenue: 4000 },
          { x: "Aug 2", sales: 2000, revenue: 5000 },
          { x: "Aug 3", sales: 3000, revenue: 6000 },
          { x: "Aug 4", sales: 7000, revenue: 6000 },
        ],
        chart_labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4"],
      },
    };
  },
  actions: {
    async load() {
      if (request.SALES_OVERVIEW.load) {
        const response = await axios.get(request.SALES_OVERVIEW.load);
        this.data = response.data;
        return;
      }
    },
  },
});
