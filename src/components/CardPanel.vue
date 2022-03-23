<template>
  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
    <div
      class="bg-slate-50 px-4 py-3 font-semibold flex items-center space-x-2"
    >
      <slot name="header"></slot>
    </div>

    <div class="flex flex-col space-y-2">
      <div class="p-0 lg:px-4 lg:py-3">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
