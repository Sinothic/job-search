<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex flex-row justify-between items-center h-full px-8">
      <div v-if="onJobResultPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span> <span class="text-brand-green-1">1653</span> jobs matched </span>
      </div>
      <div class="flex flex-row gap-9 items-center h-full">
        <span>Saved jobs</span>
        <span>Job alert</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultPage: true,
    };
  },
};
</script>

<style></style>
