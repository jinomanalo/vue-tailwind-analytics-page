<template>
  <div
    tabindex="0"
    class="bg-white rounded-xl flex flex-col shadow-sm hover:shadow-blue-300/50 hover:shadow-lg transition ease-in-out duration-300 hover:cursor-pointer focus:shadow-blue-500/50 focus:shadow-lg"
  >
    <div class="p-4 flex-1">
      <h1 class="font-semibold flex items-center pb-3">
        <slot name="title">Title</slot>

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
      </h1>

      <div class="flex items-center">
        <div
          class="flex items-center text-white rounded-full text-xs pl-3 pr-2 py-1 flex-shrink"
          :class="[props.percentagePillColor]"
        >
          <slot name="percentage">0%</slot>

          <span>
            <svg
              v-if="props.isIncrease === true"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
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
              class="h-4 w-4"
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
          </span>
        </div>
        <div class="flex-1 text-right flex flex-col space-y-3">
          <div>
            <h2 class="text-xs font-medium text-gray-400">
              <slot name="figure-1-header"></slot>
            </h2>
            <div class="font-semibold text-lg">
              <span class="text-orange-400 mr-2">
                <slot name="figure-1-unit"></slot>
              </span>

              <slot name="figure-1-amount">0</slot>
            </div>
          </div>
          <div>
            <h2 class="text-xs font-medium text-gray-400">
              <slot name="figure-2-header"></slot>
            </h2>
            <div class="font-semibold text-lg">
              <span class="text-orange-400 mr-2">
                <slot name="figure-2-unit"></slot>
              </span>

              <slot name="figure-2-amount">0</slot>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="p-4 flex items-center">
      <h2 class="text-xs font-medium text-gray-400">
        <slot name="footer-label"></slot>
      </h2>
      <div class="flex-1 text-right text-gray-400 text-xs">
        <span class="text-orange-400 mr-2">
          <slot name="footer-unit"></slot>
        </span>

        <slot name="footer-amount"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  percentagePillColor: String,
  isIncrease: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
