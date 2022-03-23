<template>
  <Card
    percentagePillColor="bg-orange-400"
    :isIncrease="acquisitionStore.data.is_increase"
  >
    <template #title>Acquisition</template>
    <template #percentage>{{ acquisitionStore.data.percentage }}</template>

    <template #figure-1-header>
      {{ acquisitionStore.data.figure_one.title }}
    </template>
    <template #figure-1-amount>
      {{ acquisitionStore.data.figure_one.amount }}
    </template>

    <template #figure-2-header>
      {{ acquisitionStore.data.figure_two.title }}
    </template>
    <template #figure-2-amount>
      {{ acquisitionStore.data.figure_two.amount }}
    </template>

    <template #footer-label>
      {{ acquisitionStore.data.footer.title }}
    </template>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { useAcquisitionStore } from "../stores/acquisition";

const acquisitionStore = useAcquisitionStore();
onMounted(() => {
  acquisitionStore.load();
});
</script>

<style></style>
