<template>
  <Card
    percentagePillColor="bg-indigo-400"
    :isIncrease="saleStore.data.is_increase"
  >
    <template #title>Sales</template>
    <template #percentage>{{ saleStore.data.percentage }}</template>

    <template #figure-1-header>
      {{ saleStore.data.figure_one.title }}
    </template>
    <template #figure-1-unit>
      {{ saleStore.data.figure_one.currency }}
    </template>
    <template #figure-1-amount>
      {{ saleStore.data.figure_one.amount }}
    </template>

    <template #figure-2-header>
      {{ saleStore.data.figure_two.title }}
    </template>
    <template #figure-2-unit>
      {{ saleStore.data.figure_two.currency }}
    </template>
    <template #figure-2-amount>
      {{ saleStore.data.figure_two.amount }}
    </template>

    <template #footer-label>
      {{ saleStore.data.footer.title }}
    </template>
    <template #footer-unit>
      {{ saleStore.data.footer.currency }}
    </template>
    <template #footer-amount>
      {{ saleStore.data.footer.amount }}
    </template>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { useSalesStore } from "../stores/sales";

const saleStore = useSalesStore();
onMounted(() => {
  saleStore.load();
});
</script>

<style></style>
