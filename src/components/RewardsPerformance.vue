<template>
  <CardPanel>
    <template #header>
      <div class="flex-1 flex items-center py-2">
        Rewards Performance
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
    </template>
    <template #body>
      <table class="w-full">
        <thead>
          <tr class="text-left text-gray-400 text-xs lg:text-sm">
            <th class="font-normal pl-3 lg:pl-6 pr-3 py-3"></th>
            <th class="font-normal px-3 py-3">Badge</th>
            <th class="font-normal px-3 py-3">
              Total Sales ( <span class="text-orange-400">₱</span> )
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(reward, index) in rewardsPerformanceStore.data"
            :key="index"
            :tabindex="index"
            class="text-xs lg:text-sm transition ease-in-out duration-200 hover:bg-sky-50 focus:bg-sky-100 border-b-2 border-gray-100 last:border-0"
          >
            <td class="pl-3 lg:pl-6 pr-3 py-3">{{ reward.recordId }}.</td>
            <td class="px-3 py-3">{{ reward.name }}</td>
            <td class="px-3 py-3">{{ reward.totalSales }}</td>
            <td class="flex items-center justify-end px-3 py-3">
              {{ reward.percentage }}

              <svg
                v-if="reward.isIncrease === true"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-center lg:justify-end py-4">
        <Pagination :total="200" />
      </div>
    </template>
  </CardPanel>
</template>

<script setup>
import CardPanel from "../components/CardPanel.vue";
import Pagination from "../components/Pagination.vue";
import { useRewardsPerformanceStore } from "../stores/rewards_performance";

const rewardsPerformanceStore = useRewardsPerformanceStore();
</script>

<style></style>
