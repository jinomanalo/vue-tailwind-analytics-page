import { defineStore } from "pinia";
import axios from "axios";
import request from "../router/requests";

export const useSalesStore = defineStore("sales", {
  state: () => {
    return {
      data: {
        percentage: "20%",
        is_increase: true,
        figure_one: {
          title: "Lifetime Sales",
          currency: "₱",
          amount: "175,000",
        },
        figure_two: {
          title: "Revenue Sales",
          currency: "₱",
          amount: "170,000",
        },
        footer: {
          title: "Average Order Value",
          currency: "₱",
          amount: "1,000.00",
        },
      },
    };
  },
  actions: {
    async load() {
      if (request.SALES.load) {
        const response = await axios.get(request.SALES.load);
        this.data = response.data;
        return;
      }
    },
  },
});
