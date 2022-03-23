<template>
  <Card
    percentagePillColor="bg-purple-400"
    :isIncrease="rewardsProgramStore.data.is_increase"
  >
    <template #title>Rewards Program</template>
    <template #percentage>{{ rewardsProgramStore.data.percentage }}</template>

    <template #figure-1-header>
      {{ rewardsProgramStore.data.figure_one.title }}
    </template>
    <template #figure-1-amount>
      {{ rewardsProgramStore.data.figure_one.amount }}
    </template>

    <template #figure-2-header>
      {{ rewardsProgramStore.data.figure_two.title }}
    </template>
    <template #figure-2-amount>
      {{ rewardsProgramStore.data.figure_two.amount }}
    </template>

    <template #footer-label>
      {{ rewardsProgramStore.data.footer.title }}
    </template>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { useRewardsProgramStore } from "../stores/rewards_program";

const rewardsProgramStore = useRewardsProgramStore();
onMounted(() => {
  rewardsProgramStore.load();
});
</script>

<style></style>
