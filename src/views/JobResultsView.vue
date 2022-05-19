<template>
  <div class="flex flex-row flex-nowrap w-full h-screen">
    <job-filter-sidebar />
    <job-listing />
  </div>
</template>
<script>
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebar.vue";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
    JobListing,
  },
};
</script>
