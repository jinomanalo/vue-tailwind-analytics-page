<template>
  <div>
    <NavBar />

    <div class="m-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Sales />
      <Engagement />
      <Acquisition />
      <RewardsProgram />
    </div>

    <div
      class="m-4 flex md:items-center flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2"
    >
      <Listbox :options="filterOneOptions" />
      <Listbox :options="filterTwoOptions">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </template>
      </Listbox>
    </div>

    <div class="m-4">
      <SalesOverview />
    </div>
    <div class="m-4 grid gap-4 grid-cols-1 lg:grid-cols-2">
      <BranchPerformance />
      <RewardsPerformance />
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import Listbox from "../components/Listbox.vue";

import Sales from "../components/Sales.vue";
import Engagement from "../components/Engagement.vue";
import Acquisition from "../components/Acquisition.vue";
import RewardsProgram from "../components/RewardsProgram.vue";

import SalesOverview from "../components/SalesOverview.vue";
import BranchPerformance from "../components/BranchPerformance.vue";
import RewardsPerformance from "../components/RewardsPerformance.vue";

const filterOneOptions = [
  { id: 1, title: "Last 7 Days", unavailable: false },
  { id: 2, title: "Today", unavailable: false },
  { id: 3, title: "Tomorrow", unavailable: false },
];

//DISCLAIMER: This is just a placeholder. A Datepicker component is more suitable.
const filterTwoOptions = [
  { id: 1, title: "1 Jan 2019 - 7 Jan 2019", unavailable: false },
];
</script>

<style></style>
