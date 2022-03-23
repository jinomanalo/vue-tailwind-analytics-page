<template>
  <Card
    percentagePillColor="bg-green-400"
    :isIncrease="engagementStore.data.is_increase"
  >
    <template #title>Engagement</template>
    <template #percentage>{{ engagementStore.data.percentage }}</template>

    <template #figure-1-header>
      {{ engagementStore.data.figure_one.title }}
    </template>
    <template #figure-1-amount>
      {{ engagementStore.data.figure_one.amount }}
    </template>

    <template #figure-2-header>
      {{ engagementStore.data.figure_two.title }}
    </template>
    <template #figure-2-amount>
      {{ engagementStore.data.figure_two.amount }}
    </template>

    <template #footer-label>
      {{ engagementStore.data.footer.title }}
    </template>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { useEngagementStore } from "../stores/engagement";

const engagementStore = useEngagementStore();
onMounted(() => {
  engagementStore.load();
});
</script>

<style></style>
