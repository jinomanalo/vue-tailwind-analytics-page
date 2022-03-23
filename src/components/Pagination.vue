<template>
  <div class="max-w-xs text-xs lg:text-sm flex items-center space-x-2">
    <div class="flex items-center space-x-2">
      <!-- < -->
      <div
        @click="usePrev"
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        :class="{ 'cursor-not-allowed': highlightedPage <= 1 }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <!-- 1 -->
      <div
        v-if="pageOffset > 0"
        @click="usePrev(event, props.total)"
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        :class="{ 'cursor-not-allowed': highlightedPage <= 1 }"
      >
        <span class="flex-1">1</span>
      </div>

      <!-- << -->
      <div
        v-if="pageOffset > 0"
        @click="usePrev(event, skipStep)"
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        :class="{ 'cursor-not-allowed': highlightedPage <= 1 }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </div>

      <!-- Pages -->
      <div
        v-for="(item, i) in activePages.current"
        :key="i"
        class="w-5 h-5 text-center flex items-center hover:text-sky-400 hover:cursor-pointer"
        :class="[
          highlightedPage === item
            ? 'text-sky-500 font-semibold'
            : ' text-slate-900',
        ]"
      >
        <span class="flex-1">
          {{ item }}
        </span>
      </div>

      <!-- >> -->
      <div
        v-if="lastActivePage < props.total"
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        @click="useNext(event, skipStep)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </div>

      <!-- Total -->
      <div
        v-if="lastActivePage < props.total"
        @click="useNext(event, props.total)"
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        :class="{ 'cursor-not-allowed': highlightedPage <= 1 }"
      >
        <span class="flex-1">{{ props.total }}</span>
      </div>

      <!-- > -->
      <div
        class="w-5 h-5 text-center flex items-center text-slate-900 hover:text-sky-400 hover:cursor-pointer"
        @click="useNext"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 p-1 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 5,
  },
  offset: {
    type: Number,
    default: 0,
  },
});

const skipStep = ref(5);
const offsetToHighlight = ref(3);
const pageLimit = ref(5);
const pageOffset = ref(0);
const highlightedPage = ref(1);

const activePages = computed(() => {
  const items = {
    first: 1,
    current: [],
    last: props.total,
  };

  const start = pageOffset.value + 1;
  const tmpTotal = pageOffset.value + pageLimit.value;
  for (let i = start; i <= tmpTotal; i++) {
    items.current.push(i);
  }

  return items;
});

const firstActivePage = computed(() => {
  let currentPages = activePages.value.current;
  return currentPages[0];
});

const lastActivePage = computed(() => {
  let currentPages = activePages.value.current;
  return currentPages[currentPages.length - 1];
});

const usePrev = (event, decrement = 1) => {
  // Jump to First
  if (decrement === props.total) {
    pageOffset.value = 0;
    highlightedPage.value = 1;
    return;
  }

  // Jump to the left by 5
  if (decrement === skipStep.value) {
    if (firstActivePage.value - decrement < 1) {
      pageOffset.value -= pageOffset.value;
      highlightedPage.value = 1;
      return;
    }
    highlightedPage.value -= decrement;
    pageOffset.value = highlightedPage.value - offsetToHighlight.value;
    return;
  }

  // Pan activePages to the right
  if (
    highlightedPage.value - 2 === firstActivePage.value &&
    firstActivePage.value > 1
  ) {
    pageOffset.value--;
  }

  // Hightlight the main active page
  if (highlightedPage.value > 1) {
    highlightedPage.value--;
  }
};

const useNext = (event, increment = 1) => {
  // Jump to Last
  if (increment === props.total) {
    pageOffset.value = props.total - pageLimit.value;
    highlightedPage.value = increment;
    return;
  }

  // Jump to the right by 5
  if (increment === skipStep.value) {
    if (lastActivePage.value + increment > props.total) {
      pageOffset.value += props.total - pageLimit.value - pageOffset.value;
      highlightedPage.value = props.total;
      return;
    }
    highlightedPage.value += increment;
    pageOffset.value = highlightedPage.value - offsetToHighlight.value;
    return;
  }

  // Pan activePages to the right
  if (
    highlightedPage.value + 2 === lastActivePage.value &&
    lastActivePage.value < props.total
  ) {
    pageOffset.value++;
  }

  // Hightlight the main active page
  if (highlightedPage.value < props.total) {
    highlightedPage.value++;
  }
};
</script>

<style></style>
