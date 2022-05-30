<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex flex-row flex-1 justify-between items-center h-full px-8">
      <div v-if="onJobResultPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{
            FILTERED_JOBS_BY_ORGANIZATIONS.length
          }}</span>
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
import { mapGetters } from "vuex";
import { FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";

export default {
  name: "SubNav",
  computed: {
    onJobResultPage() {
      return this.$route.name == "JobResults";
    },
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
  },
};
</script>

<style></style>
