import { defineStore } from "pinia";
import axios from "axios";
import request from "../router/requests";

export const useAcquisitionStore = defineStore("acquisition", {
  state: () => {
    return {
      data: {
        percentage: "20%",
        is_increase: true,
        figure_one: {
          title: "Registered Users",
          amount: "285",
        },
        figure_two: {
          title: "Daily Average",
          amount: "57",
        },
        footer: {
          title: "20% decrease in 30 days",
        },
      },
    };
  },
  actions: {
    async load() {
      if (request.ACQUISITION.load) {
        const response = await axios.get(request.ACQUISITION.load);
        this.data = response.data;
        return;
      }
    },
  },
});
