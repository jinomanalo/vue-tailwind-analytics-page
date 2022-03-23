import { defineStore } from "pinia";
import axios from "axios";
import request from "../router/requests";

export const useRewardsProgramStore = defineStore("rewardsProgram", {
  state: () => {
    return {
      data: {
        percentage: "20%",
        is_increase: true,
        figure_one: {
          title: "Rewards Redeemed",
          amount: "285",
        },
        figure_two: {
          title: "Issued Rewards",
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
      if (request.REWARDS_PROGRAM.load) {
        const response = await axios.get(request.REWARDS_PROGRAM.load);
        this.data = response.data;
        return;
      }
    },
  },
});
