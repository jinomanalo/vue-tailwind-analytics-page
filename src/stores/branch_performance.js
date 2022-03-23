import { defineStore } from "pinia";
import axios from "axios";
import request from "../router/requests";

export const useBranchPerformanceStore = defineStore("branchPerformance", {
  state: () => {
    return {
      data: {
        total: 100,
        items: [
          {
            recordId: 1,
            name: "Makati",
            totalSales: "5,000.00",
            percentage: "20%",
            isIncrease: true,
          },
          {
            recordId: 2,
            name: "BGC Taguig",
            totalSales: "4,000.00",
            percentage: "10.52%",
            isIncrease: true,
          },
          {
            recordId: 3,
            name: "Mall of Asia, Pasay",
            totalSales: "3,000.00",
            percentage: "8.39%",
            isIncrease: true,
          },
          {
            recordId: 4,
            name: "Quezon City",
            totalSales: "2,000.00",
            percentage: "5%",
            isIncrease: false,
          },
          {
            recordId: 5,
            name: "Greenhills",
            totalSales: "1,000.00",
            percentage: "2%",
            isIncrease: true,
          },
        ],
      },
    };
  },
  actions: {
    async load() {
      if (request.BRANCH_PERFORMANCE.load) {
        const response = await axios.get(request.BRANCH_PERFORMANCE.load);
        this.data = response.data;
        return;
      }
    },
  },
});
