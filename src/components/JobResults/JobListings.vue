<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol class="max-w-5xl mx-auto">
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
        class="border border-brand-gray-1 rounded"
      />
    </ol>

    <div class="flex flex-row justify-between max-w-5xl mx-auto">
      <div>
        <p class="text-sm">Page {{ currentPage }}</p>
      </div>
      <div class="flex items-center justify-center gap-2">
        <router-link
          v-if="previousPage"
          class="text-sm font-semibold text-brand-blue-1"
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          data-test="previous-page-link"
          >Previous</router-link
        >
        <router-link
          v-if="nextPage"
          class="text-sm font-semibold text-brand-blue-1"
          :to="{ name: 'JobResults', query: { page: nextPage } }"
          data-test="next-page-link"
          >Next</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { FETCH_JOBS, FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },

  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(
        this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10
      );
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstIndexJob = (pageNumber - 1) * 10;
      const lastIndexJob = pageNumber * 10;
      return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(
        firstIndexJob,
        lastIndexJob
      );
    },
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>

<style></style>
