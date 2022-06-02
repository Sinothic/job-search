<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex flex-row flex-1 justify-between items-center h-full px-8">
      <div v-if="onJobResultPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched
        </span>
      </div>
      <div class="flex flex-row gap-9 items-center justify-end flex-1 h-full">
        <span>Saved jobs</span>
        <span>Job alert</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "SubNav",
  setup() {
    const route = useRoute();
    const onJobResultPage = computed(() => route.name === "JobResults");

    const store = useStore();
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    return { onJobResultPage, FILTERED_JOBS };
  },
};
</script>

<style></style>
